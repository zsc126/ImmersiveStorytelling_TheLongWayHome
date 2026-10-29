// EXTRA EDITION — THE LIGHT (between the nightmare and home)
// The team's idea: after the city collapses at the home door, the child is inside a bright, heavenly
// light. It is beautiful and wrong: sewing machines drift in and out of it, cut cloth flies past,
// and street food appears — close enough to touch, impossible to hold. Then the eyes close.
// VR comfort: you stand still on a small disc of light; only the things around you move.
import * as THREE from 'three';
import * as TX from './tex.js';
import { M, G, Batcher, slab, lerp, ease, clamp, damp, makeMachine } from './kit.js';
import { GRIP } from './fp.js';
import { T } from './city.js';

export const VC = new THREE.Vector3(140, 0, 0);       // far from the city

export function buildVoid(ctx) {
  const { scene, audio, interactor, player, ui, hands, bagCtl, lights } = ctx;
  const root = new THREE.Group(); root.name = 'void'; scene.add(root); root.visible = false;
  const rnd = (() => { let s = 99; return () => { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646; }; })();

  // a small disc of light under your feet (a floor for the body to trust)
  const discTex = (() => { const c = document.createElement('canvas'); c.width = c.height = 128; const g = c.getContext('2d'); const gr = g.createRadialGradient(64, 64, 0, 64, 64, 64); gr.addColorStop(0, 'rgba(255,248,230,1)'); gr.addColorStop(0.55, 'rgba(255,236,200,.55)'); gr.addColorStop(1, 'rgba(255,230,190,0)'); g.fillStyle = gr; g.fillRect(0, 0, 128, 128); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t; })();
  const disc = new THREE.Mesh(new THREE.CircleGeometry(1.6, 40), new THREE.MeshBasicMaterial({ map: discTex, transparent: true, depthWrite: false, fog: false, color: new THREE.Color(0.75, 0.72, 0.66) }));   // softer: the lower half was blown out
  disc.rotation.x = -Math.PI / 2; disc.position.copy(VC).setY(0.01); root.add(disc);
  // a soft warm shade over the lower half of the light, so below the horizon does not blow out to white
  const lowShade = new THREE.Mesh(new THREE.SphereGeometry(40, 32, 16), new THREE.ShaderMaterial({
    uniforms: { uA: { value: 1 } }, transparent: true, depthWrite: false, side: THREE.BackSide, fog: false,
    vertexShader: 'varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
    fragmentShader: 'uniform float uA; varying vec3 vD; void main(){ float k = smoothstep(0.12, -0.55, vD.y); gl_FragColor = vec4(0.52, 0.45, 0.4, 0.42 * k * uA); }',
  }));
  lowShade.position.copy(VC); lowShade.renderOrder = -5; lowShade.frustumCulled = false; root.add(lowShade);

  // clouds of light
  const clouds = [];
  // (patches of haze here and there, not a fog everywhere: you should see far into the light)
  for (let i = 0; i < 34; i++) {
    const m = new THREE.SpriteMaterial({ map: T.dot(), color: new THREE.Color().setHSL(0.08 + rnd() * 0.08, 0.5, 0.82 + rnd() * 0.12), transparent: true, opacity: 0.1 + rnd() * 0.2, depthWrite: false, fog: false });
    const sp = new THREE.Sprite(m); const r = 12 + rnd() * 32, a = (i % 5) * 1.25 + rnd() * 0.6;
    sp.userData = { r, a, y: -14 + rnd() * 22, w: (rnd() - 0.5) * 0.02 };
    sp.scale.setScalar(5 + rnd() * 12); root.add(sp); clouds.push(sp);
  }
  // sewing machines drifting in and out of the light
  const ghostMat = () => new THREE.MeshBasicMaterial({ color: 0xd8e6ff, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, fog: false });
  const machines = [0, 1, 2, 3, 4].map(i => {
    const mat = ghostMat(), m = makeMachine({ wood: mat });
    m.traverse(o => { if (o.isMesh) { o.material = mat; o.castShadow = false; o.receiveShadow = false; } });
    const g = new THREE.Group(); g.add(m); root.add(g);
    g.userData = { mat, m, ph: i / 5, a: i * 1.26 + 0.4, y: 0.6 + (i % 3) * 0.9, spin: (i % 2 ? 1 : -1) * 0.15 };
    return g;
  });
  const sewObj = new THREE.Object3D(); root.add(sewObj);
  // cut cloth flying past
  const fabMs = ['buti', 'stripe', 'check', 'paisley', 'border', 'buti'].map((k, i) => new THREE.MeshBasicMaterial({ map: TX.fabric(k, i, 128), side: THREE.DoubleSide, transparent: true, opacity: 0.9, fog: false }));
  const cloths = [];
  for (let i = 0; i < 46; i++) {
    const c = new THREE.Mesh(new THREE.PlaneGeometry(0.34, 0.26), fabMs[i % 6]);
    c.userData = { r: 1.4 + rnd() * 9, a: rnd() * Math.PI * 2, y: 0.3 + rnd() * 3.5, sp: (0.15 + rnd() * 0.35) * (rnd() < 0.5 ? -1 : 1), bob: rnd() * 6, swoop: rnd() < 0.25 };
    root.add(c); cloths.push(c);
  }
  // ghost clothes: pale, see-through shirts and kurtas that drift and sway through the air, like the
  // machines — the day's work, floating
  const garments = [];
  {
    const shirt = (long) => {
      const sh = new THREE.Shape(), L = long ? 0.95 : 0.62;
      sh.moveTo(-0.16, 0.3); sh.lineTo(-0.3, 0.22); sh.lineTo(-0.42, 0.02); sh.lineTo(-0.32, -0.04); sh.lineTo(-0.22, 0.1); sh.lineTo(-0.22, 0.3 - L);
      sh.lineTo(0.22, 0.3 - L); sh.lineTo(0.22, 0.1); sh.lineTo(0.32, -0.04); sh.lineTo(0.42, 0.02); sh.lineTo(0.3, 0.22); sh.lineTo(0.16, 0.3); sh.quadraticCurveTo(0, 0.2, -0.16, 0.3);
      const g = new THREE.ShapeGeometry(sh, 6); return g;
    };
    const tints = [0xe8dcc8, 0xd8c8d8, 0xc8d4e0, 0xe0d0b8, 0xd0dcc8, 0xe8d0c8];
    for (let i = 0; i < 12; i++) {
      const mat = new THREE.MeshBasicMaterial({ color: new THREE.Color(tints[i % tints.length]).multiplyScalar(0.72), transparent: true, opacity: 0, side: THREE.DoubleSide, depthWrite: false, fog: false });   // pale and see-through (not additive: on the bright light they must still read)
      const m = new THREE.Mesh(shirt(i % 3 === 0), mat); root.add(m);
      m.userData = { mat, r: 2.5 + rnd() * 7, a: rnd() * Math.PI * 2, y: 0.8 + rnd() * 3.5, sp: (0.08 + rnd() * 0.12) * (rnd() < 0.5 ? -1 : 1), ph: rnd() * 6, s: 0.9 + rnd() * 0.6 };
      garments.push(m);
    }
  }

  // food that flies to you out of the light — a real plate, right in front of your face (about as far as
  // the sewing machine was from your eyes) — and dissolves when you try to take it
  const foods = [];
  {
    const sm = (c, o = {}) => new THREE.MeshStandardMaterial({ color: c, roughness: 0.6, emissive: c, emissiveIntensity: 0.12, flatShading: true, fog: false, transparent: true, ...o });
    const steel = () => sm(0xc9c9c4, { metalness: 0.8, roughness: 0.25, emissiveIntensity: 0.05 });
    const part = (g, geo, mat, x, y, z, rx = 0, ry = 0, rz = 0) => { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.rotation.set(rx, ry, rz); g.add(m); return m; };
    // 1 · a thali: rice, dal, sabzi, two rotis, pickle, on a steel plate
    {
      const g = new THREE.Group();
      part(g, new THREE.CylinderGeometry(0.17, 0.15, 0.018, 28), steel(), 0, 0, 0);
      const rice = new THREE.SphereGeometry(0.07, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2); part(g, rice, sm(0xf2ecdc), -0.04, 0.008, 0.05).scale.set(1.2, 0.8, 1);
      [[0.08, -0.06, 0xd8a030], [-0.07, -0.08, 0x6a8a2a], [0.1, 0.06, 0xa8381a]].forEach(([x, z, c]) => {
        part(g, new THREE.CylinderGeometry(0.045, 0.038, 0.035, 16, 1, true), steel(), x, 0.026, z);
        part(g, new THREE.CylinderGeometry(0.042, 0.042, 0.004, 16), sm(c), x, 0.034, z);
      });
      [0, 1].forEach(k => part(g, new THREE.CylinderGeometry(0.075, 0.075, 0.006, 18), sm(k ? 0xc8904c : 0xd8a868), -0.07 + k * 0.03, 0.03 + k * 0.007, -0.02 - k * 0.02, 0.18, 0, 0.1));
      part(g, new THREE.SphereGeometry(0.018, 8, 6), sm(0xb8401a), 0.0, 0.016, 0.11);
      g.userData.colors = [0xf2ecdc, 0xd8a030, 0x6a8a2a, 0xc8904c, 0xa8381a];
      foods.push(g);
    }
    // 2 · something sweet and cold: a glass of mango lassi and a kulfi on a stick
    {
      const g = new THREE.Group();
      part(g, new THREE.CylinderGeometry(0.15, 0.13, 0.014, 24), steel(), 0, 0, 0);
      part(g, new THREE.CylinderGeometry(0.045, 0.038, 0.16, 16, 1, true), sm(0xe8eef0, { opacity: 0.35, roughness: 0.1, emissiveIntensity: 0.02 }), -0.04, 0.087, 0);
      part(g, new THREE.CylinderGeometry(0.042, 0.036, 0.13, 16), sm(0xf0a830), -0.04, 0.073, 0);
      part(g, new THREE.SphereGeometry(0.03, 10, 6), sm(0xfff4dc), -0.04, 0.142, 0).scale.set(1.3, 0.5, 1.3);
      part(g, new THREE.CylinderGeometry(0.004, 0.004, 0.2, 5), sm(0xd84a6a), -0.025, 0.17, 0.01, 0, 0, -0.25);
      const kulfi = new THREE.ConeGeometry(0.03, 0.12, 10); kulfi.rotateX(Math.PI);
      part(g, kulfi, sm(0xf2dca0), 0.07, 0.04, 0.02, Math.PI / 2 - 0.2, 0.6, 0).scale.set(1, 1, 0.8);
      part(g, new THREE.BoxGeometry(0.012, 0.003, 0.07), sm(0xc8a878), 0.1, 0.025, 0.07, 0, 0.6, 0);
      part(g, new THREE.SphereGeometry(0.01, 6, 4), sm(0x6a9a2a), 0.06, 0.07, 0.0);
      g.userData.colors = [0xf0a830, 0xfff4dc, 0xf2dca0, 0xd84a6a, 0x6a9a2a];
      foods.push(g);
    }
    foods.forEach(g => { g.visible = false; g.traverse(o => { if (o.isMesh) { o.castShadow = false; o.userData.op = o.material.opacity; } }); root.add(g); });
  }
  const steam = Array.from({ length: 5 }, () => { const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: T.dot(), transparent: true, opacity: 0, depthWrite: false, fog: false })); s.scale.setScalar(0.12); root.add(s); return s; });
  const foodLight = lights.add({ pos: VC.clone().add(new THREE.Vector3(0, 1.6, -0.4)), color: 0xffd8a0, intensity: 0, distance: 3, space: 'void', priority: 3 });
  const burst = [];
  const flakeGeo = new THREE.PlaneGeometry(0.022, 0.022);
  const S = { phase: 'idle' };

  let sounds = [], snd = {};
  function startSounds() {
    audio.stopAll(sounds); sounds = []; snd = {};
    const add = (k, a) => { if (a) { snd[k] = a; sounds.push(a); } return a; };
    add('wind', audio.loop('wind', { volume: 0.04, rate: 0.7 }));
    add('sew', audio.loop('sewing', { object: sewObj, volume: 0, ref: 2 }));
    add('fac', audio.loop('factory', { volume: 0 }));
    add('kids', audio.loop('children', { volume: 0.05, rate: 0.85 }));
  }

  const head = new THREE.Vector3(), tmp = new THREE.Vector3();
  const lids = document.getElementById('eyelids');
  function setPhase(p) { S.phase = p; S.t = 0; }
  // grabbing the plate: two open hands, apart, one slightly ahead of the other, sliding in under the rim
  // from both sides — palms turned well toward each other, tilted like a cradle (not flat), fingers spread (world space; you face -z)
  const GP = [new THREE.Vector3(), new THREE.Vector3()], GR = [-1, 1].map(sd => {
    const F = new THREE.Vector3(-sd * 0.45, 0.12, -0.88).normalize();            // fingers forward and a little in, toward under the plate
    const N = new THREE.Vector3(-sd * 0.86, 0.5, 0); N.addScaledVector(F, -N.dot(F)).normalize();   // palm up, tipped inward
    const z = F.clone().negate(), y = N.clone().negate(), x = new THREE.Vector3().crossVectors(y, z);
    return new THREE.Euler().setFromRotationMatrix(new THREE.Matrix4().makeBasis(x, y, z), 'YXZ');
  });
  const GSTART = [new THREE.Vector3(), new THREE.Vector3()], GEND = [new THREE.Vector3(), new THREE.Vector3()];
  function reset() { Object.assign(S, { phase: 'idle', t: 0, tries: 0, food: -1, ft: 0, ended: false }); foods.forEach(f => { f.visible = false; }); burst.forEach(b => root.remove(b)); burst.length = 0; foodLight.intensity = 0; }
  // a plate flies in from far off to one side, curves round and stops just in front of your face
  const FOOD_AT = new THREE.Vector3(0, 1.2, -0.6);              // relative to where you stand (you face -z)
  function offer(i) {
    S.food = i; S.ft = 0; S.grabs = 0; setPhase('offer');
    const side = i === 0 ? -1 : 1;
    foods.forEach((f, k) => { f.visible = k === i; });
    const f = foods[i];
    f.userData.from = VC.clone().add(tmp.set(side * 4.5, 2.2, -4.0));
    f.userData.mid = VC.clone().add(tmp.set(side * 2.0, 1.5, -1.6));
    f.userData.base = VC.clone().add(FOOD_AT);
    f.position.copy(f.userData.from); f.scale.setScalar(1);
    f.traverse(o => { if (o.isMesh) o.material.opacity = o.userData.op; });
    audio.oneShot('fabric', { volume: 0.4, rate: 0.6 });
  }
  function grab() { if (S.phase === 'offer' && S.ft > 2.6) { setPhase('grab'); S.tries++; } }
  function dissolve(f) {
    const cols = f.userData.colors;
    for (let k = 0; k < 70; k++) {
      const b = new THREE.Mesh(flakeGeo, new THREE.MeshBasicMaterial({ color: cols[k % cols.length], transparent: true, opacity: 0.95, side: THREE.DoubleSide, depthWrite: false, fog: false }));
      b.position.copy(f.position).add(tmp.set((rnd() - 0.5) * 0.3, rnd() * 0.12, (rnd() - 0.5) * 0.3));
      b.userData.v = new THREE.Vector3((rnd() - 0.5) * 0.6, 0.25 + rnd() * 0.6, (rnd() - 0.5) * 0.6 - 0.2);
      root.add(b); burst.push(b);
    }
  }
  function start() {
    reset(); startSounds();
    player.place(VC.x, VC.z, 0, 1.52); player.canMove = false; player.bounds = null;
    bagCtl.stow = 1; hands.hide();
    ui.fade(false);
    if (lids) lids.style.setProperty('--lid', '0');
    setPhase('wake');
  }
  function stop() { audio.stopAll(sounds); sounds = []; snd = {}; }

  function update(dt, t, active = true) {
    if (!root.visible) return;
    // the light itself moves slowly around you
    clouds.forEach(c => { const u = c.userData; u.a += u.w * dt * 3; c.position.set(VC.x + Math.cos(u.a) * u.r, u.y + Math.sin(t * 0.1 + u.a) * 0.6, VC.z + Math.sin(u.a) * u.r); });
    if (S.phase === 'idle' || !active) return;
    S.t += dt;
    player.headWorld(head);
    const life = Math.min(1, S.t / 4 + (S.phase === 'wake' ? 0 : 1));
    // machines: drift in from far away, loom close, fade again — they wrap around the child's day
    machines.forEach((g, i) => {
      const u = g.userData; u.ph = (u.ph + dt * 0.055) % 1; u.a += dt * u.spin;
      const k = Math.sin(u.ph * Math.PI);                       // 0 far → 1 close → 0 far
      const r = lerp(16, 2.6, k);
      g.position.set(VC.x + Math.cos(u.a) * r, u.y + (1 - k) * 2, VC.z + Math.sin(u.a) * r);
      g.lookAt(head.x, g.position.y, head.z); g.scale.setScalar(lerp(0.5, 1.15, k));
      u.mat.opacity = 0.32 * k * k * life * (S.phase === 'closing' ? 1 - S.t / 3 : 1);
      u.m.userData.ph += dt * 24; u.m.userData.needle.position.y = 0.16 + Math.sin(u.m.userData.ph) * 0.02; u.m.userData.wheel.rotation.x -= dt * 24;
      if (i === 0) sewObj.position.copy(g.position);
    });
    const nearM = Math.max(...machines.map(g => Math.sin(g.userData.ph * Math.PI)));
    if (snd.sew) snd.sew.setVolume(0.7 * life * (S.phase === 'closing' ? 1 : 1));
    if (snd.fac) snd.fac.setVolume(0.12 * nearM * life + (S.phase === 'closing' ? S.t / 3 * 0.35 : 0));
    // cloth
    cloths.forEach((c, i) => {
      const u = c.userData; u.a += dt * u.sp;
      const r = u.swoop ? lerp(0.9, u.r, 0.5 + 0.5 * Math.sin(t * 0.4 + u.bob)) : u.r;
      c.position.set(VC.x + Math.cos(u.a) * r, u.y + Math.sin(t * 0.8 + u.bob) * 0.3, VC.z + Math.sin(u.a) * r);
      c.rotation.set(t * 0.7 + u.bob, t * 0.9 + i, Math.sin(t + i) * 0.6);
      c.material.opacity = 0.9 * life;
    });
    garments.forEach((g, i) => {
      const u = g.userData; u.a += dt * u.sp;
      const r = u.r + Math.sin(t * 0.3 + u.ph) * 1.2;
      g.position.set(VC.x + Math.cos(u.a) * r, u.y + Math.sin(t * 0.5 + u.ph) * 0.5, VC.z + Math.sin(u.a) * r);
      g.rotation.set(Math.sin(t * 0.7 + u.ph) * 0.35, -u.a + (u.sp > 0 ? 0 : Math.PI), Math.sin(t * 0.9 + u.ph) * 0.25);   // a slow sway, as if swimming
      g.scale.set(u.s * (1 + 0.08 * Math.sin(t * 1.3 + u.ph)), u.s * (1 - 0.06 * Math.sin(t * 1.3 + u.ph)), u.s);
      u.mat.opacity = 0.42 * life * (S.phase === 'closing' ? Math.max(0, 1 - S.t / 3) : 1);
    });
    // the food: flies in, waits in front of you, fades and breaks into flakes when you try to take it
    const f = foods[S.food];
    if (f && f.visible) {
      S.ft += dt;
      const u = f.userData;
      if (S.phase === 'offer') {
        const k = ease(Math.min(1, S.ft / 2.6)), a = 1 - k;
        f.position.set(a * a * u.from.x + 2 * a * k * u.mid.x + k * k * u.base.x, a * a * u.from.y + 2 * a * k * u.mid.y + k * k * u.base.y, a * a * u.from.z + 2 * a * k * u.mid.z + k * k * u.base.z);
        if (k >= 1) f.position.y += Math.sin(t * 1.4) * 0.012;
        f.rotation.y = (1 - k) * 2.5 * (S.food ? -1 : 1) + Math.sin(t * 0.5) * 0.15;
      }
      let fade = 1;
      if (S.phase === 'grab') { fade = S.t < 0.7 ? 1 : Math.max(0, 1 - (S.t - 0.7) / 0.9); f.position.y += Math.sin(t * 30) * 0.0015 * (S.t > 0.7 ? 1 : 0); }
      f.traverse(o => { if (o.isMesh) o.material.opacity = o.userData.op * fade; });
      foodLight.pos.copy(f.position).y += 0.35; foodLight.intensity = 1.6 * fade;
      steam.forEach((s2, k) => { const q = (t * 0.35 + k / 5) % 1; s2.position.copy(f.position).add(tmp.set(Math.sin(k * 2 + t) * 0.03, 0.06 + q * 0.3, 0)); s2.material.opacity = (S.food === 0 ? 0.22 : 0.08) * fade * (1 - q); s2.scale.setScalar(0.05 + q * 0.15); });
    } else { foodLight.intensity = 0; steam.forEach(s2 => { s2.material.opacity = 0; }); }
    // scraps from the last plate
    burst.forEach(b => { b.position.addScaledVector(b.userData.v, dt); b.userData.v.y += dt * 0.25; b.rotation.x += dt * 3; b.rotation.y += dt * 2; b.material.opacity = Math.max(0, b.material.opacity - dt * 0.45); });

    switch (S.phase) {
      case 'wake':
        if (S.t > 1.5 && S.t - dt <= 1.5) ui.thought('It\'s so bright.', 3);
        if (S.t > 5 && S.t - dt <= 5) ui.thought('Is this… the sky?', 3);
        if (S.t > 7.5) offer(0);
        break;
      case 'offer':
        if (S.ft > 2.0 && S.ft - dt <= 2.0) ui.thought(S.food === 0 ? 'Food. A whole plate.' : 'Something sweet… cold…', 3);
        if (S.ft > 2.6 && S.ft - dt <= 2.6) ui.hint(player.xr ? 'Pull the trigger to grab it' : 'Press E to grab it', 6);
        if (S.ft > 2.6 && (player.keys.KeyE || ctx.xrTrigger)) grab();
        if (S.ft > 16) grab();                                   // if you wait, you reach anyway
        break;
      case 'grab': {
        // both hands reach in and close — twice — on nothing
        const cyc = Math.min(1, S.t / 1.4), k = 0.5 - 0.5 * Math.cos(cyc * Math.PI * 4);
        [0, 1].forEach(i => { const sd = i ? 1 : -1;
          // wrist out at the side, below the plate; the left hand a little further forward than the right
          const fp = f ? f.position : tmp.copy(VC).add(FOOD_AT);
          GEND[i].set(fp.x + sd * 0.25, fp.y - 0.05, fp.z + 0.1 + (i ? 0.035 : -0.035));
          GSTART[i].set(VC.x + sd * 0.27, head.y - 0.5, VC.z - 0.12);
          GP[i].lerpVectors(GSTART[i], GEND[i], k);
          hands.set(i, { key: 'void-grab', mode: 'world', pos: GP[i], rot: GR[i], pose: 'flat', curl: k > 0.75 ? [0.22, 0.2, 0.22, 0.26, 0.12] : [0.04, 0.03, 0.04, 0.07, 0.0], blend: 0.15 }); });
        if (S.t > 0.7 && S.t - dt <= 0.7) { ui.hint(''); ui.thought(S.tries === 1 ? 'No— wait—' : 'Please…', 2.5); }
        if (S.t > 1.2 && S.t - dt <= 1.2 && f) { dissolve(f); audio.oneShot('fabric', { volume: 0.7, rate: 1.4 }); }
        if (S.t > 1.6 && f) f.visible = false;
        if (S.t > 1.6 && S.t - dt <= 1.6) hands.hide();
        if (S.t > 3.2) { if (S.tries >= 2) setPhase('closing'); else offer(1); }
        break;
      }
      case 'closing': {
        // the light grows; the eyes close
        const k = Math.min(1, S.t / 4);
        if (S.t > 0.4 && S.t - dt <= 0.4) ui.thought('I\'m so tired.', 3);
        if (lids) lids.style.setProperty('--lid', String(ease(clamp((S.t - 1.2) / 2.6, 0, 1))));
        if (S.t > 4.3 && !S.ended) { S.ended = true; setPhase('done'); onEndFn && onEndFn('home'); }
        break;
      }
    }
  }
  function atmosphere() {
    const c = S.phase === 'closing' ? Math.min(1, S.t / 4) : 0;
    lowShade.material.uniforms.uA.value = 1 - c;
    return { fog: new THREE.Color(0xf4ead8).lerp(new THREE.Color(0xfff8f0), c), density: 0.004, sun: 0, hemi: 1.45 + c, hemiSky: new THREE.Color(0xfff2dc), hemiGround: new THREE.Color(0xa8a0b8),
      sky: 2.0 + c * 1.7, skyTint: new THREE.Color(1, 0.95, 0.88), exposure: 1.0 + c * 0.05 };
  }
  let onEndFn = null;
  return {
    root, update, start, stop, reset, atmosphere, name: 'void',
    zone: { minX: 120 },
    onEnd(fn) { onEndFn = fn; },
    getColliders() { return []; },
    get phase() { return S.phase; },
    skip() { if (S.phase === 'offer') { S.ft = 99; grab(); } else S.t = 99; },
  };
}
