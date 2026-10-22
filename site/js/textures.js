// The Long Way Home — created by Sicheng Zheng. © 2026 Sicheng Zheng. All rights reserved.
// Procedural canvas textures — no image files needed yet.
// Replace any of these later with photos/paintings by loading a THREE.TextureLoader texture instead.
import * as THREE from 'three';

function canvas(w, h = w) {
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  return [c, c.getContext('2d')];
}
function tex(c, repeat = [1, 1]) {
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(repeat[0], repeat[1]);
  t.anisotropy = 4;
  return t;
}
function speckle(g, w, h, n, colors, rMax = 2) {
  for (let i = 0; i < n; i++) {
    g.fillStyle = colors[(Math.random() * colors.length) | 0];
    g.globalAlpha = Math.random() * 0.5;
    g.beginPath(); g.arc(Math.random() * w, Math.random() * h, Math.random() * rMax, 0, 7); g.fill();
  }
  g.globalAlpha = 1;
}
function stains(g, w, h, n, color, rMin, rMax) {
  for (let i = 0; i < n; i++) {
    const x = Math.random() * w, y = Math.random() * h, r = rMin + Math.random() * (rMax - rMin);
    const gr = g.createRadialGradient(x, y, 0, x, y, r);
    gr.addColorStop(0, color); gr.addColorStop(1, 'rgba(0,0,0,0)');
    g.fillStyle = gr; g.fillRect(x - r, y - r, r * 2, r * 2);
  }
}

export function concrete(repeat) {
  const [c, g] = canvas(512);
  g.fillStyle = '#5b544b'; g.fillRect(0, 0, 512, 512);
  stains(g, 512, 512, 30, 'rgba(30,24,18,.35)', 30, 120);
  stains(g, 512, 512, 14, 'rgba(140,120,95,.18)', 20, 80);
  speckle(g, 512, 512, 5000, ['#2c2620', '#857a6c', '#423a32'], 1.6);
  g.strokeStyle = 'rgba(20,16,12,.5)'; g.lineWidth = 1;
  for (let i = 0; i < 6; i++) {
    g.beginPath(); let x = Math.random() * 512, y = Math.random() * 512; g.moveTo(x, y);
    for (let k = 0; k < 8; k++) { x += (Math.random() - .5) * 60; y += (Math.random() - .5) * 60; g.lineTo(x, y); }
    g.stroke();
  }
  return tex(c, repeat);
}

// plaster wall: faded turquoise lower band, grimy off-white above, damp stains
export function wall(repeat) {
  const [c, g] = canvas(512);
  g.fillStyle = '#a49a86'; g.fillRect(0, 0, 512, 512);
  g.fillStyle = '#4f7470'; g.fillRect(0, 300, 512, 212);
  g.fillStyle = '#3c5754'; g.fillRect(0, 296, 512, 6);
  stains(g, 512, 512, 22, 'rgba(60,48,34,.35)', 30, 140);
  const gr = g.createLinearGradient(0, 380, 0, 512);
  gr.addColorStop(0, 'rgba(40,30,20,0)'); gr.addColorStop(1, 'rgba(40,30,20,.6)');
  g.fillStyle = gr; g.fillRect(0, 380, 512, 132);
  // peeling patches
  for (let i = 0; i < 9; i++) {
    g.fillStyle = Math.random() < .5 ? 'rgba(124,116,102,.6)' : 'rgba(141,130,111,.6)';
    const x = Math.random() * 512, y = Math.random() * 512, r = 10 + Math.random() * 22;
    g.beginPath();
    for (let k = 0; k <= 14; k++) { const a = k / 14 * Math.PI * 2, rr = r * (0.7 + Math.random() * 0.5); g.lineTo(x + Math.cos(a) * rr * 1.4, y + Math.sin(a) * rr); }
    g.fill();
  }
  // drip streaks
  g.globalAlpha = .25;
  for (let i = 0; i < 18; i++) { g.fillStyle = '#3a3026'; g.fillRect(Math.random() * 512, Math.random() * 200, 2 + Math.random() * 3, 80 + Math.random() * 200); }
  g.globalAlpha = 1;
  speckle(g, 512, 512, 3000, ['#2c2620', '#c8bea9'], 1.2);
  return tex(c, repeat);
}

export function ceiling(repeat) {
  const [c, g] = canvas(256);
  for (let x = 0; x < 256; x += 16) {
    const gr = g.createLinearGradient(x, 0, x + 16, 0);
    gr.addColorStop(0, '#2a2620'); gr.addColorStop(.5, '#4a4237'); gr.addColorStop(1, '#2a2620');
    g.fillStyle = gr; g.fillRect(x, 0, 16, 256);
  }
  stains(g, 256, 256, 14, 'rgba(90,50,20,.4)', 10, 50); // rust
  return tex(c, repeat);
}

export function wood(repeat, base = '#6b4a2f') {
  const [c, g] = canvas(256);
  g.fillStyle = base; g.fillRect(0, 0, 256, 256);
  for (let y = 0; y < 256; y += 2) {
    g.fillStyle = `rgba(${Math.random() < .5 ? '30,18,8' : '150,110,70'},${Math.random() * .18})`;
    g.fillRect(0, y, 256, 1 + Math.random() * 2);
  }
  stains(g, 256, 256, 8, 'rgba(20,12,6,.35)', 10, 40);
  return tex(c, repeat);
}

export function metal(repeat, base = '#3d5566') {
  const [c, g] = canvas(256);
  g.fillStyle = base; g.fillRect(0, 0, 256, 256);
  stains(g, 256, 256, 20, 'rgba(120,60,25,.45)', 8, 46);
  speckle(g, 256, 256, 1500, ['#1d2a33', '#8a6040'], 1.5);
  return tex(c, repeat);
}

// block-printed cotton: base colour with a repeating motif
export function fabric(base, ink, motif = 0) {
  const [c, g] = canvas(256);
  g.fillStyle = base; g.fillRect(0, 0, 256, 256);
  g.fillStyle = ink; g.strokeStyle = ink; g.lineWidth = 2;
  for (let y = 16; y < 256; y += 32) for (let x = (y / 32 % 2) * 16 + 16; x < 256; x += 32) {
    g.beginPath();
    if (motif === 0) { g.arc(x, y, 5, 0, 7); g.fill(); }
    else if (motif === 1) { for (let k = 0; k < 6; k++) { const a = k * Math.PI / 3; g.moveTo(x, y); g.lineTo(x + Math.cos(a) * 9, y + Math.sin(a) * 9); } g.stroke(); }
    else { g.moveTo(x, y - 8); g.quadraticCurveTo(x + 9, y, x, y + 8); g.quadraticCurveTo(x - 4, y, x, y - 8); g.fill(); }
  }
  g.fillStyle = 'rgba(0,0,0,.08)';
  for (let i = 0; i < 256; i += 3) g.fillRect(i, 0, 1, 256);
  return tex(c);
}

// view through the barred window: bright schoolyard
export function schoolyard() {
  const [c, g] = canvas(1024, 768);
  const sky = g.createLinearGradient(0, 0, 0, 500);
  sky.addColorStop(0, '#9fc6e6'); sky.addColorStop(1, '#f4e4c2');
  g.fillStyle = sky; g.fillRect(0, 0, 1024, 768);
  g.fillStyle = 'rgba(255,248,225,.9)'; g.beginPath(); g.arc(820, 120, 60, 0, 7); g.fill();
  // school building
  g.fillStyle = '#e8c46a'; g.fillRect(140, 240, 620, 270);
  g.fillStyle = '#c94f3a'; g.fillRect(120, 220, 660, 26);
  g.fillStyle = '#b8892f'; g.fillRect(140, 470, 620, 40);
  for (let i = 0; i < 6; i++) {
    g.fillStyle = '#5a7f8f'; g.fillRect(170 + i * 98, 280, 54, 70);
    g.fillStyle = '#fff6d8'; g.fillRect(196 + i * 98, 280, 3, 70);
  }
  g.fillStyle = '#7a4b2a'; g.fillRect(420, 390, 70, 120);
  g.fillStyle = '#2a2a2a'; g.font = 'bold 30px Georgia, serif'; g.textAlign = 'center';
  g.fillText('GOVT. PRIMARY SCHOOL', 450, 236);
  // tree
  g.fillStyle = '#5b3d22'; g.fillRect(850, 330, 26, 200);
  g.fillStyle = '#4f7d3a'; [[860, 300, 90], [810, 340, 60], [910, 350, 60]].forEach(([x, y, r]) => { g.beginPath(); g.arc(x, y, r, 0, 7); g.fill(); });
  // ground
  g.fillStyle = '#d9b07a'; g.fillRect(0, 510, 1024, 258);
  speckle(g, 1024, 258, 1200, ['#b88c58', '#efcf9c'], 2);
  return tex(c);
}

// a small uniformed child silhouette for the schoolyard
export function schoolchild(shirt = '#f2f2f2', shorts = '#2f4f8f') {
  const [c, g] = canvas(64, 128);
  g.fillStyle = '#5a3a22'; g.beginPath(); g.arc(32, 22, 13, 0, 7); g.fill();
  g.fillStyle = '#1d1712'; g.beginPath(); g.arc(32, 17, 13, Math.PI, 0); g.fill();
  g.fillStyle = shirt; g.fillRect(18, 36, 28, 38);
  g.fillStyle = shorts; g.fillRect(19, 72, 26, 20);
  g.fillStyle = '#5a3a22'; g.fillRect(21, 92, 8, 28); g.fillRect(35, 92, 8, 28);
  g.fillStyle = '#7a3a2a'; g.fillRect(12, 40, 8, 22); // satchel
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}

export function chalkboard() {
  const [c, g] = canvas(512, 320);
  g.fillStyle = '#24372c'; g.fillRect(0, 0, 512, 320);
  stains(g, 512, 320, 10, 'rgba(255,255,255,.06)', 30, 90);
  g.fillStyle = 'rgba(240,240,230,.9)'; g.font = '46px "Comic Sans MS", "Segoe Print", cursive';
  g.fillText('A  B  C  D', 40, 80);
  g.font = '38px "Comic Sans MS", "Segoe Print", cursive';
  g.fillText('1 + 2 = 3', 40, 150);
  g.fillText('My dream is...', 40, 220);
  g.strokeStyle = 'rgba(240,220,120,.9)'; g.lineWidth = 4;
  g.beginPath(); g.arc(420, 90, 34, 0, 7); g.stroke();
  for (let k = 0; k < 8; k++) { const a = k * Math.PI / 4; g.beginPath(); g.moveTo(420 + Math.cos(a) * 44, 90 + Math.sin(a) * 44); g.lineTo(420 + Math.cos(a) * 60, 90 + Math.sin(a) * 60); g.stroke(); }
  g.strokeStyle = '#6b4a2f'; g.lineWidth = 14; g.strokeRect(0, 0, 512, 320);
  return tex(c);
}

// torn notebook page kept in the bag
export function notebookPage() {
  const [c, g] = canvas(256, 320);
  g.fillStyle = '#efe7d2'; g.beginPath(); g.moveTo(0, 0); g.lineTo(256, 0); g.lineTo(256, 300);
  for (let x = 256; x >= 0; x -= 16) g.lineTo(x, 296 + Math.random() * 22);
  g.closePath(); g.fill();
  g.strokeStyle = 'rgba(80,110,170,.45)'; g.lineWidth = 1;
  for (let y = 46; y < 290; y += 22) { g.beginPath(); g.moveTo(0, y); g.lineTo(256, y); g.stroke(); }
  g.strokeStyle = 'rgba(190,60,60,.5)'; g.beginPath(); g.moveTo(34, 0); g.lineTo(34, 300); g.stroke();
  g.fillStyle = 'rgba(60,60,70,.85)'; g.font = '19px "Segoe Print", "Comic Sans MS", cursive';
  ['When I grow up', 'I will be a', 'teacher.', '', 'a b c d e f g'].forEach((l, i) => g.fillText(l, 42, 62 + i * 22));
  stains(g, 256, 320, 4, 'rgba(120,90,50,.25)', 10, 40);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}

export function quotaBoard() {
  const [c, g] = canvas(512, 256);
  g.fillStyle = '#1f2a24'; g.fillRect(0, 0, 512, 256);
  g.fillStyle = 'rgba(235,235,225,.85)'; g.font = 'bold 34px Georgia, serif';
  g.fillText("TODAY'S TARGET", 30, 60);
  g.font = '28px "Courier New", monospace';
  g.fillText('LINE 1 ....... 400 PCS', 30, 120);
  g.fillText('LINE 2 ....... 400 PCS', 30, 165);
  g.fillText('LINE 3 ....... 400 PCS', 30, 210);
  g.strokeStyle = '#6b4a2f'; g.lineWidth = 12; g.strokeRect(0, 0, 512, 256);
  return tex(c);
}

export function clockFace() {
  const [c, g] = canvas(256);
  g.fillStyle = '#efe6cf'; g.beginPath(); g.arc(128, 128, 120, 0, 7); g.fill();
  g.strokeStyle = '#2a2420'; g.lineWidth = 8; g.stroke();
  g.fillStyle = '#2a2420';
  for (let k = 0; k < 12; k++) { const a = k * Math.PI / 6; g.fillRect(128 + Math.cos(a) * 96 - 3, 128 + Math.sin(a) * 96 - 3, 6, 6); }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}

// soft vertical gradient for fake light shafts
export function shaftGradient() {
  const [c, g] = canvas(64, 256);
  const gr = g.createLinearGradient(0, 0, 0, 256);
  gr.addColorStop(0, 'rgba(255,240,210,.55)'); gr.addColorStop(1, 'rgba(255,240,210,0)');
  g.fillStyle = gr; g.fillRect(0, 0, 64, 256);
  const side = g.createLinearGradient(0, 0, 64, 0);
  side.addColorStop(0, 'rgba(0,0,0,1)'); side.addColorStop(.25, 'rgba(0,0,0,0)'); side.addColorStop(.75, 'rgba(0,0,0,0)'); side.addColorStop(1, 'rgba(0,0,0,1)');
  g.globalCompositeOperation = 'destination-out'; g.fillStyle = side; g.fillRect(0, 0, 64, 256);
  const t = new THREE.CanvasTexture(c); return t;
}

export function dot() {
  const [c, g] = canvas(32);
  const gr = g.createRadialGradient(16, 16, 0, 16, 16, 16);
  gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = gr; g.fillRect(0, 0, 32, 32);
  return new THREE.CanvasTexture(c);
}

// ---------- v0.2: poorer materials from the sketches ----------

function bricks(g, w, h, bw = 64, bh = 22) {
  g.fillStyle = '#5a4a3c'; g.fillRect(0, 0, w, h); // mortar
  for (let r = 0; r * bh < h; r++) {
    const off = (r % 2) * bw / 2;
    for (let x = -off; x < w; x += bw) {
      const v = Math.random();
      const base = v < .2 ? [92, 50, 36] : v < .5 ? [108, 60, 42] : v < .8 ? [98, 56, 40] : [76, 44, 32];
      const d = (Math.random() - .5) * 26;
      g.fillStyle = `rgb(${base[0] + d},${base[1] + d * .6},${base[2] + d * .5})`;
      g.fillRect(x + 2, r * bh + 2, bw - 4, bh - 4);
      if (Math.random() < .15) { g.fillStyle = 'rgba(30,20,14,.35)'; g.fillRect(x + 2, r * bh + 2, bw - 4, bh - 4); }
    }
  }
  speckle(g, w, h, 4000, ['#2a1c14', '#b48a6a'], 1.4);
}

// exposed brick with patches of old plaster still clinging on, damp at the bottom
export function brickWall(repeat) {
  const [c, g] = canvas(512);
  bricks(g, 512, 512);
  for (let i = 0; i < 6; i++) {
    const x = Math.random() * 512, y = Math.random() * 380, r = 50 + Math.random() * 110;
    g.fillStyle = Math.random() < .5 ? '#6f6b5c' : '#5c6658';
    g.beginPath();
    for (let k = 0; k <= 22; k++) { const a = k / 22 * Math.PI * 2, rr = r * (0.55 + Math.random() * 0.5); g.lineTo(x + Math.cos(a) * rr * 1.3, y + Math.sin(a) * rr); }
    g.fill();
    stains(g, 512, 512, 2, 'rgba(60,48,34,.25)', 20, 60);
  }
  const gr = g.createLinearGradient(0, 330, 0, 512);
  gr.addColorStop(0, 'rgba(25,18,12,0)'); gr.addColorStop(1, 'rgba(25,18,12,.7)');
  g.fillStyle = gr; g.fillRect(0, 330, 512, 182);
  stains(g, 512, 512, 18, 'rgba(25,18,12,.35)', 20, 90);
  g.globalAlpha = .3;
  for (let i = 0; i < 14; i++) { g.fillStyle = '#20160f'; g.fillRect(Math.random() * 512, Math.random() * 200, 2 + Math.random() * 3, 60 + Math.random() * 220); }
  g.globalAlpha = 1;
  return tex(c, repeat);
}

export function plywood(repeat = [1, 1]) {
  const [c, g] = canvas(256);
  g.fillStyle = '#5e4a32'; g.fillRect(0, 0, 256, 256);
  for (let y = 0; y < 256; y += 3) { g.fillStyle = `rgba(${Math.random() < .5 ? '60,40,20' : '170,140,100'},${Math.random() * .25})`; g.fillRect(0, y + Math.sin(y * .1) * 3, 256, 2); }
  stains(g, 256, 256, 10, 'rgba(30,20,10,.4)', 10, 50);
  return tex(c, repeat);
}

export function tin(repeat = [1, 1]) {
  const [c, g] = canvas(256);
  for (let x = 0; x < 256; x += 20) {
    const gr = g.createLinearGradient(x, 0, x + 20, 0);
    gr.addColorStop(0, '#4a4c4a'); gr.addColorStop(.5, '#8a8c84'); gr.addColorStop(1, '#4a4c4a');
    g.fillStyle = gr; g.fillRect(x, 0, 20, 256);
  }
  stains(g, 256, 256, 26, 'rgba(120,58,22,.55)', 8, 50);
  return tex(c, repeat);
}

export function slab(repeat = [1, 1]) {
  const [c, g] = canvas(256);
  g.fillStyle = '#3a3630'; g.fillRect(0, 0, 256, 256);
  stains(g, 256, 256, 20, 'rgba(15,12,10,.5)', 15, 70);
  stains(g, 256, 256, 6, 'rgba(110,70,30,.3)', 10, 40);
  speckle(g, 256, 256, 1500, ['#1a1612', '#6a6258'], 1.4);
  return tex(c, repeat);
}

export function dirtFloor(repeat = [1, 1]) {
  const [c, g] = canvas(512);
  g.fillStyle = '#4e463c'; g.fillRect(0, 0, 512, 512);
  stains(g, 512, 512, 40, 'rgba(25,20,15,.4)', 30, 120);
  stains(g, 512, 512, 12, 'rgba(120,100,70,.25)', 20, 70);
  speckle(g, 512, 512, 7000, ['#2a241c', '#7a6e5c', '#3a3228'], 1.8);
  // stray threads
  for (let i = 0; i < 30; i++) {
    g.strokeStyle = ['#b8402e', '#d9a21b', '#2f4a8a', '#e8e0d0'][i % 4]; g.globalAlpha = .7; g.lineWidth = 1.2;
    g.beginPath(); let x = Math.random() * 512, y = Math.random() * 512; g.moveTo(x, y);
    for (let k = 0; k < 4; k++) { x += (Math.random() - .5) * 30; y += (Math.random() - .5) * 30; g.lineTo(x, y); } g.stroke();
  }
  g.globalAlpha = 1;
  return tex(c, repeat);
}

export function cardboard(repeat = [1, 1]) {
  const [c, g] = canvas(128);
  g.fillStyle = '#8f7350'; g.fillRect(0, 0, 128, 128);
  g.fillStyle = 'rgba(60,40,20,.5)'; g.fillRect(0, 60, 128, 6);
  stains(g, 128, 128, 6, 'rgba(40,25,10,.35)', 6, 30);
  return tex(c, repeat);
}

// alley facade: faded colour-washed plaster, grime, exposed brick where it fell off
export function facade(color, repeat = [1, 1]) {
  const [c, g] = canvas(512);
  bricks(g, 512, 512, 48, 18);
  g.fillStyle = color; g.fillRect(0, 0, 512, 512);
  // holes in the plaster show the bricks underneath
  g.globalCompositeOperation = 'destination-out';
  for (let i = 0; i < 5; i++) {
    const x = Math.random() * 512, y = Math.random() * 512, r = 20 + Math.random() * 60;
    g.beginPath(); for (let k = 0; k <= 16; k++) { const a = k / 16 * Math.PI * 2, rr = r * (0.5 + Math.random() * 0.6); g.lineTo(x + Math.cos(a) * rr * 1.4, y + Math.sin(a) * rr); } g.fill();
  }
  g.globalCompositeOperation = 'destination-over';
  bricks(g, 512, 512, 48, 18);
  g.globalCompositeOperation = 'source-over';
  stains(g, 512, 512, 24, 'rgba(30,22,15,.35)', 30, 130);
  g.globalAlpha = .35;
  for (let i = 0; i < 20; i++) { g.fillStyle = '#1e160f'; g.fillRect(Math.random() * 512, Math.random() * 300, 2 + Math.random() * 4, 80 + Math.random() * 260); }
  g.globalAlpha = 1;
  const gr = g.createLinearGradient(0, 380, 0, 512); gr.addColorStop(0, 'rgba(20,15,10,0)'); gr.addColorStop(1, 'rgba(20,15,10,.65)');
  g.fillStyle = gr; g.fillRect(0, 380, 512, 132);
  speckle(g, 512, 512, 2500, ['#20160f', '#d8cbb0'], 1.3);
  return tex(c, repeat);
}

export function duskSky() {
  const [c, g] = canvas(64, 256);
  const gr = g.createLinearGradient(0, 0, 0, 256);
  gr.addColorStop(0, '#4a5a78'); gr.addColorStop(.55, '#c98a5a'); gr.addColorStop(1, '#f2c48a');
  g.fillStyle = gr; g.fillRect(0, 0, 64, 256);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}

export function signboard(text, bg, fg) {
  const [c, g] = canvas(512, 128);
  g.fillStyle = bg; g.fillRect(0, 0, 512, 128);
  stains(g, 512, 128, 8, 'rgba(0,0,0,.25)', 10, 50);
  g.fillStyle = fg; g.font = 'bold 54px Georgia, serif'; g.textAlign = 'center'; g.fillText(text, 256, 84);
  return tex(c);
}

// facade with painted windows (cheap: no extra meshes) — one tile = 4 m × 4 m
export function facadeWin(color, repeat = [1, 1], night = false) {
  const t = facade(color, [1, 1]);
  const c = t.image, g = c.getContext('2d');
  const shutters = ['#3a6a7a', '#7a3a2a', '#4a6a3a', '#6a5a3a'];
  for (const y of [70, 320]) for (const x of [60, 310]) {
    const lit = night ? Math.random() < 0.35 : Math.random() < 0.15;
    g.fillStyle = lit ? (night ? '#e8a050' : '#c8a070') : '#120e0b'; g.fillRect(x, y, 120, 140);
    g.fillStyle = 'rgba(0,0,0,.35)'; g.fillRect(x, y + 128, 120, 12);
    g.strokeStyle = '#1a1612'; g.lineWidth = 4;
    for (let k = 1; k < 5; k++) { g.beginPath(); g.moveTo(x + k * 24, y); g.lineTo(x + k * 24, y + 140); g.stroke(); }
    if (Math.random() < 0.4) { g.fillStyle = shutters[(Math.random() * 4) | 0]; g.fillRect(x - 26, y, 24, 140); g.fillRect(x + 122, y, 24, 140); }
    g.fillStyle = 'rgba(200,190,170,.5)'; g.fillRect(x - 8, y + 140, 136, 8); // sill
  }
  t.needsUpdate = true; t.repeat.set(repeat[0], repeat[1]);
  return t;
}

export function priceBoard() {
  const [c, g] = canvas(512, 256);
  g.fillStyle = '#e8d8a8'; g.fillRect(0, 0, 512, 256);
  stains(g, 512, 256, 8, 'rgba(90,60,20,.25)', 20, 80);
  g.fillStyle = '#8a1a14'; g.font = 'bold 64px Georgia, serif'; g.textAlign = 'center';
  g.fillText('ROTI · SABZI', 256, 90);
  g.fillStyle = '#1a1612'; g.font = 'bold 90px Georgia, serif';
  g.fillText('Rs 10', 256, 200);
  g.strokeStyle = '#5a3a1a'; g.lineWidth = 10; g.strokeRect(5, 5, 502, 246);
  return tex(c);
}

export function stripes(a, b, n = 8) {
  const [c, g] = canvas(256);
  for (let i = 0; i < n; i++) { g.fillStyle = i % 2 ? a : b; g.fillRect(i * 256 / n, 0, 256 / n, 256); }
  stains(g, 256, 256, 10, 'rgba(0,0,0,.2)', 10, 50);
  return tex(c);
}
