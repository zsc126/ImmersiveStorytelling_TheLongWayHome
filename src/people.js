// PEOPLE — faceted low-poly figures in the spirit of How to Fish, with believable proportions.
// Every person is ONE skinned mesh (one draw call, one shadow call): each body part is a small
// faceted solid glued rigidly to a bone, and round joint caps hide the seams when limbs bend.
// Colours live in the vertices, so a whole crowd shares a single material.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

const lerp = (a, b, t) => a + (b - a) * t;
const damp = (a, b, k, dt) => lerp(a, b, 1 - Math.exp(-k * dt));

// ---------- shared materials ----------
const mats = {};
export function personMaterial(kind = 'room') {
  if (mats[kind]) return mats[kind];
  // double-sided: tunics and sleeves are open shells, so their insides must not see through
  const m = new THREE.MeshStandardMaterial({ vertexColors: true, flatShading: true, roughness: 0.84, metalness: 0, side: THREE.DoubleSide, shadowSide: THREE.FrontSide });
  if (kind === 'sunlit') {
    // seen through the window in full sun: let the colours glow a little, no indoor fog
    m.fog = false;
    m.onBeforeCompile = (sh) => { sh.fragmentShader = sh.fragmentShader.replace('#include <emissivemap_fragment>', '#include <emissivemap_fragment>\n totalEmissiveRadiance += vColor.rgb * 0.32;'); };
    m.customProgramCacheKey = () => 'person-sunlit';
  }
  if (kind === 'hand') { m.roughness = 0.7; }
  return (mats[kind] = m);
}

// ---------- geometry helpers ----------
const ell = (rx, ry, rz, detail = 1) => new THREE.IcosahedronGeometry(1, detail).scale(rx, ry, rz);
// a limb segment hanging down from its joint: radius r0 at the joint, r1 at the far end
const limb = (r0, r1, len, seg = 7) => new THREE.CylinderGeometry(r0, r1, len, seg, 1).translate(0, -len / 2, 0);
const box = (w, h, d) => new THREE.BoxGeometry(w, h, d);
function lathe(points, seg = 8) { return new THREE.LatheGeometry(points.map(([r, y]) => new THREE.Vector2(Math.max(r, 0.0005), y)), seg); }

// deterministic jitter so the same person always looks the same
function rng(seed) { let s = (seed * 9301 + 49297) % 233280 || 7; return () => { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646; }; }

// one sculpted head: an ellipsoid whose lower half narrows into cheeks, jaw and chin
// (no overlapping solids, so no dents in the cheeks)
function headShape(hs) {
  const g = new THREE.IcosahedronGeometry(1, 2), p = g.attributes.position;
  for (let i = 0; i < p.count; i++) {
    let x = p.getX(i), y = p.getY(i), z = p.getZ(i);
    const low = Math.max(0, -y);                       // 0 at the middle … 1 at the chin
    x *= 1 - 0.22 * low * low;                         // jaw narrows toward the chin
    if (z > 0) z *= 1 - 0.1 * low + 0.06 * (1 - Math.abs(y));   // face a little flatter, cheeks full
    else z *= 1.04 - 0.25 * low;                       // back of the skull rounder, nape tucked in
    y *= y < 0 ? 1.08 : 1;                             // a little longer jaw (How to Fish heads are tall)
    p.setXYZ(i, x * 0.084 * hs, y * 0.105 * hs, z * 0.097 * hs);
  }
  return g;
}

// ---------- the rig builder ----------
export class Rig {
  constructor(seed = 1) { this.bones = []; this.parts = []; this.J = {}; this.rand = rng(seed); }
  bone(name, parent, x = 0, y = 0, z = 0) {
    const b = new THREE.Bone(); b.name = name; b.position.set(x, y, z);
    if (parent) parent.add(b);
    this.bones.push(b); this.J[name] = b; return b;
  }
  // geo is authored in the bone's local space; o = { x, y, z, rx, ry, rz, sx, sy, sz, jitter }
  add(bone, geo, color, o = {}) {
    const m = new THREE.Matrix4().compose(
      new THREE.Vector3(o.x || 0, o.y || 0, o.z || 0),
      new THREE.Quaternion().setFromEuler(new THREE.Euler(o.rx || 0, o.ry || 0, o.rz || 0)),
      new THREE.Vector3(o.sx ?? 1, o.sy ?? 1, o.sz ?? 1));
    this.parts.push({ bone, geo, color: new THREE.Color(color), m, jitter: o.jitter ?? 0.05 });
  }
  build(material) {
    const root = this.bones[0];
    root.updateMatrixWorld(true);
    const index = new Map(this.bones.map((b, i) => [b, i]));
    const geos = this.parts.map(p => {
      const g = p.geo.index ? p.geo.toNonIndexed() : p.geo.clone();
      p.geo.dispose();
      for (const k of Object.keys(g.attributes)) if (k !== 'position' && k !== 'normal') g.deleteAttribute(k);
      g.applyMatrix4(p.m); g.applyMatrix4(p.bone.matrixWorld);
      const n = g.attributes.position.count, col = new Float32Array(n * 3), si = new Uint16Array(n * 4), sw = new Float32Array(n * 4);
      const bi = index.get(p.bone), c = new THREE.Color();
      for (let t = 0; t < n; t += 3) {
        // each facet gets a slightly different shade: the hand-painted How to Fish look
        const f = 1 + (this.rand() - 0.5) * 2 * p.jitter;
        c.copy(p.color).multiplyScalar(f);
        for (let v = t; v < t + 3 && v < n; v++) { col[v * 3] = c.r; col[v * 3 + 1] = c.g; col[v * 3 + 2] = c.b; si[v * 4] = bi; sw[v * 4] = 1; }
      }
      g.setAttribute('color', new THREE.BufferAttribute(col, 3));
      g.setAttribute('skinIndex', new THREE.Uint16BufferAttribute(si, 4));
      g.setAttribute('skinWeight', new THREE.BufferAttribute(sw, 4));
      return g;
    });
    const geo = mergeGeometries(geos); geos.forEach(g => g.dispose());
    const mesh = new THREE.SkinnedMesh(geo, material);
    mesh.add(root); mesh.updateMatrixWorld(true);
    mesh.bind(new THREE.Skeleton(this.bones));
    mesh.castShadow = true; mesh.receiveShadow = true;
    return mesh;
  }
}

// ---------- palette helpers ----------
const shade = (hex, k) => new THREE.Color(hex).multiplyScalar(k).getHex();
export const SKINS = [0x8a5a3c, 0x7a4c30, 0x9a6844, 0x6e4228, 0xa87452];

// =====================================================================================
// makePerson — same joint names as before (hips, spine, neck, head, shL/R, elL/R, handL/R,
// hipL/R, kneeL/R, footL/R, skirt) so every animation keeps working.
//   outfit: 'shirt' (shirt + trousers), 'kurta' (long tunic), 'salwar' (tunic to the knee,
//           loose trousers, dupatta), 'uniform' (school shirt + shorts/skirt)
//   build:  0.85 (thin) … 1.15 (heavy)
// =====================================================================================
export function makePerson({
  skin = SKINS[0], top = 0x7a3a2a, bottom = 0x3a3a4a, hair = 0x18120e, female = false, child = false,
  scale = 1, belly = 0, mustache = false, scarf = null, cap = false, outfit = null, build = 1,
  sleeves = null, seed = 1, material = null, glasses = false,
} = {}) {
  outfit = outfit || (female ? 'salwar' : child ? 'shirt' : 'kurta');
  const R = new Rig(seed * 31 + (female ? 7 : 3) + (child ? 11 : 0));
  const k = child ? 0.74 : 1;                    // body length factor
  const hs = child ? 0.93 : 1;                   // head size (a child's head is big for its body)
  const tw = (child ? 0.82 : 1) * (female ? 0.93 : 1) * build;   // width
  const skinC = skin, lip = shade(skin, 0.78), dark = 0x16100c, hairC = hair;
  const topC = top, botC = bottom, shoeC = 0x3a2a1e;
  sleeves = sleeves || (outfit === 'shirt' && !child ? 'elbow' : outfit === 'uniform' ? 'short' : female ? 'elbow' : 'full');

  const hipY = 0.93 * k;
  const root = R.bone('root', null);
  const hips = R.bone('hips', root, 0, hipY, 0);
  const spine = R.bone('spine', hips, 0, 0.04 * k, 0);
  const neck = R.bone('neck', spine, 0, 0.49 * k, 0);
  const head = R.bone('head', neck, 0, 0.05 * k + 0.008, 0);
  const skirt = R.bone('skirt', hips, 0, 0.02 * k, 0);

  // ----- pelvis & torso -----
  R.add(hips, new THREE.CylinderGeometry(0.14 * tw, (female ? 0.15 : 0.135) * tw, 0.17 * k, 8), botC, { y: -0.02 * k, sz: 0.72 });
  const b = belly;
  const torsoProf = [[0.0, -0.02], [0.136 + b * 0.4, 0.0], [0.134 + b, 0.13], [0.146 + b * 0.5, 0.27], (female && !child ? [0.158, 0.33] : [0.158, 0.36]), [0.165, 0.42], [0.12, 0.475], [0.055, 0.5], [0.0, 0.505]]
    .map(([r, y]) => [r * tw, y * k]);
  R.add(spine, lathe(torsoProf, 8), topC, { sz: female ? 0.72 : 0.68, jitter: 0.06 });
  // collar / neckline
  R.add(spine, new THREE.TorusGeometry(0.052, 0.012, 4, 8).rotateX(Math.PI / 2), shade(topC, 0.85), { y: 0.495 * k, sz: 0.85 });
  // the tunic below the waist (kurta / kameez / school pinafore)
  const tunicLen = outfit === 'kurta' ? 0.36 : outfit === 'salwar' ? 0.5 : outfit === 'uniform' && female ? 0.36 : 0;
  if (tunicLen) {
    const prof = [[0.135 * tw, 0.0], [0.155 * tw, -0.12 * k], [0.18 * tw, -tunicLen * 0.8 * k], [0.19 * tw, -tunicLen * k], [0.17 * tw, -tunicLen * k - 0.004]];
    const g = new THREE.LatheGeometry(prof.map(([r, y]) => new THREE.Vector2(r, y)), 9);
    g.scale(1, 1, 0.74);
    R.add(skirt, g, outfit === 'uniform' ? botC : topC, { jitter: 0.07 });
  }
  if (scarf) {
    // dupatta: across the chest, over one shoulder, falling down the back
    const curve = new THREE.CatmullRomCurve3([[-0.15, 0.22, 0.1], [-0.05, 0.36, 0.115], [0.09, 0.47, 0.06], [0.16, 0.46, -0.04], [0.15, 0.3, -0.1], [0.12, 0.02, -0.11]]
      .map(([x, y, z]) => new THREE.Vector3(x * tw, y * k, z)));
    const g = new THREE.TubeGeometry(curve, 16, 0.042, 4, false); g.scale(1, 1, 1);
    R.add(spine, g, scarf, { jitter: 0.08 });
  }

  // ----- neck & head -----
  R.add(neck, new THREE.CylinderGeometry(0.05 * hs, 0.062 * hs, 0.09 * k, 7).translate(0, 0.015, 0), skinC);
  const H = (x, y, z) => ({ x: x * hs, y: y * hs, z: z * hs });
  R.add(head, headShape(hs), skinC, { ...H(0, 0.105, 0), jitter: 0.025 });                                        // one clean head: cranium, cheeks, jaw
  R.add(head, new THREE.ConeGeometry(0.017 * hs, 0.042 * hs, 4).rotateX(Math.PI / 2 + 0.35).rotateZ(Math.PI / 4), shade(skinC, 1.03), { ...H(0, 0.088, 0.099) });  // nose
  R.add(head, box(0.11 * hs, 0.012 * hs, 0.018 * hs), skinC, { ...H(0, 0.127, 0.086), rx: -0.3 });                       // soft brow
  [-1, 1].forEach(s => {
    R.add(head, ell(0.0095 * hs, 0.0085 * hs, 0.005 * hs, 0), 0x140d09, { ...H(s * 0.031, 0.112, 0.089), jitter: 0 });   // eye
    R.add(head, box(0.032 * hs, 0.007 * hs, 0.01 * hs), hairC, { ...H(s * 0.034, 0.132, 0.094), rz: s * -0.08 });        // eyebrow
    R.add(head, ell(0.011 * hs, 0.024 * hs, 0.017 * hs, 0), shade(skinC, 0.95), { ...H(s * 0.084, 0.1, -0.006) });       // ear
  });
  R.add(head, box(0.034 * hs, 0.006 * hs, 0.01 * hs), lip, { ...H(0, 0.05, 0.081) });                                  // mouth
  // hair
  if (cap) {
    R.add(head, new THREE.CylinderGeometry(0.084 * hs, 0.088 * hs, 0.06 * hs, 9), 0xd8d0bc, { ...H(0, 0.19, -0.008), sz: 1.08 });
    R.add(head, ell(0.084 * hs, 0.07 * hs, 0.09 * hs, 1), hairC, { ...H(0, 0.105, -0.045) });
  } else {
    R.add(head, ell(0.088 * hs, female ? 0.072 * hs : 0.062 * hs, 0.1 * hs, 1), hairC, { ...H(0, 0.162, -0.012), jitter: 0.06 });
    R.add(head, ell(0.085 * hs, 0.09 * hs, 0.07 * hs, 1), hairC, { ...H(0, 0.112, -0.042), jitter: 0.06 });
    if (female) {
      R.add(head, ell(0.04 * hs, 0.036 * hs, 0.036 * hs, 0), hairC, { ...H(0, 0.1, -0.11) });                               // bun
      if (!child) R.add(head, limb(0.022, 0.012, 0.3, 5), hairC, { ...H(0, 0.09, -0.1), rx: 0.18 });                       // braid
      else R.add(head, limb(0.018, 0.01, 0.16, 5), hairC, { ...H(0, 0.09, -0.1), rx: 0.2 });
    } else R.add(head, box(0.11 * hs, 0.02 * hs, 0.04 * hs), hairC, { ...H(0, 0.19, 0.06), rx: 0.4 });                     // fringe
  }
  if (mustache) R.add(head, box(0.054 * hs, 0.01 * hs, 0.014 * hs), hairC, { ...H(0, 0.064, 0.084), rx: 0.2 });
  if (glasses) [-1, 1].forEach(s => R.add(head, new THREE.TorusGeometry(0.016 * hs, 0.003, 4, 10), 0x2a2420, { ...H(s * 0.032, 0.111, 0.097) }));

  // ----- arms -----
  const ua = 0.29 * k, fa = 0.25 * k;
  const armTop = sleeves === 'none' ? skinC : topC;
  const foreC = sleeves === 'full' ? topC : skinC, upperC = sleeves === 'short' ? skinC : armTop;
  ['L', 'R'].forEach((side, i) => {
    const s = i ? 1 : -1;
    const sh = R.bone('sh' + side, spine, s * 0.16 * tw, 0.43 * k, 0);
    const el = R.bone('el' + side, sh, 0, -ua, 0);
    const hand = R.bone('hand' + side, el, 0, -fa, 0);
    R.add(sh, ell(0.05 * tw, 0.052, 0.05 * tw), topC, { x: -s * 0.012, y: -0.008 });       // shoulder cap (sunk into the torso)
    R.add(sh, limb(0.05 * tw, 0.041 * tw, ua), sleeves === 'short' ? topC : upperC, { sy: sleeves === 'short' ? 0.45 : 1 });
    if (sleeves === 'short') R.add(sh, limb(0.036 * tw, 0.034 * tw, ua * 0.55), skinC, { y: -ua * 0.45 });
    R.add(el, ell(0.04 * tw, 0.04, 0.04 * tw, 0), sleeves === 'full' ? topC : skinC);   // elbow cap
    R.add(el, limb(0.039 * tw, 0.031 * tw, fa), foreC);
    if (sleeves === 'elbow') R.add(el, limb(0.046 * tw, 0.044 * tw, 0.04), topC, { y: 0.02 });   // turned-back cuff
    if (sleeves === 'full') R.add(el, limb(0.036 * tw, 0.035 * tw, 0.03), shade(topC, 0.9), { y: -fa + 0.03 });
    // the hand: rounded palm, mitten of fingers, thumb (believable size, not a paddle)
    const hk = child ? 0.82 : 1;
    // (arms hang with the palms toward the thighs, so the hand is thin across x, thumb forward)
    R.add(hand, ell(0.017 * hk, 0.045 * hk, 0.03 * hk, 1), skinC, { y: -0.045 * hk });
    R.add(hand, ell(0.014 * hk, 0.036 * hk, 0.028 * hk, 1), skinC, { x: -s * 0.004, y: -0.1 * hk, rz: -s * 0.2 });
    R.add(hand, ell(0.011 * hk, 0.028 * hk, 0.011 * hk, 0), skinC, { x: -s * 0.006, y: -0.052 * hk, z: 0.028 * hk, rx: 0.4 });
    if (female && !child) R.add(el, new THREE.TorusGeometry(0.031, 0.005, 4, 9).rotateX(Math.PI / 2), 0xc8a040, { y: -fa + 0.02 });  // bangle
  });

  // ----- legs -----
  const th = 0.45 * k, sn = 0.43 * k;
  const shorts = child && (outfit === 'shirt' || outfit === 'uniform') && !female;
  ['L', 'R'].forEach((side, i) => {
    const s = i ? 1 : -1;
    const hip = R.bone('hip' + side, hips, s * 0.078 * tw, -0.05 * k, 0);
    const knee = R.bone('knee' + side, hip, 0, -th, 0);
    const foot = R.bone('foot' + side, knee, 0, -sn, 0);
    const loose = outfit === 'salwar' ? 1.18 : outfit === 'kurta' ? 1.06 : 1;
    R.add(hip, limb(0.078 * tw * loose, 0.058 * tw * loose, th), botC);
    R.add(knee, ell(0.057 * tw * loose, 0.052, 0.057 * tw * loose, 0), shorts ? skinC : botC);
    if (shorts) { R.add(hip, limb(0.075 * tw, 0.068 * tw, th * 0.6), botC); R.add(knee, limb(0.046 * tw, 0.034 * tw, sn), skinC); }
    else {
      R.add(knee, limb(0.054 * tw * loose, (outfit === 'salwar' ? 0.038 : 0.045) * tw, sn - 0.02), botC);
      if (outfit === 'salwar') R.add(knee, limb(0.036 * tw, 0.04 * tw, 0.04), shade(botC, 0.85), { y: -sn + 0.05 });   // gathered ankle
    }
    // foot in a chappal: skin wedge on a thin sole
    R.add(foot, ell(0.034 * k + 0.01, 0.026, 0.09 * k + 0.02, 0), skinC, { y: -0.02, z: 0.04 });
    R.add(foot, box(0.075 * k + 0.02, 0.016, 0.22 * k + 0.05), shoeC, { y: -0.045, z: 0.045 });
  });

  const mesh = R.build(material || personMaterial());
  mesh.boundingSphere = new THREE.Sphere(new THREE.Vector3(0, 0.9 * k, 0), 1.25 * k + 0.2);
  const g = new THREE.Group(); g.add(mesh);
  g.scale.setScalar(scale);
  g.userData = { J: R.J, mesh, t0: (seed * 1.37) % 10 + Math.random() * 3, work: 1, mode: 'stand', hipY, k, look: 0, lookPitch: 0 };
  return g;
}

// ---------- poses & motion (the figure faces local +z) ----------
export function poseSit(p, seatH) {
  const { J } = p.userData;
  p.userData.mode = 'sit';
  J.hips.position.y = seatH / p.scale.y;
  J.hipL.rotation.set(-1.45, 0, 0.08); J.hipR.rotation.set(-1.45, 0, -0.08);
  J.kneeL.rotation.x = 1.5; J.kneeR.rotation.x = 1.5;
  J.footL.rotation.x = 0; J.footR.rotation.x = 0;
  J.skirt.rotation.x = -1.1; J.skirt.scale.set(1, 0.85, 1);
}
// seated legs that actually reach something (a treadle, the floor): search the hip and knee angles
// that bring the ankle closest to the target without going below minY (no feet sunk into the floor)
const _fv = new THREE.Vector3();
export function fitSitLegs(p, target, minY = 0.08) {
  const J = p.userData.J; let best = null, bestD = Infinity;
  p.updateMatrixWorld(true);
  for (let hip = -1.75; hip <= -0.85; hip += 0.05) for (let knee = 0.1; knee <= 1.75; knee += 0.05) {
    J.hipL.rotation.x = hip; J.kneeL.rotation.x = knee; J.hipL.updateMatrixWorld(true);
    J.footL.getWorldPosition(_fv);
    if (_fv.y < minY) continue;
    const d = Math.hypot(_fv.x - target.x, (_fv.y - target.y) * 1.5, _fv.z - target.z);
    if (d < bestD) { bestD = d; best = [hip, knee]; }
  }
  if (!best) best = [-1.45, 0.9];
  p.userData.hipBase = best[0]; p.userData.kneeBase = best[1];
  J.hipL.rotation.x = J.hipR.rotation.x = best[0]; J.kneeL.rotation.x = J.kneeR.rotation.x = best[1];
  p.updateMatrixWorld(true);
  return bestD;
}
export function poseStand(p) {
  const { J, hipY } = p.userData;
  p.userData.mode = 'stand';
  J.hips.position.y = hipY;
  ['hipL', 'hipR', 'kneeL', 'kneeR', 'footL', 'footR', 'skirt'].forEach(n => J[n].rotation.set(0, 0, 0));
  J.skirt.scale.set(1, 1, 1);
}
// sewing at a machine: hands guide cloth on the bed in front, the treadle foot pumps
export function animateSew(p, t, dt, speed = 1) {
  const u = p.userData, J = u.J, T = t + u.t0, w = u.work;
  const pump = Math.sin(T * 9) * 0.12 * w * speed;
  J.spine.rotation.x = 0.3 * w + 0.03 * Math.sin(T * 0.7);
  J.neck.rotation.x = 0.32 * w + 0.05 * Math.sin(T * 0.4);
  const glance = Math.max(0, Math.sin(T * 0.23 + u.t0)) ** 12;
  J.head.rotation.y = damp(J.head.rotation.y, (glance * 0.9 * Math.sign(Math.sin(u.t0 * 3))) + u.look, 3, dt);
  J.head.rotation.x = damp(J.head.rotation.x, -glance * 0.4 + u.lookPitch, 3, dt);
  const slide = Math.sin(T * 1.6) * 0.08 * w;
  J.shL.rotation.set(-0.95 * w - 0.2 - slide, 0, 0.16); J.shR.rotation.set(-0.95 * w - 0.2 + slide, 0, -0.16);
  J.elL.rotation.set(-0.9 * w - 0.3, 0, 0); J.elR.rotation.set(-0.9 * w - 0.3, 0, 0);
  J.handL.rotation.x = 0.5 * w; J.handR.rotation.x = 0.5 * w;
  const kb = u.kneeBase ?? 1.5;
  J.kneeL.rotation.x = kb + pump; J.kneeR.rotation.x = kb - pump;
  J.footL.rotation.x = pump * 1.5; J.footR.rotation.x = -pump * 1.5;
  // tired breathing: shoulders rise and fall
  const br = Math.sin(T * 1.5);
  J.spine.scale.set(1 + 0.012 * br, 1, 1 + 0.01 * br);
  J.shL.position.y = J.shR.position.y = (0.43 * u.k) + 0.004 * br;
}
export function animateWalk(p, phase, amt = 1) {
  const J = p.userData.J, s = Math.sin(phase), c = Math.cos(phase);
  J.hipL.rotation.x = s * 0.5 * amt; J.hipR.rotation.x = -s * 0.5 * amt;
  J.kneeL.rotation.x = Math.max(0, -c) * 0.75 * amt; J.kneeR.rotation.x = Math.max(0, c) * 0.75 * amt;
  J.footL.rotation.x = -Math.max(0, s) * 0.2 * amt; J.footR.rotation.x = -Math.max(0, -s) * 0.2 * amt;
  J.shL.rotation.x = -s * 0.38 * amt; J.shR.rotation.x = s * 0.38 * amt;
  J.shL.rotation.z = -0.06; J.shR.rotation.z = 0.06;
  J.elL.rotation.x = -0.25 - Math.max(0, s) * 0.2; J.elR.rotation.x = -0.25 - Math.max(0, -s) * 0.2;
  J.hips.position.y = p.userData.hipY + Math.abs(c) * 0.022 * amt;
  J.hips.rotation.y = s * 0.06 * amt; J.spine.rotation.y = -s * 0.1 * amt;
  J.skirt.rotation.x = Math.abs(s) * 0.1 * amt;
}
export function animateIdle(p, t, dt) {
  const u = p.userData, J = u.J, T = t + u.t0;
  J.spine.rotation.x = 0.04 + 0.012 * Math.sin(T * 1.3);
  const br = Math.sin(T * 1.5);
  J.spine.scale.set(1 + 0.014 * br, 1, 1 + 0.01 * br);
  J.hips.rotation.z = 0.02 * Math.sin(T * 0.21);                 // weight shifts from foot to foot
  J.head.rotation.y = damp(J.head.rotation.y, u.look, 4, dt);
  J.head.rotation.x = damp(J.head.rotation.x, u.lookPitch, 4, dt);
}

// =====================================================================================
// First-person hand: a floating, chunky low-poly hand with a short forearm and a kurta cuff
// (How to Fish shows hands the same way, which also suits VR controllers).
// Local frame: wrist at the origin, fingers point -Z, palm faces -Y.
// side: -1 = left, +1 = right.
// =====================================================================================
const FINGERS = [   // [x across the palm (thumb side negative for the right hand), base z, len1, len2, radius]
  [-0.0225, -0.062, 0.031, 0.027, 0.0094],   // index
  [-0.0072, -0.066, 0.034, 0.029, 0.0098],   // middle
  [0.0085, -0.064, 0.032, 0.027, 0.0094],    // ring
  [0.0235, -0.058, 0.025, 0.022, 0.0084],    // little
];
export const HAND_SCALE = 1.3;   // a touch larger than life, as first-person hands always are
export function makeFPHand(side, { skin = 0x8a5a3c, sleeve = 0x7d8794 } = {}) {
  const R = new Rig(side > 0 ? 5 : 9);
  const s = side;          // mirror x for the left hand
  const wrist = R.bone('wrist', null);
  // forearm stub and sleeve cuff (open end hidden inside the cuff)
  // a short wrist that ends cleanly (How to Fish hands float without arms)
  // the wrist; the forearm is a separate piece aimed at the shoulder (see fp.js)
  R.add(wrist, new THREE.CylinderGeometry(0.0235, 0.0225, 0.04, 7).rotateX(Math.PI / 2).rotateZ(Math.PI / 7), skin, { z: 0.012, sx: 1.18, jitter: 0.02 });
  // palm: a chunky faceted block, thicker at the heel
  // palm: one faceted block, a little thicker at the heel and narrower at the knuckles
  const palm = new THREE.BoxGeometry(0.066, 0.025, 0.066);
  { const p = palm.attributes.position; for (let i = 0; i < p.count; i++) { const z = p.getZ(i); if (z > 0) { p.setY(i, p.getY(i) * 1.2); p.setX(i, p.getX(i) * 0.94); } else p.setX(i, p.getX(i) * 0.98); } }
  R.add(wrist, palm, skin, { z: -0.03, jitter: 0.03 });
  R.add(wrist, ell(0.024, 0.013, 0.024, 0), skin, { x: s * -0.016, y: -0.007, z: -0.014 });   // ball of the thumb
  // fingers: two clean faceted segments each; each segment reaches a little past its joint so a
  // bend never opens a gap (no knuckle balls, no nails — the How to Fish way)
  const seg = (r0, r1, len, back) => new THREE.CylinderGeometry(r1, r0, len + back, 5).rotateX(Math.PI / 2).rotateZ(Math.PI / 5).translate(0, 0, -(len - back) / 2);
  FINGERS.forEach(([fx, fz, l1, l2, r], i) => {
    const a = R.bone('f' + i + 'a', wrist, s * fx, 0.001, fz);
    const b2 = R.bone('f' + i + 'b', a, 0, 0, -l1);
    R.add(a, seg(r * 1.05, r * 0.98, l1, r * 0.9), skin, { sy: 0.88 });
    R.add(b2, seg(r * 0.98, r * 0.8, l2, r * 0.7), skin, { sy: 0.88 });
    R.add(b2, new THREE.ConeGeometry(r * 0.8, r * 0.9, 5).rotateX(-Math.PI / 2).rotateZ(Math.PI / 5), skin, { z: -l2 - r * 0.42, sy: 0.88 });   // blunt tip
  });
  // thumb: comes out of the heel of the palm, angled forward and inward
  const t0 = R.bone('t0', wrist, s * -0.029, -0.011, -0.02);
  t0.rotation.set(-0.35, s * 0.62, s * 0.5);
  const t1 = R.bone('t1', t0, 0, 0, -0.026);
  R.add(t0, seg(0.0112, 0.0102, 0.026, 0.012), skin, { sy: 0.9 });
  R.add(t1, seg(0.0102, 0.0088, 0.02, 0.008), skin, { sy: 0.9 });
  R.add(t1, new THREE.ConeGeometry(0.0088, 0.009, 5).rotateX(-Math.PI / 2).rotateZ(Math.PI / 5), skin, { z: -0.024, sy: 0.9 });
  const mesh = R.build(personMaterial('hand'));
  mesh.scale.setScalar(HAND_SCALE);
  mesh.boundingSphere = new THREE.Sphere(new THREE.Vector3(0, 0, 0), 0.3);
  mesh.userData = { J: R.J, side, thumbBase: t0.rotation.clone() };
  mesh.renderOrder = 2;
  return mesh;
}
// curl: [index, middle, ring, little, thumb] each 0 (straight) … 1 (closed)
export const HAND_POSES = {
  relax: [0.28, 0.32, 0.36, 0.42, 0.2],
  flat: [0.05, 0.05, 0.06, 0.08, 0.05],
  grip: [0.9, 0.92, 0.94, 0.95, 0.65],
  pinch: [0.55, 0.45, 0.6, 0.7, 0.55],
  cup: [0.32, 0.3, 0.3, 0.32, 0.15],
  point: [0.02, 0.9, 0.94, 0.95, 0.6],
  fist: [1, 1, 1, 1, 0.9],
  pray: [0.12, 0.1, 0.1, 0.13, 0.08],   // palms together, a little hollow between them
};
export function applyHandCurl(mesh, c) {
  const J = mesh.userData.J, s = mesh.userData.side, tb = mesh.userData.thumbBase;
  for (let i = 0; i < 4; i++) {
    J['f' + i + 'a'].rotation.set(-c[i] * 1.35, 0, 0);
    J['f' + i + 'b'].rotation.set(-c[i] * 1.5, 0, 0);
  }
  J.t0.rotation.set(tb.x - c[4] * 0.35, tb.y - s * c[4] * 0.5, tb.z - s * c[4] * 0.25);
  J.t1.rotation.set(-c[4] * 0.9, 0, 0);
}

// ---------- floor poses ----------
// sitting on the ground, knees up (children begging, the vegetable seller, the mother at the stove)
export function poseFloor(p, { hug = false } = {}) {
  const { J, k } = p.userData;
  p.userData.mode = 'floor';
  J.hips.position.y = 0.12 * k;
  J.hipL.rotation.set(-2.05, 0, 0.22); J.hipR.rotation.set(-2.05, 0, -0.22);
  J.kneeL.rotation.set(2.25, 0, 0); J.kneeR.rotation.set(2.25, 0, 0);
  J.footL.rotation.x = -0.2; J.footR.rotation.x = -0.2;
  J.skirt.rotation.x = -1.25; J.skirt.scale.set(1, 0.8, 1);
  J.spine.rotation.x = 0.18;
  if (hug) { J.shL.rotation.set(-1.0, 0, 0.35); J.shR.rotation.set(-1.0, 0, -0.35); J.elL.rotation.x = -1.3; J.elR.rotation.x = -1.3; }
}
// lying on one side, asleep (the little brother)
export function poseLie(p) {
  const { J } = p.userData;
  J.hipL.rotation.set(-0.5, 0, 0); J.hipR.rotation.set(-0.7, 0, 0); J.kneeL.rotation.x = 0.9; J.kneeR.rotation.x = 1.1;
  J.shL.rotation.set(-0.9, 0, 0); J.shR.rotation.set(-1.2, 0, 0); J.elL.rotation.x = -1.2; J.elR.rotation.x = -1.4;
  J.spine.rotation.x = 0.2; J.neck.rotation.x = 0.25;
}

// ---------- police (and the creatures they become) ----------
export function makePolice(i = 0) {
  const mat = personMaterial().clone();               // own material: it darkens in the nightmare
  const p = makePerson({ top: 0xa8935e, bottom: 0x8a7a4e, skin: [0x7a4c30, 0x6e4228][i % 2], mustache: true, outfit: 'shirt', sleeves: 'short', belly: 0.02 + i * 0.015, build: 1.06, seed: 70 + i, material: mat, scale: 1.34 });
  const J = p.userData.J;
  const g = (geo, m, parent, x, y, z) => { const o = new THREE.Mesh(geo, m); o.position.set(x, y, z); o.castShadow = true; parent.add(o); return o; };
  const capM = new THREE.MeshStandardMaterial({ color: 0x4a3c22, flatShading: true, roughness: 0.8 });
  const cap = g(new THREE.CylinderGeometry(0.095, 0.1, 0.07, 9), capM, J.head, 0, 0.19, -0.005); cap.scale.z = 1.1;
  const brim = g(new THREE.BoxGeometry(0.17, 0.01, 0.08), capM, J.head, 0, 0.16, 0.1);
  g(new THREE.BoxGeometry(0.3, 0.05, 0.22), new THREE.MeshStandardMaterial({ color: 0x2a1e14, roughness: 0.6 }), J.hips, 0, 0.02, 0);   // belt
  const lathi = g(new THREE.CylinderGeometry(0.012, 0.012, 1.0, 6), new THREE.MeshStandardMaterial({ color: 0x6a4a2a, flatShading: true }), J.handR, 0, -0.05, 0.02);
  lathi.rotation.x = 1.2;
  const eyeM = new THREE.MeshBasicMaterial({ color: new THREE.Color(3, 0.35, 0.12), fog: false });
  const eyes = [-1, 1].map(s => { const e = g(new THREE.SphereGeometry(0.014, 6, 5), eyeM, J.head, s * 0.031, 0.112, 0.095); e.scale.setScalar(0.001); return e; });
  const hornM = new THREE.MeshStandardMaterial({ color: 0x0a0806, flatShading: true });
  const horns = [-1, 1].map(s => { const h = g(new THREE.ConeGeometry(0.025, 0.2, 5), hornM, J.head, s * 0.06, 0.2, -0.02); h.rotation.z = -s * 0.5; h.scale.setScalar(0.001); return h; });
  p.userData.police = { mat, eyes, horns, cap, brim, base: p.scale.x, k: 0 };
  p.userData.stride = 0; p.userData.walk = 0;
  return p;
}
// 0 = a policeman, 1 = a tall dark creature with long arms and burning eyes
export function setMonster(p, k) {
  const u = p.userData.police; if (!u) return;
  u.k = k;
  u.mat.color.setRGB(1, 1, 1).lerp(new THREE.Color(0.1, 0.07, 0.08), k);
  const s = u.base;
  p.scale.set(s * (1 - 0.1 * k), s * (1 + 0.5 * k), s * (1 - 0.1 * k));
  const J = p.userData.J;
  J.shL.scale.set(1, 1 + 0.7 * k, 1); J.shR.scale.set(1, 1 + 0.7 * k, 1);
  u.eyes.forEach(e => e.scale.setScalar(Math.max(0.001, k)));
  u.horns.forEach(h => h.scale.setScalar(Math.max(0.001, k)));
  u.cap.visible = u.brim.visible = k < 0.5;
}

// ---------- passers-by ----------
const WALKER_LOOKS = [
  { top: 0xe0d8c8, bottom: 0x5a4a3a, outfit: 'kurta' }, { female: true, top: 0x2f6b4f, bottom: 0x2f6b4f, scarf: 0xc45a7a },
  { top: 0x5a6a7e, bottom: 0x2a2a30, outfit: 'shirt', sleeves: 'elbow' }, { female: true, top: 0xb5442e, bottom: 0x7a2a1e, scarf: 0xd9a22a },
  { top: 0xb8b09a, bottom: 0x4a4038, cap: true }, { female: true, top: 0x1f3a68, bottom: 0x1f3a68, scarf: 0xe9e1cf },
  { top: 0x8a5a3a, bottom: 0x3a3226, outfit: 'shirt', sleeves: 'short', belly: 0.03 }, { female: true, top: 0xd9a22a, bottom: 0x6a2a3a, scarf: 0x2f6b4f },
  { top: 0x6a7d9a, bottom: 0xe9e1cf, outfit: 'kurta', glasses: true }, { female: true, top: 0xc45a7a, bottom: 0x5a2a4a, scarf: 0xe9e1cf },
];
export function makeWalker(i) {
  const look = WALKER_LOOKS[i % WALKER_LOOKS.length];
  const p = makePerson({ ...look, skin: SKINS[(i * 3) % SKINS.length], build: 0.92 + (i % 4) * 0.06, seed: 100 + i, scale: 1.3 + (i % 3) * 0.03 });
  p.userData.stride = Math.random() * 6; p.userData.walk = 1;
  return p;
}
// walk cycle driven by stride (metres travelled); eases to standing when walk → 0
export function animateWalker(p, t, dt) {
  const u = p.userData;
  if (u.walk > 0.02) animateWalk(p, u.stride * 2.2, u.walk);
  else animateIdle(p, t, dt);
}
