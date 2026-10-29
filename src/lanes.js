// SPACE 3 · NORMAL EDITION — five lanes, five refusals (docs/nightmare-design.md, v2.4).
// References: Little Nightmares (threats shown before they act; a catch is survivable),
// P.T. (one familiar space that keeps changing), VR-horror studies (dread through meaningful
// interaction and spatial sound, not jump scares). Everything here is VR-safe: nothing moves the
// player's view; what closes in stays above head height or at arm's length.
//   0 DOORS      lit doorways, a figure in each — every door slams before you reach it.
//   1 HANDS      arms push out of cracks in the wall and reach for the bag. One catches it:
//                pull free (click again and again / pull the trigger again and again).
//   2 SKY        the buildings lean in overhead until the sky is a crack.
//   3 WINDOWS    every window lights up: a child at a machine in each, all in the same rhythm.
//                Halfway down they stop and turn to look at you. Then the lights go out.
//   4 LAST DOOR  the bulbs die behind you one by one. Your own door is shut. Knock.
import * as THREE from 'three';
import { M, G, Batcher, lerp, ease, clamp, damp } from './kit.js';
import { T, texMat, facadeMat } from './city.js';

export function buildLanes(ctx, root, say, onOpened) {
  const { audio, ui, player, pursuit, interactor, camera } = ctx;
  const g = new THREE.Group(); g.name = 'lanes'; root.add(g);
  const S = {};
  const tmp = new THREE.Vector3(), dir = new THREE.Vector3();
  const xr = () => !!player.xr;

  // ---------- painted silhouettes (one canvas each; the children share one texture, so they move as one) ----------
  function silTex(kind) {
    const W = 256, H = 256, frames = kind === 'child' ? 3 : 1;
    const c = document.createElement('canvas'); c.width = W * frames; c.height = H; const x = c.getContext('2d');
    const ink = '#0d0907';
    x.fillStyle = ink; x.strokeStyle = ink; x.lineCap = 'round'; x.lineJoin = 'round';
    if (kind === 'adult') x.filter = 'blur(4px)';
    if (kind === 'adult') {
      const o = 128;
      x.beginPath(); x.ellipse(o, 50, 19, 23, 0, 0, Math.PI * 2); x.fill();
      x.beginPath(); x.moveTo(o - 34, 84); x.quadraticCurveTo(o, 74, o + 34, 84); x.lineTo(o + 40, 168); x.lineTo(o + 30, 256); x.lineTo(o - 30, 256); x.lineTo(o - 40, 168); x.closePath(); x.fill();
      x.lineWidth = 15; x.beginPath(); x.moveTo(o + 33, 92); x.lineTo(o + 56, 138); x.lineTo(o + 74, 116); x.stroke();
      x.beginPath(); x.moveTo(o - 33, 92); x.lineTo(o - 44, 168); x.stroke();
      x.filter = 'none';
    } else {
      for (let f = 0; f < 3; f++) {
        const o = f * W, down = f === 1, look = f === 2;
        x.fillStyle = ink;
        // the machine and its table
        x.fillRect(o + 140, 170, 112, 11); x.fillRect(o + 150, 181, 8, 75); x.fillRect(o + 234, 181, 8, 75);
        x.beginPath(); x.moveTo(o + 162, 170); x.lineTo(o + 162, 131); x.quadraticCurveTo(o + 166, 118, o + 198, 118); x.lineTo(o + 238, 118); x.lineTo(o + 238, 170);
        x.lineTo(o + 224, 170); x.lineTo(o + 224, 134); x.lineTo(o + 178, 134); x.lineTo(o + 178, 170); x.closePath(); x.fill();
        x.fillRect(o + 171, 158, 4, down ? 17 : 11);
        // the child, hunched on a stool
        x.fillRect(o + 58, 200, 52, 8); x.fillRect(o + 80, 208, 8, 48);
        x.beginPath(); x.moveTo(o + 64, 203); x.quadraticCurveTo(o + 58, 150, o + 90, 122); x.quadraticCurveTo(o + 118, 118, o + 122, 140); x.lineTo(o + 112, 203); x.closePath(); x.fill();
        x.lineWidth = 12; x.beginPath(); x.moveTo(o + 110, 140); x.lineTo(o + 150, down ? 168 : 158); x.lineTo(o + 170, down ? 170 : 162); x.stroke();
        x.beginPath(); x.moveTo(o + 100, 200); x.lineTo(o + 132, 206); x.lineTo(o + 132, 250); x.stroke();
        if (!look) { x.beginPath(); x.ellipse(o + 121, 112, 17, 19, 0.5, 0, Math.PI * 2); x.fill(); }
        else {
          x.beginPath(); x.ellipse(o + 98, 103, 18, 21, 0, 0, Math.PI * 2); x.fill();
          x.fillStyle = '#e4dcc4'; [91, 105].forEach(ex => { x.beginPath(); x.arc(o + ex, 101, 2.8, 0, Math.PI * 2); x.fill(); });
        }
        x.fillStyle = '#1a120c'; [52, 128, 204].forEach(bx => x.fillRect(o + bx - 4, 0, 8, H));   // bars, like the factory window
      }
    }
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
    if (frames > 1) t.repeat.set(1 / frames, 1);
    return t;
  }

  // ---------- 0 · doors that shut ----------
  const DOORS = [[43.4, 9.6, -1], [45.6, 7.0, 1], [47.9, 9.6, -1], [49.7, 7.0, 1]];
  const VOICES = ['"Go away!"', '"Not here. Go."', '"Chor! Shut it!"', '"We don\'t want trouble."'];
  const adultTex = silTex('adult');
  const roomTex = (() => {
    const c = document.createElement('canvas'); c.width = 128; c.height = 256; const x = c.getContext('2d');
    const gr = x.createRadialGradient(64, 230, 10, 64, 200, 230); gr.addColorStop(0, '#ffd59a'); gr.addColorStop(0.45, '#d88a48'); gr.addColorStop(1, '#3a1e10');
    x.fillStyle = gr; x.fillRect(0, 0, 128, 256);
    x.fillStyle = 'rgba(40,20,10,0.55)'; x.fillRect(0, 170, 128, 3);                     // where the back wall meets the floor
    x.fillStyle = 'rgba(30,15,8,0.5)'; x.fillRect(84, 60, 30, 70);                        // a shelf, a shadow
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
  })();
  const frameM = M(0x2a2018, { flatShading: true, roughness: 1 });
  const shutterGeo = new THREE.PlaneGeometry(1.02, 2.08); shutterGeo.translate(0, -1.04, 0);
  const shutterM = texMat(T.tin(), { metalness: 0.25, side: THREE.DoubleSide, flatShading: true, color: 0x8a8680 });
  const doors = DOORS.map(([x, zw, s], i) => {
    const d = new THREE.Group(); d.position.set(x, 0, zw + s * 0.035); d.rotation.y = s > 0 ? 0 : Math.PI; g.add(d);
    const glowM = new THREE.MeshBasicMaterial({ map: roomTex, transparent: true, opacity: 0.9 });
    const glow = new THREE.Mesh(new THREE.PlaneGeometry(0.96, 2.02), glowM); glow.position.y = 1.01; d.add(glow);
    const silM = new THREE.MeshBasicMaterial({ map: adultTex, transparent: true, depthWrite: false });
    const fig = new THREE.Mesh(new THREE.PlaneGeometry(0.86, 1.8), silM); fig.position.set(i % 2 ? -0.08 : 0.08, 0.9, 0.012); d.add(fig);
    const sh = new THREE.Mesh(shutterGeo, shutterM); sh.position.set(0, 2.06, 0.03); sh.scale.y = 0.001; d.add(sh);
    [[-0.54, 1.06, 0.08, 2.2], [0.54, 1.06, 0.08, 2.2], [0, 2.13, 1.16, 0.1]].forEach(([fx, fy, fw, fh]) => { const m = new THREE.Mesh(G.box(fw, fh, 0.09), frameM); m.position.set(fx, fy, 0.03); d.add(m); });
    return { d, glowM, silM, sh, x, st: 0, t: 0 };
  });

  // ---------- 1 · hands from the wall ----------
  const handM = M(0x3a2619, { flatShading: true, roughness: 0.9 }), sleeveM = M(0x16110e, { flatShading: true, roughness: 1 });
  const crackTex = (() => {
    const c = document.createElement('canvas'); c.width = c.height = 128; const x = c.getContext('2d');
    x.strokeStyle = '#050303'; x.lineCap = 'round'; x.lineJoin = 'round';
    let px = 64, py = 4; x.lineWidth = 5; x.beginPath(); x.moveTo(px, py);
    for (let k = 0; k < 9; k++) { px = 64 + (k % 2 ? 1 : -1) * (6 + (k * 7) % 11); py += 14; x.lineTo(px, py); }
    x.stroke();
    x.fillStyle = '#040202'; x.beginPath(); x.ellipse(64, 64, 15, 22, 0.15, 0, Math.PI * 2); x.fill();    // the gap the arm comes through
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
  })();
  const crackM = new THREE.MeshBasicMaterial({ map: crackTex, transparent: true, depthWrite: false });
  const L = 1.8;
  const ARMS = [{ z: 5.0, y: 1.2 }, { z: 3.3, y: 0.9 }, { z: -0.4, y: 1.0, grab: true }, { z: -2.9, y: 1.35 }];
  const arms = ARMS.map((a, i) => {
    const grp = new THREE.Group(); grp.position.set(54.0, a.y, a.z); g.add(grp);
    const crack = new THREE.Mesh(new THREE.PlaneGeometry(0.5, 0.75), crackM); crack.position.set(53.985, a.y, a.z); crack.rotation.y = -Math.PI / 2; crack.rotation.z = (i % 2 ? 0.3 : -0.2); g.add(crack);
    const slide = new THREE.Group(); grp.add(slide);
    const fore = new THREE.Mesh(G.cyl(0.045, 0.06, L, 7), sleeveM); fore.rotation.x = Math.PI / 2; fore.position.z = -L / 2; slide.add(fore);
    const wrist = new THREE.Mesh(G.cyl(0.04, 0.044, 0.08, 7), handM); wrist.rotation.x = Math.PI / 2; wrist.position.z = 0.03; slide.add(wrist);
    const palm = new THREE.Mesh(G.box(0.1, 0.034, 0.11), handM); palm.position.z = 0.11; slide.add(palm);
    const fingers = [-0.036, -0.012, 0.012, 0.036].map((fx, k) => {
      const piv = new THREE.Group(); piv.position.set(fx, 0, 0.165); slide.add(piv);
      const f = new THREE.Mesh(G.box(0.021, 0.02, 0.085 - Math.abs(k - 1.5) * 0.01), handM); f.position.z = 0.04; piv.add(f);
      return piv;
    });
    const thumb = new THREE.Group(); thumb.position.set(0.055, -0.005, 0.09); thumb.rotation.y = 0.7; slide.add(thumb);
    const tm = new THREE.Mesh(G.box(0.022, 0.022, 0.07), handM); tm.position.z = 0.035; thumb.add(tm);
    grp.traverse(o => { if (o.isMesh) o.castShadow = true; });
    grp.visible = false;
    return { ...a, grp, slide, fingers, thumb, e: 0, done: false, ph: i * 1.3 };
  });
  // the press that pulls you free — any click / trigger while you are caught
  interactor.anyPress = () => { if (S.grab && !S.grab.free) tug(); };
  function tug() {
    const G2 = S.grab; G2.n++; G2.jerk = 1;
    audio.oneShot('fabric', { volume: 0.9, rate: 0.7 + G2.n * 0.08 });
    if (G2.n >= 5) release(false);
  }
  function release(timedOut) {
    S.grab.free = true; S.grab.t = 0; ui.hint('');
    const a = arms.find(o => o.grab); a.done = true;
    if (timedOut) { audio.oneShot('coin', { volume: 0.8 }); say('It took a coin… but not the food.', 3); }
    else say('No! It\'s for home!', 2.5);
  }

  // ---------- 2 · the sky closes ----------
  const leanM = new THREE.MeshStandardMaterial({ map: facadeMat('#8a7c6a', 3, 3, true).map, roughness: 0.95, flatShading: true, side: THREE.DoubleSide });
  const leans = [[-5.93, 1], [-3.47, -1]].map(([z, s]) => {
    const hinge = new THREE.Group(); hinge.position.set(58.9, 3.2, z); g.add(hinge);
    const p = new THREE.Mesh(new THREE.PlaneGeometry(8.6, 10.5), leanM); p.position.y = 5.25; hinge.add(p);
    return { hinge, s };
  });

  // ---------- 3 · the windows ----------
  const childTex = silTex('child');
  const winGlowM = new THREE.MeshBasicMaterial({ color: 0xe0a060, transparent: true, opacity: 0, depthWrite: false });
  const childM = new THREE.MeshBasicMaterial({ map: childTex, transparent: true, opacity: 0, depthWrite: false });
  const WB = new Batcher();
  const glowGeo = new THREE.PlaneGeometry(0.88, 0.78), kidGeo = new THREE.PlaneGeometry(0.86, 0.76);
  for (let z = -2.2; z < 10.6; z += 2.1) {
    [[65.4, Math.PI / 2, 1], [68.0, -Math.PI / 2, -1]].forEach(([x, ry, s], side) => {
      [2.35, 4.45].forEach((y, row) => {
        const zz = z + side * 0.9 + row * 0.35;
        WB.add(G.box(0.04, 0.86, 0.06), frameM, x + s * 0.02, y, zz - 0.47); WB.add(G.box(0.04, 0.86, 0.06), frameM, x + s * 0.02, y, zz + 0.47); WB.add(G.box(0.04, 0.06, 1.0), frameM, x + s * 0.02, y + 0.43, zz); WB.add(G.box(0.08, 0.05, 1.04), frameM, x + s * 0.04, y - 0.43, zz);
        WB.add(glowGeo, winGlowM, x + s * 0.06, y, zz, 0, ry, 0);
        WB.add(kidGeo, childM, x + s * 0.07, y - 0.01, zz, 0, ry, 0);
      });
    });
  }
  WB.build(g, { cast: false, receive: false });
  const sewObj = new THREE.Object3D(); g.add(sewObj);

  // ---------- 4 · the bulbs and the last door ----------
  const halo = T.dot();
  const bulbs = [70.2, 72.6, 75.0, 77.4, 79.8].map(x => {
    const m = new THREE.MeshBasicMaterial({ color: 0xffd9a0 });
    const b = new THREE.Mesh(new THREE.SphereGeometry(0.06, 8, 6), m); b.position.set(x, 2.45, 12.7); g.add(b);
    const w = new THREE.Mesh(G.box(0.01, 0.75, 0.01), sleeveM); w.position.set(x, 2.85, 12.7); g.add(w);
    const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: halo, color: 0xffc070, transparent: true, opacity: 0.55, depthWrite: false, blending: THREE.AdditiveBlending }));
    s.position.copy(b.position); s.scale.setScalar(1.1); g.add(s);
    return { x, m, s, st: 0, t: 0 };
  });
  // your own door: plywood, shut, with light round its edges
  const doorPivot = new THREE.Group(); doorPivot.position.set(81.9, 0, 12.0); g.add(doorPivot);
  const leaf = new THREE.Mesh(G.box(0.045, 2.0, 1.4), texMat(T.plywood(), { color: 0x9a8a78 })); leaf.position.set(0, 1.0, 0.7); leaf.castShadow = true; doorPivot.add(leaf);
  const leakM = new THREE.MeshBasicMaterial({ color: 0xffd090, transparent: true, opacity: 0.9, depthWrite: false });
  [[81.93, 1.0, 13.41, 0.02, 2.0], [81.93, 2.01, 12.7, 1.4, 0.02], [81.93, 0.005, 12.7, 1.4, 0.012]].forEach(([x, y, z, w, h]) => {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), leakM); m.position.set(x - 0.03, y, z); m.rotation.y = -Math.PI / 2; g.add(m);
  });
  const doorCol = { minX: 81.55, maxX: 82.25, minZ: 11.9, maxZ: 13.5 };
  interactor.add({ object: leaf, label: 'Knock', maxDist: 2.4, enabled: () => S.on && S.knocks < 3 && !S.doorOpen && S.alive, onPress: knock });
  function knock() {
    S.knocks++; S.knockT = 0;
    [0, 0.22, 0.44].forEach(d => setTimeout(() => audio.oneShot('doorWood', { object: leaf, volume: 0.9, rate: 1.7 + Math.random() * 0.2, ref: 2 }), d * 1000));
    if (S.knocks === 1) say('Ma! Open the door!', 2.5);
    if (S.knocks === 2) setTimeout(() => ui.subtitle('Mother (inside): "…Who is it?"', 2.6), 900);
    if (S.knocks === 3) { S.safe = true; ui.subtitle('"Ma, it\'s me!"', 2); setTimeout(() => { if (S.on) { S.doorOpen = true; S.openT = 0; audio.oneShot('door', { object: leaf, volume: 0.8, rate: 0.9 }); ctx.refreshColliders(); } }, 1000);
      setTimeout(() => { if (S.on && S.doorOpen && onOpened) onOpened(); }, 2200); }   // home — even if the frame loop is paused (explore mode)
  }

  // ---------- state ----------
  function reset() {
    Object.assign(S, { on: false, alive: false, warp: 0, grab: null, sky: 0, win: 0, winT: 0, dark: 0, knocks: 0, knockT: 0, doorOpen: false, openT: 0, safe: false, said: {}, hinted: false, dim: 0 });
    doors.forEach(o => { o.st = 0; o.t = 0; o.sh.scale.y = 0.001; o.glowM.opacity = 0.9; o.silM.opacity = 1; });
    arms.forEach(a => { a.e = 0; a.done = false; a.grp.visible = false; });
    leans.forEach(l => { l.hinge.rotation.x = 0; });
    winGlowM.opacity = 0; childM.opacity = 0; childTex.offset.x = 0;
    bulbs.forEach(b => { b.st = 0; b.t = 0; b.m.color.setHex(0xffd9a0); b.s.visible = true; b.s.material.opacity = 0.55; });
    doorPivot.rotation.y = 0; leakM.opacity = 0.9;
    stopSounds(); g.visible = false;
  }
  let snd = {};
  function stopSounds() { Object.values(snd).forEach(s => s && s.stop && s.stop()); snd = {}; }
  function start(on) {
    reset(); S.on = on; S.alive = on; g.visible = on;
    if (on) { snd.sew = audio.loop('sewing', { object: sewObj, volume: 0, ref: 4 }); snd.fac = audio.loop('factory', { object: sewObj, volume: 0, ref: 5 }); }
  }
  const once = (k) => { if (S.said[k]) return false; S.said[k] = true; return true; };

  function update(dt, t, head, seg, warp) {
    if (!S.on) return;
    S.warp = warp;
    // 0 · doors
    doors.forEach((o, i) => {
      if (o.st === 0) {
        o.glowM.opacity = 0.8 + 0.08 * Math.sin(t * 3 + i * 2) * Math.sin(t * 7.3 + i);
        if (warp > 0.2 && seg === 0 && head.x > o.x - 2.5) {
          o.st = 1; o.t = 0;
          audio.oneShot('doorWood', { object: o.d, volume: 0.85, rate: 1.45, ref: 2 });
          ui.subtitle(VOICES[i], 1.8);
          if (i === 0) setTimeout(() => S.on && say('Please… help me!', 2.6), 600);
          if (i === 3) setTimeout(() => S.on && say('Nobody opens.', 2.6), 700);
        }
      } else if (o.st === 1) {
        o.t += dt;
        o.sh.scale.y = Math.max(0.001, ease(clamp(o.t / 0.17, 0, 1)));
        o.glowM.opacity = 0.9 * (1 - clamp(o.t / 0.22, 0, 1)); o.silM.opacity = 1 - clamp(o.t / 0.18, 0, 1);
        if (o.t > 0.3) o.st = 2;
      }
    });

    // 1 · hands
    camera.getWorldDirection(dir); dir.y = 0; dir.normalize();
    const bag = tmp.set(head.x - dir.z * 0.17, 0.82, head.z + dir.x * 0.17);
    if (S.grab) {
      const G2 = S.grab; G2.t += dt; G2.jerk = Math.max(0, G2.jerk - dt * 6);
      if (!G2.free) {
        if (G2.t > 9) release(true);
        player.speedScale = 0;
      } else if (G2.t > 0.6) S.grab = null;
    }
    arms.forEach(a => {
      const dz = head.z - a.z;
      let want = 0, reach = 0.7;
      if (seg === 1 && warp > 0.2 && !a.done && Math.abs(dz) < 2.6) want = 1;
      if (a.grab && !a.done && !S.grab && seg === 1 && warp > 0.2 && Math.abs(dz) < 0.7) {
        S.grab = { n: 0, t: 0, jerk: 0, free: false };
        audio.oneShot('fabric', { volume: 1, rate: 0.55 }); audio.oneShot('heartbeat', { volume: 0.8 });
        ui.subtitle('"Give it here."', 2.6);
        ui.hint(xr() ? 'Pull the trigger again and again to pull free' : 'Click again and again to pull free', 9);
      }
      const holding = a.grab && S.grab && !S.grab.free;
      if (holding) { want = 1; reach = Math.max(0.3, Math.hypot(bag.x - a.grp.position.x, bag.y - a.grp.position.y, bag.z - a.grp.position.z) - 0.12) - S.grab.jerk * 0.18; }
      if (a.done && !holding) want = 0;
      a.e = damp(a.e, want, want > a.e ? (holding ? 9 : 4) : (a.done ? 7 : 2.5), dt);
      a.grp.visible = a.e > 0.01;
      if (!a.grp.visible) return;
      const dx = bag.x - a.grp.position.x, dy = bag.y - a.grp.position.y, dzz = bag.z - a.grp.position.z;
      const yaw = clamp(Math.atan2(dx, dzz), -Math.PI / 2 - 0.65, -Math.PI / 2 + 0.65);
      const pitch = clamp(Math.atan2(dy, Math.hypot(dx, dzz)), -0.5, 0.45);
      a.grp.rotation.set(-pitch + Math.sin(t * 2.1 + a.ph) * 0.05 * (holding ? 0 : 1), yaw + Math.sin(t * 1.7 + a.ph) * 0.08 * (holding ? 0 : 1), 0, 'YXZ');
      a.slide.position.z = lerp(-0.4, reach - 0.2, a.e);
      const claw = holding ? 1.25 : 0.35 + 0.35 * Math.sin(t * 5 + a.ph);
      a.fingers.forEach((f, k) => { f.rotation.x = claw + k * 0.04; });
      a.thumb.rotation.x = claw * 0.6;
    });

    // 2 · sky
    const skyK = seg === 2 ? clamp((head.x - 54.6) / 8, 0, 1) : seg > 2 ? 1 : 0;
    if (skyK > S.sky) { if (S.sky < 0.15 && skyK >= 0.15 && once('sky')) say('The walls… they\'re closing in.', 3); S.sky = Math.min(skyK, S.sky + dt * 0.5); }
    leans.forEach(l => { l.hinge.rotation.x = l.s * 0.125 * ease(S.sky); });

    // 3 · windows
    if (S.win === 0 && seg === 3 && head.z > -3.2) { S.win = 1; S.winT = 0; }
    if (S.win > 0) S.winT += dt;
    if (S.win === 1) {
      winGlowM.opacity = Math.min(0.7, S.winT * 0.7); childM.opacity = Math.min(1, S.winT * 0.9);
      childTex.offset.x = (Math.floor(t * 5) % 2) / 3;                    // every child, the same stitch
      if (S.winT > 1.4 && once('kids')) say('Every window… children. Like me.', 3.2);
      if (head.z > 3.6) {
        S.win = 2; S.winT = 0; childTex.offset.x = 2 / 3;                  // they all stop — and look at you
        audio.oneShot('heartbeat', { volume: 1 }); audio.oneShot('whispers', { volume: 0.5, rate: 0.7 });
      }
    } else if (S.win === 2) {
      if (S.winT > 0.9 && once('look')) say('They\'re all looking at me.', 2.6);
      if (S.winT > 2.6) { S.win = 3; S.winT = 0; audio.oneShot('thunder', { volume: 0.3, rate: 0.5 }); }
    } else if (S.win === 3) {
      winGlowM.opacity = Math.max(0, 0.7 - S.winT * 0.8);               // the lights go out; the eyes stay
      if (S.winT > 1.2 && once('every')) say('Every window. Every night.', 3);
    }
    sewObj.position.set(66.7, 3, clamp(head.z, -3, 10.5));
    const sewV = S.win === 1 ? Math.min(0.7, S.winT * 0.5) : S.win === 3 ? Math.min(0.25, S.winT * 0.1) : 0;
    if (snd.sew) snd.sew.setVolume(sewV); if (snd.fac) snd.fac.setVolume(sewV * 0.6);

    // 4 · bulbs die behind you
    let dead = 0;
    bulbs.forEach(b => {
      if (b.st === 0 && seg === 4 && head.x > b.x + 0.8) { b.st = 1; b.t = 0; audio.oneShot('step', { object: b.s, volume: 0.6, rate: 2.4, ref: 1.5 }); }
      if (b.st === 1) {
        b.t += dt; const on = Math.sin(b.t * 70) > 0.2 && b.t < 0.35;
        b.m.color.setHex(on ? 0xffd9a0 : 0x2a2018); b.s.visible = on;
        if (b.t > 0.4) { b.st = 2; b.m.color.setHex(0x1a1410); b.s.visible = false; }
      }
      if (b.st === 2) dead++;
      if (b.st === 0) b.s.material.opacity = 0.5 + 0.06 * Math.sin(t * 13 + b.x);
    });
    S.dark = dead / bulbs.length;
    if (seg === 4 && head.x > 72 && once('dark')) say('The lights… they\'re going out behind me.', 3);
    // the last door
    if (seg === 4 && head.x > 78.6 && !S.hinted) { S.hinted = true; ui.hint(xr() ? 'Knock: point at the door and pull the trigger' : 'Knock on the door (click)', 6); }
    if (S.knocks > 0) S.knockT += dt;
    if (S.doorOpen) {
      S.openT += dt;
      doorPivot.rotation.y = -1.45 * ease(Math.min(1, S.openT / 0.9));
      leakM.opacity = Math.max(0, 0.9 - S.openT * 2);
    }
    // police slow down at the door so knocking is tense, not unfair
    if (seg === 4 && head.x > 79.2) pursuit.speed = Math.min(pursuit.speed, S.safe ? 0.6 : 1.25);

    S.dim = Math.max(0.45 * ease(S.sky) * (seg >= 2 && seg <= 3 ? 1 : 0.4), 0.55 * S.dark);
  }

  return {
    group: g, reset, start, update, stop: stopSounds,
    get S() { return S; },
    get arms() { return arms; },
    get safe() { return S.on && S.safe; },
    get opened() { return S.on && S.doorOpen && S.openT > 1.0; },
    get dim() { return S.on ? S.dim : 0; },
    get doorShut() { return S.on && !S.doorOpen; },
    colliders() { return S.on && !S.doorOpen ? [doorCol] : []; },
    kill() { S.alive = false; },
    anchors() {
      const a = DOORS.map(([x, zw]) => new THREE.Vector3(x, 1.2, zw));
      ARMS.forEach(o => a.push(new THREE.Vector3(54.0, o.y, o.z)));
      for (let z = -2.2; z < 10.6; z += 0.7) [2.35, 4.45].forEach(y => { a.push(new THREE.Vector3(65.4, y, z)); a.push(new THREE.Vector3(68.0, y, z)); });
      return a;
    },
    onCaught() { if (S.grab) { S.grab = null; ui.hint(''); arms.forEach(a => { if (a.grab) a.done = true; }); } },
    forceOpen() { if (!S.on) return; S.knocks = 3; S.safe = true; S.doorOpen = true; S.openT = 0; ctx.refreshColliders(); },
  };
}
