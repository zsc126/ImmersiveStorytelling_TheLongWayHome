// Caption layout, thread progress, mat alignment, ending wrapping, and chase light checks.
// npm run test:ui supplies the server; screenshots use the shared temporary artifact directory.
import { launchTestBrowser, TEST_URL, ARTIFACT_DIR } from './helpers/browser.mjs';
const browser = await launchTestBrowser({
  args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'],
});
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
const errors = [];
page.on('pageerror', (e) => errors.push(e.message));
const assert = (ok, message) => {
  if (!ok) throw new Error(message);
  console.log('PASS ' + message);
};
try {
  await page.goto(`${TEST_URL}/?debug&q=low&dtmax=0.25`);
  await page.waitForFunction(
    () => window.__tlwh?.built === 5 && window.__tlwh.mode === 'title',
    null,
    { timeout: 180000 },
  );
  await page.evaluate(() => {
    const w = window.__tlwh;
    document.querySelector('#title').classList.remove('show');
    w.setMode('play');
    w.ui.thought(
      'Three coins. A whole day. I want to go home, but first we need something to eat.',
    );
    w.ui.subtitle(
      'Mother: "You are late. We waited for you. Come inside and put the food on the table."',
    );
    w.ui.hint('Hold Q to look inside your bag, then go home.');
    w.setMode('paused');
    document.querySelector('#fade').classList.remove('on');
  });
  await page.waitForTimeout(5500);
  const progress = await page.evaluate(async () => {
    const w = window.__tlwh;
    document.querySelectorAll('.thread-fill').forEach((el) => {
      el.style.transition = 'none';
    });
    w.ui.progress(0.5);
    w.ui.stamina(0.4);
    const load = document.querySelector('#load-bar');
    load.querySelector('.thread-fill').style.transition = 'none';
    load.style.setProperty('--progress', '.5');
    document.querySelector('#loading').classList.add('show');
    document.querySelector('#load-msg').textContent = 'Loading…';
    await new Promise((r) => setTimeout(r, 500));
    return ['load-bar', 'ring', 'stamina'].map((id) => {
      const el = document.getElementById(id);
      return {
        svg: el.tagName.toLowerCase() === 'svg',
        offset: Number(
          getComputedStyle(el.querySelector('.thread-fill')).strokeDashoffset.replace(
            /[^0-9.e-]/g,
            '',
          ),
        ),
      };
    });
  });
  assert(
    progress.every((p) => p.svg) &&
      Math.abs(progress[0].offset - 0.5) < 0.01 &&
      Math.abs(progress[1].offset - 0.5) < 0.01 &&
      Math.abs(progress[2].offset - 0.6) < 0.01,
    'red thread indicators reflect loading, interaction, and stamina progress: ' +
      JSON.stringify(progress),
  );
  await page.screenshot({ path: `${ARTIFACT_DIR}/tlwh-thread-loading.png`, timeout: 120000 });
  await page.evaluate(() => {
    document.querySelector('#loading').classList.remove('show');
    window.__tlwh.ui.progress(0);
    window.__tlwh.ui.stamina(null);
  });
  for (const [width, height] of [
    [1280, 800],
    [800, 600],
    [390, 844],
  ]) {
    await page.setViewportSize({ width, height });
    const r = await page.evaluate(() => {
      const ids = ['thought', 'subtitle', 'hint'];
      const boxes = ids.map((id) => {
        const el = document.getElementById(id),
          b = el.getBoundingClientRect();
        return {
          top: b.top,
          bottom: b.bottom,
          left: b.left,
          right: b.right,
          font: parseFloat(getComputedStyle(el).fontSize),
        };
      });
      return {
        boxes,
        labels: [
          getComputedStyle(document.querySelector('#thought')).backgroundColor,
          document.querySelector('#subtitle .who').textContent,
        ],
      };
    });
    assert(
      r.boxes.every(
        (b, i) =>
          b.left >= 0 &&
          b.right <= width + 1 &&
          b.top >= 0 &&
          b.bottom <= height &&
          b.font >= 20 &&
          (!i || b.top >= r.boxes[i - 1].bottom),
      ),
      `captions readable and separated at ${width}x${height}`,
    );
    assert(
      r.labels.join('|') === 'rgba(0, 0, 0, 0)|Mother',
      'thoughts are unboxed and external dialogue retains its speaker label',
    );
    await page.screenshot({ path: `${ARTIFACT_DIR}/tlwh-ui-${width}.png`, timeout: 120000 });
  }
  await page.setViewportSize({ width: 1280, height: 800 });
  const result = await page.evaluate(async () => {
    const w = window.__tlwh;
    await w.goTo('home');
    const sib = w.world.root.getObjectByName('little-brother'),
      mat = w.world.root.getObjectByName('brother-mat');
    sib.updateMatrixWorld(true);
    const body = sib.userData.mesh;
    body.skeleton.update();
    body.computeBoundingBox();
    const b = body.boundingBox.clone().applyMatrix4(body.matrixWorld),
      c = mat.position;
    const fit =
      b.min.x >= c.x - 0.8 &&
      b.max.x <= c.x + 0.8 &&
      b.min.z >= c.z - 0.45 &&
      b.max.z <= c.z + 0.45 &&
      b.min.y >= c.y;
    // Exercise the VR caption renderer without requiring a physical headset.
    const rig = w.xrRig,
      g = rig.capCanvas.getContext('2d'),
      draw = g.fillText.bind(g),
      ys = [];
    g.fillText = (t, x, y, ...rest) => {
      ys.push(y);
      return draw(t, x, y, ...rest);
    };
    rig._draw(
      [
        { text: 'Three coins. A whole day. I want to go home.' },
        {
          who: 'Mother',
          text: 'You are late. We waited. Come inside and put the food on the table.',
        },
        { text: 'Squeeze a grip to look inside your bag.' },
      ],
      '',
      0.5,
      0.7,
    );
    g.fillText = draw;
    const vrFits = Math.max(...ys) < rig.capCanvas.height - 10;
    w.setMode('end');
    document.querySelector('#endcard').classList.add('show');
    document.querySelectorAll('.end-stat').forEach((el) => {
      el.hidden = false;
      el.classList.add('on');
    });
    const el = document.querySelector('#stat-0a'),
      text = el.firstChild,
      range = document.createRange();
    range.setStart(text, text.textContent.indexOf('start'));
    range.setEnd(text, text.length);
    return {
      fit,
      bounds: [b.min.toArray(), b.max.toArray()],
      vrFits,
      endingFits: range.getClientRects().length === 1,
    };
  });
  assert(result.fit, 'brother lies fully within mat bounds: ' + JSON.stringify(result.bounds));
  assert(result.vrFits, 'larger VR captions fit the caption board');
  assert(result.endingFits, 'ending keeps “start again” together');
  await page.waitForTimeout(2000);
  await page.screenshot({ path: `${ARTIFACT_DIR}/tlwh-ui-ending.png`, timeout: 120000 });
  // Sample the chase for eight story seconds: local pulses and repeated lightning.
  const lighting = await page.evaluate(async () => {
    const w = window.__tlwh;
    w.ctx.noCatch = true;
    await w.goTo('nightmare');
    w.world.sceneStart(false);
    w.world.S.nextFlash = 0;
    let lightning = 0,
      prev = 0,
      high = 0,
      low = 1;
    for (let i = 0; i < 80; i++) {
      w.world.update(0.1, i * 0.1, true);
      const s = w.world.S;
      if (s.flash > prev + 0.2) lightning++;
      prev = s.flash;
      high = Math.max(high, s.lightPulse || 0);
      low = Math.min(low, s.lightPulse || 0);
    }
    return { lightning, high, low };
  });
  assert(
    lighting.lightning >= 2 && lighting.high > 0.9 && lighting.low < 0.1,
    'chase has repeated lightning and local light pulses',
  );
  assert(errors.length === 0, 'no runtime errors: ' + errors.join('; '));
} finally {
  await browser.close();
}
