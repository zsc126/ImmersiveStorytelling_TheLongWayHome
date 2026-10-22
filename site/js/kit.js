// The Long Way Home — created by Sicheng Zheng. © 2026 Sicheng Zheng. All rights reserved.
// Shared building kit — every space uses these, so people, the bag and materials look
// the same from the sweatshop to the street to the nightmare.
import * as THREE from 'three';
import * as T from './textures.js';

export const lerp = THREE.MathUtils.lerp, clamp = THREE.MathUtils.clamp;
export const ease = x => x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;

// materials are shared when they are identical (far fewer materials = faster loading and drawing).
// Use Mnew() when the material will be changed later (e.g. people who turn into monsters).
const _mcache = new Map();
export function Mnew(color, o = {}) { return new THREE.MeshStandardMaterial({ color, roughness: 0.9, metalness: 0, ...o }); }
export function M(color, o = {}) {
  const simple = Object.values(o).every(v => v === null || ['number', 'boolean', 'string'].includes(typeof v));
  if (!simple) return Mnew(color, o);
  const key = color + '|' + JSON.stringify(o);
  if (!_mcache.has(key)) _mcache.set(key, Mnew(color, o));
  return _mcache.get(key);
}
export function TM(map, o = {}) { return new THREE.MeshStandardMaterial({ color: 0xffffff, map, roughness: 0.92, ...o }); }
export function box(w, h, d, mat, x = 0, y = 0, z = 0, parent) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat); m.position.set(x, y, z);
  if (parent) parent.add(m); return m;
}
export function cyl(rt, rb, h, mat, seg = 10, parent) {
  const m = new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, seg), mat); if (parent) parent.add(m); return m;
}
// a sagging cable between two points
export function wire(a, b, sag = 0.3, mat = M(0x111111), r = 0.008) {
  const mid = a.clone().lerp(b, 0.5); mid.y -= sag;
  const curve = new THREE.QuadraticBezierCurve3(a, mid, b);
  return new THREE.Mesh(new THREE.TubeGeometry(curve, 16, r, 4, false), mat);
}
// texture with repeat set for a surface of size w×h metres (texture covers `tile` metres)
export function tiled(texFn, w, h, tile = 2) {
  const t = texFn(); t.repeat.set(w / tile, h / tile); return t;
}

// ---------- fabrics ----------
const FABRICS = [
  ['#b8402e', '#e8b85a', 0], ['#2f4a7a', '#dcd5c2', 1], ['#c9971b', '#6a2a1c', 2],
  ['#a0306a', '#e2c7a0', 0], ['#2f6a4a', '#e0d0a0', 2], ['#c86b2a', '#3a2a5a', 1],
];
export const fabricTex = FABRICS.map(f => T.fabric(...f));
export const fabricMat = (i, o) => TM(fabricTex[Math.abs(i) % fabricTex.length], o);

// ---------- people (faceless, low-poly; facing −z, seated or standing) ----------
export function makeFigure({ skin = 0x6b4630, cloth = 0x6d6a5e, cloth2, hair = 0x16110d, scale = 1.25, standing = false, sari = false, bun = false, floor = false }) {
  const g = new THREE.Group();
  const f = { flatShading: true, roughness: 0.95 };
  const mSkin = Mnew(skin, f), mCloth = Mnew(cloth, f), mCloth2 = Mnew(cloth2 ?? cloth, f), mHair = Mnew(hair, f);
  const hip = standing ? 0.9 : floor ? 0.1 : 0.5;
  const legs = [];
  if (standing) {
    [-0.08, 0.08].forEach(x => {
      const hipJ = new THREE.Group(); hipJ.position.set(x, 0.9, 0); g.add(hipJ);
      const l = cyl(0.065, 0.055, 0.9, mCloth2, 6, hipJ); l.position.y = -0.45;
      const foot = box(0.09, 0.05, 0.16, M(0x2a2018, f), 0, -0.88, -0.03, hipJ);
      legs.push(hipJ);
    });
  } else if (floor) { // cross-legged on the floor
    [-1, 1].forEach(s => { const l = box(0.4, 0.1, 0.12, mCloth2, s * 0.1, 0.06, -0.14, g); l.rotation.y = s * 0.5; });
  } else {
    [-0.085, 0.085].forEach(x => {
      box(0.13, 0.12, 0.42, mCloth2, x, hip + 0.02, -0.17, g);
      const s = cyl(0.05, 0.045, 0.48, sari ? mCloth2 : mSkin, 6, g); s.position.set(x, hip - 0.22, -0.38);
    });
  }
  const torso = cyl(0.15, 0.18, 0.56, mCloth, 7, g); torso.position.y = hip + 0.3;
  if (sari) { const d = box(0.36, 0.62, 0.05, mCloth2, 0, hip + 0.32, -0.12, g); d.rotation.z = 0.55; d.rotation.x = -0.1; }
  const neck = cyl(0.05, 0.055, 0.1, mSkin, 6, g); neck.position.y = hip + 0.62;
  const head = new THREE.Group(); head.position.y = hip + 0.76; g.add(head);
  head.add(new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 6), mSkin));
  const cap = new THREE.Mesh(new THREE.SphereGeometry(0.128, 8, 6, 0, Math.PI * 2, 0, Math.PI * 0.55), mHair);
  cap.rotation.x = -0.25; head.add(cap);
  if (bun) { const b = new THREE.Mesh(new THREE.SphereGeometry(0.06, 6, 5), mHair); b.position.set(0, 0.02, 0.12); head.add(b); }
  if (sari) { const veil = new THREE.Mesh(new THREE.SphereGeometry(0.135, 8, 6, 0, Math.PI * 2, 0, Math.PI * 0.5), mCloth2); veil.rotation.x = -0.6; head.add(veil); }
  const arms = [];
  [-1, 1].forEach(side => {
    const sh = new THREE.Group(); sh.position.set(side * 0.2, hip + 0.52, 0); g.add(sh);
    const up = cyl(0.048, 0.042, 0.3, mCloth, 6, sh); up.position.y = -0.15;
    const el = new THREE.Group(); el.position.y = -0.3; sh.add(el);
    const fo = cyl(0.04, 0.035, 0.27, mSkin, 6, el); fo.position.y = -0.135;
    const hand = new THREE.Mesh(new THREE.SphereGeometry(0.045, 6, 5), mSkin); hand.position.y = -0.29; el.add(hand);
    arms.push({ sh, el, hand });
  });
  g.scale.setScalar(scale);
  g.userData = { arms, legs, head, torso, phase: Math.random() * 10, speed: 5 + Math.random() * 2.5, work: 1, standing, floor, walk: 0, stride: 0, mats: [mSkin, mCloth, mCloth2, mHair] };
  return g;
}

export function animateFigure(fig, t, dt) {
  const u = fig.userData;
  if (u.standing && u.walk > 0.01) {
    // walking: legs and arms swing opposite; u.stride advances with distance
    const sw = Math.sin(u.stride) * 0.55 * u.walk;
    u.legs.forEach((l, i) => { l.rotation.x = i ? sw : -sw; });
    u.arms.forEach((a, i) => {
      if (u.armsUp && i === 1) { a.sh.rotation.x = lerp(a.sh.rotation.x, 2.4, dt * 6); a.el.rotation.x = 0.3; return; }
      a.sh.rotation.x = (i ? -sw : sw) * 0.8 + 0.05; a.el.rotation.x = 0.25;
    });
    u.head.rotation.y = lerp(u.head.rotation.y, u.look ?? 0, dt * 2);
    return;
  }
  if (u.standing) {
    u.legs && u.legs.forEach(l => { l.rotation.x = lerp(l.rotation.x, 0, dt * 6); });
    u.arms.forEach((a, i) => {
      const reach = u.reach && i === 1;
      a.sh.rotation.x = lerp(a.sh.rotation.x, reach ? 1.35 : 0.08 + 0.03 * Math.sin(t + i), dt * 3);
      a.el.rotation.x = lerp(a.el.rotation.x, reach ? 0.1 : 0.25, dt * 3);
    });
    u.head.rotation.y = lerp(u.head.rotation.y, u.look ?? 0, dt * 2);
    return;
  }
  const w = u.work;
  u.arms.forEach((a, i) => {
    const s = Math.sin(t * u.speed + u.phase + i * 2.2);
    a.sh.rotation.x = lerp(0.12, 0.55 + 0.16 * s, w);
    a.el.rotation.x = lerp(0.35, 0.9 + 0.14 * Math.sin(t * u.speed + u.phase + i * 2.2 + 1), w);
  });
  u.head.rotation.x = lerp(0.05, 0.32 + 0.03 * Math.sin(t * 0.7 + u.phase), w);
  u.head.rotation.y = 0.15 * Math.sin(t * 0.21 + u.phase) * (1.6 - w);
}

// ---------- THE BAG (key object — travels through every space) ----------
export function makeBag({ base = 0x4b5f86, patches = [0xc9933a, 0x9a3b2a], ours = false } = {}) {
  const g = new THREE.Group();
  const cloth = M(base, { flatShading: true, roughness: 1, side: THREE.DoubleSide });
  const body = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.155, 0.3, 9, 1, true), cloth);
  g.add(body);
  const bottom = new THREE.Mesh(new THREE.CircleGeometry(0.155, 9), cloth); bottom.rotation.x = Math.PI / 2; bottom.position.y = -0.15; g.add(bottom);
  patches.forEach((c, i) => {
    const p = box(0.08, 0.07, 0.01, M(c, { roughness: 1 }), 0, -0.04 + i * 0.09, 0.145, g);
    p.rotation.y = (i - 0.5) * 0.9; p.position.x = Math.sin(p.rotation.y) * 0.14; p.position.z = Math.cos(p.rotation.y) * 0.14;
  });
  const strap = new THREE.Mesh(new THREE.TorusGeometry(0.12, 0.012, 5, 14, Math.PI), M(0x6a5a44, { roughness: 1 }));
  strap.position.y = 0.15; g.add(strap);
  const flapPivot = new THREE.Group(); flapPivot.position.set(0, 0.15, -0.13); g.add(flapPivot);
  const flap = new THREE.Mesh(new THREE.CircleGeometry(0.135, 9), cloth); flap.rotation.x = -Math.PI / 2; flap.position.z = 0.13; flapPivot.add(flap);
  g.userData = { flapPivot, open: 0 };
  if (ours) {
    const inside = new THREE.Group(); inside.position.y = 0.05; g.add(inside);
    const pencil = new THREE.Group();
    const pb = cyl(0.008, 0.008, 0.07, M(0xe0b83a), 6, pencil); pb.rotation.z = Math.PI / 2;
    const tip = new THREE.Mesh(new THREE.ConeGeometry(0.008, 0.018, 6), M(0x3a2a1a)); tip.rotation.z = -Math.PI / 2; tip.position.x = 0.044; pencil.add(tip);
    pencil.position.set(0.03, 0.07, 0.04); pencil.rotation.y = 0.5; inside.add(pencil);
    const page = new THREE.Mesh(new THREE.PlaneGeometry(0.12, 0.15), new THREE.MeshStandardMaterial({ map: T.notebookPage(), roughness: 1, side: THREE.DoubleSide }));
    page.rotation.set(-1.1, 0.2, 0.15); page.position.set(-0.03, 0.06, -0.02); inside.add(page);
    const coins = [];
    for (let i = 0; i < 3; i++) {
      const c = cyl(0.022, 0.022, 0.006, M(0xb8913a, { metalness: 0.8, roughness: 0.35 }), 12, inside);
      c.position.set(-0.05 + i * 0.045, 0.065 + i * 0.004, 0.05 - i * 0.02); c.rotation.x = 0.4; c.visible = false; coins.push(c);
    }
    // fabric scraps (picked up in the market) and the food (stolen at the stall)
    const scraps = box(0.1, 0.03, 0.08, fabricMat(3), 0.02, 0.05, -0.04, inside); scraps.rotation.y = 0.4; scraps.visible = false;
    const foodMat = new THREE.MeshStandardMaterial({ color: 0xd8b070, roughness: 0.8, emissive: 0xff9a30, emissiveIntensity: 0 });
    const food = new THREE.Group(); food.position.set(0, 0.07, 0); inside.add(food);
    box(0.13, 0.07, 0.1, foodMat, 0, 0, 0, food);                      // bundle wrapped in cloth
    const knot = new THREE.Mesh(new THREE.SphereGeometry(0.025, 6, 5), foodMat); knot.position.y = 0.045; food.add(knot);
    food.visible = false;
    inside.visible = false;
    Object.assign(g.userData, { inside, coins, page, pencil, scraps, food, foodMat });
  }
  return g;
}

export function setBagOpen(bag, k) {
  const u = bag.userData; u.open = k;
  u.flapPivot.rotation.x = -k * 2.2;
  if (u.inside) { u.inside.visible = k > 0.15; u.inside.position.y = 0.04 + 0.05 * k; }
}

// lumpy sack (rice / cloth scraps)
export function makeSack(mat, s = 1) {
  const geo = new THREE.SphereGeometry(0.4, 9, 7);
  const p = geo.attributes.position;
  for (let k = 0; k < p.count; k++) {
    const x = p.getX(k), y = p.getY(k), z = p.getZ(k);
    const d = 1 + 0.1 * Math.sin(x * 9) * Math.cos(z * 7);
    p.setXYZ(k, x * d, (y < -0.2 ? -0.2 : y) * 1.25 * d, z * d * 0.85);
  }
  geo.computeVertexNormals();
  const m = new THREE.Mesh(geo, mat); m.scale.setScalar(s); m.position.y = 0.25 * s;
  const g = new THREE.Group(); g.add(m); return g;
}

// plastic chair-less stool / crate seats, mismatched on purpose
export function makeSeat(kind) {
  const g = new THREE.Group();
  if (kind === 'crate') {
    const mat = TM(T.plywood());
    box(0.42, 0.04, 0.34, mat, 0, 0.6, 0, g);
    [-0.19, 0.19].forEach(x => box(0.03, 0.6, 0.34, mat, x, 0.3, 0, g));
    box(0.42, 0.18, 0.03, mat, 0, 0.45, 0.16, g); box(0.42, 0.18, 0.03, mat, 0, 0.12, -0.16, g);
  } else {
    const col = kind === 'red' ? 0x9a2a22 : 0x2a4f8a;
    const m = M(col, { roughness: 0.6 });
    const s = cyl(0.2, 0.17, 0.05, m, 12, g); s.position.y = 0.6;
    const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.22, 0.58, 12, 1, true), M(col, { roughness: 0.6, side: THREE.DoubleSide })); leg.position.y = 0.29; g.add(leg);
  }
  return g;
}


// ---------- police (become monsters in the nightmare) ----------
export function makePolice() {
  const fig = makeFigure({ standing: true, scale: 1.35, cloth: 0xa38f5e, cloth2: 0x7d6c44, skin: 0x6b4630 });
  const u = fig.userData;
  const capMat = M(0x5a4c2c, { flatShading: true });
  const cap = cyl(0.14, 0.13, 0.08, capMat, 10, u.head); cap.position.set(0, 0.1, 0);
  const brim = box(0.2, 0.012, 0.1, capMat, 0, 0.065, -0.12, u.head);
  box(0.4, 0.05, 0.4, M(0x2a1e14), 0, 1.0 / 1, 0, fig).position.y = 1.0; // belt
  const lathi = cyl(0.012, 0.012, 0.9, M(0x6a4a2a), 6, u.arms[1].hand); lathi.position.y = -0.3;
  // monster parts, hidden until the nightmare
  const eyeMat = new THREE.MeshBasicMaterial({ color: 0xff2a10, toneMapped: false });
  const eyes = [-0.045, 0.045].map(x => { const e = new THREE.Mesh(new THREE.SphereGeometry(0.022, 6, 5), eyeMat); e.position.set(x, 0.02, -0.11); e.scale.setScalar(0.001); u.head.add(e); return e; });
  const horns = [-1, 1].map(sd => { const h = new THREE.Mesh(new THREE.ConeGeometry(0.03, 0.22, 5), M(0x0a0806)); h.position.set(sd * 0.08, 0.16, 0); h.rotation.z = -sd * 0.5; h.scale.setScalar(0.001); u.head.add(h); return h; });
  u.police = { eyes, horns, base: u.mats.map(m => m.color.clone()), cap, brim };
  return fig;
}

// 0 = policeman, 1 = full nightmare creature (tall, dark, long arms, burning eyes)
export function setMonster(fig, k) {
  const u = fig.userData, p = u.police; if (!p) return;
  const dark = new THREE.Color(0x0b0807);
  u.mats.forEach((m, i) => m.color.copy(p.base[i]).lerp(dark, k));
  const s = p.scale || (p.scale = fig.scale.x);
  fig.scale.set(s * (1 - 0.12 * k), s * (1 + 0.55 * k), s * (1 - 0.12 * k));
  u.arms.forEach(a => { a.sh.scale.set(1, 1 + 0.9 * k, 1); });
  p.eyes.forEach(e => e.scale.setScalar(Math.max(0.001, k)));
  p.horns.forEach(h => h.scale.setScalar(Math.max(0.001, k)));
  p.cap.visible = p.brim.visible = k < 0.5;
}

// a passer-by for crowds
export function makeWalker(i) {
  const looks = [
    { cloth: 0x7a2f3a, cloth2: 0x9a4a3a, sari: true }, { cloth: 0xd8d2c0, cloth2: 0x4a4a52 }, { cloth: 0x3f6a7a, cloth2: 0x2a2a30 },
    { cloth: 0xb08a3a, cloth2: 0x6a3a2a, sari: true }, { cloth: 0x8a8a7a, cloth2: 0x3a3a3a }, { cloth: 0x5a3f6a, cloth2: 0xb06a2a, sari: true },
    { cloth: 0xc8c0a8, cloth2: 0xc8c0a8 }, { cloth: 0x2f5a3a, cloth2: 0x3a3a3a },
  ];
  const o = looks[i % looks.length];
  const f = makeFigure({ standing: true, scale: 1.25 + (i % 3) * 0.05, ...o, skin: [0x6b4630, 0x7a5236, 0x5a3a26, 0x845a3c][i % 4], bun: o.sari });
  if (i % 4 === 1) box(0.4, 0.22, 0.32, M(0x9a8a6a, { flatShading: true }), 0, 0.2, 0, f.userData.head); // load carried on the head
  if (i % 4 === 1) f.userData.armsUp = true;
  return f;
}
