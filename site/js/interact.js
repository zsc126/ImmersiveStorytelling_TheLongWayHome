// The Long Way Home — created by Sicheng Zheng. © 2026 Sicheng Zheng. All rights reserved.
// Things you can touch: hover highlight, the story's "active" glow, press / hold.
import * as THREE from 'three';

const RED = new THREE.Color(0xd23a2c);
const tmpM = new THREE.Matrix4();

export class Interactor {
  constructor(camera) {
    this.camera = camera;
    this.items = [];
    this.ray = new THREE.Raycaster();
    this.ray.far = 2.6;
    this.hover = null;          // desktop hover
    this.vrHover = [null, null];
    this.active = null;         // what the story wants you to touch next
    this.urgency = 1;           // grows when the player stands still too long
    this.holding = new Map();   // source -> item
  }

  add(object, def) {
    def.object = object;
    def.meshes = [];
    object.traverse(o => {
      if (!o.isMesh) return;
      o.material = o.material.clone();
      o.userData.owner = def;
      o.userData.baseEmissive = o.material.emissive ? o.material.emissive.clone() : null;
      def.meshes.push(o);
    });
    this.items.push(def);
    return def;
  }

  _visible(o) { while (o) { if (!o.visible) return false; o = o.parent; } return true; }

  pick(raycaster, far = this.ray.far) {
    raycaster.far = far;
    const meshes = [];
    for (const d of this.items) if ((!d.enabled || d.enabled()) && this._visible(d.object)) meshes.push(...d.meshes);
    const hit = raycaster.intersectObjects(meshes, false)[0];
    return hit ? hit.object.userData.owner : null;
  }

  updateDesktop() {
    this.ray.setFromCamera({ x: 0, y: 0 }, this.camera);
    this.hover = this.pick(this.ray);
    return this.hover;
  }

  updateController(i, controller) {
    tmpM.identity().extractRotation(controller.matrixWorld);
    this.ray.ray.origin.setFromMatrixPosition(controller.matrixWorld);
    this.ray.ray.direction.set(0, 0, -1).applyMatrix4(tmpM);
    this.vrHover[i] = this.pick(this.ray, 4);
    return this.vrHover[i];
  }

  press(source, item) {
    if (!item) return;
    this.holding.set(source, item);
    item.onPress && item.onPress(source);
  }
  release(source) {
    const item = this.holding.get(source);
    this.holding.delete(source);
    if (item && item.onRelease) item.onRelease(source);
  }

  updateHighlights(t) {
    const pulse = 0.5 + 0.5 * Math.sin(t * 3.4);
    for (const d of this.items) {
      const hovered = d === this.hover || this.vrHover.includes(d);
      let k = 0;
      if (d === this.active) k += (0.03 + 0.09 * pulse) * this.urgency;
      if (hovered && (!d.enabled || d.enabled())) k += 0.12;
      k = Math.min(k, 0.32);
      for (const m of d.meshes) {
        const mat = m.material, base = m.userData.baseEmissive;
        if (!mat.emissive || !base) continue;
        mat.emissive.copy(base).lerp(RED, k);
      }
    }
  }
}
