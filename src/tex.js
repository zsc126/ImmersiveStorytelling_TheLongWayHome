// Procedural PBR textures: every surface gets a colour map, a normal map (derived from a
// painted height map) and a roughness map, all generated at load time — no image files.
import * as THREE from 'three';

// ---------- noise ----------
function hash(x, y, s) { let h = (x * 374761393 + y * 668265263 + s * 982451653) | 0; h = (h ^ (h >>> 13)) * 1274126177; return ((h ^ (h >>> 16)) >>> 0) / 4294967296; }
function vnoise(x, y, s, period) {
  const xi = Math.floor(x), yi = Math.floor(y), xf = x - xi, yf = y - yi;
  const P = period || 1e9, w = (a) => ((a % P) + P) % P;
  const a = hash(w(xi), w(yi), s), b = hash(w(xi + 1), w(yi), s), c = hash(w(xi), w(yi + 1), s), d = hash(w(xi + 1), w(yi + 1), s);
  const u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf);
  return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
}
// tileable fbm: x,y in [0,1)
export function fbm(x, y, { scale = 4, oct = 5, seed = 1, gain = 0.5 } = {}) {
  let f = scale, amp = 0.5, sum = 0, norm = 0;
  for (let o = 0; o < oct; o++) { sum += amp * vnoise(x * f, y * f, seed + o * 17, f); norm += amp; f *= 2; amp *= gain; }
  return sum / norm;
}
const clamp = (v, a = 0, b = 1) => Math.max(a, Math.min(b, v));
const smooth = (e0, e1, x) => { const t = clamp((x - e0) / (e1 - e0)); return t * t * (3 - 2 * t); };
const mix = (a, b, t) => a + (b - a) * t;
let seedN = 1; const rnd = () => { seedN = (seedN * 16807) % 2147483647; return (seedN - 1) / 2147483646; };

// ---------- canvas helpers ----------
function canvas(w, h) { const c = document.createElement('canvas'); c.width = w; c.height = h; return c; }
function toTex(c, { srgb = true, repeat = [1, 1], aniso = 8 } = {}) {
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(repeat[0], repeat[1]);
  t.anisotropy = aniso; if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  t.generateMipmaps = true; t.minFilter = THREE.LinearMipmapLinearFilter;
  return t;
}
// Pixel-function texture builder. fn(u,v,out) fills out = {r,g,b,h,ro} (0..1 each).
function pixelTex(W, H, fn, { normalStrength = 2.5 } = {}) {
  const col = canvas(W, H), rgh = canvas(W, H), nrm = canvas(W, H);
  const cd = col.getContext('2d').createImageData(W, H), rd = rgh.getContext('2d').createImageData(W, H), nd = nrm.getContext('2d').createImageData(W, H);
  const height = new Float32Array(W * H), o = { r: 0, g: 0, b: 0, h: 0, ro: 0.8 };
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
    o.h = 0.5; o.ro = 0.85; fn(x / W, y / H, o, x, y);
    const i = (y * W + x), j = i * 4;
    cd.data[j] = clamp(o.r) * 255; cd.data[j + 1] = clamp(o.g) * 255; cd.data[j + 2] = clamp(o.b) * 255; cd.data[j + 3] = 255;
    const r = clamp(o.ro) * 255; rd.data[j] = rd.data[j + 1] = rd.data[j + 2] = r; rd.data[j + 3] = 255;
    height[i] = o.h;
  }
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
    const hl = height[y * W + ((x - 1 + W) % W)], hr = height[y * W + ((x + 1) % W)];
    const hu = height[((y - 1 + H) % H) * W + x], hd = height[((y + 1) % H) * W + x];
    let nx = (hl - hr) * normalStrength, ny = (hd - hu) * normalStrength, nz = 1;
    const l = Math.hypot(nx, ny, nz); nx /= l; ny /= l; nz /= l;
    const j = (y * W + x) * 4;
    nd.data[j] = (nx * 0.5 + 0.5) * 255; nd.data[j + 1] = (ny * 0.5 + 0.5) * 255; nd.data[j + 2] = (nz * 0.5 + 0.5) * 255; nd.data[j + 3] = 255;
  }
  col.getContext('2d').putImageData(cd, 0, 0); rgh.getContext('2d').putImageData(rd, 0, 0); nrm.getContext('2d').putImageData(nd, 0, 0);
  return { col, rgh, nrm };
}
function pbr(set, repeat = [1, 1], opts = {}) {
  return {
    map: toTex(set.col, { repeat }), roughnessMap: toTex(set.rgh, { srgb: false, repeat }),
    normalMap: toTex(set.nrm, { srgb: false, repeat }), ...opts,
  };
}
// clone a texture set with a new repeat (shares the image)
export function withRepeat(set, rx, ry, ox = 0, oy = 0) {
  const out = {};
  for (const k of ['map', 'roughnessMap', 'normalMap']) if (set[k]) { const t = set[k].clone(); t.repeat.set(rx, ry); t.offset.set(ox, oy); t.needsUpdate = true; out[k] = t; }
  return out;
}

// ---------- WALL: brick under peeling whitewash, faded green dado band ----------
// one tile = 4 m wide x 4 m tall (bottom of texture = floor)
export function wall() {
  const W = 768, H = 768, rows = 34, cols = 11;
  return pbr(pixelTex(W, H, (u, v, o) => {
    const yM = (1 - v) * 4;                 // metres above floor
    // bricks
    const ry = v * rows, row = Math.floor(ry), off = (row % 2) * 0.5;
    const rx = u * cols + off, col = Math.floor(rx);
    const fx = rx - col, fy = ry - row;
    const mortar = Math.min(fx, 1 - fx) * 3.6 < 0.09 || Math.min(fy, 1 - fy) < 0.09;
    const bh = hash(col % cols, row, 7), n = fbm(u, v, { scale: 32, oct: 3, seed: 3 });
    let br = mix(0.30, 0.46, bh) + (n - 0.5) * 0.14, bg = br * mix(0.5, 0.62, hash(col, row, 9)), bb = br * 0.45;
    let r = br, g = bg, b = bb, h = 0.55 + (n - 0.5) * 0.1, ro = 0.9;
    if (mortar) { r = 0.34; g = 0.31; b = 0.27; h = 0.38; }
    // plaster coverage: big noisy patches peel away, more near the floor and corners
    const peel = fbm(u, v, { scale: 3, oct: 6, seed: 11 }) + smooth(1.6, 0.0, yM) * 0.12 - smooth(3.0, 4.0, yM) * 0.06;
    const plaster = peel < 0.6;
    if (plaster) {
      const edge = smooth(0.6, 0.54, peel);
      const grime = fbm(u, v, { scale: 6, oct: 5, seed: 21 });
      // vertical drip stains from the ceiling
      const drip = smooth(0.62, 0.9, fbm(u * 1.0, v * 0.12, { scale: 9, oct: 3, seed: 31 })) * smooth(1.5, 3.8, yM);
      let pr = 0.62, pg = 0.58, pb = 0.49;
      if (yM < 1.32) { pr = 0.33; pg = 0.52; pb = 0.47; if (yM > 1.27) { pr = 0.20; pg = 0.32; pb = 0.30; } } // dado + band line
      const dirt = (grime - 0.5) * 0.22 + smooth(0.5, 0.0, yM) * 0.22 + smooth(0.62, 0.85, fbm(u, v, { scale: 14, oct: 3, seed: 23 })) * 0.08;
      pr = pr * (1 - dirt) - drip * 0.09; pg = pg * (1 - dirt) - drip * 0.08; pb = pb * (1 - dirt * 1.1) - drip * 0.06;
      r = mix(r, pr, edge); g = mix(g, pg, edge); b = mix(b, pb, edge);
      h = mix(h, 0.72 + (grime - 0.5) * 0.06, edge);
      ro = yM < 1.32 ? 0.62 : 0.88;
      if (edge < 0.9) { r *= 0.85; g *= 0.85; b *= 0.85; } // shadowed lip of the peel
    }
    o.r = r; o.g = g; o.b = b; o.h = h; o.ro = ro;
  }, { normalStrength: 6 }));
}

// ---------- FLOOR: worn concrete with stains, cracks, oil ----------
export function floor() {
  return pbr(pixelTex(768, 768, (u, v, o) => {
    const n = fbm(u, v, { scale: 4, oct: 5, seed: 41 }), m = fbm(u, v, { scale: 24, oct: 3, seed: 43 });
    const stain = smooth(0.58, 0.72, fbm(u, v, { scale: 3, oct: 4, seed: 47 }));
    const crack = Math.abs(fbm(u, v, { scale: 5, oct: 4, seed: 51 }) - 0.5) < 0.006 ? 1 : 0;
    const crack2 = Math.abs(fbm(u, v, { scale: 9, oct: 3, seed: 53 }) - 0.5) < 0.004 ? 1 : 0;
    let c = 0.36 + (n - 0.5) * 0.22 + (m - 0.5) * 0.06;
    c *= 1 - stain * 0.22;
    const k = Math.max(crack, crack2 * 0.7);
    o.r = c * 1.04 - k * 0.08; o.g = c * 0.98 - k * 0.08; o.b = c * 0.88 - k * 0.07;
    o.h = 0.5 + (m - 0.5) * 0.15 - k * 0.4;
    o.ro = 0.92 - stain * 0.45;
  }, { normalStrength: 3 }));
}

// ---------- CEILING: stained slab ----------
export function ceiling() {
  return pbr(pixelTex(512, 512, (u, v, o) => {
    const n = fbm(u, v, { scale: 4, oct: 6, seed: 61 }), st = smooth(0.55, 0.75, fbm(u, v, { scale: 2, oct: 5, seed: 63 }));
    const c = 0.55 + (n - 0.5) * 0.2 - st * 0.25;
    o.r = c; o.g = c * 0.95; o.b = c * 0.85; o.h = 0.5 + (n - 0.5) * 0.2; o.ro = 0.95;
  }, { normalStrength: 2 }));
}

// ---------- WOOD: old table planks ----------
export function wood(tint = [0.42, 0.28, 0.17], seed = 71) {
  return pbr(pixelTex(512, 512, (u, v, o) => {
    const plank = Math.floor(v * 4), pv = v * 4 - plank;
    const ph = hash(plank, 0, seed);
    const grain = Math.sin((u * 6 + fbm(u, v * 0.25, { scale: 4, oct: 4, seed: seed + plank }) * 3) * 18 + ph * 10) * 0.5 + 0.5;
    const knot = fbm(u, v, { scale: 8, oct: 3, seed: seed + 5 });
    const wear = fbm(u, v, { scale: 6, oct: 5, seed: seed + 9 });
    const gap = pv < 0.025 || pv > 0.975;
    let k = 0.75 + grain * 0.2 + (ph - 0.5) * 0.25 - smooth(0.7, 0.85, knot) * 0.3 + (wear - 0.5) * 0.2;
    if (gap) k *= 0.35;
    o.r = tint[0] * k; o.g = tint[1] * k; o.b = tint[2] * k;
    o.h = gap ? 0.2 : 0.5 + grain * 0.06; o.ro = 0.7 + (1 - wear) * 0.2;
  }, { normalStrength: 2.5 }));
}

// ---------- rusty corrugated metal ----------
export function rust(seed = 81) {
  return pbr(pixelTex(512, 512, (u, v, o) => {
    const n = fbm(u, v, { scale: 5, oct: 6, seed }), r = smooth(0.45, 0.7, fbm(u, v, { scale: 3, oct: 6, seed: seed + 2 }));
    const ridge = Math.sin(u * Math.PI * 2 * 14) * 0.5 + 0.5;
    const pr = 0.30, pg = 0.40, pb = 0.42; // old blue-grey paint
    o.r = mix(pr, 0.45, r) * (0.8 + n * 0.3); o.g = mix(pg, 0.24, r) * (0.8 + n * 0.3); o.b = mix(pb, 0.12, r) * (0.8 + n * 0.3);
    o.h = ridge * 0.6 + n * 0.1; o.ro = mix(0.55, 0.95, r);
  }, { normalStrength: 4 }));
}

// ---------- fabrics: block prints & weaves (colour map only, small) ----------
const PALETTES = [
  ['#1f3a68', '#e8dcc0', '#b5442e'],  // indigo
  ['#a8322a', '#f0d9a8', '#2a2018'],  // madder red
  ['#d9a22a', '#7a2a1e', '#f4ead0'],  // turmeric
  ['#2f6b4f', '#f1e4c4', '#c4572e'],  // green
  ['#c45a7a', '#f6e6d2', '#3a4a7a'],  // pink
  ['#e9e1cf', '#6a7d9a', '#b08a4a'],  // undyed cotton
];
export function fabric(kind, pal = 0, size = 256) {
  const [a, b, c] = PALETTES[pal % PALETTES.length];
  const cv = canvas(size, size), g = cv.getContext('2d');
  g.fillStyle = a; g.fillRect(0, 0, size, size);
  const s = size;
  if (kind === 'buti') {
    g.fillStyle = b;
    for (let y = 0; y < 8; y++) for (let x = 0; x < 8; x++) {
      const px = (x + (y % 2) * 0.5) * s / 8, py = y * s / 8 + s / 16;
      g.beginPath(); g.ellipse(px, py, s / 60, s / 34, 0.6, 0, 7); g.fill();
      g.fillStyle = c; g.beginPath(); g.arc(px + s / 70, py - s / 50, s / 110, 0, 7); g.fill(); g.fillStyle = b;
    }
  } else if (kind === 'stripe') {
    for (let x = 0; x < 16; x++) { g.fillStyle = x % 4 === 0 ? c : b; if (x % 2 === 0) g.fillRect(x * s / 16, 0, s / 40, s); }
  } else if (kind === 'check') {
    g.globalAlpha = 0.55; g.fillStyle = b;
    for (let i = 0; i < 8; i++) { g.fillRect(i * s / 8, 0, s / 20, s); g.fillRect(0, i * s / 8, s, s / 20); }
    g.globalAlpha = 0.7; g.fillStyle = c; for (let i = 0; i < 4; i++) { g.fillRect(i * s / 4 + s / 40, 0, s / 120, s); g.fillRect(0, i * s / 4 + s / 40, s, s / 120); }
    g.globalAlpha = 1;
  } else if (kind === 'paisley') {
    for (let y = 0; y < 4; y++) for (let x = 0; x < 4; x++) {
      const px = (x + (y % 2) * 0.5) * s / 4 + s / 8, py = y * s / 4 + s / 8;
      g.save(); g.translate(px, py); g.rotate(0.7);
      g.fillStyle = b; g.beginPath(); g.moveTo(0, -s / 12); g.bezierCurveTo(s / 14, -s / 14, s / 14, s / 20, 0, s / 14); g.bezierCurveTo(-s / 16, s / 18, -s / 22, -s / 30, 0, -s / 12); g.fill();
      g.fillStyle = c; g.beginPath(); g.arc(0, s / 40, s / 40, 0, 7); g.fill();
      g.restore();
    }
  } else if (kind === 'border') {
    g.fillStyle = b; g.fillRect(0, s * 0.78, s, s * 0.14);
    g.fillStyle = c; for (let x = 0; x < 16; x++) { g.beginPath(); g.moveTo(x * s / 16, s * 0.78); g.lineTo(x * s / 16 + s / 32, s * 0.72); g.lineTo(x * s / 16 + s / 16, s * 0.78); g.fill(); }
  }
  // weave texture + fade
  const id = g.getImageData(0, 0, s, s);
  for (let y = 0; y < s; y++) for (let x = 0; x < s; x++) {
    const j = (y * s + x) * 4, w = ((x + y) % 2 ? 0.94 : 1.04) * (0.92 + 0.16 * fbm(x / s, y / s, { scale: 8, oct: 3, seed: pal + 90 }));
    id.data[j] *= w; id.data[j + 1] *= w; id.data[j + 2] *= w;
  }
  g.putImageData(id, 0, 0);
  return toTex(cv);
}

// The child's bag: faded, patched cotton with visible stitches
export function bagCloth() {
  const s = 512, cv = canvas(s, s), g = cv.getContext('2d');
  g.fillStyle = '#8a7a5e'; g.fillRect(0, 0, s, s);
  const patches = [[40, 60, 180, 150, '#5a6a7e'], [270, 240, 170, 190, '#8a4a3a'], [90, 330, 140, 120, '#a08a4a']];
  patches.forEach(([x, y, w, h, c]) => {
    g.fillStyle = c; g.save(); g.translate(x + w / 2, y + h / 2); g.rotate((rnd() - 0.5) * 0.15); g.fillRect(-w / 2, -h / 2, w, h);
    g.strokeStyle = '#e8dcc0'; g.lineWidth = 2; g.setLineDash([7, 6]); g.strokeRect(-w / 2 + 6, -h / 2 + 6, w - 12, h - 12); g.restore();
  });
  const id = g.getImageData(0, 0, s, s);
  for (let y = 0; y < s; y++) for (let x = 0; x < s; x++) {
    const j = (y * s + x) * 4, f = fbm(x / s, y / s, { scale: 5, oct: 5, seed: 99 });
    const w = ((x + y) % 2 ? 0.93 : 1.03) * (0.75 + 0.4 * f);
    id.data[j] = id.data[j] * w + 20 * f; id.data[j + 1] = id.data[j + 1] * w + 18 * f; id.data[j + 2] = id.data[j + 2] * w + 12 * f;
  }
  g.putImageData(id, 0, 0);
  return toTex(cv);
}

// ---------- signage & small graphics ----------
export function clockFace() {
  const s = 256, cv = canvas(s, s), g = cv.getContext('2d');
  g.fillStyle = '#efe6d0'; g.beginPath(); g.arc(s / 2, s / 2, s / 2 - 4, 0, 7); g.fill();
  g.strokeStyle = '#2a2018'; g.lineWidth = 10; g.stroke();
  g.fillStyle = '#2a2018'; g.font = 'bold 26px Georgia'; g.textAlign = 'center'; g.textBaseline = 'middle';
  for (let i = 1; i <= 12; i++) { const a = i / 12 * Math.PI * 2; g.fillText(String(i), s / 2 + Math.sin(a) * 92, s / 2 - Math.cos(a) * 92); }
  const grad = g.createRadialGradient(s / 2, s / 2, 30, s / 2, s / 2, s / 2); grad.addColorStop(0, 'rgba(0,0,0,0)'); grad.addColorStop(1, 'rgba(60,40,20,.35)');
  g.fillStyle = grad; g.fillRect(0, 0, s, s);
  return toTex(cv);
}
export function calendar() {
  const W = 256, H = 384, cv = canvas(W, H), g = cv.getContext('2d');
  g.fillStyle = '#f2e8d2'; g.fillRect(0, 0, W, H);
  const gr = g.createLinearGradient(0, 0, 0, 230); gr.addColorStop(0, '#f0a040'); gr.addColorStop(1, '#c8402a');
  g.fillStyle = gr; g.fillRect(14, 14, W - 28, 216);
  g.fillStyle = 'rgba(255,240,200,.85)'; g.beginPath(); g.arc(W / 2, 110, 58, 0, 7); g.fill();          // a sun / halo motif
  g.fillStyle = '#7a2a1e'; for (let i = 0; i < 16; i++) { const a = i / 16 * 6.283; g.fillRect(W / 2 + Math.cos(a) * 72 - 3, 110 + Math.sin(a) * 72 - 3, 6, 6); }
  g.fillStyle = '#2a4a3a'; g.fillRect(14, 196, W - 28, 34);
  g.fillStyle = '#2a2018'; g.font = 'bold 20px Georgia'; g.textAlign = 'center'; g.fillText('OCTOBER  2026', W / 2, 262);
  g.font = '13px monospace';
  for (let r = 0; r < 5; r++) for (let c = 0; c < 7; c++) { const d = r * 7 + c - 3; if (d > 0 && d < 32) { g.fillStyle = c === 0 ? '#b5442e' : '#2a2018'; g.fillText(String(d), 30 + c * 33, 290 + r * 19); } }
  return toTex(cv);
}
export function ledger() {
  const W = 256, H = 180, cv = canvas(W, H), g = cv.getContext('2d');
  g.fillStyle = '#ece0c2'; g.fillRect(0, 0, W, H);
  g.strokeStyle = 'rgba(80,90,140,.5)'; g.lineWidth = 1;
  for (let y = 18; y < H; y += 11) { g.beginPath(); g.moveTo(0, y); g.lineTo(W, y); g.stroke(); }
  g.strokeStyle = 'rgba(170,40,40,.6)'; g.beginPath(); g.moveTo(40, 0); g.lineTo(40, H); g.moveTo(W / 2, 0); g.lineTo(W / 2, H); g.stroke();
  g.fillStyle = '#2a2a4a'; g.font = '9px monospace';
  for (let y = 26; y < H; y += 11) { if (rnd() < 0.8) g.fillText('— ' + (Math.floor(rnd() * 9) + 1) + ' pcs ·· ' + (Math.floor(rnd() * 4) + 1), 46, y); }
  g.fillStyle = 'rgba(0,0,0,.15)'; g.fillRect(W / 2 - 3, 0, 6, H);
  return toTex(cv);
}
export function chalkboard() {
  const W = 1024, H = 512, cv = canvas(W, H), g = cv.getContext('2d');
  g.fillStyle = '#1e2e26'; g.fillRect(0, 0, W, H);
  g.strokeStyle = '#6a4a2a'; g.lineWidth = 26; g.strokeRect(0, 0, W, H);
  g.fillStyle = 'rgba(240,236,220,.9)'; g.textAlign = 'center';
  g.font = '86px Georgia'; g.fillText('A   B   C   D   E', W / 2, 150);
  g.font = '92px serif'; g.fillText('क   ख   ग   घ', W / 2, 290);
  g.font = 'italic 54px Georgia'; g.fillText('1 + 1 = 2', W / 2, 410);
  const id = g.getImageData(0, 0, W, H);
  for (let i = 0; i < id.data.length; i += 4) { const k = 0.85 + Math.random() * 0.3; id.data[i] *= k; id.data[i + 1] *= k; id.data[i + 2] *= k; }
  g.putImageData(id, 0, 0);
  return toTex(cv);
}
export function notebookPage() {
  const W = 128, H = 160, cv = canvas(W, H), g = cv.getContext('2d');
  g.fillStyle = '#efe8d6'; g.fillRect(0, 0, W, H);
  g.strokeStyle = 'rgba(80,110,170,.5)'; for (let y = 16; y < H; y += 10) { g.beginPath(); g.moveTo(0, y); g.lineTo(W, y); g.stroke(); }
  g.fillStyle = '#3a3a5a'; g.font = '13px Georgia'; g.fillText('a  b  c  d', 10, 35); g.fillText('क  ख  ग', 10, 55); g.fillText('my name', 10, 85);
  return toTex(cv);
}
export function soft(size = 64) {      // soft round sprite for dust / glow
  const cv = canvas(size, size), g = cv.getContext('2d'), gr = g.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(0.35, 'rgba(255,255,255,.45)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = gr; g.fillRect(0, 0, size, size);
  return toTex(cv, { srgb: false });
}
// painted sky for the window view
export function sky() {
  const cv = canvas(16, 256), g = cv.getContext('2d'), gr = g.createLinearGradient(0, 0, 0, 256);
  gr.addColorStop(0, '#7fa6c8'); gr.addColorStop(0.55, '#cfd9d6'); gr.addColorStop(1, '#f2e2c0');
  g.fillStyle = gr; g.fillRect(0, 0, 16, 256);
  const t = toTex(cv); t.wrapS = t.wrapT = THREE.ClampToEdgeWrapping; return t;
}
export function schoolWall() {
  return pbr(pixelTex(512, 512, (u, v, o) => {
    const n = fbm(u, v, { scale: 6, oct: 5, seed: 131 });
    const band = v > 0.86 ? 1 : 0;
    o.r = band ? 0.62 : 0.93 - (n - 0.5) * 0.12; o.g = band ? 0.32 : 0.80 - (n - 0.5) * 0.12; o.b = band ? 0.22 : 0.56 - (n - 0.5) * 0.12;
    o.h = 0.5 + n * 0.1; o.ro = 0.9;
  }));
}
