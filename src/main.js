// THE LONG WAY HOME — V3 entry point
// Title → headphones card → Space 1 Sweatshop → Space 2 Lane & Market → Space 3 Nightmare → Home
// → statistics. One continuous world: you walk from each space into the next.
// The factory is built before the title appears; the other spaces build in the background while
// you look at the title and sit at the machine, so the first load stays short.
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { AudioEngine } from './audio.js';
import { Player } from './player.js';
import { Interactor } from './interact.js';
import { makePost } from './post.js';
import { Thread } from './kit.js';
import { Hands, BagCtl } from './fp.js';
import { bagCloth } from './tex.js';
import { LightPool } from './lights.js';
import { makePolice, makePerson, poseSit, poseStand, animateWalk } from './people.js';
import { Pursuit } from './pursuit.js';
import { buildSweatshop } from './sweatshop.js';
import { buildStreet } from './street.js';
import { buildNightmare } from './nightmare.js';
import { buildHome } from './home.js';
import { buildVoid } from './void.js';
import { XRRig } from './xr.js';

const $ = s => document.querySelector(s);
const params = new URLSearchParams(location.search);
const DEBUG = params.has('debug');
const DT_MAX = DEBUG && params.get('dtmax') ? +params.get('dtmax') : 0.05;   // debug only: lets slow test machines keep story time

// ---------- settings (remembered per browser) ----------
const DEFAULTS = { quality: 'auto', sensitivity: 1, volume: 0.9, hints: true };
let settings = { ...DEFAULTS };
try { Object.assign(settings, JSON.parse(localStorage.getItem('tlwh-hd') || '{}')); } catch (e) { /* storage blocked */ }
const saveSettings = () => { try { localStorage.setItem('tlwh-hd', JSON.stringify(settings)); } catch (e) { /* ignore */ } };
let quality = settings.quality === 'auto' ? 'medium' : settings.quality;
if (params.get('q')) quality = params.get('q');

// ---------- UI ----------
const timers = {};
// Spoken lines and thoughts are typed out letter by letter (never popped up at full size); control hints
// (the 'hint' line) still appear at once, so instructions are always quick to read.
const TYPED = { thought: 30, subtitle: 38 };            // characters per second
const typing = {};
function typeInto(el, id, text, secs) {
  clearInterval(typing[id]);
  // "Speaker: "line"" → a small speaker tag, then the line typed out
  const m = id === 'subtitle' && /^([A-Z][A-Za-z ]{1,18}): (.*)$/.exec(text);
  el.innerHTML = '';
  if (m) { const who = document.createElement('span'); who.className = 'who'; who.textContent = m[1]; el.appendChild(who); text = m[2]; }
  const body = document.createElement('span'); body.className = 'say'; el.appendChild(body);
  const chars = [...text]; let i = 0;
  const cps = TYPED[id], step = () => {
    if (i >= chars.length) { clearInterval(typing[id]); return; }
    const c = chars[i++]; const sp = document.createElement('i'); sp.textContent = c; body.appendChild(sp);
  };
  step();
  typing[id] = setInterval(step, 1000 / cps);
  el.dataset.full = (m ? m[1] + ': ' : '') + text;          // the VR caption board reads the whole line
  return chars.length / cps;                                 // how long the typing takes
}
// In a headset the same hints are worded for the controllers (the desktop text is never changed)
const VR_WORDS = {
  'Look around with the mouse · click the glowing fabric on your left': 'Point at the glowing fabric on your left · pull the trigger',
  'Hold the mouse button on the machine to push the fabric through': 'Point at the machine · hold the trigger to push the fabric through',
  'W A S D to walk · hold Shift to run · find your bag (look for the glow)': 'Left stick to walk (all the way to run) · right stick to turn · find your bag (look for the glow)',
  'Hold Q to look inside your bag · then go home': 'Squeeze a grip to look inside your bag · then go home',
  'Click the fabric on your left': 'Point at the fabric on your left · pull the trigger',
  'Hold the mouse button on the machine': 'Point at the machine · hold the trigger',
  'Click the supervisor at his desk': 'Point at the supervisor · pull the trigger',
  'Click the door to go outside': 'Point at the door · pull the trigger',
  'Hold E to hold out your hands': 'Hold the trigger to hold out your hands',
  'Hold the bag to your chest to hide the light — and stay still': 'Squeeze a grip to hug the bag and hide the light — and stay still',
};
const vrWords = t => VR_WORDS[t] || String(t)
  .replace(/Hold the mouse button/g, 'Hold the trigger').replace(/\bClick\b/g, 'Pull the trigger').replace(/\bclick\b/g, 'pull the trigger')
  .replace(/\b(Hold|Press) [QR]\b/g, 'Squeeze a grip').replace(/\b(Hold|Press) E\b/g, 'Hold the trigger').replace(/\b[Hh]old C\b/g, 'squeeze both grips')
  .replace(/W A S D/g, 'Left stick').replace(/[Hh]old Shift/g, 'push the stick all the way').replace(/ with the mouse/g, '');
const ui = {
  state: { progress: 0, stamina: null },          // read by the VR caption board
  show(id, on) { $('#' + id).classList.toggle('show', on); },
  text(id, text, secs) {
    const el = $('#' + id); clearTimeout(timers[id]);
    if (!text) { clearInterval(typing[id]); el.classList.remove('on'); return; }
    let typeT = 0;
    if (TYPED[id]) typeT = typeInto(el, id, text, secs); else el.textContent = text;
    el.classList.add('on');
    if (secs) timers[id] = setTimeout(() => el.classList.remove('on'), (secs + typeT * 0.85) * 1000);   // stays up long enough to read once typed
  },
  // a small ring that ripples out from the crosshair when you use something (click feedback)
  pulse() { const c = $('#crosshair'); if (!c) return; c.classList.remove('tap'); void c.offsetWidth; c.classList.add('tap'); },
  hint(t, s) { if (settings.hints || !t) ui.text('hint', t && player.xr ? vrWords(t) : t, s); },
  thought(t, s) { ui.text('thought', t, s); },
  subtitle(t, s) { ui.text('subtitle', t, s); },
  fade(on, white = false) { const f = $('#fade'); f.classList.toggle('white', white); f.classList.toggle('on', on); },
  progress(k) { ui.state.progress = k; const el = $('#ring'); el.style.setProperty('--k', k); el.classList.toggle('on', k > 0.001 && k < 1); },
  label(t) { const el = $('#label'); el.textContent = t || ''; el.classList.toggle('on', !!t); $('#crosshair').classList.toggle('hot', !!t); },
  stamina(v) { ui.state.stamina = v; const el = $('#stamina'); el.classList.toggle('on', v !== null && v < 0.98); if (v !== null) el.firstElementChild.style.transform = `scaleX(${v})`; },
  finale(extra) {
    // the Extra edition first says what tomorrow holds
    ['stat-0a', 'stat-0b'].forEach(id => { $('#' + id).hidden = !extra; });
    const ids = [...(extra ? ['stat-0a', 'stat-0b'] : []), 'stat-1', 'stat-2', 'stat-3', 'stat-src', 'stat-fin'];
    ids.forEach(id => $('#' + id).classList.remove('on'));
    ids.forEach((id, i) => setTimeout(() => $('#' + id).classList.add('on'), 900 + i * 2600));
  },
  error(m) { $('#error').textContent = m; },
};
addEventListener('error', e => ui.error('Error: ' + e.message));
addEventListener('unhandledrejection', e => DEBUG && ui.error('Error: ' + (e.reason && e.reason.message || e.reason)));

// ---------- renderer ----------
const canvas = $('#scene');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance', stencil: false });
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 0.95;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.xr.enabled = true;          // the same page runs in a VR headset
const pixelRatio = () => Math.min(devicePixelRatio, quality === 'high' ? 1.5 : quality === 'medium' ? 1.0 : 0.8);
renderer.setPixelRatio(pixelRatio());
renderer.setSize(innerWidth, innerHeight, false);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0b0907);
scene.fog = new THREE.FogExp2(0x16100b, 0.036);
const pmrem = new THREE.PMREMGenerator(renderer);
scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
scene.environmentIntensity = 0.1;

const camera = new THREE.PerspectiveCamera(72, innerWidth / innerHeight, 0.03, 90);
const titleCam = new THREE.PerspectiveCamera(50, innerWidth / innerHeight, 0.05, 90);
const listener = new THREE.AudioListener(); camera.add(listener);
listener.setMasterVolume(settings.volume);
const audio = new AudioEngine(listener);
audio.stopAll = audio.stopAll || ((list) => (list || []).forEach(a => { try { if (a && a.isPlaying) a.stop(); if (a && a.parent) a.parent.remove(a); } catch (e) { /* ignore */ } }));
const player = new Player({ camera, scene, canvas, audio, settings });
const interactor = new Interactor(camera, canvas);
interactor.onUse = () => { ui.pulse(); if (audio.ready) audio.oneShot('tap', { volume: 0.35, rate: 0.95 + Math.random() * 0.1 }); };   // every use answers: a ripple and a soft tap
const thread = new Thread(scene);
const hands = new Hands(scene, camera, { skin: 0x7a4c30 });
// ---------- your body's shadow ----------
// You never see your own body (only the floating hands), but your shadow on the ground is a whole child:
// an invisible full body (no colour, no depth) that only casts a shadow. It walks when you walk, sits
// when you sit, and drops out when you lie down. The hands cast no shadow of their own (no doubles).
const shadowBody = makePerson({ child: true, outfit: 'shirt', top: 0x7a6a50, bottom: 0x3a3a40, skin: 0x7a4c30, seed: 3, scale: 1.3 });
{
  const ghost = new THREE.MeshBasicMaterial({ colorWrite: false, depthWrite: false });
  shadowBody.traverse(o => { if (o.isMesh) { o.material = ghost; o.castShadow = true; o.receiveShadow = false; o.frustumCulled = false; } });
  shadowBody.visible = false; scene.add(shadowBody);
}
let bodyStride = 0, bodySit = false;
function updateShadowBody(dt, show) {
  shadowBody.visible = show && player.eye > 0.55;
  if (!shadowBody.visible) return;
  const p = player.dolly.position;
  player.headWorld(head);   // in a headset you walk around inside your play space: the body follows your head
  shadowBody.position.set(player.xr ? head.x : p.x, p.y, player.xr ? head.z : p.z);
  shadowBody.rotation.y = player.yaw + Math.PI;            // the body faces where you face (not where you look up or down)
  const sit = player.eye < 1.42;
  if (sit) {
    // seated: the head stays where your eyes are, the hips just behind it at seat height
    if (!bodySit) { bodySit = true; }
    poseSit(shadowBody, Math.max(0.12, player.eye - 0.8));
    shadowBody.position.x += Math.sin(player.yaw) * 0.12; shadowBody.position.z += Math.cos(player.yaw) * 0.12;
  } else {
    if (bodySit) { bodySit = false; poseStand(shadowBody); }
    if (player.moving) bodyStride += dt * (player.running ? 11 : 7.5);
    animateWalk(shadowBody, bodyStride, player.moving ? 1 : 0);
  }
}
const lights = new LightPool(scene, 6);

// ---------- shared outdoor light: sun (shadows follow you), sky fill, sky dome ----------
const sun = new THREE.DirectionalLight(0xffc896, 0);
sun.castShadow = true; sun.shadow.mapSize.set(2048, 2048);
Object.assign(sun.shadow.camera, { left: -15, right: 15, top: 15, bottom: -15, near: 1, far: 60 });
sun.shadow.bias = -0.0005; sun.shadow.normalBias = 0.035; sun.shadow.radius = 2;
scene.add(sun, sun.target);
const SUN_OFF = new THREE.Vector3(-14, 10, -6);            // low evening sun from the west-southwest
const hemi = new THREE.HemisphereLight(0xc8a882, 0x3a2a1e, 0.85); scene.add(hemi);
const skyTex = (() => { const c = document.createElement('canvas'); c.width = 8; c.height = 256; const g = c.getContext('2d'), gr = g.createLinearGradient(0, 0, 0, 256);
  gr.addColorStop(0, '#2c3a5a'); gr.addColorStop(0.32, '#6a6a86'); gr.addColorStop(0.47, '#d89a68'); gr.addColorStop(0.53, '#f4cc94'); gr.addColorStop(1, '#5a4430'); g.fillStyle = gr; g.fillRect(0, 0, 8, 256);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t; })();
const skyDome = new THREE.Mesh(new THREE.SphereGeometry(70, 24, 16), new THREE.MeshBasicMaterial({ map: skyTex, side: THREE.BackSide, fog: false, depthWrite: false }));
skyDome.renderOrder = -1; skyDome.frustumCulled = false; scene.add(skyDome);

// the police (they follow you from the market into the nightmare)
const police = [makePolice(0), makePolice(1)];
police.forEach(p => { p.visible = false; scene.add(p); });
const pursuit = new Pursuit(player, police);

let post = null, bagCtl = null, xrRig = null;
const ctx = { scene, audio, interactor, player, ui, thread, hands, lights, police, pursuit, camera, post: { dream: 0, glow: 0 }, edition: 'normal' };   // 'normal' | 'extra'
const ORDER = ['sweatshop', 'street', 'nightmare', 'void', 'home'];   // the void (the light) is only visited in the Extra edition
const spaces = [];              // filled as they are built
let cur = 0, built = 0, allBuilt = null;
ctx.refreshColliders = () => { player.colliders = spaces.filter(Boolean).flatMap(sp => sp.getColliders()); };

// ---------- build: the factory now, everything else in the background ----------
async function build() {
  const bar = $('#load-bar'), msg = $('#load-msg');
  let tPrev = performance.now();
  const step = async (k, text) => { if (DEBUG) { const n = performance.now(); console.log('[load]', text, Math.round(n - tPrev) + 'ms'); tPrev = n; } bar.style.width = (k * 100) + '%'; msg.textContent = text; await new Promise(r => setTimeout(r, 30)); };
  await step(0.1, 'Weaving cloth…');
  bagCtl = new BagCtl(camera, bagCloth(), hands); ctx.bagCtl = bagCtl;
  await step(0.3, 'Building the workshop…');
  spaces[0] = buildSweatshop(ctx); built = 1;
  ctx.refreshColliders();
  xrRig = new XRRig({ renderer, camera, player, interactor, hands, bagCtl, ui });
  XRRig.supported().then(ok => { const b = $('#vr-btn'); if (b) b.hidden = !ok; });
  await step(0.75, 'Lighting…');
  post = makePost(renderer, scene, camera, quality);
  ctx.post = new Proxy({}, { set(_, k, v) { post[k] = v; return true; }, get(_, k) { return post[k]; } });
  applyQuality(); onResize();
  updateVisibility(true);
  post.setCamera(titleCam); spaces[0].cine(titleCam, 0); renderer.compile(scene, titleCam);
  await step(1, 'Ready');
  setTimeout(() => { ui.show('loading', false); ui.show('title', true); setMode('title'); }, 400);
  allBuilt = buildRest();
}
const idle = (ms = 60) => new Promise(r => setTimeout(r, ms));
async function buildRest() {
  await idle(900);
  const builders = [buildStreet, buildNightmare, buildVoid, buildHome];
  for (let i = 0; i < builders.length; i++) {
    const sp = builders[i](ctx); spaces[i + 1] = sp; built = i + 2;
    sp.root.visible = false;
    sp.onEnd(next => onSpaceEnd(next));
    if (sp.setQuality) sp.setQuality(quality);
    ctx.refreshColliders();
    await idle(120);
  }
  // compile every space's shaders now (hidden behind whatever is on screen), so walking into a
  // new space never stalls while the GPU compiles
  const vis = spaces.map(s => s.root.visible);
  spaces.forEach(s => { s.root.visible = true; });
  police.forEach(p => { p.visible = true; });
  try { await renderer.compileAsync(scene, camera); } catch (e) { renderer.compile(scene, camera); }
  spaces.forEach((s, i) => { s.root.visible = vis[i]; });
  updateVisibility(mode === 'title' || mode === 'loading' || mode === 'intro');
  if (DEBUG) console.log('[load] all spaces built');
}

function onSpaceEnd(next) {
  if (next === 'finale') return finale();
  goTo(next);
}
async function goTo(name) {
  const i = ORDER.indexOf(name);
  if (!spaces[i]) { await allBuilt; }
  // stop what is behind you; the street keeps the factory and the nightmare keeps the street for one
  // more space (their sounds fade out behind you). The light and the home leave everything behind.
  const keepPrev = name === 'street' || name === 'nightmare';
  spaces.forEach((sp, j) => { if (sp && j !== i && j <= cur && !(keepPrev && j === i - 1)) sp.stop(); });
  if (i >= 1) player.bounds = null;
  cur = i;
  spaces[i].start();
  ctx.refreshColliders();
  updateVisibility();
}
// only the current space and its neighbours are drawn
ctx.hideSpace = n => { const sp = spaces[ORDER.indexOf(n)]; if (sp) sp.root.visible = false; };
function updateVisibility(title = false) {
  document.body.classList.toggle('in-light', !title && ORDER[cur] === 'void');
  const V = ORDER.indexOf('void'), H = ORDER.indexOf('home'), N = ORDER.indexOf('nightmare');
  spaces.forEach((sp, i) => {
    if (!sp) return;
    let on = title ? i === 0 : Math.abs(i - cur) <= 1;
    if (!title && cur === V) on = i === V;                       // the light stands alone
    if (!title && i === V && cur !== V) on = false;
    if (!title && cur === N && i === H) on = true;                // the home's glowing door is seen from the last lane
    if (!title && cur === H && i === N) on = true;
    sp.root.visible = on;
  });
  police.forEach(p => { p.visible = !title && (cur === 1 || cur === 2); });
}

// ---------- air & light follow whichever space you're in ----------
const fogTarget = new THREE.Color(), tmpC = new THREE.Color(), headV = new THREE.Vector3();
const activeSpaces = new Set();
function zoneAt(x) { for (let i = spaces.length - 1; i >= 0; i--) if (spaces[i] && x >= spaces[i].zone.minX) return i; return 0; }
function updateAtmosphere(dt, title) {
  player.headWorld(headV);
  const zi = title ? 0 : (exploring ? zoneAt(headV.x) : cur);
  const a = spaces[zi] ? spaces[zi].atmosphere(headV.x) : spaces[0].atmosphere();
  // slow, eased blending: moving between spaces never snaps suddenly brighter or darker
  const k = Math.min(1, dt * (title ? 2.5 : 0.9));
  fogTarget.copy(a.fog);
  scene.fog.color.lerp(fogTarget, k); scene.background.copy(scene.fog.color);
  scene.fog.density = THREE.MathUtils.lerp(scene.fog.density, a.density, k);
  sun.intensity = THREE.MathUtils.lerp(sun.intensity, a.sun || 0, k);
  hemi.intensity = THREE.MathUtils.lerp(hemi.intensity, a.hemi, k);
  hemi.color.lerp(tmpC.copy(a.hemiSky || new THREE.Color(0xc8a882)), k);
  hemi.groundColor.lerp(tmpC.copy(a.hemiGround || new THREE.Color(0x3a2a1e)), k);
  renderer.toneMappingExposure = THREE.MathUtils.lerp(renderer.toneMappingExposure, a.exposure || 1.0, k * 0.7);
  skyDome.position.copy(title ? titleCam.position : headV);
  skyDome.material.color.lerp(tmpC.copy(a.skyTint || new THREE.Color(1, 1, 1)).multiplyScalar(a.sky ?? 1), k);
  // the outdoor sun follows you; its shadow map is snapped to whole texels so edges don't crawl
  const tx = 30 / sun.shadow.mapSize.x, cx = Math.round(headV.x / tx) * tx, cz = Math.round(headV.z / tx) * tx;
  sun.target.position.set(cx, 0, cz); sun.position.set(cx + SUN_OFF.x, SUN_OFF.y, cz + SUN_OFF.z);
  sun.shadow.autoUpdate = sun.intensity > 0.02;
  // the factory's own sun (through its window) is only on in the factory
  if (spaces[0] && (title || cur === 0) && !exploring) { /* the factory sets it */ } else if (spaces[0]) spaces[0].sun.intensity = 0;
  if (spaces[0]) spaces[0].sun.shadow.autoUpdate = spaces[0].sun.intensity > 0.02;
  // which spaces may use the light pool
  activeSpaces.clear(); spaces.forEach(s => { if (s && s.root.visible) activeSpaces.add(s.name); });
  lights.update(dt, headV, activeSpaces);
}

function startJourney() {
  spaces.forEach(sp => { if (sp) { sp.stop(); sp.reset(); } });
  bagCtl.resetContents();
  pursuit.stop();
  thread.set(null); ui.thought(''); ui.subtitle(''); ui.stamina(null);
  player.canRun = true; player.speedScale = 1; player.jogAllowed = false;
  cur = 0;
  spaces[0].start();
  ctx.refreshColliders();
  updateVisibility();
}
function finale() {
  setMode('end'); interactor.release(); ui.fade(true);
  setTimeout(() => {
    player.unlock();
    spaces.forEach(sp => sp && sp.stop());
    ui.thought(''); ui.subtitle(''); ui.label(''); ui.hint(''); ui.stamina(null);
    const lids = $('#eyelids'); if (lids) lids.style.setProperty('--lid', '0');
    ui.show('endcard', true); ui.finale(true);   // both editions: tomorrow at seven, nothing has changed
    setTimeout(() => { if (mode === 'end') ui.fade(false); }, 1100);   // lift the fade once the black end card is fully up
    post.setCamera(titleCam);
    if (xrRig && xrRig.active) xrRig.showEnd();   // VR: the same lines in the dark; the trigger then leaves VR
  }, 2000);
}

function applyQuality() {
  if (!renderer.xr.isPresenting) renderer.setPixelRatio(pixelRatio());
  if (post) { post.setQuality(quality); onResize(); }
  spaces.forEach(s => s && s.setQuality && s.setQuality(quality));
  sun.shadow.mapSize.setScalar(quality === 'high' ? 2048 : quality === 'medium' ? 1536 : 1024);
  if (sun.shadow.map) { sun.shadow.map.dispose(); sun.shadow.map = null; }
  document.querySelectorAll('[data-q]').forEach(b => b.classList.toggle('on', b.dataset.q === settings.quality));
}
function onResize() {
  if (renderer.xr.isPresenting) return;       // the headset sets its own size; the page is resized again when VR ends
  renderer.setSize(innerWidth, innerHeight, false);
  camera.aspect = titleCam.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix(); titleCam.updateProjectionMatrix();
  if (post) { const s = renderer.getDrawingBufferSize(new THREE.Vector2()); post.setSize(s.x, s.y); }
}
addEventListener('resize', onResize);

// ---------- flow ----------
let mode = 'loading'; // loading | title | intro | play | paused | end
function setMode(m) { mode = m; document.body.classList.toggle('playing', m === 'play' || m === 'paused'); }
setMode('loading');

// edition picker: Normal by default; Extra adds content to the last stage
function edOpen(on) { const ed = $('#ed'); if (!ed) return; ed.classList.toggle('open', on); ed.querySelector('.ed-btn').setAttribute('aria-expanded', on ? 'true' : 'false'); }
function setEdition(v) {
  ctx.edition = v === 'extra' ? 'extra' : 'normal';
  $('#ed-cur').textContent = ctx.edition === 'extra' ? 'Extra' : 'Normal';
  $('#ed').classList.toggle('extra', ctx.edition === 'extra');
  document.querySelectorAll('#ed-list [data-ed]').forEach(b => { b.classList.toggle('on', b.dataset.ed === ctx.edition); b.setAttribute('aria-selected', b.dataset.ed === ctx.edition ? 'true' : 'false'); });
}
{ const xb = document.querySelector('#ed-list [data-ed="extra"]'); if (xb) { xb.addEventListener('pointerenter', () => $('#ed').classList.add('hot')); xb.addEventListener('pointerleave', () => $('#ed').classList.remove('hot')); } }
document.addEventListener('click', e => {
  const a = e.target.closest('[data-action]'); if (!a) { edOpen(false); return; }
  const act = a.dataset.action;
  if (act !== 'edition-open' && act !== 'edition') edOpen(false);
  if (act === 'begin') { pendingScene = 0; begin(); }
  if (act === 'scenes') ui.show('scenes', true);
  if (act === 'close-scenes') ui.show('scenes', false);
  if (act === 'scene') { ui.show('scenes', false); pendingScene = +a.dataset.n; begin(); }
  if (act === 'vr') enterVR();
  if (act === 'edition-open') edOpen(!$('#ed').classList.contains('open'));
  if (act === 'edition') { setEdition(a.dataset.ed); edOpen(false); }
  if (act === 'settings') ui.show('settings', true);
  if (act === 'close-settings') ui.show('settings', false);
  if (act === 'resume') resume();
  if (act === 'restart') restart();
  if (act === 'quit') quit();
});
document.querySelectorAll('[data-q]').forEach(b => b.addEventListener('click', () => {
  settings.quality = b.dataset.q; quality = b.dataset.q === 'auto' ? 'medium' : b.dataset.q; autoChecked = settings.quality !== 'auto'; saveSettings(); applyQuality();
}));
$('#sens').value = settings.sensitivity; $('#sens').addEventListener('input', e => { settings.sensitivity = +e.target.value; saveSettings(); });
$('#vol').value = settings.volume; $('#vol').addEventListener('input', e => { settings.volume = +e.target.value; listener.setMasterVolume(settings.volume); saveSettings(); });
$('#hints').checked = settings.hints; $('#hints').addEventListener('change', e => { settings.hints = e.target.checked; saveSettings(); });

async function begin() {
  if (mode !== 'title') return;
  ui.show('title', false); ui.show('intro', true); setMode('intro');
  const l1 = $('#intro-1'), l2 = $('#intro-2');
  l2.textContent = 'Preparing sound…';
  setTimeout(() => l1.classList.add('on'), 300);
  await audio.init();
  l2.textContent = 'Click anywhere to sit down.'; l2.classList.add('on');
  $('#intro').addEventListener('click', sitDown, { once: true });
}
let vrStarting = false;
async function enterVR() {
  if (mode !== 'title' || !xrRig || vrStarting) return;
  vrStarting = true;
  // ask for the headset first, straight from the click (a browser only opens it from a fresh gesture);
  // the sound starts loading at the same moment and the story waits for it in the dark
  const sound = audio.init();
  try {
    await xrRig.enter(() => {
      player.xr = true; ui.show('title', false); ui.fade(true); setMode('intro');
      if (quality === 'high') { quality = 'medium'; applyQuality(); }     // headsets play at Medium
      sound.catch(() => { /* placeholders */ }).then(() => {
        if (!xrRig.active || mode !== 'intro') return;
        startJourney(); post.setCamera(camera); jumpScene();
        setMode('play'); playTime = 0; autoChecked = true;
        setTimeout(() => ui.fade(false), 600);
      });
    }, () => {
      player.xr = false; vrStarting = false; renderer.setPixelRatio(pixelRatio()); onResize();
      if (mode === 'end') return;             // the end card stays on the page
      ui.fade(false);
      if (mode !== 'title') quit();
    });
  } catch (e) { vrStarting = false; ui.error('Could not start VR: ' + e.message); }
}
function sitDown() {
  ui.fade(true); ui.show('intro', false);
  player.lock();
  startJourney(); post.setCamera(camera); jumpScene();
  setMode('play'); playTime = 0;
  setTimeout(() => ui.fade(false), 1500);
  $('#intro-1').classList.remove('on'); $('#intro-2').classList.remove('on');
}
// ---------- scene select: start later in the story (Scene 2 the market · 3 the run · 4 the door) ----------
let pendingScene = 0;
async function jumpScene() {
  const n = pendingScene; pendingScene = 0;
  if (n < 2) return;
  spaces[0].sceneOutside();                                   // the shift is done: bag, three coins, outside the door
  if (n === 2) return;                                        // walking on takes you into the lane and the market
  await allBuilt;
  await goTo('nightmare');
  bagCtl.setContents({ coins: 3, scraps: true, food: true });  // the stolen food is in the bag
  spaces[ORDER.indexOf('nightmare')].sceneStart(n === 4);
  ctx.refreshColliders(); updateVisibility();
}
let pausedAt = 0;
function pause() { if (mode !== 'play') return; interactor.release(); setMode('paused'); ui.show('pause', true); ui.hint(''); pausedAt = performance.now(); }
function resume() {
  if (mode !== 'paused') return;
  ui.show('pause', false); setMode('play'); player.lock();
  // a browser may refuse the mouse lock right after Esc; then the next click on the scene takes it
  setTimeout(() => { if (mode === 'play' && !player.locked && !player.xr) ui.hint('Click to look around', 3); }, 400);
}
player.onPauseRequest = pause;
canvas.addEventListener('click', () => { if (mode === 'play' && !player.locked && !player.xr) player.lock(); });
function restart() {
  ui.show('pause', false); ui.show('endcard', false); ui.fade(true); player.lock();
  if (exploring) setExplore(false);
  setTimeout(() => { startJourney(); post.setCamera(camera); setMode('play'); ui.fade(false); }, 700);
}
function quit() {
  ui.show('pause', false); ui.show('endcard', false);
  if (exploring) setExplore(false);
  if (xrRig && xrRig.active) { const x = xrRig; setTimeout(() => x.exit(), 0); }
  spaces.forEach(sp => { if (sp) { sp.stop(); sp.reset(); } });
  pursuit.stop(); bagCtl.resetContents(); thread.set(null); hands.hide();
  player.unlock(); post.setCamera(titleCam);
  ui.thought(''); ui.subtitle(''); ui.hint(''); ui.label(''); ui.stamina(null);
  cur = 0; updateVisibility(true);
  setMode('title'); ui.show('title', true);
}

// ---------- explore mode (P): walk anywhere through walls, no story; 1–4 jump between spaces ----------
let exploring = false, saved = null;
const JUMPS = [[-1.5, 3.2, -1.9], [23, 4, -2.0], [41.5, 8.3, -Math.PI / 2], [83.5, 12.7, -Math.PI / 2]];
function setExplore(on) {
  if (on === exploring || (on && (mode !== 'play' || player.xr))) return;
  exploring = on; document.body.classList.toggle('exploring', on);
  if (on) {
    saved = { pos: player.dolly.position.clone(), yaw: player.yaw, pitch: player.pitch, eye: player.eye, canMove: player.canMove, bounds: player.bounds };
    player.noclip = true; player.canMove = true; player.eye = 1.52; thread.visible = false;
    spaces.forEach(sp => { if (sp) sp.root.visible = true; });
    ui.hint(''); ui.thought(''); hands.hide();   // free hands while you wander
  } else {
    player.noclip = false;
    player.dolly.position.copy(saved.pos); player.yaw = saved.yaw; player.pitch = saved.pitch; player.eye = saved.eye; player.canMove = saved.canMove; player.bounds = saved.bounds;
    thread.visible = true;
    updateVisibility();
  }
}
let controlsSeen = false;
addEventListener('keydown', e => {
  // Esc: pause; Esc again: back to the game (the first Esc also releases the mouse, which pauses too)
  if (e.code === 'Escape' && !e.repeat) {
    if (mode === 'play' && !player.xr) pause();
    else if ($('#settings').classList.contains('show')) ui.show('settings', false);
    else if ($('#scenes').classList.contains('show')) ui.show('scenes', false);
    else if (mode === 'paused' && performance.now() - pausedAt > 250) resume();
  }
  if (e.code === 'KeyF' && (mode === 'play' || mode === 'paused')) {
    const el = $('#controls'), show = !el.classList.contains('on');
    if (show) controlsSeen = true; else if (controlsSeen) $('#fhint').classList.add('gone');
    el.classList.toggle('on', show);
  }
  if (e.code === 'KeyP' && built >= 5) setExplore(!exploring);
  if (exploring) { const n = ['Digit1', 'Digit2', 'Digit3', 'Digit4'].indexOf(e.code); if (n >= 0) { const [x, z, yaw] = JUMPS[n]; player.place(x, z, yaw, 1.52); } }
  if (DEBUG && e.code === 'KeyN' && spaces[cur]) spaces[cur].skip();
});

// ---------- auto quality: watch the frame rate in the first seconds of play ----------
let autoChecked = settings.quality !== 'auto' || !!params.get('q'), playTime = 0, fpsAcc = 0, fpsN = 0;
function autoQuality(dt) {
  if (autoChecked || mode !== 'play') return;
  playTime += dt;
  if (playTime < 3) return;
  fpsAcc += dt; fpsN++;
  if (playTime > 7) {
    const fps = fpsN / fpsAcc; fpsAcc = 0; fpsN = 0; playTime = 3;
    if (fps < 40 && quality !== 'low') { quality = quality === 'high' ? 'medium' : 'low'; applyQuality(); }
    else if (fps > 75 && quality === 'medium') { quality = 'high'; applyQuality(); autoChecked = true; }
    else autoChecked = true;
  }
}

// ---------- loop ----------
const clock = new THREE.Clock();
let elapsed = 0;
const fwd = new THREE.Vector3(), head = new THREE.Vector3();
renderer.setAnimationLoop(() => {
  const dt = Math.min(clock.getDelta(), DT_MAX);
  elapsed += dt;
  if (!spaces[0] || !post) return;
  const playing = mode === 'play';
  const inXR = renderer.xr.isPresenting;
  if (inXR && xrRig.blurred) { try { xrRig.update(dt); } catch (e) { /* see below */ } renderer.render(scene, camera); return; }   // headset menu open: the story waits
  spaces.forEach((sp, i) => sp && sp.update(dt, elapsed, playing && !exploring && i === cur));
  if (inXR) {
    // a VR-only fault must never freeze the headset: report it once and carry on
    try { xrRig.update(dt); } catch (e) { if (!xrRig.faulted) { xrRig.faulted = true; console.error('[vr]', e); } }
    // VR stand-ins for keys: hold the trigger to beg; squeeze both grips to close your eyes
    const st = xrRig.state, tr = Math.max(st[0].trigger, st[1].trigger), sq = Math.min(st[0].squeeze, st[1].squeeze);
    if (spaces[1]) spaces[1].setXRBeg(tr > 0.5);
    ctx.xrTrigger = tr > 0.5;
    player.qHeldXR = Math.max(st[0].squeeze, st[1].squeeze) > 0.6;   // a grip hugs the bag (Extra hide)
    if (spaces[4]) spaces[4].setXRClose(sq > 0.6);
  } else { player.qHeldXR = false; ctx.xrTrigger = false; }
  if (playing) {
    player.update(dt);
    const h = interactor.update();
    ui.label(h && !inXR ? h.label : '');
    player.headWorld(head); player.forward(fwd);
    thread.update(dt, elapsed, head, fwd);
    bagCtl.update(dt, elapsed, (bagCtl.hugMode ? !!player.keys.KeyR : player.qHeld) || (inXR && player.qHeldXR), player.moving);   // Extra hide uses R (Q stays 'look in the bag')
    ui.stamina(cur === 2 && spaces[2] ? spaces[2].stamina : null);
    autoQuality(dt);
  } else thread.update(dt, elapsed, head, fwd);
  hands.update(dt);
  updateShadowBody(dt, mode === 'play' || mode === 'paused');
  const title = mode === 'title' || mode === 'intro' || mode === 'end' || mode === 'loading';
  if (title) spaces[0].cine(titleCam, elapsed);
  updateAtmosphere(dt, title);
  if (inXR) renderer.render(scene, camera);     // no screen-space effects in a headset: the lighting carries the look
  else post.render(elapsed);
  if (DEBUG) $('#debug').textContent = `${ctx.edition} · ${ORDER[cur]} · ${spaces[cur] ? spaces[cur].phase : ''} · ${quality} · ${Math.round(1 / Math.max(dt, 1e-3))} fps · built ${built}/5`;
});

// one-frame render statistics (draw calls and triangles across every pass)
function stats() {
  renderer.info.autoReset = false; renderer.info.reset();
  post.render(elapsed);
  const r = { calls: renderer.info.render.calls, triangles: renderer.info.render.triangles, geometries: renderer.info.memory.geometries, textures: renderer.info.memory.textures, programs: renderer.info.programs.length, quality };
  renderer.info.autoReset = true; return r;
}
if (DEBUG) window.__tlwh = {
  stats, get world() { return spaces[cur]; }, spaces, goTo, get cur() { return cur; }, get built() { return built; }, player, camera, scene, renderer, ui, interactor, begin, sitDown,
  get mode() { return mode; }, setMode, ctx, get post() { return post; }, audio, lights, pursuit, setExplore, get bagCtl() { return bagCtl; }, hands, shadowBody, get xrRig() { return xrRig; },
};
build().then(() => { spaces[0].onEnd(next => onSpaceEnd(next)); }).catch(e => ui.error('Could not build the scene: ' + e.message + '\n' + e.stack));
