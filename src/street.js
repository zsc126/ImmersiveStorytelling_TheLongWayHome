// SPACE 2 — THE LANE & THE MARKET
// Board notes: the only light source is the sun, dusty air, cramped houses and street. Walk the
// street, try to sell fabric, hold out a hand to beg, count coins at a food stall and find you
// cannot buy a meal. Three failed attempts build the pressure that leads to the decision to steal.
// Same beats and lines as v0.4; everything rebuilt for V2 (people, hands, light, detail).
import * as THREE from 'three';
import * as TX from './tex.js';
import { M, G, Batcher, slab, ease, lerp, damp, clamp } from './kit.js';
import { makePerson, makeWalker, animateWalker, animateIdle, poseFloor } from './people.js';
import { GRIP } from './fp.js';
import { T, texMat, cityBlock, stall, wires, clothLine, rand } from './city.js';

const CROWD_STEPS = 0;   // passers-by footstep volume: 0 = silent (V3.1)
export const ALLEY = { x0: 8, x1: 22, z0: 2.4, z1: 5.4, bx1: 19.3 };
export const MARKET = { x0: 22, x1: 40, z0: -4, z1: 12, exitZ0: 7, exitZ1: 9.6 };
const BEG = { x: 36.6, z: 11.2 };

export function buildStreet(ctx) {
  // begging: two hands held out like a bowl for water — palms up, fingers forward, each palm tipped a
  // little toward the other (little fingers low and close, thumbs out); close together but not touching
  // (each hand keeps its own position vector: a shared scratch vector made both hands land in the same
  // place — the crossed, overlapping fingers — and later drift off wherever the scratch was reused)
  const CUP_POS = [new THREE.Vector3(-0.068, -0.25, -0.33), new THREE.Vector3(0.068, -0.25, -0.33)];
  const LAP_POS = [new THREE.Vector3(-0.12, -0.42, -0.3), new THREE.Vector3(0.12, -0.42, -0.3)];
  const LAP_ROT = [-1, 1].map(sd => new THREE.Euler(-0.6, -sd * 0.25, sd * (Math.PI - 0.9), 'YXZ'));
  const CUP_ROT = [-1, 1].map(sd => {
    const F = new THREE.Vector3(0, Math.sin(0.22), -Math.cos(0.22));                 // fingers (hand -z): forward, a little up
    const N = new THREE.Vector3(-sd * 0.36, 0.93, 0); N.addScaledVector(F, -N.dot(F)).normalize();   // palm (hand -y): up, tipped inward
    const z = F.clone().negate(), y = N.clone().negate(), x = new THREE.Vector3().crossVectors(y, z);
    return new THREE.Euler().setFromRotationMatrix(new THREE.Matrix4().makeBasis(x, y, z), 'YXZ');
  });
  const { scene, audio, interactor, player, ui, thread, hands, bagCtl, lights, police, pursuit, camera } = ctx;
  const root = new THREE.Group(); root.name = 'street'; scene.add(root);
  const colliders = [];
  const B = new Batcher();                       // everything static, merged
  const fabM = [0, 1, 2, 3, 4, 5].map(i => new THREE.MeshStandardMaterial({ map: TX.fabric(['buti', 'stripe', 'check', 'paisley', 'border', 'buti'][i], i, 128), side: THREE.DoubleSide, roughness: 0.95 }));
  const dirtM = (rx, ry) => { const t = T.dirt().clone(); t.needsUpdate = true; t.repeat.set(rx, ry); return new THREE.MeshStandardMaterial({ map: t, roughness: 1 }); };
  const cloths = [];

  // ============ THE LANE (from the factory door to the market) ============
  const A = ALLEY, len = A.x1 - A.x0, azc = (A.z0 + A.z1) / 2;
  const laneGround = new THREE.Mesh(new THREE.PlaneGeometry(len, A.z1 - A.z0 + 0.4), dirtM(len / 3, 1.2));
  laneGround.rotation.x = -Math.PI / 2; laneGround.position.set(A.x0 + len / 2, 0, azc); laneGround.receiveShadow = true; root.add(laneGround);
  B.add(G.box(len, 0.02, 0.28), M(0x3a3026, { roughness: 0.35 }), A.x0 + len / 2, 0.006, A.z1 - 0.22);                  // drain
  B.add(G.box(len, 0.06, 0.06), M(0x6a6258, { roughness: 0.9 }), A.x0 + len / 2, 0.03, A.z1 - 0.38);                   // drain kerb
  // the factory seen from outside: a plain wall with the doorway
  const facM = new THREE.MeshStandardMaterial({ map: (() => { const t = new THREE.CanvasTexture(T.facade('#8a8476')); t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(1, 2); return t; })(), roughness: 0.95, flatShading: true });
  const fw = (z0, z1, y0, y1) => { const m = new THREE.Mesh(new THREE.PlaneGeometry(z1 - z0, y1 - y0), facM); m.position.set(A.x0 + 0.02, (y0 + y1) / 2, (z0 + z1) / 2); m.rotation.y = Math.PI / 2; m.receiveShadow = true; root.add(m); };
  fw(A.z0 - 0.1, 3.2, 0, 8); fw(4.6, A.z1 + 0.1, 0, 8); fw(3.2, 4.6, 2.6, 8);
  // houses on both sides of the lane
  const laneCols = ['#b9a27f', '#8fa3a0', '#c29a8e', '#a9a17a', '#9aa0b4', '#b48c6a', '#a6b08e'];
  colliders.push(cityBlock(root, A.x0 + 0.05, A.bx1, A.z0 - 4, A.z0, { colours: laneCols, hMin: 6, hMax: 10, face: '+z', batch: B, cloths }));
  colliders.push(cityBlock(root, A.x0 + 0.05, A.bx1, A.z1, A.z1 + 4, { colours: laneCols, hMin: 6, hMax: 10, face: '-z', batch: B, cloths }));
  // overhead tangle of wires
  const wl = [];
  for (let k = 0; k < 24; k++) { const xa = A.x0 + 1 + rand() * (len - 2), y = 3.8 + rand() * 3; wl.push([new THREE.Vector3(xa, y, A.z0), new THREE.Vector3(xa + (rand() - 0.5) * 4, y + (rand() - 0.5), A.z1), 0.2 + rand() * 0.5, 0.012]); }
  for (let k = 0; k < 6; k++) { const z = A.z0 + 0.25 + rand() * (A.z1 - A.z0 - 0.5), y = 4 + rand() * 2; wl.push([new THREE.Vector3(A.x0 + 0.2, y, z), new THREE.Vector3(A.x0 + 6 + rand() * 8, y, z), 0.5, 0.01]); }
  wires(root, wl);
  // laundry across the lane
  const lines = [[10.2, 3.3], [14.6, 3.6], [17.8, 3.2]].flatMap(([lx, y]) => clothLine(root, new THREE.Vector3(lx, y, A.z0 + 0.1), new THREE.Vector3(lx + 0.5, y, A.z1 - 0.1), fabM, 4));
  // a bicycle leaning on the wall (from the Space 2 sketch)
  {
    const g = new THREE.Group(); g.position.set(11.6, 0, A.z1 - 0.22); g.rotation.z = 0.1; root.add(g);
    const st = M(0x2a2a2a, { metalness: 0.6, roughness: 0.45 }), bb = new Batcher();
    [-0.5, 0.5].forEach(bx => { bb.add(new THREE.TorusGeometry(0.33, 0.02, 6, 22), st, bx, 0.35, 0); bb.add(new THREE.TorusGeometry(0.31, 0.008, 4, 12), M(0x111111), bx, 0.35, 0); });
    const bar = (a, b) => { const v = b.clone().sub(a), q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), v.clone().normalize()); const e = new THREE.Euler().setFromQuaternion(q); const c = a.clone().add(b).multiplyScalar(0.5); bb.add(G.cyl(0.015, 0.015, v.length(), 5), st, c.x, c.y, c.z, e.x, e.y, e.z); };
    const V = (x, y) => new THREE.Vector3(x, y, 0);
    bar(V(-0.5, 0.35), V(0, 0.35)); bar(V(0, 0.35), V(0.35, 0.8)); bar(V(-0.5, 0.35), V(-0.15, 0.8)); bar(V(-0.15, 0.8), V(0.35, 0.8)); bar(V(0, 0.35), V(-0.15, 0.8)); bar(V(0.5, 0.35), V(0.38, 0.95));
    bb.add(G.box(0.04, 0.02, 0.45), st, 0.4, 0.97, 0); bb.add(slab(0.18, 0.08, 0.04, 0.02), M(0x3a2418), -0.17, 0.83, 0);
    bb.build(g); colliders.push({ minX: 10.9, maxX: 12.3, minZ: A.z1 - 0.5, maxZ: A.z1 });
  }
  // clutter: sacks, a blue bucket by a hand pump, boxes
  const sackGeo = new THREE.LatheGeometry([[0.001, 0], [0.26, 0.02], [0.3, 0.2], [0.28, 0.45], [0.18, 0.62], [0.07, 0.68], [0.001, 0.7]].map(([r, y]) => new THREE.Vector2(r, y)), 8);
  const jute = M(0xb0a080, { flatShading: true, roughness: 1 });
  [[9.0, A.z0 + 0.35, 1], [9.5, A.z0 + 0.3, 0.8], [15.2, A.z1 - 0.35, 0.9]].forEach(([x, z, s]) => B.add(sackGeo, jute, x, 0, z, 0.05, rand() * 6, 0, s, s * (0.9 + rand() * 0.2), s));
  B.add(G.cyl(0.18, 0.14, 0.32, 12), M(0x2a6a9a, { roughness: 0.5 }), 13.4, 0.16, A.z0 + 0.3);
  B.add(G.cyl(0.04, 0.05, 0.9, 8), M(0x3a4a42, { metalness: 0.5, roughness: 0.5 }), 13.9, 0.45, A.z0 + 0.2);             // hand pump
  B.add(G.box(0.35, 0.06, 0.06), M(0x3a4a42, { metalness: 0.5 }), 13.9, 0.92, A.z0 + 0.3, 0, 0, -0.3);
  B.add(G.box(0.5, 0.35, 0.4), texMat(T.cardboard()), 14.6, 0.18, A.z0 + 0.32); B.add(G.box(0.4, 0.3, 0.35), texMat(T.cardboard()), 14.65, 0.5, A.z0 + 0.3, 0, 0.3, 0);
  colliders.push({ minX: 8.6, maxX: 10.0, minZ: A.z0, maxZ: A.z0 + 0.75 }, { minX: 13.1, maxX: 15.0, minZ: A.z0, maxZ: A.z0 + 0.6 });
  // a bare bulb over a doorway (a pooled light)
  B.add(G.cyl(0.004, 0.004, 0.4, 4), M(0x111111), 12.4, 3.1, A.z0 + 0.3);
  const laneBulb = new THREE.Mesh(new THREE.SphereGeometry(0.05, 10, 8), new THREE.MeshBasicMaterial({ color: new THREE.Color(1, 0.8, 0.5).multiplyScalar(3) })); laneBulb.position.set(12.4, 2.88, A.z0 + 0.3); root.add(laneBulb);
  lights.add({ pos: new THREE.Vector3(12.4, 2.75, A.z0 + 0.5), color: 0xffb066, intensity: 4, distance: 6, space: 'street' });

  // ============ THE MARKET SQUARE ============
  const { x0, x1, z0, z1 } = MARKET, mx = (x0 + x1) / 2, mz = (z0 + z1) / 2;
  const sq = new THREE.Mesh(new THREE.PlaneGeometry(x1 - x0 + 0.2, z1 - z0 + 0.2), dirtM(6, 5)); sq.rotation.x = -Math.PI / 2; sq.position.set(mx, 0, mz); sq.receiveShadow = true; root.add(sq);
  // where the square overlaps the lane and the nightmare's first alley, the square always yields (no z-fighting shimmer at the joins)
  sq.material = sq.material.clone(); Object.assign(sq.material, { polygonOffset: true, polygonOffsetFactor: 2, polygonOffsetUnits: 4 });
  const cols = ['#c9b48a', '#b8a0a0', '#a8b8a8', '#c8a878', '#b0a8c0', '#c0906a', '#d0c098', '#9ab0b8'];
  colliders.push(
    cityBlock(root, A.bx1, x0, -8, A.z0, { colours: cols, face: '+x', batch: B, cloths }),
    cityBlock(root, A.bx1, x0, A.z1, 16, { colours: cols, face: '+x', batch: B, cloths }),
    cityBlock(root, x0, x1, z1, 16, { colours: cols, face: '-z', batch: B, cloths }),
    cityBlock(root, x0, x1, -8, z0, { colours: cols, face: '+z', batch: B, cloths }),
  );
  // wires and paper bunting across the square
  const mw = [];
  for (let k = 0; k < 16; k++) { const xa = x0 + rand() * (x1 - x0); mw.push([new THREE.Vector3(xa, 5 + rand() * 2, z0), new THREE.Vector3(xa + (rand() - 0.5) * 8, 5 + rand() * 2, z1), 0.6 + rand(), 0.014]); }
  wires(root, mw);
  {
    const flagGeo = new THREE.BufferGeometry().setAttribute('position', new THREE.Float32BufferAttribute([-0.12, 0, 0, 0.12, 0, 0, 0, -0.28, 0], 3)); flagGeo.computeVertexNormals();
    const fb = new Batcher(), flagCols = [0xd9a22a, 0xb5442e, 0x2f6b4f, 0xe9e1cf, 0x2c5a9a, 0xc45a7a];
    [[[23, 4.2, -1], [39, 4.6, 6]], [[24, 4.4, 11.5], [38.5, 4.0, 2]]].forEach(([a, b]) => {
      const pa = new THREE.Vector3(...a), pb = new THREE.Vector3(...b); mw.length = 0;
      wires(root, [[pa, pb, 0.8, 0.006]]);
      for (let k = 1; k < 26; k++) { const t = k / 26, p = pa.clone().lerp(pb, t); p.y -= 0.8 * 4 * t * (1 - t); fb.add(flagGeo, M(flagCols[k % 6], { side: THREE.DoubleSide, roughness: 1 }), p.x, p.y, p.z, 0, Math.atan2(pb.x - pa.x, pb.z - pa.z) + Math.PI / 2, 0); }
    });
    fb.build(root, { cast: true, receive: false });
  }

  // ---- the food stall (south side) ----
  const food = stall(root, 31, -2.3, 0, { tarp: 1 });
  colliders.push({ minX: 29.7, maxX: 32.3, minZ: -3.6, maxZ: -1.75 });
  const fsb = new Batcher();
  fsb.add(G.cyl(0.3, 0.24, 0.32, 16), M(0x6a6a68, { metalness: 0.6, roughness: 0.4 }), 0.6, 1.1, -0.15);                 // pot
  fsb.add(G.cyl(0.32, 0.32, 0.03, 16), M(0x4a4a48, { metalness: 0.6, roughness: 0.4 }), 0.6, 0.94, -0.15);
  fsb.add(G.cyl(0.35, 0.3, 0.05, 14), M(0x2a2420, { metalness: 0.4 }), -0.5, 0.95, -0.15);                                // tawa
  for (let k = 0; k < 10; k++) fsb.add(G.cyl(0.12, 0.12, 0.012, 14), M(0xd8a868, { roughness: 0.9 }), -0.55 + (rand() - 0.5) * 0.02, 0.96 + k * 0.013, 0.22);   // stack of rotis
  for (let k = 0; k < 6; k++) fsb.add(new THREE.TetrahedronGeometry(0.06), M(0xc8902a, { flatShading: true }), -0.05 + (k % 3) * 0.12, 0.97, 0.25 + Math.floor(k / 3) * 0.1, rand(), rand(), rand());
  for (let k = 0; k < 4; k++) fsb.add(G.cyl(0.07, 0.05, 0.05, 10), M(0xc0c0bc, { metalness: 0.85, roughness: 0.25 }), 0.2 + k * 0.15, 0.95, 0.35);   // steel bowls
  fsb.build(food);
  const board = new THREE.Mesh(new THREE.PlaneGeometry(0.9, 0.45), texMat(T.price())); board.position.set(0, 2.03, 1.0); board.rotation.x = -0.08; food.add(board);   // hangs just in front of the tarp's edge (it used to cut through the top line)
  [-0.38, 0.38].forEach(bx => { const c = new THREE.Mesh(G.cyl(0.004, 0.004, 0.1, 4), M(0x2a2018)); c.position.set(bx, 2.3, 0.98); food.add(c); });
  const parcel = new THREE.Group(); parcel.position.set(0.05, 0.94, 0.35); food.add(parcel);
  const parcelMat = new THREE.MeshStandardMaterial({ color: 0xd8b070, roughness: 0.8, emissive: 0xff9a30, emissiveIntensity: 0 });
  const pm = new THREE.Mesh(slab(0.24, 0.18, 0.1, 0.03, 0.01), parcelMat); pm.castShadow = true; parcel.add(pm);
  const steamMat = new THREE.SpriteMaterial({ map: T.dot(), color: 0xffffff, transparent: true, opacity: 0.12, depthWrite: false });
  const steam = Array.from({ length: 6 }, (_, k) => { const sp = new THREE.Sprite(steamMat.clone()); sp.position.set(0.6, 1.3 + k * 0.15, -0.15); sp.scale.setScalar(0.3); food.add(sp); return sp; });
  lights.add({ pos: new THREE.Vector3(31, 2.2, -2.0), color: 0xffb066, intensity: 3, distance: 6, space: 'street' });
  B.add(G.cyl(0.004, 0.004, 0.3, 4), M(0x111111), 31, 2.42, -2.0);
  const fbulb = new THREE.Mesh(new THREE.SphereGeometry(0.05, 10, 8), laneBulb.material); fbulb.position.set(31, 2.27, -2.0); root.add(fbulb);
  const vendor = makePerson({ top: 0xe0d8c8, bottom: 0x5a4a3a, skin: 0x6b4630, outfit: 'kurta', cap: true, mustache: true, seed: 201, scale: 1.3 });
  vendor.position.set(31, 0, -3.25); root.add(vendor);
  const counterSpot = new THREE.Vector3(31, 1.0, -1.55);
  const counted = [0, 1, 2].map(() => { const c = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.022, 0.006, 14), M(0xc8a040, { metalness: 0.9, roughness: 0.3 })); c.visible = false; root.add(c); return c; });

  // ---- the tailor (north side) ----
  const tailor = stall(root, 28, 10.6, Math.PI, { tarp: 2 });
  colliders.push({ minX: 26.7, maxX: 29.3, minZ: 9.9, maxZ: 12 });
  clothLine(tailor, new THREE.Vector3(-1.1, 2.1, -0.75), new THREE.Vector3(1.1, 2.1, -0.75), fabM, 6).forEach(c => cloths.push({ piv: c }));
  { const tb = new Batcher(); const en = M(0x111111, { roughness: 0.3, metalness: 0.35 });
    tb.add(G.box(0.5, 0.05, 0.25), en, 0.5, 0.97, 0); tb.add(G.box(0.4, 0.08, 0.1), en, 0.5, 1.2, 0); tb.add(G.box(0.08, 0.25, 0.12), en, 0.68, 1.08, 0);
    for (let k = 0; k < 5; k++) tb.add(G.box(0.36, 0.03, 0.28), fabM[k], -0.5, 0.94 + k * 0.03, 0.05, 0, rand() * 0.3, 0);
    tb.build(tailor); }
  const tailorMan = makePerson({ top: 0x8a9aa8, bottom: 0x3a3a40, skin: 0x7a5236, outfit: 'shirt', sleeves: 'elbow', glasses: true, seed: 202, scale: 1.3 });
  tailorMan.position.set(28, 0, 11.45); tailorMan.rotation.y = Math.PI; root.add(tailorMan);

  // ---- chai stall, fruit cart, vegetable seller, scrap heap, the begging spot ----
  stall(root, 25.5, -2.6, 0, { w: 1.6, tarp: 0 });
  colliders.push({ minX: 24.6, maxX: 26.4, minZ: -3.7, maxZ: -2 });
  B.add(G.cyl(0.12, 0.1, 0.22, 12), M(0x8a6a3a, { metalness: 0.6, roughness: 0.4 }), 25.2, 1.03, -2.5);                  // chai kettle
  for (let k = 0; k < 6; k++) B.add(G.cyl(0.025, 0.022, 0.07, 8), M(0xd8c8a8, { roughness: 0.3 }), 25.6 + (k % 3) * 0.08, 0.96, -2.3 + Math.floor(k / 3) * 0.08);
  lights.add({ pos: new THREE.Vector3(25.5, 2.25, -2.4), color: 0xffb066, intensity: 2.6, distance: 5, space: 'street' });
  const chaiMan = makePerson({ top: 0x6a5a4a, bottom: 0xe9e1cf, outfit: 'kurta', skin: 0x6e4228, seed: 203, scale: 1.3 }); chaiMan.position.set(25.5, 0, -3.3); root.add(chaiMan);
  {
    const g = new THREE.Group(); g.position.set(36.6, 0, -2.6); g.rotation.y = 0.15; root.add(g);   // by the south wall: clear of the run from the stall to the lane
    const cb = new Batcher(); cb.add(G.box(1.8, 0.1, 0.9), texMat(T.plywood()), 0, 0.8, 0); [-0.6, 0.6].forEach(cx => cb.add(new THREE.TorusGeometry(0.35, 0.045, 6, 18), M(0x2a2a2a), cx, 0.35, 0.48));
    cb.add(G.box(0.05, 0.05, 1.2), M(0x3a2a1a), -1.2, 0.75, 0, 0, 0, 0.3); cb.add(G.box(0.05, 0.05, 1.2), M(0x3a2a1a), -1.2, 0.75, 0, 0, 0, 0.3);
    for (let k = 0; k < 30; k++) cb.add(new THREE.IcosahedronGeometry(0.07, 0), M([0xe8a020, 0x6a9a2a, 0xd84a20][k % 3], { flatShading: true }), -0.75 + (k % 10) * 0.16, 0.92 + Math.floor(k / 10) * 0.06, -0.3 + Math.floor(k / 10) * 0.22);
    cb.build(g, { cast: true }); colliders.push({ minX: 35.5, maxX: 37.7, minZ: -3.35, maxZ: -1.85 });
  }
  const vmat = new THREE.Mesh(new THREE.PlaneGeometry(2, 1.4), fabM[2]); vmat.rotation.x = -Math.PI / 2; vmat.position.set(29, 0.008, 5.6); vmat.receiveShadow = true; root.add(vmat);
  for (let k = 0; k < 16; k++) B.add(new THREE.IcosahedronGeometry(0.07, 0), M([0xb0302a, 0x4a8a2a, 0xd8c8a0, 0x7a3a8a][k % 4], { flatShading: true }), 28.25 + (k % 8) * 0.2, 0.06, 5.3 + Math.floor(k / 8) * 0.5);
  const seller = makePerson({ female: true, top: 0x7a2f3a, bottom: 0x9a4a3a, scarf: 0xd9a22a, skin: 0x6b4630, seed: 204, scale: 1.25 });
  poseFloor(seller); seller.position.set(29, 0, 6.55); seller.rotation.y = Math.PI; root.add(seller);
  // scrap heap by the wall: cloth thrown out by the factories
  const heap = new THREE.Group(); heap.position.set(23.2, 0, -3.3); root.add(heap);
  { const hb = new Batcher(); for (let k = 0; k < 14; k++) hb.add(G.box(0.3 + rand() * 0.3, 0.04, 0.25), fabM[k % 6], (rand() - 0.5) * 0.9, 0.04 + k * 0.03, (rand() - 0.5) * 0.5, rand() * 0.4, rand() * 3, rand() * 0.4);
    hb.add(sackGeo, jute, 0.6, 0, 0.2, 0, 1, 0, 0.8, 0.8, 0.8); hb.build(heap); }
  colliders.push({ minX: 22.4, maxX: 24.0, minZ: -3.9, maxZ: -2.8 });
  const carton = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.02, 0.6), texMat(T.cardboard())); carton.position.set(BEG.x, 0.012, BEG.z); carton.receiveShadow = true; root.add(carton);
  const kids = [[BEG.x - 1.2, 0.2], [BEG.x + 1.15, -0.3]].map(([kx, ry], i) => {
    const k = makePerson({ child: true, female: i === 1, top: i ? 0x6a5a6a : 0x5a5a4a, bottom: 0x3a3a3a, skin: 0x5a3a26, seed: 210 + i, scale: 1.3 });
    poseFloor(k, { hug: i === 0 }); k.position.set(kx, 0, BEG.z + 0.05); k.rotation.y = Math.PI + ry; root.add(k);
    if (i === 1) { const J = k.userData.J; J.shL.rotation.set(-1.25, 0, 0.2); J.shR.rotation.set(-1.25, 0, -0.2); J.elL.rotation.x = -0.3; J.elR.rotation.x = -0.3; }
    return k;
  });

  // dust drifting in the low sun
  const DUST = 420, dg = new THREE.BufferGeometry(), dp = new Float32Array(DUST * 3);
  for (let i = 0; i < DUST; i++) { dp[i * 3] = lerp(A.x0 + 2, x1, rand()); dp[i * 3 + 1] = rand() * 4; dp[i * 3 + 2] = lerp(-2, 10, rand()); }
  dg.setAttribute('position', new THREE.BufferAttribute(dp, 3));
  const dust = new THREE.Points(dg, new THREE.PointsMaterial({ size: 0.045, map: T.dot(), transparent: true, opacity: 0.45, color: 0xffd9a0, blending: THREE.AdditiveBlending, depthWrite: false }));
  dust.frustumCulled = false; root.add(dust);

  // laundry hanging from balconies
  cloths.filter(c => c.at).forEach((c, i) => { const piv = new THREE.Group(); piv.position.copy(c.at); piv.rotation.y = c.rotY; root.add(piv); const g = new THREE.PlaneGeometry(0.4, 0.6); g.translate(0, -0.3, 0); const m = new THREE.Mesh(g, fabM[i % 6]); m.castShadow = true; piv.add(m); c.piv = piv; });
  const swing = [...lines, ...cloths.map(c => c.piv).filter(Boolean)];

  B.build(root, { cast: true, receive: true });

  // ---------- the crowd ----------
  const loops = [
    [[23, 4], [30, 4], [37, 6], [38.5, 9], [30, 8.8], [24, 7]],
    [[24, 1], [33, 0.6], [38, 1.5], [38, 5], [33, 6.4], [25, 5.8]],
    [[38, 9.6], [33, 9.5], [27, 8.4], [23, 8.6], [27, 9.4], [33, 10]],
  ];
  const walkers = [];
  for (let i = 0; i < 15; i++) {
    const w = makeWalker(i);
    const path = loops[i % 3].map(([px, pz]) => new THREE.Vector3(px + (rand() - 0.5) * 0.8, 0, pz + (rand() - 0.5) * 0.8));
    if (i % 2) path.reverse();
    const seg = i % path.length; w.position.copy(path[seg]); root.add(w);
    Object.assign(w.userData, { path, seg: (seg + 1) % path.length, v: 0.95 + rand() * 0.4, walk: 1, lastStep: 0 });
    walkers.push(w);
  }
  [[38.0, -0.4, 2.5], [38.7, 0.3, -0.6]].forEach(([px, pz, ry], i) => { const f = makeWalker(i + 11); f.position.set(px, 0, pz); f.rotation.y = ry; f.userData.walk = 0; f.userData.idle = true; root.add(f); walkers.push(f); });

  // ---------- interactions ----------
  const S = { phase: 'idle', t: 0, idle: 0, beg: 0, ended: false };
  const stallT = interactor.add({ object: food, label: 'Buy food', enabled: () => S.phase === 'toStall', onPress: () => setPhase('counting'), maxDist: 2.8 });
  const heapT = interactor.add({ object: heap, label: 'Pick up the scraps', enabled: () => S.phase === 'toScraps', onPress: () => setPhase('scrapping') });
  const tailorT = interactor.add({ object: tailorMan, label: 'Sell the scraps', enabled: () => S.phase === 'toTailor', onPress: () => setPhase('refused'), maxDist: 3.2 });
  const begT = interactor.add({ object: carton, label: 'Sit down', enabled: () => S.phase === 'toBeg', onPress: () => setPhase('sitting'), maxDist: 2.8 });
  const parcelT = interactor.add({ object: parcel, label: 'Take it', enabled: () => S.phase === 'toSteal', onPress: () => setPhase('stealing'), maxDist: 2.8 });
  [stallT, heapT, tailorT, begT, parcelT].forEach(t => { t.space = 'street'; });

  // ---------- sound ----------
  let sounds = [], snd = {};
  const marketSnd = new THREE.Object3D(); marketSnd.position.set(mx, 2, mz); root.add(marketSnd);
  const stallSnd = new THREE.Object3D(); stallSnd.position.set(31, 1.4, -2.3); root.add(stallSnd);
  const laneSnd = new THREE.Object3D(); laneSnd.position.set(15, 2, azc); root.add(laneSnd);
  function startSounds() {
    audio.stopAll(sounds); sounds = []; snd = {};
    const add = (k, a) => { if (a) { snd[k] = a; sounds.push(a); } return a; };
    add('market', audio.loop('market', { object: marketSnd, volume: 0.45, ref: 6 }));
    add('street', audio.loop('street', { object: laneSnd, volume: 0.15, ref: 4 }));
    add('fry', audio.loop('fire', { object: stallSnd, volume: 0.04, ref: 0.6 }));   // V3.1: the crackling at the stall was heard as loud footsteps — kept very low
    add('heart', audio.loop('heartbeat', { volume: 0 }));   // your own heart: rises as you creep up on the food
  }

  // ---------- story ----------
  const head = new THREE.Vector3(), tmp = new THREE.Vector3(), tmp2 = new THREE.Vector3();
  const hint = (t, s = 5) => ui.hint(t, s), thought = (t, s) => ui.thought(t, s);
  function setPhase(p) { S.phase = p; S.t = 0; S.idle = 0; S.enter = true; }   // S.enter: true on the first update of a phase
  const goals = {
    toStall: counterSpot, toScraps: new THREE.Vector3(23.3, 0.5, -2.6), toTailor: new THREE.Vector3(28, 1.2, 9.6),
    toBeg: new THREE.Vector3(BEG.x, 0.3, BEG.z), toSteal: counterSpot, flee: new THREE.Vector3(x1 + 1.5, 1.0, (MARKET.exitZ0 + MARKET.exitZ1) / 2),
  };

  function reset() {
    Object.assign(S, { phase: 'idle', t: 0, idle: 0, beg: 0, ended: false, tension: 0, flee: 0, glanceT: 2, glance: 0, saidClose: false });
    calm();
    vendor.rotation.y = 0; vendor.userData.look = 0; tailorMan.userData.look = 0;
    parcel.visible = true; parcelMat.emissiveIntensity = 0;
    counted.forEach(c => { c.visible = false; });
    police.forEach((p, i) => { p.position.set(25.6 + i * 0.95, 0, 9.2 + i * 0.35); p.rotation.y = 2.2 + i * 1.9; p.userData.walk = 0; });
    if (pursuit) pursuit.stop();
  }
  function start() {
    reset(); startSounds();
    player.canMove = true; player.canRun = true;
    setPhase('toStall');
    thought('I haven\'t eaten since morning.', 4);
    S.hintAt = 3.5;
  }
  function stop() { audio.stopAll(sounds); sounds = []; snd = {}; calm(); }
  // ---------- tension: creeping up on the food ----------
  // V3: once the vendor turns away, the closer you get to the food the louder your heart, the more the
  // market falls away, and the edges of sight darken in time with each beat (a pulse, never a flash).
  const fearEl = document.getElementById('fear');
  let baseFov = null;
  function calm() { if (fearEl) { fearEl.classList.remove('dark'); fearEl.style.opacity = 0; } if (baseFov !== null) { camera.fov = baseFov; camera.updateProjectionMatrix(); baseFov = null; } }
  function feel(dt, t, k, rate) {
    S.tension = damp(S.tension, k, 2.5, dt);
    const T = S.tension;
    if (snd.heart) { snd.heart.setVolume(0.06 + 0.9 * T); snd.heart.setPlaybackRate(rate); }
    if (snd.market) snd.market.setVolume(0.45 * (1 - 0.55 * T));
    if (snd.fry) snd.fry.setVolume(0.04 + 0.03 * T);   // the food sizzling (kept quiet: it crackles)
    // the edges of sight tighten on each heartbeat (lub-dub, one per loop of the heart sound)
    const ph = (t * rate / 0.8) % 1, pulse = Math.exp(-ph * 9) + 0.6 * Math.exp(-Math.max(0, ph - 0.35) * 9) * (ph > 0.35 ? 1 : 0);
    if (fearEl) { fearEl.classList.add('dark'); fearEl.style.opacity = String(Math.min(1, T * (0.35 + 0.4 * pulse))); }
    if (!player.xr) { if (baseFov === null) baseFov = camera.fov; camera.fov = baseFov - T * (3 + 1.5 * pulse); camera.updateProjectionMatrix(); }
  }

  function updateHands(t) {
    const ph = S.phase;
    if (ph === 'scrapping' && S.t < 0.7) {
      hands.set(0, { key: 'scraps', mode: 'world', pos: new THREE.Vector3(23.1, 0.45, -2.85), rot: GRIP.toward(-1, head, tmp2.set(23.2, 0.2, -3.3)), pose: 'grip', blend: 0.35 });
    } else if (ph === 'stealing' && S.t < 0.55) {
      parcel.getWorldPosition(tmp);
      hands.set(0, { key: 'steal', mode: 'world', pos: tmp.clone().add(tmp2.set(-0.02, 0.06, 0.12)), rot: GRIP.toward(-1, head, tmp), pose: 'grip', blend: 0.3 });
    } else if (ph === 'begging' || ph === 'sitting') {
      // cupped hands held out in front (hold E)
      const out = (player.keys.KeyE || S.xrBeg) && ph === 'begging';
      bagCtl.stow = 1;   // the bag is set down while you sit: it must not pull your hand back to it
      // out: cupped hands held out, side by side with a small gap (never overlapping)
      [0, 1].forEach(i => { const s = i ? 1 : -1;
        hands.set(i, out
          ? { key: 'cup', mode: 'cam', pos: CUP_POS[i], rot: CUP_ROT[i], pose: 'cup', blend: 0.3 }
          : { key: 'lap', mode: 'cam', pos: LAP_POS[i], rot: LAP_ROT[i], pose: 'relax', blend: 0.3 }); });
    } else if (!bagCtl.open || bagCtl.stow > 0.5) { if (hands.h[0].key && hands.h[0].key !== 'bag-rimL') hands.hide(0); if (bagCtl.stow > 0.5 && ph !== 'begging' && ph !== 'sitting') hands.hide(1); }
  }

  function update(dt, t, active = true) {
    // the square lives whether or not you're looking
    player.headWorld(head);
    walkers.forEach(w => {
      const u = w.userData;
      if (u.idle) { animateIdle(w, t, dt); return; }
      const tgt = u.path[u.seg];
      const dx = tgt.x - w.position.x, dz = tgt.z - w.position.z, d = Math.hypot(dx, dz);
      const near = Math.hypot(head.x - w.position.x, head.z - w.position.z);
      const v = u.v * (near < 1.2 ? 0.55 : 1);
      if (d < 0.2) u.seg = (u.seg + 1) % u.path.length;
      else { w.position.x += dx / d * v * dt; w.position.z += dz / d * v * dt; w.rotation.y = damp(w.rotation.y, w.rotation.y + Math.atan2(Math.sin(Math.atan2(dx, dz) - w.rotation.y), Math.cos(Math.atan2(dx, dz) - w.rotation.y)), 6, dt); }
      if (near < 0.8 && near > 0.01) { const k = 0.8 / near; w.position.x = head.x + (w.position.x - head.x) * k; w.position.z = head.z + (w.position.z - head.z) * k; }   // nobody walks through you (they step round)
      u.stride += v * dt; u.walk = 1; animateWalker(w, t, dt);
      const stepN = Math.floor(u.stride / 0.7);
      if (stepN !== u.lastStep) { u.lastStep = stepN; if (CROWD_STEPS > 0 && near < 2 && audio.ready && active) audio.oneShot('step', { object: w, volume: CROWD_STEPS, rate: 0.9 + Math.random() * 0.25, ref: 1.2 }); }   // V3.1: silent, like your own
    });
    steam.forEach((sp, k) => { const f = (t * 0.3 + k / 6) % 1; sp.position.y = 1.25 + f * 0.9; sp.material.opacity = 0.14 * (1 - f); sp.scale.setScalar(0.2 + f * 0.4); });
    [vendor, tailorMan, chaiMan].forEach(f => animateIdle(f, t, dt));
    swing.forEach((c, i) => { c.rotation.x = 0.08 * Math.sin(t * 1.1 + i * 1.3); c.rotation.z = 0.04 * Math.sin(t * 0.8 + i); });
    if (!pursuit || !pursuit.active) police.forEach(p => { if (p.userData.walk < 0.05) animateIdle(p, t, dt); else animateWalker(p, t, dt); });
    if (dust.visible) { const p = dg.attributes.position; for (let i = 0; i < DUST; i++) { let y = p.getY(i) + dt * 0.04; if (y > 4) y = 0; p.setY(i, y); } p.needsUpdate = true; }
    if (S.phase === 'idle' || S.phase === 'done' || !active) return;

    S.t += dt; S.idle += dt;
    const entering = S.enter; S.enter = false;
    thread.urgent = S.idle > 20;
    if (S.idle > 20 && S.idle - dt <= 20) remind();
    if (S.hintAt && S.t > S.hintAt) { S.hintAt = 0; if (S.phase === 'toStall') hint('Find the food stall — look for the glow', 5); if (S.phase === 'toScraps') hint('Pick up the cloth scraps by the wall', 5); }
    updateHands(t);

    switch (S.phase) {
      case 'counting': {
        // coins come out of the bag onto the counter; the vendor shakes his head; they go back
        bagCtl.forceOpen = S.t < 4.2 ? 1 : 0;
        vendor.userData.look = (S.t > 1.8 && S.t < 3.2) ? Math.sin((S.t - 1.8) * 14) * 0.45 : damp(vendor.userData.look, 0, 4, dt);
        counted.forEach((c, i) => {
          const tIn = 0.5 + i * 0.4;
          if (S.t > tIn && S.t < 3.4) {
            if (!c.visible) { c.visible = true; audio.oneShot('coin', { object: stallSnd, volume: 0.8 }); bagCtl.setCoins(2 - i); }
            const k = Math.min(1, (S.t - tIn) / 0.45);
            bagCtl.worldMouth(tmp);
            c.position.lerpVectors(tmp, tmp2.set(30.8 + i * 0.12, 0.965, -1.78), ease(k)); c.position.y += Math.sin(k * Math.PI) * 0.2; c.rotation.x = (1 - k) * 6;
          }
        });
        if (S.t > 1.6 && S.t - dt <= 1.6) ui.subtitle('Vendor: "Ten rupees. This is six."', 3);
        if (S.t > 3.0 && S.t - dt <= 3.0) thought('Six rupees. A plate is ten.', 3.5);
        if (S.t > 3.4 && S.t - dt <= 3.4) { counted.forEach(c => { c.visible = false; }); bagCtl.setCoins(3); audio.oneShot('coins', { volume: 0.5 }); }
        if (S.t > 6.5) { setPhase('toScraps'); thought('Maybe I can sell something…', 4); S.hintAt = 3; }
        break;
      }
      case 'scrapping':
        if (S.t > 0.55 && S.t - dt <= 0.55) { bagCtl.setContents({ scraps: true }); bagCtl.forceOpen = 1; audio.oneShot('fabric', { volume: 0.7 }); }
        if (S.t > 1.6) { bagCtl.forceOpen = 0; setPhase('toTailor'); thought('The tailor might pay something for these.', 4); }
        break;
      case 'refused':
        tailorMan.userData.look = S.t < 2 ? Math.sin(S.t * 10) * 0.3 : 0;
        { const J = tailorMan.userData.J, k = S.t < 2.2 ? Math.min(1, S.t * 4) : Math.max(0, 1 - (S.t - 2.2) * 3);   // waves you off
          J.shR.rotation.set(-1.4 * k, 0, -0.3 * k + Math.sin(S.t * 12) * 0.25 * k); J.elR.rotation.x = -0.6 * k; }
        if (S.t > 0.4 && S.t - dt <= 0.4) ui.subtitle('Tailor: "Scraps? Everyone has scraps. Go."', 3.5);
        if (S.t > 4 && S.t - dt <= 4) thought('The other kids sit by the wall. Maybe someone will help.', 4.5);
        if (S.t > 5) setPhase('toBeg');
        break;
      case 'sitting': {
        if (entering) { player.canMove = false; S.from = player.dolly.position.clone(); S.fromEye = player.eye; S.fromYaw = Math.atan2(Math.sin(player.yaw), Math.cos(player.yaw)); bagCtl.stow = 1; }
        const k = ease(Math.min(1, S.t / 1.2));
        player.dolly.position.lerpVectors(S.from, tmp.set(BEG.x, S.from.y, BEG.z - 0.05), k);
        if (!player.xr) { player.eye = lerp(S.fromEye, 0.82, k); player.yaw = lerp(S.fromYaw, 0, k); player.pitch = lerp(player.pitch, -0.05, k); }
        if (S.t > 1.3) { setPhase('begging'); hint(player.xr ? 'Hold the trigger to hold out your hands' : 'Hold E to hold out your hands', 8); }
        break;
      }
      case 'begging': {
        const holding = player.keys.KeyE || S.xrBeg;
        if (holding) { S.beg += dt; S.idle = 0; }
        walkers.forEach(w => { const d = Math.hypot(w.position.x - BEG.x, w.position.z - BEG.z); w.userData.look = d < 2.4 && holding ? 0.5 : 0; w.userData.lookPitch = d < 2.4 && holding ? 0.35 : 0; });
        if (S.beg > 0.5 && S.beg - dt <= 0.5) thought('Please…', 2.5);
        if (S.beg > 4.5 && S.beg - dt <= 4.5) thought('They don\'t even look down.', 3.5);
        if (S.beg > 9.5 && S.beg - dt <= 9.5) thought('It\'s like I\'m not here.', 3.5);
        if (S.beg > 13 || S.t > 45) { setPhase('standUp'); hands.hide(); }
        break;
      }
      case 'standUp': {
        const k = ease(Math.min(1, S.t / 1.0));
        if (!player.xr) player.eye = lerp(0.82, 1.52, k);
        if (S.t > 0.5) bagCtl.stow = 0;
        if (S.t > 1.1) {
          player.canMove = true; vendor.rotation.y = Math.PI;              // the vendor has turned away to serve someone
          walkers.forEach(w => { w.userData.look = 0; w.userData.lookPitch = 0; });
          setPhase('toSteal'); thought('The vendor turned away. Nobody is watching the food.', 4.5);
        }
        break;
      }
      case 'toSteal': {
        parcelMat.emissiveIntensity = 0.35 + 0.25 * Math.sin(t * 4);
        const dd = Math.hypot(head.x - counterSpot.x, head.z - counterSpot.z);
        const k = ease(clamp(1 - (dd - 0.9) / 8, 0, 1));
        feel(dt, t, 0.15 + 0.85 * k, 0.85 + 0.95 * k);
        // the vendor shifts now and then — is he turning round? (he never quite does)
        S.glanceT -= dt;
        if (S.glanceT < 0) { S.glanceT = 2.5 + Math.random() * 2.5; S.glance = k > 0.4 ? 1.0 : 0; }
        S.glance = Math.max(0, (S.glance || 0) - dt * 1.4);
        vendor.rotation.y = Math.PI - 0.35 * Math.sin(Math.min(1, S.glance) * Math.PI);
        if (k > 0.75 && !S.saidClose) { S.saidClose = true; thought('Don\'t turn around. Don\'t turn around…', 3); }
        break;
      }
      case 'stealing':
        feel(dt, t, S.t < 1.0 ? 1 : 0.85, S.t < 1.0 ? 1.9 : 2.1);
        if (S.t > 0.5 && S.t - dt <= 0.5) {
          parcel.visible = false; parcelMat.emissiveIntensity = 0;
          bagCtl.setContents({ food: true }); bagCtl.glow = 0.3; bagCtl.forceOpen = 1;
          audio.oneShot('fabric', { volume: 0.8 }); hands.hide(0);
        }
        if (S.t > 1.0 && S.t - dt <= 1.0) {
          bagCtl.forceOpen = 0; vendor.rotation.y = 0;
          audio.oneShot('yells', { object: stallSnd, volume: 0.6 });
          audio.oneShot('whistle', { object: police[0], volume: 0.9, ref: 3 });
          ui.subtitle('Vendor: "Chor! Thief! Stop!"', 3);
        }
        if (S.t > 1.0) { const J = vendor.userData.J, k = Math.min(1, (S.t - 1) * 4); J.shR.rotation.set(-1.6 * k, 0, -0.2 * k); }
        if (S.t > 1.8) {
          pursuit.speed = 1.9; pursuit.start(); player.jogAllowed = true;
          setPhase('flee'); thought('Run.', 2.5); hint(player.xr ? 'Push the left stick to run' : 'Hold Shift to run', 4);
        }
        break;
      case 'flee': {
        pursuit.update(dt); S.idle = 0;
        // the run: the heart keeps pounding, the market falls behind, the light starts to go —
        // so the nightmare that follows grows out of this instead of switching on
        S.flee = Math.max(S.flee, ease(clamp((head.x - 31) / (x1 - 31), 0, 1)));
        feel(dt, t, 0.7, 1.9 + 0.3 * S.flee);
        if (fearEl) fearEl.classList.remove('dark');
        if (baseFov !== null && !player.xr) { camera.fov = damp(camera.fov, baseFov, 2, dt); camera.updateProjectionMatrix(); }
        police.forEach(p => animateWalker(p, t, dt));
        if (head.x > x1 + 0.4 && !S.ended) { S.ended = true; thread.set(null); if (baseFov !== null) { camera.fov = baseFov; camera.updateProjectionMatrix(); baseFov = null; } ctx.carryFear = S.tension; setPhase('done'); onEndFn && onEndFn('nightmare'); }
        break;
      }
    }
    thread.set(goals[S.phase] || null);
  }
  function remind() {
    const m = { toStall: 'Find the food stall (look for the glow)', toScraps: 'Pick up the cloth scraps by the wall', toTailor: 'Take the scraps to the tailor',
      toBeg: 'Sit on the carton with the other children', begging: 'Hold E to hold out your hands', toSteal: 'Take the food from the counter' }[S.phase];
    if (m) hint(m, 5);
  }
  // air and light: a dim lane opening into a hazy, golden square
  function atmosphere(x) {
    const k = clamp((x - 17) / 5, 0, 1), f = S.flee || 0;
    const a = {
      // V1's lane: a dark, dusty passage (dusk), opening into the warmer market
      fog: new THREE.Color(0x3a2a1c).lerp(new THREE.Color(0xb08a60), k), density: lerp(0.045, 0.02, k),
      sun: lerp(0.45, 2.3, k), hemi: lerp(0.36, 0.85, k), hemiSky: new THREE.Color(0x9a8a90).lerp(new THREE.Color(0xb8b4c8), k), hemiGround: new THREE.Color(0x3a2a1c).lerp(new THREE.Color(0x5a4430), k),
      sky: lerp(0.7, 1, k), skyTint: new THREE.Color(1.0, 0.72, 0.55), exposure: lerp(0.92, 1.0, k),
    };
    if (f > 0) {
      // the run darkens toward the nightmare's first moments (its warp ≈ NIGHT_START), so the two meet
      a.fog.lerp(new THREE.Color(0xb08a60).lerp(new THREE.Color(0x1c0508), 0.24), f);
      a.density = lerp(a.density, 0.033, f); a.sun = lerp(a.sun, 1.4, f); a.hemi = lerp(a.hemi, 0.67, f);
      a.sky = lerp(a.sky, 0.88, f); a.exposure = lerp(a.exposure, 0.97, f);
      a.skyTint.lerp(new THREE.Color(1, 1, 1).lerp(new THREE.Color(0.55, 0.08, 0.12), 0.2), f);
    }
    return a;
  }
  let onEndFn = null;
  return {
    root, update, start, stop, reset, atmosphere, name: 'street',
    zone: { minX: 8.4 },
    onEnd(fn) { onEndFn = fn; },
    getColliders() { return colliders; },
    setQuality(q) { dust.visible = q !== 'low'; },
    get phase() { return S.phase; },
    setXRBeg(v) { S.xrBeg = v; },
    skip() {
      const p = S.phase;
      if (p === 'toStall') { player.place(31, -0.8, 0, 1.52); setPhase('counting'); }
      else if (['counting', 'refused', 'sitting', 'standUp', 'stealing', 'scrapping'].includes(p)) S.t = 99;
      else if (p === 'toScraps') { player.place(23.3, -1.9, 0, 1.52); setPhase('scrapping'); }
      else if (p === 'toTailor') { player.place(28, 8.6, Math.PI, 1.52); setPhase('refused'); }
      else if (p === 'toBeg') { player.place(BEG.x, BEG.z - 1.4, Math.PI, 1.52); setPhase('sitting'); }
      else if (p === 'begging') S.beg = 99;
      else if (p === 'toSteal') { player.place(31, -0.8, 0, 1.52); setPhase('stealing'); }
      else if (p === 'flee') player.place(x1 + 1, 8.3, -Math.PI / 2, 1.52);
    },
  };
}
