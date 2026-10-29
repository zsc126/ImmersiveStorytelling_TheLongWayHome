// VR walk-through in an emulated Meta Quest 3 (IWER, Meta's WebXR emulator), no headset needed.
//   npm install --no-save iwer   then   node dev/vr-test.mjs [normal|extra] [outprefix]
// Serve site/ on http://localhost:8765 first. It enters VR from the title with a real click, then uses the
// emulated controllers (aim + trigger, hold to sew, sticks, grips, thumbstick press) and checks the results;
// the rest of the story is skipped beat by beat (debug N) inside VR, through the end card and out of VR.
import { chromium } from 'playwright';
import fs from 'fs';
const [ED = 'normal', OUT = '/tmp/vr'] = process.argv.slice(2);
const IWER = fs.readFileSync(new URL('../node_modules/iwer/build/iwer.min.js', import.meta.url), 'utf8');
const b = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--autoplay-policy=no-user-gesture-required'] });
const p = await b.newPage({ viewport: { width: 800, height: 450 } });
const errs = [];
p.on('console', m => { const t = m.text(); if ((m.type() === 'error' || m.type() === 'warning') && !/could not load|KHR_parallel|GPU stall|Automatic fallback|ERR_TUNNEL_CONNECTION_FAILED|fonts.g/.test(t)) errs.push(m.type() + ': ' + t); });
p.on('pageerror', e => errs.push('PAGEERROR: ' + e.message));
// a Quest 3: the player stands 0.6 m off the centre of the room, turned 90° away (the story must still put
// them at the machine, facing it)
await p.addInitScript({ content: IWER + `;(() => { const d = new IWER.XRDevice(IWER.metaQuest3); d.installRuntime({ forceInstall: true }); d.controlMode = 'programmatic';
  d.position.set(0.6, 1.62, 0.3); const a = Math.PI / 4; d.quaternion.set(0, Math.sin(a), 0, Math.cos(a));
  d.controllers.left.position.set(0.4, 1.2, 0.1); d.controllers.right.position.set(0.8, 1.2, 0.1); window.__xrdev = d; })();` });
await p.goto('http://localhost:8765/index.html?debug&q=low&dtmax=0.25');
await p.waitForFunction(() => document.querySelector('#title.show'), null, { timeout: 180000 });
let fails = 0;
const ok = (c, m) => { console.log((c ? 'PASS ' : 'FAIL ') + m); if (!c) fails++; };
ok(await p.evaluate(() => !document.getElementById('vr-btn').hidden), 'Enter VR button shown where WebXR exists');
await p.evaluate(e => document.querySelector(`[data-ed="${e}"]`).click(), ED);
// helpers inside the page
await p.evaluate(() => {
  const w = window.__tlwh, V = w.camera.position.constructor, Q = w.camera.quaternion.constructor;
  window.__places = [];
  const op = w.player.place.bind(w.player); w.player.place = (...a) => { window.__places.push(a); return op(...a); };
  window.__st = () => {
    const h = new V(); w.camera.getWorldPosition(h);
    const u = w.xrRig ? w.xrRig.veilMat.uniforms : null;
    return { mode: w.mode, cur: w.cur, phase: w.world && w.world.phase, xr: w.renderer.xr.isPresenting, head: [h.x, h.y, h.z].map(v => +v.toFixed(2)),
      eye: w.player.eye, yaw: +w.player.yaw.toFixed(2), dollyY: +w.player.dolly.position.y.toFixed(2), rotY: +w.player.dolly.rotation.y.toFixed(3),
      fade: u && +u.uFade.value.toFixed(2), lid: u && +u.uLid.value.toFixed(2), tun: u && +u.uTunnel.value.toFixed(2), blurred: w.xrRig && w.xrRig.blurred,
      hint: document.getElementById('hint').classList.contains('on') ? document.getElementById('hint').textContent : '', prog: w.ui.state.progress, stam: w.ui.state.stamina,
      rays: w.xrRig ? w.xrRig.rays.map(r => r.visible) : [], endMode: w.xrRig && w.xrRig.endMode, endReady: w.xrRig && w.xrRig.endReady };
  };
  // point a controller at a usable target (by its label), from just in front of the head
  window.__aim = (label, side = 'right') => {
    const t = w.interactor.targets.find(t => t.label === label && t.enabled()); if (!t) return 'no live target ' + label;
    let c = null; t.object.traverse(o => { if (!c && o.isMesh) { o.geometry.computeBoundingSphere(); c = o.geometry.boundingSphere.center.clone().applyMatrix4(o.matrixWorld); } });
    w.player.dolly.updateWorldMatrix(true, false);
    const loc = w.player.dolly.worldToLocal(c.clone());
    const from = w.camera.position.clone().add(new V(side === 'right' ? 0.12 : -0.12, -0.25, 0));
    const dir = loc.clone().sub(from).normalize();
    const q = new Q().setFromUnitVectors(new V(0, 0, -1), dir);
    const ctl = window.__xrdev.controllers[side]; ctl.position.set(from.x, from.y, from.z); ctl.quaternion.set(q.x, q.y, q.z, q.w);
    return 'aimed ' + label + ' d=' + loc.distanceTo(from).toFixed(2);
  };
  window.__btn = (side, id, v) => window.__xrdev.controllers[side].updateButtonValue(id, v);
  window.__axes = (side, x, y) => window.__xrdev.controllers[side].updateAxes('thumbstick', x, y);
});
{ const bb = await (await p.$('#vr-btn')).boundingBox(); await p.mouse.click(bb.x + 20, bb.y + bb.height / 2); }   // a real click (the headset needs a user gesture)
await p.waitForFunction(() => window.__tlwh.renderer.xr.isPresenting, null, { timeout: 60000 });
ok(true, 'immersive-vr session started from the title click');
await p.waitForFunction(() => window.__tlwh.mode === 'play', null, { timeout: 120000 });
const S = () => p.evaluate(() => window.__st());
let s = await S(); console.log('start', JSON.stringify(s));
await p.waitForFunction(() => window.__st().fade < 0.5, null, { timeout: 60000 }).catch(() => {}); s = await S(); console.log('faded in', JSON.stringify(s));
ok(s.fade < 0.5, 'opening fade lifts inside the headset (veil fade ' + s.fade + ')');
const pl = await p.evaluate(() => window.__places[window.__places.length - 1]);
ok(pl && Math.hypot(s.head[0] - pl[0], s.head[2] - pl[1]) < 0.08, `head placed on the seat despite standing off-centre (head ${s.head[0]},${s.head[2]} vs ${pl && pl[0].toFixed(2)},${pl && pl[1].toFixed(2)})`);
ok(Math.abs(Math.atan2(Math.sin(s.yaw - pl[2]), Math.cos(s.yaw - pl[2]))) < 0.08, `facing the machine (yaw ${s.yaw} vs ${pl[2]})`);
ok(Math.abs(s.head[1] - s.eye) < 0.05, `eyes at the seated child height (${s.head[1]} vs ${s.eye})`);
await p.screenshot({ path: OUT + '-0.png' });
// the first beat: take the fabric with the trigger
await p.waitForFunction(() => window.__tlwh.world.phase === 'pick', null, { timeout: 120000 });
s = await S(); console.log('pick', JSON.stringify(s));
ok(/trigger/.test(s.hint) && !/mouse|click/i.test(s.hint), 'hint worded for controllers: "' + s.hint + '"');
console.log(await p.evaluate(() => window.__aim('Take a piece of fabric')));
await p.waitForTimeout(1500);
s = await S(); ok(s.rays.some(Boolean), 'pointer ray shows on the fabric');
await p.screenshot({ path: OUT + '-1.png' });
await p.evaluate(() => window.__btn('right', 'trigger', 1)); await p.waitForTimeout(800); await p.evaluate(() => window.__btn('right', 'trigger', 0));
await p.waitForFunction(() => ['placing', 'push'].includes(window.__tlwh.world.phase), null, { timeout: 30000 }).then(() => ok(true, 'trigger took the fabric')).catch(() => ok(false, 'trigger took the fabric'));
await p.waitForFunction(() => window.__tlwh.world.phase === 'push', null, { timeout: 60000 });
console.log(await p.evaluate(() => window.__aim('Hold to sew')));
await p.waitForTimeout(800);
await p.evaluate(() => window.__btn('right', 'trigger', 1));
await p.waitForTimeout(4000);
s = await S(); ok(s.prog > 0.05, 'holding the trigger on the machine sews (progress ' + (+s.prog).toFixed(2) + ')');
await p.screenshot({ path: OUT + '-2.png' });
await p.waitForFunction(() => window.__tlwh.world.phase !== 'push', null, { timeout: 120000 }).catch(() => {});
await p.evaluate(() => window.__btn('right', 'trigger', 0));
s = await S(); console.log('after sewing', s.phase);
// skip to standing up and walking
for (let i = 0; i < 40; i++) { const ph = await p.evaluate(() => { const w = window.__tlwh.world; if (w.phase !== 'toBag') w.skip(); return w.phase; }); if (ph === 'toBag') break; await p.waitForTimeout(1500); }
await p.waitForTimeout(1500);
s = await S(); console.log('toBag', JSON.stringify(s));
ok(/stick/.test(s.hint), 'walking hint names the sticks: "' + s.hint + '"');
ok(Math.abs(s.head[1] - 1.52) < 0.05, 'standing child eye height after standing up (' + s.head[1] + ')');
const h0 = s.head;
await p.evaluate(() => window.__axes('left', 0, 1)); await p.waitForTimeout(2500);   // pull back: away from the table
s = await S(); console.log('walking', JSON.stringify(s)); ok(s.tun > 0.05, 'comfort vignette while the stick moves you (' + s.tun + ')');
await p.evaluate(() => window.__axes('left', 0, 0)); await p.waitForTimeout(1500);
s = await S(); console.log('walked', JSON.stringify(s.head)); ok(Math.hypot(s.head[0] - h0[0], s.head[2] - h0[2]) > 0.3, `left stick walks (moved ${Math.hypot(s.head[0] - h0[0], s.head[2] - h0[2]).toFixed(2)} m)`);
// walk into the wall for a while: the head must never end up inside a collider
await p.evaluate(() => window.__axes('left', -1, 0)); await p.waitForTimeout(5000); await p.evaluate(() => window.__axes('left', 0, 0)); await p.waitForTimeout(500);
const inside = await p.evaluate(() => { const w = window.__tlwh, V = w.camera.position.constructor, h = new V(); w.camera.getWorldPosition(h); return w.player.colliders.filter(b => h.x > b.minX && h.x < b.maxX && h.z > b.minZ && h.z < b.maxZ).length; });
ok(inside === 0, 'stick cannot carry the head into a wall or furniture');
const r0 = (await S()).rotY;
await p.evaluate(() => window.__axes('right', 1, 0)); await p.waitForTimeout(1200); await p.evaluate(() => window.__axes('right', 0, 0)); await p.waitForTimeout(800);
s = await S(); ok(Math.abs(Math.abs(s.rotY - r0) - Math.PI / 6) < 0.01, 'right stick snap-turns 30° (' + (s.rotY - r0).toFixed(3) + ')');
// height: sit down in the real room, press a thumbstick, the eyes are back at the child's height
await p.evaluate(() => { window.__xrdev.position.y = 1.1; }); await p.waitForTimeout(800);
await p.evaluate(() => window.__btn('left', 'thumbstick', 1)); await p.waitForTimeout(800); await p.evaluate(() => window.__btn('left', 'thumbstick', 0)); await p.waitForTimeout(800);
s = await S(); ok(Math.abs(s.head[1] - 1.52) < 0.05, 'thumbstick press resets the height (' + s.head[1] + ')');
// take the bag, squeeze a grip to look inside
for (let i = 0; i < 20; i++) { const ph = await p.evaluate(() => { const w = window.__tlwh.world; if (!['toDoor', 'opening', 'outside'].includes(w.phase)) w.skip(); return w.phase; }); if (ph === 'toDoor') break; await p.waitForTimeout(1500); }
await p.evaluate(() => window.__btn('right', 'squeeze', 1)); await p.waitForTimeout(2500);
const look = await p.evaluate(() => window.__tlwh.bagCtl.look);
ok(look > 0.5, 'grip opens the bag to look inside (' + look.toFixed(2) + ')');
await p.evaluate(() => window.__btn('right', 'squeeze', 0));
// the headset's system menu holds the story
const t0 = await p.evaluate(() => window.__tlwh.world.S ? window.__tlwh.world.S.t : 0);
await p.evaluate(() => window.__xrdev.updateVisibilityState('visible-blurred')); await p.waitForTimeout(2500);
const t1 = await p.evaluate(() => window.__tlwh.world.S ? window.__tlwh.world.S.t : 0);
await p.evaluate(() => window.__xrdev.updateVisibilityState('visible')); await p.waitForTimeout(2000);
const t2 = await p.evaluate(() => window.__tlwh.world.S ? window.__tlwh.world.S.t : 0);
console.log('menu t', t0, t1, t2);
ok(t2 > t1, 'story runs again after the system menu closes');
// the rest of the story, beat by beat, inside VR
let homeEye = null, last = '', same = 0, sawFade = 0, sawLid = 0, sawWhite = 0, steps = 0;
for (let i = 0; i < 400; i++) {
  await p.waitForTimeout(1200); steps++;
  s = await S();
  if (s.fade > 0.5) sawFade++; if (s.lid > 0.3) sawLid++;
  if (await p.evaluate(() => document.getElementById('fade').classList.contains('white') && document.getElementById('fade').classList.contains('on'))) sawWhite++;
  const key = s.cur + ' ' + s.phase;
  if (key !== last) console.log(i, key, '|', s.hint, '| fade', s.fade, 'lid', s.lid, 'head', s.head.join(','));
  same = key === last ? same + 1 : 0; last = key;
  if (s.mode === 'end') break;
  if (s.cur === 4 && s.phase === 'toTable') homeEye = s.head[1];
  if (same >= 3) { same = 0; await p.evaluate(() => { const w = window.__tlwh; if (w.world && w.world.skip) w.world.skip(); }); }
  if (s.phase === 'begging') await p.evaluate(() => window.__btn('right', 'trigger', 1));
  if (s.phase === 'rest') await p.evaluate(() => { window.__btn('left', 'squeeze', 1); window.__btn('right', 'squeeze', 1); });
}
await p.evaluate(() => { ['left', 'right'].forEach(h => { window.__btn(h, 'trigger', 0); window.__btn(h, 'squeeze', 0); }); });
ok(s.mode === 'end', 'reached the end of the story in VR');
ok(homeEye !== null && Math.abs(homeEye - 1.52) < 0.05, 'standing height at home, walking to the table (' + homeEye + ')');
ok(sawFade > 0, 'fades seen in the headset (' + sawFade + ' samples)');
console.log('lid samples', sawLid, 'white fade samples', sawWhite);
await p.waitForTimeout(3000);
s = await S(); ok(s.xr && s.endMode, 'end card shown inside VR (session kept open)');
await p.screenshot({ path: OUT + '-end-vr.png' });
await p.waitForFunction(() => window.__st().endReady, null, { timeout: 240000 }).then(() => ok(true, 'end card finishes, "Pull the trigger to leave VR"')).catch(() => ok(false, 'end card ready'));
await p.screenshot({ path: OUT + '-end-vr2.png' });
await p.evaluate(() => window.__btn('right', 'trigger', 1)); await p.waitForTimeout(1500); await p.evaluate(() => window.__btn('right', 'trigger', 0));
await p.waitForFunction(() => !window.__tlwh.renderer.xr.isPresenting, null, { timeout: 30000 }).catch(() => {});
await p.waitForTimeout(2500);
s = await S();
const page = await p.evaluate(() => ({ end: document.getElementById('endcard').classList.contains('show'), fade: document.getElementById('fade').classList.contains('on'), title: document.getElementById('title').classList.contains('show') }));
ok(!s.xr && s.mode === 'end' && page.end && !page.fade, 'trigger leaves VR; the end card stays visible on the page ' + JSON.stringify(page));
await p.screenshot({ path: OUT + '-end-page.png' });
ok(errs.length === 0, 'no errors or warnings in the console');
console.log(errs.slice(0, 40).join('\n'));
console.log(fails ? `${fails} FAILED` : 'ALL PASSED');
await b.close();
