// Shared building blocks: materials, a static-mesh batcher, low-poly people with joints,
// treadle sewing machines, the child's cloth bag and the guiding glow.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

export const lerp = (a, b, t) => a + (b - a) * t;
export const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
export const ease = t => t * t * (3 - 2 * t);
export const damp = (a, b, k, dt) => lerp(a, b, 1 - Math.exp(-k * dt));

// ---------- materials ----------
const matCache = new Map();
export function M(color, o = {}) {
  const key = color + JSON.stringify(o);
  if (!matCache.has(key)) matCache.set(key, new THREE.MeshStandardMaterial({ color, roughness: 0.8, metalness: 0, ...o }));
  return matCache.get(key);
}
export const FLAT = (color, o = {}) => M(color, { flatShading: true, roughness: 0.85, ...o });

// ---------- batcher: collect static pieces per material, merge into a few meshes ----------
export class Batcher {
  constructor() { this.groups = new Map(); this._m = new THREE.Matrix4(); this._q = new THREE.Quaternion(); this._e = new THREE.Euler(); this._s = new THREE.Vector3(); this._p = new THREE.Vector3(); }
  add(geo, mat, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0, sx = 1, sy = 1, sz = 1) {
    this._m.compose(this._p.set(x, y, z), this._q.setFromEuler(this._e.set(rx, ry, rz)), this._s.set(sx, sy, sz));
    return this.addM(geo, mat, this._m);
  }
  addM(geo, mat, matrix) {
    let g = geo.index ? geo.toNonIndexed() : geo.clone();
    for (const k of Object.keys(g.attributes)) if (!['position', 'normal', 'uv'].includes(k)) g.deleteAttribute(k);
    if (!g.attributes.uv) g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(g.attributes.position.count * 2), 2));
    g.applyMatrix4(matrix);
    if (!this.groups.has(mat)) this.groups.set(mat, []);
    this.groups.get(mat).push(g);
    return g;
  }
  // add every mesh under an object (with its world transform relative to `rel`)
  addObject(obj) {
    obj.updateMatrixWorld(true);
    obj.traverse(o => { if (o.isMesh) this.addM(o.geometry, o.material, o.matrixWorld); });
  }
  // Plain-coloured materials (no textures, opaque, no glow) are merged into ONE vertex-coloured
  // material per surface type, so a whole room of props costs a handful of draw calls.
  build(parent, { cast = true, receive = true } = {}) {
    const out = [], plain = new Map(), c = new THREE.Color();
    for (const [mat, list] of this.groups) {
      const isPlain = mat.isMeshStandardMaterial && !mat.map && !mat.transparent && !mat.vertexColors && mat.emissive.getHex() === 0 && mat.colorWrite !== false;
      if (!isPlain) { out.push(this._mesh(mergeGeometries(list), mat, parent, cast, receive)); list.forEach(g => g.dispose()); continue; }
      const key = [mat.roughness.toFixed(2), mat.metalness.toFixed(2), mat.flatShading ? 1 : 0, mat.side].join('|');
      if (!plain.has(key)) plain.set(key, { mat, geos: [] });
      c.copy(mat.color);
      list.forEach(g => { const n = g.attributes.position.count, col = new Float32Array(n * 3); for (let i = 0; i < n; i++) { col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b; } g.setAttribute('color', new THREE.BufferAttribute(col, 3)); plain.get(key).geos.push(g); });
    }
    for (const { mat, geos } of plain.values()) {
      const vm = vcMaterial(mat);
      out.push(this._mesh(mergeGeometries(geos), vm, parent, cast, receive));
      geos.forEach(g => g.dispose());
    }
    this.groups.clear();
    return out;
  }
  _mesh(geo, mat, parent, cast, receive) {
    const mesh = new THREE.Mesh(geo, mat);
    mesh.castShadow = cast; mesh.receiveShadow = receive; mesh.matrixAutoUpdate = false; mesh.updateMatrix();
    parent.add(mesh); return mesh;
  }
}
const vcCache = new Map();
function vcMaterial(m) {
  const key = [m.roughness.toFixed(2), m.metalness.toFixed(2), m.flatShading ? 1 : 0, m.side].join('|');
  if (!vcCache.has(key)) vcCache.set(key, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: m.roughness, metalness: m.metalness, flatShading: m.flatShading, side: m.side }));
  return vcCache.get(key);
}

export const G = {
  box: (w, h, d) => new THREE.BoxGeometry(w, h, d),
  cyl: (rt, rb, h, s = 10) => new THREE.CylinderGeometry(rt, rb, h, s),
};
export function mesh(geo, mat, x = 0, y = 0, z = 0, parent) {
  const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.castShadow = true; m.receiveShadow = true;
  if (parent) parent.add(m); return m;
}
// a rounded rectangle extruded = soft-edged slab
export function slab(w, d, h, r = 0.02, bevel = 0.006) {
  const s = new THREE.Shape(), x = -w / 2, y = -d / 2;
  s.moveTo(x + r, y); s.lineTo(x + w - r, y); s.quadraticCurveTo(x + w, y, x + w, y + r); s.lineTo(x + w, y + d - r);
  s.quadraticCurveTo(x + w, y + d, x + w - r, y + d); s.lineTo(x + r, y + d); s.quadraticCurveTo(x, y + d, x, y + d - r);
  s.lineTo(x, y + r); s.quadraticCurveTo(x, y, x + r, y);
  const g = new THREE.ExtrudeGeometry(s, { depth: h - bevel * 2, bevelEnabled: true, bevelSize: bevel, bevelThickness: bevel, bevelSegments: 2, curveSegments: 4 });
  g.rotateX(-Math.PI / 2); g.translate(0, bevel, 0);
  return g;
}
// sagging wire between two points
export function wireGeo(a, b, sag, r = 0.006) {
  const mid = a.clone().lerp(b, 0.5); mid.y -= sag;
  const c = new THREE.QuadraticBezierCurve3(a, mid, b);
  return new THREE.TubeGeometry(c, 16, r, 4, false);
}

// ---------- PEOPLE (see people.js) ----------
export { makePerson, poseSit, poseStand, fitSitLegs, animateSew, animateWalk, animateIdle, SKINS } from './people.js';

// ---------- TREADLE SEWING MACHINE ----------
// Origin = centre of the table top surface; long axis along x; operator sits on +z.
const IRON = () => M(0x161514, { roughness: 0.45, metalness: 0.55 });
const ENAMEL = () => M(0x101010, { roughness: 0.28, metalness: 0.35 });
const GOLD = () => M(0xb08a3a, { roughness: 0.35, metalness: 0.9 });
const STEEL = () => M(0xb8b8b4, { roughness: 0.25, metalness: 0.95 });
export function machineProfile() {
  // side silhouette of a classic swan-neck machine head (x along arm, y up), in metres
  const s = new THREE.Shape();
  s.moveTo(0.27, 0.0); s.lineTo(0.27, 0.27); s.quadraticCurveTo(0.27, 0.36, 0.18, 0.36);
  s.lineTo(-0.2, 0.35); s.quadraticCurveTo(-0.27, 0.35, -0.29, 0.3); s.lineTo(-0.31, 0.16); s.lineTo(-0.22, 0.16);
  s.lineTo(-0.2, 0.27); s.quadraticCurveTo(-0.15, 0.29, 0.1, 0.29); s.quadraticCurveTo(0.17, 0.29, 0.17, 0.22); s.lineTo(0.17, 0.0); s.lineTo(0.27, 0.0);
  return s;
}
let _headGeo = null;
// pass `batch` + `at` (a Matrix4 for where the machine stands) to merge its static parts into the room's batch
// headX slides the machine head along its table (the player's machine sits nearer the left edge)
export function makeMachine({ wood, batch = null, at = null, threadColor = 0xb5442e, headX = 0 } = {}) {
  const g = new THREE.Group();
  const anim = new THREE.Group(); g.add(anim);  // moving parts
  if (!_headGeo) {
    _headGeo = new THREE.ExtrudeGeometry(machineProfile(), { depth: 0.1, bevelEnabled: true, bevelSize: 0.012, bevelThickness: 0.012, bevelSegments: 3, curveSegments: 10 });
    _headGeo.translate(0, 0, -0.05);
  }
  const parts = new Batcher();
  const hx = headX, hp = (geo, mat, x, ...r) => parts.add(geo, mat, x + hx, ...r);
  // table top
  parts.add(slab(1.15, 0.68, 0.05, 0.03), wood, 0, -0.05, 0);
  // machine bed
  hp(slab(0.66, 0.3, 0.05, 0.04, 0.01), ENAMEL(), -0.02, 0, 0);
  hp(G.box(0.12, 0.004, 0.09), STEEL(), -0.27, 0.051, 0.02);                 // needle plate
  hp(_headGeo, ENAMEL(), 0, 0.05, -0.02);
  // gold decoration lines
  hp(G.box(0.38, 0.008, 0.002), GOLD(), -0.02, 0.37, 0.045);
  hp(G.box(0.006, 0.24, 0.002), GOLD(), 0.22, 0.18, 0.045);
  hp(G.box(0.2, 0.006, 0.002), GOLD(), -0.02, 0.33, 0.045);
  // spool pin + thread
  hp(G.cyl(0.004, 0.004, 0.09, 6), STEEL(), 0.05, 0.47, -0.02);
  hp(G.cyl(0.022, 0.022, 0.05, 10), M(threadColor, { roughness: 0.9 }), 0.05, 0.45, -0.02);
  hp(G.cyl(0.026, 0.026, 0.006, 10), M(0xc9b48a), 0.05, 0.42, -0.02);
  hp(G.cyl(0.026, 0.026, 0.006, 10), M(0xc9b48a), 0.05, 0.477, -0.02);
  // tension disc & thread guide on the face
  hp(G.cyl(0.018, 0.018, 0.01, 10), STEEL(), -0.24, 0.33, 0.06, Math.PI / 2);
  // presser foot bar
  hp(G.cyl(0.005, 0.005, 0.14, 6), STEEL(), -0.29, 0.15, 0.0);
  hp(G.box(0.03, 0.006, 0.05), STEEL(), -0.29, 0.058, 0.0);
  // treadle stand (two cast-iron side frames) under the table
  for (const sx of [-0.48, 0.48]) {
    parts.add(G.box(0.05, 0.92, 0.05), IRON(), sx, -0.52, -0.22, 0, 0, 0);
    parts.add(G.box(0.05, 0.92, 0.05), IRON(), sx, -0.52, 0.22, 0, 0, 0);
    parts.add(G.box(0.05, 0.05, 0.55), IRON(), sx, -0.96, 0, 0, 0, 0);
    parts.add(G.box(0.04, 0.04, 0.5), IRON(), sx, -0.2, 0, 0, 0, 0);
    parts.add(G.box(0.04, 0.62, 0.04), IRON(), sx, -0.55, 0, 0.62, 0, 0);
    parts.add(G.box(0.04, 0.62, 0.04), IRON(), sx, -0.55, 0, -0.62, 0, 0);
  }
  parts.add(G.box(0.96, 0.035, 0.035), IRON(), 0, -0.86, 0.05);
  // cloth drawer under the top
  parts.add(G.box(0.3, 0.1, 0.4), wood, 0.25, -0.13, 0);
  parts.add(G.cyl(0.01, 0.01, 0.02, 6), GOLD(), 0.25, -0.13, 0.205, Math.PI / 2);
  hp(G.cyl(0.004, 0.004, 1.05, 4), M(0x3a2a1e), 0.36, -0.2, 0.0, 0, 0, 0.04);   // belt
  if (batch && at) {
    for (const [mat, list] of parts.groups) { if (!batch.groups.has(mat)) batch.groups.set(mat, []); list.forEach(gg => { gg.applyMatrix4(at); batch.groups.get(mat).push(gg); }); }
    parts.groups.clear();
  } else parts.build(g);

  // moving: hand wheel, needle bar, treadle wheel, pedal — each one merged mesh
  const one = (pieces, mat, cast = true) => { const b2 = new Batcher(); pieces.forEach(a => b2.add(...a)); const [m] = b2.build(new THREE.Group(), { cast, receive: true }); m.matrixAutoUpdate = true; m.position.set(0, 0, 0); m.rotation.set(0, 0, 0); return m; };
  const wheel = one([[new THREE.CylinderGeometry(0.075, 0.075, 0.035, 18), STEEL(), 0, 0, 0, 0, 0, Math.PI / 2], [new THREE.BoxGeometry(0.012, 0.12, 0.04), STEEL(), 0.02, 0, 0]]);
  wheel.position.set(0.32 + hx, 0.31, -0.02); anim.add(wheel);
  const needle = one([[new THREE.CylinderGeometry(0.006, 0.006, 0.13, 6), STEEL(), 0, 0.04, 0], [new THREE.CylinderGeometry(0.0015, 0.0015, 0.05, 4), STEEL(), 0, -0.045, 0]], null, false);
  needle.position.set(-0.27 + hx, 0.16, 0.02); anim.add(needle);
  const tw = one([[new THREE.TorusGeometry(0.2, 0.014, 6, 24), IRON(), 0, 0, 0, 0, Math.PI / 2, 0], ...[0, 1, 2].map(i => [new THREE.BoxGeometry(0.012, 0.4, 0.02), IRON(), 0, 0, 0, i * Math.PI / 3, 0, 0])]);
  tw.position.set(0.38, -0.72, 0.05); anim.add(tw);
  const pedal = one([[new THREE.BoxGeometry(0.62, 0.02, 0.26), IRON(), 0, 0, 0]]);
  pedal.position.set(0, -0.9, 0.12); anim.add(pedal);
  g.userData = { wheel, needle, tw, pedal, speed: 1, ph: Math.random() * 10, needleTip: new THREE.Vector3(-0.27 + hx, 0.06, 0.02) };
  return g;
}
export function animateMachine(m, dt) {
  const u = m.userData; u.ph += dt * 26 * u.speed;
  u.wheel.rotation.x = -u.ph; u.tw.rotation.x = -u.ph * 0.35;
  u.needle.position.y = 0.16 + Math.sin(u.ph) * 0.022 * Math.min(1, u.speed * 4);
  u.pedal.rotation.x = Math.sin(u.ph * 0.35) * 0.12 * Math.min(1, u.speed * 3);
}

// ---------- the child's bag (key object) ----------
// an open-topped cloth sling bag; a morph target cinches the mouth shut
export function makeBag(map) {
  const g = new THREE.Group();
  const prof = (open) => [[0.001, 0], [0.1, 0.004], [0.135, 0.04], [0.15, 0.12], [0.145, 0.2], open ? [0.14, 0.26] : [0.07, 0.25], open ? [0.142, 0.275] : [0.035, 0.27]]
    .map(([r, y]) => new THREE.Vector2(r, y));
  const geoOpen = new THREE.LatheGeometry(prof(true), 14), geoClosed = new THREE.LatheGeometry(prof(false), 14);
  // wobble the cloth a little so it isn't a perfect solid of revolution
  const wob = (geo) => { const p = geo.attributes.position; for (let i = 0; i < p.count; i++) { const x = p.getX(i), y = p.getY(i), z = p.getZ(i), a = Math.atan2(z, x); const k = 1 + 0.06 * Math.sin(a * 3 + y * 20) + 0.04 * Math.sin(a * 5); p.setX(i, x * k); p.setZ(i, z * k * 0.72); } geo.computeVertexNormals(); };
  wob(geoOpen); wob(geoClosed);
  geoClosed.morphAttributes.position = [geoOpen.attributes.position];
  geoClosed.morphAttributes.normal = [geoOpen.attributes.normal];
  const mat = new THREE.MeshStandardMaterial({ map, roughness: 0.95, side: THREE.DoubleSide });
  const body = new THREE.Mesh(geoClosed, mat); body.castShadow = true; body.receiveShadow = true; g.add(body);
  body.morphTargetInfluences = [0];
  // inside: dark lining disc (seen when open)
  const inner = new THREE.Mesh(new THREE.CircleGeometry(0.12, 14), M(0x1a140e, { side: THREE.DoubleSide })); inner.rotation.x = -Math.PI / 2; inner.position.y = 0.02; inner.scale.set(1, 0.72, 1); g.add(inner);
  // frayed strap
  const strap = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3([new THREE.Vector3(-0.13, 0.25, 0), new THREE.Vector3(-0.15, 0.5, 0), new THREE.Vector3(0, 0.62, 0), new THREE.Vector3(0.15, 0.5, 0), new THREE.Vector3(0.13, 0.25, 0)]), 20, 0.014, 4, false), new THREE.MeshStandardMaterial({ map, roughness: 1 }));
  strap.scale.set(1, 1, 0.5); strap.castShadow = true; g.add(strap);
  // drawstring knot
  const knot = new THREE.Mesh(new THREE.IcosahedronGeometry(0.018, 0), M(0xc9a46a, { flatShading: true })); knot.position.set(0.04, 0.27, 0.07); g.add(knot);
  // contents: pencil stub, a torn notebook page, coins (shown as they are added)
  const contents = new THREE.Group(); contents.position.y = 0.03; g.add(contents);
  const pencil = new THREE.Mesh(new THREE.CylinderGeometry(0.006, 0.006, 0.07, 6), M(0xd9a22a)); pencil.rotation.z = Math.PI / 2; pencil.rotation.y = 0.5; pencil.position.set(-0.03, 0.01, 0.02); contents.add(pencil);
  const tip = new THREE.Mesh(new THREE.ConeGeometry(0.006, 0.014, 6), M(0xe8d0a8)); tip.rotation.z = -Math.PI / 2; tip.position.set(0.042, 0, 0); pencil.add(tip);
  const coins = [];
  for (let i = 0; i < 3; i++) {
    const c = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 0.004, 14), M(0xc8a040, { metalness: 0.9, roughness: 0.3 }));
    c.position.set(0.03 - i * 0.022, 0.004 + i * 0.003, -0.02 + (i % 2) * 0.02); c.rotation.set(0.1 * i, 0, 0.15); c.visible = false; contents.add(c); coins.push(c);
  }
  // cloth scraps from the factory floor (Space 2) and the stolen food (glows in the nightmare)
  const scraps = new THREE.Group(); scraps.visible = false; contents.add(scraps);
  [0xb5442e, 0xd9a22a, 0x1f3a68, 0xe9e1cf].forEach((c, i) => { const sc = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.006, 0.05), M(c, { flatShading: true })); sc.position.set(-0.04 + i * 0.025, 0.02 + i * 0.006, -0.03 + (i % 2) * 0.04); sc.rotation.set(0.3 * i, i, 0.2); scraps.add(sc); });
  const foodMat = new THREE.MeshStandardMaterial({ color: 0xd8b070, roughness: 0.8, emissive: 0xff9a30, emissiveIntensity: 0 });
  const food = new THREE.Group(); food.visible = false; contents.add(food);
  const parcel = new THREE.Mesh(slab(0.11, 0.08, 0.05, 0.015, 0.006), foodMat); parcel.position.set(0, 0.0, 0); parcel.rotation.y = 0.3; food.add(parcel);
  const tie = new THREE.Mesh(new THREE.TorusGeometry(0.04, 0.003, 4, 10), M(0x8a5a2a)); tie.rotation.x = Math.PI / 2; tie.position.y = 0.026; tie.scale.set(1.3, 1, 1); food.add(tie);
  g.userData = { body, inner, contents, coins, pencil, strap, scraps, food, foodMat, open: 0 };
  return g;
}
export function setBagOpen(bag, k) {
  const u = bag.userData; u.open = k;
  u.body.morphTargetInfluences[0] = k;
  u.inner.visible = k > 0.05; u.contents.visible = k > 0.05 || (u.food && u.food.visible && u.foodMat.emissiveIntensity > 0.05);
}

// ---------- the guide: a soft glow on the next thing to find (V3: replaces the red thread) ----------
// Play-testers followed the red line instead of looking at the world. Now nothing points the way:
// whatever you need next quietly glows (a warm halo and a few drifting motes of light), so you look
// around and find it yourself. Same calls as the old thread: set(point | list | fn), urgent, visible.
export class Thread {
  constructor(scene) {
    const tex = (() => { const c = document.createElement('canvas'); c.width = c.height = 64; const g = c.getContext('2d'), r = g.createRadialGradient(32, 32, 0, 32, 32, 32);
      r.addColorStop(0, 'rgba(255,255,255,1)'); r.addColorStop(0.25, 'rgba(255,236,200,.55)'); r.addColorStop(1, 'rgba(255,220,170,0)'); g.fillStyle = r; g.fillRect(0, 0, 64, 64);
      const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t; })();
    const sm = o => new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, fog: false, opacity: 0, ...o });
    this.group = new THREE.Group(); this.group.renderOrder = 5; scene.add(this.group);
    this.halo = new THREE.Sprite(sm({ color: new THREE.Color(1.0, 0.78, 0.45) })); this.halo.scale.setScalar(0.7);
    this.core = new THREE.Sprite(sm({ color: new THREE.Color(1.0, 0.93, 0.8) })); this.core.scale.setScalar(0.16);
    this.group.add(this.halo, this.core);
    // motes of light rising round it
    this.N = 14; const pos = new Float32Array(this.N * 3); this.seed = [];
    for (let i = 0; i < this.N; i++) this.seed.push({ a: Math.random() * 6.28, r: 0.12 + Math.random() * 0.22, ph: Math.random(), sp: 0.25 + Math.random() * 0.3 });
    const pg = new THREE.BufferGeometry(); pg.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    this.motesMat = new THREE.PointsMaterial({ map: tex, size: 0.05, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, color: new THREE.Color(1, 0.85, 0.6), opacity: 0, fog: false });
    this.motes = new THREE.Points(pg, this.motesMat); this.motes.frustumCulled = false; this.group.add(this.motes);
    this.target = null; this.urgent = false; this.visible = true; this.alpha = 0; this.u = 0;
    this.at = new THREE.Vector3(); this.has = false;
  }
  set(v) { this.target = !v ? null : (typeof v === 'function' ? v : Array.isArray(v) ? v.map(p => p.clone()) : v.clone()); }
  update(dt, t, headPos, fwd) {
    this.u = damp(this.u, this.urgent ? 1 : 0, 3, dt);
    let p = null;
    if (this.target && headPos) {
      const list = typeof this.target === 'function' ? this.target(headPos) : this.target;
      if (Array.isArray(list)) {
        // a route: glow at the next corner ahead (the one after it once you are standing on it)
        p = list.find(q => Math.hypot(q.x - headPos.x, q.z - headPos.z) > 1.6) || list[list.length - 1];
        if (p) p = { x: p.x, y: Math.max(p.y, 1.0), z: p.z };
      } else p = list;
    }
    if (p) {
      // glide to a new target instead of jumping (and appear in place the first time)
      if (!this.has || this.alpha < 0.02) this.at.set(p.x, p.y, p.z); else { this.at.x = damp(this.at.x, p.x, 6, dt); this.at.y = damp(this.at.y, p.y, 6, dt); this.at.z = damp(this.at.z, p.z, 6, dt); }
      this.has = true;
    }
    // near the thing itself it softens (you have found it); far off it stays easy to spot
    const d = headPos ? Math.hypot(this.at.x - headPos.x, this.at.z - headPos.z) : 5;
    const want = p && this.visible ? 1 : 0;
    this.alpha = damp(this.alpha, want, want ? 2.2 : 4, dt);
    const beat = 0.5 + 0.5 * Math.sin(t * (2.2 + this.u * 3.5)), near = clamp((d - 0.6) / 2.5, 0.35, 1);
    const a = this.alpha * near;
    this.group.position.copy(this.at); this.group.visible = this.alpha > 0.01;
    this.halo.material.opacity = a * (0.32 + 0.22 * beat + 0.15 * this.u);
    this.halo.scale.setScalar((0.55 + 0.2 * beat + 0.25 * this.u) * (0.8 + 0.25 * clamp(d / 6, 0, 1.6)));
    this.core.material.opacity = a * (0.55 + 0.3 * beat);
    this.motesMat.opacity = a * 0.8;
    const pa = this.motes.geometry.attributes.position;
    this.seed.forEach((m, i) => { const k = (t * m.sp + m.ph) % 1; pa.setXYZ(i, Math.cos(m.a + t * 0.4) * m.r * (1 - k * 0.5), -0.15 + k * 0.6, Math.sin(m.a + t * 0.4) * m.r * (1 - k * 0.5)); });
    pa.needsUpdate = true;
  }
}
