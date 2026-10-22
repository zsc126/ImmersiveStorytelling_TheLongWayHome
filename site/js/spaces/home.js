// The Long Way Home — created by Sicheng Zheng. © 2026 Sicheng Zheng. All rights reserved.
// ENDING — HOME
// Board notes: they finally reach home and burst through the door. A glowing door — passing
// through reverts the view into reality. They see the state of their home, reflecting their
// poverty. The police yelling and their footsteps pass the house. They can look around or close
// their eyes; when they close their eyes they hear the machines from the beginning again, and a
// message gives the statistics of people living in their situation.
// Key object: the food is finally placed on the family's table.
import * as THREE from 'three';
import * as T from '../textures.js';
import { M, TM, box, cyl, makeFigure, animateFigure, fabricMat, lerp, ease } from '../kit.js';
import { HOME_DOOR } from './nightmare.js';

export const HOME = { x0: 82, x1: 88, z0: 10, z1: 15.4, h: 2.8, door: { z0: 12, z1: 13.4 } };

export function buildHome(ctx) {
  const { scene, audio, interactor, player, ui, settings, debug, journey, guide, police } = ctx;
  const root = new THREE.Group(); root.name = 'home'; scene.add(root);
  const bagCtl = journey.bagCtl;
  const { x0, x1, z0, z1, h } = HOME;
  const cx = (x0 + x1) / 2, cz = (z0 + z1) / 2, W = x1 - x0, D = z1 - z0;

  // ---------- shell: mud-plastered brick, earth floor, tin roof ----------
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(W, D), TM(T.dirtFloor([2, 2]), { color: 0x8a6a4a }));
  floor.rotation.x = -Math.PI / 2; floor.position.set(cx, 0.004, cz); root.add(floor);
  const roof = new THREE.Mesh(new THREE.PlaneGeometry(W, D), TM(T.tin([3, 2]), { side: THREE.DoubleSide, metalness: 0.3 }));
  roof.rotation.x = Math.PI / 2; roof.position.set(cx, h, cz); root.add(roof);
  const wallT = T.wall([1, 1]);
  const wp = (w, hh, x, y, z, ry) => { const t = wallT.clone(); t.needsUpdate = true; t.repeat.set(w / 3, hh / 3); const m = new THREE.Mesh(new THREE.PlaneGeometry(w, hh), TM(t)); m.position.set(x, y, z); m.rotation.y = ry; root.add(m); };
  wp(W, h, cx, h / 2, z0, 0); wp(W, h, cx, h / 2, z1, Math.PI); wp(D, h, x1, h / 2, cz, -Math.PI / 2);
  const dz0 = HOME.door.z0, dz1 = HOME.door.z1, dh = 2.0;
  wp(dz0 - z0, h, x0, h / 2, (z0 + dz0) / 2, Math.PI / 2); wp(z1 - dz1, h, x0, h / 2, (dz1 + z1) / 2, Math.PI / 2); wp(dz1 - dz0, h - dh, x0, (h + dh) / 2, (dz0 + dz1) / 2, Math.PI / 2);
  // the outside of the front wall, with the glowing doorway seen from the alley
  const ext = (w, hh, x, y, z) => { const m = new THREE.Mesh(new THREE.PlaneGeometry(w, hh), TM(T.facade('#9a8a70', [w / 4, hh / 4]))); m.position.set(x, y, z); m.rotation.y = -Math.PI / 2; root.add(m); };
  ext(dz0 - z0 + 1.4, 4, x0 - 0.03, 2, (z0 - 1.4 + dz0) / 2); ext(z1 - dz1 + 1, 4, x0 - 0.03, 2, (dz1 + z1 + 1) / 2); ext(dz1 - dz0, 4 - dh, x0 - 0.03, (4 + dh) / 2, (dz0 + dz1) / 2);
  const glowMat = new THREE.MeshBasicMaterial({ color: 0xffe0a0, toneMapped: false, transparent: true, opacity: 0.9, side: THREE.DoubleSide });
  const glowDoor = new THREE.Mesh(new THREE.PlaneGeometry(dz1 - dz0, dh), glowMat);
  glowDoor.position.set(x0 - 0.02, dh / 2, (dz0 + dz1) / 2); glowDoor.rotation.y = -Math.PI / 2; root.add(glowDoor);
  const doorLight = new THREE.PointLight(0xffd090, 0, 7, 1.4); doorLight.position.set(x0 - 1.0, 1.4, (dz0 + dz1) / 2); root.add(doorLight);
  // the real door (closed behind you once you're in)
  const doorPivot = new THREE.Group(); doorPivot.position.set(x0 + 0.03, 0, dz0); root.add(doorPivot);
  box(0.04, dh, dz1 - dz0, TM(T.plywood()), 0, dh / 2, (dz1 - dz0) / 2, doorPivot);

  // ---------- inside: what little there is ----------
  const wood = TM(T.plywood());
  // low table (chowki) with empty steel plates
  const table = new THREE.Group(); table.position.set(85, 0, 12.7); root.add(table);
  box(0.9, 0.05, 0.6, wood, 0, 0.32, 0, table);
  [[-0.4, -0.25], [0.4, -0.25], [-0.4, 0.25], [0.4, 0.25]].forEach(([a, b]) => box(0.05, 0.3, 0.05, wood, a, 0.15, b, table));
  const steel = M(0xb8b8b4, { metalness: 0.85, roughness: 0.25 });
  [-0.2, 0.2].forEach(px => { const pl = cyl(0.13, 0.11, 0.015, steel, 18, table); pl.position.set(px, 0.355, 0); });
  cyl(0.035, 0.03, 0.09, steel, 10, table).position.set(0.35, 0.39, 0.18);
  const meal = new THREE.Group(); meal.visible = false; meal.position.set(0, 0.37, 0); table.add(meal);
  box(0.24, 0.1, 0.18, M(0xd8b070, { roughness: 0.8 }), 0, 0.05, 0, meal);
  // sleeping mat with the little brother under a blanket
  const mat = new THREE.Mesh(new THREE.PlaneGeometry(1.6, 0.9), fabricMat(1)); mat.rotation.x = -Math.PI / 2; mat.position.set(86.6, 0.01, 10.9); root.add(mat);
  const sib = makeFigure({ floor: true, scale: 0.7, cloth: 0x6a6a7a, skin: 0x5a3a26 });
  sib.rotation.set(0, Math.PI / 2, Math.PI / 2); sib.position.set(86.2, 0.12, 10.9); root.add(sib);
  const blanket = box(0.9, 0.12, 0.6, fabricMat(4, { flatShading: true }), 86.7, 0.08, 10.9, root);
  const pillow = box(0.3, 0.08, 0.4, M(0xd8d0c0), 85.9, 0.05, 10.9, root);
  // mother by the clay stove
  const chulha = new THREE.Group(); chulha.position.set(87.3, 0, 14.7); root.add(chulha);
  const clay = M(0x8a5a3a, { roughness: 1, flatShading: true });
  box(0.5, 0.3, 0.12, clay, 0, 0.15, -0.2, chulha); box(0.12, 0.3, 0.5, clay, -0.2, 0.15, 0, chulha); box(0.12, 0.3, 0.5, clay, 0.2, 0.15, 0, chulha);
  const ember = new THREE.Mesh(new THREE.SphereGeometry(0.1, 8, 6), new THREE.MeshBasicMaterial({ color: 0xff6a20, toneMapped: false })); ember.scale.y = 0.4; ember.position.set(0, 0.06, 0); chulha.add(ember);
  const pot = cyl(0.17, 0.13, 0.18, M(0x3a3a38, { metalness: 0.5, roughness: 0.5 }), 12, chulha); pot.position.y = 0.4;
  const mother = makeFigure({ floor: true, scale: 1.2, cloth: 0x7a3a4a, cloth2: 0x9a5a3a, sari: true, bun: true, skin: 0x6b4630 });
  mother.position.set(86.6, 0, 14.2); mother.rotation.y = Math.PI / 2 + 0.5; root.add(mother);
  mother.userData.arms.forEach(a => { a.sh.rotation.x = 0.6; a.el.rotation.x = 0.8; });
  // shelf with a few utensils, a tin trunk, clothes on a rope, a small picture, the lamp
  box(0.9, 0.03, 0.25, wood, 87.85, 1.4, 12.5, root).rotation.y = Math.PI / 2;
  for (let k = 0; k < 4; k++) cyl(0.06, 0.05, 0.1, steel, 10, root).position.set(87.85, 1.47, 12.15 + k * 0.22);
  box(0.8, 0.45, 0.5, TM(T.metal([1, 1], '#4a5a6a'), { metalness: 0.4 }), 82.7, 0.23, 14.9, root);
  const rope = cyl(0.005, 0.005, 3, M(0x3a2a1a), 4, root); rope.rotation.z = Math.PI / 2; rope.position.set(84.6, 2.25, 10.35);
  for (let k = 0; k < 4; k++) { const c = new THREE.Mesh(new THREE.PlaneGeometry(0.4, 0.55), fabricMat(k + 2, { side: THREE.DoubleSide, color: 0x9a8a7a })); c.position.set(83.5 + k * 0.7, 1.97, 10.35); root.add(c); }
  const pic = box(0.3, 0.38, 0.02, M(0xc0902a), 85.5, 1.8, z1 - 0.02, root);
  const lamp = new THREE.Group(); lamp.position.set(87.85, 1.43, 13.3); root.add(lamp);
  cyl(0.05, 0.06, 0.06, M(0x8a6a2a, { metalness: 0.6 }), 10, lamp).position.y = 0.03;
  const flame = new THREE.Mesh(new THREE.SphereGeometry(0.025, 6, 5), new THREE.MeshBasicMaterial({ color: 0xffc060, toneMapped: false })); flame.scale.y = 1.8; flame.position.y = 0.1; lamp.add(flame);
  const lampLight = new THREE.PointLight(0xffa850, 0, 7, 1.5); lampLight.position.set(87.6, 1.6, 13.3); root.add(lampLight);
  const stoveLight = new THREE.PointLight(0xff6a20, 0, 3, 1.5); stoveLight.position.set(87.3, 0.4, 14.5); root.add(stoveLight);
  // a small barred window: night sky
  const win = new THREE.Mesh(new THREE.PlaneGeometry(0.7, 0.5), new THREE.MeshBasicMaterial({ color: 0x1a2440, fog: false })); win.position.set(84.5, 1.8, z0 + 0.02); root.add(win);
  for (let k = 1; k < 4; k++) box(0.015, 0.5, 0.02, M(0x1a1a1a), 84.15 + k * 0.175, 1.8, z0 + 0.03, root);

  const colliders = [
    { minX: x0 - 0.3, maxX: x0, minZ: z0, maxZ: dz0 }, { minX: x0 - 0.3, maxX: x0, minZ: dz1, maxZ: z1 },
    { minX: x0, maxX: x1, minZ: z0 - 0.3, maxZ: z0 }, { minX: x0, maxX: x1, minZ: z1, maxZ: z1 + 0.3 }, { minX: x1, maxX: x1 + 0.3, minZ: z0, maxZ: z1 },
    { minX: 84.5, maxX: 85.5, minZ: 12.35, maxZ: 13.05 },     // table
    { minX: 86.9, maxX: 88, minZ: 13.6, maxZ: 15.4 },         // stove & mother
    { minX: 82, maxX: 83.2, minZ: 14.5, maxZ: 15.4 },         // trunk
  ];
  const doorCollider = { minX: x0 - 0.1, maxX: x0 + 0.1, minZ: dz0, maxZ: dz1 };
  let doorShut = false;
  root.traverse(o => { if (o.isMesh) { o.castShadow = false; o.receiveShadow = false; } });

  // ---------- interactions ----------
  const tableDef = interactor.add(table, { label: 'Put the food down' });
  tableDef.enabled = () => S.phase === 'toTable';
  tableDef.onPress = () => { if (S.phase === 'toTable') { setPhase('giving'); interactor.active = null; } };
  const matDef = interactor.add(mat, { label: 'Lie down' });
  matDef.enabled = () => S.phase === 'rest';
  matDef.onPress = () => { if (S.phase === 'rest') { setPhase('closing'); interactor.active = null; } };

  // ---------- sound ----------
  let sounds = [], snd = {};
  const passer = new THREE.Object3D(); scene.add(passer);
  function startSounds() {
    audio.stopAll(sounds); sounds = [];
    const add = (k, a) => { snd[k] = a; sounds.push(a); return a; };
    add('fire', audio.loop('fire', { object: chulha, volume: 0.5, ref: 1 }));
    add('drip', audio.loop('drip', { volume: 0.12 }));
    add('wind', audio.loop('wind', { volume: 0.15 }));
    add('yells', audio.loop('yells', { object: passer, volume: 0.6, ref: 2, rate: 0.9 }));
  }

  // ---------- story ----------
  const S = { phase: 'idle', t: 0, idle: 0, holdC: 0 };
  const head = new THREE.Vector3();
  const eyelids = document.getElementById('eyelids');
  function hint(text, secs = 5) { if (!player.inVR && settings.hints) ui.hint(text, secs); }
  function setPhase(p) { S.phase = p; S.t = 0; S.idle = 0; if (debug) debug.textContent = 'phase: ' + p; }
  function setDoor(shut) { doorShut = shut; ctx.refreshColliders(); }

  function reset() {
    Object.assign(S, { phase: 'idle', t: 0, idle: 0, holdC: 0 });
    meal.visible = false; glowMat.opacity = 0.9; glowDoor.visible = true; doorPivot.visible = false;
    lampLight.intensity = 0; stoveLight.intensity = 0; doorLight.intensity = 0;
    mother.rotation.y = Math.PI / 2 + 0.5; mother.userData.look = 0;
    eyelids.style.setProperty('--lid', '0');
    setDoor(false);
  }
  function start() {
    reset(); startSounds();
    // through the glowing door: a flash, then reality
    ui.fade(true, true);
    setTimeout(() => ui.fade(false), 350);
    player.place(x0 + 0.9, (dz0 + dz1) / 2, -Math.PI / 2, 1.52);
    police.forEach(p => { p.visible = false; });
    bagCtl.glow = 0; bagCtl.heavy = 0; player.speedScale = 1; player.canRun = false;
    glowDoor.visible = false; doorPivot.visible = true; setDoor(true);
    audio.oneShot('doorWood', { volume: 0.8 });
    setPhase('arrive');
  }
  function stop() { audio.stopAll(sounds); sounds = []; snd = {}; eyelids.style.setProperty('--lid', '0'); }

  function update(dt, t, active = true) {
    // the doorway glows while you run toward it
    glowMat.opacity = 0.75 + 0.25 * Math.sin(t * 3);
    flame.scale.set(1 + Math.sin(t * 17) * 0.1, 1.8 + Math.sin(t * 11) * 0.3, 1);
    animateFigure(mother, t, dt);
    if (ctx.currentSpace() === 'nightmare') doorLight.intensity = 6;
    if (S.phase === 'idle' || S.phase === 'done' || !active) return;
    S.t += dt; S.idle += dt;
    player.headWorld(head);
    lampLight.intensity = 5 * (1 + 0.05 * Math.sin(t * 9)); stoveLight.intensity = 1.2; doorLight.intensity = 0;
    // the police pass outside the house and fade away down the lane
    passer.position.set(lerp(66, 96, Math.min(1, S.t / 9)), 1.5, 12.7);
    if (snd.yells) snd.yells.setVolume(Math.max(0, 0.6 * (1 - S.t / 10)));
    if (S.t > 0.5 && S.t < 7) { const sp = Math.floor(S.t * 3); if (sp !== S.lastStep) { S.lastStep = sp; audio.oneShot('step', { object: passer, volume: 0.6, ref: 2 }); } }

    switch (S.phase) {
      case 'arrive':
        if (S.t > 0.8 && S.t - dt <= 0.8) ctx.thought('Home.', 3);
        if (S.t > 4 && S.t - dt <= 4) ui.subtitle('(the shouting outside fades away)', 3);
        mother.userData.look = Math.sin(S.t * 0.6) * 0.2 - 0.5;
        if (S.t > 3) { setPhase('toTable'); interactor.active = tableDef; guide.set(new THREE.Vector3(85, 0.5, 12.7)); hint('Put the food on the table', 6); }
        break;
      case 'giving':
        if (S.t < dt * 1.5) { guide.clear(); bagCtl.forceOpen = 1; }
        if (S.t > 0.8 && S.t - dt <= 0.8) { bagCtl.setContents({ food: false }); meal.visible = true; audio.oneShot('fabric', { volume: 0.6 }); bagCtl.forceOpen = 0; }
        if (S.t > 1.6) mother.rotation.y = lerp(mother.rotation.y, Math.PI / 2 + 1.2, dt * 1.5);
        if (S.t > 2.0 && S.t - dt <= 2.0) ctx.thought('She doesn\'t ask where it came from.', 4);
        if (S.t > 6.5 && S.t - dt <= 6.5) ctx.thought('Tonight, we eat.', 3.5);
        if (S.t > 10) { setPhase('rest'); interactor.active = matDef; hint(player.inVR ? '' : 'Look around. When you are ready, hold C to close your eyes', 8); }
        break;
      case 'rest':
        if (player.keys.KeyC) S.holdC += dt; else S.holdC = 0;
        eyelids.style.setProperty('--lid', String(Math.min(0.35, S.holdC / 1.5 * 0.35)));
        if (S.holdC > 1.2) { setPhase('closing'); interactor.active = null; }
        if (S.idle > 40) { setPhase('closing'); }
        break;
      case 'closing': {
        // eyes close; the machines start again
        const k = Math.min(1, S.t / 5);
        eyelids.style.setProperty('--lid', String(0.35 + 0.65 * ease(k)));
        if (S.t < dt * 1.5) {
          snd.machines = audio.loop('factory', { volume: 0 }); sounds.push(snd.machines);
          snd.sew = audio.loop('sewing', { volume: 0 }); sounds.push(snd.sew);
        }
        if (snd.machines) snd.machines.setVolume(0.8 * k);
        if (snd.sew) snd.sew.setVolume(0.6 * k);
        if (snd.fire) snd.fire.setVolume(0.5 * (1 - k));
        if (S.t > 0.3 && S.t - dt <= 0.3) ctx.thought('Maybe tomorrow will be better.', 3.6);
        if (S.t > 4.4 && S.t - dt <= 4.4) ctx.thought('…', 2.5);
        if (S.t > 7.5 && !S.ended) { S.ended = true; setPhase('done'); onEndFn && onEndFn('finale'); }
        break;
      }
    }
  }

  function atmosphere() {
    return { fog: new THREE.Color(0x0e0a08), density: 0.03, sun: 0, hemi: 0.32, hemiSky: new THREE.Color(0x6a5a7a), hemiGround: new THREE.Color(0x1a1008) };
  }

  let onEndFn = null;
  return {
    root, update, start, stop, reset, atmosphere,
    zone: { minX: 82, maxX: 90 },
    onEnd(fn) { onEndFn = fn; },
    getColliders() { return doorShut ? [...colliders, doorCollider] : colliders; },
    get phase() { return S.phase; },
    skip() {
      const p = S.phase;
      if (p === 'arrive' || p === 'giving') S.t = 99;
      else if (p === 'toTable') tableDef.onPress();
      else if (p === 'rest') matDef.onPress();
      else if (p === 'closing') S.t = 99;
    },
  };
}
