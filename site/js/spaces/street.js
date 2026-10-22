// The Long Way Home — created by Sicheng Zheng. © 2026 Sicheng Zheng. All rights reserved.
// SPACE 2 — THE STREET & MARKET
// Board notes: the only light source is the sun, dusty air, cramped houses and street.
// Walk the street, try to sell fabric, hold out a hand to beg, count coins at a food stall
// and find you cannot buy a meal. Three failed attempts build the pressure that leads to
// the decision to steal (the turning point, which starts Space 3).
// Look reference: Space 2 rough view — narrow lane, tall patched facades, tangled wires,
// cloth/tarp awnings, a bicycle against the wall, uneven ground.
import * as THREE from 'three';
import * as T from '../textures.js';
import { M, TM, box, cyl, wire, fabricMat, makeSack, makeFigure, animateFigure, makeWalker, lerp, ease } from '../kit.js';
import { Pursuit } from '../pursuit.js';

export const ALLEY = { x0: 8, x1: 22, z0: 2.4, z1: 5.4, bx1: 19.3 };
export const MARKET = { x0: 22, x1: 40, z0: -4, z1: 12, exitZ0: 7, exitZ1: 9.6 };

export function buildAlley(parent) {
  const root = new THREE.Group(); root.name = 'alley'; parent.add(root);
  const { x0, x1, z0, z1 } = ALLEY;
  const zc = (z0 + z1) / 2, len = x1 - x0;
  const colliders = [];

  // ground: packed dirt, a drain along one side, puddles
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(len, z1 - z0 + 0.2), TM(T.dirtFloor([len / 3, 1])));
  ground.rotation.x = -Math.PI / 2; ground.position.set(x0 + len / 2, 0.002, zc); root.add(ground);
  box(len, 0.02, 0.25, M(0x3a3026, { roughness: 0.4 }), x0 + len / 2, 0.004, z1 - 0.2, root);   // shallow drain
  [[10.2, 3.5, 0.9], [14.5, 4.2, 1.3], [19, 3.2, 0.8]].forEach(([x, z, s]) => {
    const p = new THREE.Mesh(new THREE.CircleGeometry(0.5, 14), M(0x4a4034, { roughness: 0.2, metalness: 0.1, transparent: true, opacity: 0.4, depthWrite: false }));   // damp patch on the ground
    p.rotation.x = -Math.PI / 2; p.scale.set(s * 1.4, s, 1); p.position.set(x, 0.012, z); root.add(p);
  });

  // facades on both sides — uneven heights, each a different faded colour
  const colours = ['#b9a27f', '#8fa3a0', '#c29a8e', '#a9a17a', '#9aa0b4', '#b48c6a', '#a6b08e'];
  const glow = 0x2a1c12; // fake dusk bounce light so we don't leak real lights into the factory
  function building(xa, xb, side, h, i) {
    const depth = 4, w = xb - xa;
    const t = T.facade(colours[i % colours.length], [w / 4, h / 4]);
    const mat = new THREE.MeshStandardMaterial({ map: t, emissive: glow, emissiveMap: t, roughness: 0.95 });
    const zFace = side < 0 ? z0 : z1;
    const b = box(w, h, depth, mat, (xa + xb) / 2, h / 2, zFace + side * depth / 2, root);
    const face = zFace;            // the face toward the lane
    const out = -side;             // direction from face into the lane
    // windows: dark openings with grilles or shutters
    for (let y = 2.4; y < h - 0.8; y += 2.6) {
      for (let x = xa + 0.7; x < xb - 0.6; x += 1.6 + Math.random() * 0.5) {
        if (Math.random() < 0.25) continue;
        const win = box(0.75, 1.0, 0.05, M(0x0d0b09), x, y, face + out * 0.02, root);
        if (Math.random() < 0.35) { win.material = M(0xffc070, { emissive: 0xff9a40, emissiveIntensity: 0.6 }); }
        for (let k = 0; k < 4; k++) box(0.015, 1.0, 0.02, M(0x1a1a1a, { metalness: 0.6 }), x - 0.3 + k * 0.2, y, face + out * 0.06, root);
        if (Math.random() < 0.3) box(0.9, 0.12, 0.6, M(0x5a5a52), x, y - 0.6, face + out * 0.3, root); // ledge / balcony slab
        if (Math.random() < 0.2) box(0.55, 0.4, 0.45, M(0xb8b4a8, { roughness: 0.6 }), x + 0.6, y - 0.2, face + out * 0.25, root); // AC unit
      }
    }
    // ground-floor: shutter or doorway
    if (Math.random() < 0.6) box(Math.min(2, w - 0.6), 2.0, 0.05, TM(T.tin([2, 1]), { metalness: 0.4 }), (xa + xb) / 2, 1.0, face + out * 0.03, root);
    colliders.push({ minX: xa, maxX: xb, minZ: side < 0 ? z0 - depth : z1, maxZ: side < 0 ? z0 : z1 + depth });
    return b;
  }
  let x = x0 + 0.3, i = 0;
  while (x < ALLEY.bx1 - 0.5) { const w = 2.5 + Math.random() * 2.5; building(x, Math.min(ALLEY.bx1, x + w), -1, 6 + Math.random() * 5, i++); x += w; }
  x = x0 + 0.3; i = 3;
  while (x < ALLEY.bx1 - 0.5) { const w = 2.5 + Math.random() * 2.5; building(x, Math.min(ALLEY.bx1, x + w), 1, 6 + Math.random() * 5, i++); x += w; }

  // tarp & cloth awnings at the first-floor line
  [[9.5, -1, 0x2c5a9a], [12.8, 1, 0x8a3a2a], [16.2, -1, 0x2c5a9a], [20.5, 1, 0xa8862a]].forEach(([ax, side, col]) => {
    const aw = new THREE.Mesh(new THREE.PlaneGeometry(2.2, 1.1), M(col, { side: THREE.DoubleSide, roughness: 1, emissive: col, emissiveIntensity: 0.35 }));
    aw.position.set(ax, 2.8, (side < 0 ? z0 : z1) - side * 0.55); aw.rotation.x = -Math.PI / 2 + side * 0.45; root.add(aw);
  });
  // tangled overhead wires crossing the lane
  const wm = M(0x0e0e0e);
  for (let k = 0; k < 26; k++) {
    const xa = x0 + Math.random() * len, xb = xa + (Math.random() - 0.5) * 4, y = 3.6 + Math.random() * 3.5;
    root.add(wire(new THREE.Vector3(xa, y, z0), new THREE.Vector3(xb, y + (Math.random() - 0.5), z1), 0.2 + Math.random() * 0.6, wm, 0.012));
  }
  for (let k = 0; k < 6; k++) { // a few running along the lane
    const z = z0 + 0.2 + Math.random() * (z1 - z0 - 0.4), y = 4 + Math.random() * 2;
    root.add(wire(new THREE.Vector3(x0, y, z), new THREE.Vector3(x0 + 6 + Math.random() * 8, y, z), 0.5, wm, 0.01));
  }
  // laundry
  for (let k = 0; k < 2; k++) {
    const lx = 10 + k * 4.5, y = 3.3 + k * 0.4;
    root.add(wire(new THREE.Vector3(lx, y, z0), new THREE.Vector3(lx + 0.5, y, z1), 0.25, wm, 0.008));
    for (let c = 0; c < 4; c++) {
      const h = 0.5 + Math.random() * 0.4;
      const cl = new THREE.Mesh(new THREE.PlaneGeometry(0.45, h), fabricMat(k * 4 + c, { side: THREE.DoubleSide }));
      cl.geometry.translate(0, -h / 2, 0); cl.position.set(lx + 0.1 + c * 0.12, y - 0.2, z0 + 0.5 + c * 0.6); cl.rotation.y = Math.PI / 2; root.add(cl);
    }
  }

  // bicycle leaning on the wall (from the sketch)
  const bike = new THREE.Group(); bike.position.set(11.6, 0, z1 - 0.25); bike.rotation.z = 0.12; root.add(bike);
  const steel = M(0x2a2a2a, { metalness: 0.6, roughness: 0.5 });
  [-0.5, 0.5].forEach(bx => { const w = new THREE.Mesh(new THREE.TorusGeometry(0.33, 0.02, 6, 20), steel); w.position.set(bx, 0.35, 0); bike.add(w); });
  const bar = (a, b) => { const v = b.clone().sub(a); const m = cyl(0.015, 0.015, v.length(), steel, 5, bike); m.position.copy(a).add(b).multiplyScalar(0.5); m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), v.normalize()); };
  const V = (x, y) => new THREE.Vector3(x, y, 0);
  bar(V(-0.5, 0.35), V(0, 0.35)); bar(V(0, 0.35), V(0.35, 0.8)); bar(V(-0.5, 0.35), V(-0.15, 0.8)); bar(V(-0.15, 0.8), V(0.35, 0.8)); bar(V(0, 0.35), V(-0.15, 0.8)); bar(V(0.5, 0.35), V(0.38, 0.95));
  box(0.04, 0.02, 0.45, steel, 0.4, 0.97, 0, bike);
  colliders.push({ minX: 10.9, maxX: 12.3, minZ: z1 - 0.5, maxZ: z1 });
  // clutter
  const sack = makeSack(M(0xb0a080, { flatShading: true }), 0.8); sack.position.set(9.0, 0, z0 + 0.35); root.add(sack);
  const bucket = cyl(0.18, 0.14, 0.32, M(0x2a6a9a, { roughness: 0.5 }), 12, root); bucket.position.set(13.4, 0.16, z0 + 0.3);
  box(0.5, 0.35, 0.4, TM(T.cardboard()), 14.2, 0.18, z0 + 0.35, root);
  colliders.push({ minX: 8.6, maxX: 9.5, minZ: z0, maxZ: z0 + 0.75 });

  // sky strip and the warm end of the lane
  const sky = new THREE.Mesh(new THREE.PlaneGeometry(len + 4, 8), new THREE.MeshBasicMaterial({ map: T.duskSky(), fog: true, toneMapped: false, side: THREE.DoubleSide }));
  sky.rotation.x = Math.PI / 2; sky.position.set(x0 + len / 2, 13, zc); root.add(sky);
  // one bare bulb outside a doorway — lights kept short-range so they don't leak into the factory
  const bulbMesh = new THREE.Mesh(new THREE.SphereGeometry(0.05, 8, 6), new THREE.MeshBasicMaterial({ color: 0xffd08a, toneMapped: false }));
  bulbMesh.position.set(12.4, 2.9, z0 + 0.3); root.add(bulbMesh);
  const lamp = new THREE.PointLight(0xffb066, 6, 5, 1.6); lamp.position.set(12.4, 2.8, z0 + 0.5); root.add(lamp);
  const dusk = new THREE.PointLight(0xffc89a, 10, 7, 1.2); dusk.position.set(15.5, 5, zc); root.add(dusk);

  root.traverse(o => { if (o.isMesh) { o.castShadow = false; o.receiveShadow = true; } });
  return { root, colliders, update() {} };
}


// =================================================================================
// MARKET + STORY
// =================================================================================
// a city block made of several narrow buildings with painted windows.
// `face` ('+x' | '-x' | '+z' | '-z') is the side that looks onto a street; with `detail` that side
// gets real depth: floor ledges, balconies, AC units, a shop shutter and signboard, an awning.
const roofMat = TM(T.slab([2, 2]));
// shared materials (one texture each, reused by every building)
let _shared = null;
function shared() {
  if (_shared) return _shared;
  _shared = {
    shutter: TM(T.tin([2, 1]), { metalness: 0.4 }),
    signs: SHOPS.map(([txt, bg, fg]) => TM(T.signboard(txt, bg, fg))),
    awnings: [0x2c5a9a, 0x8a3a2a, 0xa8862a].map(c => M(c, { roughness: 1, emissive: c, emissiveIntensity: 0.3 })),
    facades: {},
  };
  return _shared;
}
function facadeMat(colour, night, glow) {
  const key = colour + (night ? 'n' : 'd') + glow;
  const sh = shared();
  if (!sh.facades[key]) { const t = T.facadeWin(colour, [1, 1], night); sh.facades[key] = { t, mats: new Map() }; }
  return sh.facades[key];
}
const SHOPS = [['KIRANA STORE', '#e8c84a', '#6a1a10'], ['MOBILE REPAIR', '#2a6aaa', '#ffffff'], ['MEDICAL', '#2a8a4a', '#ffffff'], ['SWEETS', '#c8402e', '#fff2c8'], ['PAN SHOP', '#f2f2ea', '#2a5a3a'], ['HARDWARE', '#4a4a52', '#f2d84a']];
export function cityBlock(root, x0, x1, z0, z1, { colours, hMin = 6, hMax = 11, night = false, glow = 0x2a1c12, list = null, face = null, detail = false }) {
  const along = (x1 - x0) >= (z1 - z0);
  const len = along ? x1 - x0 : z1 - z0;
  let a = 0, i = Math.floor(Math.random() * 10);
  const ledgeMat = M(0x8a8070), railMat = M(0x2a2a28, { metalness: 0.5, roughness: 0.6 }), acMat = M(0xc8c4b8, { roughness: 0.5 });
  while (a < len - 0.01) {
    const w = Math.min(len - a, 2.6 + Math.random() * 2.6);
    const h = hMin + Math.random() * (hMax - hMin);
    const bx0 = along ? x0 + a : x0, bx1 = along ? x0 + a + w : x1;
    const bz0 = along ? z0 : z0 + a, bz1 = along ? z1 : z0 + a + w;
    // one painted texture per colour; each building only clones it to set its own tiling
    const base = facadeMat(colours[i++ % colours.length], night, glow);
    const rx = Math.max(1, Math.round(Math.max(bx1 - bx0, bz1 - bz0) / 4)), ry = Math.max(1, Math.round(h / 4));
    const mk = rx + 'x' + ry;
    if (!base.mats.has(mk)) { const t = base.t.clone(); t.needsUpdate = true; t.repeat.set(rx, ry); base.mats.set(mk, new THREE.MeshStandardMaterial({ map: t, emissive: glow, emissiveMap: t, roughness: 0.95 })); }
    const mat = base.mats.get(mk);
    const geo = new THREE.BoxGeometry(bx1 - bx0, h, bz1 - bz0); geo.translate(0, h / 2, 0);  // pivot at the base (for warping)
    const m = new THREE.Mesh(geo, [mat, mat, roofMat, roofMat, mat, mat]);                // +y face = roof
    m.position.set((bx0 + bx1) / 2, 0, (bz0 + bz1) / 2);
    m.userData.h = h; root.add(m); if (list) list.push(m);
    // roof: parapet and sometimes a water tank or a shed
    const pw = bx1 - bx0, pd = bz1 - bz0;
    box(pw, 0.5, 0.15, ledgeMat, 0, h + 0.25, pd / 2 - 0.07, m); box(pw, 0.5, 0.15, ledgeMat, 0, h + 0.25, -pd / 2 + 0.07, m);
    box(0.15, 0.5, pd, ledgeMat, pw / 2 - 0.07, h + 0.25, 0, m); box(0.15, 0.5, pd, ledgeMat, -pw / 2 + 0.07, h + 0.25, 0, m);
    if (Math.random() < 0.5) { const tk = cyl(0.5, 0.5, 0.9, M(0x2a2a2a), 10, m); tk.position.set((Math.random() - 0.5) * pw * 0.5, h + 0.45, (Math.random() - 0.5) * pd * 0.5); }
    if (detail && face) {
      // a frame on the street side: n = outward normal, u = along the facade
      const n = { '+x': [1, 0], '-x': [-1, 0], '+z': [0, 1], '-z': [0, -1] }[face];
      const fx = n[0] ? (n[0] > 0 ? pw / 2 : -pw / 2) : 0, fz = n[1] ? (n[1] > 0 ? pd / 2 : -pd / 2) : 0;
      const fw = n[0] ? pd : pw;              // facade width
      const P = (u, y, out) => [fx + n[0] * out + (n[0] ? 0 : u), y, fz + n[1] * out + (n[0] ? u : 0)];
      const B = (w2, h2, d2, mat2, u, y, out) => { const [px, py, pz] = P(u, y, out); return box(n[0] ? d2 : w2, h2, n[0] ? w2 : d2, mat2, px, py, pz, m); };
      for (let y = 3.1; y < h - 1; y += 2.6) B(fw, 0.12, 0.25, ledgeMat, 0, y, 0.12);                       // floor ledges
      for (let y = 3.6; y < h - 1.5; y += 2.6) {
        if (Math.random() < 0.55) {                                                                       // balcony
          const u = (Math.random() - 0.5) * (fw - 1.6);
          B(1.4, 0.1, 0.7, ledgeMat, u, y - 0.4, 0.35);
          for (let k = 0; k <= 6; k++) B(0.025, 0.8, 0.025, railMat, u - 0.7 + k * 0.233, y, 0.68);
          B(1.4, 0.04, 0.04, railMat, u, y + 0.4, 0.68);
          if (Math.random() < 0.5) { const [px, py, pz] = P(u, y + 0.2, 0.55); const cl = new THREE.Mesh(new THREE.PlaneGeometry(0.4, 0.6), fabricMat(Math.floor(Math.random() * 6), { side: THREE.DoubleSide })); cl.position.set(px, py, pz); cl.rotation.y = n[0] ? Math.PI / 2 : 0; m.add(cl); }
        }
        if (Math.random() < 0.45) B(0.6, 0.42, 0.45, acMat, (Math.random() - 0.5) * (fw - 1), y + 0.6, 0.25);   // AC unit
      }
      // ground floor: rolling shutter, a signboard, sometimes a cloth awning
      const shop = SHOPS[Math.floor(Math.random() * SHOPS.length)];
      B(Math.min(2.2, fw - 0.5), 2.2, 0.06, shared().shutter, 0, 1.1, 0.04);
      const sign = B(Math.min(2.4, fw - 0.3), 0.55, 0.08, shared().signs[SHOPS.indexOf(shop)], 0, 2.6, 0.08);
      if (Math.random() < 0.5) { const aw = B(Math.min(2.6, fw - 0.2), 0.04, 1.1, shared().awnings[i % 3], 0, 2.25, 0.55); if (n[0]) aw.rotation.z = -0.25 * n[0]; else aw.rotation.x = 0.25 * n[1]; }
    }
    a += w;
  }
  return { minX: x0, maxX: x1, minZ: z0, maxZ: z1 };
}

function stall(root, x, z, rotY, { w = 2.4, d = 1.1, tarp = 0x2c5a9a, tarpMap = null } = {}) {
  const g = new THREE.Group(); g.position.set(x, 0, z); g.rotation.y = rotY; root.add(g);
  const wood = TM(T.plywood());
  box(w, 0.9, d, wood, 0, 0.45, 0, g);                                   // counter
  box(w + 0.1, 0.05, d + 0.1, TM(T.plywood(), { color: 0xb09070 }), 0, 0.92, 0, g);
  const poleMat = M(0x3a2a1a);
  [[-w / 2, -d / 2 - 0.8], [w / 2, -d / 2 - 0.8], [-w / 2, d / 2], [w / 2, d / 2]].forEach(([px, pz], k) => box(0.06, k < 2 ? 2.7 : 2.4, 0.06, poleMat, px, (k < 2 ? 2.7 : 2.4) / 2, pz, g));
  const roof = new THREE.Mesh(new THREE.PlaneGeometry(w + 0.6, d + 1.5), tarpMap ? TM(tarpMap, { side: THREE.DoubleSide }) : M(tarp, { side: THREE.DoubleSide, roughness: 1 }));
  roof.rotation.x = -Math.PI / 2 + 0.2; roof.position.set(0, 2.55, -0.35); g.add(roof);
  return g;
}

export function buildStreet(ctx) {
  const { scene, audio, interactor, player, ui, settings, debug, journey, guide, refreshColliders, police, thought } = ctx;
  const lane = buildAlley(scene);
  const root = new THREE.Group(); root.name = 'market'; scene.add(root);
  const colliders = [...lane.colliders];
  const { x0, x1, z0, z1 } = MARKET;
  const mx = (x0 + x1) / 2, mz = (z0 + z1) / 2;
  const bagCtl = journey.bagCtl;

  // ---------- ground & buildings ----------
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(x1 - x0, z1 - z0), TM(T.dirtFloor([6, 5])));
  ground.rotation.x = -Math.PI / 2; ground.position.set(mx, 0.002, mz); root.add(ground);
  const cols = ['#c9b48a', '#b8a0a0', '#a8b8a8', '#c8a878', '#b0a8c0', '#c0906a', '#d0c098'];
  colliders.push(
    cityBlock(root, ALLEY.bx1, x0, -8, ALLEY.z0, { colours: cols, face: '+x', detail: true }),   // west, south of lane
    cityBlock(root, ALLEY.bx1, x0, ALLEY.z1, 16, { colours: cols, face: '+x', detail: true }),   // west, north of lane
    cityBlock(root, x0, x1, z1, 16, { colours: cols, face: '-z', detail: true }),                 // north side
    cityBlock(root, x0, x1, -8, z0, { colours: cols, face: '+z', detail: true }),                 // south side
  );
  // the east edge belongs to Space 3's blocks (spaces/nightmare.js)

  // overhead wires and bunting across the square
  const wm = M(0x101010);
  for (let k = 0; k < 18; k++) {
    const xa = x0 + Math.random() * (x1 - x0);
    root.add(wire(new THREE.Vector3(xa, 5 + Math.random() * 2, z0), new THREE.Vector3(xa + (Math.random() - 0.5) * 8, 5 + Math.random() * 2, z1), 0.6 + Math.random(), wm, 0.014));
  }

  // ---------- stalls & props ----------
  // FOOD STALL (south side, facing the square)
  const food = stall(root, 31, -2.3, 0, { tarpMap: T.stripes('#c8402e', '#e8d8b0') });
  colliders.push({ minX: 29.7, maxX: 32.3, minZ: -3.6, maxZ: -1.7 });
  const pot = cyl(0.28, 0.22, 0.3, M(0x6a6a68, { metalness: 0.7, roughness: 0.4 }), 14, food); pot.position.set(0.6, 1.1, -0.1);
  const rotis = new THREE.Group(); rotis.position.set(-0.5, 0.95, 0.1); food.add(rotis);
  for (let k = 0; k < 9; k++) { const r = cyl(0.13, 0.13, 0.012, M(0xd8a868, { roughness: 0.9 }), 14, rotis); r.position.set((Math.random() - 0.5) * 0.02, k * 0.014, (Math.random() - 0.5) * 0.02); }
  for (let k = 0; k < 6; k++) { const sm = new THREE.Mesh(new THREE.TetrahedronGeometry(0.06), M(0xc8902a, { flatShading: true })); sm.position.set(-0.05 + (k % 3) * 0.12, 0.98, 0.25 + Math.floor(k / 3) * 0.1); food.add(sm); }
  const board = new THREE.Mesh(new THREE.PlaneGeometry(0.9, 0.45), TM(T.priceBoard())); board.position.set(0, 2.2, 0.62); board.rotation.x = -0.15; food.add(board);
  const parcel = new THREE.Group(); parcel.position.set(0.05, 0.98, 0.35); food.add(parcel);
  const parcelMat = new THREE.MeshStandardMaterial({ color: 0xd8b070, roughness: 0.8, emissive: 0xff9a30, emissiveIntensity: 0 });
  box(0.26, 0.12, 0.2, parcelMat, 0, 0.04, 0, parcel);
  const steam = []; for (let k = 0; k < 6; k++) { const sp = new THREE.Mesh(new THREE.SphereGeometry(0.08, 6, 5), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.15, depthWrite: false })); sp.position.set(0.6, 1.3 + k * 0.15, -0.1); food.add(sp); steam.push(sp); }
  const vendor = makeFigure({ standing: true, scale: 1.3, cloth: 0xe0d8c8, cloth2: 0x5a4a3a, skin: 0x6b4630 });
  vendor.position.set(31, 0, -3.3); root.add(vendor);
  const counterSpot = new THREE.Vector3(31, 1.0, -1.55);

  // TAILOR (north side)
  const tailor = stall(root, 28, 10.6, Math.PI, { tarp: 0x8a6a2a });
  colliders.push({ minX: 26.7, maxX: 29.3, minZ: 9.9, maxZ: 12 });
  for (let k = 0; k < 6; k++) { const cl = new THREE.Mesh(new THREE.PlaneGeometry(0.35, 1.0), fabricMat(k, { side: THREE.DoubleSide })); cl.position.set(-1.0 + k * 0.4, 1.8, -0.75); tailor.add(cl); }
  const tm = new THREE.Group(); tm.position.set(0.5, 0.95, 0); tailor.add(tm);
  box(0.5, 0.05, 0.25, M(0x1a1a18, { metalness: 0.3 }), 0, 0.02, 0, tm); box(0.4, 0.08, 0.1, M(0x1a1a18, { metalness: 0.3 }), 0, 0.25, 0, tm); box(0.08, 0.25, 0.12, M(0x1a1a18), 0.18, 0.13, 0, tm);
  const tailorMan = makeFigure({ standing: true, scale: 1.3, cloth: 0x8a9aa8, cloth2: 0x3a3a40, skin: 0x7a5236 });
  tailorMan.position.set(28, 0, 11.5); tailorMan.rotation.y = Math.PI; root.add(tailorMan);

  // CHAI stall, fruit cart, vegetable mat, rickshaw (life in the square)
  stall(root, 25.5, -2.6, 0, { w: 1.6, tarp: 0x2c5a9a });
  colliders.push({ minX: 24.6, maxX: 26.4, minZ: -3.7, maxZ: -2 });
  const cart = new THREE.Group(); cart.position.set(35.5, 0, 3.2); cart.rotation.y = 0.4; root.add(cart);
  box(1.8, 0.1, 0.9, TM(T.plywood()), 0, 0.8, 0, cart);
  [-0.6, 0.6].forEach(cx => { const wh = new THREE.Mesh(new THREE.TorusGeometry(0.35, 0.04, 6, 16), M(0x2a2a2a)); wh.position.set(cx, 0.35, 0.48); cart.add(wh); });
  for (let k = 0; k < 24; k++) { const f = new THREE.Mesh(new THREE.SphereGeometry(0.08, 7, 5), M(k % 3 ? 0xe8a020 : 0x6a9a2a)); f.position.set(-0.7 + (k % 8) * 0.2, 0.92 + Math.floor(k / 8) * 0.05, -0.25 + Math.floor(k / 8) * 0.2); cart.add(f); }
  colliders.push({ minX: 34.4, maxX: 36.6, minZ: 2.4, maxZ: 4.0 });
  const mat = new THREE.Mesh(new THREE.PlaneGeometry(2, 1.4), fabricMat(2)); mat.rotation.x = -Math.PI / 2; mat.position.set(29, 0.012, 5.6); root.add(mat);
  for (let k = 0; k < 14; k++) { const v = new THREE.Mesh(new THREE.SphereGeometry(0.07, 6, 5), M([0xb0302a, 0x4a8a2a, 0xd8c8a0][k % 3])); v.position.set(28.3 + (k % 7) * 0.22, 0.07, 5.3 + Math.floor(k / 7) * 0.5); root.add(v); }
  const seller = makeFigure({ floor: true, scale: 1.2, cloth: 0x7a2f3a, cloth2: 0x9a4a3a, sari: true, bun: true }); seller.position.set(29, 0, 6.6); seller.rotation.y = 0; root.add(seller);
  // scrap heap by the wall: discarded cloth from the factories
  const heap = new THREE.Group(); heap.position.set(23.2, 0, -3.3); root.add(heap);
  for (let k = 0; k < 9; k++) { const sc = box(0.3 + Math.random() * 0.3, 0.05, 0.25, fabricMat(k, { flatShading: true }), (Math.random() - 0.5) * 0.9, 0.05 + k * 0.035, (Math.random() - 0.5) * 0.5, heap); sc.rotation.set(Math.random() * 0.4, Math.random() * 3, Math.random() * 0.4); }
  const sackH = makeSack(M(0x9a9070, { flatShading: true }), 0.7); sackH.position.set(0.6, 0, 0.2); heap.add(sackH);
  colliders.push({ minX: 22.4, maxX: 24.0, minZ: -3.9, maxZ: -2.8 });
  // the begging spot: a flattened carton by the north wall, two children already there
  const begX = 36.6, begZ = 11.2;
  const carton = box(0.8, 0.02, 0.6, TM(T.cardboard()), begX, 0.012, begZ, root);
  const kids = [[begX - 1.3, 0.2], [begX + 1.2, -0.3]].map(([kx, ry], i) => {
    const k = makeFigure({ floor: true, scale: 0.85, cloth: i ? 0x6a5a4a : 0x5a4a5a, skin: 0x5a3a26 });
    k.position.set(kx, 0, begZ + 0.1); k.rotation.y = Math.PI + ry; root.add(k);
    k.userData.arms.forEach(a => { a.sh.rotation.x = 1.2; a.el.rotation.x = 0.4; });
    return k;
  });

  // sun from the west, low and orange; one bulb under the chai tarp
  const bulbL = new THREE.PointLight(0xffb066, 3, 5, 1.6); bulbL.position.set(25.5, 2.3, -2.4); root.add(bulbL);

  // dust in the sunlight
  const DUST = 500, dg = new THREE.BufferGeometry(), dp = new Float32Array(DUST * 3);
  for (let i = 0; i < DUST; i++) { dp[i * 3] = lerp(x0, x1, Math.random()); dp[i * 3 + 1] = Math.random() * 4; dp[i * 3 + 2] = lerp(z0, z1, Math.random()); }
  dg.setAttribute('position', new THREE.BufferAttribute(dp, 3));
  const dust = new THREE.Points(dg, new THREE.PointsMaterial({ size: 0.05, map: T.dot(), transparent: true, opacity: 0.4, color: 0xffd9a0, blending: THREE.AdditiveBlending, depthWrite: false }));
  root.add(dust);

  // ---------- crowd ----------
  const loops = [
    [[23, 4], [30, 4], [37, 6], [38.5, 9], [30, 8.8], [24, 7]],
    [[24, 1], [33, 0.6], [38, 1.5], [38, 5], [33, 6.4], [25, 5.8]],
    [[38, 9.6], [33, 9.5], [27, 8.4], [23, 8.6], [27, 9.4], [33, 10]],
  ];
  const walkers = [];
  for (let i = 0; i < 16; i++) {
    const w = makeWalker(i);
    const path = loops[i % loops.length].map(([px, pz]) => new THREE.Vector3(px + (Math.random() - 0.5) * 0.8, 0, pz + (Math.random() - 0.5) * 0.8));
    if (i % 2) path.reverse();
    const seg = i % path.length;
    w.position.copy(path[seg]); root.add(w);
    w.userData.path = path; w.userData.seg = (seg + 1) % path.length; w.userData.v = 1.0 + Math.random() * 0.4; w.userData.walk = 1;
    walkers.push(w);
  }
  // two people standing and talking
  [[33.5, 2.0, 0.6], [34.2, 1.4, -2.5]].forEach(([px, pz, ry], i) => { const f = makeWalker(i + 5); f.position.set(px, 0, pz); f.rotation.y = ry; root.add(f); walkers.push(f); f.userData.idle = true; });

  root.traverse(o => { if (o.isMesh) { o.castShadow = false; o.receiveShadow = false; } });

  // ---------- interactions ----------
  const stallDef = interactor.add(food, { label: 'Buy food' });
  stallDef.enabled = () => S.phase === 'toStall';
  stallDef.onPress = () => { if (S.phase === 'toStall') { setPhase('counting'); interactor.active = null; } };
  const heapDef = interactor.add(heap, { label: 'Pick up scraps' });
  heapDef.enabled = () => S.phase === 'toScraps';
  heapDef.onPress = () => {
    if (S.phase !== 'toScraps') return;
    bagCtl.setContents({ scraps: true }); bagCtl.forceOpen = 1; setTimeout(() => { bagCtl.forceOpen = 0; }, 1200);
    audio.oneShot('fabric', { volume: 0.7 });
    setPhase('toTailor'); interactor.active = tailorDef; thought('The tailor might pay something for these.', 4);
  };
  const tailorDef = interactor.add(tailorMan, { label: 'Sell the scraps' });
  tailorDef.enabled = () => S.phase === 'toTailor';
  tailorDef.onPress = () => { if (S.phase === 'toTailor') { setPhase('refused'); interactor.active = null; } };
  const begDef = interactor.add(carton, { label: 'Sit down' });
  begDef.enabled = () => S.phase === 'toBeg' || S.phase === 'begging';
  begDef.onPress = () => {
    if (S.phase === 'toBeg') { setPhase('sitting'); interactor.active = null; }
    else if (S.phase === 'begging') S.vrBeg = true;   // VR: hold the trigger on the carton to beg
  };
  begDef.onRelease = () => { S.vrBeg = false; };
  const parcelDef = interactor.add(parcel, { label: 'Take it' });
  parcelDef.meshes.forEach(m => { m.material = parcelMat; m.userData.baseEmissive = new THREE.Color(0xff9a30); });
  parcelDef.enabled = () => S.phase === 'toSteal';
  parcelDef.onPress = () => { if (S.phase === 'toSteal') { setPhase('stealing'); interactor.active = null; } };

  // cupped hands shown while begging (desktop)
  const hands = new THREE.Group(); hands.visible = false;
  const skin = M(0x6b4630, { flatShading: true });
  [-1, 1].forEach(sd => { const hd = new THREE.Mesh(new THREE.SphereGeometry(0.05, 7, 5), skin); hd.scale.set(1.2, 0.5, 1.5); hd.position.set(sd * 0.045, 0, 0); hd.rotation.z = -sd * 0.4; hands.add(hd); });
  player.camera.add(hands); hands.position.set(0, -0.2, -0.38);

  // coins on the counter during the counting
  const counted = [0, 1, 2].map(i => { const c = cyl(0.025, 0.025, 0.006, M(0xb8913a, { metalness: 0.8, roughness: 0.35 }), 12, root); c.visible = false; return c; });

  // police patrolling near the tailor (they will chase you)
  const [p1, p2] = police;
  const pursuit = new Pursuit(player, police);

  // ---------- sound ----------
  let sounds = [], snd = {};
  const marketSnd = new THREE.Object3D(); marketSnd.position.set(mx, 2, mz); root.add(marketSnd);
  const stallSnd = new THREE.Object3D(); stallSnd.position.set(31, 1.4, -2.3); root.add(stallSnd);
  function startSounds() {
    audio.stopAll(sounds); sounds = [];
    const add = (k, a) => { snd[k] = a; sounds.push(a); return a; };
    add('market', audio.loop('market', { object: marketSnd, volume: 0.9, ref: 6 }));
    add('street', audio.loop('street', { object: marketSnd, volume: 0.35, ref: 6 }));
    add('fry', audio.loop('fire', { object: stallSnd, volume: 0.25, ref: 1 }));
  }

  // ---------- story ----------
  const S = { phase: 'idle', t: 0, idle: 0, beg: 0, vrBeg: false, ended: false };
  const headPos = new THREE.Vector3(), tmp = new THREE.Vector3();
  function hint(text, secs = 5) { if (!player.inVR && settings.hints) ui.hint(text, secs); }
  function setPhase(p) { S.phase = p; S.t = 0; S.idle = 0; if (debug) debug.textContent = 'phase: ' + p; }

  function reset() {
    Object.assign(S, { phase: 'idle', t: 0, idle: 0, beg: 0, vrBeg: false, ended: false });
    vendor.rotation.y = 0; vendor.userData.look = 0; tailorMan.userData.reach = false;
    parcel.visible = true; parcelMat.emissiveIntensity = 0;
    counted.forEach(c => { c.visible = false; });
    hands.visible = false;
    police.forEach((p, i) => { p.visible = true; p.position.set(25.5 + i * 0.9, 0, 9.2 + i * 0.4); p.rotation.y = -0.6 - i * 2.4; p.userData.walk = 0; });
    pursuit.stop();
  }
  function start() {
    reset(); startSounds();
    player.canMove = true; player.canRun = true;
    setPhase('toStall'); interactor.active = stallDef;
    thought('I haven\'t eaten since morning.', 4);
    setTimeout(() => { if (S.phase === 'toStall') hint('Follow the red thread to the food stall', 5); }, 3500);
  }
  function stop() { audio.stopAll(sounds); sounds = []; snd = {}; }

  const goals = {
    toStall: counterSpot, toScraps: new THREE.Vector3(23.3, 0.5, -2.6), toTailor: new THREE.Vector3(28, 1.2, 9.6),
    toBeg: new THREE.Vector3(begX, 0.3, begZ), toSteal: counterSpot, flee: new THREE.Vector3(x1 + 1.5, 1.0, (MARKET.exitZ0 + MARKET.exitZ1) / 2),
  };

  function update(dt, t, active = true) {
    // the square is alive even when you're not looking
    walkers.forEach(w => {
      const u = w.userData; if (u.idle) { u.walk = 0; animateFigure(w, t, dt); return; }
      const tgt = u.path[u.seg];
      const dx = tgt.x - w.position.x, dz = tgt.z - w.position.z, d = Math.hypot(dx, dz);
      // people slow down and step around you a little
      player.headWorld(tmp);
      const near = Math.hypot(tmp.x - w.position.x, tmp.z - w.position.z);
      const v = u.v * (near < 1.2 ? 0.5 : 1);
      if (d < 0.2) u.seg = (u.seg + 1) % u.path.length;
      else { w.position.x += dx / d * v * dt; w.position.z += dz / d * v * dt; w.rotation.y = Math.atan2(-dx, -dz); }
      if (near < 0.7) { w.position.x -= (tmp.x - w.position.x) / near * dt * 0.8; w.position.z -= (tmp.z - w.position.z) / near * dt * 0.8; }
      u.stride += dt * v * 3.4; animateFigure(w, t, dt);
      // footsteps of people passing close by
      const stepN = Math.floor(u.stride / Math.PI);
      if (stepN !== u.lastStep) { u.lastStep = stepN; if (near < 3.2 && audio.ready && S.phase !== 'idle') audio.oneShot('step', { object: w, volume: 0.35, rate: 0.9 + Math.random() * 0.25, ref: 1.2 }); }
    });
    steam.forEach((sp, k) => { sp.position.y = 1.3 + ((t * 0.3 + k / 6) % 1) * 0.9; sp.material.opacity = 0.15 * (1 - ((t * 0.3 + k / 6) % 1)); });
    [vendor, tailorMan, seller, ...kids].forEach(f => animateFigure(f, t, dt));
    if (S.phase === 'idle' || S.phase === 'done') { police.forEach(p => animateFigure(p, t, dt)); }
    if (dust.visible) { const p = dg.attributes.position; for (let i = 0; i < DUST; i++) { let y = p.getY(i) + dt * 0.05; if (y > 4) y = 0; p.setY(i, y); } p.needsUpdate = true; }
    if (S.phase === 'idle' || S.phase === 'done' || !active) return;

    S.t += dt; S.idle += dt;
    interactor.urgency = S.idle > 20 ? 2.4 : 1;
    if (S.idle > 20 && S.idle - dt <= 20) remind();
    player.headWorld(headPos);
    if (snd.market) snd.market.setVolume(0.9);

    switch (S.phase) {
      case 'counting': {
        // coins come out of the bag onto the counter, the vendor shakes his head, pushes them back
        bagCtl.forceOpen = S.t < 4.2 ? 1 : 0;
        counted.forEach((c, i) => {
          const tIn = 0.4 + i * 0.4;
          if (S.t > tIn && S.t < 3.4) {
            if (!c.visible) { c.visible = true; audio.oneShot('coin', { object: stallSnd, volume: 0.8 }); bagCtl.setContents({ coins: 2 - i }); }
            const k = Math.min(1, (S.t - tIn) / 0.4);
            bagCtl.worldPos(tmp);
            c.position.lerpVectors(tmp, tmp.clone().set(30.8 + i * 0.12, 0.99, -1.75), ease(k)); c.position.y += Math.sin(k * Math.PI) * 0.2;
          }
        });
        if (S.t > 1.8 && S.t < 3.2) vendor.userData.look = Math.sin((S.t - 1.8) * 14) * 0.45; else vendor.userData.look = 0;
        if (S.t > 1.6 && S.t - dt <= 1.6) ui.subtitle('Vendor: "Ten rupees. This is six."', 3);
        if (S.t > 3.0 && S.t - dt <= 3.0) thought('Six rupees. A plate is ten.', 3.5);
        if (S.t > 3.4 && S.t - dt <= 3.4) { counted.forEach(c => { c.visible = false; }); bagCtl.setContents({ coins: 3 }); audio.oneShot('coins', { volume: 0.5 }); }
        if (S.t > 6.5) { setPhase('toScraps'); interactor.active = heapDef; thought('Maybe I can sell something…', 4); setTimeout(() => { if (S.phase === 'toScraps') hint('Pick up the cloth scraps by the wall', 5); }, 3000); }
        break;
      }
      case 'refused':
        tailorMan.userData.reach = S.t < 2;              // waves you off
        tailorMan.userData.look = S.t < 2 ? Math.sin(S.t * 10) * 0.3 : 0;
        if (S.t > 0.4 && S.t - dt <= 0.4) ui.subtitle('Tailor: "Scraps? Everyone has scraps. Go."', 3.5);
        if (S.t > 4 && S.t - dt <= 4) thought('The other kids sit by the wall. Maybe someone will help.', 4.5);
        if (S.t > 5) { setPhase('toBeg'); interactor.active = begDef; }
        break;
      case 'sitting': {
        const k = ease(Math.min(1, S.t / 1.2));
        if (S.t < dt * 1.5) { player.canMove = false; S.from = player.dolly.position.clone(); S.fromEye = player.eye; S.fromYaw = Math.atan2(Math.sin(player.yaw), Math.cos(player.yaw)); }
        player.dolly.position.lerpVectors(S.from, tmp.set(begX, 0, begZ - 0.1), k);
        if (!player.inVR) { player.eye = lerp(S.fromEye, 0.82, k); player.yaw = lerp(S.fromYaw, 0, k); player.pitch = lerp(player.pitch, -0.05, k); }
        if (S.t > 1.3) { setPhase('begging'); hint(player.inVR ? '' : 'Hold E to hold out your hands', 8); }
        break;
      }
      case 'begging': {
        const holding = player.keys.KeyE || S.vrBeg;
        hands.visible = holding && !player.inVR;
        if (holding) { S.beg += dt; S.idle = 0; }
        // passers-by glance down and keep walking
        walkers.forEach(w => { if (Math.hypot(w.position.x - begX, w.position.z - begZ) < 2.2) w.userData.look = holding ? 0.6 : 0; else w.userData.look = 0; });
        if (S.beg > 0.5 && S.beg - dt <= 0.5) thought('Please…', 2.5);
        if (S.beg > 4.5 && S.beg - dt <= 4.5) thought('They don\'t even look down.', 3.5);
        if (S.beg > 9.5 && S.beg - dt <= 9.5) thought('It\'s like I\'m not here.', 3.5);
        if (S.beg > 13 || S.t > 45) { hands.visible = false; setPhase('standUp'); }
        break;
      }
      case 'standUp': {
        const k = ease(Math.min(1, S.t / 1.0));
        if (!player.inVR) player.eye = lerp(0.82, 1.52, k);
        if (S.t > 1.1) {
          player.canMove = true;
          vendor.rotation.y = Math.PI;                    // the vendor has turned away to serve someone
          parcelMat.emissiveIntensity = 0.5;
          setPhase('toSteal'); interactor.active = parcelDef;
          thought('The vendor turned away. Nobody is watching the food.', 4.5);
        }
        break;
      }
      case 'toSteal':
        parcelMat.emissiveIntensity = 0.4 + 0.3 * Math.sin(t * 4);
        break;
      case 'stealing':
        if (S.t < dt * 1.5) {
          parcel.visible = false; bagCtl.setContents({ food: true }); bagCtl.glow = 0.4; bagCtl.forceOpen = 1;
          audio.oneShot('fabric', { volume: 0.8 });
        }
        if (S.t > 0.6 && S.t - dt <= 0.6) {
          bagCtl.forceOpen = 0; vendor.rotation.y = 0; vendor.userData.reach = true;
          audio.oneShot('yells', { object: stallSnd, volume: 0.6 });
          audio.oneShot('whistle', { object: police[0], volume: 1, ref: 3 });
          ui.subtitle('Vendor: "Chor! Thief! Stop!"', 3);
        }
        if (S.t > 1.4) {
          pursuit.speed = 1.9; pursuit.start(); player.jogAllowed = true;
          setPhase('flee'); thought('Run.', 2.5); hint('Hold Shift to run', 4);
        }
        break;
      case 'flee': {
        const d = pursuit.update(dt);
        S.idle = 0;
        if (headPos.x > x1 + 0.4 && !S.ended) { S.ended = true; guide.clear(); setPhase('done'); onEndFn && onEndFn('nightmare'); }
        break;
      }
    }
    if (S.phase !== 'flee') police.forEach(p => animateFigure(p, t, dt));
    else police.forEach(p => animateFigure(p, t, dt));
    guide.set(goals[S.phase] || null);
    guide.urgent = S.idle > 20;
  }

  function remind() {
    const m = { toStall: 'Follow the red thread to the food stall', toScraps: 'Pick up the cloth scraps by the wall', toTailor: 'Take the scraps to the tailor',
      toBeg: 'Sit on the carton with the other children', begging: 'Hold E to hold out your hands', toSteal: 'Take the food from the counter' }[S.phase];
    if (m) hint(m, 5);
  }

  // outdoor light & air for this space
  function atmosphere(x) {
    const inMarket = Math.min(1, Math.max(0, (x - 18) / 4));
    return { fog: new THREE.Color(0x3a2a1c).lerp(new THREE.Color(0xb08a60), inMarket), density: lerp(0.045, 0.022, inMarket), sun: lerp(0.4, 2.4, inMarket), hemi: lerp(0.35, 0.9, inMarket) };
  }

  let onEndFn = null;
  return {
    root, extraRoots: [lane.root], update, start, stop, reset, atmosphere, pursuit,
    zone: { minX: 8.6, maxX: x1 + 0.4 },
    onEnd(fn) { onEndFn = fn; },
    getColliders() { return colliders; },
    setQuality(q) { dust.visible = q === 'high'; },
    get phase() { return S.phase; },
    skip() {
      const p = S.phase;
      if (p === 'toStall') { player.place(31, -0.6, 0, 1.52); stallDef.onPress(); }
      else if (p === 'counting' || p === 'refused' || p === 'sitting' || p === 'standUp' || p === 'stealing') S.t = 99;
      else if (p === 'toScraps') { player.place(23.3, -1.6, 0, 1.52); heapDef.onPress(); }
      else if (p === 'toTailor') { player.place(28, 8.6, Math.PI, 1.52); tailorDef.onPress(); }
      else if (p === 'toBeg') { player.place(begX, begZ - 1.4, Math.PI, 1.52); begDef.onPress(); }
      else if (p === 'begging') S.beg = 99;
      else if (p === 'toSteal') { player.place(31, -0.6, 0, 1.52); parcelDef.onPress(); }
      else if (p === 'flee') player.place(x1 + 1, 8.3, -Math.PI / 2, 1.52);
    },
  };
}
