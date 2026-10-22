// The Long Way Home — created by Sicheng Zheng. © 2026 Sicheng Zheng. All rights reserved.
// The cloth bag — the key object, carried through the whole experience.
// Desktop: shown bottom-left; hold Q to lift it and look inside.
// VR: hangs from the left hand; raise it to your chest to look inside.
import * as THREE from 'three';
import { lerp, setBagOpen } from './kit.js';

const v = new THREE.Vector3(), h = new THREE.Vector3();

export class BagController {
  constructor(bag, player) {
    this.bag = bag; this.player = player;
    this.held = false;
    this.forceOpen = 0;      // a space can open it for a moment (being paid, counting coins)
    this.heavy = 0;          // 0..1 — the stolen food grows heavy in the nightmare
    this.glow = 0;           // 0..1 — the stolen food glows
  }

  attach() {
    this.held = true;
    const b = this.bag;
    if (this.player.inVR) { this.player.bagHand().add(b); b.position.set(0, -0.2, 0.03); b.rotation.set(0, 0, 0); b.scale.setScalar(0.85); }
    else { this.player.camera.add(b); b.position.set(-0.26, -0.34, -0.55); b.rotation.set(0.2, 0.4, 0); b.scale.setScalar(0.5); }
  }
  home(parent, pos, rotY) {
    this.held = false;
    parent.add(this.bag); this.bag.position.copy(pos); this.bag.rotation.set(0, rotY, 0); this.bag.scale.setScalar(1);
    setBagOpen(this.bag, 0);
  }
  setContents({ coins, scraps, food }) {
    const u = this.bag.userData;
    if (coins !== undefined) u.coins.forEach((c, i) => { c.visible = i < coins; });
    if (scraps !== undefined) u.scraps.visible = scraps;
    if (food !== undefined) u.food.visible = food;
  }
  reset() { this.setContents({ coins: 0, scraps: false, food: false }); this.heavy = 0; this.glow = 0; this.forceOpen = 0; }
  worldPos(out) { return this.bag.getWorldPosition(out); }

  update(dt, t) {
    const b = this.bag, u = b.userData;
    u.foodMat.emissiveIntensity = this.glow * (0.8 + 0.4 * Math.sin(t * 5));
    if (!this.held) return;
    let want = this.forceOpen;
    if (this.player.inVR) {
      this.worldPos(v); this.player.headWorld(h);
      if (v.distanceTo(h) < 0.6 && v.y > h.y - 0.6) want = 1;
    } else {
      if (this.player.bagHeld) want = 1;
      const o = u.open;
      const sag = this.heavy * 0.08, sway = this.player.vel.length() * 0.012 * (1 + this.heavy * 2);
      b.position.set(lerp(-0.26, 0.0, o), lerp(-0.34, -0.24, o) - sag + Math.sin(t * 7) * sway, lerp(-0.55, -0.45, o));
      b.rotation.set(lerp(0.2, 0.95, o), lerp(0.4, 0, o), Math.sin(t * 3.5) * sway * 3);
      b.scale.setScalar(0.5 * (1 + this.heavy * 0.25));
    }
    setBagOpen(b, lerp(u.open, want, Math.min(1, dt * 6)));
  }
}
