// SPACE 1 — THE SWEATSHOP (high-end rebuild)
// Board notes: gloomy, dimly lit, machines + quiet conversations; huge to a child but cramped
// and stuffy. Feed fabric through the machine, look out the one window at a school, receive the
// day's wages in coins. Key object: the faded, patched cloth bag hanging by the factory door.
// Same beats and lines as v0.4; everything you see is rebuilt.
import * as THREE from 'three';
import * as TX from './tex.js';
import { GRIP } from './fp.js';
import {
  lerp, clamp, ease, damp, M, FLAT, G, Batcher, mesh, slab, wireGeo,
  makePerson, poseSit, fitSitLegs, poseStand, animateSew, animateWalk, animateIdle, makeMachine, animateMachine, makeBag, setBagOpen,
} from './kit.js';

export const ROOM = { minX: -8, maxX: 8, minZ: -6, maxZ: 6, h: 4.0 };
const ROWS = [1.25, -1.5, -4.25];
const COLS = [-6.2, -3.6, -1.0, 1.6];
const TXp = COLS[0], TZp = ROWS[0];
const TABLE_H = 1.0;
const HEAD_X = -0.17;                       // the player's machine head sits nearer the table's left edge
const SEAT = { x: TXp + HEAD_X - 0.2, z: TZp + 0.82 };   // sit square to the needle, not behind the machine head
const WIN = { z0: 0.7, z1: 3.1, y0: 1.25, y1: 2.65 };
const DOOR = { z0: 3.2, z1: 4.6, h: 2.6 };
const QUOTA = 4;
const CHILD_SCALE = [1.16, 1.22, 1.12, 1.26, 1.18, 1.14, 1.24, 1.2, 1.1, 1.22, 1.15, 1.19];   // the other children: smaller than you (1.3) and far smaller than the adults
const SUN_BASE = 4.2;   // dusk: weaker and warmer than V2.0's midday sun
const SUN_DIR = new THREE.Vector3(1, -0.62, 0.24).normalize();   // sunlight travels this way — a low, late-afternoon sun (dusk)

export function buildSweatshop(ctx) {
  const { scene, audio, interactor, player, ui, thread, hands, bagCtl, lights } = ctx;
  const wrapA = a => Math.atan2(Math.sin(a), Math.cos(a));
  const root = new THREE.Group(); root.name = 'sweatshop'; scene.add(root);
  const tmp = new THREE.Vector3(), tmp2 = new THREE.Vector3(), headPos = new THREE.Vector3();

  // ---------- textures & materials ----------
  const T = {
    wall: TX.wall(), floor: TX.floor(), ceil: TX.ceiling(), wood: TX.wood(), woodDark: TX.wood([0.3, 0.19, 0.12], 77), rust: TX.rust(),
    fab: [['buti', 0], ['stripe', 1], ['check', 2], ['paisley', 3], ['border', 4], ['buti', 5], ['check', 0], ['paisley', 1], ['stripe', 3], ['border', 2]].map(([k, p]) => TX.fabric(k, p)),
  };
  const woodM = new THREE.MeshStandardMaterial({ ...T.wood, roughness: 1 });
  const woodDarkM = new THREE.MeshStandardMaterial({ ...T.woodDark, roughness: 1 });
  const fabM = T.fab.map(map => new THREE.MeshStandardMaterial({ map, roughness: 0.95 }));
  const ironM = M(0x1d1b19, { roughness: 0.5, metalness: 0.6 });
  const STEELM = () => M(0xb8b8b4, { metalness: 0.9, roughness: 0.25 });
  const B = new Batcher();               // static set dressing, merged per material

  // ---------- shell ----------
  const W = ROOM.maxX - ROOM.minX, D = ROOM.maxZ - ROOM.minZ, H = ROOM.h;
  const floorM = new THREE.MeshStandardMaterial({ ...TX.withRepeat(T.floor, W / 4, D / 4) });
  const floor = mesh(new THREE.PlaneGeometry(W, D), floorM); floor.rotation.x = -Math.PI / 2; floor.castShadow = false; root.add(floor);
  const ceilM = new THREE.MeshStandardMaterial({ ...TX.withRepeat(T.ceil, W / 4, D / 4), side: THREE.FrontSide });
  const ceil = mesh(new THREE.PlaneGeometry(W, D), ceilM, 0, H, 0, root); ceil.rotation.x = Math.PI / 2;

  // walls: interior planes that tile the brick/plaster texture continuously
  function wallPiece(len, y0, y1, along0, cx, cz, ry) {
    const m = new THREE.MeshStandardMaterial({ ...TX.withRepeat(T.wall, len / 4, (y1 - y0) / 4, along0 / 4, y0 / 4) });
    // panels overlap a little past corners, floor and ceiling, so no hairline cracks can shimmer
    const ext = 0.06, yb = y0 <= 0 ? -0.05 : y0, yt = y1 >= ROOM.h ? ROOM.h + 0.05 : y1;
    const p = mesh(new THREE.PlaneGeometry(len + ext * 2, yt - yb), m, cx, (yb + yt) / 2, cz, root); p.rotation.y = ry; p.castShadow = false; return p;
  }
  wallPiece(W, 0, H, 0, 0, ROOM.minZ, 0);                         // front (z-)
  wallPiece(W, 0, H, 1.3, 0, ROOM.maxZ, Math.PI);                 // back (z+)
  const LW = (z0, z1, y0, y1) => wallPiece(z1 - z0, y0, y1, z0 + 6, ROOM.minX, (z0 + z1) / 2, Math.PI / 2);
  LW(ROOM.minZ, ROOM.maxZ, 0, WIN.y0); LW(ROOM.minZ, ROOM.maxZ, WIN.y1, H); LW(ROOM.minZ, WIN.z0, WIN.y0, WIN.y1); LW(WIN.z1, ROOM.maxZ, WIN.y0, WIN.y1);
  const RW = (z0, z1, y0, y1) => wallPiece(z1 - z0, y0, y1, 6 - z1, ROOM.maxX, (z0 + z1) / 2, -Math.PI / 2);
  RW(ROOM.minZ, DOOR.z0, 0, H); RW(DOOR.z1, ROOM.maxZ, 0, H); RW(DOOR.z0, DOOR.z1, DOOR.h, H);
  // invisible thick shell that blocks sunlight everywhere except the window (and the door when open)
  const occ = new THREE.MeshBasicMaterial({ colorWrite: false, depthWrite: false });
  const occluder = (w, h, d, x, y, z) => { const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), occ); m.position.set(x, y, z); m.castShadow = true; root.add(m); return m; };
  // (the opening is 4 cm bigger than the window on every side, so no occluder face lies in the same
  // plane as the frame's faces — coplanar casters were the flicker on the window's edges)
  const o0 = WIN.y0 - 0.04, o1 = WIN.y1 + 0.04, oz0 = WIN.z0 - 0.04, oz1 = WIN.z1 + 0.04;
  occluder(0.3, o0, D + 1, ROOM.minX - 0.15, o0 / 2, 0);
  occluder(0.3, H - o1 + 0.3, D + 1, ROOM.minX - 0.15, (o1 + H + 0.3) / 2, 0);
  occluder(0.3, o1 - o0, oz0 - ROOM.minZ + 0.5, ROOM.minX - 0.15, (o0 + o1) / 2, (ROOM.minZ - 0.5 + oz0) / 2);
  occluder(0.3, o1 - o0, ROOM.maxZ + 0.5 - oz1, ROOM.minX - 0.15, (o0 + o1) / 2, (oz1 + ROOM.maxZ + 0.5) / 2);
  occluder(W + 1, 0.3, D + 1, 0, H + 0.15, 0);
  occluder(W + 1, H, 0.3, 0, H / 2, ROOM.minZ - 0.15); occluder(W + 1, H, 0.3, 0, H / 2, ROOM.maxZ + 0.15);
  occluder(0.3, H, DOOR.z0 - ROOM.minZ + 0.3, ROOM.maxX + 0.15, H / 2, (DOOR.z0 + ROOM.minZ - 0.3) / 2);
  occluder(0.3, H, ROOM.maxZ - DOOR.z1 + 0.3, ROOM.maxX + 0.15, H / 2, (DOOR.z1 + ROOM.maxZ + 0.3) / 2);
  occluder(0.3, H - DOOR.h, DOOR.z1 - DOOR.z0, ROOM.maxX + 0.15, (H + DOOR.h) / 2, (DOOR.z0 + DOOR.z1) / 2);

  // skirting grime strip & brick piers with plaster
  const pierM = new THREE.MeshStandardMaterial({ ...TX.withRepeat(T.wall, 0.14, 1) });
  const piers = [[-4.9, 0.12], [0.3, 0.12], [-2.3, -2.9], [3.1, 0.12], [5.6, -2.9]];
  piers.forEach(([x, z]) => B.add(G.box(0.5, H, 0.5), pierM, x, H / 2, z));
  // ceiling beams, conduit, pipes
  const beamM = M(0x3a332a, { roughness: 0.9 });
  for (let x = -6; x <= 6; x += 3) B.add(G.box(0.28, 0.32, D), beamM, x, H - 0.16, 0);
  B.add(G.cyl(0.07, 0.07, W, 10), M(0x4a3a2c, { metalness: 0.5, roughness: 0.55 }), 0, 3.55, 5.6, 0, 0, Math.PI / 2);
  B.add(G.cyl(0.045, 0.045, D, 8), M(0x3a3026, { metalness: 0.4, roughness: 0.6 }), -7.75, 3.35, 0, Math.PI / 2, 0, 0);
  B.add(G.cyl(0.03, 0.03, H, 6), M(0x2a2420), 7.8, H / 2, -5.6);
  const wireM = M(0x0c0c0c, { roughness: 0.6 });
  const rr = (() => { let s = 7; return () => { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646; }; })();
  for (let k = 0; k < 16; k++) {
    const x = -7.5 + rr() * 15, z = -5.5 + rr() * 11;
    B.add(wireGeo(new THREE.Vector3(x, 3.82, z), new THREE.Vector3(x + (rr() - 0.5) * 6, 3.82, z + (rr() - 0.5) * 5), 0.2 + rr() * 0.4, 0.007), wireM);
  }

  // ---------- the window: barred, grimy, partly boarded ----------
  const wx = ROOM.minX, wzc = (WIN.z0 + WIN.z1) / 2, wyc = (WIN.y0 + WIN.y1) / 2, ww = WIN.z1 - WIN.z0, wh = WIN.y1 - WIN.y0;
  // plain dark paint, no wood-grain texture: seen edge-on (as the title camera and your seat see the
  // jambs), fine grain lines alias into crawling stripes — the window 'flicker'
  const frameM = M(0x2b2019, { roughness: 0.9, flatShading: true });
  // the frame, bars, rail and mullion cast shadows but do not receive them: their faces inside the
  // opening sit edge-on to the sun, where shadow-map acne showed as crawling stripes
  const WB = new Batcher();
  WB.add(G.box(0.22, 0.09, ww + 0.2), frameM, wx + 0.02, WIN.y0 - 0.045, wzc);
  WB.add(G.box(0.22, 0.09, ww + 0.2), frameM, wx + 0.02, WIN.y1 + 0.045, wzc);
  WB.add(G.box(0.22, wh + 0.18, 0.09), frameM, wx + 0.02, wyc, WIN.z0 - 0.045);
  WB.add(G.box(0.22, wh + 0.18, 0.09), frameM, wx + 0.02, wyc, WIN.z1 + 0.045);
  B.add(G.box(0.18, 0.05, ww + 0.36), M(0x5a5246, { roughness: 0.9 }), wx + 0.1, WIN.y0 - 0.11, wzc);   // sill
  for (let i = 1; i < 9; i++) B.add(G.cyl(0.013, 0.013, wh, 6), ironM, wx - 0.06, wyc, WIN.z0 + i * ww / 9);  // bars
  WB.add(G.box(0.03, 0.04, ww), ironM, wx - 0.06, wyc + 0.25, wzc);
  WB.add(G.box(0.05, 0.04, ww), frameM, wx - 0.02, wyc, wzc);                         // mid rail
  WB.add(G.box(0.05, wh, 0.04), frameM, wx - 0.02, wyc, wzc);                         // mullion
  WB.build(root, { cast: true, receive: false });
  // dirty glass in some panes, one plywood board, the rest broken open
  const glassM = new THREE.MeshStandardMaterial({ color: 0xb9c0a8, transparent: true, opacity: 0.22, roughness: 0.15, metalness: 0.0, depthWrite: false });
  [[0, 1], [1, 1]].forEach(([c, r]) => { const g = mesh(new THREE.PlaneGeometry(ww / 2 - 0.05, wh / 2 - 0.05), glassM, wx - 0.03, WIN.y0 + (r + 0.5) * wh / 2, WIN.z0 + (c + 0.5) * ww / 2, root); g.rotation.y = Math.PI / 2; g.castShadow = false; });
  const ply = TX.wood([0.55, 0.45, 0.32], 91);
  B.add(G.box(0.02, wh / 2 - 0.04, ww / 2 + 0.1), new THREE.MeshStandardMaterial({ ...ply }), wx + 0.06, WIN.y0 + wh * 0.75, WIN.z0 + ww * 0.75, 0.03, 0, 0);

  // ---------- outside: the schoolyard at dusk (seen through the window) — warm, low light, long day ending ----------
  const outside = new THREE.Group(); root.add(outside);
  const DUSK = new THREE.Color(1.0, 0.68, 0.46);
  const sunlit = (color, emi = 0.35, o = {}) => new THREE.MeshStandardMaterial({ color, roughness: 0.9, emissive: new THREE.Color(color).multiply(DUSK).multiplyScalar(emi * 0.5), flatShading: true, fog: false, ...o });
  const ground = mesh(new THREE.PlaneGeometry(40, 40), sunlit(0xc8a878, 0.25), -28, 0.02, 2, outside); ground.rotation.x = -Math.PI / 2;
  const schoolT = TX.schoolWall();
  const schoolM = new THREE.MeshStandardMaterial({ ...TX.withRepeat(schoolT, 6, 1), emissive: 0x6a4630, emissiveIntensity: 0.32, fog: false });
  const OB = new Batcher();
  OB.add(G.box(1, 8, 26), schoolM, -24, 4, 2);                                        // school facade
  for (let i = -5; i <= 5; i++) { OB.add(G.box(0.6, 3.2, 0.5), sunlit(0xefe2c4, 0.45), -23.2, 1.6, 2 + i * 2.2); OB.add(G.box(0.6, 3.0, 0.5), sunlit(0xefe2c4, 0.45), -23.2, 5.6, 2 + i * 2.2); }
  OB.add(G.box(1.2, 0.35, 26), sunlit(0xa8502e, 0.4), -23.0, 3.35, 2); OB.add(G.box(1.4, 0.4, 27), sunlit(0x9a4a2a, 0.4), -23.0, 8.1, 2);
  for (let i = -5; i <= 4; i++) OB.add(G.box(0.2, 1.6, 1.0), sunlit(0x3a6a8a, 0.2), -23.4, 5.4, 3.1 + i * 2.2);   // blue shutters
  OB.add(G.box(0.4, 0.45, 30), sunlit(0xd8c8a8, 0.35), -10.5, 0.22, 2);                   // low boundary wall
  const trunkM = sunlit(0x5a4030, 0.2), leafM = sunlit(0x4a7a3a, 0.35), leafM2 = sunlit(0x6a8a3a, 0.35);
  [[-17, -3.5, 1.3], [-19, 6, 1.6], [-12.5, 10, 1.2], [-12, -7, 1.4]].forEach(([x, z, s]) => {
    OB.add(G.cyl(0.18 * s, 0.25 * s, 3 * s, 6), trunkM, x, 1.5 * s, z);
    OB.add(new THREE.IcosahedronGeometry(1.6 * s, 0), leafM, x, 3.6 * s, z);
    OB.add(new THREE.IcosahedronGeometry(1.1 * s, 0), leafM2, x + 0.8 * s, 3.2 * s, z + 0.6 * s);
  });
  OB.add(G.cyl(0.05, 0.05, 7, 6), sunlit(0xdddddd, 0.4), -20, 3.5, -1);                // flagpole
  [0xe8883a, 0xf4f0e6, 0x2f7a3a].forEach((c, i) => OB.add(G.box(0.03, 0.3, 0.9), sunlit(c, 0.6), -20, 6.6 - i * 0.3, -0.5));
  OB.build(outside, { cast: true, receive: true });
  const duskSky = (() => {
    const c = document.createElement('canvas'); c.width = 4; c.height = 256; const g = c.getContext('2d');
    const gr = g.createLinearGradient(0, 0, 0, 256);
    gr.addColorStop(0, '#2e2a44'); gr.addColorStop(0.45, '#6a4a5a'); gr.addColorStop(0.78, '#c8784e'); gr.addColorStop(1, '#f0a868');
    g.fillStyle = gr; g.fillRect(0, 0, 4, 256); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
  })();
  const skyM = new THREE.MeshBasicMaterial({ map: duskSky, side: THREE.BackSide, fog: false, toneMapped: true });
  skyM.color.setScalar(1.15);
  const skyDome = new THREE.Mesh(new THREE.SphereGeometry(45, 24, 12, 0, Math.PI * 2, 0, Math.PI / 2), skyM); skyDome.position.set(-20, 0, 2); outside.add(skyDome);
  // schoolchildren in uniform, playing
  const kids = [];
  for (let i = 0; i < 9; i++) {
    const k = makePerson({ child: true, top: 0xf4f2ea, bottom: i % 2 ? 0x2a3a6a : 0x6a2a3a, female: i % 2 === 1, skin: [0x8a5a3c, 0x7a4c30, 0x9a6844][i % 3], scale: 1.3 });
    k.traverse(o => { if (o.material && o.material.emissive) { o.material = o.material.clone(); o.material.fog = false; o.material.emissive.copy(o.material.color).multiply(DUSK).multiplyScalar(0.2); } });
    const cx = -17 + (i % 3) * 1.4, cz = -2 + Math.floor(i / 3) * 3.2;
    k.userData.c = { cx, cz, r: 0.8 + (i % 4) * 0.5, sp: (0.7 + (i % 3) * 0.25) * (i % 2 ? 1 : -1), a: i };
    outside.add(k); kids.push(k);
  }
  const teacher = makePerson({ female: true, top: 0x2f6b4f, bottom: 0x2f6b4f, scarf: 0xd9a22a, scale: 1.3 });
  teacher.traverse(o => { if (o.material && o.material.emissive) { o.material = o.material.clone(); o.material.emissive.copy(o.material.color).multiply(DUSK).multiplyScalar(0.2); } });
  teacher.position.set(-21.5, 0, 1.5); teacher.rotation.y = Math.PI / 2; outside.add(teacher);
  const windowSound = new THREE.Object3D(); windowSound.position.set(wx, wyc, wzc); root.add(windowSound);

  // ---------- light ----------
  // the sun: one shadow-casting directional light through the window
  const sun = new THREE.DirectionalLight(0xffa25a, SUN_BASE);
  // the shadow map covers the WHOLE room: outside its box a directional light counts as unshadowed,
  // which drew a hard-edged band of 'sun' across the floor far from the window
  sun.position.copy(new THREE.Vector3(0, 0.8, 0).addScaledVector(SUN_DIR, -18));
  sun.target.position.set(0, 0.8, 0);
  sun.castShadow = true; sun.shadow.mapSize.set(2048, 2048);
  Object.assign(sun.shadow.camera, { left: -10.5, right: 10.5, top: 10.5, bottom: -10.5, near: 4, far: 36 });
  sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.02; sun.shadow.radius = 3;
  scene.add(sun, sun.target);           // kept at scene level: the light count never changes when spaces hide
  // (the warm fill light is the shared hemisphere light; see atmosphere())
  // bare bulbs on flex wires, warm
  const bulbs = [];
  // the light falls off across the room as in V1: brightest by the window and your table, medium at
  // the supervisor's desk, dim in the middle, only a faint glow in the far corner
  const BULB_I = { 0: 5.0, 1: 1.9, 3: 2.8, 4: 0.9 };
  const haloMat = new THREE.SpriteMaterial({ map: TX.soft(), color: new THREE.Color(1.0, 0.6, 0.28).multiplyScalar(0.45), blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, fog: false });
  const bulbGlass = new THREE.MeshStandardMaterial({ color: 0xffe0a8, emissive: 0xffb050, emissiveIntensity: 5, roughness: 0.2 });
  const deadGlass = new THREE.MeshStandardMaterial({ color: 0x4a4236, roughness: 0.35, metalness: 0.1 });   // burnt-out bulbs nobody replaced
  const capM = M(0x3a3026, { metalness: 0.6, roughness: 0.4 });
  // only some bulbs are real lights (each light costs every pixel); the rest just glow
  // (as in V1: a few bare bulbs make pools of light with dark between them; two are dead)
  [[-6.2, 0.6, 1], [-1.0, -2.1, 1], [-3.6, -4.6, 0], [5.0, 4.2, 1], [4.6, -2.0, 1], [1.6, 0.6, 0]].forEach(([x, z, lit], i) => {
    const drop = 3.95 - 2.75;
    B.add(G.cyl(0.006, 0.006, drop, 4), wireM, x, 3.95 - drop / 2, z);
    B.add(G.cyl(0.03, 0.035, 0.07, 8), capM, x, 2.78, z);
    const glass = mesh(new THREE.SphereGeometry(0.05, 12, 8), lit ? bulbGlass : deadGlass, x, 2.7, z, root); glass.castShadow = false;
    if (lit) { const halo = new THREE.Sprite(haloMat); halo.position.set(x, 2.7, z); halo.scale.setScalar(0.28 + 0.06 * (BULB_I[i] ?? 2)); halo.renderOrder = 4; root.add(halo); }
    const L = lit ? lights.add({ pos: new THREE.Vector3(x, 2.62, z), color: 0xffa050, intensity: BULB_I[i] ?? 2, distance: 7, decay: 1.8, space: 'sweatshop' }) : null;
    // a tin shade on some
    if (i % 2 === 0) B.add(new THREE.ConeGeometry(0.22, 0.12, 12, 1, true), M(0x4a5a52, { metalness: 0.5, roughness: 0.5, side: THREE.DoubleSide }), x, 2.8, z);
    if (L) bulbs.push({ L, base: L.intensity, glass, flick: i * 1.7 });
  });
  // a cold tube light flickering at the far end (mixed colour temperature)
  const tube = lights.add({ pos: new THREE.Vector3(3.5, 3.0, -5.6), color: 0xcfe6ff, intensity: 0.55, distance: 5, decay: 1.8, space: 'sweatshop' });   // cold tube light
  const tubeGlow = mesh(new THREE.CylinderGeometry(0.025, 0.025, 1.2, 8), new THREE.MeshStandardMaterial({ color: 0xe8f4ff, emissive: 0xcfe6ff, emissiveIntensity: 6 }), 3.5, 3.2, -5.92, root);
  tubeGlow.rotation.z = Math.PI / 2; tubeGlow.castShadow = false;
  B.add(G.box(1.3, 0.06, 0.08), M(0xd8d8d0), 3.5, 3.24, -5.95);

  // volumetric sunlight through the window: ONE light volume (the window swept along the sun),
  // ray-marched per pixel through the real bar / mullion / board pattern — soft beams, no slices.
  const BARS = 9, barW = 0.03;
  const shaftMat = new THREE.ShaderMaterial({
    uniforms: { uTime: { value: 0 }, uK: { value: 1 }, uSun: { value: SUN_DIR.clone() }, uSteps: { value: 28 } },
    transparent: true, depthWrite: false, depthTest: true, blending: THREE.AdditiveBlending, side: THREE.BackSide, fog: false,
    vertexShader: `varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,
    fragmentShader: `
      uniform float uTime; uniform float uK; uniform vec3 uSun; uniform float uSteps; varying vec3 vW;
      const float WX = ${wx.toFixed(3)}, Z0 = ${WIN.z0.toFixed(3)}, Z1 = ${WIN.z1.toFixed(3)}, Y0 = ${WIN.y0.toFixed(3)}, Y1 = ${WIN.y1.toFixed(3)};
      float h(vec3 p){ return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453); }
      float n3(vec3 p){ vec3 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
        return mix(mix(mix(h(i), h(i+vec3(1,0,0)), f.x), mix(h(i+vec3(0,1,0)), h(i+vec3(1,1,0)), f.x), f.y),
                   mix(mix(h(i+vec3(0,0,1)), h(i+vec3(1,0,1)), f.x), mix(h(i+vec3(0,1,1)), h(i+vec3(1,1,1)), f.x), f.y), f.z); }
      // how much sun passes the window at window-plane point (z, y): bars, rails, mullion, the board, dirty glass
      float pass(float z, float y){
        float ww = Z1 - Z0, wh = Y1 - Y0, zc = (Z0 + Z1) * 0.5, yc = (Y0 + Y1) * 0.5;
        float u = (z - Z0) / ww * ${BARS.toFixed(1)}; float d = abs(fract(u + 0.5) - 0.5) * ww / ${BARS.toFixed(1)};
        float k = smoothstep(${(barW * 0.5).toFixed(3)}, ${(barW * 0.5 + 0.012).toFixed(3)}, d);           // vertical bars (soft edge = soft penumbra)
        k *= smoothstep(0.03, 0.045, abs(z - zc));                                                        // mullion
        k *= smoothstep(0.025, 0.04, abs(y - yc)) * smoothstep(0.02, 0.032, abs(y - (yc + 0.25)));      // rails
        if (z > zc && y > yc) k *= 0.0;                                                                    // plywood board
        if (z < zc && y > yc) k *= 0.55;                                                                   // grimy glass
        return k;
      }
      void main(){
        vec3 ro = cameraPosition, rd = normalize(vW - cameraPosition);
        // ray interval inside the light volume: t>=0 behind the window, inside the window rect, above the floor
        float s0 = 0.0, s1 = length(vW - cameraPosition);
        // window-plane coords are linear along the ray: t = (p.x-WX)/sun.x ; w = p - sun*t
        float a0 = (ro.x - WX) / uSun.x, a1 = rd.x / uSun.x;
        vec2 wz = vec2(ro.z - uSun.z * a0, rd.z - uSun.z * a1), wy = vec2(ro.y - uSun.y * a0, rd.y - uSun.y * a1);
        #define CLIP(c, d, lo, hi) if (abs(d) > 1e-5) { float q0 = ((lo) - (c)) / (d), q1 = ((hi) - (c)) / (d); s0 = max(s0, min(q0, q1)); s1 = min(s1, max(q0, q1)); } else if ((c) < (lo) || (c) > (hi)) discard;
        CLIP(a0, a1, 0.0, 40.0)
        CLIP(wz.x, wz.y, Z0, Z1)
        CLIP(wy.x, wy.y, Y0, Y1)
        CLIP(ro.y, rd.y, 0.0, 9.0)
        if (s1 <= s0) discard;
        float n = uSteps, ds = (s1 - s0) / n, acc = 0.0;
        float jit = 0.5 * ds;   // no dither at all: any screen-space dither pattern (random or fixed) shimmered as fine hatching on the window frame when the view moved
        for (int i = 0; i < 40; i++) {
          if (float(i) >= n) break;
          float s = s0 + jit + float(i) * ds; vec3 p = ro + rd * s;
          float t = a0 + a1 * s;
          float k = pass(wz.x + wz.y * s, wy.x + wy.y * s);
          float dust = 0.55 + 0.6 * n3(p * 2.2 + vec3(uTime * 0.05, -uTime * 0.02, uTime * 0.03));
          acc += k * dust * exp(-t * 0.28) * smoothstep(0.0, 0.25, p.y) * ds;
        }
        float a = acc * 0.17 * uK;
        gl_FragColor = vec4(vec3(1.0, 0.7, 0.42) * a, 1.0);
      }`,
  });
  // the volume's bounding box (the window swept along the sun down to the floor)
  const shaft = new THREE.Group(); root.add(shaft);
  {
    const corners = [];
    [WIN.z0, WIN.z1].forEach(z => [WIN.y0, WIN.y1].forEach(y => { const p = new THREE.Vector3(wx, y, z); corners.push(p.clone(), p.clone().addScaledVector(SUN_DIR, y / -SUN_DIR.y)); }));
    const bb = new THREE.Box3().setFromPoints(corners); bb.min.y = 0.01; bb.min.x = wx + 0.16;   // the volume starts clear of the window frame's depth (its face cut through the jambs and shimmered there)
    const size = bb.getSize(new THREE.Vector3()), c = bb.getCenter(new THREE.Vector3());
    const vol = new THREE.Mesh(new THREE.BoxGeometry(size.x, size.y, size.z), shaftMat); vol.position.copy(c); vol.renderOrder = 3; vol.frustumCulled = false;
    shaft.add(vol);
  }
  // dust motes: brighter where they drift through the sunbeam
  const DUST = 900;
  const dustGeo = new THREE.BufferGeometry(), dp = new Float32Array(DUST * 3), ds = new Float32Array(DUST);
  for (let i = 0; i < DUST; i++) {
    const inBeam = i < DUST * 0.6;
    if (inBeam) { const t = Math.random() * 3.2, z = WIN.z0 + Math.random() * ww, y = WIN.y0 + Math.random() * wh; dp.set([wx + SUN_DIR.x * t, y + SUN_DIR.y * t, z + SUN_DIR.z * t], i * 3); }
    else dp.set([-7.5 + Math.random() * 15, Math.random() * 3.6, -5.5 + Math.random() * 11], i * 3);
    ds[i] = Math.random();
  }
  dustGeo.setAttribute('position', new THREE.BufferAttribute(dp, 3)); dustGeo.setAttribute('seed', new THREE.BufferAttribute(ds, 1));
  const dustMat = new THREE.ShaderMaterial({
    uniforms: { uTime: { value: 0 }, uMap: { value: TX.soft() }, uSun: { value: SUN_DIR }, uPx: { value: 1 } },
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    vertexShader: `attribute float seed; uniform float uTime; uniform vec3 uSun; uniform float uPx; varying float vB;
      void main(){
        vec3 p = position;
        p.x += sin(uTime*0.13 + seed*40.0)*0.25; p.y += sin(uTime*0.09 + seed*25.0)*0.2; p.z += cos(uTime*0.11 + seed*31.0)*0.25;
        // trace back along the sunlight to the window wall: are we inside the beam?
        float t = (p.x - (${wx.toFixed(2)})) / uSun.x; vec3 w = p - uSun * t;
        float inB = step(${WIN.z0.toFixed(2)}, w.z) * step(w.z, ${WIN.z1.toFixed(2)}) * step(${WIN.y0.toFixed(2)}, w.y) * step(w.y, ${WIN.y1.toFixed(2)}) * step(0.0, t);
        vB = (0.03 + inB * 0.9) * smoothstep(0.35, 0.9, -(modelViewMatrix * vec4(p,1.0)).z);
        vec4 mv = modelViewMatrix * vec4(p,1.0);
        gl_PointSize = min(5.0, (0.004 + seed*0.006) * uPx * 420.0 / -mv.z);
        gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader: `uniform sampler2D uMap; varying float vB; void main(){ float a = texture2D(uMap, gl_PointCoord).r; gl_FragColor = vec4(vec3(1.0,0.86,0.66)*vB*a, 1.0); }`,
  });
  const dust = new THREE.Points(dustGeo, dustMat); dust.frustumCulled = false; dust.renderOrder = 4; root.add(dust);

  // ---------- tables, machines, people ----------
  const machines = [], workers = [], colliders = [];
  const addCol = (x0, x1, z0, z1) => colliders.push({ minX: x0, maxX: x1, minZ: z0, maxZ: z1 });
  piers.forEach(([x, z]) => addCol(x - 0.3, x + 0.3, z - 0.3, z + 0.3));
  const occupants = {
    '0,1': { female: true, top: 0xa8322a, bottom: 0xa8322a, scarf: 0xd9a22a, skin: 0x8a5a3c },
    '0,2': { child: true, top: 0x6a7d9a, bottom: 0x3a3a4a, skin: 0x7a4c30 },
    '1,0': { top: 0xb8b09a, bottom: 0x4a4038, skin: 0x6e4228, cap: true },
    '1,2': { female: true, top: 0x2f6b4f, bottom: 0x2f6b4f, scarf: 0xc45a7a, skin: 0x9a6844 },
    '2,0': { female: true, top: 0xc45a7a, bottom: 0x6a2a3a, scarf: 0xe9e1cf, skin: 0x7a4c30 },
    '2,1': { top: 0x5a6a7e, bottom: 0x2a2a30, skin: 0x8a5a3c },
    '2,2': { child: true, female: true, top: 0xd9a22a, bottom: 0xd9a22a, skin: 0x9a6844 },
    '3,0': { female: true, top: 0x1f3a68, bottom: 0x1f3a68, scarf: 0xb5442e, skin: 0x6e4228 },
    '3,2': { top: 0x7a3a2a, bottom: 0x3a3a4a, skin: 0x7a4c30 },
  };
  let playerMachine = null, leftPile = null, rightPile = null, pileLayers = [];
  COLS.forEach((x, c) => ROWS.forEach((z, r) => {
    const isPlayer = c === 0 && r === 0;
    const ry = isPlayer ? 0 : (rr() - 0.5) * 0.06;
    // static parts merge into the room batch (far fewer draw calls); the player's machine keeps its own (it is interactive)
    const at = new THREE.Matrix4().compose(new THREE.Vector3(x, TABLE_H, z), new THREE.Quaternion().setFromEuler(new THREE.Euler(0, ry, 0)), new THREE.Vector3(1, 1, 1));
    const m = makeMachine({ wood: woodM, threadColor: [0xb5442e, 0x1f3a68, 0xd9a22a, 0xe9e1cf][(c + r) % 4], batch: isPlayer ? null : B, at: isPlayer ? null : at, headX: isPlayer ? HEAD_X : 0 });
    m.position.set(x, TABLE_H, z); m.rotation.y = ry;
    root.add(m); machines.push({ m, isPlayer });
    addCol(x - 0.6, x + 0.6, z - 0.38, z + 0.38);
    if (isPlayer) { playerMachine = m; m.userData.speed = 0; return; }
    const occ = occupants[c + ',' + r];
    const wi = machines.length;   // 1..11
    // finished pieces on the right (a fixed 1–5 per worker), fabric waiting on a small stool on the left — the same set-up as yours
    const done = 1 + (wi * 3) % 5, todo = 3 + (wi % 3);
    for (let k = 0; k < done; k++) B.add(G.box(0.32, 0.024, 0.2), fabM[(wi + k) % fabM.length], x + 0.4 + (rr() - 0.5) * 0.02, TABLE_H + 0.012 + k * 0.024, z + 0.1 + (rr() - 0.5) * 0.03, 0, (rr() - 0.5) * 0.2, 0);
    const lx = x - 0.9, lz = z + 0.35;
    B.add(slab(0.36, 0.36, 0.04, 0.02), woodDarkM, lx, 0.6, lz);
    [[-1, -1], [1, -1], [-1, 1], [1, 1]].forEach(([a, b]) => B.add(G.box(0.035, 0.6, 0.035), woodDarkM, lx + a * 0.14, 0.3, lz + b * 0.14));
    for (let k = 0; k < todo; k++) B.add(G.box(0.34, 0.024, 0.26), fabM[(wi * 2 + k) % fabM.length], lx + (rr() - 0.5) * 0.02, 0.632 + k * 0.024, lz + (rr() - 0.5) * 0.02, 0, (rr() - 0.5) * 0.25, 0);
    addCol(lx - 0.16, lx + 0.16, lz - 0.16, lz + 0.16);   // small, so the aisles stay walkable
    // stool
    const sx = x, sz = z + 0.85;
    B.add(slab(0.38, 0.38, 0.05, 0.03), woodDarkM, sx, 0.56, sz);
    [[-1, -1], [1, -1], [-1, 1], [1, 1]].forEach(([a, b]) => B.add(G.box(0.04, 0.56, 0.04), woodDarkM, sx + a * 0.15, 0.28, sz + b * 0.15, b * 0.06, 0, -a * 0.06));
    if (occ) {
      // V3: every worker at a machine is a child (play-testers could not tell). Sizes vary, all smaller than
      // the adults in the room (the supervisor, the carrier) — the youngest are only just tall enough for the table.
      const p = makePerson({ ...occ, child: true, scale: CHILD_SCALE[wi % CHILD_SCALE.length] });
      poseSit(p, 0.62); p.position.set(sx, 0, sz); p.rotation.y = Math.PI;
      root.add(p);
      // feet on the treadle (not through the floor)
      fitSitLegs(p, new THREE.Vector3(sx - 0.08, 0.14, z + 0.2), 0.12);
      // the piece this worker is sewing: from the stool, under the needle, onto the finished pile — over and over
      const pc = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.006, 0.24), fabM[(wi * 2 + todo) % fabM.length]); pc.castShadow = true; root.add(pc);
      workers.push({ p, m, pc, x, z, lx, lz, top: 0.632 + todo * 0.024 + 0.006, done: TABLE_H + 0.012 + done * 0.024 + 0.006, off: wi * 2.3, cyc: 8.6 + (wi % 5) * 0.37 });   // everyone at their own pace
      addCol(sx - 0.3, sx + 0.3, sz - 0.3, sz + 0.3);
    } else m.userData.speed = 0;
  }));

  // the player's own stool (low, so a child's feet reach the treadle)
  B.add(slab(0.36, 0.34, 0.05, 0.03), woodDarkM, SEAT.x, 0.5, SEAT.z);
  [[-1, -1], [1, -1], [-1, 1], [1, 1]].forEach(([a, b]) => B.add(G.box(0.04, 0.5, 0.04), woodDarkM, SEAT.x + a * 0.14, 0.25, SEAT.z + b * 0.13, b * 0.06, 0, -a * 0.06));
  B.add(G.box(0.3, 0.025, 0.025), woodDarkM, SEAT.x, 0.16, SEAT.z + 0.13); B.add(G.box(0.3, 0.025, 0.025), woodDarkM, SEAT.x, 0.16, SEAT.z - 0.13);
  addCol(SEAT.x - 0.2, SEAT.x + 0.2, SEAT.z - 0.19, SEAT.z + 0.19);
  // the player's own table: fabric on a stool to the left, finished pieces on the right
  const sideStool = new THREE.Group(); sideStool.position.set(TXp - 0.95, 0, TZp + 0.35); root.add(sideStool);
  B.add(slab(0.5, 0.5, 0.05, 0.03), woodDarkM, sideStool.position.x, 0.72, sideStool.position.z);
  [[-1, -1], [1, -1], [-1, 1], [1, 1]].forEach(([a, b]) => B.add(G.box(0.045, 0.72, 0.045), woodDarkM, sideStool.position.x + a * 0.2, 0.36, sideStool.position.z + b * 0.2));
  addCol(TXp - 1.25, TXp - 0.65, TZp + 0.05, TZp + 0.65);
  leftPile = new THREE.Group(); leftPile.position.set(TXp - 0.95, 0.77, TZp + 0.35); root.add(leftPile);
  for (let k = 0; k < 7; k++) {
    const l = mesh(new THREE.BoxGeometry(0.36, 0.024, 0.28), fabM[k % fabM.length], (rr() - 0.5) * 0.03, 0.012 + k * 0.024, (rr() - 0.5) * 0.03, leftPile);
    l.rotation.y = (rr() - 0.5) * 0.25; pileLayers.push(l);
  }
  rightPile = new THREE.Group(); rightPile.position.set(TXp + 0.4, TABLE_H, TZp + 0.1); root.add(rightPile);   // clear of the hand wheel (which ends at x+0.23)
  const piece = mesh(new THREE.BoxGeometry(0.32, 0.006, 0.26), new THREE.MeshStandardMaterial({ map: T.fab[0], roughness: 0.95 }), 0, 0, 0, root); piece.visible = false;
  const NEEDLE = new THREE.Vector3(TXp + HEAD_X - 0.27, TABLE_H + 0.056, TZp + 0.02);

  // ---------- the supervisor's counter by the door (V1 layout: across the back-right corner) ----------
  // a long plywood counter parallel to the back wall; he stands behind it, facing the workshop
  const DESK = { x: 5.15, z: 4.5, w: 1.9, d: 0.85, h: 0.84 };   // a desk he sits at (a standing-height counter hid him when seated)   // off the back wall, so he has room to sit behind it
  const plyM = new THREE.MeshStandardMaterial({ ...TX.wood([0.5, 0.38, 0.26], 93), roughness: 1 });
  B.add(slab(DESK.w + 0.08, DESK.d + 0.06, 0.05, 0.02), woodDarkM, DESK.x, DESK.h - 0.05, DESK.z);              // top
  B.add(G.box(DESK.w, DESK.h - 0.05, 0.03), plyM, DESK.x, (DESK.h - 0.05) / 2, DESK.z - DESK.d / 2 + 0.015);    // front panel (faces the room)
  [-1, 1].forEach(e => B.add(G.box(0.03, DESK.h - 0.05, DESK.d - 0.04), plyM, DESK.x + e * (DESK.w / 2 - 0.015), (DESK.h - 0.05) / 2, DESK.z));
  B.add(G.box(DESK.w - 0.06, 0.03, DESK.d - 0.06), plyM, DESK.x, 0.12, DESK.z);                                  // bottom shelf
  B.add(G.box(DESK.w + 0.02, 0.06, 0.02), M(0x2a2018), DESK.x, 0.03, DESK.z - DESK.d / 2 + 0.01);                // kick strip
  // plywood patches and a painted number on the front
  B.add(G.box(0.5, 0.4, 0.006), M(0x6a5a44, { roughness: 1 }), DESK.x - 0.5, 0.55, DESK.z - DESK.d / 2 - 0.003);
  B.add(G.box(0.36, 0.3, 0.006), M(0x5a4a38, { roughness: 1 }), DESK.x + 0.55, 0.78, DESK.z - DESK.d / 2 - 0.003);
  // drawers on his side
  [-0.55, 0.55].forEach(dx => { B.add(G.box(0.5, 0.1, 0.02), woodDarkM, DESK.x + dx, DESK.h - 0.12, DESK.z + DESK.d / 2 - 0.01); B.add(G.box(0.08, 0.02, 0.025), M(0x8a7a5a, { metalness: 0.6, roughness: 0.4 }), DESK.x + dx, DESK.h - 0.12, DESK.z + DESK.d / 2 + 0.005); });   // shallow drawers: his knees fit under
  // on the counter: the ledger (open), cash tin, steel spike of chits, chai glass, pen, abacus, bundle of finished pieces
  const ledgerM = new THREE.MeshStandardMaterial({ map: TX.ledger(), roughness: 0.9 });
  const TOP = DESK.h + 0.001;
  B.add(G.box(0.46, 0.03, 0.34), M(0x5a1e18), DESK.x - 0.3, TOP + 0.015, DESK.z - 0.05, 0, 0.08, 0);
  B.add(G.box(0.44, 0.008, 0.32), ledgerM, DESK.x - 0.3, TOP + 0.034, DESK.z - 0.05, 0, 0.08, 0);
  B.add(G.cyl(0.004, 0.004, 0.14, 5), M(0x1a2a6a), DESK.x - 0.12, TOP + 0.045, DESK.z - 0.12, 0, 0.5, Math.PI / 2);
  B.add(G.box(0.24, 0.12, 0.17), M(0x4a5a52, { metalness: 0.6, roughness: 0.45 }), DESK.x + 0.4, TOP + 0.06, DESK.z + 0.05);   // cash tin
  B.add(G.box(0.25, 0.012, 0.18), M(0x5a6a62, { metalness: 0.6, roughness: 0.4 }), DESK.x + 0.4, TOP + 0.126, DESK.z + 0.05);
  B.add(G.cyl(0.03, 0.025, 0.085, 10), new THREE.MeshStandardMaterial({ color: 0xc89060, transparent: true, opacity: 0.8, roughness: 0.15 }), DESK.x + 0.12, TOP + 0.043, DESK.z + 0.22);  // chai
  B.add(G.cyl(0.04, 0.04, 0.006, 10), M(0x6a5a40), DESK.x + 0.7, TOP + 0.003, DESK.z - 0.15);
  B.add(G.cyl(0.002, 0.002, 0.16, 4), STEELM(), DESK.x + 0.7, TOP + 0.08, DESK.z - 0.15);                            // spike
  for (let i = 0; i < 6; i++) B.add(G.box(0.08, 0.002, 0.06), M(0xe8e0c8), DESK.x + 0.7, TOP + 0.02 + i * 0.012, DESK.z - 0.15, 0, i * 0.7, 0);
  // abacus
  B.add(G.box(0.26, 0.012, 0.16), woodDarkM, DESK.x - 0.75, TOP + 0.006, DESK.z + 0.15, 0, -0.2, 0);
  for (let r = 0; r < 4; r++) for (let c = 0; c < 6; c++) B.add(new THREE.SphereGeometry(0.009, 6, 4), M([0xb5442e, 0xd9a22a][r % 2]), DESK.x - 0.85 + c * 0.03 + (c > 2 ? 0.04 : 0), TOP + 0.02, DESK.z + 0.1 + r * 0.035);
  // a stack of finished pieces waiting to be counted
  for (let k = 0; k < 8; k++) B.add(G.box(0.32, 0.022, 0.2), fabM[k % fabM.length], DESK.x + 0.05, TOP + 0.011 + k * 0.022, DESK.z - 0.22, 0, (rr() - 0.5) * 0.2, 0);
  // cold tube lamp over the counter on chains (mixed colour temperature with the warm bulbs)
  B.add(G.box(1.25, 0.05, 0.09), M(0xd8d8d0), DESK.x, 2.62, DESK.z - 0.1);
  [-0.55, 0.55].forEach(dx => B.add(G.cyl(0.004, 0.004, 1.3, 4), wireM, DESK.x + dx, 3.3, DESK.z - 0.1));
  const deskTube = mesh(new THREE.CylinderGeometry(0.022, 0.022, 1.15, 8), new THREE.MeshStandardMaterial({ color: 0xe8f4ff, emissive: 0xcfe6ff, emissiveIntensity: 4 }), DESK.x, 2.585, DESK.z - 0.1, root);
  deskTube.rotation.z = Math.PI / 2; deskTube.castShadow = false;

  addCol(DESK.x - DESK.w / 2 - 0.05, DESK.x + DESK.w / 2 + 0.05, DESK.z - DESK.d / 2 - 0.05, DESK.z + DESK.d / 2);
  // a calendar and a list of rates pinned on the back wall behind him
  const ratesM = new THREE.MeshStandardMaterial({ map: TX.calendar(), roughness: 0.9 });
  const rates = mesh(new THREE.PlaneGeometry(0.38, 0.56), ratesM, DESK.x - 0.6, 2.0, ROOM.maxZ - 0.01, root); rates.rotation.y = Math.PI; rates.castShadow = false;
  // the supervisor: behind the counter, facing the room
  const foreman = makePerson({ top: 0xd8d2c0, bottom: 0x3a3a40, skin: 0x7a5236, mustache: true, belly: 0.035, outfit: 'shirt', sleeves: 'full', glasses: true, seed: 41, scale: 1.34 });
  // his chair: a proper wooden chair with a back (the children sit on stools)
  const CH = { x: DESK.x + 0.15, z: 5.38, seat: 0.48 };
  {
    const cw = woodDarkM;
    B.add(slab(0.46, 0.44, 0.045, 0.02), cw, CH.x, CH.seat - 0.02, CH.z);
    [[-1, -1], [1, -1]].forEach(([a, b]) => B.add(G.box(0.045, CH.seat - 0.04, 0.045), cw, CH.x + a * 0.19, (CH.seat - 0.04) / 2, CH.z + b * 0.18));
    [-1, 1].forEach(a => B.add(G.box(0.05, 1.02, 0.05), cw, CH.x + a * 0.19, 0.51, CH.z + 0.2, -0.06, 0, 0));          // back legs run up into the back
    [0.72, 0.86, 0.98].forEach(y => B.add(G.box(0.4, y > 0.95 ? 0.08 : 0.04, 0.025), cw, CH.x, y, CH.z + 0.2 + (y - 0.5) * 0.06, -0.06, 0, 0));
    B.add(G.box(0.38, 0.03, 0.03), cw, CH.x, 0.18, CH.z - 0.18); B.add(G.box(0.03, 0.03, 0.36), cw, CH.x - 0.19, 0.16, CH.z); B.add(G.box(0.03, 0.03, 0.36), cw, CH.x + 0.19, 0.16, CH.z);
    addCol(CH.x - 0.26, CH.x + 0.26, CH.z - 0.24, CH.z + 0.28);
  }
  foreman.position.set(CH.x, 0, CH.z); foreman.rotation.y = Math.PI; root.add(foreman);
  poseSit(foreman, CH.seat + 0.1);   // the hip joint sits ~10 cm above the seat (his seat, not through it)
  fitSitLegs(foreman, new THREE.Vector3(CH.x - 0.1, 0.08, CH.z - 0.45), 0.07);
  const FSIT = { hip: foreman.userData.hipBase, knee: foreman.userData.kneeBase, hy: (CH.seat + 0.1) / foreman.scale.y };
  foreman.userData.standK = 0; foreman.userData.stand = false;
  const foremanHand = new THREE.Vector3();

  // ---------- the bag hooks beside the door (V1 layout: on the right wall, nearest the door is yours) ----------
  const HOOKS = [2.75, 2.25, 1.75, 1.25];
  const HOOK_Y = 1.62;
  B.add(G.box(0.04, 0.1, 2.0), woodDarkM, ROOM.maxX - 0.02, HOOK_Y + 0.02, 2.0);
  HOOKS.forEach(z => { B.add(G.cyl(0.011, 0.008, 0.11, 6), ironM, ROOM.maxX - 0.08, HOOK_Y, z, 0, 0, Math.PI / 2 - 0.5); B.add(G.cyl(0.008, 0.008, 0.04, 5), ironM, ROOM.maxX - 0.13, HOOK_Y + 0.025, z); });
  // other workers' bags (not yours): same kind of bag, different cloth, hanging closed
  const otherBags = [['check', 0, 0x8a8a7a], ['stripe', 2, 0xa89a7a], ['buti', 4, 0x9a8a8a]].map(([kind, pal, tint], i) => {
    const ob = makeBag(TX.fabric(kind, pal, 128)); ob.userData.body.material.color.setHex(tint);
    ob.position.set(ROOM.maxX - 0.17, HOOK_Y - 0.62, HOOKS[i + 1]); ob.rotation.y = -Math.PI / 2 + (rr() - 0.5) * 0.4; ob.scale.setScalar(0.92 + rr() * 0.1);
    setBagOpen(ob, 0); root.add(ob); return ob;
  });
  const BAG_HOME = new THREE.Vector3(ROOM.maxX - 0.17, 1.25, HOOKS[0]);
  const bagHang = new THREE.Group(); root.add(bagHang);
  const hangBag = () => bagCtl.hang(bagHang, new THREE.Vector3(ROOM.maxX - 0.17, HOOK_Y - 0.62, HOOKS[0]), -Math.PI / 2);
  hangBag();
  // chappals lined up by the door, a clay water pot with a steel cup
  for (let i = 0; i < 7; i++) { const x = 7.55 - (i % 2) * 0.12, z = 1.2 + i * 0.25; B.add(slab(0.11, 0.26, 0.02, 0.05, 0.004), M([0x3a2a1e, 0x6a3a2a, 0x2a3a4a][i % 3]), x, 0, z, 0, 0.2 * (rr() - 0.5), 0); }
  B.add(new THREE.SphereGeometry(0.26, 12, 9), M(0x9a4a2a, { roughness: 0.95 }), 7.45, 0.3, -1.2);
  B.add(G.cyl(0.07, 0.12, 0.12, 12), M(0x9a4a2a, { roughness: 0.95 }), 7.45, 0.58, -1.2);
  B.add(G.cyl(0.04, 0.035, 0.08, 10), M(0xb8b8b4, { metalness: 0.9, roughness: 0.25 }), 7.45, 0.68, -1.2);
  addCol(7.1, 7.8, -1.55, -0.85);

  // ---------- door (two faded blue leaves; light leaks round the edges) ----------
  const doorM = new THREE.MeshStandardMaterial({ ...T.rust, color: 0x9ab0b8 });
  const dw = DOOR.z1 - DOOR.z0;
  const doorPivot = new THREE.Group(); doorPivot.position.set(ROOM.maxX - 0.03, 0, DOOR.z0); root.add(doorPivot);
  const leaf = mesh(new THREE.BoxGeometry(0.05, DOOR.h + 0.03, dw + 0.06), doorM, -0.012, DOOR.h / 2 + 0.005, dw / 2, doorPivot);
  // frame: jambs and a threshold, so no light or sky shows through cracks round the door
  [DOOR.z0 - 0.05, DOOR.z1 + 0.05].forEach(z => B.add(G.box(0.16, DOOR.h + 0.1, 0.1), woodDarkM, ROOM.maxX, (DOOR.h + 0.1) / 2, z));
  B.add(G.box(0.2, 0.03, dw + 0.2), M(0x3a3026, { roughness: 0.9 }), ROOM.maxX + 0.02, 0.012, (DOOR.z0 + DOOR.z1) / 2);
  mesh(new THREE.BoxGeometry(0.08, 0.04, 0.12), M(0x2a2420, { metalness: 0.7 }), -0.04, 1.2, dw - 0.1, doorPivot);
  // daylight spilling under the door: a soft fan on the floor (no thin bright lines that shimmer)
  const spillTex = (() => { const c = document.createElement('canvas'); c.width = 64; c.height = 64; const g = c.getContext('2d');
    const gr = g.createLinearGradient(0, 0, 0, 64); gr.addColorStop(0, 'rgba(255,225,170,0.9)'); gr.addColorStop(1, 'rgba(255,225,170,0)'); g.fillStyle = gr; g.fillRect(0, 0, 64, 64);
    const gx = g.createLinearGradient(0, 0, 64, 0); gx.addColorStop(0, 'rgba(0,0,0,1)'); gx.addColorStop(0.2, 'rgba(0,0,0,0)'); gx.addColorStop(0.8, 'rgba(0,0,0,0)'); gx.addColorStop(1, 'rgba(0,0,0,1)');
    g.globalCompositeOperation = 'destination-out'; g.fillStyle = gx; g.fillRect(0, 0, 64, 64); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t; })();
  const leak = new THREE.MeshBasicMaterial({ map: spillTex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, color: new THREE.Color(0.55, 0.45, 0.32), polygonOffset: true, polygonOffsetFactor: -2 });
  const leakBot = mesh(new THREE.PlaneGeometry(dw + 0.3, 0.7), leak, ROOM.maxX - 0.35, 0.004, (DOOR.z0 + DOOR.z1) / 2, root); leakBot.rotation.set(-Math.PI / 2, 0, -Math.PI / 2); leakBot.castShadow = false; leakBot.receiveShadow = false;
  B.add(G.box(0.12, 0.1, dw + 0.2), woodDarkM, ROOM.maxX - 0.04, DOOR.h + 0.05, (DOOR.z0 + DOOR.z1) / 2);
  // daylight through the open door: a pooled light just inside (never grazing the wall, which makes brick sparkle)
  const doorLight = lights.add({ pos: new THREE.Vector3(ROOM.maxX - 0.8, 2.2, (DOOR.z0 + DOOR.z1) / 2), color: 0xfff0d8, intensity: 0, distance: 10, decay: 1.4, space: 'sweatshop', priority: 3 });
  const doorSound = new THREE.Object3D(); doorSound.position.set(ROOM.maxX, 1.4, (DOOR.z0 + DOOR.z1) / 2); root.add(doorSound);
  // beyond the door: a bright alley, overexposed — the street waits (Space 2)
  const alley = new THREE.Group(); root.add(alley);   // (the real lane is Space 2: street.js)
  alley.visible = false;

  // ---------- walking worker with a bundle, a woman folding at the cutting table ----------
  const carrier = makePerson({ top: 0x6a7d9a, bottom: 0xe9e1cf, skin: 0x6e4228, scale: 1.3 });
  const bundle = mesh(new THREE.SphereGeometry(0.28, 8, 6), fabM[3], 0, 0.32, 0, null); bundle.scale.set(1.2, 0.6, 0.9);
  carrier.userData.J.head.add(bundle); bundle.position.y = 0.3;
  carrier.userData.J.shL.rotation.set(-2.7, 0, 0.3); root.add(carrier);
  const carrierPath = { x0: -3.2, x1: 4.4, z: 3.55, t: 0 };
  const folder = makePerson({ female: true, child: true, top: 0xd9a22a, bottom: 0x7a2a1e, scarf: 0x1f3a68, skin: 0x8a5a3c, scale: 1.2 });   // a girl folding the finished pieces
  folder.position.set(4.6, 0, -5.25); root.add(folder);
  B.add(slab(2.4, 0.9, 0.06, 0.03), woodM, 4.6, 1.02, -4.6); [[-1, -1], [1, -1], [-1, 1], [1, 1]].forEach(([a, b]) => B.add(G.box(0.06, 1.0, 0.06), woodDarkM, 4.6 + a * 1.1, 0.5, -4.6 + b * 0.38));
  for (let k = 0; k < 9; k++) B.add(G.box(0.4, 0.03, 0.3), fabM[k % fabM.length], 3.8 + (k % 3) * 0.5, 1.06 + Math.floor(k / 3) * 0.03, -4.55, 0, (rr() - 0.5) * 0.2, 0);
  const foldCloth = mesh(new THREE.PlaneGeometry(0.6, 0.45, 6, 1), new THREE.MeshStandardMaterial({ map: T.fab[4], side: THREE.DoubleSide, roughness: 0.95 }), 4.6, 1.1, -4.75, root);
  foldCloth.rotation.x = -Math.PI / 2;
  addCol(3.3, 5.9, -5.6, -4.1);

  // ---------- garments drying on lines, sacks, bolts, shrine, calendar, clock, ceiling fans ----------
  const cloths = [];
  const shirt = new THREE.Shape(); shirt.moveTo(-0.16, 0); shirt.lineTo(-0.3, -0.12); shirt.lineTo(-0.24, -0.24); shirt.lineTo(-0.15, -0.18); shirt.lineTo(-0.15, -0.75); shirt.lineTo(0.15, -0.75); shirt.lineTo(0.15, -0.18); shirt.lineTo(0.24, -0.24); shirt.lineTo(0.3, -0.12); shirt.lineTo(0.16, 0); shirt.lineTo(0.06, 0.02); shirt.lineTo(0, -0.06); shirt.lineTo(-0.06, 0.02);
  const shirtGeo = new THREE.ShapeGeometry(shirt, 2);
  { const p = shirtGeo.attributes.position, uv = shirtGeo.attributes.uv; for (let i = 0; i < p.count; i++) uv.setXY(i, p.getX(i) * 1.5 + 0.5, p.getY(i) * 1.5 + 1); }
  [[-3.3, 2.0, 7.2], [-3.9, 2.4, 6.9]].forEach(([z, x0, x1], li) => {
    B.add(wireGeo(new THREE.Vector3(x0, 3.25, z), new THREE.Vector3(x1, 3.25, z), 0.12, 0.005), wireM);
    for (let x = x0 + 0.4; x < x1 - 0.3; x += 0.62) {
      const sag = 0.12 * (1 - ((x - (x0 + x1) / 2) / ((x1 - x0) / 2)) ** 2);
      const piv = new THREE.Group(); piv.position.set(x, 3.25 - sag, z); root.add(piv);
      const c = mesh(shirtGeo, new THREE.MeshStandardMaterial({ map: T.fab[(Math.floor(x * 3) + li) % T.fab.length], side: THREE.DoubleSide, roughness: 0.95 }), 0, 0, 0, piv);
      piv.rotation.y = (rr() - 0.5) * 0.3; cloths.push(piv);
    }
  });
  // jute sacks of cut fabric along the right wall
  const jute = new THREE.MeshStandardMaterial({ map: TX.fabric('check', 5), color: 0xb89a6a, roughness: 1, flatShading: true });
  const sackProf = [[0.001, 0], [0.3, 0.02], [0.36, 0.25], [0.34, 0.55], [0.22, 0.75], [0.08, 0.82], [0.001, 0.84]].map(([r, y]) => new THREE.Vector2(r, y));
  const sackGeo = new THREE.LatheGeometry(sackProf, 9);
  [[7.45, -5.4], [7.45, -4.65], [6.85, -5.45], [7.5, -3.9], [7.4, 0.2], [6.9, -4.9]].forEach(([x, z], i) => { B.add(sackGeo, jute, x, i === 5 ? 0.7 : 0, z, 0.1 * (rr() - 0.5), rr() * 6, 0.1 * (rr() - 0.5), 1, 0.9 + rr() * 0.3, 1); });
  addCol(6.5, 7.9, -5.9, -3.5); addCol(7.0, 7.9, -0.2, 0.6);
  // fabric bolts leaning on the front wall
  for (let i = 0; i < 6; i++) B.add(G.cyl(0.11, 0.11, 2.2, 10), fabM[i], -5.6 + i * 0.3, 1.05, -5.75, 0.18, 0, (rr() - 0.5) * 0.1);
  addCol(-5.9, -3.9, -6, -5.4);
  // shrine shelf: marigolds, a brass lamp with a live flame, calendar
  const shrineX = -1.2;
  B.add(G.box(0.7, 0.04, 0.24), woodDarkM, shrineX, 1.95, ROOM.minZ + 0.12);
  B.add(G.box(0.04, 0.12, 0.2), woodDarkM, shrineX - 0.3, 1.89, ROOM.minZ + 0.12); B.add(G.box(0.04, 0.12, 0.2), woodDarkM, shrineX + 0.3, 1.89, ROOM.minZ + 0.12);
  for (let i = 0; i < 22; i++) { const k = i / 21, x = shrineX - 0.36 + k * 0.72, y = 2.05 - Math.sin(k * Math.PI) * 0.25; B.add(new THREE.IcosahedronGeometry(0.03, 0), M(i % 3 ? 0xf08a1a : 0xf0c020, { flatShading: true, emissive: 0x401800 }), x, y, ROOM.minZ + 0.05); }
  B.add(G.cyl(0.035, 0.02, 0.025, 10), M(0xc8a040, { metalness: 0.9, roughness: 0.3 }), shrineX + 0.15, 1.985, ROOM.minZ + 0.12);
  const flame = mesh(new THREE.ConeGeometry(0.008, 0.03, 6), new THREE.MeshBasicMaterial({ color: new THREE.Color(1, 0.6, 0.2).multiplyScalar(8) }), shrineX + 0.15, 2.015, ROOM.minZ + 0.12, root); flame.castShadow = false;
  const flameHalo = new THREE.Sprite(haloMat); flameHalo.position.set(shrineX + 0.15, 2.02, ROOM.minZ + 0.13); flameHalo.scale.setScalar(0.18); root.add(flameHalo);
  const calM = new THREE.MeshStandardMaterial({ map: TX.calendar(), roughness: 0.9 });
  const cal = mesh(new THREE.PlaneGeometry(0.42, 0.63), calM, shrineX - 0.75, 2.2, ROOM.minZ + 0.01, root); cal.rotation.z = 0.02; cal.castShadow = false;
  // wall clock above the door wall: 6:35 in the evening
  const clock = new THREE.Group(); clock.position.set(ROOM.maxX - 0.02, 3.0, 1.6); clock.rotation.y = -Math.PI / 2; root.add(clock);
  mesh(new THREE.CylinderGeometry(0.22, 0.22, 0.04, 24), M(0x5a2a1a), 0, 0, -0.02, clock).rotation.x = Math.PI / 2;
  mesh(new THREE.CircleGeometry(0.2, 24), new THREE.MeshStandardMaterial({ map: TX.clockFace(), roughness: 0.6 }), 0, 0, 0.002, clock);
  const hHand = new THREE.Group(), mHand = new THREE.Group(); clock.add(hHand, mHand); hHand.position.z = mHand.position.z = 0.01;
  mesh(new THREE.BoxGeometry(0.012, 0.11, 0.004), M(0x1a1410), 0, 0.045, 0, hHand); mesh(new THREE.BoxGeometry(0.008, 0.16, 0.004), M(0x1a1410), 0, 0.07, 0.003, mHand);
  // ceiling fans
  const fans = [];
  [[-3.6, 2.6], [1.6, 2.6], [-1.0, -3.0], [4.4, 0.6]].forEach(([x, z]) => {
    B.add(G.cyl(0.015, 0.015, 0.6, 6), M(0x5a5a52, { metalness: 0.5 }), x, 3.7, z);
    const f = new THREE.Group(); f.position.set(x, 3.38, z); root.add(f);
    mesh(new THREE.CylinderGeometry(0.1, 0.12, 0.12, 12), M(0x6a6a5a, { metalness: 0.4, roughness: 0.5 }), 0, 0, 0, f);
    for (let i = 0; i < 3; i++) { const piv = new THREE.Group(); piv.rotation.y = i * 2.094; f.add(piv); const b = mesh(new THREE.BoxGeometry(0.6, 0.01, 0.13), M(0x7a7a6a, { metalness: 0.3, roughness: 0.6 }), 0.38, -0.02, 0, piv); b.rotation.x = 0.12; }
    fans.push(f);
  });
  // scattered offcuts and thread on the floor
  for (let i = 0; i < 70; i++) {
    const x = -7.5 + rr() * 15, z = -5.5 + rr() * 11;
    B.add(G.box(0.05 + rr() * 0.12, 0.003, 0.04 + rr() * 0.1), fabM[i % fabM.length], x, 0.003, z, 0, rr() * 6, 0);
  }
  for (let i = 0; i < 25; i++) {
    const a = new THREE.Vector3(-7.5 + rr() * 15, 0.004, -5.5 + rr() * 11), b = a.clone().add(new THREE.Vector3((rr() - 0.5) * 0.6, 0, (rr() - 0.5) * 0.6));
    B.add(wireGeo(a, b, -0.02, 0.0025), M([0xb5442e, 0xe9e1cf, 0x1f3a68, 0xd9a22a][i % 4]));
  }
  // tiffin carriers stacked on a shelf by the front wall
  B.add(G.box(1.2, 0.04, 0.3), woodDarkM, 6.4, 1.5, ROOM.minZ + 0.16);
  for (let i = 0; i < 4; i++) for (let k = 0; k < 3; k++) B.add(G.cyl(0.07, 0.07, 0.07, 12), M(0xc0c0bc, { metalness: 0.9, roughness: 0.25 }), 5.95 + i * 0.3, 1.56 + k * 0.075, ROOM.minZ + 0.16);

  B.build(root);
  root.traverse(o => { if (o.isMesh && !o.material.colorWrite === false) o.receiveShadow = true; });

  // ---------- dream: a classroom chalkboard surfaces over the factory ----------
  const dream = new THREE.Group(); dream.visible = false; root.add(dream);
  const boardM = new THREE.MeshBasicMaterial({ map: TX.chalkboard(), transparent: true, opacity: 0, depthWrite: false, fog: false });
  boardM.color.setScalar(1.6);
  const board = new THREE.Mesh(new THREE.PlaneGeometry(1.9, 0.95), boardM); board.position.set(TXp + 0.1, 2.05, TZp - 1.7); dream.add(board);
  const letterTex = (ch) => { const c = document.createElement('canvas'); c.width = c.height = 128; const g = c.getContext('2d'); g.fillStyle = '#fff6e0'; g.font = '96px Georgia'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(ch, 64, 70); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t; };
  const letters = 'AaBbCकखग123'.split('').map((ch, i) => {
    const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: letterTex(ch), transparent: true, opacity: 0, depthWrite: false, color: new THREE.Color(2.2, 1.9, 1.4) }));
    s.scale.setScalar(0.09); s.userData = { ph: i * 0.7, x: (Math.random() - 0.5) * 0.6, z: (Math.random() - 0.5) * 0.3 }; dream.add(s); return s;
  });
  const dreamLight = lights.add({ pos: new THREE.Vector3(TXp, 2.0, TZp - 0.8), color: 0xffe2b0, intensity: 0, distance: 4, decay: 1.5, space: 'sweatshop', priority: 4 });

  // ---------- interaction targets ----------
  const pileT = interactor.add({ object: leftPile, label: 'Take a piece of fabric', enabled: () => S.phase === 'pick', onPress: pickFabric });
  const machineT = interactor.add({ object: playerMachine, label: 'Hold to sew', enabled: () => S.phase === 'push', onPress: () => { S.pushing = true; }, onRelease: () => { S.pushing = false; } });
  const bagT = interactor.add({ object: bagCtl.bag, label: 'Take your bag', enabled: () => S.phase === 'toBag', onPress: takeBag });
  const foremanT = interactor.add({ object: foreman, label: 'Collect your wages', enabled: () => S.phase === 'toWages', onPress: askWages, maxDist: 3.2 });
  const doorT = interactor.add({ object: doorPivot, label: 'Open the door', enabled: () => S.phase === 'toDoor', onPress: openDoor });

  // ---------- sound ----------
  let sounds = [], snd = {};
  const machineSoundObj = new THREE.Object3D(); machineSoundObj.position.copy(NEEDLE); root.add(machineSoundObj);
  function startSounds() {
    stopSounds();
    const add = (k, a) => { if (a) { sounds.push(a); snd[k] = a; } return a; };
    add('room', audio.loop('room', { volume: 0.05 }));
    add('machine', audio.loop('sewing', { object: machineSoundObj, volume: 0, ref: 0.8 }));
    add('idle', audio.loop('hum', { object: machineSoundObj, volume: 0.02, ref: 0.8 }));
    snd.factory = [[-3.6, 1.25], [1.6, -1.5], [-1.0, -4.25], [1.6, 1.25]].map(([x, z], i) => { const o = new THREE.Object3D(); o.position.set(x, 1.3, z); root.add(o); return add('f' + i, audio.loop('factory', { object: o, volume: 0.25, rate: 0.92 + i * 0.05, ref: 1.8 })); });
    snd.chatter = [[-3.6, -0.5], [1.6, -3.4]].map(([x, z], i) => { const o = new THREE.Object3D(); o.position.set(x, 1.6, z); root.add(o); return add('c' + i, audio.loop('chatter', { object: o, volume: 0.22, ref: 1.5 })); });
    add('fan', audio.loop('hum', { object: fans[0], volume: 0.025, rate: 0.7, ref: 1.2 }));
    add('children', audio.loop('children', { object: windowSound, volume: 0.15, ref: 1.2 }));
    add('street', audio.loop('street', { object: doorSound, volume: 0.03, ref: 1.5 }));
  }
  function stopSounds() { audio.stopAll(sounds); sounds = []; snd = {}; }

  // =================================================================================
  // STORY (same beats as v0.4)
  const S = { phase: 'idle', t: 0, pieces: 0, progress: 0, pushing: false, idle: 0, anim: null, factoryWork: 1, coinsIn: 0, schoolBellT: 18, gaze: 0, dreamK: 0, windowGlow: 0, ended: false };
  const flying = [];
  let doorOpen = false;
  const hint = (text, secs = 5) => ui.hint(text, secs);
  const thought = (text, secs) => ui.thought(text, secs);
  function setPhase(p) { S.phase = p; S.t = 0; S.idle = 0; }

  function pickFabric() {
    const top = pileLayers[pileLayers.length - 1 - S.pieces];
    if (top) top.visible = false;
    piece.material.map = top ? top.material.map : T.fab[0]; piece.material.needsUpdate = true;
    piece.visible = true; piece.scale.set(1, 1, 1); piece.position.copy(leftPile.localToWorld(new THREE.Vector3(0, 0.2, 0)));
    // t starts below 0: the left hand reaches the pile before the cloth moves
    S.anim = { from: leftPile.localToWorld(new THREE.Vector3(0, 0.2, 0)), to: NEEDLE.clone().add(new THREE.Vector3(0.04, 0, 0.16)), t: -0.55, dur: 0.6 };
    audio.oneShot('fabric', { object: machineSoundObj, volume: 0.7 });
    S.progress = 0;
    setPhase('placing');
  }
  function takeBag() {
    // the right hand reaches for the bag first; it comes off the hook when the fingers close
    const neck = bagCtl.bag.localToWorld(new THREE.Vector3(0, 0.3, 0));
    player.headWorld(headPos);
    hands.set(1, { key: 'reach-bag', mode: 'world', pos: neck.add(new THREE.Vector3(-0.06, 0, 0)), rot: GRIP.toward(1, headPos, neck), pose: 'grip', blend: 0.38 });
    setPhase('taking');
  }
  function askWages() {
    setPhase('paying'); foreman.userData.reach = true; foreman.userData.stand = true;   // he gets up to pay
    ui.subtitle('Supervisor: "Here. Same time tomorrow."', 3.5);
  }
  function openDoor() { setPhase('opening'); audio.oneShot('door', { object: doorSound, volume: 1 }); alley.visible = true; }
  const DOOR_PUSH = new THREE.Vector3(ROOM.maxX - 0.12, 1.15, DOOR.z1 - 0.25);

  function reset() {
    sun.intensity = SUN_BASE;
    flying.forEach(f => root.remove(f.mesh)); flying.length = 0;
    Object.assign(S, { dream: null, dreamT: 0, saidOthers: false, pieces: 0, progress: 0, pushing: false, factoryWork: 1, coinsIn: 0, anim: null, ended: false, dreamK: 0, windowGlow: 0, gaze: 0 });
    pileLayers.forEach(l => { l.visible = true; });
    rightPile.clear(); piece.visible = false;
    hangBag(); bagCtl.setCoins(0); bagCtl.forceOpen = 0;
    doorPivot.rotation.y = 0; doorLight.intensity = 0; alley.visible = false; doorOpen = false;
    foreman.userData.reach = false; foreman.userData.stand = false; foreman.userData.standK = 0;
    workers.forEach(w => { w.p.userData.work = 1; });
    machines.forEach(({ m, isPlayer }) => { if (isPlayer) m.userData.speed = 0; });
    dream.visible = false; boardM.opacity = 0; letters.forEach(l => { l.material.opacity = 0; }); dreamLight.intensity = 0;
    player.canMove = false; player.bounds = { minX: ROOM.minX + 0.3, maxX: ROOM.maxX - 0.3, minZ: ROOM.minZ + 0.3, maxZ: ROOM.maxZ - 0.3 };
    thread.set(null); hands.hide();
    setPhase('idle');
  }
  function start() {
    reset();
    player.place(SEAT.x, SEAT.z, 0, 1.3);
    startSounds();
    setPhase('intro');
  }
  function stop() { stopSounds(); setPhase('idle'); sun.intensity = 0; doorLight.intensity = 0; }

  function dropCoin() {
    const c = mesh(new THREE.CylinderGeometry(0.022, 0.022, 0.006, 14), M(0xc8a040, { metalness: 0.9, roughness: 0.3 }), 0, 0, 0, root);
    c.position.copy(foremanHand);
    flying.push({ mesh: c, from: c.position.clone(), t: 0, dur: 0.75 });
  }

  // ---------- the other children: the same cycle as yours, again and again ----------
  // 0–1.2 reach left for a piece · 1.2–2 lay it under the needle · 2–6.6 sew · 6.6–7.6 onto the pile · rest
  const CYCLE = 9.2, bump = (u, a, b, e = 0.35) => clamp((u - a) / e, 0, 1) * clamp((b - u) / e, 0, 1);
  const _a = new THREE.Vector3(), _b = new THREE.Vector3(), _c = new THREE.Vector3();
  const bez = (o, a, c, b, k) => o.set((1 - k) * (1 - k) * a.x + 2 * (1 - k) * k * c.x + k * k * b.x, (1 - k) * (1 - k) * a.y + 2 * (1 - k) * k * c.y + k * k * b.y, (1 - k) * (1 - k) * a.z + 2 * (1 - k) * k * c.z + k * k * b.z);
  function crewWork(w, t, dt) {
    const { p, m, pc } = w, J = p.userData.J;
    const u = (((t + w.off) % w.cyc + w.cyc) % w.cyc) * (CYCLE / w.cyc);
    const sewing = u > 2.0 && u < 6.6 ? 1 : 0;
    p.userData.work = lerp(p.userData.work, 1, dt * 1.5);   // your shift ends; theirs doesn't — they keep working
    m.userData.speed = lerp(m.userData.speed, sewing ? 1 : 0.05, dt * 4);
    animateSew(p, t, dt, m.userData.speed);
    // arms and body for the reaches (on top of the sewing pose)
    const rl = ease(bump(u, 0.1, 1.5)), rr2 = ease(bump(u, 6.5, 7.7));
    J.spine.rotation.y = 0.55 * rl - 0.45 * rr2;   // turn toward the stool on the left, then the pile on the right
    J.spine.rotation.x += 0.15 * (rl + rr2);
    J.shL.rotation.x = lerp(J.shL.rotation.x, -1.25, rl); J.shL.rotation.z = lerp(J.shL.rotation.z, 0.75, rl); J.elL.rotation.x = lerp(J.elL.rotation.x, -0.2, rl);
    J.shR.rotation.x = lerp(J.shR.rotation.x, -1.2, rr2); J.shR.rotation.z = lerp(J.shR.rotation.z, -0.7, rr2); J.elR.rotation.x = lerp(J.elR.rotation.x, -0.25, rr2);
    // the piece
    const bedY = TABLE_H + 0.058, nx = w.x - 0.27;
    if (u < 1.0) { pc.visible = u > 0.55; pc.position.set(w.lx, w.top, w.lz); }
    else if (u < 2.0) { const k = ease((u - 1.0) / 1.0); _a.set(w.lx, w.top, w.lz); _b.set(nx, bedY, w.z + 0.16); _c.set(w.x - 0.62, TABLE_H + 0.22, w.z + 0.3); bez(pc.position, _a, _c, _b, k); pc.visible = true; }   // up and over the table edge
    else if (u < 6.6) { const k = (u - 2.0) / 4.6; pc.position.set(nx + Math.sin(k * 9) * 0.01, bedY, w.z + 0.16 - k * 0.3); }
    else if (u < 7.6) { const k = ease((u - 6.6) / 1.0); _a.set(nx, bedY, w.z - 0.14); _b.set(w.x + 0.4, w.done, w.z + 0.1); _c.set(w.x + 0.02, TABLE_H + 0.14, w.z + 0.42); bez(pc.position, _a, _c, _b, k); }   // round the front of the machine, not through it
    else pc.visible = false;   // it joins the pile (the pile never grows: there is always the same amount of work)
    pc.rotation.y = Math.sin(w.off) * 0.15;
  }

  // ---------- per frame ----------
  let carrierPhase = 0;
  function update(dt, t, active = true) {
    // the schoolyard (and its sky) is only seen through the window: hide it once you are outside,
    // or its sky dome would wrap over the lane and the market
    player.headWorld(headPos); outside.visible = headPos.x < ROOM.maxX + 0.6 && headPos.x > ROOM.minX - 30;
    shaftMat.uniforms.uTime.value = t; dustMat.uniforms.uTime.value = t;
    workers.forEach(w => crewWork(w, t, dt));
    machines.forEach(({ m }) => animateMachine(m, dt));
    fans.forEach((f, i) => { f.rotation.y += dt * (2.2 + i * 0.3); });
    cloths.forEach((c, i) => { c.rotation.x = 0.07 * Math.sin(t * 0.9 + i * 1.3); c.rotation.z = 0.03 * Math.sin(t * 0.7 + i); });
    flame.scale.y = 1 + 0.25 * Math.sin(t * 13) * Math.sin(t * 7.3); flameHalo.scale.setScalar(0.17 + 0.02 * Math.sin(t * 11));
    bulbs.forEach(b => { b.L.intensity = b.base * (1 + 0.035 * Math.sin(t * 2.1 + b.flick) * Math.sin(t * 5.3 + b.flick)); });
    // the tube light stutters now and then
    const fl = 1 - 0.06 * Math.max(0, Math.sin(t * 0.37)) * (0.5 + 0.5 * Math.sin(t * 9.0));   // a tired, smooth hum — never a strobe
    tube.intensity = 0.55 * fl; tubeGlow.material.emissiveIntensity = 3.5 * fl;
    mHand.rotation.z = -(35 / 60) * Math.PI * 2 - t * 0.0017; hHand.rotation.z = -((6 + 35 / 60) / 12) * Math.PI * 2 - t * 0.00014;
    // kids playing outside
    kids.forEach((k, i) => {
      const c = k.userData.c; c.a += dt * c.sp / c.r;
      k.position.set(c.cx + Math.cos(c.a) * c.r, 0, c.cz + Math.sin(c.a) * c.r);
      k.rotation.y = Math.atan2(-Math.sin(c.a) * Math.sign(c.sp), Math.cos(c.a) * Math.sign(c.sp));
      animateWalk(k, t * 11 + i, 1.2);
    });
    animateIdle(teacher, t, dt);
    // carrier walks the back aisle
    carrierPath.t += dt * 0.11;
    const cp = (Math.sin(carrierPath.t) + 1) / 2, dir = Math.cos(carrierPath.t) > 0 ? 1 : -1;
    carrier.position.set(lerp(carrierPath.x0, carrierPath.x1, cp), 0, carrierPath.z);
    carrier.rotation.y = damp(carrier.rotation.y, dir > 0 ? Math.PI / 2 : -Math.PI / 2, 5, dt);
    carrierPhase += dt * 7 * Math.abs(Math.cos(carrierPath.t)) + dt * 0.5;
    animateWalk(carrier, carrierPhase, Math.min(1, Math.abs(Math.cos(carrierPath.t)) * 3)); carrier.userData.J.shL.rotation.set(-2.8, 0, 0.35); carrier.userData.J.elL.rotation.x = -0.5;
    // the folder folds and folds
    { const J = folder.userData.J, k = (Math.sin(t * 1.4) + 1) / 2;
      J.spine.rotation.x = 0.35; J.neck.rotation.x = 0.3;
      J.shL.rotation.set(-1.2 - k * 0.5, 0, 0.3 - k * 0.2); J.shR.rotation.set(-1.2 - k * 0.5, 0, -0.3 + k * 0.2); J.elL.rotation.x = -0.6; J.elR.rotation.x = -0.6;
      const p = foldCloth.geometry.attributes.position; for (let i = 0; i < p.count; i++) { const x = p.getX(i); p.setZ(i, Math.max(0, x) * Math.sin(k * Math.PI) * 0.7); } p.needsUpdate = true; foldCloth.geometry.computeVertexNormals(); }
    // supervisor: idles, watches you, reaches out with coins
    { const J = foreman.userData.J, fu = foreman.userData; animateIdle(foreman, t, dt);
      // sit ⇄ stand: a smooth rise — lean forward over the knees, push up, straighten (and the reverse)
      fu.standK = clamp(fu.standK + (fu.stand ? dt : -dt) / 1.25, 0, 1);
      const e = ease(fu.standK), lean = Math.sin(e * Math.PI);
      J.hips.position.y = lerp(FSIT.hy, fu.hipY, e);
      J.hipL.rotation.x = J.hipR.rotation.x = lerp(FSIT.hip, 0, e);
      J.kneeL.rotation.x = J.kneeR.rotation.x = lerp(FSIT.knee, 0, e);
      J.spine.rotation.x += 0.5 * lean + 0.12 * (1 - e);
      foreman.position.z = lerp(CH.z, CH.z - 0.32, e);          // standing, he is over his feet (in front of the chair)
      fu.mode = e > 0.5 ? 'stand' : 'sit';
      const reach = fu.reach && fu.standK > 0.85 ? 1 : 0; fu.reachK = damp(fu.reachK || 0, reach, 4, dt); const rk = fu.reachK;
      J.shR.rotation.set(-0.1 - rk * 1.25, 0, -0.06 - rk * 0.15); J.elR.rotation.x = -0.2 - rk * 0.25;
      J.shL.rotation.set(-0.35, 0, 0.08); J.elL.rotation.x = -1.1;   // hand resting on the ledger
      J.handR.getWorldPosition(foremanHand); }

    if (S.phase === 'idle' || S.phase === 'done' || !active) return;
    S.t += dt; S.idle += dt;
    thread.urgent = S.idle > 20;
    if (S.idle > 20 && S.idle - dt <= 20) remindIdle();

    // looking out of the window turns up the schoolyard
    player.headWorld(headPos); player.camera.getWorldDirection(tmp);
    tmp2.set(wx, wyc, wzc).sub(headPos).normalize();
    const looking = tmp.dot(tmp2) > 0.82 && headPos.distanceTo(tmp2.set(wx, wyc, wzc)) < 5;
    S.gaze = lerp(S.gaze, looking ? 1 : 0, dt * 1.5);
    S.schoolBellT -= dt;
    if (S.schoolBellT < 0 && S.phase !== 'outside') { S.schoolBellT = 30 + Math.random() * 15; audio.oneShot('schoolBell', { object: windowSound, volume: 0.25 + S.gaze * 0.4 }); }

    const pm = playerMachine.userData;
    pm.speed = lerp(pm.speed, S.pushing && S.phase === 'push' ? 1 : 0, dt * 8);
    if (snd.machine) snd.machine.setVolume(pm.speed * 0.55 * (1 - 0.6 * S.dreamK));
    if (snd.children) snd.children.setVolume(0.15 + 0.55 * Math.max(S.gaze, S.dreamK));
    if (snd.factory) snd.factory.forEach(a => a && a.setVolume(0.12 * (1 - 0.6 * S.dreamK) + 0.01));   // V3.1: the other machines quieter (less constant drone)
    if (snd.chatter) snd.chatter.forEach(a => a && a.setVolume(0.2 + (1 - S.factoryWork) * 0.25));
    sun.intensity = SUN_BASE * (1 + 0.3 * S.windowGlow + 0.1 * S.gaze);
    shaftMat.uniforms.uK.value = 1 + 0.55 * S.windowGlow + 0.2 * S.gaze;
    ctx.post.dream = S.dreamK; ctx.post.glow = S.windowGlow * 0.35;

    updateHands(t);

    // a daydream (the school, the window) plays over the work: it never stops you sewing (V3)
    if (S.dream) {
      S.dreamT += dt; const dT = S.dreamT;
      const k = dT < 1.2 ? dT / 1.2 : dT > 4.2 ? Math.max(0, 1 - (dT - 4.2) / 1.3) : 1;
      S.dreamK = S.dream === 'school' ? k * (S.pushing ? 0.75 : 1) : k * 0.35;
      if (S.dream === 'school') {
        dream.visible = true; boardM.opacity = k * 0.8; dreamLight.intensity = k * 3;
        letters.forEach((l, i) => { const u = l.userData, ph = (dT * 0.25 + u.ph * 0.13) % 1; l.position.set(NEEDLE.x + 0.2 + u.x, NEEDLE.y + 0.05 + ph * 1.1, NEEDLE.z - 0.2 + u.z - ph * 0.6); l.material.opacity = k * Math.sin(ph * Math.PI) * 0.9; });
      } else S.windowGlow = ease(k);
      if (dT > 5.5) { dream.visible = false; S.dreamK = 0; S.windowGlow = 0; S.dream = null; }
    }
    // who are the others? the first time you look at one of them, the child tells you
    if (!S.saidOthers && ['pick', 'push'].includes(S.phase) && S.t > 2) {
      player.camera.getWorldDirection(tmp);
      const seen = workers.find(w => { tmp2.copy(w.p.position).setY(1.0).sub(headPos); const dd = tmp2.length(); return dd < 6 && tmp.dot(tmp2.normalize()) > 0.93; });
      if (seen) { S.saidOthers = true; thought('Everyone here is a child like me. Some are younger.', 4.5); }
    }
    if (!S.saidOthers && S.phase === 'pick' && S.pieces === 1 && S.t > 6) { S.saidOthers = true; thought('Everyone here is a child like me. Some are younger.', 4.5); }

    switch (S.phase) {
      case 'intro':
        if (S.t > 1.2 && S.t - dt <= 1.2) thought('Four more pieces. Then I can go home.', 4.5);
        if (S.t > 5) { setPhase('pick'); hint('Look around with the mouse · click the glowing fabric on your left', 6); }
        break;
      case 'placing': {
        const a = S.anim; a.t += dt / a.dur; const k = ease(clamp(a.t, 0, 1));
        piece.position.lerpVectors(a.from, a.to, k); piece.position.y += Math.sin(k * Math.PI) * 0.14;
        piece.rotation.set(0, (1 - k) * 0.8, 0);
        if (a.t >= 1) { setPhase('push'); if (S.pieces === 0) hint('Hold the mouse button on the machine to push the fabric through', 6); }
        break;
      }
      case 'push':
        if (S.pushing) { S.progress += dt / 3.2; S.idle = 0; }
        ui.progress(S.progress);
        piece.position.set(NEEDLE.x + 0.04 + Math.sin(S.progress * 30) * 0.004 * (S.pushing ? 1 : 0), NEEDLE.y, NEEDLE.z + 0.16 - S.progress * 0.34);
        if (S.progress >= 1) {
          ui.progress(0);
          audio.oneShot('fabric', { object: machineSoundObj, volume: 0.7, rate: 1.2 });
          S.anim = { from: piece.position.clone(), to: rightPile.localToWorld(new THREE.Vector3(0, 0.02 + S.pieces * 0.024, 0)), t: -0.3, dur: 0.6 };
          S.pushing = false;
          setPhase('folding');
        }
        break;
      case 'folding': {
        const a = S.anim; a.t += dt / a.dur; const k = ease(clamp(a.t, 0, 1));
        _c.set(TXp + 0.02, TABLE_H + 0.15, TZp + 0.42); bez(piece.position, a.from, _c, a.to, k);   // round the front of the machine to the pile (not through its pillar)
        piece.scale.set(1, 1, 1 - 0.3 * k);
        if (a.t >= 1) {
          piece.visible = false;
          const folded = mesh(new THREE.BoxGeometry(0.32, 0.024, 0.2), new THREE.MeshStandardMaterial({ map: piece.material.map, roughness: 0.95 }), 0, 0.012 + S.pieces * 0.024, 0, rightPile);
          folded.rotation.y = (Math.random() - 0.5) * 0.2;
          S.pieces++;
          if (S.pieces === 2) { startDream('school'); setPhase('pick'); }
          else if (S.pieces === 3) { startDream('window'); setPhase('pick'); }
          else if (S.pieces >= QUOTA) { setPhase('shiftEnd'); audio.oneShot('shiftBell', { volume: 0.55 }); }
          else setPhase('pick');
        }
        break;
      }
      case 'shiftEnd':
        S.factoryWork = Math.max(0, 1 - S.t / 2.5);
        if (S.t > 0.6 && S.t - dt <= 0.6) thought('Finally.', 2.5);
        if (S.t > 2.8) { S.standZ0 = player.dolly.position.z; setPhase('standing'); }
        break;
      case 'standing': {
        const k = ease(Math.min(1, S.t / 1.6));
        const z0 = player.xr ? S.standZ0 : SEAT.z;   // VR: from wherever your head put the play space (no jump)
        player.eye = lerp(1.3, 1.52, k); player.dolly.position.z = lerp(z0, z0 + 0.6, k);
        if (S.t > 1.7) { player.canMove = true; setPhase('toBag'); hint('W A S D to walk · hold Shift to run · find your bag (look for the glow)', 7); }
        break;
      }
      case 'taking':
        if (S.t > 0.36) {
          bagCtl.take(); audio.oneShot('fabric', { volume: 0.6, rate: 0.8 });
          setPhase('toWages'); hint('Take it to the supervisor at his counter', 5);
        }
        break;
      case 'paying':
        if (S.t > 1.9 && S.coinsIn + flying.length < 3 && S.t > 1.9 + (S.coinsIn + flying.length) * 0.75) dropCoin();   // once he is up and reaching
        bagCtl.forceOpen = 1;
        if (S.coinsIn >= 3 && S.t > 4.9) {
          foreman.userData.reach = false; bagCtl.forceOpen = 0;
          setTimeout(() => { foreman.userData.stand = false; }, 1600);   // and sits back down once you turn to go
          setPhase('toDoor');
          thought('Three coins. A whole day.', 4.5);
          S.qHintAt = 4;
        }
        break;
      case 'opening': {
        const k = ease(Math.min(1, S.t / 1.4));
        doorPivot.rotation.y = -k * 1.6;
        doorLight.intensity = k * 14;
        if (snd.street) snd.street.setVolume(0.03 + k * 0.25);
        if (S.t > 1.0 && !doorOpen) { doorOpen = true; ctx.refreshColliders(); player.bounds = { minX: ROOM.minX + 0.3, maxX: ROOM.maxX + 4, minZ: ROOM.minZ + 0.3, maxZ: ROOM.maxZ - 0.3 }; }
        if (S.t > 1.5) { setPhase('outside'); thought('Something to eat first.', 3.5); }
        break;
      }
      case 'toDoor':
        if (S.qHintAt && S.t > S.qHintAt) { S.qHintAt = 0; hint('Hold Q to look inside your bag · then go home', 6); }
        break;
      case 'outside':
        if (snd.room) snd.room.setVolume(Math.max(0, 0.05 - S.t * 0.015));
        if (headPos.x > ROOM.maxX + 0.6 && !S.ended) { S.ended = true; thread.set(null); setPhase('done'); onEndFn && onEndFn('street'); }
        break;
    }

    // coins in flight, from his hand into your open bag
    for (let i = flying.length - 1; i >= 0; i--) {
      const f = flying[i]; f.t += dt / f.dur;
      const to = bagCtl.worldMouth(tmp);
      f.mesh.position.lerpVectors(f.from, to, ease(Math.min(1, f.t)));
      f.mesh.position.y += Math.sin(Math.min(1, f.t) * Math.PI) * 0.25;
      f.mesh.rotation.x += dt * 14;
      if (f.t >= 1) {
        root.remove(f.mesh); flying.splice(i, 1);
        S.coinsIn++; bagCtl.setCoins(S.coinsIn);
        audio.oneShot('coin', { volume: 0.9, rate: 0.95 + Math.random() * 0.1 });
      }
    }
    // the supervisor watches you once you're up
    if (['toBag', 'toWages', 'paying', 'toDoor'].includes(S.phase)) {
      const dx = headPos.x - foreman.position.x, dz = headPos.z - foreman.position.z;
      foreman.userData.look = clamp(wrapA(Math.atan2(dx, dz) - foreman.rotation.y), -0.9, 0.9);
      foreman.userData.lookPitch = 0.25;
    } else { foreman.userData.look = 0.4 * Math.sin(t * 0.2); foreman.userData.lookPitch = 0.3; }

    const goals = {
      pick: leftPile.localToWorld(tmp2.set(0, 0.25, 0)).clone(),
      toBag: BAG_HOME.clone(), toWages: new THREE.Vector3(DESK.x, 1.1, DESK.z - DESK.d / 2), toDoor: new THREE.Vector3(ROOM.maxX - 0.1, 1.1, (DOOR.z0 + DOOR.z1) / 2),
      outside: new THREE.Vector3(ROOM.maxX + 2, 0.5, (DOOR.z0 + DOOR.z1) / 2),
    };
    thread.set(goals[S.phase] || null);
  }

  // ---------- the child's hands ----------
  const handP = [new THREE.Vector3(), new THREE.Vector3()];
  const TABLE_REST = new THREE.Vector3(SEAT.x + 0.02, TABLE_H + 0.035, TZp + 0.36);
  function onTable(side, at, key, pose = 'relax', dx = 0.13) {
    const rest = key === 'table';
    handP[side].set(at.x + (side ? dx : -dx) * (rest ? 1.25 : 1), at.y + (rest ? 0.025 : 0.04), at.z + 0.07);
    hands.set(side, { key, mode: 'world', pos: handP[side], rot: rest ? GRIP.rest(side ? 1 : -1) : GRIP.table(side ? 1 : -1), pose, blend: 0.28 });
  }
  function updateHands(t) {
    const ph = S.phase;
    const seated = ['intro', 'pick', 'placing', 'push', 'folding', 'dream', 'shiftEnd'].includes(ph);
    if (seated) {
      const jig = S.pushing ? Math.sin(t * 22) * 0.003 : 0;
      if (ph === 'push') {
        // guide the cloth from the sides, well clear of the needle (the left hand stays left of it)
        onTable(0, tmp.copy(piece.position).add(tmp2.set(-0.08, jig, 0.06)), 'sew', 'flat', 0.13);
        onTable(1, tmp.copy(piece.position).add(tmp2.set(0.05, -jig, 0.08)), 'sew', 'flat', 0.13);
      }
      else if (ph === 'placing') {
        handP[0].copy(piece.position).add(tmp2.set(-0.1, 0.03, 0.06));
        hands.set(0, { key: 'carry', mode: 'world', pos: handP[0], rot: GRIP.reach(-1, 0.3, -0.55), pose: 'pinch', blend: 0.33 });
        onTable(1, TABLE_REST, 'table');
      } else if (ph === 'folding') {
        handP[1].copy(piece.position).add(tmp2.set(0.1, 0.03, 0.06));
        hands.set(1, { key: 'fold', mode: 'world', pos: handP[1], rot: GRIP.reach(1, -0.2, -0.55), pose: 'pinch', blend: 0.18 });
        onTable(0, TABLE_REST, 'table');
      } else if (ph === 'shiftEnd' && S.t > 1.8) { hands.hide(); }
      else {
        // between tasks the hands only come up when you face the machine, ready to work; look away and
        // they drop out of view (no hands parked on the table while you look round the room)
        player.camera.getWorldDirection(tmp2);
        const facing = tmp2.z < -0.55 && tmp2.y < 0.15;
        if (facing) { onTable(0, TABLE_REST, 'table'); onTable(1, TABLE_REST, 'table'); } else hands.hide();
      }
      return;
    }
    if (ph === 'opening' && S.t < 1.1) {
      // push the door open with the left hand
      handP[0].copy(DOOR_PUSH);
      doorPivot.updateWorldMatrix(true, false);
      hands.set(0, { key: 'door', mode: 'world', pos: handP[0].set(ROOM.maxX - 0.08 - Math.sin(doorPivot.rotation.y * -1) * 0.9, 1.15, DOOR.z0 + Math.cos(-doorPivot.rotation.y) * (DOOR.z1 - DOOR.z0 - 0.3)), rot: GRIP.push(-1, -Math.PI / 2), pose: 'flat', blend: 0.3 });
      return;
    }
    if (ph === 'opening' || ph === 'outside') { if (!bagCtl.open) hands.hide(0); return; }
    if (!bagCtl.held && ph !== 'taking') hands.hide(1);
    if (!bagCtl.held && ph !== 'taking') hands.hide(0);
  }

  function startDream(kind) {
    S.dream = kind; S.dreamT = 0;
    audio.oneShot('schoolBell', { object: kind === 'school' ? machineSoundObj : windowSound, volume: kind === 'school' ? 0.45 : 0.6 });
    thought(kind === 'school' ? 'I used to know all my letters.' : 'They\'re learning to read right now.', 4.5);
  }
  function remindIdle() {
    const m = { pick: 'Click the fabric on your left', push: 'Hold the mouse button on the machine', toBag: 'Your bag hangs by the door — look for the glow', toWages: 'Click the supervisor at his desk', toDoor: 'Click the door to go outside', outside: 'Walk out into the street' }[S.phase];
    if (m) hint(m, 5);
  }

  // ---------- title-screen camera ----------
  function cine(cam, t) {
    const k = 0.5 - 0.5 * Math.cos(t * Math.PI * 2 / 70);
    const x = lerp(-6.0, 3.0, k);
    cam.position.set(x, 1.25 + 0.03 * Math.sin(t * 0.5), 2.9);
    cam.lookAt(x - 1.2 + 2.4 * k, 1.15, -1.5 + 0.8 * Math.sin(t * 0.09));
  }

  function setQuality(q) {
    dust.visible = q !== 'low'; shaft.visible = true; shaftMat.uniforms.uSteps.value = q === 'high' ? 40 : q === 'medium' ? 34 : 28;   // enough steps to stay smooth without dithering
    sun.shadow.mapSize.setScalar(q === 'high' ? 2048 : q === 'medium' ? 1536 : 1024);
    if (sun.shadow.map) { sun.shadow.map.dispose(); sun.shadow.map = null; }
  }

  let onEndFn = null;
  const doorCollider = { minX: ROOM.maxX - 0.4, maxX: ROOM.maxX + 1, minZ: DOOR.z0, maxZ: DOOR.z1 };
  return {
    root, update, start, stop, reset, cine, setQuality, name: 'sweatshop', sun,
    zone: { minX: -100 },
    // the factory's air: warm dusty fill, short fog
    atmosphere() { return { fog: new THREE.Color(0x1d1712), density: 0.05, sun: 0, hemi: 0.36, hemiSky: new THREE.Color(0x8a7458), hemiGround: new THREE.Color(0x1a140f), sky: 0.7, skyTint: new THREE.Color(1.0, 0.6, 0.4), exposure: 1.0 }; },   // V1's air: dark and smoky; dusk outside
    onEnd(fn) { onEndFn = fn; },
    get phase() { return S.phase; },
    getColliders() { return doorOpen ? colliders : [...colliders, doorCollider]; },
    skip() {
      const p = S.phase;
      if (['intro', 'dream', 'shiftEnd', 'standing', 'paying', 'opening', 'placing', 'folding'].includes(p)) { if (S.anim) S.anim.t = 1; S.t = 99; }
    else if (p === 'toDoor') { player.place(ROOM.maxX - 1.2, (DOOR.z0 + DOOR.z1) / 2, -Math.PI / 2, 1.52); openDoor(); }
      else if (p === 'pick') pickFabric();
      else if (p === 'push') S.progress = 1;
      else if (p === 'toBag') { player.place(BAG_HOME.x - 1.0, BAG_HOME.z, -Math.PI / 2, 1.52); takeBag(); }
      else if (p === 'taking') { S.t = 99; }
      else if (p === 'toWages') { player.place(DESK.x, DESK.z - 1.15, Math.PI, 1.52); askWages(); }
      else if (p === 'toDoor') { player.place(ROOM.maxX - 1.2, (DOOR.z0 + DOOR.z1) / 2, -Math.PI / 2, 1.52); openDoor(); }
      else if (p === 'outside') player.place(ROOM.maxX + 1, (DOOR.z0 + DOOR.z1) / 2, -Math.PI / 2, 1.52);
    },
    setPushing(v) { S.pushing = v; },
    // debug: open the door with the bag already paid
    debugDoor() {
      this.debugStand(); bagCtl.take(); S.coinsIn = 3; bagCtl.setCoins(3);
      player.place(ROOM.maxX - 1.2, (DOOR.z0 + DOOR.z1) / 2, -Math.PI / 2, 1.52); setPhase('toDoor'); openDoor();
    },
    // scene select: the shift is done — you stand just outside the door with your bag and three coins
    sceneOutside() {
      this.debugStand(); bagCtl.take(); bagCtl.takeK = 1; S.coinsIn = 3; bagCtl.setCoins(3);
      doorPivot.rotation.y = -1.6; doorOpen = true; alley.visible = true; ctx.refreshColliders();
      player.bounds = null; player.place(ROOM.maxX + 1.0, (DOOR.z0 + DOOR.z1) / 2, -Math.PI / 2, 1.52);
      hands.hide(0); setPhase('outside');
    },
    // debug: jump straight to the walk to the bag (shift over, standing)
    debugStand() {
      S.pieces = QUOTA; S.factoryWork = 0; piece.visible = false; S.anim = null;
      player.eye = 1.52; player.dolly.position.z = SEAT.z + 0.6; player.canMove = true;
      setPhase('toBag');
    },
    get S() { return S; },
  };
}
