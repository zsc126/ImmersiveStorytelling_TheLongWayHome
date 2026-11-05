import * as THREE from 'three';

// One sky draw per eye: an actual sun disk and slowly moving procedural clouds.
// No screen-space lens flare, camera shake, or texture downloads.
export function makeSky(scene, sunDirection) {
  const material = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    depthWrite: false,
    fog: false,
    uniforms: {
      uTime: { value: 0 },
      uDay: { value: 0 },
      uBrightness: { value: 0.4 },
      uSun: { value: sunDirection.clone().normalize() },
    },
    vertexShader: `varying vec3 vDirection;
      void main(){ vDirection = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
    fragmentShader: `
      varying vec3 vDirection;
      uniform float uTime, uDay, uBrightness;
      uniform vec3 uSun;
      float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
      float noise(vec2 p){
        vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
        return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y);
      }
      float clouds(vec2 p){
        float f = 0.0, a = 0.55;
        for(int i=0;i<4;i++){ f += noise(p)*a; p = mat2(1.6,1.2,-1.2,1.6)*p; a *= 0.5; }
        return f;
      }
      void main(){
        vec3 d = normalize(vDirection);
        float height = smoothstep(-0.08, 0.85, d.y);
        vec3 day = mix(vec3(0.95,0.46,0.13), vec3(0.25,0.40,0.48), height);
        vec3 night = mix(vec3(0.12,0.095,0.09), vec3(0.018,0.031,0.055), height);
        vec3 sky = mix(night, day, uDay);
        // A dome projection avoids a seam and stays fixed in the world when looking around.
        vec2 p = d.xz / max(0.16, d.y + 0.28) * 2.5;
        float n = clouds(p + vec2(uTime * 0.008, uTime * 0.003));
        float cover = smoothstep(0.43, 0.72, n) * smoothstep(0.0, 0.18, d.y);
        vec3 cloudColor = mix(vec3(0.075,0.085,0.11), mix(vec3(0.69,0.43,0.23),vec3(1.0,0.81,0.54),n), uDay);
        sky = mix(sky, cloudColor, cover * 0.86);
        float alignment = dot(d, uSun);
        float halo = pow(max(0.0, alignment), 22.0);
        float disk = smoothstep(cos(0.022), cos(0.014), alignment);
        // Clouds veil the disk without erasing its recognizable shape.
        sky += vec3(1.0,0.48,0.12) * halo * 0.65 * uDay;
        sky += vec3(2.8,1.95,0.85) * disk * (1.0-cover*0.6) * uDay;
        gl_FragColor = vec4(sky * uBrightness, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,
  });
  const mesh = new THREE.Mesh(new THREE.SphereGeometry(70, 24, 16), material);
  mesh.renderOrder = -10;
  mesh.frustumCulled = false;
  scene.add(mesh);
  return {
    update(dt, time, a, center) {
      mesh.position.copy(center);
      const k = 1 - Math.exp(-dt * 0.9);
      material.uniforms.uTime.value = time;
      material.uniforms.uDay.value = THREE.MathUtils.lerp(
        material.uniforms.uDay.value,
        Math.min(1, (a.sun || 0) / 2),
        k,
      );
      material.uniforms.uBrightness.value = THREE.MathUtils.lerp(
        material.uniforms.uBrightness.value,
        a.sky ?? 1,
        k,
      );
    },
  };
}
