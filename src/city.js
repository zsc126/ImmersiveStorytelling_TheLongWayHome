// CITY KIT — painted textures and builders for the lanes, the market and the nightmare.
// Buildings are simple faceted boxes with painted windows; their street side gets real depth
// (ledges, balconies, AC units, shutters, signs, awnings) merged into one or two meshes each,
// so a whole street costs a few dozen draw calls.
import * as THREE from 'three';
import { M, G, Batcher, slab, wireGeo } from './kit.js';

const rnd = (() => { let s = 12345; return () => { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646; }; })();
export const rand = rnd;

// ---------- canvas textures ----------
function canvas(w, h = w) { const c = document.createElement('canvas'); c.width = w; c.height = h; return [c, c.getContext('2d')]; }
function tex(c, repeat = [1, 1], srgb = true) {
  const t = new THREE.CanvasTexture(c);
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(repeat[0], repeat[1]); t.anisotropy = 4;
  return t;
}
function speckle(g, w, h, n, colors, rMax = 2, a = 0.5) {
  for (let i = 0; i < n; i++) { g.fillStyle = colors[(rnd() * colors.length) | 0]; g.globalAlpha = rnd() * a; g.beginPath(); g.arc(rnd() * w, rnd() * h, rnd() * rMax, 0, 7); g.fill(); }
  g.globalAlpha = 1;
}
function stains(g, w, h, n, color, rMin, rMax) {
  for (let i = 0; i < n; i++) {
    const x = rnd() * w, y = rnd() * h, r = rMin + rnd() * (rMax - rMin);
    const gr = g.createRadialGradient(x, y, 0, x, y, r); gr.addColorStop(0, color); gr.addColorStop(1, 'rgba(0,0,0,0)');
    g.fillStyle = gr; g.fillRect(x - r, y - r, r * 2, r * 2);
  }
}
const cache = new Map();
const once = (key, fn) => { if (!cache.has(key)) cache.set(key, fn()); return cache.get(key); };

export const T = {
  dot: () => once('dot', () => { const [c, g] = canvas(32); const gr = g.createRadialGradient(16, 16, 0, 16, 16, 16); gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = gr; g.fillRect(0, 0, 32, 32); return tex(c); }),
  // packed earth with a little litter and thread — calm, so it reads as "ground" from far away
  dirt: () => once('dirt', () => {
    const [c, g] = canvas(512); g.fillStyle = '#7a6a54'; g.fillRect(0, 0, 512, 512);
    stains(g, 512, 512, 30, 'rgba(60,46,32,.28)', 30, 120); stains(g, 512, 512, 14, 'rgba(160,140,110,.22)', 20, 80);
    speckle(g, 512, 512, 5000, ['#4a3e30', '#9a8a70', '#5a4c3c'], 1.8, 0.45);
    for (let i = 0; i < 14; i++) { g.strokeStyle = ['#b8402e', '#d9a21b', '#2f4a8a', '#e8e0d0'][i % 4]; g.globalAlpha = 0.55; g.lineWidth = 1.2; g.beginPath(); let x = rnd() * 512, y = rnd() * 512; g.moveTo(x, y); for (let k = 0; k < 4; k++) { x += (rnd() - 0.5) * 30; y += (rnd() - 0.5) * 30; g.lineTo(x, y); } g.stroke(); }
    g.globalAlpha = 1; return tex(c);
  }),
  plywood: () => once('ply', () => { const [c, g] = canvas(256); g.fillStyle = '#7a6040'; g.fillRect(0, 0, 256, 256); for (let y = 0; y < 256; y += 3) { g.fillStyle = `rgba(${rnd() < 0.5 ? '60,40,20' : '190,160,120'},${rnd() * 0.22})`; g.fillRect(0, y + Math.sin(y * 0.1) * 3, 256, 2); } stains(g, 256, 256, 8, 'rgba(30,20,10,.3)', 10, 50); return tex(c); }),
  tin: () => once('tin', () => {
    const [c, g] = canvas(256);
    for (let x = 0; x < 256; x += 16) { const gr = g.createLinearGradient(x, 0, x + 16, 0); gr.addColorStop(0, '#5a5c58'); gr.addColorStop(0.5, '#9a9c94'); gr.addColorStop(1, '#5a5c58'); g.fillStyle = gr; g.fillRect(x, 0, 16, 256); }
    stains(g, 256, 256, 22, 'rgba(130,64,26,.5)', 8, 46); return tex(c);
  }),
  slab: () => once('slab', () => { const [c, g] = canvas(256); g.fillStyle = '#5a564e'; g.fillRect(0, 0, 256, 256); stains(g, 256, 256, 16, 'rgba(25,20,16,.4)', 15, 70); speckle(g, 256, 256, 1200, ['#2a2620', '#8a8278'], 1.4); return tex(c); }),
  cardboard: () => once('card', () => { const [c, g] = canvas(128); g.fillStyle = '#9f8360'; g.fillRect(0, 0, 128, 128); g.fillStyle = 'rgba(60,40,20,.5)'; g.fillRect(0, 60, 128, 6); stains(g, 128, 128, 6, 'rgba(40,25,10,.3)', 6, 30); return tex(c); }),
  stripes: (a, b, n = 8) => once('st' + a + b + n, () => { const [c, g] = canvas(256); for (let i = 0; i < n; i++) { g.fillStyle = i % 2 ? a : b; g.fillRect(i * 256 / n, 0, 256 / n, 256); } stains(g, 256, 256, 8, 'rgba(0,0,0,.18)', 10, 50); return tex(c); }),
  sign: (text, bg, fg) => once('sg' + text, () => { const [c, g] = canvas(512, 128); g.fillStyle = bg; g.fillRect(0, 0, 512, 128); stains(g, 512, 128, 6, 'rgba(0,0,0,.2)', 10, 50); g.fillStyle = fg; g.font = 'bold 54px Georgia, serif'; g.textAlign = 'center'; g.fillText(text, 256, 84); return tex(c); }),
  price: () => once('price', () => {
    const [c, g] = canvas(512, 256); g.fillStyle = '#ecdcac'; g.fillRect(0, 0, 512, 256); stains(g, 512, 256, 6, 'rgba(90,60,20,.22)', 20, 80);
    g.fillStyle = '#8a1a14'; g.font = 'bold 60px Georgia, serif'; g.textAlign = 'center'; g.fillText('ROTI · SABZI', 256, 88);
    g.fillStyle = '#1a1612'; g.font = 'bold 92px Georgia, serif'; g.fillText('Rs 10', 256, 202);
    g.strokeStyle = '#5a3a1a'; g.lineWidth = 10; g.strokeRect(5, 5, 502, 246); return tex(c);
  }),
  // plaster facade with painted windows; one tile = 4 m × 4 m. night: some windows lit
  facade: (color, night = false) => once('fa' + color + night, () => {
    const [c, g] = canvas(512);
    g.fillStyle = color; g.fillRect(0, 0, 512, 512);
    // a few patches where the plaster fell off (brick shows)
    for (let i = 0; i < 3; i++) {
      const x = rnd() * 512, y = rnd() * 512, r = 18 + rnd() * 40;
      g.fillStyle = '#8a5a44'; g.beginPath(); for (let k = 0; k <= 14; k++) { const a = k / 14 * Math.PI * 2, rr = r * (0.55 + rnd() * 0.5); g.lineTo(x + Math.cos(a) * rr * 1.4, y + Math.sin(a) * rr); } g.fill();
      g.strokeStyle = 'rgba(60,36,26,.6)'; g.lineWidth = 2; for (let yy = y - r; yy < y + r; yy += 10) { g.beginPath(); g.moveTo(x - r, yy); g.lineTo(x + r, yy); g.stroke(); }
    }
    stains(g, 512, 512, 14, 'rgba(40,30,20,.22)', 30, 120);
    g.globalAlpha = 0.18; for (let i = 0; i < 12; i++) { g.fillStyle = '#2a2018'; g.fillRect(rnd() * 512, rnd() * 260, 2 + rnd() * 3, 60 + rnd() * 200); } g.globalAlpha = 1;
    const shutters = ['#3a6a7a', '#7a3a2a', '#4a6a3a', '#6a5a3a', '#2a4a6a'];
    for (const y of [64, 320]) for (const x of [62, 312]) {
      const lit = night ? rnd() < 0.3 : rnd() < 0.08;
      g.fillStyle = 'rgba(0,0,0,.25)'; g.fillRect(x - 6, y - 6, 132, 154);                         // reveal
      g.fillStyle = lit ? (night ? '#f0a850' : '#c8a070') : '#17120e'; g.fillRect(x, y, 120, 140);
      g.strokeStyle = '#201a14'; g.lineWidth = 4; for (let k = 1; k < 5; k++) { g.beginPath(); g.moveTo(x + k * 24, y); g.lineTo(x + k * 24, y + 140); g.stroke(); }
      if (rnd() < 0.45) { g.fillStyle = shutters[(rnd() * shutters.length) | 0]; g.fillRect(x - 26, y, 24, 140); g.fillRect(x + 122, y, 24, 140); }
      g.fillStyle = 'rgba(220,210,190,.55)'; g.fillRect(x - 8, y + 140, 136, 8);
    }
    speckle(g, 512, 512, 1600, ['#2a2018', '#efe2c8'], 1.2, 0.35);
    return c;                                                                                   // canvas; each building makes its own tiling
  }),
};
const facadeMats = new Map();
export function facadeMat(color, rx, ry, night = false, emissive = 0x000000) {
  const key = [color, rx, ry, night, emissive].join('|');
  if (!facadeMats.has(key)) {
    const t = tex(T.facade(color, night), [rx, ry]);
    facadeMats.set(key, new THREE.MeshStandardMaterial({ map: t, roughness: 0.95, flatShading: true, emissive, emissiveMap: emissive ? t : null }));
  }
  return facadeMats.get(key);
}
export const texMat = (t, o = {}) => new THREE.MeshStandardMaterial({ map: t, roughness: 0.92, ...o });

// ---------- shops & awnings ----------
export const SHOPS = [['KIRANA STORE', '#e8c84a', '#6a1a10'], ['MOBILE REPAIR', '#2a6aaa', '#ffffff'], ['MEDICAL', '#2a8a4a', '#ffffff'], ['SWEETS', '#c8402e', '#fff2c8'], ['PAN SHOP', '#f2f2ea', '#2a5a3a'], ['HARDWARE', '#4a4a52', '#f2d84a'], ['TAILORING', '#7a3a6a', '#fff2c8'], ['CHAI', '#d8a030', '#3a1a0a']];
let _shared = null;
function shared() {
  if (_shared) return _shared;
  _shared = {
    roof: texMat(T.slab()), shutter: texMat(T.tin(), { metalness: 0.35 }),
    signs: SHOPS.map(([t, bg, fg]) => texMat(T.sign(t, bg, fg))),
    awnings: [[0x2c5a9a, 0xe8d8b0], [0x8a3a2a, 0xe8d8b0], [0xa8862a, 0x5a3a1a], [0x3a7a5a, 0xe8d8b0]].map(([a, b]) => texMat(T.stripes('#' + a.toString(16).padStart(6, '0'), '#' + b.toString(16).padStart(6, '0'), 10), { side: THREE.DoubleSide, roughness: 1 })),
    ledge: M(0x9a8e7c, { roughness: 0.95, flatShading: true }), rail: M(0x2a2a28, { metalness: 0.4, roughness: 0.6 }), ac: M(0xc8c4b8, { roughness: 0.55 }),
    tank: M(0x2a2a2a, { roughness: 0.6 }), pipe: M(0x5a5248, { roughness: 0.8 }),
  };
  return _shared;
}

// A city block: narrow buildings side by side along the longer edge.
// face ('+x' | '-x' | '+z' | '-z') = the side that looks onto the street (gets the detail).
// Returns its collider box. `list` collects the building meshes (the nightmare warps them).
export function cityBlock(root, x0, x1, z0, z1, { colours, hMin = 6, hMax = 11, night = false, glow = 0, list = null, face = null, detail = true, cloths = null, batch = null, period = 0 }) {
  const along = (x1 - x0) >= (z1 - z0);
  const len = along ? x1 - x0 : z1 - z0;
  const sh = shared();
  let a = 0, i = Math.floor(rnd() * 10);
  // period > 0: the street repeats exactly every `period` metres (4 buildings per period), so a
  // lane can loop seamlessly (the nightmare's repeating alley)
  const PH = [0.15, 0.8, 0.45, 1.0].map(f => hMin + f * (hMax - hMin));
  let k = 0;
  while (a < len - 0.01) {
    let w = period ? Math.min(len - a, period / 4) : Math.min(len - a, 2.6 + rnd() * 2.6);
    if (len - a - w < (period ? 1.6 : 2.4)) w = len - a;   // never leave a sliver of a building at the end of a block: the last one takes the rest
    const h = period ? PH[k % 4] : hMin + rnd() * (hMax - hMin);
    if (period) i = k % 4;
    k++;
    const bx0 = along ? x0 + a : x0, bx1 = along ? x0 + a + w : x1, bz0 = along ? z0 : z0 + a, bz1 = along ? z1 : z0 + a + w;
    const pw = bx1 - bx0, pd = bz1 - bz0;
    const rx = Math.max(1, Math.round(Math.max(pw, pd) / 4)), ry = Math.max(1, Math.round(h / 4));
    const mat = facadeMat(colours[i++ % colours.length], rx, ry, night, glow);
    const geo = new THREE.BoxGeometry(pw, h, pd); geo.translate(0, h / 2, 0);                  // pivot at the base (for warping)
    const m = new THREE.Mesh(geo, [mat, mat, sh.roof, sh.roof, mat, mat]);
    m.position.set((bx0 + bx1) / 2, 0, (bz0 + bz1) / 2); m.castShadow = true; m.receiveShadow = true;
    m.userData.h = h; root.add(m); if (list) list.push(m);
    // details, merged into a couple of meshes per building
    const B = new Batcher();
    B.add(G.box(pw, 0.45, 0.14), sh.ledge, 0, h + 0.22, pd / 2 - 0.07); B.add(G.box(pw, 0.45, 0.14), sh.ledge, 0, h + 0.22, -pd / 2 + 0.07);
    B.add(G.box(0.14, 0.45, pd), sh.ledge, pw / 2 - 0.07, h + 0.22, 0); B.add(G.box(0.14, 0.45, pd), sh.ledge, -pw / 2 + 0.07, h + 0.22, 0);
    if (rnd() < 0.5) B.add(G.cyl(0.5, 0.5, 0.9, 10), sh.tank, (rnd() - 0.5) * pw * 0.5, h + 0.45, (rnd() - 0.5) * pd * 0.5);
    if (detail && face) {
      const n = { '+x': [1, 0], '-x': [-1, 0], '+z': [0, 1], '-z': [0, -1] }[face];
      const fx = n[0] ? n[0] * pw / 2 : 0, fz = n[1] ? n[1] * pd / 2 : 0, fw = n[0] ? pd : pw;
      const P = (u, y, out) => [fx + n[0] * out + (n[0] ? 0 : u), y, fz + n[1] * out + (n[0] ? u : 0)];
      const BX = (w2, h2, d2, mat2, u, y, out, rot = 0) => { const [px, py, pz] = P(u, y, out); B.add(G.box(n[0] ? d2 : w2, h2, n[0] ? w2 : d2), mat2, px, py, pz, n[0] ? 0 : rot * n[1], 0, n[0] ? -rot * n[0] : 0); };
      for (let y = 3.1; y < h - 1; y += 2.6) BX(fw, 0.12, 0.24, sh.ledge, 0, y, 0.12);
      for (let y = 3.6; y < h - 1.5; y += 2.6) {
        if (rnd() < 0.5) {                                                                     // balcony with a railing
          const u = (rnd() - 0.5) * (fw - 1.6);
          BX(1.4, 0.1, 0.7, sh.ledge, u, y - 0.4, 0.35);
          for (let k = 0; k <= 6; k++) BX(0.025, 0.8, 0.025, sh.rail, u - 0.7 + k * 0.233, y, 0.68);
          BX(1.4, 0.04, 0.04, sh.rail, u, y + 0.4, 0.68);
          if (cloths && rnd() < 0.6) cloths.push({ at: new THREE.Vector3(...P(u + 0.3, y + 0.25, 0.55)).add(m.position), rotY: n[0] ? Math.PI / 2 : 0 });
        }
        if (rnd() < 0.4) BX(0.6, 0.42, 0.45, sh.ac, (rnd() - 0.5) * (fw - 1), y + 0.6, 0.24);
      }
      if (rnd() < 0.5) BX(0.08, h - 0.5, 0.08, sh.pipe, (rnd() - 0.5) * fw * 0.9, h / 2, 0.06);  // drain pipe
      // ground floor: shutter, sign, awning
      const si = (rnd() * SHOPS.length) | 0;
      BX(Math.min(2.2, fw - 0.5), 2.2, 0.06, sh.shutter, 0, 1.1, 0.04);
      BX(Math.min(2.4, fw - 0.3), 0.55, 0.08, sh.signs[si], 0, 2.62, 0.08);
      if (rnd() < 0.55) BX(Math.min(2.6, fw - 0.2), 0.03, 1.1, sh.awnings[(rnd() * 4) | 0], 0, 2.25, 0.55, -0.25);
    }
    if (batch) {
      // static streets: hand the details to the space's shared batch (fewest draw calls)
      const tr = new THREE.Matrix4().makeTranslation(m.position.x, 0, m.position.z);
      for (const [mt, l] of B.groups) { if (!batch.groups.has(mt)) batch.groups.set(mt, []); l.forEach(gg => { gg.applyMatrix4(tr); batch.groups.get(mt).push(gg); }); }
      B.groups.clear();
    } else B.build(m, { cast: true, receive: true });
    a += w;
  }
  return { minX: x0, maxX: x1, minZ: z0, maxZ: z1 };
}

// a market stall: counter, four poles, a striped tarp roof (all merged)
export function stall(root, x, z, rotY, { w = 2.4, d = 1.1, tarp = 0 } = {}) {
  const g = new THREE.Group(); g.position.set(x, 0, z); g.rotation.y = rotY; root.add(g);
  const sh = shared(), ply = texMat(T.plywood());
  const B = new Batcher();
  B.add(G.box(w, 0.9, d), ply, 0, 0.45, 0);
  B.add(slab(w + 0.1, d + 0.1, 0.05, 0.02), M(0x8a6a4a, { roughness: 0.9 }), 0, 0.9, 0);
  [[-w / 2, -d / 2 - 0.8, 2.7], [w / 2, -d / 2 - 0.8, 2.7], [-w / 2, d / 2, 2.4], [w / 2, d / 2, 2.4]].forEach(([px, pz, ph]) => B.add(G.box(0.06, ph, 0.06), M(0x3a2a1a), px, ph / 2, pz));
  B.build(g);
  const roof = new THREE.Mesh(new THREE.PlaneGeometry(w + 0.6, d + 1.5, 4, 3), sh.awnings[tarp % sh.awnings.length]);
  // a little sag in the tarp
  { const p = roof.geometry.attributes.position; for (let i = 0; i < p.count; i++) { const u = p.getX(i) / ((w + 0.6) / 2), v = p.getY(i) / ((d + 1.5) / 2); p.setZ(i, -0.08 * (1 - u * u) * (1 - v * v)); } roof.geometry.computeVertexNormals(); }
  roof.rotation.x = -Math.PI / 2 + 0.2; roof.position.set(0, 2.55, -0.35); roof.castShadow = true; roof.receiveShadow = true; g.add(roof);
  return g;
}

// sagging wires as one merged mesh
export function wires(root, list, mat = M(0x111111, { roughness: 0.6 })) {
  const B = new Batcher();
  list.forEach(([a, b, sag, r]) => B.add(wireGeo(a, b, sag, r || 0.012), mat));
  return B.build(root, { cast: false, receive: false });
}

// laundry hanging from a line (cloth textures from the factory set)
export function clothLine(root, a, b, fabMats, n = 4) {
  const out = [];
  const g = new THREE.PlaneGeometry(0.42, 0.6, 2, 2); g.translate(0, -0.3, 0);
  for (let k = 0; k < n; k++) {
    const t = (k + 0.5) / n, p = a.clone().lerp(b, t); p.y -= 0.25 * Math.sin(t * Math.PI);
    const piv = new THREE.Group(); piv.position.copy(p); piv.rotation.y = Math.atan2(b.x - a.x, b.z - a.z) + Math.PI / 2; root.add(piv);
    const c = new THREE.Mesh(g, fabMats[k % fabMats.length]); c.castShadow = true; piv.add(c); out.push(piv);
  }
  return out;
}
