// The Long Way Home — created by Sicheng Zheng. © 2026 Sicheng Zheng. All rights reserved.
// The player: one rig that works with mouse + keyboard and with a VR headset.
// The "dolly" is the player's body in the world; the camera (= head) sits inside it.
import * as THREE from 'three';
import { settings } from './settings.js';

const v = new THREE.Vector3(), fwd = new THREE.Vector3(), right = new THREE.Vector3();

export class Player {
  constructor({ renderer, camera, scene, canvas, interactor, audio }) {
    Object.assign(this, { renderer, camera, scene, canvas, interactor, audio });
    this.dolly = new THREE.Group();
    this.dolly.add(camera);
    scene.add(this.dolly);

    this.yaw = 0; this.pitch = 0;
    this.eye = 1.25;            // seated child eye height (desktop)
    this.canMove = false;
    this.walkSpeed = 2.0;       // metres / second
    this.runSpeed = 3.6;        // hold Shift
    this.jogSpeed = 2.8;        // holding Shift while out of breath
    this.speedScale = 1;        // spaces can slow you down (e.g. a heavy bag) or limit running
    this.canRun = true;
    this.vel = new THREE.Vector2();   // smoothed horizontal velocity
    this.noclip = false;        // explore mode: fly through walls
    this.bob = 0;               // head-bob phase
    this.radius = 0.28;
    this.colliders = [];        // {minX,maxX,minZ,maxZ}
    this.bounds = null;         // {minX,maxX,minZ,maxZ}
    this.keys = {};
    this.locked = false;
    this.bagHeld = false;       // Q held
    this.stepDist = 0;
    this.onPauseRequest = null;

    this._bindDesktop();
    this._setupControllers();
  }

  get inVR() { return this.renderer.xr.isPresenting; }

  // ---------- placement ----------
  place(x, z, yaw, eye) {
    this.dolly.position.set(x, this.noclip ? this.dolly.position.y : 0, z);
    this.vel.set(0, 0);
    this.yaw = yaw; this.pitch = 0;
    this.dolly.rotation.set(0, this.inVR ? yaw : 0, 0);
    if (eye) this.eye = eye;
    if (!this.inVR) this._applyDesktopView();
  }

  headWorld(out) { return this.camera.getWorldPosition(out); }

  // ---------- desktop ----------
  _bindDesktop() {
    addEventListener('keydown', e => {
      this.keys[e.code] = true;
      if (e.code === 'KeyQ') this.bagHeld = true;
    });
    addEventListener('keyup', e => {
      this.keys[e.code] = false;
      if (e.code === 'KeyQ') this.bagHeld = false;
    });
    addEventListener('blur', () => { this.keys = {}; this.bagHeld = false; });
    this.vrRun = false;
    document.addEventListener('pointerlockchange', () => {
      const was = this.locked;
      this.locked = document.pointerLockElement === this.canvas;
      if (was && !this.locked && this.onPauseRequest) this.onPauseRequest();
    });
    // if the browser refuses to lock the mouse (some embedded pages do), fall back to drag-to-look
    document.addEventListener('pointerlockerror', () => { this.dragLook = true; });
    addEventListener('keydown', e => { if (e.code === 'Escape' && this.dragLook && !this.locked && this.onPauseRequest) this.onPauseRequest(); });
    document.addEventListener('mousemove', e => {
      if (this.inVR) return;
      if (!this.locked && !(this.dragLook && (e.buttons & 1) && e.target === this.canvas)) return;
      const s = 0.0022 * settings.sensitivity;
      this.yaw -= e.movementX * s;
      this.pitch = THREE.MathUtils.clamp(this.pitch - e.movementY * s, -1.35, 1.35);
    });
    this.canvas.addEventListener('mousedown', e => {
      if (e.button !== 0 || this.inVR) return;
      if (!this.locked && !this.dragLook) return;
      this.interactor.press('mouse', this.interactor.hover);
    });
    addEventListener('mouseup', e => { if (e.button === 0) this.interactor.release('mouse'); });
  }

  lock() {
    try {
      const p = this.canvas.requestPointerLock();
      if (p && p.catch) p.catch(() => {});
    } catch (e) { /* not available */ }
  }
  unlock() { if (document.pointerLockElement) document.exitPointerLock(); }

  _applyDesktopView() {
    this.dolly.rotation.set(0, this.yaw, 0);
    this.camera.position.set(0, this.eye + (this._bobY || 0), 0);
    this.camera.rotation.set(this.pitch, 0, 0, 'YXZ');
  }

  // ---------- VR ----------
  _setupControllers() {
    const xr = this.renderer.xr;
    this.controllers = [];
    const lineGeo = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, -1)]);
    const handMat = new THREE.MeshStandardMaterial({ color: 0x6b4a33, roughness: 0.8 });
    for (let i = 0; i < 2; i++) {
      const c = xr.getController(i);
      const line = new THREE.Line(lineGeo, new THREE.LineBasicMaterial({ color: 0xd23a2c, transparent: true, opacity: 0.6 }));
      line.scale.z = 1.2; line.name = 'ray';
      c.add(line);
      const grip = xr.getControllerGrip(i);
      // simple small child's hand stand-in
      const hand = new THREE.Group();
      const palm = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.025, 0.08), handMat);
      const fingers = new THREE.Mesh(new THREE.BoxGeometry(0.055, 0.02, 0.05), handMat);
      fingers.position.set(0, 0.004, -0.06); fingers.rotation.x = 0.35;
      hand.add(palm, fingers); hand.rotation.x = -0.6;
      grip.add(hand);
      const entry = { controller: c, grip, line, source: null, handed: 'none', index: i };
      c.addEventListener('connected', e => { entry.source = e.data; entry.handed = e.data.handedness; });
      c.addEventListener('disconnected', () => { entry.source = null; });
      const down = () => this.interactor.press('vr' + i, this.interactor.vrHover[i]);
      const up = () => this.interactor.release('vr' + i);
      c.addEventListener('selectstart', down); c.addEventListener('selectend', up);
      c.addEventListener('squeezestart', down); c.addEventListener('squeezeend', up);
      this.dolly.add(c, grip);
      this.controllers.push(entry);
    }
    this.snapCooldown = 0;
  }

  // the hand that carries the bag (left if we know it)
  bagHand() {
    return (this.controllers.find(c => c.handed === 'left') || this.controllers[0]).grip;
  }

  enterVR() {
    this.camera.position.set(0, 0, 0);
    this.camera.rotation.set(0, 0, 0);
    this.dolly.rotation.set(0, this.yaw, 0);
  }
  exitVR() {
    this.camera.getWorldDirection(v);
    this.yaw = Math.atan2(-v.x, -v.z); this.pitch = 0;
    this._applyDesktopView();
  }

  // ---------- movement ----------
  _collide(p) {
    const r = this.radius;
    for (const b of this.colliders) {
      const cx = THREE.MathUtils.clamp(p.x, b.minX, b.maxX), cz = THREE.MathUtils.clamp(p.z, b.minZ, b.maxZ);
      const dx = p.x - cx, dz = p.z - cz, d2 = dx * dx + dz * dz;
      if (d2 < r * r) {
        if (d2 > 1e-8) { const d = Math.sqrt(d2); p.x = cx + dx / d * r; p.z = cz + dz / d * r; }
        else { // centre inside box: push out the short way
          const opts = [[b.minX - r - p.x, 0], [b.maxX + r - p.x, 0], [0, b.minZ - r - p.z], [0, b.maxZ + r - p.z]];
          opts.sort((a, b2) => Math.hypot(...a) - Math.hypot(...b2));
          p.x += opts[0][0]; p.z += opts[0][1];
        }
      }
    }
    if (this.bounds) {
      p.x = THREE.MathUtils.clamp(p.x, this.bounds.minX + r, this.bounds.maxX - r);
      p.z = THREE.MathUtils.clamp(p.z, this.bounds.minZ + r, this.bounds.maxZ - r);
    }
  }

  get shift() { return !!(this.keys.ShiftLeft || this.keys.ShiftRight || this.vrRun); }
  get running() { return this.canRun && this.shift; }
  get moveSpeed() { if (this.noclip) return this.shift ? 7 : 3; return this.running ? this.runSpeed : (this.shift && this.jogAllowed ? this.jogSpeed : this.walkSpeed); }

  _move(dx, dz) {
    if (!dx && !dz) return;
    // move the head position, then shift the dolly by the same amount (head ≠ dolly origin in VR)
    this.headWorld(v);
    const before = v.clone();
    v.x += dx; v.z += dz;
    if (!this.noclip) { this._collide(v); this._collide(v); }
    const mx = v.x - before.x, mz = v.z - before.z;
    this.dolly.position.x += mx; this.dolly.position.z += mz;
    this.stepDist += Math.hypot(mx, mz);
    if (!this.noclip && this.stepDist > (this.running ? 0.75 : 0.6)) {
      this.stepDist = 0;
      this.audio && this.audio.ready && this.audio.oneShot('step', { volume: 0.35, rate: 0.9 + Math.random() * 0.2 });
    }
  }

  update(dt) {
    if (this.inVR) this._updateVR(dt);
    else this._updateDesktop(dt);
  }

  _updateDesktop(dt) {
    let x = 0, z = 0;
    if (this.canMove) {
      if (this.keys.KeyW || this.keys.ArrowUp) z -= 1;
      if (this.keys.KeyS || this.keys.ArrowDown) z += 1;
      if (this.keys.KeyA || this.keys.ArrowLeft) x -= 1;
      if (this.keys.KeyD || this.keys.ArrowRight) x += 1;
    }
    const len = Math.hypot(x, z);
    const speed = this.moveSpeed * this.speedScale;
    // target velocity in world space, then ease toward it (no instant start/stop)
    let tx = 0, tz = 0;
    if (len) {
      x /= len; z /= len;
      const c = Math.cos(this.yaw), sn = Math.sin(this.yaw);
      tx = (x * c + z * sn) * speed; tz = (-x * sn + z * c) * speed;
    }
    const k = 1 - Math.exp(-dt * (len ? 10 : 14));
    this.vel.x += (tx - this.vel.x) * k; this.vel.y += (tz - this.vel.y) * k;
    if (this.vel.lengthSq() < 1e-5) this.vel.set(0, 0);
    this._move(this.vel.x * dt, this.vel.y * dt);
    if (this.noclip) { // fly up / down
      const vy = (this.keys.Space ? 1 : 0) - (this.keys.KeyZ ? 1 : 0);
      this.dolly.position.y = Math.max(-0.8, this.dolly.position.y + vy * (this.shift ? 5 : 2.2) * dt);
    }
    // gentle head bob while walking
    const sp = this.vel.length();
    this.bob += dt * sp * 4.2;
    this._bobY = Math.sin(this.bob) * 0.018 * Math.min(1, sp / 2);
    this._applyDesktopView();
  }

  _updateVR(dt) {
    this.snapCooldown -= dt;
    for (const c of this.controllers) {
      const gp = c.source && c.source.gamepad;
      if (!gp || gp.axes.length < 2) continue;
      const ax = gp.axes.length >= 4 ? gp.axes[2] : gp.axes[0];
      const ay = gp.axes.length >= 4 ? gp.axes[3] : gp.axes[1];
      if (c.handed === 'right') {
        if (Math.abs(ax) > 0.6 && this.snapCooldown <= 0) { this.snapTurn(ax > 0 ? -Math.PI / 6 : Math.PI / 6); this.snapCooldown = 0.35; }
      } else if (this.canMove && Math.hypot(ax, ay) > 0.15) {
        this.camera.getWorldDirection(fwd); fwd.y = 0; fwd.normalize();
        right.crossVectors(fwd, this.camera.up).normalize();
        const s = this.moveSpeed * this.speedScale * dt;
        this._move((fwd.x * -ay + right.x * ax) * s, (fwd.z * -ay + right.z * ax) * s);
      }
    }
  }

  snapTurn(a) {
    this.headWorld(v);
    const before = v.clone();
    this.dolly.rotation.y += a; this.yaw = this.dolly.rotation.y;
    this.dolly.updateMatrixWorld(true);
    this.headWorld(v);
    this.dolly.position.x += before.x - v.x; this.dolly.position.z += before.z - v.z;
  }

  updateControllers() {
    if (!this.inVR) return;
    this.controllers.forEach((c, i) => {
      const hit = this.interactor.updateController(i, c.controller);
      c.line.material.opacity = hit ? 0.95 : 0.35;
      c.line.scale.z = hit ? 1.6 : 1.0;
    });
  }
}
