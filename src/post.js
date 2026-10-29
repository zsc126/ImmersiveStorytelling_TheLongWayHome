// Post-processing: ambient occlusion → interaction outline → bloom → filmic tone map →
// a grade pass (split-tone, gentle chromatic fringe, vignette, film grain, dream wash).
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { GTAOPass } from 'three/examples/jsm/postprocessing/GTAOPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';

const GradeShader = {
  uniforms: { tDiffuse: { value: null }, uTime: { value: 0 }, uDream: { value: 0 }, uGlow: { value: 0 }, uRes: { value: new THREE.Vector2(1, 1) }, uGrain: { value: 1 } },
  vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
  fragmentShader: `
    uniform sampler2D tDiffuse; uniform float uTime; uniform float uDream; uniform float uGlow; uniform vec2 uRes; uniform float uGrain; varying vec2 vUv;
    float hash(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233))) * 43758.5453); }
    void main(){
      vec2 uv = vUv, d = uv - 0.5; float r2 = dot(d,d);
      // chromatic fringe toward the edges
      float ca = 0.0016 + uDream * 0.004;
      vec3 c = vec3(texture2D(tDiffuse, uv - d * ca * r2 * 4.0).r, texture2D(tDiffuse, uv).g, texture2D(tDiffuse, uv + d * ca * r2 * 4.0).b);
      // dream: a soft halo (cheap 8-tap blur) and a warm, washed-out memory
      if (uDream > 0.001) {
        vec3 b = vec3(0.0); float k = 0.006 + 0.01 * uDream;
        for (int i = 0; i < 8; i++) { float a = float(i) * 0.785; b += texture2D(tDiffuse, uv + vec2(cos(a), sin(a)) * k).rgb; }
        b /= 8.0;
        c = mix(c, max(c, b * 1.15), uDream * 0.8);
        float l = dot(c, vec3(0.299,0.587,0.114));
        c = mix(c, vec3(l) * vec3(1.12, 1.0, 0.82) + 0.06, uDream * 0.55);
      }
      // split tone: teal shadows, warm highlights
      float lum = dot(c, vec3(0.299,0.587,0.114));
      c += (vec3(-0.012, 0.004, 0.022)) * (1.0 - smoothstep(0.0, 0.5, lum));
      c += (vec3(0.03, 0.012, -0.02)) * smoothstep(0.45, 1.0, lum);
      // gentle S-curve
      c = mix(c, c * c * (3.0 - 2.0 * c), 0.25);
      c += uGlow * 0.06 * vec3(1.0, 0.9, 0.7);
      // vignette
      float vig = smoothstep(0.85, 0.2, length(d * vec2(1.0, 0.85)) * (1.0 + uDream * 0.2));
      c *= mix(0.55, 1.0, vig);
      // film grain (luma-weighted)
      float g = hash(uv * uRes + fract(uTime * 37.0) * 100.0) - 0.5;
      c += g * 0.035 * uGrain * (1.0 - lum * 0.6);
      gl_FragColor = vec4(c, 1.0);
    }`,
};

export function makePost(renderer, scene, camera, quality) {
  const size = renderer.getDrawingBufferSize(new THREE.Vector2());
  const rt = new THREE.WebGLRenderTarget(size.x, size.y, { type: THREE.HalfFloatType, samples: quality === 'high' ? 4 : 2 });
  const composer = new EffectComposer(renderer, rt);
  const render = new RenderPass(scene, camera);
  composer.addPass(render);
  const gtao = new GTAOPass(scene, camera, size.x, size.y);
  gtao.updateGtaoMaterial({ radius: 0.5, distanceExponent: 1.4, thickness: 1.2, scale: 1.0, samples: 12, distanceFallOff: 1, screenSpaceRadius: false });
  gtao.updatePdMaterial({ lumaPhi: 10, depthPhi: 2, normalPhi: 3, radius: 6, rings: 2, samples: 12 });
  gtao.blendIntensity = 0.9;
  composer.addPass(gtao);
  // (the hover outline re-rendered the whole scene every frame; the label + crosshair now carry it)
  const outline = { selectedObjects: [] };
  const bloom = new UnrealBloomPass(new THREE.Vector2(size.x / 2, size.y / 2), 0.45, 0.55, 0.92);
  composer.addPass(bloom);
  composer.addPass(new OutputPass());
  const grade = new ShaderPass(GradeShader);
  composer.addPass(grade);

  const api = {
    composer, outline, bloom, gtao, grade, dream: 0, glow: 0,
    setCamera(cam) { render.camera = cam; gtao.camera = cam; },
    setQuality(q) {
      gtao.enabled = false;            // ambient occlusion is too costly for mid-range machines and headsets
      bloom.enabled = q === 'high';    // bulbs have their own halos, so medium/low look fine without bloom
      grade.uniforms.uGrain.value = 1;
    },
    setSize(w, h) { composer.setSize(w, h); grade.uniforms.uRes.value.set(w, h); },
    render(t) {
      grade.uniforms.uTime.value = t; grade.uniforms.uDream.value = api.dream; grade.uniforms.uGlow.value = api.glow;
      bloom.strength = 0.45 + api.dream * 0.6 + api.glow * 0.5;
      composer.render();
    },
  };
  api.setQuality(quality);
  return api;
}
