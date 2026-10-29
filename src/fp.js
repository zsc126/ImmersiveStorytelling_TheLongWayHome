// First-person body: two floating hands (How to Fish style; in VR they become the controllers)
// and the cloth bag the child carries.
import * as THREE from 'three';
import { damp, lerp, ease, makeBag, setBagOpen } from './kit.js';
import { makeFPHand, applyHandCurl, HAND_POSES, HAND_SCALE } from './people.js';

const _e = new THREE.Euler(), _q = new THREE.Quaternion(), _v = new THREE.Vector3(), _m = new THREE.Matrix4();
const _w = new THREE.Vector3(), _w2 = new THREE.Vector3(), _s = new THREE.Vector3(), _d = new THREE.Vector3(), _up = new THREE.Vector3(0, 1, 0);

// A hand "spec" says where a hand should be:
//   { key, mode: 'world' | 'cam' | 'obj', pos: Vector3, rot: Euler (order YXZ), pose: 'grip', obj, blend }
//   world: pos/rot in world space · cam: relative to the camera · obj: relative to an object
// Calling set() every frame with the same key just follows the (possibly moving) target;
// a new key starts a short, eased move from wherever the hand is now.
export class Hands {
  constructor(scene, camera, { skin, sleeve } = {}) {
    this.camera = camera;
    this.group = new THREE.Group(); scene.add(this.group);
    this.h = [-1, 1].map(side => {
      const mesh = makeFPHand(side, { skin, sleeve });
      mesh.visible = false; this.group.add(mesh);
      // forearm: from the wrist back toward the shoulder, so it always leaves the view at the bottom
      // a solid (capped) tapered prism, rendered from both sides so it never looks hollow
      const fg = new THREE.CylinderGeometry(0.03, 0.023, 1, 7, 1, false).rotateY(Math.PI / 7).translate(0, 0.5, 0);
      const arm = new THREE.Mesh(fg, new THREE.MeshStandardMaterial({ color: skin || 0x8a5a3c, flatShading: true, roughness: 0.75, side: THREE.DoubleSide }));
      arm.scale.setScalar(HAND_SCALE); arm.castShadow = false;   // the shadow body casts your arms' shadow
      mesh.traverse(o => { if (o.isMesh) o.castShadow = false; }); arm.visible = false; arm.renderOrder = 2; arm.frustumCulled = false; this.group.add(arm);
      return { side, mesh, arm, spec: null, key: null, k: 1, blend: 0.3, pos: new THREE.Vector3(), quat: new THREE.Quaternion(), from: new THREE.Vector3(), fromQ: new THREE.Quaternion(), curl: HAND_POSES.relax.slice(), shown: false };
    });
    this.xr = null;          // { grips: [left, right], squeeze: [0..1, 0..1], trigger: [0..1, 0..1] } while in a headset
  }
  set(side, spec) {
    const h = this.h[side];
    h.spec = spec;
    if (spec.key !== h.key) { h.key = spec.key; h.k = 0; h.blend = spec.blend ?? 0.3; h.from.copy(h.pos); h.fromQ.copy(h.quat); if (!h.shown) this._hiddenPose(h, h.from, h.fromQ); }
  }
  both(specL, specR) { this.set(0, specL); this.set(1, specR); }
  hide(side) {
    if (side === undefined) { this.hide(0); this.hide(1); return; }
    const h = this.h[side];
    if (h.key === 'hidden') return;
    this.set(side, { key: 'hidden', mode: 'hidden', pose: 'relax', blend: 0.35 });
  }
  isHidden(side) { return this.h[side].key === 'hidden' || this.h[side].key === null; }
  _hiddenPose(h, outP, outQ) {
    // just below the bottom edge of the view
    outP.set(h.side * 0.2, -0.62, -0.25).applyMatrix4(this.camera.matrixWorld);
    this.camera.getWorldQuaternion(outQ).multiply(_q.setFromEuler(_e.set(0.6, 0, 0, 'YXZ')));
  }
  _target(h, outP, outQ) {
    const s = h.spec;
    if (!s || s.mode === 'hidden') { this._hiddenPose(h, outP, outQ); return; }
    if (s.mode === 'world') {
      // a hand never reaches further than an arm: if the player has moved away from where the hand was
      // told to be (explore mode, a jump, a skip), it drops out of view instead of stretching after it
      this.camera.getWorldPosition(_s);
      if (_s.distanceTo(s.pos) > 1.15) { this._hiddenPose(h, outP, outQ); return 'far'; }
      outP.copy(s.pos); outQ.setFromEuler(s.rot); return;
    }
    const ref = s.mode === 'cam' ? this.camera : s.obj;
    ref.updateWorldMatrix(true, false);
    outP.copy(s.pos).applyMatrix4(ref.matrixWorld);
    // rotation can be relative to the object or to the camera (rotSpace: 'cam')
    (s.rotSpace === 'cam' ? this.camera : ref).getWorldQuaternion(outQ).multiply(_q.setFromEuler(s.rot));
  }
  update(dt) {
    const tp = _v, tq = new THREE.Quaternion();
    this.camera.updateWorldMatrix(true, false);
    for (const h of this.h) {
      let pose;
      if (this.xr && this.xr.grips[h.side > 0 ? 1 : 0]) {
        // in a headset the hands are wherever your real hands are
        const i = h.side > 0 ? 1 : 0, g = this.xr.grips[i];
        g.updateWorldMatrix(true, false);
        h.pos.set(0, -0.01, 0.06).applyMatrix4(g.matrixWorld);
        g.getWorldQuaternion(h.quat).multiply(_q.setFromEuler(_e.set(-0.25, 0, -h.side * Math.PI / 2, 'YXZ')));
        const sq = this.xr.squeeze[i], tr = this.xr.trigger[i];
        pose = [Math.max(sq, tr) * 0.95, sq * 0.95, sq, sq, Math.max(sq, tr) * 0.7].map((c, j) => Math.max(c, HAND_POSES.relax[j] * 0.6));
        h.mesh.visible = true; h.shown = true;
      } else {
        const far = this._target(h, tp, tq) === 'far';
        h.k = Math.min(1, h.k + dt / Math.max(0.01, h.blend));
        const e = ease(h.k);
        h.pos.lerpVectors(h.from, tp, e); h.quat.slerpQuaternions(h.fromQ, tq, e);
        if (far) { h.pos.copy(tp); h.quat.copy(tq); h.from.copy(tp); h.fromQ.copy(tq); }
        const hidden = h.key === 'hidden' || h.key === null || far;
        if (hidden && (h.k >= 1 || far)) { h.mesh.visible = false; h.shown = false; }
        else { h.mesh.visible = true; h.shown = true; }
        pose = HAND_POSES[(h.spec && h.spec.pose) || 'relax'] || HAND_POSES.relax;
        if (h.spec && h.spec.curl) pose = h.spec.curl;
      }
      for (let j = 0; j < 5; j++) h.curl[j] = damp(h.curl[j], pose[j], 14, dt);
      applyHandCurl(h.mesh, h.curl);
      h.mesh.position.copy(h.pos); h.mesh.quaternion.copy(h.quat);
      // forearm (desktop only; in VR your real arm is there)
      h.arm.visible = h.mesh.visible && !this.xr;
      if (h.arm.visible) {
        const wristP = _w.set(0, 0, 0.02 * HAND_SCALE).applyQuaternion(h.quat).add(h.pos);
        // the shoulder follows the body (where you face), not where you look up or down
        this.camera.getWorldPosition(_s); this.camera.getWorldDirection(_d); _d.y = 0; _d.normalize();
        const sh = _s.addScaledVector(_d, -0.03).add(_w2.set(-_d.z, 0, _d.x).multiplyScalar(h.side * 0.17)); sh.y -= 0.36;
        const dir = _d.subVectors(sh, wristP); const len = Math.max(0.05, dir.length() - 0.03);
        h.arm.position.copy(wristP);
        h.arm.quaternion.setFromUnitVectors(_up, dir.normalize());
        h.arm.scale.set(HAND_SCALE, len, HAND_SCALE);
      }
    }
  }
  worldPos(side, out) { return out.copy(this.h[side].pos); }
}

// Grip orientations used around the game (hand frame: fingers -Z, palm -Y)
export const GRIP = {
  // holding something by its top in front of you: fingers wrap across it, knuckles forward,
  // wrist toward your own side (camera space)
  carry: (side) => new THREE.Euler(0.15, side * Math.PI / 2, -side * Math.PI / 2 + side * 0.2, 'YXZ'),
  // pinching a rim in front of you: fingers forward and down, palm facing inward (camera space)
  rim: (side) => new THREE.Euler(-0.75, -side * 0.25, -side * Math.PI / 2, 'YXZ'),
  // reaching for something: fingers toward it, palm down and turned a little inward (world space)
  toward: (side, from, to, roll = 0.5) => { const d = new THREE.Vector3().subVectors(to, from).normalize(); return new THREE.Euler(Math.asin(THREE.MathUtils.clamp(d.y, -1, 1)), Math.atan2(-d.x, -d.z), -side * roll, 'YXZ'); },
  // palm down on a table, fingers forward and a little inward
  table: (side, yaw = 0) => new THREE.Euler(-0.5, yaw + side * 0.3, -side * 0.2, 'YXZ'),
  // resting on the table edge: wrist straight, palm down, fingers relaxed (not pressed down)
  rest: (side, yaw = 0) => new THREE.Euler(-0.08, yaw + side * 0.22, -side * 0.08, 'YXZ'),
  // pushing something in front, palm forward
  push: (side, yaw = 0) => new THREE.Euler(0.95, yaw + side * 0.15, -side * 0.25, 'YXZ'),
  // reaching out, palm down
  reach: (side, yaw = 0, pitch = -0.2) => new THREE.Euler(pitch, yaw + side * 0.15, -side * 0.35, 'YXZ'),
};

// The bag: hangs on a hook until taken, then the right hand carries it; hold Q to lift and look in.
export class BagCtl {
  constructor(camera, tex, hands) {
    this.camera = camera; this.hands = hands;
    this.bag = makeBag(tex);
    this.held = false; this.look = 0; this.forceOpen = 0; this.sway = 0; this.takeK = 1;
    this.holder = camera;
    this.restPos = new THREE.Vector3(0.2, -0.44, -0.42);
    this.lookPos = new THREE.Vector3(0.02, -0.25, -0.38);
    this.takeFrom = new THREE.Vector3(); this.takeFromQ = new THREE.Quaternion();
    this.firstLook = null;
    this.inXR = false;
    this.glow = 0; this.heavy = 0; this.stow = 0;
    this.hugMode = false; this.hugK = 0;           // nightmare (Extra): Q hugs the bag to your chest to smother its light   // stolen food glows / grows heavy; stow lowers the bag out of view (hands free)
  }
  hang(parent, pos, ry = 0) {
    this.held = false; parent.add(this.bag);
    this.bag.position.copy(pos); this.bag.rotation.set(0, ry, 0); this.bag.scale.setScalar(1); this.bag.userData.strap.visible = true;
    setBagOpen(this.bag, 0);
    if (this.hands) this.hands.hide(1);
  }
  // pick it up: the bag glides from the hook into your hand (no pop)
  take() {
    const b = this.bag;
    b.updateWorldMatrix(true, false);
    this.holder.updateWorldMatrix(true, false);
    _m.copy(this.holder.matrixWorld).invert().multiply(b.matrixWorld);
    const s = new THREE.Vector3(); _m.decompose(this.takeFrom, this.takeFromQ, s);
    this.held = true; this.takeK = 0; this.holder.add(b);
    b.userData.strap.visible = false;
  }
  setHolder(obj, xr) {
    // in VR the bag rides on the right controller instead of the head
    this.inXR = xr; this.holder = obj;
    if (this.held) obj.add(this.bag);
    if (xr) { this.restPos = new THREE.Vector3(0, -0.2, 0.02); this.lookPos = new THREE.Vector3(0, -0.12, -0.05); }
    else { this.restPos = new THREE.Vector3(0.2, -0.44, -0.42); this.lookPos = new THREE.Vector3(0.02, -0.25, -0.38); }
  }
  setCoins(n) { this.bag.userData.coins.forEach((c, i) => { c.visible = i < n; }); }
  setContents({ coins, scraps, food }) {
    const u = this.bag.userData;
    if (coins !== undefined) this.setCoins(coins);
    if (scraps !== undefined) u.scraps.visible = scraps;
    if (food !== undefined) u.food.visible = food;
  }
  resetContents() { this.setContents({ coins: 0, scraps: false, food: false }); this.glow = 0; this.heavy = 0; this.forceOpen = 0; this.stow = 0; }
  get open() { return this.look; }
  get hugging() {
    if (this.inXR && this.held) { const b = new THREE.Vector3(), h = new THREE.Vector3(); this.bag.getWorldPosition(b); this.camera.getWorldPosition(h); return b.distanceTo(h) < 0.5 && b.y < h.y; }
    return this.hugK > 0.6;
  }
  update(dt, t, qHeld, moving) {
    this.bag.userData.foodMat.emissiveIntensity = this.glow * (0.8 + 0.4 * Math.sin(t * 5));
    if (!this.held) return;
    this._stow = damp(this._stow || 0, this.stow, 6, dt);
    const hug = this.hugMode && qHeld && !this.inXR;
    this.hugK = damp(this.hugK, hug ? 1 : 0, 8, dt);
    const want = ((qHeld && !this.hugMode) || this.forceOpen) ? 1 : 0;
    this.look = damp(this.look, want, 7, dt);
    if (want && this.firstLook) { this.firstLook(); this.firstLook = null; }
    this.sway += dt * (moving ? 7 : 1.2);
    const b = this.bag, sc = (this.inXR ? 0.8 : 0.55) * (1 + this.heavy * 0.2);
    const p = _v.lerpVectors(this.restPos, this.lookPos, this.look);
    if (this.hugK > 0.001) p.lerp(_w.set(0.0, -0.36, -0.22), this.hugK);   // clutched against your chest
    p.y += Math.sin(this.sway) * (moving ? 0.012 : 0.004) * (1 + this.heavy * 2) * (1 - this.look) - this.heavy * 0.06 - this._stow * 0.5;
    p.x += Math.cos(this.sway * 0.5) * (moving ? 0.008 : 0.002) * (1 - this.look);
    _q.setFromEuler(_e.set(lerp(0.08, 0.95, this.look), lerp(-0.25, 0, this.look), Math.sin(this.sway * 0.5) * 0.04 * (1 - this.look)));
    if (this.takeK < 1) {
      this.takeK = Math.min(1, this.takeK + dt / 0.45);
      const k = ease(this.takeK);
      b.position.lerpVectors(this.takeFrom, p, k); b.quaternion.slerpQuaternions(this.takeFromQ, _q, k);
      b.scale.setScalar(lerp(1, sc, k));
    } else { b.position.copy(p); b.quaternion.copy(_q); b.scale.setScalar(sc); }
    setBagOpen(b, this.look);
    // the hands that hold it (desktop): right hand on the gathered neck; both hands on the rim when it is open
    if (this.hands && !this.inXR && this._stow < 0.5 && this.stow < 0.5) {
      if (this.hugK > 0.35) {
        // both hands wrapped over the bag
        this.hands.set(1, { key: 'hugR', mode: 'obj', obj: b, pos: new THREE.Vector3(0.12, 0.2, 0.12), rot: new THREE.Euler(-0.9, 0.5, -0.6, 'YXZ'), rotSpace: 'cam', pose: 'grip', blend: 0.2 });
        this.hands.set(0, { key: 'hugL', mode: 'obj', obj: b, pos: new THREE.Vector3(-0.12, 0.22, 0.14), rot: new THREE.Euler(-0.9, -0.5, 0.6, 'YXZ'), rotSpace: 'cam', pose: 'grip', blend: 0.2 });
        this._leftOnBag = true;
      } else if (this.look > 0.35) {
        this.hands.set(1, { key: 'bag-rimR', mode: 'obj', obj: b, pos: new THREE.Vector3(0.2, 0.36, 0.05), rot: GRIP.rim(1), rotSpace: 'cam', pose: 'pinch', blend: 0.25 });
        this.hands.set(0, { key: 'bag-rimL', mode: 'obj', obj: b, pos: new THREE.Vector3(-0.2, 0.36, 0.05), rot: GRIP.rim(-1), rotSpace: 'cam', pose: 'pinch', blend: 0.25 });
        this._leftOnBag = true;
      } else {
        this.hands.set(1, { key: 'bag-neck', mode: 'obj', obj: b, pos: new THREE.Vector3(0.13, 0.31, 0.03), rot: GRIP.carry(1), rotSpace: 'cam', pose: 'grip', blend: 0.25 });
        if (this._leftOnBag) { this.hands.hide(0); this._leftOnBag = false; }
      }
    }
  }
  worldMouth(out) { return this.bag.localToWorld(out.set(0, 0.2, 0)); }
}
