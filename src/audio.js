// Sound for the experience.
// Every sound has a procedural placeholder so the build works with no files.
// To use a real recording (e.g. made in Audacity), drop it in /audio and list it
// in audio/manifest.json, e.g. { "sewing": "sewing.mp3" }. It replaces the placeholder.
import * as THREE from 'three';

const SR = 22050; // placeholders are generated at a low rate — cheap and fine for ambience

export const SOUND_NAMES = {
  sewing: 'Your sewing machine running (seamless loop)',
  factory: 'Other machines in the room (seamless loop)',
  hum: 'Motor / fan hum (seamless loop)',
  room: 'Room tone (seamless loop)',
  chatter: 'Workers talking quietly (seamless loop)',
  children: 'Children at school outside the window (seamless loop)',
  street: 'Street outside the factory door (seamless loop)',
  schoolBell: 'School hand bell (one-shot)',
  shiftBell: 'Factory end-of-shift bell (one-shot)',
  coin: 'Coin dropping into the bag (one-shot)',
  fabric: 'Fabric swish (one-shot)',
  door: 'Metal door creaking open (one-shot)',
  step: 'Single footstep (one-shot)',
};

const rand = (a, b) => a + Math.random() * (b - a);

function buffer(ctx, seconds, fill, fade = 0) {
  // fade > 0 makes a seamless loop by cross-fading the tail into the head
  const n = Math.floor(seconds * SR), f = Math.floor(fade * SR);
  const a = new Float32Array(n + f);
  fill(a, SR);
  const b = ctx.createBuffer(1, n, SR);
  const d = b.getChannelData(0);
  for (let i = 0; i < n; i++) {
    d[i] = (f && i < f) ? a[i] * (i / f) + a[n + i] * (1 - i / f) : a[i];
  }
  let peak = 0;
  for (let i = 0; i < n; i++) peak = Math.max(peak, Math.abs(d[i]));
  if (peak > 0) for (let i = 0; i < n; i++) d[i] *= 0.85 / peak;
  return b;
}

function lowpass(a, k) { let y = 0; for (let i = 0; i < a.length; i++) { y += k * (a[i] - y); a[i] = y; } }

// --- generators ---------------------------------------------------------------
function sewing(a, sr) {
  const rate = 14; // stitches per second; 2 s buffer = 28 whole stitches → loops cleanly
  let nz = 0, amp = 1, last = -1;
  for (let i = 0; i < a.length; i++) {
    const t = i / sr, ph = (t * rate) % 1, k = Math.floor(t * rate);
    if (k !== last) { last = k; amp = rand(0.75, 1); }
    nz += 0.45 * ((Math.random() * 2 - 1) - nz);
    a[i] = amp * (nz * Math.exp(-ph * 34) * 0.7 + Math.sin(2 * Math.PI * 95 * t) * Math.exp(-ph * 16) * 0.55)
      + 0.06 * Math.sin(2 * Math.PI * 220 * t) + 0.04 * Math.sin(2 * Math.PI * 330 * t);
  }
}
function factory(a, sr) {
  // several machines at slightly different speeds, muffled
  const rates = [12.5, 13.6, 15.1, 11.2];
  const amps = rates.map(() => rand(0.5, 1));
  for (let i = 0; i < a.length; i++) {
    const t = i / sr; let s = 0;
    for (let m = 0; m < rates.length; m++) {
      const ph = (t * rates[m] + m * 0.31) % 1;
      s += amps[m] * Math.sin(2 * Math.PI * (80 + m * 13) * t) * Math.exp(-ph * 12);
    }
    a[i] = s + (Math.random() * 2 - 1) * 0.05;
  }
  lowpass(a, 0.35);
}
function hum(a, sr) {
  let n = 0;
  for (let i = 0; i < a.length; i++) {
    const t = i / sr;
    n += 0.02 * ((Math.random() * 2 - 1) - n);
    a[i] = 0.18 * Math.sin(2 * Math.PI * 50 * t) + 0.1 * Math.sin(2 * Math.PI * 100 * t) + 0.04 * Math.sin(2 * Math.PI * 150 * t) + n * 0.6;   // V3.1: far less noise in the motor hum
  }
}
function room(a) {
  // V3.1: a soft, dark room tone — filtered twice so there is no hiss
  let b = 0, c = 0;
  for (let i = 0; i < a.length; i++) { b = (b + 0.02 * (Math.random() * 2 - 1)) / 1.02; c += 0.05 * (b - c); a[i] = c * 2.2; }
}
// crude voice-like murmur: harmonic buzz shaped by moving formants, chopped into syllables
function voices(a, sr, { count, f0min, f0max, sylMin, sylMax, gapMax, laugh = false, muffle = 0.25 }) {
  for (let v = 0; v < count; v++) {
    let i = Math.floor(rand(0, sr * 0.8)), phase = 0;
    const base = rand(f0min, f0max), gain = rand(0.5, 1);
    while (i < a.length) {
      const isLaugh = laugh && Math.random() < 0.18;
      const syls = isLaugh ? Math.floor(rand(4, 7)) : Math.floor(rand(3, 9));
      let f0 = base * rand(0.95, 1.1);
      for (let s = 0; s < syls && i < a.length; s++) {
        const len = Math.floor((isLaugh ? rand(0.09, 0.13) : rand(sylMin, sylMax)) * sr);
        const F1 = isLaugh ? 750 : rand(300, 800), F2 = isLaugh ? 1300 : rand(900, 2200);
        const fEnd = isLaugh ? f0 * 0.93 : f0 * rand(0.9, 1.08);
        for (let j = 0; j < len && i + j < a.length; j++) {
          const p = j / len, f = f0 + (fEnd - f0) * p;
          phase += 2 * Math.PI * f / sr;
          let s2 = 0;
          for (let h = 1; h <= 7; h++) {
            const fh = h * f;
            const w = Math.exp(-(((fh - F1) / 260) ** 2)) + 0.55 * Math.exp(-(((fh - F2) / 420) ** 2)) + 0.03;
            s2 += w * Math.sin(h * phase);
          }
          a[i + j] += gain * s2 * Math.sin(Math.PI * p) ** 0.7 * 0.3;
        }
        i += len + Math.floor(rand(0.01, 0.06) * sr);
        f0 = fEnd;
      }
      i += Math.floor(rand(0.3, gapMax) * sr);
    }
  }
  lowpass(a, muffle);
}
function bellPartials(t, f, decay) {
  const r = [1, 2.0, 2.76, 5.4], g = [1, 0.45, 0.35, 0.15];
  let s = 0; for (let k = 0; k < 4; k++) s += g[k] * Math.sin(2 * Math.PI * f * r[k] * t) * Math.exp(-t * decay * (1 + k * 0.6));
  return s;
}
function schoolBell(a, sr) {
  for (let n = 0; n < 12; n++) {
    const start = Math.floor((n * 0.24 + rand(0, 0.03)) * sr), f = n % 2 ? 1180 : 1240;
    for (let i = start; i < a.length; i++) a[i] += bellPartials((i - start) / sr, f, 5) * 0.4;
  }
}
function shiftBell(a, sr) {
  for (let i = 0; i < a.length; i++) {
    const t = i / sr, gate = Math.sin(2 * Math.PI * 24 * t) > 0 ? 1 : 0.15;
    const env = Math.min(1, t * 20) * (t < 1.7 ? 1 : Math.exp(-(t - 1.7) * 6));
    a[i] = gate * env * (Math.sin(2 * Math.PI * 690 * t) + 0.5 * Math.sin(2 * Math.PI * 1890 * t) + 0.3 * Math.sin(2 * Math.PI * 2750 * t));
  }
}
function coin(a, sr) {
  const fs = [2093, 3140, 4410, 5870].map(f => f * rand(0.97, 1.03));
  for (let i = 0; i < a.length; i++) {
    const t = i / sr; let s = 0;
    fs.forEach((f, k) => { s += Math.sin(2 * Math.PI * f * t) * Math.exp(-t * (7 + k * 4)) / (k + 1); });
    a[i] = s + (Math.random() * 2 - 1) * Math.exp(-t * 200) * 0.6;
  }
}
function fabric(a, sr) {
  let y = 0;
  for (let i = 0; i < a.length; i++) {
    const p = i / a.length; y += 0.3 * ((Math.random() * 2 - 1) - y);
    a[i] = y * Math.sin(Math.PI * p) ** 2;
  }
}
function door(a, sr) {
  let t = 0;
  while (t < 1.3) {
    const f = 55 + 70 * t + rand(-8, 8);
    const start = Math.floor(t * sr);
    for (let j = 0; j < sr * 0.04 && start + j < a.length; j++) {
      const tt = j / sr;
      a[start + j] += (Math.sin(2 * Math.PI * 420 * tt) * 0.6 + Math.sin(2 * Math.PI * 960 * tt) * 0.3) * Math.exp(-tt * 90);
    }
    t += 1 / f;
  }
  const thud = Math.floor(1.32 * sr);
  for (let j = 0; thud + j < a.length; j++) { const tt = j / sr; a[thud + j] += Math.sin(2 * Math.PI * 70 * tt) * Math.exp(-tt * 14) * 1.2; }
}
function step(a, sr) {
  let y = 0;
  for (let i = 0; i < a.length; i++) {
    const t = i / sr; y += 0.12 * ((Math.random() * 2 - 1) - y);
    a[i] = (y * 0.9 + Math.sin(2 * Math.PI * 85 * t) * 0.35) * Math.min(1, t / 0.006) * Math.exp(-t * 32);
  }
}
function street(a, sr) {
  let b = 0;
  let c = 0;
  for (let i = 0; i < a.length; i++) { b = (b + 0.02 * (Math.random() * 2 - 1)) / 1.02; c += 0.05 * (b - c); a[i] = c * 1.2; }   // V3.1: no hiss under the street
  const extra = new Float32Array(a.length);
  voices(extra, sr, { count: 4, f0min: 120, f0max: 260, sylMin: 0.1, sylMax: 0.22, gapMax: 1.6, muffle: 0.3 });
  for (let i = 0; i < a.length; i++) a[i] += extra[i] * 0.35;
  // two horns and a bicycle bell
  [[1.2, 410, 520], [5.1, 360, 450]].forEach(([at, f1, f2]) => {
    const s = Math.floor(at * sr);
    for (let j = 0; j < sr * 0.45 && s + j < a.length; j++) {
      const tt = j / sr; const sq = (f) => Math.sign(Math.sin(2 * Math.PI * f * tt));
      a[s + j] += (sq(f1) + sq(f2)) * 0.08 * Math.min(1, tt * 30) * Math.min(1, (0.45 - tt) * 30);
    }
  });
  const bs = Math.floor(3.3 * sr);
  for (let r = 0; r < 2; r++) for (let j = 0; j < sr * 0.6; j++) { const k = bs + r * Math.floor(sr * 0.18) + j; if (k < a.length) a[k] += bellPartials(j / sr, 2400, 9) * 0.2; }
}

function whistle(a, sr) {
  // police whistle: pea trill, two blasts
  [[0, 0.55], [0.75, 1.5]].forEach(([t0, t1]) => {
    for (let i = Math.floor(t0 * sr); i < Math.min(a.length, t1 * sr); i++) {
      const t = i / sr, k = (t - t0) / (t1 - t0);
      const env = Math.min(1, k * 25) * Math.min(1, (1 - k) * 12);
      const trill = 0.55 + 0.45 * Math.sign(Math.sin(2 * Math.PI * 28 * t));
      a[i] += env * trill * (Math.sin(2 * Math.PI * 2950 * t) + 0.3 * Math.sin(2 * Math.PI * 5900 * t) + (Math.random() - 0.5) * 0.25);
    }
  });
}
function heartbeat(a, sr) {
  const beat = (t0, g) => { for (let j = 0; j < sr * 0.18; j++) { const t = j / sr, i = Math.floor(t0 * sr) + j; if (i < a.length) a[i] += g * Math.sin(2 * Math.PI * 52 * t) * Math.exp(-t * 26); } };
  beat(0.0, 1); beat(0.28, 0.7); // one "lub-dub" per 0.8 s loop
}
// a soft, dry 'tok' when you use something (click feedback): quiet, wooden, never a UI beep
function tap(a, sr) {
  for (let i = 0; i < a.length; i++) { const t = i / sr; a[i] = (Math.sin(2 * Math.PI * 520 * t) * 0.7 + Math.sin(2 * Math.PI * 1180 * t) * 0.25) * Math.exp(-t * 55) + (Math.random() * 2 - 1) * Math.exp(-t * 400) * 0.25; }
}
// a long, shaky breath out (relief at home)
function exhale(a, sr) {
  let y = 0;
  for (let i = 0; i < a.length; i++) { const t = i / sr, u = t / (a.length / sr); y += 0.08 * ((Math.random() * 2 - 1) - y);
    const env = Math.min(1, t / 0.25) * Math.pow(1 - u, 1.6) * (1 + 0.25 * Math.sin(2 * Math.PI * 7 * t) * (1 - u)); a[i] = y * env * 1.6; }
}
function rumble(a) { let b = 0; for (let i = 0; i < a.length; i++) { b = (b + 0.01 * (Math.random() * 2 - 1)) / 1.01; a[i] = b; } }
function crackle(a, sr) { let b = 0; for (let i = 0; i < a.length; i++) { b = (b + 0.02 * (Math.random() * 2 - 1)) / 1.02; a[i] = b * 0.6 + (Math.random() < 0.0006 ? (Math.random() - 0.5) * 2 : 0); } }

// V3.1: footsteps were far too loud. All footsteps (yours, the crowd's, the police, outside the house)
// are scaled by this one number: lower it to make every step quieter.
export const STEP_GAIN = 0.07;
const CORE = ['sewing', 'factory', 'hum', 'room', 'chatter', 'children', 'street', 'schoolBell', 'shiftBell', 'coin', 'fabric', 'door', 'step', 'tap', 'heartbeat'];
const GEN = {
  market: ctx => buffer(ctx, 8, street, 0.5),
  coins: ctx => buffer(ctx, 0.7, coin),
  drone: ctx => buffer(ctx, 8, rumble, 0.5),
  whispers: ctx => buffer(ctx, 8, (a, sr) => voices(a, sr, { count: 4, f0min: 90, f0max: 160, sylMin: 0.15, sylMax: 0.3, gapMax: 1.2, muffle: 0.12 }), 0.5),
  yells: ctx => buffer(ctx, 6, (a, sr) => voices(a, sr, { count: 4, f0min: 140, f0max: 240, sylMin: 0.2, sylMax: 0.4, gapMax: 0.8, muffle: 0.4 })),
  thunder: ctx => buffer(ctx, 3, (a, sr) => { rumble(a); for (let i = 0; i < a.length; i++) a[i] *= Math.exp(-i / sr * 1.2); }),
  fire: ctx => buffer(ctx, 6, crackle, 0.4),
  doorWood: ctx => buffer(ctx, 1.8, door),
  wind: ctx => buffer(ctx, 6, room, 0.5),
  whistle: ctx => buffer(ctx, 1.6, whistle),
  heartbeat: ctx => buffer(ctx, 0.8, heartbeat),
  tap: ctx => buffer(ctx, 0.12, tap),
  exhale: ctx => buffer(ctx, 2.2, exhale),
  sewing: ctx => buffer(ctx, 2, sewing),
  factory: ctx => buffer(ctx, 6, factory, 0.5),
  hum: ctx => buffer(ctx, 4, hum, 0.3),
  room: ctx => buffer(ctx, 6, room, 0.5),
  chatter: ctx => buffer(ctx, 12, (a, sr) => voices(a, sr, { count: 5, f0min: 105, f0max: 230, sylMin: 0.11, sylMax: 0.25, gapMax: 2.4 }), 0.6),
  children: ctx => buffer(ctx, 12, (a, sr) => voices(a, sr, { count: 6, f0min: 250, f0max: 420, sylMin: 0.08, sylMax: 0.18, gapMax: 1.4, laugh: true, muffle: 0.4 }), 0.6),
  street: ctx => buffer(ctx, 8, street, 0.5),
  schoolBell: ctx => buffer(ctx, 3.6, schoolBell),
  shiftBell: ctx => buffer(ctx, 2.2, shiftBell),
  coin: ctx => buffer(ctx, 0.7, coin),
  fabric: ctx => buffer(ctx, 0.4, fabric),
  door: ctx => buffer(ctx, 1.8, door),
  step: ctx => buffer(ctx, 0.18, step),
};

export class AudioEngine {
  constructor(listener) {
    this.listener = listener;
    this.ctx = listener.context;
    this.buffers = {};
    this.ready = false;
  }

  // Only the factory's sounds load before the game starts; the rest (street, nightmare, home)
  // stream in the background while you play, so the first load stays small.
  async init() {
    if (this.ready) return;
    try { await this.ctx.resume(); } catch (e) { /* ignore */ }
    if (!this.manifest) {
      this.manifest = {};
      try { const r = await fetch('audio/manifest.json', { cache: 'no-cache' }); if (r.ok) this.manifest = await r.json(); } catch (e) { /* placeholders only */ }
    }
    await this.load(CORE);
    this.ready = true;
    // everything else, quietly, a few at a time
    this.rest = this.load([...new Set([...Object.keys(GEN), ...Object.keys(this.manifest)])].filter(n => !CORE.includes(n)));
  }
  async load(names) {
    for (const name of names) {
      if (this.buffers[name]) continue;
      const file = this.manifest && this.manifest[name];
      if (file) {
        try { const r = await fetch('audio/' + file); this.buffers[name] = await this.ctx.decodeAudioData(await r.arrayBuffer()); continue; }
        catch (e) { console.warn('[audio] could not load', file, '— using placeholder'); }
      }
      if (GEN[name]) this.buffers[name] = GEN[name](this.ctx);
      await new Promise(r => setTimeout(r, 0));
    }
  }

  setMaster(v) { this.listener.setMasterVolume(v); }

  // looping sound; positional if attached to an object
  loop(name, { object = null, volume = 1, rate = 1, ref = 1.5, offset = Math.random() } = {}) {
    if (!this.buffers[name]) return null;
    const a = object ? new THREE.PositionalAudio(this.listener) : new THREE.Audio(this.listener);
    a.setBuffer(this.buffers[name]);
    a.setLoop(true);
    a.setVolume(volume);
    a.setPlaybackRate(rate);
    if (object) { a.setRefDistance(ref); a.setRolloffFactor(1.4); object.add(a); }
    a.offset = offset * this.buffers[name].duration;
    a.play();
    return a;
  }

  oneShot(name, { object = null, volume = 1, rate = 1, ref = 1.5 } = {}) {
    if (!this.buffers[name]) return;
    if (name === 'step') volume *= STEP_GAIN;   // every footstep goes through this one control
    const a = object ? new THREE.PositionalAudio(this.listener) : new THREE.Audio(this.listener);
    a.setBuffer(this.buffers[name]);
    a.setVolume(volume);
    a.setPlaybackRate(rate);
    if (object) { a.setRefDistance(ref); object.add(a); }
    a.onEnded = () => { a.isPlaying = false; if (a.parent) a.parent.remove(a); };
    a.play();
    return a;
  }

  // smooth volume change
  fade(a, to, seconds = 1) {
    if (!a) return;
    const g = a.gain.gain, now = this.ctx.currentTime;
    g.cancelScheduledValues(now);
    g.setValueAtTime(g.value, now);
    g.linearRampToValueAtTime(to, now + seconds);
  }

  stopAll(list) { list.forEach(a => { if (!a) return; try { if (a.isPlaying) a.stop(); if (a.parent) a.parent.remove(a); } catch (e) { /* ignore */ } }); }
}
