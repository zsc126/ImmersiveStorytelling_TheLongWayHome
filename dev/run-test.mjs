// headless walk-through: node dev/run-test.mjs <scene> <edition> <outprefix>
import { chromium } from 'playwright';
const [scene = '4', ed = 'normal', out = '/tmp/claude-0/t/s'] = process.argv.slice(2);
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium_headless_shell-1194/chrome-linux/headless_shell', args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--autoplay-policy=no-user-gesture-required'] });
const p = await b.newPage({ viewport: { width: 640, height: 360 } });
const logs = [];
p.on('console', m => { if (m.type() === 'error' || m.type() === 'warning') logs.push(m.type() + ': ' + m.text()); });
p.on('pageerror', e => logs.push('PAGEERROR: ' + e.message));
await p.goto('http://localhost:8765/index.html?debug&q=low&dtmax=' + (process.env.DTMAX || '0.25') + '');
await p.waitForFunction(() => document.querySelector('#title.show'), null, { timeout: 120000 });
await p.screenshot({ path: out + '-title.png' });
await p.evaluate(e => document.querySelector(`[data-ed="${e}"]`).click(), ed);
if (scene === '1') await p.evaluate(() => document.querySelector('[data-action="begin"]').click());
else await p.evaluate(n => document.querySelector(`[data-action="scene"][data-n="${n}"]`).click(), scene);
await p.waitForFunction(() => document.querySelector('#intro-2').textContent.includes('Click'), null, { timeout: 60000 });
await p.evaluate(() => document.querySelector('#intro').click());
const T = () => p.evaluate(() => { const w = window.__tlwh; return w.cur + ' ' + (w.world && w.world.phase) + ' | ' + ['thought', 'subtitle', 'hint'].map(i => document.getElementById(i).textContent).join(' / '); });
let shot = 0, last = '', same = 0;
for (let i = 0; i < +(process.env.STEPS || 40); i++) {
  await p.waitForTimeout(+(process.env.WAIT || 1500));
  const s = await T(); console.log(i, s);
  if (process.env.SHOTS && i % +process.env.SHOTS === 0) await p.screenshot({ timeout: 120000, path: `${out}-${String(shot++).padStart(2, '0')}.png` });
  const ph = s.split(' | ')[0]; same = ph === last ? same + 1 : 0; last = ph;
  if (process.env.SKIP && same >= +(process.env.SKIP)) { same = 0; await p.evaluate(() => window.__tlwh.world && window.__tlwh.world.skip && window.__tlwh.world.skip()); }
  if (i === 0) console.log(await p.evaluate(() => document.getElementById('debug').textContent));
  if (s.includes('undefined') && i > 3) {}
  if (await p.evaluate(() => window.__tlwh.mode === 'end')) { console.log('END'); await p.waitForTimeout(3000); await p.screenshot({ path: out + '-end.png' }); break; }
}
console.log(logs.slice(0, 30).join('\n'));
await b.close();
