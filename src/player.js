// Desktop first-person controller: pointer-lock mouse look, WASD, simple box collisions,
// a child's light head-bob and breathing sway.
import * as THREE from 'three';
import { damp } from './kit.js';

const OWN_STEPS = 0;   // your own footstep volume: 0 = silent (V3.1)
const _f = new THREE.Vector3(), _h = new THREE.Vector3(), _e = new THREE.Euler();

export class Player {
  constructor({ camera, scene, canvas, audio, settings }) {
    Object.assign(this, { camera, canvas, audio, settings });
    this.dolly = new THREE.Group(); this.dolly.add(camera); scene.add(this.dolly);
    this.yaw = 0; this.pitch = 0; this.eye = 1.3;
    this.canMove = false; this.walk = 1.9; this.run = 3.3;
    this.vel = new THREE.Vector2(); this.bob = 0; this.radius = 0.26;
    this.colliders = []; this.bounds = null; this.keys = {}; this.locked = false; this.qHeld = false;
    this.stepDist = 0; this.moving = false; this.breath = 0; this.onPauseRequest = null;
    this.xr = false; this.xrMove = new THREE.Vector3(); this.xrPoseOK = false; this.xrPending = null;
    this.canRun = true; this.jogAllowed = false; this.speedScale = 1; this.noclip = false;
    addEventListener('keydown', e => { this.keys[e.code] = true; if (e.code === 'KeyQ') this.qHeld = true; });
    addEventListener('keyup', e => { this.keys[e.code] = false; if (e.code === 'KeyQ') this.qHeld = false; });
    addEventListener('blur', () => { this.keys = {}; this.qHeld = false; });
    document.addEventListener('pointerlockchange', () => {
      const was = this.locked; this.locked = document.pointerLockElement === canvas;
      if (was && !this.locked && this.onPauseRequest && !this.xr) this.onPauseRequest();
    });
    document.addEventListener('pointerlockerror', () => { this.dragLook = true; });
    document.addEventListener('mousemove', e => {
      if (!this.locked && !(this.dragLook && (e.buttons & 1))) return;
      const s = 0.0021 * this.settings.sensitivity;
      this.yaw -= e.movementX * s;
      this.pitch = THREE.MathUtils.clamp(this.pitch - e.movementY * s, -1.3, 1.3);
    });
  }
  lock() { try { const p = this.canvas.requestPointerLock(); if (p && p.catch) p.catch(() => { this.dragLook = true; }); } catch (e) { this.dragLook = true; } }
  unlock() { if (document.pointerLockElement) document.exitPointerLock(); }
  place(x, z, yaw, eye) {
    this.vel.set(0, 0); this.yaw = yaw; this.pitch = 0;
    if (this.xr) {
      // in a headset you may stand anywhere in your room and face any way: turn and move the play space
      // so that your head lands on the spot, facing the way the story wants
      if (!this.xrPoseOK) { this.xrPending = { x, z, yaw, eye }; this.dolly.position.set(x, this.dolly.position.y, z); this.dolly.rotation.y = yaw; }
      else {
        _e.setFromQuaternion(this.camera.quaternion, 'YXZ');
        const r = yaw - _e.y, c = this.camera.position;
        this.dolly.rotation.y = r;
        const ox = c.x * Math.cos(r) + c.z * Math.sin(r), oz = -c.x * Math.sin(r) + c.z * Math.cos(r);
        this.dolly.position.set(x - ox, this.dolly.position.y, z - oz);
      }
    } else this.dolly.position.set(x, 0, z);
    if (eye) this.eye = eye; this.apply(0);
  }
  get running() { return !!((this.keys.ShiftLeft || this.keys.ShiftRight) && this.canRun) || (this.xr && this.xrMove.length() > 0.9 && this.canRun); }
  headWorld(out) { return this.camera.getWorldPosition(out); }
  forward(out) { if (this.xr) { this.camera.getWorldDirection(out); out.y = 0; return out.normalize(); } return out.set(-Math.sin(this.yaw), 0, -Math.cos(this.yaw)); }
  apply(dt) {
    this.breath += dt;
    if (this.xr) return;            // in a headset the head is wherever your head is
    const bobY = Math.sin(this.bob * 2) * 0.022 * Math.min(1, this.vel.length() / 2);
    const bobX = Math.cos(this.bob) * 0.012 * Math.min(1, this.vel.length() / 2);
    const br = Math.sin(this.breath * 1.6) * 0.004;
    this.camera.position.set(bobX, this.eye + bobY + br, 0);
    this.camera.rotation.set(this.pitch + Math.sin(this.breath * 0.7) * 0.003, this.yaw, Math.sin(this.bob) * 0.004, 'YXZ');
  }
  update(dt) {
    if (this.xr) {
      // in a headset, where you face and look is wherever your head turns (the story reads yaw and pitch)
      this.camera.getWorldDirection(_f);
      if (_f.x * _f.x + _f.z * _f.z > 1e-6) this.yaw = Math.atan2(-_f.x, -_f.z);
      this.pitch = Math.asin(THREE.MathUtils.clamp(_f.y, -1, 1));
    }
    let ix = 0, iz = 0;
    if (this.canMove) {
      if (this.keys.KeyW || this.keys.ArrowUp) iz -= 1; if (this.keys.KeyS || this.keys.ArrowDown) iz += 1;
      if (this.keys.KeyA || this.keys.ArrowLeft) ix -= 1; if (this.keys.KeyD || this.keys.ArrowRight) ix += 1;
    }
    // Shift runs; out of breath (canRun false) it is only a jog
    const shift = this.keys.ShiftLeft || this.keys.ShiftRight;
    const len = Math.hypot(ix, iz) || 1, sp = (shift ? (this.canRun ? this.run : (this.jogAllowed ? 2.5 : this.walk)) : this.walk) * this.speedScale;
    const s = Math.sin(this.yaw), c = Math.cos(this.yaw);
    let tx = (ix * c + iz * s) / len * sp * (ix || iz ? 1 : 0), tz = (-ix * s + iz * c) / len * sp * (ix || iz ? 1 : 0);
    if (this.xr) {
      // VR: push the stick all the way to run (the same speeds as the keyboard)
      const m = this.xrMove.length(), full = m > 0.9;
      const k = this.canMove ? (full ? (this.canRun ? this.run : (this.jogAllowed ? 2.5 : this.walk)) : this.walk) * this.speedScale : 0;
      tx = this.xrMove.x * k / Math.max(1, m); tz = this.xrMove.z * k / Math.max(1, m);
    }
    this.vel.x = damp(this.vel.x, tx, 10, dt); this.vel.y = damp(this.vel.y, tz, 10, dt);
    const p = this.dolly.position;
    let nx = p.x + this.vel.x * dt, nz = p.z + this.vel.y * dt;
    const r = this.radius;
    if (this.xr) {
      // VR: walls are tested where your head is (you may stand anywhere in your room). The stick never carries
      // you into a wall, but nothing ever pushes you: leaning over a table must not slide the world.
      this.camera.getWorldPosition(_h);
      let ox = _h.x - p.x, oz = _h.z - p.z; if (!(Math.hypot(ox, oz) < 3)) { ox = 0; oz = 0; }
      const hx = p.x + ox, hz = p.z + oz;
      let tx2 = nx + ox, tz2 = nz + oz;
      const live = this.canMove && !this.noclip;
      const solid = (x, z) => { if (live) for (const b of this.colliders) if (x + r > b.minX && x - r < b.maxX && z + r > b.minZ && z - r < b.maxZ) return true; return false; };
      const out = (x, z) => !!(this.bounds && live && (x < this.bounds.minX || x > this.bounds.maxX || z < this.bounds.minZ || z > this.bounds.maxZ));
      if (tx2 !== hx && ((solid(tx2, hz) && !solid(hx, hz)) || (out(tx2, hz) && !out(hx, hz)))) tx2 = hx;
      if (tz2 !== hz && ((solid(tx2, tz2) && !solid(tx2, hz)) || (out(tx2, tz2) && !out(tx2, hz)))) tz2 = hz;
      nx = tx2 - ox; nz = tz2 - oz;
    } else for (const b of (this.canMove && !this.noclip ? this.colliders : [])) {   // seated or scripted: don't get pushed by furniture you sit on
      if (nx + r > b.minX && nx - r < b.maxX && nz + r > b.minZ && nz - r < b.maxZ) {
        // resolve along the axis of least penetration
        const ox = Math.min(nx + r - b.minX, b.maxX - (nx - r)), oz = Math.min(nz + r - b.minZ, b.maxZ - (nz - r));
        if (ox < oz) nx = (p.x < (b.minX + b.maxX) / 2) ? b.minX - r : b.maxX + r;
        else nz = (p.z < (b.minZ + b.maxZ) / 2) ? b.minZ - r : b.maxZ + r;
      }
    }
    if (this.bounds && !this.noclip && !this.xr) { nx = THREE.MathUtils.clamp(nx, this.bounds.minX, this.bounds.maxX); nz = THREE.MathUtils.clamp(nz, this.bounds.minZ, this.bounds.maxZ); }
    const moved = Math.hypot(nx - p.x, nz - p.z);
    p.x = nx; p.z = nz;
    this.moving = moved / Math.max(dt, 1e-4) > 0.3;
    this.bob += moved * 4.2;
    this.stepDist += moved;
    if (this.stepDist > 0.62) { this.stepDist = 0; if (OWN_STEPS > 0) this.audio.oneShot('step', { volume: OWN_STEPS * (this.running ? 2 : 1), rate: 0.65 + Math.random() * 0.1 }); }   // V3.1: switched off (raise OWN_STEPS to bring them back)
    this.apply(dt);
  }
}
