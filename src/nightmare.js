// SPACE 3 ★ — THE NIGHTMARE (turning point)
// Board notes: the child steals food, the police are called; the alleys distort into a nightmare,
// the police become monsters, people yell "stop". Being caught is a soft reset to the last corner.
// The stolen food glows and grows heavy.
// V2 design (see docs/nightmare-design.md — Little Nightmares, P.T., Hellblade, Among the Sleep):
//   1 ESCAPE   the police become tall shadow-adults; the walls close behind you; the market crowd
//              that never looked at you now stands in the lanes and turns to watch you pass.
//   2 SHADOW   the food's glow throws your shadow on the wall; it falls behind, grows into the
//              supervisor and reaches for you.
//   3 LOOP     one lane repeats (P.T.): the second time it is papered with the day's numbers,
//              the third time sewing machines run along both walls.
//   4 HIDE     something walks toward you: smother the light (hold R / hug the bag) and keep still.
//   5 COLLAPSE at the home door the city breaks apart and rises into white light (→ the void).
import * as THREE from 'three';
import * as TX from './tex.js';
import { M, G, Batcher, lerp, ease, clamp, damp, makeMachine } from './kit.js';
import { makePerson, makePolice, setMonster, animateWalker, animateWalk, animateIdle } from './people.js';
import { T, texMat, cityBlock, wires, clothLine, rand } from './city.js';
import { MARKET } from './street.js';
import { buildLanes } from './lanes.js';

export const ROUTE = [
  { x0: 40, x1: 54, z0: 7, z1: 9.6 },
  { x0: 51.4, x1: 54, z0: -6, z1: 9.6 },
  { x0: 51.4, x1: 68, z0: -6, z1: -3.4 },
  { x0: 65.4, x1: 68, z0: -6, z1: 14 },
  { x0: 65.4, x1: 82, z0: 11.4, z1: 14 },
];
const CORNERS = [new THREE.Vector3(52.7, 0, 8.3), new THREE.Vector3(52.7, 0, -4.7), new THREE.Vector3(66.7, 0, -4.7), new THREE.Vector3(66.7, 0, 12.7)];
const NIGHT_START = 0.15;   // the market run already darkened this far (see street.js atmosphere)
export const HOME_DOOR = new THREE.Vector3(82, 1.2, 12.7);
const CHECKPOINTS = [
  { x: 41.2, z: 8.3, yaw: -Math.PI / 2 }, { x: 52.7, z: 6.5, yaw: 0 }, { x: 54.5, z: -4.7, yaw: -Math.PI / 2 },
  { x: 66.7, z: -2.5, yaw: Math.PI }, { x: 68.5, z: 12.7, yaw: -Math.PI / 2 },
];
const LOOP = { z0: -3.4, period: 8, trigger: 5.5 };          // the repeating lane (corridor 3)

export function buildNightmare(ctx) {
  const { scene, audio, player, ui, thread, bagCtl, lights, police, pursuit, camera, hands } = ctx;
  const extra = () => ctx.edition === 'extra';      // Extra edition: the loop, hiding the light, the collapse into the light
  const root = new THREE.Group(); root.name = 'nightmare'; scene.add(root);
  const colliders = [], buildings = [];
  const B = new Batcher();

  // ---------- the city ----------
  const dirt = T.dirt(), grounds = [];
  ROUTE.forEach((r, i) => {
    const t = dirt.clone(); t.needsUpdate = true; t.repeat.set((r.x1 - r.x0) / 3, (r.z1 - r.z0) / 3);
    const g = new THREE.Mesh(new THREE.PlaneGeometry(r.x1 - r.x0 + 0.2, r.z1 - r.z0 + 0.2), new THREE.MeshStandardMaterial({ map: t, roughness: 1, color: 0xb8a890, polygonOffset: true, polygonOffsetFactor: -1 - i, polygonOffsetUnits: -2 - 2 * i }));   // overlapping alley floors: a fixed order, never a z-fight
    g.rotation.x = -Math.PI / 2; g.position.set((r.x0 + r.x1) / 2, 0.001 * i, (r.z0 + r.z1) / 2); g.receiveShadow = true; root.add(g); grounds.push(g);
  });
  const cols = ['#a89a80', '#9aa0a8', '#b09a90', '#a0a88a', '#a898a8', '#b0906a'];
  const blk = (a, b, c, d, o = {}) => colliders.push(cityBlock(root, a, b, c, d, { colours: cols, hMin: 7, hMax: 13, night: true, glow: 0x1a100c, list: buildings, detail: false, ...o }));
  blk(40, 54, 9.6, 20); blk(40, 51.4, -12, 7); blk(51.4, 82, -12, -6); blk(65.4, 82, 14, 20);
  blk(54, 65.4, -3.4, 20, { period: LOOP.period }); blk(68, 82, -6, 11.4, { period: LOOP.period });   // the loop lane repeats every 8 m
  blk(82, 92, -12, 9.7); blk(82, 92, 15.7, 22); blk(88.3, 92, 9.7, 15.7);                              // clear of the home's walls
  buildings.forEach((m, i) => { m.userData.ph = i * 1.7; m.userData.spin = (rand() - 0.5) * 2; m.userData.lift = 0.6 + rand() * 1.4; m.matrixAutoUpdate = true; m.userData.home = m.position.clone(); });

  // obstacles to weave around (in the loop lane they repeat with its period)
  const ply = texMat(T.plywood());
  const sackGeo = new THREE.LatheGeometry([[0.001, 0], [0.26, 0.02], [0.3, 0.2], [0.28, 0.45], [0.18, 0.62], [0.07, 0.68], [0.001, 0.7]].map(([r, y]) => new THREE.Vector2(r, y)), 8);
  // every obstacle hugs a wall and is at most 0.7 m deep, so each 2.6 m lane keeps a clear straight
  // run of at least 1.8 m: walking roughly the right way always gets you through (no slaloming, no
  // jumping — essential in VR). They also stay clear of the doorways, cracks and watchers.
  const obstacles = [[42.0, 7.33, 0.9, 0.6], [45.0, 9.27, 0.8, 0.6], [47.9, 7.33, 1.2, 0.6],
    [51.73, 3.2, 0.6, 0.9], [51.73, 0.8, 0.6, 0.8],
    [58.0, -5.67, 1.2, 0.6], [61.0, -3.73, 0.9, 0.6], [65.0, -5.67, 0.9, 0.6],
    [65.73, -1.0, 0.6, 0.9], [65.73, 7.0, 0.6, 0.9],
    [73.0, 11.73, 0.9, 0.6], [78.5, 13.67, 0.9, 0.6]];
  obstacles.forEach(([x, z, w, d], i) => {
    if (i % 3 === 1) B.add(sackGeo, M(0x6a5e50, { flatShading: true, roughness: 1 }), x, 0, z, 0.05, i * 1.3, 0, 1.2, 1.1, 1.2);
    else { const h = 0.6 + (i % 2) * 0.4; B.add(G.box(w, h, d), ply, x, h / 2, z, 0, (i % 3 - 1) * 0.08, 0); if (i % 4 === 0) B.add(G.box(w * 0.8, 0.5, d * 0.8), ply, x, h + 0.25, z, 0, 0.2, 0); }
    colliders.push({ minX: x - w / 2, maxX: x + w / 2, minZ: z - d / 2, maxZ: z + d / 2 });
  });
  // the last lane before home: tin-sheet shacks with dark doorways (the Space 3 sketch)
  const tinM = texMat(T.tin(), { metalness: 0.2, side: THREE.DoubleSide, emissive: 0x1a1410, flatShading: true });
  for (let x = 69; x < 81.5; x += 1.6 + rand() * 0.8) {
    [[11.4, 1], [14, -1]].forEach(([zf, out]) => {
      const w = 1.5 + rand() * 0.6, h = 2.1 + rand() * 0.5;
      B.add(G.box(w, h, 0.03), tinM, x + w / 2, h / 2, zf + out * 0.03, 0, 0, (rand() - 0.5) * 0.04);
      B.add(G.box(w + 0.2, 0.02, 0.6), tinM, x + w / 2, h + 0.18, zf + out * 0.25, out * 0.5, 0, 0);
      if (rand() < 0.4) B.add(G.box(0.6, 1.7, 0.03), M(0x0c0a08), x + w / 2, 0.85, zf + out * 0.06);
    });
  }
  [[70.5, 13.6], [76.4, 11.75], [80.6, 13.6]].forEach(([x, z]) => B.add(G.cyl(0.17, 0.13, 0.3, 12), M(0x2a6a9a, { roughness: 0.5 }), x, 0.15, z));
  colliders.push({ minX: 70.3, maxX: 70.7, minZ: 13.4, maxZ: 14 }, { minX: 76.2, maxX: 76.6, minZ: 11.4, maxZ: 11.95 }, { minX: 80.4, maxX: 80.8, minZ: 13.4, maxZ: 14 });
  const fabM = [0, 1, 2, 3].map(i => new THREE.MeshStandardMaterial({ map: TX.fabric(['stripe', 'check', 'buti', 'paisley'][i], i + 1, 128), side: THREE.DoubleSide, roughness: 1 }));
  const laundry = [71, 74.6, 78.2].flatMap(lx => clothLine(root, new THREE.Vector3(lx, 2.6, 11.5), new THREE.Vector3(lx + 0.4, 2.6, 13.9), fabM, 3));
  const wl = [];
  ROUTE.forEach((r, ri) => { if (ri === 3) return; for (let k = 0; k < 5; k++) { const horiz = r.x1 - r.x0 > r.z1 - r.z0; const u = lerp(horiz ? r.x0 : r.z0, horiz ? r.x1 : r.z1, rand()), y = 4 + rand() * 3;
    wl.push(horiz ? [new THREE.Vector3(u, y, r.z0), new THREE.Vector3(u + (rand() - 0.5) * 2, y, r.z1), 0.4, 0.012] : [new THREE.Vector3(r.x0, y, u), new THREE.Vector3(r.x1, y, u + (rand() - 0.5) * 2), 0.4, 0.012]); } });
  for (let z = LOOP.z0 + 1; z < 11; z += LOOP.period) wl.push([new THREE.Vector3(65.4, 5.2, z), new THREE.Vector3(68, 5.0, z + 1.5), 0.5, 0.012]);   // loop lane: periodic too
  wires(root, wl);
  const statics = B.build(root, { cast: true, receive: true });

  // eyes in the windows
  const EYES = 170, eg = new THREE.BufferGeometry(), ep = new Float32Array(EYES * 3);
  for (let i = 0; i < EYES; i++) {
    const r = ROUTE[i % ROUTE.length], horiz = (r.x1 - r.x0) > (r.z1 - r.z0), side = rand() < 0.5;
    ep[i * 3] = horiz ? lerp(r.x0, r.x1, rand()) : (side ? r.x0 - 0.06 : r.x1 + 0.06);
    ep[i * 3 + 1] = 2 + rand() * 7;
    ep[i * 3 + 2] = horiz ? (side ? r.z0 - 0.06 : r.z1 + 0.06) : lerp(r.z0, r.z1, rand());
  }
  eg.setAttribute('position', new THREE.BufferAttribute(ep, 3));
  const eyeMat = new THREE.PointsMaterial({ size: 0.15, map: T.dot(), color: 0xff3a1a, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, fog: false });
  const eyes = new THREE.Points(eg, eyeMat); eyes.frustumCulled = false; root.add(eyes);

  // light: the food's glow (your light, and what gives you away); a red glow with the creatures
  const bagLight = lights.add({ pos: new THREE.Vector3(), color: 0xff9a40, intensity: 0, distance: 9, decay: 1.4, space: 'nightmare', priority: 4 });
  const redLight = lights.add({ pos: new THREE.Vector3(), color: 0xff2a1a, intensity: 0, distance: 10, decay: 1.5, space: 'nightmare', priority: 3 });
  const doorLight = lights.add({ pos: new THREE.Vector3(81, 1.6, 12.7), color: 0xffe2b0, intensity: 0, distance: 8, space: 'nightmare', priority: 3 });

  // ---------- 1 · the watchers: the market crowd, standing in the lanes, turning to look ----------
  const watchers = [[44, 7.25, 0], [46.5, 9.35, Math.PI], [49, 7.25, 0], [51.65, 5, Math.PI / 2], [53.75, 2, -Math.PI / 2], [51.65, -1, Math.PI / 2],
    [56, -5.75, 0], [59, -3.65, Math.PI], [62.5, -5.75, 0]].map(([x, z, r], i) => {
    const mat = new THREE.MeshStandardMaterial({ color: 0x0a0808, roughness: 1, transparent: true, opacity: 0, side: THREE.DoubleSide });
    const w = makePerson({ female: i % 2 === 1, outfit: i % 3 ? 'kurta' : 'shirt', seed: 400 + i, scale: 1.3 + (i % 3) * 0.05, material: mat });
    w.position.set(x, 0, z); w.rotation.y = r; w.visible = false; root.add(w);
    return { w, mat, gone: false, o: 0 };
  });

  // ---------- 2 · your shadow on the wall (it grows into the supervisor) ----------
  const shadowMat = new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0, depthWrite: false, fog: false });
  const shadowKid = makePerson({ child: true, outfit: 'shirt', seed: 7, scale: 1.3, material: shadowMat });
  const shadowMan = makePerson({ top: 0, bottom: 0, mustache: true, belly: 0.035, outfit: 'shirt', sleeves: 'full', glasses: true, seed: 41, scale: 1.45, material: shadowMat.clone() });
  [shadowKid, shadowMan].forEach(s => { s.visible = false; root.add(s); s.traverse(o => { if (o.isMesh) { o.castShadow = false; o.renderOrder = 2; } }); });
  const shadowManMat = shadowMan.userData.mesh.material;

  // ---------- visions: machines from the factory appear ahead and dissolve as you reach them ----------
  const visionMat = new THREE.MeshBasicMaterial({ color: 0xbcd8ff, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, fog: false });
  const visions = [[47.5, 8.3, Math.PI / 2], [74.5, 12.7, Math.PI / 2]].map(   // once as you enter, once near the end
    ([x, z, r]) => {
    const g = new THREE.Group(); g.position.set(x, 0, z); g.rotation.y = r; root.add(g);
    const mat = visionMat.clone(), m = makeMachine({ wood: mat }); m.position.y = 1.0; g.add(m);
    m.traverse(o => { if (o.isMesh) { o.material = mat; o.castShadow = false; o.receiveShadow = false; } });
    const stool = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.05, 0.38), mat); stool.position.set(0, 0.56, 0.85); g.add(stool);
    g.visible = false; return { g, m, mat, state: 0, done: false, x, z };
  });

  // ---------- 3 · the loop: what the repeating lane fills with each time round ----------
  function glyph(text, x, y, z, rotY, size = 1.4, color = '#ff2a1a') {
    const c = document.createElement('canvas'); c.width = 512; c.height = 160; const g = c.getContext('2d');
    g.font = 'bold 96px "Courier New", monospace'; g.fillStyle = color; g.textAlign = 'center'; g.textBaseline = 'middle'; g.shadowColor = color; g.shadowBlur = 18; g.fillText(text, 256, 84);
    const m = new THREE.Mesh(new THREE.PlaneGeometry(size, size * 0.31), new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(c), transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, fog: false }));
    m.position.set(x, y, z); m.rotation.y = rotY; root.add(m); return m;
  }
  const glyphs = [glyph('400 PCS', 44, 2.6, 9.55, Math.PI), glyph('Rs 6', 51.45, 2.2, 3, Math.PI / 2), glyph('Rs 10', 53.95, 3.0, -0.5, -Math.PI / 2),
    glyph('TOMORROW 7 AM', 60, 2.8, -3.45, Math.PI, 2.2), glyph('CHOR', 72, 3.2, 13.95, Math.PI, 1.6), glyph('CHOR', 79, 2.0, 11.45, 0, 1.6)];
  // second time round: the walls are papered with the day's numbers and cut cloth
  const loop2 = new THREE.Group(); loop2.visible = false; root.add(loop2);
  {
    const words = ['400', '400 PCS', 'Rs 6', '399', '400', 'Rs 10', '7 AM', '400'];
    for (let z = LOOP.z0 + 0.6, k = 0; z < 11.2; z += 1.0, k++) {
      [[65.43, Math.PI / 2], [67.97, -Math.PI / 2]].forEach(([x, r], s) => {
        const g = glyph(words[(k + s * 3) % words.length], x, 1.4 + ((k * 7 + s * 3) % 5) * 0.55, z + s * 0.5, r, 0.9 + ((k + s) % 3) * 0.3); g.material.opacity = 0.35; loop2.add(g);
        if ((k + s) % 2 === 0) { const f = new THREE.Mesh(new THREE.PlaneGeometry(0.42, 0.34), fabM[(k + s) % 4]); f.position.set(x + (s ? -0.01 : 0.01), 0.6 + ((k * 3 + s) % 4) * 0.7, z + 0.25); f.rotation.set(0, r, ((k * 13) % 7 - 3) * 0.12); loop2.add(f); }
      });
    }
  }
  // third time round: sewing machines along both walls, running by themselves
  const loop3 = new THREE.Group(); loop3.visible = false; root.add(loop3);
  const ghostMat = new THREE.MeshBasicMaterial({ color: 0xbcd8ff, transparent: true, opacity: 0.22, blending: THREE.AdditiveBlending, depthWrite: false, fog: false });
  const loopMachines = [];
  for (let z = LOOP.z0 + 1.2; z < 11.2; z += 2.0) {
    [[65.95, Math.PI / 2], [67.45, -Math.PI / 2]].forEach(([x, r]) => {
      const m = makeMachine({ wood: ghostMat }); m.position.set(x, 1.0, z); m.rotation.y = r; m.scale.setScalar(0.85);
      m.traverse(o => { if (o.isMesh) { o.material = ghostMat; o.castShadow = false; o.receiveShadow = false; } });
      loop3.add(m); loopMachines.push(m);
    });
  }
  const loopSnd = new THREE.Object3D(); root.add(loopSnd);

  // ---------- 4 · the thing coming down the last lane ----------
  const walker = makePolice(2); setMonster(walker, 1); walker.visible = false; root.add(walker);

  // ---------- 5 · the door home ----------
  const doorGlowM = new THREE.MeshBasicMaterial({ color: new THREE.Color(1, 0.9, 0.7).multiplyScalar(2), transparent: true, opacity: 0, depthWrite: false, fog: false });
  const whiteM = new THREE.MeshBasicMaterial({ color: new THREE.Color(1.6, 1.5, 1.35), transparent: true, opacity: 0, depthWrite: false, fog: false, side: THREE.BackSide });
  const whiteBall = new THREE.Mesh(new THREE.SphereGeometry(3, 24, 12), whiteM); whiteBall.renderOrder = 50; whiteBall.visible = false; root.add(whiteBall);
  // Extra: where the door was, a soft light that opens and swallows the lane
  const bloomTex = (() => { const c = document.createElement('canvas'); c.width = c.height = 128; const g = c.getContext('2d'); const r = g.createRadialGradient(64, 64, 0, 64, 64, 64);
    r.addColorStop(0, 'rgba(255,250,238,1)'); r.addColorStop(0.35, 'rgba(255,240,215,0.75)'); r.addColorStop(1, 'rgba(255,230,200,0)'); g.fillStyle = r; g.fillRect(0, 0, 128, 128); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t; })();
  const doorBloom = new THREE.Sprite(new THREE.SpriteMaterial({ map: bloomTex, transparent: true, opacity: 0, depthWrite: false, depthTest: false, fog: false }));
  doorBloom.position.set(HOME_DOOR.x + 0.4, 1.3, HOME_DOOR.z); doorBloom.renderOrder = 40; doorBloom.visible = false; root.add(doorBloom);
  const fearEl = document.getElementById('fear'), lids = document.getElementById('eyelids');
  let baseFov = null;

  // ---------- walls that close behind you ----------
  const closerMat = (() => { const t = new THREE.CanvasTexture(T.facade('#9aa0a8', true)); t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(1, 3); return new THREE.MeshStandardMaterial({ map: t, roughness: 0.95, emissive: 0x1a100c, emissiveMap: t, flatShading: true }); })();
  const closers = [
    { at: 1, box: [50.4, 9.6, 7, 2.6], axis: 'x' },          // across corridor 0, behind you
    { at: 2, box: [52.7, 2.6, -2.6, 9.6], axis: 'z' },        // across corridor 1
    { at: 3, box: [63.8, 9.6, -4.7, 2.6], axis: 'x' },        // across corridor 2
  ].map(c => {
    const [cx, h, cz, w] = c.box;
    const m = new THREE.Mesh(new THREE.BoxGeometry(c.axis === 'x' ? 0.6 : w + 0.4, 12, c.axis === 'x' ? w + 0.4 : 0.6), closerMat);
    m.position.set(cx, -12.5, cz); m.castShadow = true; root.add(m);
    return { ...c, m, k: 0, col: c.axis === 'x' ? { minX: cx - 0.3, maxX: cx + 0.3, minZ: cz - w / 2, maxZ: cz + w / 2 } : { minX: cx - w / 2 - 0.2, maxX: cx + w / 2 + 0.2, minZ: cz - 0.3, maxZ: cz + 0.3 } };
  });

  // ---------- sound ----------
  let sounds = [], snd = {};
  function startSounds() {
    audio.stopAll(sounds); sounds = []; snd = {};
    const add = (k, a) => { if (a) { snd[k] = a; sounds.push(a); } return a; };
    add('drone', audio.loop('drone', { volume: 0 }));
    add('whispers', audio.loop('whispers', { volume: 0 }));
    add('heart', audio.loop('heartbeat', { volume: 0 }));
    add('yells', audio.loop('yells', { object: police[0], volume: 0.4, ref: 2, rate: 0.95 }));
    add('wind', audio.loop('wind', { volume: 0.09 }));
  }

  // ---------- story ----------
  const S = { phase: 'idle' };
  const head = new THREE.Vector3(), tmp = new THREE.Vector3();
  const hint = (t, s = 5) => ui.hint(t, s), thought = (t, s) => ui.thought(t, s);
  const lanes = buildLanes(ctx, root, thought, () => { if (!S.ended && !extra()) { S.ended = true; pursuit.stop(); thread.set(null); setPhase('done'); onEndFn && onEndFn('home'); } });      // Normal edition: doors, hands, sky, windows, the last door
  {   // buildings that carry a door, a hand or a window keep still in the Normal edition (nothing comes apart)
    const bb = new THREE.Box3(), anchors = lanes.anchors();
    buildings.forEach(m => { bb.setFromObject(m).expandByScalar(0.6); m.userData.calm = anchors.some(a => bb.containsPoint(a)); });
  }
  function setPhase(p) { S.phase = p; S.t = 0; }
  function progress(x, z) { let best = 0; ROUTE.forEach((r, i) => { if (x >= r.x0 - 0.3 && x <= r.x1 + 0.3 && z >= r.z0 - 0.3 && z <= r.z1 + 0.3) best = i; }); return best; }
  const routePoints = (h) => [...CORNERS.slice(progress(h.x, h.z)).map(c => new THREE.Vector3(c.x, 0.05, c.z)), HOME_DOOR];

  function reset() {
    Object.assign(S, { phase: 'idle', t: 0, warp: 0, cp: 0, stamina: 1, tired: false, flash: 0, nextFlash: 10, carry: 0, ended: false, screamed: false, stepT: 0, whistleT: 5, yellT: 3, whisperT: 4,
      loops: 0, inLoop: false, loopDone: false, hide: 'none', sawGhost: false, saidBoss: false, saidShadow: false, hideT: 0, shadowZ: 0, shadowK: 0, shadowDone: false, blink: 0, collapse: 0, seenBy: 0 });
    buildings.forEach(m => { m.position.copy(m.userData.home); m.rotation.set(0, 0, 0); m.scale.set(1, 1, 1); });
    grounds.forEach((g, i) => { g.position.y = 0.001 * i; }); statics.forEach(s => { s.position.set(0, 0, 0); s.updateMatrix(); });
    police.forEach(p => setMonster(p, 0));
    eyeMat.opacity = 0; bagLight.intensity = 0; redLight.intensity = 0; doorLight.intensity = 0;
    watchers.forEach(w => { w.gone = false; w.o = 0; w.mat.opacity = 0; w.w.visible = false; });
    visions.forEach(v => { v.done = false; v.state = 0; v.mat.opacity = 0; v.g.visible = false; });
    shadowMat.opacity = 0; shadowManMat.opacity = 0; shadowKid.visible = shadowMan.visible = false;
    loop2.visible = loop3.visible = false; walker.visible = false;
    closers.forEach(c => { c.k = 0; c.m.position.y = -12.5; });
    glyphs.forEach(g => { g.material.opacity = 0; });
    lanes.reset();
    whiteBall.visible = false; whiteM.opacity = 0; doorBloom.visible = false; doorBloom.material.opacity = 0;
    if (fearEl) fearEl.style.opacity = 0;
    if (lids) lids.style.setProperty('--lid', '0');
    restoreFov();
    bagCtl.hugMode = false;
  }
  function restoreFov() { if (baseFov !== null) { camera.fov = baseFov; camera.updateProjectionMatrix(); baseFov = null; } }
  function start() {
    reset(); startSounds(); lanes.start(!extra());
    player.canMove = true;   // it's a chase: you can always move here, however you arrived
    setPhase('chase');
    S.warp = NIGHT_START; S.carry = ctx.carryFear || 0; ctx.carryFear = 0; S.nextFlash = 10;
    pursuit.speed = 2.1; pursuit.active = true; pursuit.rewind(7);
    police.forEach(p => { p.visible = true; });
    player.jogAllowed = true;
    bagCtl.glow = 0.6;
    thread.set(routePoints);
    ui.subtitle('Police: "Ruko! Stop right there!"', 2.5);
  }
  function stop() {
    audio.stopAll(sounds); sounds = []; snd = {}; pursuit.stop(); bagLight.intensity = 0; redLight.intensity = 0; doorLight.intensity = 0;
    if (fearEl) fearEl.style.opacity = 0; restoreFov();
    player.speedScale = 1; player.canRun = true; bagCtl.hugMode = false;
    reset();   // the city settles back (risen blocks, the white sphere) so nothing of it shows from the house
  }
  function blink(secs = 0.35) { S.blink = secs; }
  function caught() { lanes.onCaught(); setPhase('caught'); ui.fade(true); pursuit.stop(); audio.oneShot('scream', { volume: 0.5, rate: 1.2 }); }

  function update(dt, t, active = true) {
    if (S.warp > 0.001 && S.phase !== 'collapse') {
      buildings.forEach(m => { if (m.userData.calm && !extra()) return; const w = S.warp, ph = m.userData.ph; m.rotation.z = w * 0.07 * Math.sin(t * 0.6 + ph); m.rotation.x = w * 0.05 * Math.sin(t * 0.45 + ph * 1.3); m.scale.y = 1 + w * 0.18 * Math.sin(t * 0.9 + ph); });
      laundry.forEach((c, i) => { c.rotation.x = 0.3 * S.warp * Math.sin(t * 2.3 + i); });
    }
    if (S.phase === 'idle' || S.phase === 'done' || !active) return;
    S.t += dt;
    player.headWorld(head);
    const seg = progress(head.x, head.z);
    if (seg > S.cp) {
      S.cp = seg;
      closers.forEach(c => { if (c.at === seg && c.k === 0) { c.k = 0.001; audio.oneShot('thunder', { volume: 0.35, rate: 0.6 }); } });
    }

    // V3: the change creeps in (about 12 s instead of 6), picking up where the run through the market left off
    S.warp = Math.min(1, S.warp + dt / 12);
    const mk = ease(clamp((S.t - 3) / 9, 0, 1));
    police.forEach(p => { setMonster(p, mk); animateWalker(p, t, dt); });
    if (!S.screamed && S.t > 7 && S.phase === 'chase') { S.screamed = true; audio.oneShot('scream', { object: police[0], volume: 0.7, ref: 3 }); thought('They\'re not men anymore.', 3.5); }
    eyeMat.opacity = S.warp * (0.6 + 0.4 * Math.sin(t * 2.3));
    // the food: your light, and what gives you away
    const hidden = S.phase === 'chase' && S.hide === 'coming' && (player.keys.KeyR || player.qHeldXR || bagCtl.hugging);
    bagCtl.glow = hidden ? 0.02 : 0.6 + 0.4 * S.warp; bagCtl.heavy = Math.min(1, S.t / 40);
    bagLight.pos.set(head.x, 0.9, head.z); bagLight.intensity = hidden ? 0.15 : 3 + S.warp * 2.5 + Math.sin(t * 5) * 0.3;
    redLight.pos.copy((S.hide === 'coming' ? walker : police[0]).position).setY(2.2); redLight.intensity = S.warp * (S.inLoop ? 0 : 5);

    // breath
    const moving = player.moving, running = player.running && moving;
    S.stamina = clamp(S.stamina + (running ? -dt / 6 : dt / 4), 0, 1);
    if (S.stamina <= 0.01) S.tired = true;
    if (S.tired && S.stamina > 0.35) S.tired = false;
    player.canRun = !S.tired;
    player.speedScale = 1 - 0.06 * bagCtl.heavy;

    // pursuers (paused inside the loop and while something else hunts you)
    const chasing = S.phase === 'chase' && !S.inLoop && S.hide !== 'coming';
    pursuit.active = chasing;
    pursuit.speed = moving ? 2.1 : 2.7;
    const d = chasing ? pursuit.update(dt) : (S.hide === 'coming' ? walker.position.distanceTo(tmp.set(head.x, 0, head.z)) : 99);
    police.forEach(p => { p.visible = !S.inLoop && S.hide !== 'coming' && S.phase !== 'collapse'; });
    const near = Math.max(0, 1 - d / 10);
    if (snd.drone) snd.drone.setVolume(0.3 * S.warp * S.warp);   // V3.1: the drone was deafening
    if (snd.whispers) snd.whispers.setVolume(0.5 * S.warp * (0.4 + near) + (S.inLoop ? 0.3 : 0));
    if (snd.heart) { snd.heart.setVolume(Math.max(0.3 + 0.7 * Math.max(near, hidden ? 0.9 : 0), S.carry * Math.max(0, 1 - S.t / 8))); snd.heart.setPlaybackRate(Math.max(1 + near * 0.9, 2 * S.carry * Math.max(0, 1 - S.t / 8))); }
    if (snd.yells) snd.yells.setVolume(chasing ? 0.4 : 0);
    thread.urgent = !moving && chasing;

    if (chasing) {
      S.stepT -= dt;
      if (S.stepT <= 0) { S.stepT = 0.36; police.forEach((p, i) => audio.oneShot('step', { object: p, volume: 0.15, rate: 0.7 + i * 0.1, ref: 1.2 })); }
      S.whistleT -= dt;
      if (S.whistleT <= 0) { S.whistleT = 7 + Math.random() * 4; audio.oneShot('whistle', { object: police[0], volume: 0.75, ref: 3, rate: 1 - S.warp * 0.25 }); }
      S.yellT -= dt;
      if (S.yellT <= 0) {
        S.yellT = 6 + Math.random() * 5;
        ui.subtitle(['Police: "Ruko! Stop!"', 'Police: "Chor! Pakdo! Grab the thief!"', 'Police: "You can\'t run forever!"', '"…stop… stop… stop…"'][Math.floor(Math.random() * 4)], 2.5);
        audio.oneShot('yells', { object: police[0], volume: 0.55, ref: 2, rate: 0.8 + Math.random() * 0.3 });
      }
    }
    // the day whispers in your ear
    S.whisperT -= dt;
    if (S.whisperT <= 0 && S.warp > 0.5 && S.phase === 'chase') {
      S.whisperT = 5 + Math.random() * 5;
      const lines = ['"…chor…"', '"…ten rupees… this is six…"', '"…four more pieces…"', '"…same time tomorrow…"', '"…everyone has scraps…"'];
      ui.subtitle(lines[Math.floor(Math.random() * lines.length)], 2.2);
    }
    // fear at the edges of sight
    const fear = Math.min(1, near * 1.3 + S.flash * 0.3 + (hidden ? 0.35 : 0));
    if (fearEl) fearEl.style.opacity = String(fear * (0.75 + 0.25 * Math.sin(t * (4 + near * 6))));
    if (!player.xr) { if (baseFov === null) baseFov = camera.fov; camera.fov = baseFov + near * 5 * Math.sin(t * 2.5) + S.warp * 3; camera.updateProjectionMatrix(); }
    // a blink (covers the loop's jump)
    if (S.blink > 0) { S.blink -= dt; if (lids) lids.style.setProperty('--lid', String(Math.sin(Math.max(0, S.blink) / 0.35 * Math.PI) * 1.0)); if (S.blink <= 0 && lids) lids.style.setProperty('--lid', '0'); }

    // the walls close behind you
    closers.forEach(c => { if (c.k > 0 && c.k < 1) { c.k = Math.min(1, c.k + dt / 1.6); c.m.position.y = -12.5 + 12.5 * ease(c.k); } });

    // ---- 1 · the watchers turn their heads to follow you ----
    watchers.forEach(o => {
      const dd = Math.hypot(o.w.position.x - head.x, o.w.position.z - head.z);
      if (!o.gone && dd < 1.4) { o.gone = true; audio.oneShot('whispers', { object: o.w, volume: 0.25, rate: 1.3, ref: 1 }); }
      const want = !o.gone && S.warp > 0.3 && dd < 14 ? 0.92 : 0;
      o.o = damp(o.o, want, o.gone ? 6 : 1.5, dt); o.mat.opacity = o.o; o.w.visible = o.o > 0.01;
      if (o.w.visible) {
        const J = o.w.userData.J, a = Math.atan2(head.x - o.w.position.x, head.z - o.w.position.z);
        const rel = Math.atan2(Math.sin(a - o.w.rotation.y), Math.cos(a - o.w.rotation.y));
        J.head.rotation.y = damp(J.head.rotation.y, clamp(rel, -1.3, 1.3), 3, dt); J.spine.rotation.y = damp(J.spine.rotation.y, clamp(rel * 0.4, -0.5, 0.5), 2, dt);
        J.head.rotation.x = 0.15; animateIdle(o.w, t, dt);
      }
    });

    visions.forEach(gh => {
      const dist = Math.hypot(gh.x - head.x, gh.z - head.z);
      const target = extra() && !gh.done && dist < 11 && S.warp > 0.3 ? 0.2 + 0.1 * Math.sin(t * 9) * Math.sin(t * 2.3) : 0;
      if (extra() && !gh.done && dist < 2.6) { gh.done = true; audio.oneShot('sewing', { volume: 0.55, rate: 1.4 }); if (!S.sawGhost) { S.sawGhost = true; thought('The machines… they followed me.', 3.5); } }
      gh.state = lerp(gh.state, target, dt * (gh.done ? 6 : 3)); gh.mat.opacity = gh.state; gh.g.visible = gh.state > 0.01;
      gh.m.userData.needle.position.y = 0.16 + 0.03 * Math.sin(t * 40);
    });
    // ---- 2 · your shadow on the wall falls behind, grows into the supervisor, reaches ----
    if (!S.shadowDone && (seg === 1 || seg === 2) && S.warp > 0.4) {
      const onC1 = seg === 1;
      // the shadow follows your position along the wall, more and more slowly
      const along = onC1 ? head.z : head.x;
      if (!S.shadowK) { S.shadowZ = along; S.shadowSeg = seg; }
      if (S.shadowSeg !== seg) { S.shadowSeg = seg; S.shadowZ = along; }
      S.shadowK = Math.min(1, S.shadowK + dt / 14);
      const lag = lerp(4, 0.9, S.shadowK);
      S.shadowZ = damp(S.shadowZ, along, lag, dt);
      const grow = ease(clamp((S.shadowK - 0.45) / 0.4, 0, 1));
      [shadowKid, shadowMan].forEach((s, i) => {
        s.visible = true;
        if (onC1) { s.position.set(51.43, 0, S.shadowZ); s.rotation.y = Math.PI / 2; } else { s.position.set(S.shadowZ, 0, -5.97); s.rotation.y = 0; }
        const base = i ? 1.45 : 1.3;
        s.scale.set(base * (1 + grow * (i ? 0.15 : 0)), base * (1 + 0.6 * grow), 0.04);
        animateWalk(s, along * 2.2, 0.8);
      });
      shadowMat.opacity = 0.75 * (1 - grow) * Math.min(1, S.shadowK * 4);
      shadowManMat.opacity = 0.8 * grow;
      if (grow > 0.6) { const J = shadowMan.userData.J; J.shR.rotation.set(-1.9 * (grow - 0.6) / 0.4, 0, -0.3); J.elR.rotation.x = -0.2; }
      if (grow > 0.95 && !S.saidBoss) { S.saidBoss = true; ui.subtitle('"Same time tomorrow."', 3); audio.oneShot('coins', { volume: 0.5, rate: 0.6 }); }
      if (S.shadowK > 0.3 && !S.saidShadow) { S.saidShadow = true; thought('My shadow… it isn\'t keeping up.', 3.5); }
    } else if (seg >= 3 && !S.shadowDone) { S.shadowDone = true; }
    if (S.shadowDone) { shadowMat.opacity = damp(shadowMat.opacity, 0, 4, dt); shadowManMat.opacity = damp(shadowManMat.opacity, 0, 4, dt); if (shadowManMat.opacity < 0.01) shadowKid.visible = shadowMan.visible = false; }

    // ---- Normal edition: five lanes, five refusals (lanes.js) ----
    if (!extra()) lanes.update(dt, t, head, seg, S.warp);

    // ---- 3 · the loop ----
    if (extra() && seg === 3 && !S.loopDone && !S.inLoop && head.z > LOOP.z0 + 0.5) { S.inLoop = true; thought('Wait. Where are they?', 3); }
    if (S.inLoop) {
      if (head.z > LOOP.trigger && S.loops < 2) {
        // the lane starts again (a stumble covers the jump; the street repeats exactly every 8 m)
        player.dolly.position.z -= LOOP.period; S.loops++; blink(0.35);
        audio.oneShot('heartbeat', { volume: 0.9 }); audio.oneShot('whispers', { volume: 0.4, rate: 0.8 });
        if (S.loops === 1) { loop2.visible = true; ui.subtitle('"Four hundred pieces."', 3); setTimeout(() => thought('I\'ve been here.', 3), 900); }
        if (S.loops === 2) {
          loop3.visible = true; thought('The same lane. Again.', 3);
          loopSnd.position.set(66.7, 1.2, 2); snd.loopSew = audio.loop('sewing', { object: loopSnd, volume: 0.6, ref: 3 }); snd.loopFac = audio.loop('factory', { object: loopSnd, volume: 0.5, ref: 4 });
          if (snd.loopSew) sounds.push(snd.loopSew); if (snd.loopFac) sounds.push(snd.loopFac);
        }
      }
      loopMachines.forEach((m, i) => { m.userData.ph += dt * 26; m.userData.needle.position.y = 0.16 + Math.sin(m.userData.ph + i) * 0.02; m.userData.wheel.rotation.x -= dt * 26; });
      if (S.loops >= 2 && head.z > 8.5) {
        S.inLoop = false; S.loopDone = true;
        loop2.visible = false; loop3.visible = false;
        if (snd.loopSew) snd.loopSew.stop(); if (snd.loopFac) snd.loopFac.stop();
        pursuit.active = true; pursuit.rewind(6); thought('They\'re back.', 2.5);
      }
    }

    // ---- 4 · hide the light ----
    if (extra() && seg === 4 && S.hide === 'none' && head.x > 68.8) {
      S.hide = 'coming'; S.hideT = 0; bagCtl.hugMode = true;
      walker.visible = true; walker.position.set(80.5, 0, 12.7); walker.rotation.y = -Math.PI / 2; walker.userData.walk = 1;
      audio.oneShot('scream', { object: walker, volume: 0.5, rate: 0.7, ref: 4 });
      thought('Something is coming. It follows the light.', 3.5);
      hint(player.xr ? 'Hold the bag to your chest to hide the light — and stay still' : 'Hold R to hide the light — and stay still', 7);
    }
    if (S.hide === 'coming') {
      S.hideT += dt;
      const toward = walker.position.x > head.x + 0.4;
      const wantZ = S.sidestep ? (head.z > 12.7 ? 11.75 : 13.65) : 12.7;
      walker.position.z = damp(walker.position.z, wantZ, 2, dt);
      walker.position.x -= dt * (hidden ? 0.7 : 1.15);
      walker.userData.stride += dt * 0.9; animateWalker(walker, t, dt);
      const J = walker.userData.J; J.head.rotation.y = Math.sin(t * 0.9) * 0.7;           // searching
      const dw = Math.hypot(walker.position.x - head.x, walker.position.z - head.z);
      if (toward && dw < 2.4 && hidden && !moving) S.sidestep = true;
      if (toward && dw < 1.0 && !(hidden && !moving) && !ctx.noCatch) { caught(); S.hide = 'none'; walker.visible = false; S.sidestep = false; }
      if (!toward && walker.position.x < head.x - 3) {
        S.hide = 'passed'; S.sidestep = false; bagCtl.hugMode = false; walker.visible = false;
        thought('It didn\'t see me.', 3); pursuit.active = true; pursuit.rewind(9);
      }
    }

    // lightning
    S.nextFlash -= dt;
    if (S.nextFlash <= 0 && S.phase === 'chase' && !S.inLoop && S.hide !== 'coming') { S.nextFlash = 7 + Math.random() * 6; S.flash = 0.7; S.thunderAt = S.t + 0.5 + Math.random() * 0.6; }
    if (S.thunderAt && S.t > S.thunderAt) { S.thunderAt = 0; audio.oneShot('thunder', { volume: 0.5 }); }
    S.flash = Math.max(0, S.flash - dt * 2.5);

    // the glowing door home
    const doorK = seg === 4 ? clamp((head.x - 70) / 10, 0, 1) : 0;
    doorLight.intensity = doorK * 6 + S.collapse * 10;

    switch (S.phase) {
      case 'chase':
        if (d < 0.9 && chasing && !lanes.safe && !ctx.noCatch) caught();   // (ctx.noCatch: automated route tests only)
        if (!extra() && lanes.opened && !S.ended) { S.ended = true; pursuit.stop(); thread.set(null); setPhase('done'); onEndFn && onEndFn('home'); }   // Normal: the door opens — home
        if (head.x > HOME_DOOR.x - 1.1 && head.z > 11.4 && !S.ended) {
          if (extra() && S.hide === 'passed') { setPhase('collapse'); startCollapse(); }
        }
        break;
      case 'caught':
        if (S.t > 0.9 && S.t - dt <= 0.9) {
          const c = CHECKPOINTS[S.cp];
          player.place(c.x, c.z, c.yaw, player.eye);
          pursuit.rewind(8); S.stamina = 1; S.tired = false;
          if (S.cp === 3) { S.inLoop = false; S.loops = 0; loop2.visible = loop3.visible = false; if (snd.loopSew) snd.loopSew.stop(); if (snd.loopFac) snd.loopFac.stop(); }
        }
        if (S.t > 1.2) { ui.fade(false); setPhase('chase'); thought('No. Again. Run.', 2.5); }
        break;
      case 'collapse': {
        // the city breaks apart and rises; everything turns to light
        S.collapse = Math.min(1, S.t / 6);
        const k = S.collapse;
        player.canMove = false;
        buildings.forEach((m, i) => {
          const u = m.userData, lift = Math.max(0, k * 1.4 - (i % 7) * 0.06);
          m.position.y = u.home.y + lift * lift * 30 * u.lift; m.rotation.z += dt * u.spin * k; m.rotation.x += dt * u.spin * 0.5 * k;
        });
        statics.forEach(s => { s.position.y = k * k * 18; s.updateMatrix(); });
        grounds.forEach(g => { g.position.y = -k * k * 6; });
        doorBloom.visible = true; doorBloom.material.opacity = Math.min(0.95, 0.3 + k * 2.5); doorBloom.scale.setScalar(3 + 60 * k * k);
        doorLight.pos.set(HOME_DOOR.x, 1.6, HOME_DOOR.z); doorLight.intensity = 6 + 30 * k;
        whiteBall.visible = true; whiteBall.position.copy(head); whiteM.opacity = clamp((k - 0.55) / 0.4, 0, 1);
        if (S.t > 0.4 && S.t - dt <= 0.4) { audio.oneShot('thunder', { volume: 0.6, rate: 0.5 }); thought('Home…', 2.5); }
        if (S.t > 1.8 && S.t - dt <= 1.8) ui.subtitle('"Ten rupees. This is six."', 1.8);
        if (S.t > 3.0 && S.t - dt <= 3.0) ui.subtitle('"Same time tomorrow."', 1.8);
        if (S.t > 4.2 && S.t - dt <= 4.2) ui.subtitle('"Chor…"', 1.6);
        if (S.t > 5.2 && S.t - dt <= 5.2) ui.fade(true, true);
        if (S.t > 6.8 && !S.ended) { S.ended = true; thread.set(null); setPhase('done'); onEndFn && onEndFn('void'); }
        break;
      }
    }
  }
  function startCollapse() {
    pursuit.stop(); thread.set(null);
    police.forEach(p => { p.visible = false; });
    if (ctx.hideSpace) ctx.hideSpace('home');   // the house goes first: only the light where its door was
    if (fearEl) fearEl.style.opacity = 0;
    if (snd.yells) snd.yells.setVolume(0); if (snd.heart) snd.heart.setVolume(0.2);
    audio.oneShot('doorWood', { volume: 0.7 });
  }

  function atmosphere() {
    const w = S.warp || 0, f = S.flash || 0, c = S.collapse || 0, loop = S.inLoop ? 1 : 0, dim = 1 - lanes.dim;   // dim: the sky closing, the bulbs dying
    const fog = new THREE.Color(0xb08a60).lerp(new THREE.Color(0x1c0508), Math.min(1, w * 1.6)).lerp(new THREE.Color(0x9a90c0), f * 0.5).lerp(new THREE.Color(0xf6eedc), c);
    return {
      fog, density: lerp(lerp(0.026, 0.075, w), 0.2, loop) * (1 - c * 0.7),
      sun: (lerp(2.2, 0, Math.min(1, w * 2.5)) + f * 2.2) * dim, hemi: (lerp(0.75, 0.2, w) + f * 1.3) * dim + c * 2.5,
      hemiSky: new THREE.Color(0xb8c4d8).lerp(new THREE.Color(0x5a2a6a), w).lerp(new THREE.Color(0xfff2dc), c), hemiGround: new THREE.Color(0x5a4430).lerp(new THREE.Color(0x12040a), w).lerp(new THREE.Color(0xe8d8c0), c),
      sky: lerp(1, 0.18, w) * dim + c * 2.5, exposure: lerp(1.0, 0.85, w) + c * 0.3,
      skyTint: new THREE.Color(1, 1, 1).lerp(new THREE.Color(0.55, 0.08, 0.12), Math.min(1, w * 1.3)).lerp(new THREE.Color(0.8, 0.78, 1), f * 0.6).lerp(new THREE.Color(1, 0.96, 0.9), c),
    };
  }
  let onEndFn = null;
  return {
    root, update, start, stop, reset, atmosphere, name: 'nightmare',
    zone: { minX: MARKET.x1 + 0.4 },
    onEnd(fn) { onEndFn = fn; },
    getColliders() { return [...colliders, ...closers.filter(c => c.k >= 1).map(c => c.col), ...lanes.colliders()]; },
    get phase() { return S.phase; },
    get stamina() { return S.stamina; },
    get S() { return S; }, lanes,
    // scene select: you are at the start of the run, or at the end of it in front of your own door
    sceneStart(atDoor) {
      const trail = atDoor ? [[66.7, 2], [66.7, 12.7], [72, 12.7], [76, 12.7], [79.8, 12.7]] : [[33, 3], [37, 6], [39.5, 8.3], [41, 8.3]];
      const [x, z] = trail[trail.length - 1];
      player.place(x, z, -Math.PI / 2, 1.52); player.canMove = true;
      pursuit.trail = trail.map(([a, b]) => new THREE.Vector3(a, 0, b)); pursuit.rewind(atDoor ? 10 : 7);
      if (atDoor) {
        Object.assign(S, { cp: 4, loopDone: true, inLoop: false, hide: 'passed', shadowDone: true, warp: 1, sawGhost: true });
        visions.forEach(v => { v.done = true; });
        lanes.S.sky = 1; lanes.S.win = 3; lanes.S.winT = 9; lanes.arms.forEach(a => { a.done = true; });
      }
    },
    skip() {
      if (S.phase !== 'chase') { S.t = 99; return; }
      if (S.cp < 3) { player.place(66.7, -2.5, Math.PI, player.eye); S.cp = 3; }
      else if (S.inLoop) { if (S.loops < 2) player.place(66.7, LOOP.trigger + 0.2, Math.PI, player.eye); else player.place(66.7, 9, Math.PI, player.eye); }
      else if (extra() && S.hide !== 'passed') { if (S.hide === 'none') player.place(69.5, 12.7, -Math.PI / 2, player.eye); else { walker.position.x = player.dolly.position.x - 3.5; S.hide = 'coming'; } }
      else if (!extra() && head.x > 80) lanes.forceOpen();
      else player.place(extra() ? 81.2 : 80.6, 12.7, -Math.PI / 2, player.eye);
    },
  };
}
