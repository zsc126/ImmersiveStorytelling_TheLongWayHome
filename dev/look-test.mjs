// standing views of the workshop: are the workers clearly children?
import { chromium } from 'playwright';
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium_headless_shell-1194/chrome-linux/headless_shell', args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const p = await b.newPage({ viewport: { width: 800, height: 450 } });
p.on('pageerror', e => console.log('PAGEERROR ' + e.message));
await p.goto('http://localhost:8765/index.html?debug&q=low&dtmax=0.25');
await p.waitForFunction(() => document.querySelector('#title.show'), null, { timeout: 120000 });
await p.evaluate(() => document.querySelector('[data-action="begin"]').click());
await p.waitForFunction(() => document.querySelector('#intro-2').textContent.includes('Click'), null, { timeout: 60000 });
await p.evaluate(() => document.querySelector('#intro').click());
await p.waitForTimeout(4000);
const views = [[-2.3, 3.4, 0.35], [2.6, 2.5, 1.2], [0.2, -0.2, 1.7]];
for (let i = 0; i < views.length; i++) {
  await p.evaluate(([x, z, yaw]) => { const w = window.__tlwh; w.world.debugStand(); w.player.place(x, z, yaw, 1.52); w.player.pitch = -0.12; }, views[i]);
  await p.waitForTimeout(3500);
  await p.screenshot({ timeout: 120000, path: `/tmp/claude-0/t/look-${i}.png` });
}
await b.close();
