// factory: sew all four pieces by holding the machine (no skipping), check you can keep sewing during the daydreams
import { chromium } from 'playwright';
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium_headless_shell-1194/chrome-linux/headless_shell', args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const p = await b.newPage({ viewport: { width: 640, height: 360 } });
const logs = []; p.on('pageerror', e => logs.push('PAGEERROR ' + e.message)); p.on('console', m => m.type() === 'error' && logs.push(m.text()));
await p.goto('http://localhost:8765/index.html?debug&q=low&dtmax=0.25');
await p.waitForFunction(() => document.querySelector('#title.show'), null, { timeout: 120000 });
await p.evaluate(() => document.querySelector('[data-action="begin"]').click());
await p.waitForFunction(() => document.querySelector('#intro-2').textContent.includes('Click'), null, { timeout: 60000 });
await p.evaluate(() => document.querySelector('#intro').click());
let shot = 0;
for (let i = 0; i < 60; i++) {
  await p.waitForTimeout(1500);
  const r = await p.evaluate(() => { const w = window.__tlwh.world, S = w.S; const ui = id => document.getElementById(id).classList.contains('on') ? document.getElementById(id).textContent : '';
    if (S.phase === 'pick') w.skip();            // takes the fabric (same as clicking it)
    if (S.phase === 'push') w.setPushing(true);  // holds the mouse on the machine
    return `${S.phase} pieces=${S.pieces} prog=${S.progress.toFixed(2)} dream=${S.dream} | ${ui('thought')} | ${ui('hint')}`; });
  console.log(i, r);
  if (i % 4 === 1) await p.screenshot({ timeout: 120000, path: `/tmp/claude-0/t/f-${String(shot++).padStart(2, '0')}.png` });
  if (r.startsWith('toBag')) break;
}
console.log(logs.join('\n')); await b.close();
