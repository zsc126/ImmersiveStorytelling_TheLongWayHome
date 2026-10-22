// The Long Way Home — created by Sicheng Zheng. © 2026 Sicheng Zheng. All rights reserved.
// SPACE 3 ★ — THE NIGHTMARE (turning point)
// Board notes: in desperation the child steals food and the police are called. They run down the
// alleys as the world around them distorts into a nightmare. The police slowly turn into monsters,
// the buildings swirl and change, people yell "stop". As a child, they imagine the world the way
// they see it. Doing nothing: the creatures close in, the red thread pulses; being caught triggers
// a soft reset to the last checkpoint. The stolen food glows and grows heavy.
import * as THREE from 'three';
import * as T from '../textures.js';
import { M, TM, box, cyl, wire, fabricMat, makeSack, lerp, ease, setMonster, animateFigure } from '../kit.js';
import { cityBlock, MARKET } from './street.js';

// walkable corridors (axis-aligned) in route order, and the corner points between them
export const ROUTE = [
  { x0: 40, x1: 54, z0: 7, z1: 9.6 },
  { x0: 51.4, x1: 54, z0: -6, z1: 9.6 },
  { x0: 51.4, x1: 68, z0: -6, z1: -3.4 },
  { x0: 65.4, x1: 68, z0: -6, z1: 14 },
  { x0: 65.4, x1: 82, z0: 11.4, z1: 14 },
];
const CORNERS = [new THREE.Vector3(52.7, 0, 8.3), new THREE.Vector3(52.7, 0, -4.7), new THREE.Vector3(66.7, 0, -4.7), new THREE.Vector3(66.7, 0, 12.7)];
export const HOME_DOOR = new THREE.Vector3(82, 1.2, 12.7);
const CHECKPOINTS = [
  { x: 41.2, z: 8.3, yaw: -Math.PI / 2 }, { x: 52.7, z: 6.5, yaw: 0 }, { x: 54.5, z: -4.7, yaw: -Math.PI / 2 },
  { x: 66.7, z: -3, yaw: Math.PI }, { x: 68.5, z: 12.7, yaw: -Math.PI / 2 },
];

export function buildNightmare(ctx) {
  const { scene, audio, player, ui, settings, debug, journey, guide, police, pursuit, thought } = ctx;
  const root = new THREE.Group(); root.name = 'nightmare'; scene.add(root);
  const bagCtl = journey.bagCtl;
  const colliders = [];
  const buildings = [];

  // ground along the whole route
  ROUTE.forEach(r => {
    const g = new THREE.Mesh(new THREE.PlaneGeometry(r.x1 - r.x0, r.z1 - r.z0), TM(T.dirtFloor([(r.x1 - r.x0) / 3, (r.z1 - r.z0) / 3])));
    g.rotation.x = -Math.PI / 2; g.position.set((r.x0 + r.x1) / 2, 0.003 + Math.random() * 0.001, (r.z0 + r.z1) / 2); root.add(g);
  });
  // blocks between the corridors (they also close off the east side of the market)
  const cols = ['#a89a80', '#9aa0a8', '#b09a90', '#a0a88a', '#a898a8', '#b0906a'];
  [[40, 54, 9.6, 20], [40, 51.4, -12, 7], [54, 65.4, -3.4, 20], [51.4, 82, -12, -6], [68, 82, -6, 11.4], [65.4, 82, 14, 20],
    [82, 92, -12, 10], [82, 92, 15.4, 22], [88, 92, 10, 15.4]].forEach(([a, b, c, d]) => {
    colliders.push(cityBlock(root, a, b, c, d, { colours: cols, hMin: 7, hMax: 13, night: true, glow: 0x1a1018, list: buildings }));
  });
  buildings.forEach((m, i) => { m.userData.ph = i * 1.7; });

  // obstacles: carts, crates and sacks you have to weave around
  const crateMat = TM(T.plywood());
  const obstacles = [
    [45, 7.6, 1.0, 0.8], [48.6, 9.05, 0.8, 0.8], [50.2, 7.75, 1.8, 0.9],
    [52.3, 4.5, 0.9, 0.9], [53.2, 0.2, 0.8, 0.8], [52.0, -2.4, 0.9, 0.9],
    [57, -5.35, 1.8, 0.9], [61, -4.05, 0.9, 0.9], [64, -5.3, 0.9, 0.8],
    [66.15, -0.8, 0.9, 0.9], [67.3, 3.5, 0.9, 0.9], [66.1, 8, 0.9, 0.9],
    [70.5, 12.05, 0.9, 0.9], [74.2, 13.35, 1.0, 0.8], [78, 12.1, 0.9, 0.9],
  ];
  obstacles.forEach(([x, z, w, d], i) => {
    if (i % 3 === 1) { const s = makeSack(M(0x5a5048, { flatShading: true }), 0.9); s.position.set(x, 0, z); root.add(s); }
    else { const h = 0.6 + (i % 2) * 0.4; const c = box(w, h, d, crateMat, x, h / 2, z, root); c.rotation.y = (Math.random() - 0.5) * 0.2; if (i % 4 === 0) box(w * 0.8, 0.5, d * 0.8, crateMat, x, h + 0.25, z, root); }
    colliders.push({ minX: x - w / 2, maxX: x + w / 2, minZ: z - d / 2, maxZ: z + d / 2 });
  });

  // the last lane before home: tin-sheet shacks (Space 3 rough-view sketch) — patched corrugated
  // walls, sloping tin roofs, laundry across the lane, a bucket by a door
  const tinMat = TM(T.tin([1, 1]), { metalness: 0.2, side: THREE.DoubleSide, emissive: 0x3a2e24 });   // a little self-light so the undersides aren't pitch black
  const tinMat2 = TM(T.tin([1, 1]), { metalness: 0.2, color: 0x9a8a7a, side: THREE.DoubleSide, emissive: 0x3a2e24 });
  for (let x = 69; x < 81.5; x += 1.6 + Math.random() * 0.8) {
    [[11.4, 1], [14, -1]].forEach(([zf, out], si) => {
      const w = 1.5 + Math.random() * 0.6, h = 2.1 + Math.random() * 0.5;
      const panel = new THREE.Mesh(new THREE.PlaneGeometry(w, h), (si + Math.floor(x)) % 2 ? tinMat : tinMat2);
      panel.position.set(x + w / 2, h / 2, zf + out * 0.03); panel.rotation.z = (Math.random() - 0.5) * 0.04; root.add(panel);
      const roof = new THREE.Mesh(new THREE.PlaneGeometry(w + 0.2, 0.55), tinMat);
      roof.position.set(x + w / 2, h + 0.3, zf + out * 0.22); roof.rotation.x = out * (Math.PI / 2 - 0.6); root.add(roof);
      if (Math.random() < 0.4) box(0.6, 1.7, 0.03, M(0x1a1410), x + w / 2, 0.85, zf + out * 0.05, root);   // a dark doorway
    });
  }
  [[70.5, 13.6], [76.4, 11.75], [80.6, 13.6]].forEach(([x, z]) => { const bk = cyl(0.17, 0.13, 0.3, M(0x2a6a9a, { roughness: 0.5 }), 12, root); bk.position.set(x, 0.15, z); });
  colliders.push({ minX: 70.3, maxX: 70.7, minZ: 13.4, maxZ: 14 }, { minX: 76.2, maxX: 76.6, minZ: 11.4, maxZ: 11.95 }, { minX: 80.4, maxX: 80.8, minZ: 13.4, maxZ: 14 });
  for (let k = 0; k < 3; k++) {
    const lx = 71 + k * 3.6;
    root.add(wire(new THREE.Vector3(lx, 2.6, 11.4), new THREE.Vector3(lx + 0.4, 2.6, 14), 0.25, M(0x1a1612), 0.008));
    for (let c = 0; c < 3; c++) { const cl = new THREE.Mesh(new THREE.PlaneGeometry(0.4, 0.55), fabricMat(k * 3 + c, { side: THREE.DoubleSide })); cl.geometry.translate(0, -0.27, 0); cl.position.set(lx + 0.1 + c * 0.13, 2.4, 11.9 + c * 0.7); cl.rotation.y = Math.PI / 2; root.add(cl); }
  }

  // eyes in the windows (only seen once the nightmare takes hold)
  const EYES = 160, eg = new THREE.BufferGeometry(), ep = new Float32Array(EYES * 3);
  for (let i = 0; i < EYES; i++) {
    const r = ROUTE[i % ROUTE.length], horiz = (r.x1 - r.x0) > (r.z1 - r.z0);
    const side = Math.random() < 0.5;
    ep[i * 3] = horiz ? lerp(r.x0, r.x1, Math.random()) : (side ? r.x0 - 0.05 : r.x1 + 0.05);
    ep[i * 3 + 1] = 2 + Math.random() * 7;
    ep[i * 3 + 2] = horiz ? (side ? r.z0 - 0.05 : r.z1 + 0.05) : lerp(r.z0, r.z1, Math.random());
  }
  eg.setAttribute('position', new THREE.BufferAttribute(ep, 3));
  const eyeMat = new THREE.PointsMaterial({ size: 0.16, map: T.dot(), color: 0xff3a1a, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, fog: false });
  root.add(new THREE.Points(eg, eyeMat));

  // light: the glowing food in your bag lights the way; lightning now and then
  const bagLight = new THREE.PointLight(0xff9a40, 0, 9, 1.4); root.add(bagLight);
  const redLight = new THREE.PointLight(0xff2a1a, 0, 10, 1.5); root.add(redLight);  // follows the monsters

  root.traverse(o => { if (o.isMesh) { o.castShadow = false; o.receiveShadow = false; } });

  // ---------- visions: what the child brings into the nightmare ----------
  const ghostMat = () => new THREE.MeshBasicMaterial({ color: 0xcfe6ff, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false });
  function ghostMachine(x, z, rotY) {
    const g = new THREE.Group(); g.position.set(x, 0, z); g.rotation.y = rotY; root.add(g);
    const mats = [];
    const gb = (w, h, d, px, py, pz) => { const m = ghostMat(); mats.push(m); const b = box(w, h, d, m, px, py, pz, g); return b; };
    gb(1.7, 0.04, 0.9, 0, 1.0, 0);                                                           // table top
    [[-0.8, -0.4], [0.8, -0.4], [-0.8, 0.4], [0.8, 0.4]].forEach(([a2, b2]) => gb(0.05, 1.0, 0.05, a2, 0.5, b2));
    gb(0.64, 0.05, 0.32, 0, 1.05, -0.05); gb(0.11, 0.27, 0.16, 0.24, 1.2, -0.05); gb(0.58, 0.09, 0.13, -0.02, 1.35, -0.05); gb(0.11, 0.21, 0.14, -0.26, 1.26, -0.05);
    const needle = gb(0.012, 0.13, 0.012, -0.26, 1.14, -0.03);
    // the empty stool, and a faint small figure that is you
    gb(0.4, 0.04, 0.4, 0, 0.6, 0.72);
    return { g, mats, needle, state: 0, done: false, x, z };
  }
  const ghosts = [[47.5, 8.3, Math.PI / 2], [52.7, 2.5, 0], [58.5, -4.7, Math.PI / 2], [66.7, 1.5, 0], [66.7, 8.6, 0], [74.5, 12.7, Math.PI / 2]].map(([x, z, r]) => ghostMachine(x, z, r));
  // the supervisor, waiting at the end of the long lane, holding out the coins
  const ghostBoss = new THREE.Group(); ghostBoss.position.set(66.7, 0, -4.7); ghostBoss.rotation.y = Math.PI / 2; root.add(ghostBoss);
  const bossMat = ghostMat();
  { const b = (w, h, d, x, y, z) => box(w, h, d, bossMat, x, y, z, ghostBoss);
    b(0.3, 1.2, 0.25, -0.12, 0.6, 0); b(0.3, 1.2, 0.25, 0.12, 0.6, 0); b(0.55, 1.1, 0.32, 0, 1.75, 0);
    const hd = new THREE.Mesh(new THREE.SphereGeometry(0.2, 10, 8), bossMat); hd.position.y = 2.55; ghostBoss.add(hd);
    const arm = b(0.1, 0.9, 0.1, 0.36, 1.9, -0.35); arm.rotation.x = 1.3; }
  ghostBoss.scale.setScalar(1.25);
  const reach = [];   // (arms from the walls were removed — kept simple)
  // easter eggs: faint words from the day on the walls (400 PCS = the factory's daily target, Rs 10 = the meal, CHOR = thief)
  function glyph(text, x, y, z, rotY, size = 1.4) {
    const c = document.createElement('canvas'); c.width = 512; c.height = 160; const g = c.getContext('2d');
    g.font = 'bold 96px "Courier New", monospace'; g.fillStyle = '#ff2a1a'; g.textAlign = 'center'; g.textBaseline = 'middle';
    g.shadowColor = '#ff2a1a'; g.shadowBlur = 18; g.fillText(text, 256, 84);
    const tx = new THREE.CanvasTexture(c);
    const m = new THREE.Mesh(new THREE.PlaneGeometry(size, size * 0.31), new THREE.MeshBasicMaterial({ map: tx, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }));
    m.position.set(x, y, z); m.rotation.y = rotY; root.add(m); return m;
  }
  const glyphs = [glyph('400 PCS', 44, 2.6, 9.55, Math.PI), glyph('Rs 6', 51.45, 2.2, 3, Math.PI / 2), glyph('Rs 10', 53.95, 3.0, -0.5, -Math.PI / 2),
    glyph('TOMORROW 7 AM', 60, 2.8, -3.45, Math.PI, 2.2), glyph('CHOR', 65.45, 2.4, 6, Math.PI / 2, 1.6), glyph('400 PCS', 72, 3.2, 13.95, Math.PI), glyph('400 PCS', 79, 2.0, 11.45, 0)];
  const fearEl = document.getElementById('fear');
  let baseFov = null;

  // ---------- sound ----------
  let sounds = [], snd = {};
  function startSounds() {
    audio.stopAll(sounds); sounds = [];
    const add = (k, a) => { snd[k] = a; sounds.push(a); return a; };
    add('drone', audio.loop('drone', { volume: 0 }));
    add('whispers', audio.loop('whispers', { volume: 0 }));
    add('heart', audio.loop('heartbeat', { volume: 0 }));
    add('yells', audio.loop('yells', { object: police[0], volume: 0.5, ref: 2, rate: 0.95 }));
    add('wind', audio.loop('wind', { volume: 0.3 }));
  }

  // ---------- story ----------
  const S = { phase: 'idle', t: 0, warp: 0, cp: 0, stamina: 1, tired: false, caughtT: 0, flash: 0, nextFlash: 4, ended: false, screamed: false };
  const head = new THREE.Vector3();
  function hint(text, secs = 5) { if (!player.inVR && settings.hints) ui.hint(text, secs); }
  function setPhase(p) { S.phase = p; S.t = 0; if (debug) debug.textContent = 'phase: ' + p; }

  function progress(x, z) { // which corridor are we in (highest index wins at corners)
    let best = 0; ROUTE.forEach((r, i) => { if (x >= r.x0 - 0.3 && x <= r.x1 + 0.3 && z >= r.z0 - 0.3 && z <= r.z1 + 0.3) best = i; });
    return best;
  }
  const routePoints = (h) => {
    const seg = progress(h.x, h.z);
    return [...CORNERS.slice(seg).map(c => new THREE.Vector3(c.x, 0.05, c.z)), HOME_DOOR];
  };

  function reset() {
    Object.assign(S, { phase: 'idle', t: 0, warp: 0, cp: 0, stamina: 1, tired: false, caughtT: 0, flash: 0, nextFlash: 4, ended: false, screamed: false });
    buildings.forEach(m => { m.rotation.set(0, 0, 0); m.scale.set(1, 1, 1); });
    police.forEach(p => setMonster(p, 0));
    eyeMat.opacity = 0; bagLight.intensity = 0; redLight.intensity = 0;
    player.speedScale = 1; player.canRun = true; player.jogAllowed = false;
    ghosts.forEach(gh => { gh.done = false; gh.state = 0; gh.mats.forEach(m => { m.opacity = 0; }); });
    bossMat.opacity = 0; S.bossGone = false; S.sawGhost = false; S.stepT = 0; S.whistleT = 5; S.yellT = 3;
    reach.forEach(r => { r.pivot.scale.z = 0.01; });
    glyphs.forEach(g => { g.material.opacity = 0; });
    if (fearEl) fearEl.style.opacity = 0;
    if (baseFov !== null) { player.camera.fov = baseFov; player.camera.updateProjectionMatrix(); baseFov = null; }
  }
  function start() {
    reset(); startSounds();
    setPhase('chase');
    pursuit.speed = 2.1;
    pursuit.active = true; pursuit.rewind(7);           // they are right behind you as the lane closes in
    player.jogAllowed = true;
    bagCtl.glow = 0.6;
    guide.set(routePoints);
    ui.subtitle('Police: "Ruko! Stop right there!"', 2.5);
  }
  function stop() {
    audio.stopAll(sounds); sounds = []; snd = {}; pursuit.stop(); bagLight.intensity = 0; redLight.intensity = 0;
    if (fearEl) fearEl.style.opacity = 0;
    if (baseFov !== null) { player.camera.fov = baseFov; player.camera.updateProjectionMatrix(); baseFov = null; }
  }

  function update(dt, t, active = true) {
    if (S.preview !== undefined && S.phase !== 'chase' && S.phase !== 'caught') {
      // explore mode: show (or hide) the nightmare without the chase
      S.warp = lerp(S.warp, S.preview ? 1 : 0, dt * 2);
      eyeMat.opacity = S.warp * (0.6 + 0.4 * Math.sin(t * 2.3));
      glyphs.forEach((g, i) => { g.material.opacity = S.warp * 0.22; });
      ghosts.forEach(gh => { gh.mats.forEach(m => { m.opacity = S.warp * (0.2 + 0.1 * Math.sin(t * 9)); }); });
      bossMat.opacity = S.warp * 0.3;
      reach.forEach(r => { r.pivot.scale.z = Math.max(0.01, S.warp * (0.6 + 0.4 * Math.sin(t * 2 + r.ph))); });
      police.forEach((p, i) => { if (S.preview) { p.visible = true; setMonster(p, S.warp); p.position.set(48 + i * 1.2, 0, 8.3); p.rotation.y = -Math.PI / 2; animateFigure(p, t, dt); } });
      redLight.intensity = S.warp * 3; redLight.position.set(48, 2.2, 8.3);
    }
    // the city breathes and leans once the nightmare starts
    if (S.warp > 0.001) {
      buildings.forEach(m => {
        const w = S.warp, ph = m.userData.ph;
        m.rotation.z = w * 0.07 * Math.sin(t * 0.6 + ph);
        m.rotation.x = w * 0.05 * Math.sin(t * 0.45 + ph * 1.3);
        m.scale.y = 1 + w * 0.18 * Math.sin(t * 0.9 + ph);
      });
    }
    if (S.phase === 'idle' || S.phase === 'done' || !active) return;
    S.t += dt;
    player.headWorld(head);

    // the nightmare grows over the first seconds
    S.warp = Math.min(1, S.warp + dt / 7);
    const mk = ease(Math.min(1, S.t / 6));
    police.forEach(p => { setMonster(p, mk); animateFigure(p, t, dt); });
    if (!S.screamed && S.t > 2.5) { S.screamed = true; audio.oneShot('scream', { object: police[0], volume: 0.7, ref: 3 }); thought('They\'re not men anymore.', 3.5); }
    if (S.t > 14 && S.t - dt <= 14) thought('The bag is so heavy. Don\'t drop it.', 3.5);
    if (S.t > 30 && S.t - dt <= 30) thought('Almost home. Almost home.', 3);
    eyeMat.opacity = S.warp * (0.6 + 0.4 * Math.sin(t * 2.3));
    bagCtl.glow = 0.6 + 0.4 * S.warp; bagCtl.heavy = Math.min(1, S.t / 40);
    bagLight.position.set(head.x, 0.8, head.z); bagLight.intensity = 2.5 + S.warp * 2 + Math.sin(t * 5) * 0.3;
    redLight.position.copy(police[0].position).setY(2.2); redLight.intensity = S.warp * 4;

    // running costs breath
    const moving = player.vel.length() > 0.5, running = player.running && moving;
    S.stamina = Math.min(1, Math.max(0, S.stamina + (running ? -dt / 6 : dt / 4)));
    if (S.stamina <= 0.01) S.tired = true;
    if (S.tired && S.stamina > 0.35) S.tired = false;
    player.canRun = !S.tired;
    player.speedScale = 1 - 0.06 * bagCtl.heavy;

    // pursuers: slower than you when you run (even out of breath), faster than a walk,
    // and faster still if you stop
    pursuit.speed = moving ? 2.1 : 2.7;
    const d = S.phase === 'chase' ? pursuit.update(dt) : 99;
    const near = Math.max(0, 1 - d / 10);
    if (snd.drone) snd.drone.setVolume(0.9 * S.warp);
    if (snd.whispers) snd.whispers.setVolume(0.5 * S.warp * (0.4 + near));
    if (snd.heart) { snd.heart.setVolume(0.3 + 0.7 * near); snd.heart.setPlaybackRate(1 + near * 0.9); }
    guide.urgent = !moving;

    // the chase is loud: boots, whistles, shouting behind you
    if (S.phase === 'chase') {
      S.stepT -= dt;
      if (S.stepT <= 0) { S.stepT = 0.33; police.forEach((p, i) => audio.oneShot('step', { object: p, volume: 0.9, rate: 0.75 + i * 0.1, ref: 2 })); }
      S.whistleT -= dt;
      if (S.whistleT <= 0) { S.whistleT = 7 + Math.random() * 4; audio.oneShot('whistle', { object: police[0], volume: 0.9, ref: 3, rate: 1 - S.warp * 0.25 }); }
      S.yellT -= dt;
      if (S.yellT <= 0) {
        S.yellT = 6 + Math.random() * 5;
        const lines = ['Police: "Ruko! Stop!"', 'Police: "Chor! Pakdo! Grab the thief!"', 'Police: "You can\'t run forever!"', '"…stop… stop… stop…"'];
        ui.subtitle(lines[Math.floor(Math.random() * lines.length)], 2.5);
        audio.oneShot('yells', { object: police[0], volume: 0.7, ref: 2, rate: 0.8 + Math.random() * 0.3 });
      }
    }
    // fear at the edges of your sight, a narrowing, pulsing view
    const fear = Math.min(1, near * 1.3 + S.flash * 0.3);
    if (fearEl) fearEl.style.opacity = String(fear * (0.75 + 0.25 * Math.sin(t * (4 + near * 6))));
    if (!player.inVR) {
      if (baseFov === null) baseFov = player.camera.fov;
      player.camera.fov = baseFov + near * 7 * Math.sin(t * 2.5) + S.warp * 3; player.camera.updateProjectionMatrix();
    }
    // visions of the sweatshop appear ahead and dissolve as you reach them
    ghosts.forEach(gh => {
      const dist = Math.hypot(gh.x - head.x, gh.z - head.z);
      let target = 0;
      if (!gh.done && dist < 11 && S.warp > 0.3) target = 0.22 + 0.12 * Math.sin(t * 9) * Math.sin(t * 2.3);
      if (!gh.done && dist < 2.6) { gh.done = true; audio.oneShot('sewing', { volume: 0.7, rate: 1.4 }); if (!S.sawGhost) { S.sawGhost = true; thought('The machines… they followed me.', 3.5); } }
      gh.state = lerp(gh.state, target, dt * (gh.done ? 6 : 3));
      gh.mats.forEach(m => { m.opacity = gh.state; });
      gh.needle.position.y = 1.14 + 0.03 * Math.sin(t * 40);
    });
    {
      const dist = Math.hypot(ghostBoss.position.x - head.x, ghostBoss.position.z - head.z);
      const segNow = progress(head.x, head.z);
      const want = !S.bossGone && segNow >= 2 && dist < 14 ? 0.3 + 0.1 * Math.sin(t * 7) : 0;
      if (!S.bossGone && segNow >= 2 && dist < 5) { S.bossGone = true; ui.subtitle('Supervisor (an echo): "Same time tomorrow."', 3); audio.oneShot('coins', { volume: 0.6, rate: 0.6 }); }
      bossMat.opacity = lerp(bossMat.opacity, want, dt * 4);
      ghostBoss.lookAt(head.x, 0, head.z);
    }
    reach.forEach(r => {
      const dist = r.pivot.position.distanceTo(new THREE.Vector3(head.x, r.pivot.position.y, head.z));
      const want = S.warp > 0.5 && dist < 6 ? (0.6 + 0.4 * Math.sin(t * 2 + r.ph)) * Math.min(1, (6 - dist) / 3) : 0.01;
      r.pivot.scale.z = lerp(r.pivot.scale.z, Math.max(0.01, want), dt * 4);
    });
    glyphs.forEach((g, i) => { g.material.opacity = S.warp * 0.22 * (0.6 + 0.4 * Math.sin(t * (1.5 + i * 0.3) + i)); });

    // checkpoints
    const seg = progress(head.x, head.z);
    if (seg > S.cp) S.cp = seg;

    // lightning
    S.nextFlash -= dt;
    if (S.nextFlash <= 0) { S.nextFlash = 6 + Math.random() * 6; S.flash = 1; setTimeout(() => audio.oneShot('thunder', { volume: 0.6 }), 400 + Math.random() * 600); }
    S.flash = Math.max(0, S.flash - dt * 3);

    switch (S.phase) {
      case 'chase':
        if (d < 0.9) { setPhase('caught'); ui.fade(true); pursuit.stop(); audio.oneShot('scream', { volume: 0.5, rate: 1.2 }); }
        if (head.x > HOME_DOOR.x - 0.9 && head.z > 11.4 && !S.ended) { S.ended = true; pursuit.stop(); guide.clear(); setPhase('done'); onEndFn && onEndFn('home'); }
        break;
      case 'caught':
        if (S.t > 0.9 && S.t - dt <= 0.9) {
          const c = CHECKPOINTS[S.cp];
          player.place(c.x, c.z, c.yaw, player.eye);
          pursuit.active = true; pursuit.rewind(8);
          S.stamina = 1; S.tired = false;
        }
        if (S.t > 1.2) { ui.fade(false); setPhase('chase'); thought('No. Again. Run.', 2.5); }
        break;
    }
  }

  function atmosphere() {
    const w = S.warp, f = S.flash || 0;
    return {
      fog: new THREE.Color(0xb08a60).lerp(new THREE.Color(0x2a0a12), Math.min(1, w * 1.4)).lerp(new THREE.Color(0x9a90c0), f * 0.5),
      density: lerp(0.03, 0.065, w), sun: lerp(1.6, 0, Math.min(1, w * 2)) + f * 2, hemi: lerp(0.8, 0.28, w) + f * 1.5,
      skyTint: new THREE.Color(0xffffff).lerp(new THREE.Color(0x4a0c14), Math.min(1, w * 1.3)).lerp(new THREE.Color(0xc8c0ff), f * 0.6),
      hemiSky: new THREE.Color(0xffe8c8).lerp(new THREE.Color(0x6a3a8a), w), hemiGround: new THREE.Color(0x3a2a1a).lerp(new THREE.Color(0x14060a), w),
    };
  }

  let onEndFn = null;
  return {
    root, update, start, stop, reset, atmosphere,
    zone: { minX: MARKET.x1 + 0.4, maxX: 82 },
    onEnd(fn) { onEndFn = fn; },
    getColliders() { return colliders; },
    get phase() { return S.phase; },
    get stamina() { return S.stamina; },
    preview(on) { S.preview = on; },
    endPreview() { S.preview = undefined; },
    skip() { if (S.phase === 'chase') player.place(81.5, 12.7, -Math.PI / 2, player.eye); },
  };
}
