// ENDING — HOME
// Board notes: they reach home and burst through the door. A glowing door — passing through reverts
// the view into reality. They see the state of their home. The police yelling and their footsteps
// pass the house. They can look around or close their eyes; when they close their eyes they hear the
// machines from the beginning again, and a message gives the statistics.
// Key object: the food is finally placed on the family's table.
import * as THREE from 'three';
import * as TX from './tex.js';
import { M, G, Batcher, slab, lerp, ease, damp, clamp } from './kit.js';
import { makePerson, poseFloor, poseLie, poseStand, animateIdle } from './people.js';
import { GRIP } from './fp.js';
import { T, texMat } from './city.js';

export const HOME = { x0: 82, x1: 88, z0: 10, z1: 15.4, h: 2.8, door: { z0: 12, z1: 13.4 } };

export function buildHome(ctx) {
  const { scene, audio, interactor, player, ui, thread, hands, bagCtl, lights } = ctx;
  const extra = () => ctx.edition === 'extra';   // Extra: you wake up here at night, eat, lie down, and the day repeats
  const root = new THREE.Group(); root.name = 'home'; scene.add(root);
  const { x0, x1, z0, z1, h } = HOME, cx = (x0 + x1) / 2, cz = (z0 + z1) / 2, W = x1 - x0, D = z1 - z0;
  const dz0 = HOME.door.z0, dz1 = HOME.door.z1, dh = 2.0;
  const B = new Batcher();

  // ---------- shell: mud plaster over brick, an earth floor, a tin roof ----------
  const mud = (() => { const c = T.facade('#9a7a5a'); const g = c.getContext('2d'); g.fillStyle = 'rgba(70,50,30,.25)'; g.fillRect(0, 0, 512, 512); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = THREE.RepeatWrapping; return t; })();
  // (use a plain mud plaster, not the street facade with windows: paint over the window pattern)
  { const g = mud.image.getContext('2d'); g.fillStyle = '#8a6c4e'; g.fillRect(0, 0, 512, 512); for (let i = 0; i < 40; i++) { g.fillStyle = `rgba(${40 + Math.random() * 40},${30 + Math.random() * 20},20,${0.08 + Math.random() * 0.12})`; g.beginPath(); g.arc(Math.random() * 512, Math.random() * 512, 20 + Math.random() * 80, 0, 7); g.fill(); }
    g.fillStyle = 'rgba(30,20,12,.35)'; g.fillRect(0, 430, 512, 82); mud.needsUpdate = true; }
  const wallM = (w, hh) => { const t = mud.clone(); t.needsUpdate = true; t.repeat.set(w / 3, hh / 3); return new THREE.MeshStandardMaterial({ map: t, roughness: 1 }); };
  const wp = (w, hh, x, y, z, ry) => { const m = new THREE.Mesh(new THREE.PlaneGeometry(w + 0.08, hh + 0.04), wallM(w, hh)); m.position.set(x, y, z); m.rotation.y = ry; m.receiveShadow = true; root.add(m); };
  wp(W, h, cx, h / 2, z0, 0); wp(W, h, cx, h / 2, z1, Math.PI); wp(D, h, x1, h / 2, cz, -Math.PI / 2);
  wp(dz0 - z0, h, x0, h / 2, (z0 + dz0) / 2, Math.PI / 2); wp(z1 - dz1, h, x0, h / 2, (dz1 + z1) / 2, Math.PI / 2); wp(dz1 - dz0, h - dh, x0, (h + dh) / 2, (dz0 + dz1) / 2, Math.PI / 2);
  const floorT = T.dirt().clone(); floorT.needsUpdate = true; floorT.repeat.set(2, 2);
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(W, D), new THREE.MeshStandardMaterial({ map: floorT, color: 0xa08060, roughness: 1 })); floor.rotation.x = -Math.PI / 2; floor.position.set(cx, 0.004, cz); floor.receiveShadow = true; root.add(floor);
  const roofT = T.tin().clone(); roofT.needsUpdate = true; roofT.repeat.set(3, 2);
  const roof = new THREE.Mesh(new THREE.PlaneGeometry(W, D), new THREE.MeshStandardMaterial({ map: roofT, side: THREE.DoubleSide, metalness: 0.3, roughness: 0.7 })); roof.rotation.x = Math.PI / 2; roof.position.set(cx, h, cz); root.add(roof);
  for (let x = x0 + 0.8; x < x1; x += 1.6) B.add(G.box(0.08, 0.1, D), M(0x3a2a1c, { roughness: 1 }), x, h - 0.06, cz);   // bamboo rafters
  // outside of the front wall, with the glowing doorway seen from the lane
  const extM = new THREE.MeshStandardMaterial({ map: (() => { const t = new THREE.CanvasTexture(T.facade('#8a7a64', true)); t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = THREE.RepeatWrapping; return t; })(), roughness: 0.95, emissive: 0x1a1210 });
  const ext = (w, hh, x, y, z) => { const m = new THREE.Mesh(new THREE.PlaneGeometry(w, hh), extM); m.position.set(x, y, z); m.rotation.y = -Math.PI / 2; root.add(m); };
  ext(dz0 - z0 + 1.4, 4, x0 - 0.03, 2, (z0 - 1.4 + dz0) / 2); ext(z1 - dz1 + 1, 4, x0 - 0.03, 2, (dz1 + z1 + 1) / 2); ext(dz1 - dz0, 4 - dh, x0 - 0.03, (4 + dh) / 2, (dz0 + dz1) / 2);
  const glowMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(1, 0.88, 0.62).multiplyScalar(2.2), transparent: true, opacity: 0.9, side: THREE.DoubleSide, fog: false });
  const glowDoor = new THREE.Mesh(new THREE.PlaneGeometry(dz1 - dz0, dh), glowMat); glowDoor.position.set(x0 - 0.04, dh / 2, (dz0 + dz1) / 2); glowDoor.rotation.y = -Math.PI / 2; root.add(glowDoor);
  const doorGlow = lights.add({ pos: new THREE.Vector3(x0 - 1.0, 1.4, (dz0 + dz1) / 2), color: 0xffd090, intensity: 0, distance: 7, space: 'home', priority: 2 });
  const doorPivot = new THREE.Group(); doorPivot.position.set(x0 + 0.03, 0, dz0); root.add(doorPivot);
  const door = new THREE.Mesh(new THREE.BoxGeometry(0.04, dh, dz1 - dz0), texMat(T.plywood())); door.position.set(0, dh / 2, (dz1 - dz0) / 2); doorPivot.add(door);

  // ---------- inside: what little there is ----------
  const ply = texMat(T.plywood()), steel = M(0xb8b8b4, { metalness: 0.85, roughness: 0.25 });
  // low table (chowki) with two empty steel plates and a cup
  const table = new THREE.Group(); table.position.set(85, 0, 12.7); root.add(table);
  { const tb = new Batcher(); tb.add(slab(0.9, 0.6, 0.05, 0.02), ply, 0, 0.3, 0); [[-0.4, -0.25], [0.4, -0.25], [-0.4, 0.25], [0.4, 0.25]].forEach(([a, b]) => tb.add(G.box(0.05, 0.3, 0.05), ply, a, 0.15, b));
    [-0.2, 0.2].forEach(px => tb.add(G.cyl(0.13, 0.11, 0.015, 18), steel, px, 0.36, 0)); tb.add(G.cyl(0.035, 0.03, 0.09, 10), steel, 0.35, 0.395, 0.18); tb.build(table); }
  const meal = new THREE.Group(); meal.visible = false; meal.position.set(0, 0.37, 0); table.add(meal);
  const mealM = new THREE.MeshStandardMaterial({ color: 0xd8b070, roughness: 0.8 });
  meal.add(new THREE.Mesh(slab(0.24, 0.18, 0.1, 0.03, 0.01), mealM));
  // sleeping mat with the little brother under a blanket
  const mat = new THREE.Mesh(new THREE.PlaneGeometry(1.6, 0.9), new THREE.MeshStandardMaterial({ map: TX.fabric('check', 1, 128), roughness: 1 })); mat.rotation.x = -Math.PI / 2; mat.position.set(86.6, 0.01, 10.9); mat.receiveShadow = true; root.add(mat);
  const sib = makePerson({ child: true, top: 0x6a6a7a, bottom: 0x4a4a52, skin: 0x5a3a26, outfit: 'shirt', seed: 301, scale: 0.95 });
  root.add(sib);
  const resetArms = () => { const J = sib.userData.J; ['shL', 'shR', 'elL', 'elR', 'spine', 'neck', 'head'].forEach(n => J[n].rotation.set(0, 0, 0)); };
  function sibLie() { poseStand(sib); resetArms(); poseLie(sib); sib.rotation.set(0, Math.PI / 2, Math.PI / 2); sib.position.set(86.1, 0.16, 10.95); sib.userData.lying = true; }
  function sibSit() { poseStand(sib); resetArms(); poseFloor(sib, { hug: true }); sib.rotation.set(0, -2.2, 0); sib.position.set(86.5, 0, 11.05); sib.userData.lying = false; }
  sibLie();
  // a mat of your own beside his
  const myMat = new THREE.Mesh(new THREE.PlaneGeometry(1.3, 0.8), new THREE.MeshStandardMaterial({ map: TX.fabric('stripe', 3, 128), roughness: 1 })); myMat.rotation.x = -Math.PI / 2; myMat.position.set(84.55, 0.011, 10.95); myMat.receiveShadow = true; root.add(myMat);
  B.add(slab(0.95, 0.62, 0.12, 0.05), new THREE.MeshStandardMaterial({ map: TX.fabric('paisley', 4, 128), roughness: 1, flatShading: true }), 86.75, 0.04, 10.9);   // blanket
  B.add(slab(0.32, 0.42, 0.08, 0.04), M(0xd8d0c0, { roughness: 1 }), 85.85, 0.02, 10.9);
  // the mother by the clay stove
  const chulha = new THREE.Group(); chulha.position.set(87.3, 0, 14.7); root.add(chulha);
  { const cb = new Batcher(), clay = M(0x8a5a3a, { roughness: 1, flatShading: true });
    cb.add(G.box(0.5, 0.3, 0.12), clay, 0, 0.15, -0.2); cb.add(G.box(0.12, 0.3, 0.5), clay, -0.2, 0.15, 0); cb.add(G.box(0.12, 0.3, 0.5), clay, 0.2, 0.15, 0);
    cb.add(G.cyl(0.17, 0.13, 0.18, 12), M(0x3a3a38, { metalness: 0.5, roughness: 0.5 }), 0, 0.4, 0);
    for (let k = 0; k < 5; k++) cb.add(G.cyl(0.02, 0.02, 0.5, 5), M(0x4a3020), 0.3 + k * 0.03, 0.03, 0.3 - k * 0.06, 0, k, Math.PI / 2);   // firewood
    cb.build(chulha); }
  const ember = new THREE.Mesh(new THREE.SphereGeometry(0.1, 8, 6), new THREE.MeshBasicMaterial({ color: new THREE.Color(1, 0.4, 0.1).multiplyScalar(2) })); ember.scale.y = 0.4; ember.position.set(0, 0.06, 0); chulha.add(ember);
  const mother = makePerson({ female: true, top: 0x7a3a4a, bottom: 0x9a5a3a, scarf: 0xb5442e, skin: 0x6b4630, seed: 302, scale: 1.3 });
  poseFloor(mother); mother.position.set(86.55, 0, 14.15); mother.rotation.y = Math.PI / 2 + 0.5; root.add(mother);
  { const J = mother.userData.J; J.shL.rotation.set(-0.9, 0, 0.2); J.shR.rotation.set(-1.0, 0, -0.2); J.elL.rotation.x = -0.9; J.elR.rotation.x = -0.7; }
  // shelf with utensils, tin trunk, clothes on a rope, a small picture, the oil lamp
  B.add(G.box(0.25, 0.03, 0.9), ply, 87.85, 1.4, 12.5);
  for (let k = 0; k < 4; k++) B.add(G.cyl(0.06, 0.05, 0.1, 10), steel, 87.85, 1.47, 12.15 + k * 0.22);
  B.add(G.box(0.8, 0.45, 0.5), M(0x4a5a6a, { metalness: 0.4, roughness: 0.5 }), 82.7, 0.23, 14.9); B.add(G.box(0.82, 0.04, 0.52), M(0x3a4a5a, { metalness: 0.4 }), 82.7, 0.47, 14.9);
  B.add(G.cyl(0.005, 0.005, 3, 4), M(0x3a2a1a), 84.6, 2.25, 10.35, 0, 0, Math.PI / 2);
  const hang = []; for (let k = 0; k < 4; k++) { const c = new THREE.Mesh(new THREE.PlaneGeometry(0.4, 0.55), new THREE.MeshStandardMaterial({ map: TX.fabric(['buti', 'stripe', 'check', 'border'][k], k + 2, 128), side: THREE.DoubleSide, color: 0xb0a090 })); c.geometry.translate(0, -0.27, 0); c.position.set(83.5 + k * 0.7, 2.24, 10.35); root.add(c); hang.push(c); }
  B.add(G.box(0.3, 0.38, 0.02), M(0xc0902a), 85.5, 1.8, z1 - 0.02);
  // the torn notebook page from the bag, pinned by the door: "When I grow up I will be a teacher."
  const page = new THREE.Mesh(new THREE.PlaneGeometry(0.3, 0.21), new THREE.MeshStandardMaterial({ map: TX.notebookPage ? TX.notebookPage() : null, roughness: 0.9, color: 0xf2ead8 }));
  page.position.set(x0 + 0.02, 1.45, 11.3); page.rotation.y = Math.PI / 2; page.rotation.z = 0.04; root.add(page);
  const lamp = new THREE.Group(); lamp.position.set(87.85, 1.43, 13.3); root.add(lamp);
  { const lb = new Batcher(); lb.add(G.cyl(0.05, 0.06, 0.06, 10), M(0x8a6a2a, { metalness: 0.6 }), 0, 0.03, 0); lb.build(lamp); }
  const flame = new THREE.Mesh(new THREE.SphereGeometry(0.025, 6, 5), new THREE.MeshBasicMaterial({ color: new THREE.Color(1, 0.75, 0.35).multiplyScalar(3) })); flame.scale.y = 1.8; flame.position.y = 0.1; lamp.add(flame);
  const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: T.dot(), color: new THREE.Color(1, 0.6, 0.25).multiplyScalar(0.7), blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, fog: false })); halo.scale.setScalar(0.5); halo.position.y = 0.1; lamp.add(halo);
  const lampL = lights.add({ pos: new THREE.Vector3(87.55, 1.65, 13.3), color: 0xffa850, intensity: 0, distance: 7, decay: 1.5, space: 'home', priority: 3 });
  const stoveL = lights.add({ pos: new THREE.Vector3(87.2, 0.45, 14.4), color: 0xff6a20, intensity: 0, distance: 3.5, decay: 1.5, space: 'home', priority: 2 });
  // a small barred window: night sky
  const win = new THREE.Mesh(new THREE.PlaneGeometry(0.7, 0.5), new THREE.MeshBasicMaterial({ color: 0x1a2440, fog: false })); win.position.set(84.5, 1.8, z0 + 0.02); root.add(win);
  for (let k = 1; k < 4; k++) B.add(G.box(0.015, 0.5, 0.02), M(0x1a1a1a), 84.15 + k * 0.175, 1.8, z0 + 0.03);
  B.build(root, { cast: true, receive: true });

  const colliders = [
    { minX: x0 - 0.3, maxX: x0, minZ: z0, maxZ: dz0 }, { minX: x0 - 0.3, maxX: x0, minZ: dz1, maxZ: z1 },
    { minX: x0, maxX: x1, minZ: z0 - 0.3, maxZ: z0 }, { minX: x0, maxX: x1, minZ: z1, maxZ: z1 + 0.3 }, { minX: x1, maxX: x1 + 0.3, minZ: z0, maxZ: z1 },
    { minX: 84.5, maxX: 85.5, minZ: 12.35, maxZ: 13.05 }, { minX: 86.9, maxX: 88, minZ: 13.6, maxZ: 15.4 }, { minX: 82, maxX: 83.2, minZ: 14.5, maxZ: 15.4 },
    { minX: 85.7, maxX: 87.5, minZ: 10.4, maxZ: 11.4 },
  ];
  const doorCollider = { minX: x0 - 0.1, maxX: x0 + 0.1, minZ: dz0, maxZ: dz1 };
  let doorShut = false;

  // ---------- interactions ----------
  const S = { phase: 'idle' };
  interactor.add({ object: table, label: 'Put the food down', enabled: () => S.phase === 'toTable', onPress: () => setPhase('giving'), maxDist: 2.6 });
  interactor.add({ object: myMat, label: 'Lie down', enabled: () => S.phase === 'toMat', onPress: () => setPhase('lying'), maxDist: 2.6 });
  interactor.add({ object: page, label: 'Your page', enabled: () => (S.phase === 'rest' || S.phase === 'toMat') && !S.readPage, onPress: () => { S.readPage = true; ui.thought('"When I grow up I will be a teacher."', 4.5); }, maxDist: 2.2 });

  // ---------- sound ----------
  let sounds = [], snd = {};
  const passer = new THREE.Object3D(); root.add(passer);
  function startSounds() {
    audio.stopAll(sounds); sounds = []; snd = {};
    const add = (k, a) => { if (a) { snd[k] = a; sounds.push(a); } return a; };
    add('fire', audio.loop('fire', { object: chulha, volume: 0.45, ref: 1 }));
    add('drip', audio.loop('drip', { volume: 0.1 }));
    add('wind', audio.loop('wind', { volume: 0.04 }));
    add('yells', audio.loop('yells', { object: passer, volume: 0.55, ref: 2, rate: 0.9 }));
    add('heart', audio.loop('heartbeat', { volume: 0 }));   // still pounding from the run; it slows as you calm down
  }

  const head = new THREE.Vector3(), tmp = new THREE.Vector3();
  const eyelids = document.getElementById('eyelids');
  const hint = (t, s = 5) => ui.hint(t, s);
  function setPhase(p) { S.phase = p; S.t = 0; S.idle = 0; S.enter = true; }   // S.enter: true on the first update of a phase
  function setDoor(shut) { doorShut = shut; ctx.refreshColliders(); }
  function reset() {
    Object.assign(S, { phase: 'idle', t: 0, idle: 0, holdC: 0, readPage: false, ended: false, relief: 0, calmT: 0, enterFade: undefined });
    meal.visible = false; glowMat.opacity = 0.9; glowDoor.visible = true; doorPivot.visible = false;
    lampL.intensity = 0; stoveL.intensity = 0; doorGlow.intensity = 0;
    mother.rotation.y = Math.PI / 2 + 0.5; mother.userData.look = 0;
    if (eyelids) eyelids.style.setProperty('--lid', '0');
    sibLie(); fadeBlack = 0;
    setDoor(false);
  }
  let fadeBlack = 0;
  function start() {
    reset(); startSounds();
    if (extra()) {
      // Extra: you open your eyes on the floor by the door. It is night. They were waiting.
      if (eyelids) eyelids.style.setProperty('--lid', '1');
      ui.fade(false);
      player.place(x0 + 0.75, 12.1, -Math.PI / 2 - 0.25, 0.82); player.canMove = false; player.pitch = -0.1;
      ctx.police.forEach(p => { p.visible = false; });
      bagCtl.glow = 0; bagCtl.heavy = 0; bagCtl.stow = 0; player.speedScale = 1; player.canRun = false;
      glowDoor.visible = false; doorPivot.visible = true; setDoor(true);
      sibSit(); mother.rotation.y = -0.2;
      if (snd.yells) snd.yells.setVolume(0);
      setPhase('wake');
      return;
    }
    // through the glowing door: a short, soft dip to dark, then the room (V3: no bright white flash)
    ui.fade(true); setTimeout(() => ui.fade(false), 450);
    player.place(x0 + 0.9, (dz0 + dz1) / 2, -Math.PI / 2, 1.52);
    ctx.police.forEach(p => { p.visible = false; });
    bagCtl.glow = 0; bagCtl.heavy = 0; player.speedScale = 1; player.canRun = false;
    glowDoor.visible = false; doorPivot.visible = true; setDoor(true);
    audio.oneShot('doorWood', { volume: 0.8 });
    setPhase('arrive');
  }
  function stop() { audio.stopAll(sounds); sounds = []; snd = {}; if (eyelids) eyelids.style.setProperty('--lid', '0'); }

  function update(dt, t, active = true) {
    glowMat.opacity = 0.75 + 0.25 * Math.sin(t * 3);
    // ---- relief (V3): safe inside, the body calms down — the heart slows and fades, a long breath out,
    // the lamp's warm light grows and the cold blue night air of the chase gives way to the room ----
    if (S.phase !== 'idle' && S.phase !== 'done' && active) {
      S.calmT += dt;
      S.relief = ease(clamp(S.calmT / (extra() ? 4 : 7), 0, 1));
      if (snd.heart) { const h = extra() ? 0 : Math.max(0, 1 - S.calmT / 8); snd.heart.setVolume(0.75 * h * h); snd.heart.setPlaybackRate(Math.max(0.6, 1.9 - S.calmT * 0.17)); }
      if (!extra() && S.calmT > 1.3 && S.calmT - dt <= 1.3) audio.oneShot('exhale', { volume: 0.55 });
    }
    doorGlow.intensity = S.phase === 'idle' ? 5 : 0;
    flame.scale.set(1 + Math.sin(t * 17) * 0.1, 1.8 + Math.sin(t * 11) * 0.3, 1);
    animateIdle(mother, t, dt);
    if (S.phase === 'idle' || S.phase === 'done' || !active) return;
    S.t += dt; S.idle += dt;
    const entering = S.enter; S.enter = false;
    player.headWorld(head);
    const warm = 0.35 + 0.65 * S.relief; lampL.intensity = 4.5 * warm * (1 + 0.05 * Math.sin(t * 9) * Math.sin(t * 3.1)); stoveL.intensity = (1.4 + 0.2 * Math.sin(t * 7)) * warm;
    if (!extra()) {
      passer.position.set(lerp(66, 96, Math.min(1, S.t / 9)), 1.5, 12.7);
      if (snd.yells) snd.yells.setVolume(Math.max(0, 0.55 * (1 - S.t / 10)));
      if (S.t > 0.5 && S.t < 7 && S.phase === 'arrive') { const sp = Math.floor(S.t * 3); if (sp !== S.lastStep) { S.lastStep = sp; audio.oneShot('step', { object: passer, volume: 0.15, ref: 1.2 }); } }
    } else if (snd.yells) snd.yells.setVolume(0);
    hang.forEach((c, i) => { c.rotation.x = 0.04 * Math.sin(t * 0.9 + i); });
    if (sib.userData.lying) sib.rotation.z = Math.PI / 2 + 0.01 * Math.sin(t * 1.4);   // breathing in his sleep
    else { const J = sib.userData.J, a = Math.atan2(head.x - sib.position.x, head.z - sib.position.z); J.head.rotation.y = damp(J.head.rotation.y, clamp(Math.atan2(Math.sin(a - sib.rotation.y), Math.cos(a - sib.rotation.y)), -1, 1), 3, dt); }

    switch (S.phase) {
      // ---------- Extra edition ----------
      case 'wake': {
        if (eyelids) eyelids.style.setProperty('--lid', String(1 - ease(clamp((S.t - 0.6) / 3.6, 0, 1))));
        mother.userData.look = -0.4;
        if (S.t > 2.0 && S.t - dt <= 2.0) ui.thought('…Home?', 2.5);
        if (S.t > 4.8 && S.t - dt <= 4.8) ui.subtitle('Mother: "You\'re late. We waited."', 3.5);
        if (S.t > 7.2 && S.t - dt <= 7.2) ui.thought('The bag. It\'s still here.', 3);
        if (S.t > 8.5) setPhase('standing');
        break;
      }
      case 'standing': {
        const k = ease(Math.min(1, S.t / 1.4));
        player.eye = lerp(0.82, 1.52, k);          // VR too: otherwise you would walk the room at sitting height
        if (S.t > 1.5) { player.canMove = true; setPhase('toTable'); thread.set(new THREE.Vector3(85, 0.5, 12.7)); hint('Put the food on the table', 6); }
        break;
      }
      case 'eating': {
        // a short black: later, the plates are empty
        if (entering) { player.canMove = false; S.fromEye = player.eye; }
        fadeBlack = S.t < 1.2 ? S.t / 1.2 : S.t < 3.2 ? 1 : Math.max(0, 1 - (S.t - 3.2) / 1.2);
        if (S.enterFade !== (S.t < 3.2)) { S.enterFade = S.t < 3.2; ui.fade(S.enterFade); }
        if (!player.xr) player.eye = S.t < 3.2 ? lerp(S.fromEye, 0.85, ease(Math.min(1, S.t / 1.0))) : lerp(0.85, 1.52, ease(clamp((S.t - 5.8) / 1.0, 0, 1)));
        if (S.t > 1.3 && S.t - dt <= 1.3) { meal.visible = false; sibLie(); mother.rotation.y = Math.PI / 2 + 0.5; }
        if (S.t > 1.6 && S.t - dt <= 1.6) ui.subtitle('(later)', 1.8);
        if (S.t > 4.2 && S.t - dt <= 4.2) ui.thought('Tonight, we ate.', 3.5);
        if (S.t > 5.5 && S.t - dt <= 5.5) ui.subtitle('Mother: "Sleep now. Seven o\'clock tomorrow."', 3.5);
        if (S.t > 7) { setPhase('toMat'); thread.set(new THREE.Vector3(84.55, 0.3, 10.95)); hint('Lie down on your mat', 6); player.canMove = true; }
        break;
      }
      case 'lying': {
        if (entering) { player.canMove = false; S.from = player.dolly.position.clone(); S.fromYaw = player.yaw; S.fromEye = player.eye; thread.set(null); bagCtl.stow = 1; }
        const k = ease(Math.min(1, S.t / 2));
        player.dolly.position.lerpVectors(S.from, tmp.set(84.55, S.from.y, 10.95), k);
        if (!player.xr) { player.eye = lerp(S.fromEye, 0.32, k); player.pitch = lerp(0, 1.15, k); player.yaw = lerp(S.fromYaw, -Math.PI / 2, k); }
        if (S.t > 2.2) { setPhase('rest'); hint(player.xr ? 'When you are ready, squeeze both grips to close your eyes' : 'When you are ready, hold C to close your eyes', 8); }
        break;
      }
      // ---------- both editions ----------
      case 'arrive':
        if (S.t > 0.8 && S.t - dt <= 0.8) ui.thought('Home.', 2.5);
        if (S.t > 3.2 && S.t - dt <= 3.2) ui.subtitle('(the shouting runs past the door… and fades away)', 3);
        if (S.t > 5.4 && S.t - dt <= 5.4) ui.thought('They didn\'t see me. I\'m safe.', 3);
        mother.userData.look = Math.sin(S.t * 0.6) * 0.2 - 0.5;
        player.canMove = S.t > 2.5;   // stand still a moment and breathe, then walk in
        if (S.t > 6.5) { player.canMove = true; setPhase('toTable'); thread.set(new THREE.Vector3(85, 0.5, 12.7)); hint('Put the food on the table', 6); }
        break;
      case 'giving':
        if (entering) { thread.set(null); bagCtl.forceOpen = 1; player.canMove = false; S.from = player.dolly.position.clone(); S.fromYaw = player.yaw;
          // the nearest side of the table to where you clicked from
          S.to = Math.abs(S.from.x - 85) > Math.abs(S.from.z - 12.7) ? new THREE.Vector3(S.from.x < 85 ? 84.15 : 85.85, 0, 12.7) : new THREE.Vector3(85, 0, S.from.z < 12.7 ? 11.95 : 13.45);
          S.toYaw = Math.atan2(-(85 - S.to.x), -(12.7 - S.to.z)); }
        { const k = ease(Math.min(1, S.t / 0.6)); tmp.copy(S.from).lerp(S.to, k); player.dolly.position.x = tmp.x; player.dolly.position.z = tmp.z;
          if (!player.xr) { const dy = Math.atan2(Math.sin(S.toYaw - S.fromYaw), Math.cos(S.toYaw - S.fromYaw)); player.yaw = S.fromYaw + dy * k; player.pitch = lerp(player.pitch, -0.45, Math.min(1, S.t * 3)); } }
        if (S.t > 0.5 && S.t < 1.5) hands.set(0, { key: 'serve', mode: 'world', pos: new THREE.Vector3(84.9, 0.5, 12.75), rot: GRIP.toward(-1, head, table.position.clone().setY(0.4)), pose: 'grip', blend: 0.4 });
        if (S.t > 0.95 && S.t - dt <= 0.95) { bagCtl.setContents({ food: false }); meal.visible = true; audio.oneShot('fabric', { volume: 0.6 }); }
        if (S.t > 1.5 && S.t - dt <= 1.5) { bagCtl.forceOpen = 0; hands.hide(0); }
        if (S.t > 1.6) mother.rotation.y = damp(mother.rotation.y, Math.PI / 2 + 1.2, 1.5, dt);
        if (S.t > 2.0 && S.t - dt <= 2.0) ui.thought('She doesn\'t ask where it came from.', 4);
        // both editions end the same way at home: you eat together, lie down, and the day comes round again
        if (S.t > 4.5 && S.t - dt <= 4.5) ui.subtitle('Mother: "Sit. Eat."', 3);
        if (S.t > 7) setPhase('eating');
        break;
      case 'rest':
        if (player.keys.KeyC || S.xrClose) S.holdC += dt; else S.holdC = 0;
        if (eyelids) eyelids.style.setProperty('--lid', String(Math.min(0.35, S.holdC / 1.5 * 0.35)));
        if (S.holdC > 1.2 || S.idle > 45) setPhase('closing');
        break;
      case 'closing': {
        // eyes close; the machines start again
        const k = Math.min(1, S.t / 5);
        if (eyelids) eyelids.style.setProperty('--lid', String(0.35 + 0.65 * ease(k)));
        if (entering) { player.canMove = false; snd.machines = audio.loop('factory', { volume: 0 }); if (snd.machines) sounds.push(snd.machines); snd.sew = audio.loop('sewing', { volume: 0 }); if (snd.sew) sounds.push(snd.sew); }
        if (snd.machines) snd.machines.setVolume(0.3 * k);
        if (snd.sew) snd.sew.setVolume(0.5 * k);
        if (snd.fire) snd.fire.setVolume(0.45 * (1 - k));
        if (S.t > 0.3 && S.t - dt <= 0.3) ui.thought('Tomorrow is a new day.', 3.6);
        if (S.t > 4.4 && S.t - dt <= 4.4) ui.thought('…', 2.5);
        if (S.t > 7.5 && !S.ended) { S.ended = true; setPhase('done'); onEndFn && onEndFn('finale'); }
        break;
      }
    }
  }
  function atmosphere() {
    // from the cold, tense air you come in with to the warm, still air of the room (S.relief, 0 → 1)
    const r = S.relief || 0;
    return { fog: new THREE.Color(0x0a0810).lerp(new THREE.Color(0x140d08), r), density: lerp(0.04, 0.03, r), sun: 0, hemi: lerp(0.24, 0.38, r),
      hemiSky: new THREE.Color(0x4a4a72).lerp(new THREE.Color(0x8a6a5a), r), hemiGround: new THREE.Color(0x1a1418).lerp(new THREE.Color(0x2e1c10), r),
      sky: 0.15, skyTint: new THREE.Color(0.3, 0.3, 0.45), exposure: lerp(0.9, 1.02, r) };
  }
  let onEndFn = null;
  return {
    root, update, start, stop, reset, atmosphere, name: 'home',
    zone: { minX: 82 },
    onEnd(fn) { onEndFn = fn; },
    get S() { return S; },
    getColliders() { return doorShut ? [...colliders, doorCollider] : colliders; },
    get phase() { return S.phase; },
    setXRClose(v) { S.xrClose = v; },
    skip() {
      const p = S.phase;
      if (['arrive', 'giving', 'closing', 'wake', 'standing', 'eating', 'lying'].includes(p)) S.t = 99;
      else if (p === 'toTable') setPhase('giving');
      else if (p === 'toMat') setPhase('lying');
      else if (p === 'rest') setPhase('closing');
    },
  };
}
