// VR (WebXR): the same scene in a headset. Controllers become the child's floating hands,
// the trigger interacts (point at something, pull to use; hold on the machine to sew),
// left stick walks, right stick turns in 30° steps, and words appear on a board in front of you.
// The page's own overlays (the black and white fades, the eyelids) are drawn inside the headset by a
// "veil" around your eyes, so every blink and fade the desktop shows is seen in VR too.
import * as THREE from 'three';

// the veil: a small sphere around the eyes. It mirrors the page's fade (black or the warm white), the
// eyelids (closing from the top and bottom), and darkens the edge of sight a little while the stick moves you.
const VEIL_VS = `varying vec3 vDir;
void main() { vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`;
const VEIL_FS = `uniform float uFade; uniform vec3 uFadeCol; uniform float uLid; uniform float uTunnel; varying vec3 vDir;
void main() {
  vec3 d = normalize(vDir);
  // eyelids (1 = shut): the gap narrows toward the middle of the view, a little curved like the page's lids
  float open = 1.0 - uLid;
  float edge = open * 0.92 - 0.08 + 0.22 * d.x * d.x * open;
  float lid = uLid > 0.001 ? smoothstep(edge - 0.12, edge + 0.02, abs(d.y)) : 0.0;
  // comfort vignette while the stick carries you: only the outer part of sight
  float ang = acos(clamp(-d.z, -1.0, 1.0));
  float tun = uTunnel * smoothstep(0.42, 0.95, ang);
  float a = max(lid, tun);
  float outA = uFade + (1.0 - uFade) * a;
  vec3 col = outA > 0.0001 ? uFadeCol * uFade / outA : vec3(0.0);
  gl_FragColor = vec4(col, outA);
  #include <colorspace_fragment>
}`;
const smooth = k => k * k * (3 - 2 * k);
const FADE_S = 1.2;                       // the page's fade takes 1.2 s (style.css #fade)

export class XRRig {
  constructor({ renderer, camera, player, interactor, hands, bagCtl, ui }) {
    Object.assign(this, { renderer, camera, player, interactor, hands, bagCtl, ui });
    this.active = false; this.session = null; this.blurred = false; this.frames = 0;
    this.ctrl = [0, 1].map(i => renderer.xr.getController(i));
    this.grip = [0, 1].map(i => renderer.xr.getControllerGrip(i));
    this.hand = [null, null];          // which controller is left / right (from handedness)
    this.state = [0, 1].map(() => ({ trigger: 0, squeeze: 0, stick: [0, 0], turned: false, stickBtn: false }));
    // a thin pointer ray on each controller (only drawn when it points at something usable)
    const rayGeo = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, -1)]);
    this.rays = this.ctrl.map(c => { const l = new THREE.Line(rayGeo, new THREE.LineBasicMaterial({ color: 0xf6e2b8, transparent: true, opacity: 0.55 })); l.visible = false; c.add(l); return l; });
    this.ctrl.forEach((c, i) => {
      c.addEventListener('connected', e => { c.userData.handed = e.data.handedness; c.userData.gp = e.data.gamepad; this._map(); });
      c.addEventListener('disconnected', () => { c.userData.handed = null; c.userData.gp = null; this._map(); });
      c.addEventListener('selectstart', () => {
        if (this.endReady) { this.exit(); return; }          // the end card: the trigger takes the headset back to the page
        if (this.blurred) return;
        this.pressFrom = i; this.interactor.pressXR(c);
        if (this.interactor.pressed) this.buzz(i);          // the controller answers every use with a small tap
      });
      c.addEventListener('selectend', () => { this.interactor.releaseXR(); });
      player.dolly.add(c, this.grip[i]);
    });
    // caption board: thoughts, subtitles and hints floating in front of you
    this.capCanvas = document.createElement('canvas'); this.capCanvas.width = 1024; this.capCanvas.height = 384;
    this.capTex = new THREE.CanvasTexture(this.capCanvas); this.capTex.colorSpace = THREE.SRGBColorSpace;
    this.board = new THREE.Mesh(new THREE.PlaneGeometry(1.0, 0.375), new THREE.MeshBasicMaterial({ map: this.capTex, transparent: true, depthTest: false, depthWrite: false, fog: false, toneMapped: false }));
    this.board.position.set(0, -0.32, -1.1); this.board.rotation.x = -0.18; this.board.renderOrder = 99; this.board.visible = false;
    this.board.frustumCulled = false;
    camera.add(this.board);
    this.lastCap = '';
    // the veil (fades, eyelids, comfort vignette)
    this.veilMat = new THREE.ShaderMaterial({
      vertexShader: VEIL_VS, fragmentShader: VEIL_FS, transparent: true, depthTest: false, depthWrite: false, side: THREE.BackSide, fog: false, toneMapped: false,
      uniforms: { uFade: { value: 0 }, uFadeCol: { value: new THREE.Color(0x000000) }, uLid: { value: 0 }, uTunnel: { value: 0 } },
    });
    this.veil = new THREE.Mesh(new THREE.SphereGeometry(0.12, 24, 16), this.veilMat);
    this.veil.renderOrder = 100; this.veil.frustumCulled = false; this.veil.visible = false;
    camera.add(this.veil);
    this.fadeLin = 0; this.tunnel = 0;
    this.fadeEl = document.getElementById('fade'); this.lidEl = document.getElementById('eyelids');
    this.white = new THREE.Color(0xf3e6cc); this.black = new THREE.Color(0x000000);
    // the end card, shown in the dark in front of you before you take the headset off
    this.endCanvas = document.createElement('canvas'); this.endCanvas.width = 1024; this.endCanvas.height = 1024;
    this.endTex = new THREE.CanvasTexture(this.endCanvas); this.endTex.colorSpace = THREE.SRGBColorSpace;
    this.endBoard = new THREE.Mesh(new THREE.PlaneGeometry(1.5, 1.5), new THREE.MeshBasicMaterial({ map: this.endTex, transparent: true, depthTest: false, depthWrite: false, fog: false, toneMapped: false }));
    this.endBoard.renderOrder = 101; this.endBoard.visible = false; this.endBoard.frustumCulled = false;
    player.dolly.add(this.endBoard);
    this.endMode = false; this.endReady = false; this.endT = 0; this.endAlpha = {};
  }
  _map() {
    this.hand = [null, null];
    this.ctrl.forEach((c, i) => { if (c.userData.handed === 'left') this.hand[0] = i; if (c.userData.handed === 'right') this.hand[1] = i; });
    if (this.hand[1] === null) this.hand[1] = this.hand[0] === 0 ? 1 : 0;
    if (this.hand[0] === null) this.hand[0] = this.hand[1] === 0 ? 1 : 0;
    if (this.active) this._attach();
  }
  _attach() {
    this.hands.xr = { grips: [this.grip[this.hand[0]], this.grip[this.hand[1]]], squeeze: [0, 0], trigger: [0, 0] };
    this.bagCtl.setHolder(this.grip[this.hand[1]], true);
  }
  static async supported() {
    try { return !!(navigator.xr && await navigator.xr.isSessionSupported('immersive-vr')); } catch (e) { return false; }
  }
  // must be called straight from the click (the browser only opens the headset from a user gesture)
  async enter(onStart, onEnd) {
    const session = await navigator.xr.requestSession('immersive-vr', { optionalFeatures: ['local-floor', 'bounded-floor'] });
    this.renderer.xr.setFramebufferScaleFactor(1.0);
    // most headsets give a floor-level space; if one doesn't, fall back to 'local' (the height is set from your eyes anyway)
    this.refSpace = 'local-floor';
    try { await session.requestReferenceSpace('local-floor'); } catch (e) { this.refSpace = 'local'; }
    this.renderer.xr.setReferenceSpaceType(this.refSpace);
    await this.renderer.xr.setSession(session);
    this.session = session; this.active = true; this.calib = 1; this.frames = 0; this.blurred = false; this._lastEye = undefined;
    this.player.xrPoseOK = false; this.player.xrPending = null;
    this.endMode = false; this.endReady = false; this.endBoard.visible = false;
    this.fadeLin = 1; this.tunnel = 0;                    // open on black; the story fades in
    this._map(); this._attach();
    this.interactor.xrMode = true;
    this.board.visible = true; this.veil.visible = true;
    this.lastCap = '';
    session.addEventListener('visibilitychange', () => {
      // the headset's system menu: hold the story and the sound until you come back
      const vis = session.visibilityState === 'visible';
      this.blurred = !vis;
      const ac = THREE.AudioContext.getContext();
      if (!vis) { this.interactor.releaseXR(); try { ac.suspend(); } catch (e) { /* ignore */ } }
      else { try { ac.resume(); } catch (e) { /* ignore */ } }
    });
    session.addEventListener('end', () => {
      this.active = false; this.session = null; this.hands.xr = null; this.interactor.xrMode = false; this.interactor.release();
      this.board.visible = false; this.veil.visible = false; this.endBoard.visible = false; this.endMode = false; this.endReady = false;
      this.rays.forEach(r => { r.visible = false; });
      this.blurred = false;
      try { THREE.AudioContext.getContext().resume(); } catch (e) { /* ignore */ }
      this.bagCtl.setHolder(this.camera, false);
      this.player.dolly.position.y = 0; this.player.dolly.rotation.y = 0;   // the desktop view turns the camera, not the play space
      this.player.xrPending = null; this.player.xrPoseOK = false;
      onEnd && onEnd();
    });
    onStart && onStart();
  }
  buzz(i, strength = 0.35, ms = 35) {
    const gp = this.ctrl[i] && this.ctrl[i].userData.gp, h = gp && gp.hapticActuators && gp.hapticActuators[0];
    try { if (h && h.pulse) h.pulse(strength, ms); } catch (e) { /* no haptics */ }
  }
  exit() { if (this.session) { this.endReady = false; this.session.end().catch(() => { /* already ended */ }); } }
  recalibrate() { this.calib = 1; }
  // the end card: read the page's end card line by line and show it in the dark
  showEnd() {
    if (!this.active) return;
    this.endMode = true; this.endReady = false; this.endT = 0; this.finT = 0; this.endAlpha = {}; this._endKey = '';
    // world-locked, at eye height about 1.7 m in front of where you are looking
    const head = new THREE.Vector3(), fwd = new THREE.Vector3();
    this.camera.getWorldPosition(head); this.camera.getWorldDirection(fwd); fwd.y = 0;
    if (fwd.lengthSq() < 1e-4) fwd.set(0, 0, -1); fwd.normalize();
    const p = head.clone().addScaledVector(fwd, 1.7);
    this.player.dolly.updateWorldMatrix(true, false);
    this.endBoard.position.copy(this.player.dolly.worldToLocal(p));
    const look = head.clone(); look.y = p.y;
    this.endBoard.lookAt(look);   // a mesh's lookAt turns its front (+Z) toward the target (the play space's turn is accounted for)
    this.endBoard.visible = true;
    this.board.visible = false;
  }
  update(dt) {
    if (!this.active) return;
    const pl = this.player;
    this.frames++;
    // read the controllers (xr-standard mapping: 0 trigger, 1 grip, 3 thumbstick press; sticks on axes 2/3, or 0/1 on touchpad controllers)
    this.ctrl.forEach((c, i) => {
      const gp = c.userData.gp, st = this.state[i];
      if (!gp) { st.trigger = 0; st.squeeze = 0; st.stick = [0, 0]; return; }
      const b = gp.buttons || [], ax = gp.axes || [];
      st.trigger = b[0] ? b[0].value : 0;
      st.squeeze = b[1] ? b[1].value : 0;
      st.stick = ax.length >= 4 ? [ax[2] || 0, ax[3] || 0] : [ax[0] || 0, ax[1] || 0];
      // press a thumbstick: set your height again (if you sat down or stood up)
      const sb = !!(b[3] && b[3].pressed);
      if (sb && !st.stickBtn) this.recalibrate();
      st.stickBtn = sb;
    });
    if (this.hands.xr) {
      this.hands.xr.squeeze = [this.state[this.hand[0]].squeeze, this.state[this.hand[1]].squeeze];
      this.hands.xr.trigger = [this.state[this.hand[0]].trigger, this.state[this.hand[1]].trigger];
    }
    // child height: place the floor so your eyes are where the child's are (re-done when the child stands up)
    const headY = this.camera.position.y;
    const posed = this.frames > 2 && (this.refSpace === 'local' || headY > 0.3);
    if (Math.abs(this._lastEye - pl.eye) > 0.02) { this.calib = 1; }
    if (this.calib > 0 && posed) {
      pl.dolly.position.y = pl.eye - headY;
      this.calib = 0; this._lastEye = pl.eye;
    }
    // the first real head pose: put you where the story placed you, facing the way it wants
    if (posed && !pl.xrPoseOK) { pl.xrPoseOK = true; if (pl.xrPending) { const q = pl.xrPending; pl.xrPending = null; pl.place(q.x, q.z, q.yaw, q.eye); } }
    this._veil(dt);
    if (this.endMode) { this.rays.forEach(r => { r.visible = false; }); this._end(dt); pl.xrMove.set(0, 0, 0); return; }
    if (this.blurred) { pl.xrMove.set(0, 0, 0); return; }
    // left stick: walk (where you look); right stick: snap-turn 30°
    const L = this.state[this.hand[0]], Rt = this.state[this.hand[1]];
    const fwd = new THREE.Vector3(); this.camera.getWorldDirection(fwd); fwd.y = 0;
    if (fwd.lengthSq() < 1e-6) fwd.set(0, 0, -1); fwd.normalize();
    const right = new THREE.Vector3(-fwd.z, 0, fwd.x);
    const dz = Math.abs(L.stick[1]) > 0.15 ? -L.stick[1] : 0, dx = Math.abs(L.stick[0]) > 0.15 ? L.stick[0] : 0;
    pl.xrMove.set(0, 0, 0).addScaledVector(fwd, dz).addScaledVector(right, dx);
    const turn = Rt.stick[0];
    if (Math.abs(turn) > 0.7 && !Rt.turned) {
      Rt.turned = true;
      // rotate the dolly about the head, not the play-area centre
      const head = new THREE.Vector3(); this.camera.getWorldPosition(head);
      const a = -Math.sign(turn) * Math.PI / 6;
      pl.dolly.position.sub(head).applyAxisAngle(new THREE.Vector3(0, 1, 0), a).add(head);
      pl.dolly.rotation.y += a;
    }
    if (Math.abs(turn) < 0.3) Rt.turned = false;
    // pointer rays: show only when they rest on something usable
    let label = '';
    this.ctrl.forEach((c, i) => {
      const hit = this.interactor.peekXR(c);
      this.rays[i].visible = !!hit; if (hit) { this.rays[i].scale.z = hit.distance; if (!label && hit.target.label) label = hit.target.label; }
    });
    // caption board
    const cap = ['thought', 'subtitle', 'hint'].map(id => {
      const el = document.getElementById(id); if (!el || !el.classList.contains('on')) return null;
      const who = el.querySelector('.who'), say = el.querySelector('.say');
      return { who: who ? who.textContent : '', text: say ? say.textContent : el.textContent };
    });
    const st = this.ui.state || {};
    const prog = st.progress > 0.001 && st.progress < 1 ? Math.round(st.progress * 50) / 50 : 0;
    const stam = st.stamina !== null && st.stamina !== undefined && st.stamina < 0.98 ? Math.round(st.stamina * 50) / 50 : -1;
    const key = JSON.stringify([cap, label, prog, stam]);
    if (key !== this.lastCap) { this.lastCap = key; this._draw(cap, label, prog, stam); }
  }
  // mirror the page's fade and eyelids, plus the comfort vignette
  _veil(dt) {
    const f = this.fadeEl, on = this.endMode || !!(f && f.classList.contains('on'));   // the end card sits in the dark
    this.fadeLin = THREE.MathUtils.clamp(this.fadeLin + (on ? 1 : -1) * dt / FADE_S, 0, 1);
    const u = this.veilMat.uniforms;
    u.uFade.value = smooth(this.fadeLin);
    u.uFadeCol.value.copy(!this.endMode && f && f.classList.contains('white') ? this.white : this.black);
    let lid = 0;
    if (this.lidEl) { lid = parseFloat(this.lidEl.style.getPropertyValue('--lid')) || 0; }
    u.uLid.value = THREE.MathUtils.clamp(lid, 0, 1);
    const pl = this.player, speed = pl.vel ? pl.vel.length() : 0;
    const want = pl.xrMove && pl.xrMove.lengthSq() > 0.0001 ? Math.min(1, speed / 3.3) * 0.55 : 0;
    this.tunnel += (want - this.tunnel) * Math.min(1, dt * 6);
    u.uTunnel.value = this.tunnel;
  }
  _wrap(g, text, maxW) {
    const words = String(text).split(/\s+/).filter(Boolean), lines = []; let cur = '';
    for (const w of words) { const t = cur ? cur + ' ' + w : w; if (g.measureText(t).width > maxW && cur) { lines.push(cur); cur = w; } else cur = t; }
    if (cur) lines.push(cur);
    return lines;
  }
  _draw([thought, subtitle, hint], label, prog, stam) {
    const g = this.capCanvas.getContext('2d'), W = this.capCanvas.width, H = this.capCanvas.height;
    g.clearRect(0, 0, W, H);
    const maxW = W - 120;
    // build the blocks, shrinking the type if everything would not fit
    let scale = 1, blocks = [], total = 0;
    for (let tries = 0; tries < 4; tries++) {
      blocks = []; total = 0;
      const add = (text, font, size, color, upper) => {
        g.font = font.replace('#', Math.round(size * scale) + 'px');
        const lines = this._wrap(g, upper ? String(text).toUpperCase() : text, maxW);
        const lh = Math.round(size * scale * 1.3);
        blocks.push({ lines, font: g.font, color, lh }); total += lines.length * lh + 10;
      };
      if (label) add('▸ ' + label, '400 # "IBM Plex Mono", ui-monospace, monospace', 24, '#f3ead8');
      if (thought && thought.text) add(thought.text, '300 # "Work Sans", system-ui, sans-serif', 40, '#f3ead8');
      if (subtitle && subtitle.text) { if (subtitle.who) add(subtitle.who, '500 # "IBM Plex Mono", ui-monospace, monospace', 20, '#c9a46a', true); add(subtitle.text, '400 # "Work Sans", system-ui, sans-serif', 34, '#e8dcc0'); }
      if (hint && hint.text) add(hint.text, '400 # "IBM Plex Mono", ui-monospace, monospace', 27, '#d8d0c0');
      const bars = (prog > 0 ? 1 : 0) + (stam >= 0 ? 1 : 0);
      total += bars * 22;
      if (total <= H - 60) break;
      scale *= 0.85;
    }
    const bars = [];
    if (prog > 0) bars.push({ v: prog, c: '#f3ead8' });
    if (stam >= 0) bars.push({ v: stam, c: '#d23a2c' });
    if (!blocks.length && !bars.length) { this.capTex.needsUpdate = true; return; }
    const top = Math.max(20, (H - total) / 2 - 10);
    g.fillStyle = 'rgba(10,8,6,0.55)'; g.beginPath();
    const bh = Math.min(H - top + 14 - 6, total + 28);
    if (g.roundRect) g.roundRect(30, top - 14, W - 60, bh, 24); else g.rect(30, top - 14, W - 60, bh);
    g.fill();
    g.textAlign = 'center'; g.textBaseline = 'middle';
    let y = top + 6;
    for (const b of blocks) {
      g.font = b.font; g.fillStyle = b.color;
      for (const l of b.lines) { g.fillText(l, W / 2, y + b.lh / 2); y += b.lh; }
      y += 10;
    }
    // hold-to-sew progress and the chase's breath, as thin bars
    for (const bar of bars) {
      const bw = 300, bx = (W - bw) / 2;
      g.fillStyle = 'rgba(236,228,214,0.15)'; g.fillRect(bx, y + 6, bw, 6);
      g.fillStyle = bar.c; g.fillRect(bx, y + 6, bw * Math.max(0, Math.min(1, bar.v)), 6);
      y += 22;
    }
    this.capTex.needsUpdate = true;
  }
  // the end card: the same lines as the page (same type, the numbers in red), appearing one after another
  _end(dt) {
    this.endT += dt;
    const ids = ['stat-0a', 'stat-0b', 'stat-1', 'stat-2', 'stat-3', 'stat-src', 'stat-fin'];
    const lines = [];
    let any = false, finOn = false;
    for (const id of ids) {
      const el = document.getElementById(id);
      if (!el || el.hidden) continue;
      const on = el.classList.contains('on');
      const a = this.endAlpha[id] = THREE.MathUtils.clamp((this.endAlpha[id] || 0) + (on ? dt / 1.6 : -dt / 0.3), 0, 1);
      if (a < 1 && on) any = true;
      if (id === 'stat-fin') {
        finOn = on;
        const h = el.querySelector('h2'), ps = el.querySelectorAll('p');
        if (h) lines.push({ a, kind: 'title', el: h });
        ps.forEach(p => lines.push({ a, kind: 'small', el: p }));
      } else lines.push({ a, kind: id === 'stat-src' ? 'small' : 'stat', el });
    }
    if (finOn) { this.finT = (this.finT || 0) + dt; if (this.finT > 2.5 && !this.endReady) { this.endReady = true; any = true; } }
    else this.finT = 0;
    const key = lines.map(l => l.a.toFixed(2)).join(',') + this.endReady;
    if (!any && key === this._endKey) return;
    this._endKey = key;
    const g = this.endCanvas.getContext('2d'), W = 1024, H = 1024;
    g.clearRect(0, 0, W, H);
    g.textAlign = 'left'; g.textBaseline = 'middle';
    const STYLE = {
      stat: { size: 46, fam: '"Instrument Serif", Georgia, serif', color: '#ece4d6', lh: 58, gap: 14 },
      small: { size: 24, fam: '"IBM Plex Mono", ui-monospace, monospace', color: 'rgba(236,228,214,0.62)', lh: 32, gap: 8 },
      title: { size: 72, fam: '"Instrument Serif", Georgia, serif', color: '#ece4d6', lh: 84, gap: 14 },
    };
    // words with their own colour and slant (<strong> is red, <em> italic), wrapped and centred
    const laid = []; let total = 0;
    for (const l of lines) {
      const st = STYLE[l.kind], toks = [];
      const walk = (node, strong, em) => node.childNodes.forEach(n => {
        if (n.nodeType === 3) n.textContent.split(/(\s+)/).forEach(w => { if (w) toks.push({ w, strong, em }); });
        else if (n.nodeType === 1) walk(n, strong || n.nodeName === 'STRONG', em || n.nodeName === 'EM');
      });
      walk(l.el, false, false);
      const font = t => (t.em ? 'italic ' : '') + '400 ' + st.size + 'px ' + st.fam;
      const rows = []; let row = [], rw = 0;
      for (const t of toks) {
        g.font = font(t); const w = g.measureText(t.w).width; const space = /^\s+$/.test(t.w);
        if (!space && rw + w > W - 120 && row.length) { while (row.length && /^\s+$/.test(row[row.length - 1].w)) rw -= row.pop().width; rows.push({ row, rw }); row = []; rw = 0; }
        if (space && !row.length) continue;
        row.push({ ...t, width: w, font: font(t) }); rw += w;
      }
      while (row.length && /^\s+$/.test(row[row.length - 1].w)) rw -= row.pop().width;
      if (row.length) rows.push({ row, rw });
      laid.push({ ...l, st, rows }); total += rows.length * st.lh + st.gap + (l.kind === 'title' ? 24 : 0);
    }
    if (this.endReady) total += 70;
    let y = Math.max(30, (H - total) / 2);
    for (const l of laid) {
      if (l.kind === 'title') y += 24;
      g.globalAlpha = l.a;
      for (const r of l.rows) {
        let x = (W - r.rw) / 2;
        for (const t of r.row) { g.font = t.font; g.fillStyle = t.strong ? '#d23a2c' : l.st.color; g.fillText(t.w, x, y + l.st.lh / 2); x += t.width; }
        y += l.st.lh;
      }
      y += l.st.gap;
    }
    if (this.endReady) {
      g.globalAlpha = 1; g.textAlign = 'center'; g.font = '400 26px "IBM Plex Mono", ui-monospace, monospace'; g.fillStyle = '#d8d0c0';
      g.fillText('Pull the trigger to leave VR', W / 2, y + 44);
    }
    g.globalAlpha = 1;
    this.endTex.needsUpdate = true;
  }
}
