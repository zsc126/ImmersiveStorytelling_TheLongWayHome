// Look-and-click interaction: whatever is under the crosshair and currently usable gets a soft
// outline (only one object is ever highlighted, as the board asks).
import * as THREE from 'three';

export class Interactor {
  constructor(camera, canvas) {
    this.camera = camera; this.targets = []; this.hover = null; this.pressed = null;
    this.ray = new THREE.Raycaster(); this.ray.far = 3.0; this.center = new THREE.Vector2(0, 0);
    this.enabled = true;
    canvas.addEventListener('mousedown', e => { if (e.button === 0 && this.enabled && this.anyPress) this.anyPress(); if (e.button === 0 && this.enabled && this.hover) { this.pressed = this.hover; this.onUse && this.onUse(this.hover); this.hover.onPress && this.hover.onPress(); } });
    addEventListener('mouseup', e => { if (e.button === 0 && this.pressed) { this.pressed.onRelease && this.pressed.onRelease(); this.pressed = null; } });
  }
  add(t) { t.maxDist = t.maxDist || 2.6; this.targets.push(t); return t; }
  release() { if (this.pressed) { this.pressed.onRelease && this.pressed.onRelease(); this.pressed = null; } }
  // ---- VR: rays come from a controller instead of the middle of the screen ----
  _hitFrom(ctrl) {
    const live = this.targets.filter(t => t.enabled());
    if (!live.length) return null;
    ctrl.updateWorldMatrix(true, false);
    this.ray.camera = this.camera;   // sprites (the guiding glows) need a camera to be hit-tested; the desktop path sets it in setFromCamera
    const m = new THREE.Matrix4().extractRotation(ctrl.matrixWorld);
    this.ray.ray.origin.setFromMatrixPosition(ctrl.matrixWorld);
    this.ray.ray.direction.set(0, 0, -1).applyMatrix4(m);
    let best = null, bestD = Infinity;
    for (const t of live) { const hits = this.ray.intersectObject(t.object, true); if (hits.length && hits[0].distance < t.maxDist + 0.6 && hits[0].distance < bestD) { best = t; bestD = hits[0].distance; } }
    return best ? { target: best, distance: bestD } : null;
  }
  peekXR(ctrl) { return this.enabled ? this._hitFrom(ctrl) : null; }
  pressXR(ctrl) { if (this.enabled && this.anyPress) this.anyPress(); const h = this.enabled && this._hitFrom(ctrl); if (h) { this.pressed = h.target; this.onUse && this.onUse(h.target); h.target.onPress && h.target.onPress(); } }
  releaseXR() { this.release(); }
  update() {
    const live = this.targets.filter(t => t.enabled());
    this.hover = null;
    if (!this.enabled || !live.length || this.xrMode) return this.xrMode ? this.pressed : null;
    this.ray.setFromCamera(this.center, this.camera);
    let best = null, bestD = Infinity;
    for (const t of live) {
      const hits = this.ray.intersectObject(t.object, true);
      if (hits.length && hits[0].distance < t.maxDist && hits[0].distance < bestD) { best = t; bestD = hits[0].distance; }
    }
    // keep a held press alive even if the aim drifts a little
    if (!best && this.pressed && live.includes(this.pressed)) best = this.pressed;
    this.hover = best;
    return best;
  }
}
