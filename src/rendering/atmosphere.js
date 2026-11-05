// World-space ground haze. One shared set of uniforms, no extra render passes,
// textures or lights: the same shader runs for each eye in WebXR.
import * as THREE from 'three';

export function makeAtmosphere() {
  const uniforms = {
    airTime: { value: 0 },
    airDensity: { value: 0.035 },
    airHeight: { value: 2.4 },
    airDrift: { value: 0.2 },
    airColor: { value: new THREE.Color(0x66513b) },
    airWarmth: { value: 0.15 },
    airSaturation: { value: 0.78 },
  };
  const installed = new WeakSet();
  const profiles = {
    sweatshop: [0.09, 3.2, 0.24, 0x8c7046, 0.22, 0.68],
    street: [0.075, 5.5, 0.48, 0xca8e4f, 0.48, 0.84],
    nightmare: [0.19, 3.0, 0.5, 0x58677e, -0.34, 0.55],
    door: [0.085, 2.6, 0.18, 0x987344, 0.27, 0.72],
    home: [0.045, 2.0, 0.08, 0x8a6237, 0.32, 0.82],
    void: [0, 1, 0, 0xeee4d1, 0, 1],
  };
  const tint = new THREE.Color();
  const doorTint = new THREE.Color(profiles.door[3]);
  return {
    install(root) {
      root.traverse((o) => {
        for (const m of Array.isArray(o.material) ? o.material : [o.material]) {
          if (!m || !m.fog || m.isShaderMaterial || installed.has(m)) continue;
          installed.add(m);
          const previous = m.onBeforeCompile;
          const cacheKey = m.customProgramCacheKey();
          m.onBeforeCompile = function (shader, renderer) {
            previous.call(this, shader, renderer);
            Object.assign(shader.uniforms, uniforms);
            shader.vertexShader = 'varying vec3 vAirWorld;\n' + shader.vertexShader;
            shader.vertexShader = shader.vertexShader.replace(
              '#include <project_vertex>',
              `
              #include <project_vertex>
              vec4 airWorld = vec4(transformed, 1.0);
              #ifdef USE_BATCHING
                airWorld = batchingMatrix * airWorld;
              #endif
              #ifdef USE_INSTANCING
                airWorld = instanceMatrix * airWorld;
              #endif
              vAirWorld = (modelMatrix * airWorld).xyz;
            `,
            );
            shader.fragmentShader =
              `varying vec3 vAirWorld;
              uniform float airTime, airDensity, airHeight, airDrift, airWarmth, airSaturation;
              uniform vec3 airColor;\n` + shader.fragmentShader;
            shader.fragmentShader = shader.fragmentShader.replace(
              '#include <fog_fragment>',
              `
              #include <fog_fragment>
              #ifdef USE_FOG
                // Slow, continuous bands in world space; no screen noise or view distortion.
                float airWave = 0.72 + 0.24 * sin(vAirWorld.x * 0.63 + vAirWorld.z * 0.42 + airTime * airDrift)
                  + 0.16 * sin(vAirWorld.z * 1.17 - airTime * airDrift * 0.7);
                float airLow = exp(-max(0.0, vAirWorld.y) / airHeight);
                float airDist = max(0.0, length(vAirWorld - cameraPosition) - 1.8);
                float airAmount = min(0.78, 1.0 - exp(-airDist * airDensity * airLow * airWave));
                // Scene grading lives on world surfaces, so it survives direct stereo rendering.
                float airLuma = dot(gl_FragColor.rgb, vec3(0.2126,0.7152,0.0722));
                gl_FragColor.rgb = mix(vec3(airLuma), gl_FragColor.rgb, airSaturation);
                gl_FragColor.rgb *= vec3(1.0 + airWarmth*0.28, 1.0 + airWarmth*0.025, 1.0 - airWarmth*0.38);
                gl_FragColor.rgb = mix(gl_FragColor.rgb, airColor, airAmount);
              #endif
            `,
            );
          };
          m.customProgramCacheKey = () => cacheKey + '|world-air-v1';
          m.needsUpdate = true;
        }
      });
    },
    update(dt, time, name, door = 0) {
      const p = profiles[name] || profiles.sweatshop,
        d = profiles.door;
      const k = 1 - Math.exp(-dt * 0.8);
      uniforms.airTime.value = time;
      uniforms.airWarmth.value = THREE.MathUtils.lerp(
        uniforms.airWarmth.value,
        THREE.MathUtils.lerp(p[4], d[4], door),
        k,
      );
      uniforms.airSaturation.value = THREE.MathUtils.lerp(
        uniforms.airSaturation.value,
        THREE.MathUtils.lerp(p[5], d[5], door),
        k,
      );
      for (const [i, key] of ['airDensity', 'airHeight', 'airDrift'].entries()) {
        const target = THREE.MathUtils.lerp(p[i], d[i], door);
        uniforms[key].value = THREE.MathUtils.lerp(uniforms[key].value, target, k);
      }
      tint.setHex(p[3]);
      if (door) tint.lerp(doorTint, door);
      uniforms.airColor.value.lerp(tint, k);
    },
  };
}
