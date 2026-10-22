// The Long Way Home — created by Sicheng Zheng. © 2026 Sicheng Zheng. All rights reserved.
// THE LONG WAY HOME — entry point
// Title → headphones card → Space 1 Sweatshop → Space 2 Street & Market → Space 3 Nightmare
// → Home → statistics. One continuous world: you walk from each space into the next.
// Same page works on desktop (mouse + WASD) and in a VR headset browser (WebXR).
import * as THREE from 'three';
import { settings } from './settings.js';
import { AudioEngine } from './audio.js';
import { Player } from './player.js';
import { Interactor } from './interact.js';
import { UI } from './ui.js';
import { makeBag, makePolice } from './kit.js';
import { BagController } from './bag.js';
import { Guide } from './guide.js';
import { buildSweatshop } from './spaces/sweatshop.js';
import { buildStreet } from './spaces/street.js';
import { buildNightmare } from './spaces/nightmare.js';
import { buildHome } from './spaces/home.js';

console.log('%cThe Long Way Home%c\ncreated by Sicheng Zheng · © 2026 Sicheng Zheng. All rights reserved.', 'font: italic 20px Georgia, serif; color: #d23a2c', 'font: 12px monospace; color: #888');
const DEBUG = new URLSearchParams(location.search).has('debug');
const $ = s => document.querySelector(s);
const ui = new UI({ onAction, onSettingsChange: applySettings });
addEventListener('error', e => ui.error('Error: ' + e.message));
addEventListener('unhandledrejection', e => DEBUG && ui.error('Error: ' + (e.reason && e.reason.message || e.reason)));

// ---------- renderer ----------
const canvas = $('#scene');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.15;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.xr.enabled = true;
renderer.xr.setReferenceSpaceType('local-floor');

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(settings.fov, innerWidth / innerHeight, 0.03, 60);
const cineCam = new THREE.PerspectiveCamera(58, innerWidth / innerHeight, 0.05, 60);
const listener = new THREE.AudioListener();
camera.add(listener);

const audio = new AudioEngine(listener);

// VR caption board: in a headset the page's text can't be seen, so thoughts and subtitles
// are drawn onto a panel that floats in front of your eyes (desktop uses the HTML text).
const capCanvas = document.createElement('canvas'); capCanvas.width = 1024; capCanvas.height = 256;
const capTex = new THREE.CanvasTexture(capCanvas); capTex.colorSpace = THREE.SRGBColorSpace;
const capBoard = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 0.3), new THREE.MeshBasicMaterial({ map: capTex, transparent: true, depthTest: false, toneMapped: false }));
capBoard.position.set(0, -0.28, -1.3); capBoard.renderOrder = 999; capBoard.visible = false; camera.add(capBoard);
const capLines = { thought: '', subtitle: '' }, capTimers = {};
function drawCaption() {
  const g = capCanvas.getContext('2d'); g.clearRect(0, 0, 1024, 256);
  g.textAlign = 'center'; g.shadowColor = 'rgba(0,0,0,.9)'; g.shadowBlur = 12;
  if (capLines.thought) { g.font = 'italic 54px Georgia, serif'; g.fillStyle = '#f3ead8'; g.fillText(capLines.thought, 512, 90, 1000); }
  if (capLines.subtitle) { g.font = '40px "Courier New", monospace'; g.fillStyle = '#e8dcc0'; g.fillText(capLines.subtitle, 512, 190, 1000); }
  capTex.needsUpdate = true;
}
ui.mirror = (kind, text, secs) => {
  capLines[kind] = text; drawCaption();
  clearTimeout(capTimers[kind]); capTimers[kind] = setTimeout(() => { capLines[kind] = ''; drawCaption(); }, secs * 1000);
};
const interactor = new Interactor(camera);
const player = new Player({ renderer, camera, scene, canvas, interactor, audio });
const debugEl = DEBUG ? $('#debug') : null;
// What the child carries from space to space. The bag is the key object (see WORLD.md).
const bag = makeBag({ ours: true });
const journey = { bag, bagCtl: new BagController(bag, player), coins: 0, hasBag: false };
const guide = new Guide(scene, player);
const police = [makePolice(), makePolice()];
police.forEach(p => scene.add(p));

// outdoor light shared by all spaces; each space says how bright / foggy it should be
const sun = new THREE.DirectionalLight(0xffd2a0, 0); sun.position.set(-10, 14, -6); scene.add(sun, sun.target);
const sky = new THREE.HemisphereLight(0xffe8c8, 0x3a2a1a, 0); scene.add(sky);
// a dusk sky above the streets (tinted blood-red in the nightmare)
const skyCanvas = document.createElement('canvas'); skyCanvas.width = 8; skyCanvas.height = 256;
{ const g = skyCanvas.getContext('2d'), gr = g.createLinearGradient(0, 0, 0, 256);
  gr.addColorStop(0, '#2a3450'); gr.addColorStop(0.35, '#7a6a80'); gr.addColorStop(0.5, '#d89a68'); gr.addColorStop(0.56, '#f0c890'); gr.addColorStop(1, '#3a2a20');
  g.fillStyle = gr; g.fillRect(0, 0, 8, 256); }
const skyTex = new THREE.CanvasTexture(skyCanvas); skyTex.colorSpace = THREE.SRGBColorSpace;
const skyDome = new THREE.Mesh(new THREE.SphereGeometry(55, 24, 16), new THREE.MeshBasicMaterial({ map: skyTex, side: THREE.BackSide, fog: false, depthWrite: false, toneMapped: false }));
skyDome.renderOrder = -1; scene.add(skyDome);

const ctx = {
  scene, audio, interactor, player, ui, settings, debug: debugEl, journey, guide, police,
  refreshColliders: () => { player.colliders = spaces.flatMap(sp => sp.getColliders()); },
  thought: (text, secs) => ui.thought(text, secs),
  currentSpace: () => ORDER[cur],
};
const world = buildSweatshop(ctx);                 // Space 1 (also used for the title-screen camera)
const street = buildStreet(ctx);                   // Space 2
ctx.pursuit = street.pursuit;
const nightmare = buildNightmare(ctx);             // Space 3 ★
const home = buildHome(ctx);                       // Ending
const ORDER = ['sweatshop', 'street', 'nightmare', 'home'];
const spaces = [world, street, nightmare, home];
let cur = 0;
ctx.refreshColliders();

function goTo(name) {
  const i = ORDER.indexOf(name);
  if (i - 2 >= 0) spaces[i - 2].stop();      // sounds of the space before last fade out now
  cur = i;
  spaces[i].start();
  ctx.refreshColliders();
  updateVisibility();
}
spaces.forEach(sp => sp.onEnd(next => { if (next === 'finale') finale(); else goTo(next); }));

// only draw the current space and its neighbours
function updateVisibility(title = false) {
  spaces.forEach((sp, i) => {
    const on = title ? i === 0 : Math.abs(i - cur) <= 1;
    sp.root.visible = on; (sp.extraRoots || []).forEach(r => { r.visible = on; });
  });
  police.forEach(p => { p.visible = !title && cur >= 1 && cur <= 2; });
}
updateVisibility(true);

// air & light follow whichever space you're in
const fogTarget = new THREE.Color(), hemiSky = new THREE.Color(), hemiGround = new THREE.Color(), headV = new THREE.Vector3();
function updateAtmosphere(dt, title) {
  let a;
  player.headWorld(headV);
  const zi = exploring ? zoneAt(headV.x) : cur;
  if (title || zi === 0) a = { fog: new THREE.Color(0x1d1712), density: 0.05, sun: 0, hemi: 0 };
  else a = spaces[zi].atmosphere(headV.x);
  if (exploring && nightmareLook) a = nightmare.atmosphere(headV.x);
  const k = Math.min(1, dt * 2.5);
  fogTarget.copy(a.fog);
  scene.fog.color.lerp(fogTarget, k); scene.background.copy(scene.fog.color);
  scene.fog.density = THREE.MathUtils.lerp(scene.fog.density, a.density, k);
  sun.intensity = THREE.MathUtils.lerp(sun.intensity, a.sun, k);
  sky.intensity = THREE.MathUtils.lerp(sky.intensity, a.hemi, k);
  sky.color.lerp(hemiSky.copy(a.hemiSky || new THREE.Color(0xffe8c8)), k);
  sky.groundColor.lerp(hemiGround.copy(a.hemiGround || new THREE.Color(0x3a2a1a)), k);
  skyDome.position.copy(headV);
  skyDome.material.color.lerp(a.skyTint || new THREE.Color(title || zi === 0 ? 0x888888 : 0xffffff), k);
  if (cur >= 1 || exploring) { sun.target.position.set(headV.x, 0, headV.z); sun.position.set(headV.x - 10, 14, headV.z - 6); }
}

function startJourney() {
  if (exploring) setExplore(false);
  spaces.forEach(sp => { sp.stop(); sp.reset(); });
  journey.bagCtl.reset();
  guide.clear(); ui.thought(''); ui.subtitle('');
  cur = 0;
  world.start();
  player.canRun = true; player.speedScale = 1;
  ctx.refreshColliders();
  updateVisibility();
}

function finale() {
  setMode('end');
  interactor.release('mouse');
  ui.fade(true);
  setTimeout(() => {
    player.unlock();
    const s = renderer.xr.getSession(); if (s) s.end();
    spaces.forEach(sp => sp.stop());
    ui.thought(''); ui.subtitle(''); ui.stamina(null);
    document.getElementById('eyelids').style.setProperty('--lid', '0');
    ui.show('endcard', true); ui.finale();
    ui.fade(false);
  }, 2000);
}

// ---------- state ----------
let mode = 'title'; // title | intro | play | paused | end
document.body.classList.remove('playing');

function setMode(m) {
  mode = m;
  document.body.classList.toggle('playing', m === 'play' || m === 'paused');
}

// ---------- settings ----------
function applySettings(key) {
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2) * settings.resolution);
  renderer.setSize(innerWidth, innerHeight, false);
  camera.fov = settings.fov; camera.updateProjectionMatrix();
  if (renderer.shadowMap.enabled !== settings.shadows) {
    renderer.shadowMap.enabled = settings.shadows;
    world.setShadows(settings.shadows);
    scene.traverse(o => { if (o.material) [].concat(o.material).forEach(m => { m.needsUpdate = true; }); });
  }
  world.setQuality(settings.quality); street.setQuality(settings.quality);
  listener.setMasterVolume(settings.volume);
  if (!settings.showFps) ui.fps('');
  if (!settings.hints) ui.hint('');
}
applySettings();

function onResize() {
  renderer.setSize(innerWidth, innerHeight, false);
  camera.aspect = cineCam.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix(); cineCam.updateProjectionMatrix();
}
addEventListener('resize', onResize);
onResize();

// ---------- VR availability ----------
if (!window.isSecureContext) ui.setVR('insecure');
else if (navigator.xr && navigator.xr.isSessionSupported) {
  navigator.xr.isSessionSupported('immersive-vr').then(ok => ui.setVR(ok ? 'yes' : 'no')).catch(() => ui.setVR('no'));
} else ui.setVR('no');

// ---------- flow ----------
async function onAction(a) {
  if (a === 'begin') return beginDesktop();
  if (a === 'vr') return beginVR();
  if (a === 'resume') { ui.closeAllPanels(); setMode('play'); player.lock(); return; }
  if (a === 'restart') return restart();
  if (a === 'quit') return quitToTitle();
}

async function beginDesktop() {
  if (mode !== 'title') return;
  ui.show('title', false);
  ui.show('intro', true);
  setMode('intro');
  const l1 = $('#intro-1'), l2 = $('#intro-2');
  l2.textContent = 'Preparing sound…';
  setTimeout(() => l1.classList.add('on'), 300);
  await audio.init();
  l2.textContent = 'Click anywhere to sit down.';
  l2.classList.add('on');
  $('#intro').addEventListener('click', sitDown, { once: true });
}

function sitDown() {
  ui.fade(true);
  ui.show('intro', false);
  player.lock();
  startJourney();
  setMode('play');
  // sound first, picture second — the machine is what they hear first
  setTimeout(() => ui.fade(false), 1600);
  $('#intro-1').classList.remove('on'); $('#intro-2').classList.remove('on');
}

async function beginVR() {
  if (mode !== 'title') return;
  try {
    await audio.init();
    renderer.xr.setFramebufferScaleFactor(settings.resolution < 1 ? 0.85 : 1);
    const session = await navigator.xr.requestSession('immersive-vr', { optionalFeatures: ['local-floor', 'bounded-floor'] });
    await renderer.xr.setSession(session);
    session.addEventListener('end', onVREnd);
    ui.show('title', false);
    player.enterVR();
    startJourney();
    player.dolly.rotation.y = 0;
    setMode('play');
  } catch (e) {
    ui.error('Could not start VR: ' + e.message);
  }
}

function onVREnd() {
  player.exitVR();
  world.reattachBag();
  if (mode === 'play') { setMode('paused'); ui.openPanel('pause'); }
}

player.onPauseRequest = () => {
  if (mode === 'play') { interactor.release('mouse'); setMode('paused'); ui.openPanel('pause'); ui.hint(''); }
};

function restart() {
  ui.closeAllPanels();
  ui.show('endcard', false);
  ui.fade(true);
  player.lock();
  setTimeout(() => {
    startJourney();
    setMode('play');
    ui.fade(false);
  }, 700);
}

function quitToTitle() {
  document.getElementById('controls').classList.remove('on');
  if (exploring) setExplore(false);
  ui.closeAllPanels();
  ui.show('endcard', false);
  spaces.forEach(sp => { sp.stop(); sp.reset(); });
  journey.bagCtl.reset(); guide.clear(); ui.thought(''); ui.subtitle(''); ui.stamina(null);
  cur = 0; updateVisibility(true);
  player.unlock();
  const s = renderer.xr.getSession(); if (s) s.end();
  setMode('title');
  ui.show('title', true);
}

// click back into the scene if pointer lock was lost without pausing
canvas.addEventListener('click', () => { if (mode === 'play' && !player.locked && !renderer.xr.isPresenting) player.lock(); });

if (DEBUG) {
  addEventListener('keydown', e => { if (e.code === 'KeyN') spaces[cur].skip(); });
  window.__tlwh = {
    advance(sec) { for (let i = 0; i < sec / 0.05; i++) step(0.05); },
    get world() { return spaces[cur]; }, setExplore, get exploring() { return exploring; }, get space() { return ORDER[cur]; }, spaces, goTo,
    player, scene, camera, renderer, begin: beginDesktop, sitDown, interactor, ui,
  };
}

// ---------- explore mode (P): fly anywhere, no story, for touring the sets ----------
let exploring = false, saved = null, nightmareLook = false;
const JUMPS = [[-1.5, 3.2, -1.9], [23, 4, -2.0], [41.5, 8.3, -Math.PI / 2], [83, 12.7, -Math.PI / 2]];
function setExplore(on) {
  if (on === exploring) return;
  if (on && (mode !== 'play' || renderer.xr.isPresenting)) return;
  exploring = on;
  document.body.classList.toggle('exploring', on);
  if (on) {
    saved = { pos: player.dolly.position.clone(), yaw: player.yaw, pitch: player.pitch, eye: player.eye, canMove: player.canMove };
    player.noclip = true; player.canMove = true;
    guide.hidden = true;
    spaces.forEach(sp => { sp.root.visible = true; (sp.extraRoots || []).forEach(r => { r.visible = true; }); });
    world.explore(true);
    ui.hint(''); ui.thought('');
  } else {
    player.noclip = false;
    player.dolly.position.copy(saved.pos); player.yaw = saved.yaw; player.pitch = saved.pitch; player.eye = saved.eye; player.canMove = saved.canMove;
    guide.hidden = false;
    world.explore(false);
    if (nightmareLook) { nightmareLook = false; nightmare.preview(false); }
    setTimeout(() => nightmare.endPreview(), 3000);
    updateVisibility();
  }
}
let controlsSeen = false;
function toggleControls(on) {
  const el = document.getElementById('controls');
  const show = on ?? !el.classList.contains('on');
  if (show) controlsSeen = true;
  // the reminder goes away once the list has been opened and then closed
  if (!show && controlsSeen) document.getElementById('fhint').classList.add('gone');
  el.classList.toggle('on', show);
}
addEventListener('keydown', e => {
  if (e.code === 'KeyF' && (mode === 'play' || mode === 'paused')) toggleControls();
  if (e.code === 'KeyP') setExplore(!exploring);
  if (!exploring) return;
  const n = ['Digit1', 'Digit2', 'Digit3', 'Digit4'].indexOf(e.code);
  if (n >= 0) { const [x, z, yaw] = JUMPS[n]; player.dolly.position.y = 0; player.place(x, z, yaw, 1.52); }
  if (e.code === 'KeyM') { nightmareLook = !nightmareLook; nightmare.preview(nightmareLook); }
});
// which space are you standing in? (for light and fog while exploring)
function zoneAt(x) { for (let i = spaces.length - 1; i >= 0; i--) if (x >= spaces[i].zone.minX) return i; return 0; }

// ---------- loop ----------
const clock = new THREE.Clock();
let last = 0, fpsAcc = 0, fpsN = 0, elapsed = 0;
function step(dt) {
  elapsed += dt;
  const playing = mode === 'play';
  spaces.forEach((sp, i) => sp.update(dt, elapsed, playing && !exploring && i === cur));
  if (playing) {
    player.update(dt);
    journey.bagCtl.update(dt, elapsed);
    guide.update(dt, elapsed);
    ui.stamina(cur === 2 ? nightmare.stamina : null);
  }
  updateAtmosphere(dt, mode === 'title' || mode === 'intro');
}
renderer.setAnimationLoop((time) => {
  const xr = renderer.xr.isPresenting;
  if (!xr && settings.fpsCap > 0 && time - last < 1000 / settings.fpsCap - 1.5) return;
  last = time;
  const dt = Math.min(clock.getDelta(), 0.05);
  step(dt);

  capBoard.visible = xr && mode === 'play';
  if (mode === 'play') {
    if (xr) player.updateControllers();
    else ui.crosshair(interactor.updateDesktop());
    interactor.updateHighlights(elapsed);
  }

  if (settings.showFps) {
    fpsAcc += dt; fpsN++;
    if (fpsAcc > 0.5) { ui.fps(Math.round(fpsN / fpsAcc) + ' fps'); fpsAcc = 0; fpsN = 0; }
  }

  if (mode === 'title' || mode === 'intro') {
    world.cine(cineCam, elapsed);
    renderer.render(scene, cineCam);
  } else {
    renderer.render(scene, camera);
  }
});
