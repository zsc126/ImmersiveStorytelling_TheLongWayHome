// Render each atmosphere in both editions and verify its GPU programs and local fonts.
// Serve site/ on localhost:8765 first. Screenshots go to /tmp/tlwh-atmosphere-*.
import { chromium } from 'playwright';
const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const page = await browser.newPage({ viewport: { width: 1000, height: 700 } });
const errors = [];
page.on('pageerror', e => errors.push(e.message));
page.on('console', m => { if (m.type() === 'error' && /shader|WebGL|THREE|Error/i.test(m.text())) errors.push(m.text()); });
try {
  await page.goto('http://localhost:8765/?debug&q=low&dtmax=0.25');
  await page.waitForFunction(() => window.__tlwh?.built === 5 && window.__tlwh.mode === 'title', null, { timeout: 180000 });
  await page.screenshot({ path: '/tmp/tlwh-atmosphere-title.png' });
  const cleanMenu = await page.evaluate(() => {
    const title = document.querySelector('#title');
    return !/Parsons|Fall 2026|first.person experience|minutes/.test(title.textContent) && title.querySelector('.ver')?.textContent === 'V3';
  });
  if (!cleanMenu) throw new Error('Main menu still contains removed metadata');
  console.log('PASS minimal main menu retains version');
  const fonts = await page.evaluate(() => ['400 40px "Gowun Batang"', '400 72px "Spectral"'].every(f => document.fonts.check(f)));
  if (!fonts) throw new Error('Reference fonts did not load');
  console.log('PASS local reference fonts loaded');
  for (const edition of ['normal', 'extra']) {
    for (const [name, pos] of [['sweatshop', [-6.57, 2.07, 0]], ['street', [23, 4, -Math.PI / 2]], ['nightmare', [41, 8.3, -Math.PI / 2]], ['door', [79.8, 12.7, -Math.PI / 2]], ['home', [83.5, 12.7, -Math.PI / 2]]]) {
      await page.evaluate(async ({ edition, name, pos }) => {
        const w = window.__tlwh;
        w.ctx.edition = edition;
        if (w.mode === 'title') { document.querySelector('#title').classList.remove('show'); w.setMode('play'); }
        await w.goTo(name === 'door' ? 'nightmare' : name);
        if (name === 'nightmare' || name === 'door') w.world.sceneStart(name === 'door');
        w.post.setCamera(w.camera);
        w.player.place(...pos, 1.52); w.player.canMove = false;
        if (name === 'home') { w.world.S.calmT = 8; w.world.update(0.016, 8, true); }
        // Freeze story beats while the air and light settle for representative views.
        w.setExplore(true);
        w.spaces.forEach(sp => { sp.root.visible = sp.name === (name === 'door' ? 'nightmare' : name) || (name === 'door' && sp.name === 'home'); });
        await w.renderer.compileAsync(w.scene, w.camera);
      }, { edition, name, pos });
      await page.waitForTimeout(4000);
      await page.screenshot({ path: `/tmp/tlwh-atmosphere-${edition}-${name}.png`, timeout: 120000 });
      const badPrograms = await page.evaluate(() => window.__tlwh.renderer.info.programs.filter(p => p.diagnostics && !p.diagnostics.runnable).length);
      if (badPrograms) throw new Error(`${edition} ${name}: ${badPrograms} invalid GPU programs`);
      console.log(`PASS ${edition} ${name} rendered`);
      if (edition === 'normal' && name === 'street') {
        await page.evaluate(() => { window.__tlwh.player.pitch = 0.9; });
        await page.waitForTimeout(500);
        await page.screenshot({ path: '/tmp/tlwh-atmosphere-sky.png', timeout: 120000 });
        await page.evaluate(() => { window.__tlwh.player.pitch = 0; });
      }
      await page.evaluate(() => window.__tlwh.setExplore(false));
    }
  }
  if (errors.length) throw new Error(errors.join('\n'));
  console.log('PASS no shader compilation or runtime errors');
} finally { await browser.close(); }
