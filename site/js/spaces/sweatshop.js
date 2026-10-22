// The Long Way Home — created by Sicheng Zheng. © 2026 Sicheng Zheng. All rights reserved.
// SPACE 1 — THE SWEATSHOP  (v0.2, rebuilt from the Space 1 rough-view sketch)
// Board notes:
//  · gloomy, dimly lit, machines + quiet conversations; huge to a child but cramped and stuffy
//  · feed fabric through the machine, look out the one window, receive the day's wages in coins
//  · glimpses of the school life the child could have had (window, daydream)
//  · key object: the faded, patched cloth bag hanging by the factory door
//  · wayfinding: a red thread / soft glow on one object at a time
//  · doing nothing for 20 s: the world keeps going, the thread pulses harder
// Sketch: exposed brick with plaster falling off, a big gridded window on the left,
// brick piers, pipes and wires on the ceiling, cluttered tables, door bottom-right.
// The door opens onto the alley that becomes Space 2 (spaces/street.js).
import * as THREE from 'three';
import * as T from '../textures.js';
import {
  lerp, clamp, ease, M, TM, box, cyl, wire, fabricTex, fabricMat,
  makeFigure, animateFigure, setBagOpen, makeBag, makeSack, makeSeat,
} from '../kit.js';
import { ALLEY } from './street.js';

// ---- layout (metres; furniture ~1.35× real size so you feel like a child) ----
export const ROOM = { minX: -8, maxX: 8, minZ: -6, maxZ: 6, h: 4.0 };
const ROWS = [1.25, -1.5, -4.25];
const COLS = [-6.2, -3.6, -1.0, 1.6];
const TX = COLS[0], TZ = ROWS[0];            // the player's table
const TABLE_H = 1.0;
const SEAT = { x: TX, z: TZ + 0.85 };
const WINDOW = { z0: 0.7, z1: 3.1, y0: 1.25, y1: 2.65, cols: 6, rows: 4 };
export const DOOR = { z0: 3.2, z1: 4.6, h: 2.5 };   // on the right wall (x = ROOM.maxX)
const QUOTA = 4;

export function buildSweatshop({ scene, audio, interactor, player, ui, settings, debug, journey, guide, refreshColliders, thought }) {
  const root = new THREE.Group(); root.name = 'sweatshop'; scene.add(root);
  scene.background = new THREE.Color(0x0c0a08);
  scene.fog = new THREE.FogExp2(0x1d1712, 0.05);

  // ---------- shell ----------
  const W = ROOM.maxX - ROOM.minX, D = ROOM.maxZ - ROOM.minZ;
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(W, D), TM(T.dirtFloor([5, 4])));
  floor.rotation.x = -Math.PI / 2; root.add(floor);
  const ceil = new THREE.Mesh(new THREE.PlaneGeometry(W, D), TM(T.slab([6, 4]), { side: THREE.DoubleSide }));
  ceil.rotation.x = Math.PI / 2; ceil.position.y = ROOM.h; root.add(ceil);

  const brick = T.brickWall([1, 1]);
  function wallPiece(w, h, x, y, z, ry) {
    const t = brick.clone(); t.needsUpdate = true; t.repeat.set(w / 3, h / 3); t.offset.set((x + z) * 0.11, (y - h / 2) / 3);
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), TM(t));
    m.position.set(x, y, z); m.rotation.y = ry; root.add(m); return m;
  }
  wallPiece(W, ROOM.h, 0, ROOM.h / 2, ROOM.minZ, 0);                       // front
  wallPiece(W, ROOM.h, 0, ROOM.h / 2, ROOM.maxZ, Math.PI);                 // back
  const lw = (z0, z1, y0, y1) => wallPiece(z1 - z0, y1 - y0, ROOM.minX, (y0 + y1) / 2, (z0 + z1) / 2, Math.PI / 2);
  lw(ROOM.minZ, ROOM.maxZ, 0, WINDOW.y0); lw(ROOM.minZ, ROOM.maxZ, WINDOW.y1, ROOM.h);
  lw(ROOM.minZ, WINDOW.z0, WINDOW.y0, WINDOW.y1); lw(WINDOW.z1, ROOM.maxZ, WINDOW.y0, WINDOW.y1);
  const rw = (z0, z1, y0, y1) => wallPiece(z1 - z0, y1 - y0, ROOM.maxX, (y0 + y1) / 2, (z0 + z1) / 2, -Math.PI / 2);
  rw(ROOM.minZ, DOOR.z0, 0, ROOM.h); rw(DOOR.z1, ROOM.maxZ, 0, ROOM.h); rw(DOOR.z0, DOOR.z1, DOOR.h, ROOM.h);
  // the outside face of the right wall around the door (seen from the alley)
  const outWall = wallPiece(ALLEY.z1 - ALLEY.z0, ROOM.h, ROOM.maxX + 0.02, ROOM.h / 2, (ALLEY.z0 + ALLEY.z1) / 2, Math.PI / 2);
  outWall.visible = false; // replaced below with a version that has a hole
  root.remove(outWall);
  const ow = (z0, z1, y0, y1) => wallPiece(z1 - z0, y1 - y0, ROOM.maxX + 0.03, (y0 + y1) / 2, (z0 + z1) / 2, Math.PI / 2);
  ow(ALLEY.z0, DOOR.z0, 0, ROOM.h + 1); ow(DOOR.z1, ALLEY.z1, 0, ROOM.h + 1); ow(DOOR.z0, DOOR.z1, DOOR.h, ROOM.h + 1);

  // brick piers (sketch: heavy columns in the room)
  const pierMat = TM(T.brickWall([0.4, 1.4]));
  const piers = [[-4.9, 0.12], [0.3, 0.12], [-2.3, -2.9], [3.1, 0.12]];
  piers.forEach(([x, z]) => box(0.46, ROOM.h, 0.46, pierMat, x, ROOM.h / 2, z, root));

  // ceiling: beams, a rusty tin patch, conduit and sagging wires
  const beamMat = M(0x2a241d);
  for (let x = -6; x <= 6; x += 4) box(0.25, 0.3, D, beamMat, x, ROOM.h - 0.15, 0, root);
  const tinPatch = new THREE.Mesh(new THREE.PlaneGeometry(3, 2), TM(T.tin([2, 1]), { side: THREE.DoubleSide, metalness: 0.3 }));
  tinPatch.rotation.x = Math.PI / 2; tinPatch.position.set(2.5, ROOM.h - 0.02, -2); root.add(tinPatch);
  const pipe = cyl(0.06, 0.06, W, M(0x4a3a2c, { metalness: 0.5, roughness: 0.6 }), 8, root); pipe.rotation.z = Math.PI / 2; pipe.position.set(0, 3.55, 5.6);
  const pipe2 = cyl(0.04, 0.04, D, M(0x3a3026, { metalness: 0.4, roughness: 0.7 }), 8, root); pipe2.rotation.x = Math.PI / 2; pipe2.position.set(-7.7, 3.4, 0);
  const wm = M(0x0f0f0f);
  for (let k = 0; k < 14; k++) {
    const x = -7.5 + Math.random() * 15, z = -5.5 + Math.random() * 11;
    root.add(wire(new THREE.Vector3(x, 3.85, z), new THREE.Vector3(x + (Math.random() - 0.5) * 6, 3.85, z + (Math.random() - 0.5) * 5), 0.25 + Math.random() * 0.4, wm));
  }

  // ---------- the window (big, gridded, half broken, half boarded) ----------
  const wx = ROOM.minX, wzc = (WINDOW.z0 + WINDOW.z1) / 2, wyc = (WINDOW.y0 + WINDOW.y1) / 2;
  const ww = WINDOW.z1 - WINDOW.z0, wh = WINDOW.y1 - WINDOW.y0;
  const frameMat = M(0x2e261e);
  box(0.2, 0.08, ww + 0.16, frameMat, wx + 0.05, WINDOW.y0 - 0.04, wzc, root);
  box(0.2, 0.08, ww + 0.16, frameMat, wx + 0.05, WINDOW.y1 + 0.04, wzc, root);
  box(0.12, 0.05, ww + 0.3, M(0x4a4236), wx + 0.1, WINDOW.y0 - 0.1, wzc, root); // sill
  for (let c = 0; c <= WINDOW.cols; c++) box(0.06, wh, 0.035, frameMat, wx + 0.02, wyc, WINDOW.z0 + c * ww / WINDOW.cols, root);
  for (let r = 1; r < WINDOW.rows; r++) box(0.06, 0.035, ww, frameMat, wx + 0.02, WINDOW.y0 + r * wh / WINDOW.rows, wzc, root);
  const glassMat = new THREE.MeshStandardMaterial({ color: 0x9aa48a, transparent: true, opacity: 0.32, roughness: 0.3, depthWrite: false });
  const board = TM(T.plywood());
  const pw = ww / WINDOW.cols, ph = wh / WINDOW.rows;
  for (let c = 0; c < WINDOW.cols; c++) for (let r = 0; r < WINDOW.rows; r++) {
    const z = WINDOW.z0 + (c + 0.5) * pw, y = WINDOW.y0 + (r + 0.5) * ph;
    // keep the panes in front of the child's eyes open so the school is visible
    const nearEye = r === 1 && c >= 2 && c <= 4;
    const roll = Math.random();
    if (!nearEye && roll < 0.28) { const b = box(0.02, ph * 0.98, pw * 0.98, board, wx + 0.04, y, z, root); b.rotation.x = (Math.random() - 0.5) * 0.1; }
    else if (nearEye || roll < 0.55) { /* broken — empty */ }
    else { const g = new THREE.Mesh(new THREE.PlaneGeometry(pw, ph), glassMat); g.position.set(wx + 0.01, y, z); g.rotation.y = Math.PI / 2; root.add(g); }
  }
  // the world outside: a bright schoolyard
  const outside = new THREE.Group(); root.add(outside);
  const yard = new THREE.Mesh(new THREE.PlaneGeometry(14, 10.5), new THREE.MeshBasicMaterial({ map: T.schoolyard(), toneMapped: false, fog: false }));
  yard.position.set(wx - 4.5, 2.6, wzc); yard.rotation.y = Math.PI / 2; outside.add(yard);
  const kids = [];
  const kidTex = [T.schoolchild(), T.schoolchild('#f4f0e6', '#7a2f3a'), T.schoolchild('#eef3f8', '#2f4f8f')];
  for (let i = 0; i < 8; i++) {
    const k = new THREE.Mesh(new THREE.PlaneGeometry(0.5, 1.0), new THREE.MeshBasicMaterial({ map: kidTex[i % 3], transparent: true, toneMapped: false, fog: false, alphaTest: 0.1 }));
    k.rotation.y = Math.PI / 2; k.position.set(wx - 3.2 - Math.random() * 0.6, 0.9, wzc - 3 + Math.random() * 6);
    k.userData = { speed: 0.25 + Math.random() * 0.5, dir: Math.random() < 0.5 ? 1 : -1, ph: Math.random() * 6 };
    outside.add(k); kids.push(k);
  }
  const windowSound = new THREE.Object3D(); windowSound.position.set(wx, wyc, wzc); root.add(windowSound);

  // daylight through the window
  const sun = new THREE.SpotLight(0xffe2b0, 70, 15, 0.5, 0.7, 1.4);
  sun.position.set(wx - 2.6, 3.6, wzc + 0.2);
  sun.target.position.set(TX + 1.0, 0.6, wzc - 0.4);
  root.add(sun, sun.target);
  sun.shadow.mapSize.set(1024, 1024); sun.shadow.bias = -0.002;
  const shaftMat = new THREE.MeshBasicMaterial({ map: T.shaftGradient(), transparent: true, opacity: 0.2, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, fog: false });
  const shaftFrom = new THREE.Vector3(wx, wyc, wzc), shaftTo = new THREE.Vector3(TX + 1.6, 0.0, wzc - 0.6);
  const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.85, 1.5, shaftFrom.distanceTo(shaftTo), 16, 1, true), shaftMat);
  shaft.position.copy(shaftFrom).add(shaftTo).multiplyScalar(0.5);
  shaft.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), shaftFrom.clone().sub(shaftTo).normalize());
  root.add(shaft);

  // ---------- lights: bare bulbs on cords, one flickering tube ----------
  const hemi = new THREE.HemisphereLight(0x8a7458, 0x1a140f, 0.5); root.add(hemi);
  const bulbs = [];
  const bulbMat = new THREE.MeshBasicMaterial({ color: 0xffd08a, toneMapped: false });
  function bulb(x, z, intensity, hang = 1.1) {
    const y = ROOM.h - hang;
    cyl(0.006, 0.006, hang, M(0x111111), 4, root).position.set(x, ROOM.h - hang / 2, z);
    cyl(0.025, 0.025, 0.06, M(0x2a2a28, { metalness: 0.5 }), 8, root).position.set(x, y + 0.04, z);
    const b = new THREE.Mesh(new THREE.SphereGeometry(0.045, 8, 6), bulbMat); b.position.set(x, y - 0.02, z); root.add(b);
    let light = null;
    if (intensity) { light = new THREE.PointLight(0xffa860, intensity, 8.5, 1.6); light.position.set(x, y - 0.1, z); root.add(light); }
    bulbs.push({ light, base: intensity, flick: Math.random() * 10 });
  }
  bulb(TX + 0.15, TZ - 0.05, 8, 1.2);
  bulb(-3.6, -1.5, 5.5); bulb(1.6, -4.25, 4.5); bulb(-1.0, 1.25, 5);
  bulb(-1.0, -4.25, 0, 0.9); bulb(1.6, 1.25, 0, 1.3); bulb(-3.6, -4.25, 0, 1.0);
  bulb(6.6, 2.6, 4.5, 1.2);   // by the hooks and the door
  const tube = box(1.2, 0.04, 0.06, new THREE.MeshBasicMaterial({ color: 0xe8f6ff, toneMapped: false }), 5.0, 2.75, 5.1, root);
  const deskLight = new THREE.PointLight(0xdff2ff, 4, 5.5, 1.6); deskLight.position.set(5.0, 2.6, 5.0); root.add(deskLight);

  // ---------- tables, seats, people ----------
  const colliders = [
    { minX: ROOM.minX - 0.4, maxX: ROOM.minX, minZ: ROOM.minZ, maxZ: ROOM.maxZ },
    { minX: ROOM.minX, maxX: ROOM.maxX, minZ: ROOM.minZ - 0.4, maxZ: ROOM.minZ },
    { minX: ROOM.minX, maxX: ROOM.maxX, minZ: ROOM.maxZ, maxZ: ROOM.maxZ + 0.4 },
    { minX: ROOM.maxX, maxX: ROOM.maxX + 0.4, minZ: ROOM.minZ, maxZ: DOOR.z0 },
    { minX: ROOM.maxX, maxX: ROOM.maxX + 0.4, minZ: DOOR.z1, maxZ: ROOM.maxZ },
  ];
  const doorCollider = { minX: ROOM.maxX - 0.1, maxX: ROOM.maxX + 0.4, minZ: DOOR.z0, maxZ: DOOR.z1 };
  piers.forEach(([x, z]) => colliders.push({ minX: x - 0.23, maxX: x + 0.23, minZ: z - 0.23, maxZ: z + 0.23 }));

  const machines = [], figures = [];
  const plyTop = TM(T.plywood());
  const legMat = M(0x2b2219);
  const skins = [0x6b4630, 0x7a5236, 0x5a3a26, 0x845a3c, 0x4e3322];
  const outfits = [
    { cloth: 0x6a2f34, cloth2: 0x8a4a3a, sari: true, bun: true }, { cloth: 0x55605a }, { cloth: 0x3f5560, cloth2: 0x2f4550, sari: true, bun: true },
    { cloth: 0x7a6e56 }, { cloth: 0x5e3f52, cloth2: 0x8a5a2a, sari: true }, { cloth: 0x45454c },
  ];
  const childSeats = new Set(['0,1', '1,2', '2,0', '1,0']);
  const seatKinds = ['crate', 'blue', 'crate', 'red'];
  ROWS.forEach((z, r) => COLS.forEach((x, c) => {
    const isPlayer = r === 0 && c === 0;
    const g = new THREE.Group(); g.position.set(x, 0, z); root.add(g);
    // rough plywood top on mismatched legs, a crate underneath
    const top = box(1.7, 0.04, 0.9, plyTop, 0, TABLE_H - 0.02, 0, g); top.rotation.z = (Math.random() - 0.5) * 0.015;
    [[-0.8, -0.4], [0.8, -0.4], [-0.8, 0.4], [0.8, 0.4]].forEach(([a, b], k) => box(k === 2 ? 0.08 : 0.05, TABLE_H - 0.04, 0.05, legMat, a, (TABLE_H - 0.04) / 2, b, g));
    if (Math.random() < 0.6) box(0.5, 0.35, 0.4, TM(T.cardboard()), (Math.random() - 0.5) * 0.8, 0.18, -0.1, g);
    const seat = makeSeat(isPlayer ? 'crate' : seatKinds[(r + c) % 4]); seat.position.set(0, 0, 0.72); g.add(seat);
    const m = makeMachine(); m.position.set(x, TABLE_H, z - 0.05); root.add(m);
    machines.push({ m, isPlayer });
    if (isPlayer) { colliders.push({ minX: x - 0.88, maxX: x + 0.88, minZ: z - 0.48, maxZ: z + 0.48 }); return; }
    colliders.push({ minX: x - 0.88, maxX: x + 0.88, minZ: z - 0.48, maxZ: z + 1.0 });
    m.userData.speed = 1;
    for (let k = 0; k < 3; k++) box(0.34, 0.016, 0.26, fabricMat(r + c + k), x - 0.55, TABLE_H + 0.008 + k * 0.016, z + 0.1, root).rotation.y = Math.random() * 0.3;
    for (let k = 0; k < 2 + ((r + c) % 3); k++) box(0.3, 0.016, 0.22, fabricMat(r * 2 + c + k + 3), x + 0.55, TABLE_H + 0.008 + k * 0.016, z + 0.1, root);
    const child = childSeats.has(`${r},${c}`);
    const o = outfits[(r * 4 + c) % outfits.length];
    const scale = child ? 0.95 : 1.25;
    const fig = makeFigure({ ...o, skin: skins[(r + c * 2) % skins.length], scale, sari: o.sari && !child, bun: o.bun && !child, cloth: child ? 0x7a7062 : o.cloth });
    fig.position.set(x, 0.625 - 0.5 * scale, z + 0.72);
    root.add(fig); figures.push(fig);
  }));
  // two children on the floor trimming threads by the front wall
  [[-6.6, -5.3, 0.4], [-5.6, -5.4, -0.3]].forEach(([x, z, ry], i) => {
    const f = makeFigure({ floor: true, scale: 0.9, cloth: i ? 0x6a5a4a : 0x5a4a5a, skin: skins[i + 1] });
    f.position.set(x, 0, z); f.rotation.y = Math.PI + ry; f.userData.speed = 2.5; root.add(f); figures.push(f);
    const heap = makeSack(fabricMat(i + 2, { flatShading: true }), 0.7); heap.position.set(x + 0.3, 0, z + 0.55); heap.scale.y = 0.5; root.add(heap);
  });
  colliders.push({ minX: -7.2, maxX: -5.0, minZ: -6, maxZ: -4.8 });

  // the player's own table: piles of uncut and finished fabric
  const leftPile = new THREE.Group(); leftPile.position.set(TX - 0.55, TABLE_H, TZ + 0.12); root.add(leftPile);
  const pileLayers = [];
  for (let k = 0; k < 7; k++) { const l = box(0.34, 0.016, 0.26, fabricMat(k), 0, 0.008 + k * 0.016, 0, leftPile); l.rotation.y = (Math.random() - 0.5) * 0.25; pileLayers.push(l); }
  const pileDef = interactor.add(leftPile, { label: 'Take the fabric' });
  const rightPile = new THREE.Group(); rightPile.position.set(TX + 0.55, TABLE_H, TZ + 0.12); root.add(rightPile);
  const playerMachine = machines.find(m => m.isPlayer).m;
  const machineDef = interactor.add(playerMachine, { label: 'Hold to sew' });
  const machineSoundObj = new THREE.Object3D(); machineSoundObj.position.set(TX - 0.2, TABLE_H + 0.2, TZ); root.add(machineSoundObj);
  const piece = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.006, 0.4), fabricMat(0, { side: THREE.DoubleSide }));
  piece.visible = false; root.add(piece);
  const NEEDLE = new THREE.Vector3(TX - 0.26, TABLE_H + 0.054, TZ - 0.03);
  // a signature scratched into the corner of the player's table (the maker's mark)
  {
    const c = document.createElement('canvas'); c.width = 256; c.height = 64; const g = c.getContext('2d');
    g.font = 'italic 34px Georgia, serif'; g.fillStyle = 'rgba(30,18,8,.55)'; g.fillText('S. Zheng · 2026', 8, 44);
    const tx = new THREE.CanvasTexture(c); tx.colorSpace = THREE.SRGBColorSpace;
    const sig = new THREE.Mesh(new THREE.PlaneGeometry(0.24, 0.06), new THREE.MeshBasicMaterial({ map: tx, transparent: true, depthWrite: false }));
    sig.rotation.x = -Math.PI / 2; sig.rotation.z = 0.08; sig.position.set(TX + 0.62, TABLE_H + 0.002, TZ + 0.36); sig.name = 'maker-signature'; root.add(sig);
  }
  // a cup of tea gone cold and a scrap of thread on the player's table
  cyl(0.035, 0.03, 0.07, M(0xd8d0c0, { roughness: 0.5 }), 10, root).position.set(TX + 0.72, TABLE_H + 0.035, TZ - 0.3);

  // ---------- clutter: sacks, drums, boxes (sketch map circles), one fan, lines ----------
  const sackMat = M(0xb0a080, { flatShading: true });
  [[4.3, -5.3, 1.1], [5.2, -5.4, 1.0], [6.1, -5.2, 1.15], [7.2, -5.3, 1.0], [4.8, -4.4, 0.9], [6.6, -4.3, 1.0], [5.6, -3.4, 0.85]].forEach(([x, z, s], i) => {
    const k = makeSack(i % 3 ? sackMat : fabricMat(i, { flatShading: true }), s); k.position.set(x, 0, z); k.rotation.y = Math.random() * 3; root.add(k);
  });
  for (let i = 0; i < 6; i++) { const b = box(0.7, 0.5, 0.55, TM(T.cardboard()), 4.3 + (i % 3) * 0.75, 0.25 + Math.floor(i / 3) * 0.5, -2.2 + (Math.random() - 0.5) * 0.2, root); b.rotation.y = (Math.random() - 0.5) * 0.3; }
  const drumMat = M(0x2a5a8a, { roughness: 0.55 });
  [[-7.4, -5.4], [-7.4, -4.6], [-0.4, -5.5], [0.4, -5.55], [7.4, -0.6]].forEach(([x, z]) => cyl(0.3, 0.3, 0.9, drumMat, 14, root).position.set(x, 0.45, z));
  colliders.push({ minX: 3.7, maxX: 8, minZ: -6, maxZ: -1.8 }, { minX: -7.8, maxX: -7.0, minZ: -5.8, maxZ: -4.2 }, { minX: -0.8, maxX: 0.8, minZ: -6, maxZ: -5.2 }, { minX: 7.0, maxX: 8, minZ: -1, maxZ: -0.2 });

  const cloths = [];
  [0.1, -2.9].forEach((z, li) => {
    root.add(wire(new THREE.Vector3(-7.8, 3.3, z), new THREE.Vector3(7.8, 3.3, z), 0.25, M(0x2a2420), 0.006));
    for (let x = -7; x < 7; x += 1.0 + Math.random() * 0.8) {
      if (Math.random() < 0.4) continue;
      const h = 0.5 + Math.random() * 0.4;
      const cl = new THREE.Mesh(new THREE.PlaneGeometry(0.5, h), fabricMat(li * 7 + Math.floor(x * 3 + 30), { side: THREE.DoubleSide, color: 0xb0a090 }));
      cl.geometry.translate(0, -h / 2, 0);
      cl.position.set(x, 3.3 - 0.25 * (1 - (x / 7.8) ** 2), z); root.add(cl); cloths.push(cl);
    }
  });
  const fan = new THREE.Group(); fan.position.set(-2.3, ROOM.h - 0.2, 0.6); root.add(fan);
  cyl(0.02, 0.02, 0.2, M(0x222222), 5, fan).position.y = 0.1;
  cyl(0.08, 0.08, 0.06, M(0x4a3a2a, { metalness: 0.5 }), 10, fan);
  for (let k = 0; k < 3; k++) { const b = box(0.7, 0.01, 0.12, M(0x5a4a3a, { metalness: 0.3 }), 0, -0.02, 0); b.geometry.translate(0.38, 0, 0); b.rotation.y = k * Math.PI * 2 / 3; fan.add(b); }

  // a hand-written target sheet and a clock on the front wall
  const quota = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 0.6), TM(T.quotaBoard()));
  quota.position.set(-2.3, 2.6, ROOM.minZ + 0.02); root.add(quota);
  const clock = new THREE.Group(); clock.position.set(0.4, 2.9, ROOM.minZ + 0.03); root.add(clock);
  clock.add(new THREE.Mesh(new THREE.CircleGeometry(0.24, 24), TM(T.clockFace())));
  const hHand = box(0.02, 0.12, 0.01, M(0x1a1612), 0, 0, 0.01, clock); hHand.geometry.translate(0, 0.06, 0);
  const mHand = box(0.014, 0.18, 0.01, M(0x1a1612), 0, 0, 0.015, clock); mHand.geometry.translate(0, 0.09, 0);

  // ---------- supervisor's desk (back-right, by the door) ----------
  const desk = new THREE.Group(); desk.position.set(5.0, 0, 5.1); root.add(desk);
  box(1.9, 1.15, 0.85, TM(T.plywood()), 0, 0.575, 0, desk);
  const ledger = box(0.42, 0.04, 0.32, M(0x6a1f1f), -0.3, 1.17, -0.1, desk);
  cyl(0.09, 0.09, 0.08, M(0x6d7570, { metalness: 0.7, roughness: 0.4 }), 12, desk).position.set(0.4, 1.19, -0.1);
  const foreman = makeFigure({ standing: true, scale: 1.35, cloth: 0xd8d2c0, cloth2: 0x3a3a40, skin: 0x7a5236 });
  foreman.position.set(5.0, 0, 5.8); root.add(foreman);
  colliders.push({ minX: 3.95, maxX: 6.05, minZ: 4.6, maxZ: 6 });
  const foremanDef = interactor.add(foreman, { label: 'Collect your wages' });
  ledger.material = ledger.material.clone(); ledger.userData.owner = foremanDef; ledger.userData.baseEmissive = ledger.material.emissive.clone();
  foremanDef.meshes.push(ledger);

  // ---------- door (right wall) ----------
  const doorPivot = new THREE.Group(); doorPivot.position.set(ROOM.maxX - 0.03, 0, DOOR.z0); root.add(doorPivot);
  const dw = DOOR.z1 - DOOR.z0;
  box(0.05, DOOR.h, dw, TM(T.tin([1, 2]), { metalness: 0.3 }), 0, DOOR.h / 2, dw / 2, doorPivot);
  box(0.06, 0.08, dw, M(0x3a2a1a), -0.02, 0.6, dw / 2, doorPivot); box(0.06, 0.08, dw, M(0x3a2a1a), -0.02, 1.9, dw / 2, doorPivot);
  box(0.06, 0.18, 0.04, M(0x8a8a80, { metalness: 0.8 }), -0.05, 1.25, dw - 0.15, doorPivot);
  const doorDef = interactor.add(doorPivot, { label: 'Go outside' });
  const doorLight = new THREE.PointLight(0xffd4a0, 0, 7, 1.4); doorLight.position.set(ROOM.maxX - 0.5, 2.0, (DOOR.z0 + DOOR.z1) / 2); root.add(doorLight);
  const doorSound = new THREE.Object3D(); doorSound.position.set(ROOM.maxX, 1.5, (DOOR.z0 + DOOR.z1) / 2); root.add(doorSound);

  // ---------- bags on hooks beside the door ----------
  const hookMat = M(0x2a2a28, { metalness: 0.7, roughness: 0.4 });
  const hooks = [2.75, 2.25, 1.75, 1.25];
  hooks.forEach(z => box(0.08, 0.03, 0.03, hookMat, ROOM.maxX - 0.05, 1.62, z, root));
  [[0x6a5a40, [0x3a5a7a]], [0x7a3a2a, [0xd0b070]], [0x4a5a3a, []]].forEach(([b, p], i) => {
    const o = makeBag({ base: b, patches: p }); o.position.set(ROOM.maxX - 0.17, 1.3, hooks[i + 1]); o.rotation.y = -Math.PI / 2 + (Math.random() - 0.5) * 0.4; root.add(o); setBagOpen(o, 0);
  });
  const bagCtl = journey.bagCtl, bag = bagCtl.bag;
  const BAG_HOME = new THREE.Vector3(ROOM.maxX - 0.17, 1.3, hooks[0]);
  const bagDef = interactor.add(bag, { label: 'Take your bag' });

  // ---------- daydream (a glimpse of school) ----------
  const dream = new THREE.Group(); dream.position.set(TX, 0, TZ); root.add(dream);
  const dreamMats = [];
  const dm = (o) => { const m = new THREE.MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false, fog: false, ...o }); dreamMats.push(m); return m; };
  const chalk = new THREE.Mesh(new THREE.PlaneGeometry(1.7, 1.06), dm({ map: T.chalkboard() })); chalk.position.set(0, 2.0, -1.25); dream.add(chalk);
  const book = new THREE.Mesh(new THREE.PlaneGeometry(0.34, 0.24), dm({ map: T.notebookPage(), side: THREE.DoubleSide })); book.rotation.x = -Math.PI / 2 + 0.25; book.position.set(0.0, TABLE_H + 0.02, 0.3); dream.add(book);
  const dreamLight = new THREE.PointLight(0xfff0c8, 0, 4, 1.5); dreamLight.position.set(0, 1.9, 0.2); dream.add(dreamLight);
  dream.visible = false;

  // ---------- dust ----------
  const DUST = 700;
  const dustGeo = new THREE.BufferGeometry();
  const dp = new Float32Array(DUST * 3);
  for (let i = 0; i < DUST; i++) { dp[i * 3] = lerp(ROOM.minX, ROOM.maxX, Math.random()); dp[i * 3 + 1] = Math.random() * 3.6; dp[i * 3 + 2] = lerp(ROOM.minZ, ROOM.maxZ, Math.random()); }
  dustGeo.setAttribute('position', new THREE.BufferAttribute(dp, 3));
  const dust = new THREE.Points(dustGeo, new THREE.PointsMaterial({ size: 0.025, map: T.dot(), transparent: true, opacity: 0.55, color: 0xffd9a0, blending: THREE.AdditiveBlending, depthWrite: false }));
  root.add(dust);

  const headPos = new THREE.Vector3(), tmp = new THREE.Vector3(), tmp2 = new THREE.Vector3();

  root.traverse(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
  [shaft, yard, ...kids].forEach(o => { o.castShadow = false; o.receiveShadow = false; });

  // =================================================================================
  // SOUND
  let sounds = [], snd = {};
  function startSounds() {
    audio.stopAll(sounds); sounds = [];
    const add = (k, a) => { snd[k] = a; sounds.push(a); return a; };
    add('room', audio.loop('room', { volume: 0.15 }));
    add('machine', audio.loop('sewing', { object: machineSoundObj, volume: 0, ref: 0.8 }));
    add('idle', audio.loop('hum', { object: machineSoundObj, volume: 0.07, ref: 0.8 }));
    const facts = [[-3.6, -1.5], [1.6, -1.5], [-1.0, 1.25], [1.6, -4.25]];
    snd.factory = facts.map(([x, z], i) => { const o = new THREE.Object3D(); o.position.set(x, 1.3, z); root.add(o); return add('f' + i, audio.loop('factory', { object: o, volume: 0.25, rate: 0.92 + i * 0.05, ref: 1.8 })); });
    snd.chatter = [[-3.6, -0.5], [1.6, -3.4]].map(([x, z], i) => { const o = new THREE.Object3D(); o.position.set(x, 1.6, z); root.add(o); return add('c' + i, audio.loop('chatter', { object: o, volume: 0.2, ref: 1.5 })); });
    add('fan', audio.loop('hum', { object: fan, volume: 0.1, rate: 0.7, ref: 1.2 }));
    add('children', audio.loop('children', { object: windowSound, volume: 0.15, ref: 1.2 }));
    add('street', audio.loop('street', { object: doorSound, volume: 0.03, ref: 1.5 }));
  }
  function stopSounds() { audio.stopAll(sounds); sounds = []; snd = {}; }

  // =================================================================================
  // STORY
  const S = {
    phase: 'idle', t: 0, pieces: 0, progress: 0, pushing: false, idle: 0, anim: null,
    factoryWork: 1, bagHeld: false, bagForceOpen: 0, coinsIn: 0, schoolBellT: 18, gaze: 0, dreamK: 0, windowGlow: 0,
  };
  const flying = [];

  function hint(text, secs = 5) { if (!player.inVR && settings.hints) ui.hint(text, secs); }
  function setPhase(p) { S.phase = p; S.t = 0; S.idle = 0; interactor.urgency = 1; if (debug) debug.textContent = 'phase: ' + p; }
  let doorOpen = false, exploring = false, exploreDoor = true;
  function setColliders(open) { doorOpen = open; refreshColliders(); }

  pileDef.enabled = () => S.phase === 'pick';
  pileDef.onPress = () => {
    if (S.phase !== 'pick') return;
    const top = pileLayers[pileLayers.length - 1 - S.pieces];
    if (top) top.visible = false;
    piece.material.map = fabricTex[(pileLayers.length - 1 - S.pieces) % fabricTex.length];
    piece.visible = true;
    S.anim = { from: leftPile.localToWorld(new THREE.Vector3(0, 0.2, 0)), to: NEEDLE.clone().add(new THREE.Vector3(0, 0, 0.2)), t: 0, dur: 0.45 };
    audio.oneShot('fabric', { object: machineSoundObj, volume: 0.7 });
    S.progress = 0;
    setPhase('placing');
  };
  machineDef.enabled = () => S.phase === 'push';
  machineDef.onPress = () => { if (S.phase === 'push') S.pushing = true; };
  machineDef.onRelease = () => { S.pushing = false; };
  bagDef.enabled = () => S.phase === 'toBag';
  bagDef.onPress = () => {
    if (S.phase !== 'toBag') return;
    S.bagHeld = true; journey.hasBag = true;
    bagCtl.attach();
    audio.oneShot('fabric', { object: bag, volume: 0.6, rate: 0.8 });
    setPhase('toWages');
    interactor.active = foremanDef;
    hint('Take it to the supervisor at his desk', 5);
  };
  foremanDef.enabled = () => S.phase === 'toWages';
  foremanDef.onPress = () => {
    if (S.phase !== 'toWages') return;
    setPhase('paying'); interactor.active = null; foreman.userData.reach = true;
    ui.subtitle('Supervisor: "Here. Same time tomorrow."', 3.5);
  };
  doorDef.enabled = () => S.phase === 'toDoor' || !!exploring;
  doorDef.onPress = () => {
    if (exploring) { exploreDoor = !exploreDoor; audio.oneShot('door', { object: doorSound, volume: 0.8 }); return; }
    if (S.phase !== 'toDoor') return;
    setPhase('opening'); interactor.active = null;
    audio.oneShot('door', { object: doorSound, volume: 1 });
  };

  function reset() {
    flying.forEach(f => root.remove(f.mesh)); flying.length = 0;
    Object.assign(S, { pieces: 0, progress: 0, pushing: false, factoryWork: 1, bagHeld: false, bagForceOpen: 0, coinsIn: 0, anim: null, ended: false, dreamK: 0, windowGlow: 0 });
    journey.coins = 0; journey.hasBag = false;
    pileLayers.forEach(l => { l.visible = true; });
    rightPile.clear();
    piece.visible = false;
    bagCtl.home(root, BAG_HOME, -Math.PI / 2); bagCtl.reset();
    doorPivot.rotation.y = 0; doorLight.intensity = 0;
    foreman.userData.reach = false; foreman.userData.look = 0;
    figures.forEach(f => { f.userData.work = 1; });
    machines.forEach(({ m, isPlayer }) => { m.userData.speed = isPlayer ? 0 : 1; });
    dream.visible = false; dreamMats.forEach(m => { m.opacity = 0; }); dreamLight.intensity = 0;
    interactor.active = null;
    player.canMove = false;
    player.bounds = null;
    setColliders(false);
    setPhase('idle');
  }

  function start() {
    reset();
    player.place(SEAT.x, SEAT.z, 0, 1.3);
    startSounds();
    setPhase('intro');
  }
  function stop() { stopSounds(); if (S.phase !== 'done') setPhase('idle'); }

  function dropCoin(i) {
    const c = cyl(0.022, 0.022, 0.006, M(0xb8913a, { metalness: 0.8, roughness: 0.35 }), 12, root);
    c.position.copy(foreman.userData.arms[1].hand.getWorldPosition(tmp));
    flying.push({ mesh: c, from: c.position.clone(), t: 0, dur: 0.75, i });
  }

  // ---------- per-frame ----------
  function update(dt, t, active = true) {
    figures.forEach(f => { f.userData.work = lerp(f.userData.work, S.factoryWork, dt * 1.5); animateFigure(f, t, dt); });
    animateFigure(foreman, t, dt);
    machines.forEach(({ m, isPlayer }) => { if (!isPlayer) m.userData.speed = lerp(m.userData.speed, S.factoryWork, dt * 1.5); animateMachine(m, t, dt); });
    fan.rotation.y += dt * 1.6;
    if (exploring) doorPivot.rotation.y = lerp(doorPivot.rotation.y, exploreDoor ? -1.5 : 0, dt * 4);
    cloths.forEach((c, i) => { c.rotation.x = 0.06 * Math.sin(t * 0.8 + i); });
    kids.forEach(k => {
      const u = k.userData; k.position.z += u.dir * u.speed * dt;
      if (k.position.z > wzc + 3 || k.position.z < wzc - 3) u.dir *= -1;
      k.position.y = 0.9 + Math.abs(Math.sin(t * 6 * u.speed + u.ph)) * 0.05;
    });
    bulbs.forEach(b => { if (!b.light) return; b.light.intensity = b.base * (1 + 0.03 * Math.sin(t * 2.3 + b.flick)); });

    mHand.rotation.z = -t * 0.02; hHand.rotation.z = -Math.PI * 2 * (6.6 / 12) - t * 0.0017;
    if (dust.visible) {
      const p = dust.geometry.attributes.position;
      for (let i = 0; i < DUST; i++) { let y = p.getY(i) + dt * 0.03; if (y > 3.6) y = 0; p.setY(i, y); p.setX(i, p.getX(i) + Math.sin(t * 0.3 + i) * dt * 0.02); }
      p.needsUpdate = true;
    }

    if (S.phase === 'idle' || S.phase === 'done' || !active) return;
    S.t += dt; S.idle += dt;
    interactor.urgency = S.idle > 20 ? 2.4 : 1;
    if (S.idle > 20 && S.idle - dt <= 20) remindIdle();

    // looking out of the window turns up the schoolyard
    player.headWorld(headPos);
    player.camera.getWorldDirection(tmp);
    tmp2.set(wx, wyc, wzc).sub(headPos).normalize();
    const looking = tmp.dot(tmp2) > 0.85 && headPos.distanceTo(tmp2.set(wx, wyc, wzc)) < 5;
    S.gaze = lerp(S.gaze, looking ? 1 : 0, dt * 1.5);
    S.schoolBellT -= dt;
    if (S.schoolBellT < 0 && S.phase !== 'outside') { S.schoolBellT = 30 + Math.random() * 15; audio.oneShot('schoolBell', { object: windowSound, volume: 0.25 + S.gaze * 0.4 }); }

    const pm = playerMachine.userData;
    pm.speed = lerp(pm.speed, S.pushing && S.phase === 'push' ? 1 : 0, dt * 8);
    if (snd.machine) snd.machine.setVolume(pm.speed * 0.55 * (1 - 0.6 * S.dreamK));
    if (snd.children) snd.children.setVolume(0.15 + 0.55 * Math.max(S.gaze, S.dreamK));
    if (snd.factory) snd.factory.forEach(a => a.setVolume(0.25 * S.factoryWork * (1 - 0.6 * S.dreamK) + 0.01));
    if (snd.chatter) snd.chatter.forEach(a => a.setVolume(0.2 + (1 - S.factoryWork) * 0.25));
    sun.intensity = 70 * (1 + 1.4 * S.windowGlow + 0.3 * S.gaze);
    shaftMat.opacity = 0.2 * (1 + 1.2 * S.windowGlow);

    switch (S.phase) {
      case 'intro':
        if (S.t > 1.2 && S.t - dt <= 1.2) thought('Four more pieces. Then I can go home.', 4.5);
        if (S.t > 5) { setPhase('pick'); interactor.active = pileDef; hint('Look around with the mouse · click the fabric on your left', 6); }
        break;
      case 'placing': {
        const a = S.anim; a.t += dt / a.dur; const k = ease(Math.min(1, a.t));
        piece.position.lerpVectors(a.from, a.to, k); piece.position.y += Math.sin(k * Math.PI) * 0.12;
        piece.rotation.set(0, (1 - k) * 0.6, 0);
        if (a.t >= 1) { setPhase('push'); interactor.active = machineDef; if (S.pieces === 0) hint('Hold the mouse button on the machine to push the fabric through', 6); }
        break;
      }
      case 'push':
        if (S.pushing) { S.progress += dt / 3.2; S.idle = 0; }
        piece.position.set(NEEDLE.x + Math.sin(S.progress * 30) * 0.004 * (S.pushing ? 1 : 0), NEEDLE.y, NEEDLE.z + 0.2 - S.progress * 0.4);
        if (S.progress >= 1) {
          audio.oneShot('fabric', { object: machineSoundObj, volume: 0.7, rate: 1.2 });
          S.anim = { from: piece.position.clone(), to: rightPile.localToWorld(new THREE.Vector3(0, 0.02 + S.pieces * 0.024, 0)), t: 0, dur: 0.5 };
          S.pushing = false; interactor.active = null;
          setPhase('folding');
        }
        break;
      case 'folding': {
        const a = S.anim; a.t += dt / a.dur; const k = ease(Math.min(1, a.t));
        piece.position.lerpVectors(a.from, a.to, k); piece.position.y += Math.sin(k * Math.PI) * 0.15;
        piece.scale.set(1, 1, 1 - 0.4 * k);
        if (a.t >= 1) {
          piece.visible = false; piece.scale.set(1, 1, 1);
          const folded = box(0.32, 0.024, 0.24, new THREE.MeshStandardMaterial({ map: piece.material.map, roughness: 0.9 }), 0, 0.012 + S.pieces * 0.024, 0, rightPile);
          folded.rotation.y = (Math.random() - 0.5) * 0.2;
          S.pieces++;
          if (S.pieces === 2) startDream('school');
          else if (S.pieces === 3) startDream('window');
          else if (S.pieces >= QUOTA) { setPhase('shiftEnd'); audio.oneShot('shiftBell', { volume: 0.55 }); }
          else { setPhase('pick'); interactor.active = pileDef; }
        }
        break;
      }
      case 'dream': {
        const k = S.t < 1.2 ? S.t / 1.2 : S.t > 4.2 ? Math.max(0, 1 - (S.t - 4.2) / 1.3) : 1;
        S.dreamK = S.dream === 'school' ? k : k * 0.4;
        if (S.dream === 'school') { dream.visible = true; dreamMats.forEach(m => { m.opacity = k * 0.85; }); dreamLight.intensity = k * 4; }
        else S.windowGlow = k;
        if (S.t > 5.5) { dream.visible = false; S.dreamK = 0; S.windowGlow = 0; setPhase('pick'); interactor.active = pileDef; }
        break;
      }
      case 'shiftEnd':
        S.factoryWork = Math.max(0, 1 - S.t / 2.5);
        if (S.t > 0.6 && S.t - dt <= 0.6) thought('Finally.', 2.5);
        if (S.t > 2.8) setPhase('standing');
        break;
      case 'standing': {
        const k = ease(Math.min(1, S.t / 1.6));
        if (!player.inVR) { player.eye = lerp(1.3, 1.52, k); player.dolly.position.z = lerp(SEAT.z, SEAT.z + 0.6, k); }
        if (S.t > 1.7) {
          player.canMove = true;
          setPhase('toBag'); interactor.active = bagDef;
          hint('W A S D to walk · hold Shift to run · follow the red thread to your bag', 7);
        }
        break;
      }
      case 'paying':
        if (S.t > 0.6 && S.coinsIn + flying.length < 3 && S.t > 0.6 + (S.coinsIn + flying.length) * 0.7) dropCoin(S.coinsIn + flying.length);
        S.bagForceOpen = 1; bagCtl.forceOpen = 1;
        if (S.coinsIn >= 3 && S.t > 3.6) {
          foreman.userData.reach = false; S.bagForceOpen = 0; bagCtl.forceOpen = 0;
          setPhase('toDoor'); interactor.active = doorDef;
          thought('Three coins. A whole day.', 4.5);
          setTimeout(() => { if (S.phase === 'toDoor') hint('Hold Q to look inside your bag · then go home', 6); }, 4000);
        }
        break;
      case 'opening': {
        const k = ease(Math.min(1, S.t / 1.4));
        doorPivot.rotation.y = -k * 1.5;
        doorLight.intensity = k * 8;
        if (snd.street) snd.street.setVolume(0.03 + k * 0.6);
        if (S.t > 1.0 && S.t - dt <= 1.0) setColliders(true);
        if (S.t > 1.5) { setPhase('outside'); thought('Something to eat first.', 3.5); }
        break;
      }
      case 'outside': {
        // the factory falls quiet behind you
        if (snd.room) snd.room.setVolume(Math.max(0, 0.15 - S.t * 0.05));
        // stepping through the doorway hands over to Space 2
        if (headPos.x > ROOM.maxX + 0.6 && !S.ended) { S.ended = true; guide.clear(); setPhase('done'); onEndFn && onEndFn('street'); }
        break;
      }
    }

    // coins in flight
    for (let i = flying.length - 1; i >= 0; i--) {
      const f = flying[i]; f.t += dt / f.dur;
      const to = bag.getWorldPosition(tmp).add(tmp2.set(0, 0.12, 0));
      f.mesh.position.lerpVectors(f.from, to, ease(Math.min(1, f.t)));
      f.mesh.position.y += Math.sin(Math.min(1, f.t) * Math.PI) * 0.25;
      f.mesh.rotation.x += dt * 12;
      if (f.t >= 1) {
        root.remove(f.mesh); flying.splice(i, 1);
        S.coinsIn++; journey.coins = S.coinsIn; bagCtl.setContents({ coins: S.coinsIn });
        audio.oneShot('coin', { object: bag, volume: 0.9, rate: 0.95 + Math.random() * 0.1 });
      }
    }

    // the supervisor watches you once you're up
    if (['toBag', 'toWages', 'paying', 'toDoor'].includes(S.phase)) {
      const dx = headPos.x - foreman.position.x, dz = headPos.z - foreman.position.z;
      foreman.userData.look = clamp(Math.atan2(-dx, -dz) - foreman.rotation.y, -0.9, 0.9);
    }

    // red thread to the current goal
    const goals = {
      toBag: BAG_HOME, toWages: new THREE.Vector3(5.0, 1.2, 4.6), toDoor: new THREE.Vector3(ROOM.maxX - 0.1, 1.2, (DOOR.z0 + DOOR.z1) / 2),
      outside: new THREE.Vector3(ALLEY.x0 + 2.5, 1.0, (ALLEY.z0 + ALLEY.z1) / 2),
    };
    guide.set(goals[S.phase] || null);
    guide.urgent = S.idle > 20;
  }

  function startDream(kind) {
    S.dream = kind;
    setPhase('dream');
    audio.oneShot('schoolBell', { object: kind === 'school' ? machineSoundObj : windowSound, volume: kind === 'school' ? 0.45 : 0.6 });
    thought(kind === 'school' ? 'I used to know all my letters.' : 'They\'re learning to read right now.', 4.5);
  }

  function remindIdle() {
    const m = {
      pick: 'Click the fabric on your left', push: 'Hold the mouse button on the machine',
      toBag: 'Follow the red thread to your bag by the door', toWages: 'Click the supervisor at his desk',
      toDoor: 'Click the door to go outside', outside: 'Follow the red thread out into the street',
    }[S.phase];
    if (m) hint(m, 5);
  }

  // ---------- cinematic camera for the title screen ----------
  function cine(cam, t) {
    const k = 0.5 - 0.5 * Math.cos(t * Math.PI * 2 / 80);
    const x = lerp(-6.4, 2.4, k);
    cam.position.set(x, 1.18 + 0.03 * Math.sin(t * 0.5), -0.25);
    cam.lookAt(x + 2.5, 1.35, -0.25 + 1.4 * Math.sin(t * 0.09) + 0.4);
  }

  function setQuality(q) { dust.visible = q === 'high'; shaft.visible = q === 'high'; }
  function setShadows(on) { sun.castShadow = on; }

  let onEndFn = null;
  return {
    root, update, start, stop, reset, cine, setQuality, setShadows,
    onEnd(fn) { onEndFn = fn; },
    get phase() { return S.phase; },
    // headset taken off mid-game: move the bag from the VR hand back to the desktop view
    reattachBag() { if (bagCtl.held) bagCtl.attach(); },
    explore(on) { exploring = on; if (on) { S.savedDoor = doorPivot.rotation.y; exploreDoor = true; } else doorPivot.rotation.y = S.savedDoor ?? doorPivot.rotation.y; },
    getColliders() { return doorOpen ? colliders : [...colliders, doorCollider]; },
    zone: { minX: -8.5, maxX: 8.6 },
    skip() {
      const p = S.phase;
      if (p === 'intro' || p === 'dream' || p === 'shiftEnd' || p === 'standing' || p === 'paying' || p === 'opening') S.t = 99;
      else if (p === 'pick') pileDef.onPress();
      else if (p === 'push') S.progress = 1;
      else if (p === 'toBag') { player.place(BAG_HOME.x - 1.0, BAG_HOME.z, -Math.PI / 2, 1.52); bagDef.onPress(); }
      else if (p === 'toWages') { player.place(5.0, 3.6, 0, 1.52); foremanDef.onPress(); }
      else if (p === 'toDoor') { player.place(ROOM.maxX - 1.2, (DOOR.z0 + DOOR.z1) / 2, -Math.PI / 2, 1.52); doorDef.onPress(); }
      else if (p === 'outside') player.place(ROOM.maxX + 1, (ALLEY.z0 + ALLEY.z1) / 2, -Math.PI / 2, 1.52);
    },
  };
}

// ---------------------------------------------------------------------------------
function makeMachine() {
  const g = new THREE.Group();
  const enamel = M(0x1a1a18, { roughness: 0.5, metalness: 0.3 });
  const gold = M(0x7a6a3a, { roughness: 0.6, metalness: 0.5 });
  const steel = M(0x9a9a98, { roughness: 0.3, metalness: 0.8 });
  box(0.64, 0.05, 0.32, enamel, 0, 0.025, 0, g);
  box(0.11, 0.27, 0.16, enamel, 0.24, 0.18, 0, g);
  box(0.58, 0.09, 0.13, enamel, -0.02, 0.33, 0, g);
  box(0.3, 0.008, 0.132, gold, -0.06, 0.376, 0, g);
  box(0.11, 0.21, 0.14, enamel, -0.26, 0.24, 0, g);
  const needle = cyl(0.006, 0.006, 0.13, steel, 5, g); needle.position.set(-0.26, 0.12, 0.02);
  box(0.04, 0.01, 0.06, steel, -0.26, 0.058, 0.02, g);
  const wheel = cyl(0.075, 0.075, 0.03, M(0x2a2a28, { metalness: 0.5, roughness: 0.4 }), 14, g);
  wheel.rotation.z = Math.PI / 2; wheel.position.set(0.32, 0.3, 0);
  cyl(0.025, 0.025, 0.05, M(0xd23a2c), 8, g).position.set(0.05, 0.4, 0);
  g.userData = { needle, wheel, speed: 0 };
  return g;
}
function animateMachine(m, t, dt) {
  const u = m.userData;
  u.ph = (u.ph || 0) + dt * u.speed * 14 * Math.PI * 2;
  u.needle.position.y = 0.12 + 0.025 * Math.sin(u.ph);
  u.wheel.rotation.x += dt * u.speed * 18;
}
