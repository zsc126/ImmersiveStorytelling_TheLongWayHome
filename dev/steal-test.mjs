// the steal: tension by distance to the food, then the run into the nightmare
import { chromium } from 'playwright';
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium_headless_shell-1194/chrome-linux/headless_shell', args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--autoplay-policy=no-user-gesture-required'] });
const p = await b.newPage({ viewport: { width: 640, height: 360 } });
p.on('pageerror', e => console.log('PAGEERROR ' + e.message));
await p.goto('http://localhost:8765/index.html?debug&q=low&dtmax=0.25');
await p.waitForFunction(() => document.querySelector('#title.show'), null, { timeout: 120000 });
await p.evaluate(() => document.querySelector('[data-action="scene"][data-n="2"]').click());
await p.waitForFunction(() => document.querySelector('#intro-2').textContent.includes('Click'), null, { timeout: 60000 });
await p.evaluate(() => document.querySelector('#intro').click());
await p.waitForTimeout(3000);
// walk out into the market
await p.evaluate(() => window.__tlwh.player.place(23, 4, -Math.PI / 2, 1.52));
await p.waitForFunction(() => window.__tlwh.cur === 1, null, { timeout: 60000 });
for (let i = 0; i < 40; i++) {
  const ph = await p.evaluate(() => { const w = window.__tlwh.world; if (w.phase !== 'toSteal') w.skip(); return w.phase; });
  if (ph === 'toSteal') break; await p.waitForTimeout(1500);
}
const probe = () => p.evaluate(() => { const w = window.__tlwh, S = w.world.S || {}; return `${w.world.phase} fear=${document.getElementById('fear').style.opacity.slice(0, 4)} fov=${w.camera.fov.toFixed(1)} fog=#${w.scene.fog.color.getHexString()} exp=${w.renderer.toneMappingExposure.toFixed(2)} | ${document.getElementById('thought').classList.contains('on') ? document.getElementById('thought').textContent : ''}`; });
let n = 0;
for (const [x, z] of [[24, 6], [27, 3], [29.5, 0], [30.6, -0.9]]) {
  await p.evaluate(([x, z]) => { const w = window.__tlwh; w.player.place(x, z, Math.atan2(-(31 - x), -(-1.55 - z)), 1.52); }, [x, z]);
  await p.waitForTimeout(4000); console.log('dist', Math.hypot(31 - x, -1.55 - z).toFixed(1), await probe());
  await p.screenshot({ timeout: 120000, path: `/tmp/claude-0/t/st-${n++}.png` });
}
await p.evaluate(() => window.__tlwh.world.skip());   // take it
for (let i = 0; i < 6; i++) { await p.waitForTimeout(1500); console.log('steal', await probe()); }
// run toward the exit, then into the nightmare
for (const x of [33, 36, 39, 41, 43, 46]) {
  await p.evaluate(x => window.__tlwh.player.place(x, 8.3, -Math.PI / 2, 1.52), x);
  await p.waitForTimeout(3000); console.log('run x=' + x, await p.evaluate(() => window.__tlwh.cur), await probe());
}
await p.screenshot({ timeout: 120000, path: `/tmp/claude-0/t/st-${n++}.png` });
await b.close();
