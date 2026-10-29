// Leaving VR in the middle of the story, entering again, and then playing on desktop.
//   npm install --no-save iwer   then   node dev/vr-quit-test.mjs   (site/ served on http://localhost:8765)
import { chromium } from 'playwright';
import fs from 'fs';
const IWER = fs.readFileSync(new URL('../node_modules/iwer/build/iwer.min.js', import.meta.url), 'utf8');
const b = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--autoplay-policy=no-user-gesture-required'] });
const p = await b.newPage({ viewport: { width: 800, height: 450 } });
const errs = [];
p.on('console', m => { const t = m.text(); if ((m.type() === 'error' || m.type() === 'warning') && !/could not load|KHR_parallel|GPU stall|Automatic fallback|ERR_TUNNEL_CONNECTION_FAILED|fonts.g|Pointer ?Lock|pointer lock/i.test(t)) errs.push(m.type() + ': ' + t); });
p.on('pageerror', e => errs.push('PAGEERROR: ' + e.message));
await p.addInitScript({ content: IWER + `;(() => { const d = new IWER.XRDevice(IWER.metaQuest3); d.installRuntime({ forceInstall: true }); d.controlMode = 'programmatic';
  d.position.set(-0.5, 1.7, 0.4); const a = -Math.PI / 3; d.quaternion.set(0, Math.sin(a), 0, Math.cos(a)); window.__xrdev = d; })();` });
await p.goto('http://localhost:8765/index.html?debug&q=low&dtmax=0.25');
await p.waitForFunction(() => document.querySelector('#title.show'), null, { timeout: 180000 });
let fails = 0;
const ok = (c, m) => { console.log((c ? 'PASS ' : 'FAIL ') + m); if (!c) fails++; };
const clickVR = async () => { const bb = await (await p.$('#vr-btn')).boundingBox(); await p.mouse.click(bb.x + 20, bb.y + bb.height / 2); };
const st = () => p.evaluate(() => { const w = window.__tlwh, V = w.camera.position.constructor, h = new V(), f = new V(); w.camera.getWorldPosition(h); w.camera.getWorldDirection(f);
  return { mode: w.mode, xr: w.renderer.xr.isPresenting, phase: w.world && w.world.phase, head: [h.x, h.y, h.z].map(v => +v.toFixed(2)), rotY: +w.player.dolly.rotation.y.toFixed(3), dollyY: +w.player.dolly.position.y.toFixed(3),
    fade: document.getElementById('fade').classList.contains('on'), title: document.getElementById('title').classList.contains('show'), yawFwd: +Math.atan2(-f.x, -f.z).toFixed(2), yaw: +w.player.yaw.toFixed(2) }; });
for (let round = 1; round <= 2; round++) {
  await clickVR();
  await p.waitForFunction(() => window.__tlwh.mode === 'play' && window.__tlwh.renderer.xr.isPresenting, null, { timeout: 120000 });
  await p.waitForTimeout(5000);
  let s = await st(); console.log('in VR', round, JSON.stringify(s));
  ok(Math.abs(s.yawFwd) < 0.08 && Math.abs(s.head[1] - 1.3) < 0.05, `round ${round}: at the machine, facing it, seated height`);
  // take the headset off mid-story (the session ends from outside the game)
  await p.evaluate(() => window.__tlwh.renderer.xr.getSession().end());
  await p.waitForTimeout(3000);
  s = await st(); console.log('after exit', JSON.stringify(s));
  ok(!s.xr && s.mode === 'title' && s.title && !s.fade && s.rotY === 0 && s.dollyY === 0, `round ${round}: leaving VR mid-story returns to a clean title`);
}
// now play on desktop: the view and the walking direction must agree
await p.evaluate(() => document.querySelector('[data-action="begin"]').click());
await p.waitForFunction(() => document.querySelector('#intro-2').textContent.includes('Click'), null, { timeout: 60000 });
await p.evaluate(() => document.querySelector('#intro').click());
await p.waitForFunction(() => window.__tlwh.mode === 'play', null, { timeout: 60000 });
await p.waitForTimeout(3000);
const s = await st(); console.log('desktop', JSON.stringify(s));
ok(!s.xr && Math.abs(s.yawFwd - s.yaw) < 0.05 && Math.abs(s.head[1] - 1.3) < 0.05, 'desktop after VR: the camera looks where the player faces, at seated height');
ok(errs.length === 0, 'no errors or warnings in the console');
console.log(errs.slice(0, 20).join('\n'));
console.log(fails ? `${fails} FAILED` : 'ALL PASSED');
await b.close();
