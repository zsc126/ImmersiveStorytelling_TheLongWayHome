// The Long Way Home — created by Sicheng Zheng. © 2026 Sicheng Zheng. All rights reserved.
// Pursuers follow the player's own footsteps (a breadcrumb trail), so they always
// take a valid path through the alleys without needing a navmesh.
import * as THREE from 'three';

const h = new THREE.Vector3();

export class Pursuit {
  constructor(player, figures) {
    this.player = player; this.figs = figures;
    this.trail = []; this.speed = 2.6; this.active = false; this.clock = 0;
    this.idx = figures.map(() => 0);
  }
  start(gap = 7) {
    this.player.headWorld(h);
    this.trail = [new THREE.Vector3(h.x, 0, h.z)];
    this.active = true;
    this.figs.forEach((f, i) => { this.idx[i] = 0; f.visible = true; });
  }
  // put the pursuers `gap` metres back along the trail from the player (for checkpoints)
  rewind(gap) {
    this.player.headWorld(h);
    const p = new THREE.Vector3(h.x, 0, h.z);
    // cut the trail back to where the player is now (after a checkpoint jump)
    let bi = this.trail.length - 1, bd = Infinity;
    this.trail.forEach((q, i) => { const d = q.distanceTo(p); if (d < bd) { bd = d; bi = i; } });
    this.trail.length = bi + 1;
    this.trail.push(p);
    let d = 0, i = this.trail.length - 1;
    while (i > 0 && d < gap) { d += this.trail[i].distanceTo(this.trail[i - 1]); i--; }
    this.figs.forEach((f, k) => { const j = Math.max(0, i - k * 2); f.position.copy(this.trail[j]); this.idx[k] = j; });
  }
  stop() { this.active = false; }

  // returns distance from the nearest pursuer to the player
  update(dt) {
    this.player.headWorld(h);
    const last = this.trail[this.trail.length - 1];
    if (!last || last.distanceTo(new THREE.Vector3(h.x, 0, h.z)) > 0.4) this.trail.push(new THREE.Vector3(h.x, 0, h.z));
    if (this.trail.length > 4000) { this.trail.splice(0, 1000); this.idx = this.idx.map(i => Math.max(0, i - 1000)); }
    let best = 99; this.clock += dt;
    this.figs.forEach((f, k) => {
      if (!this.active) { f.userData.walk = Math.max(0, f.userData.walk - dt * 3); return; }
      // they bump and stumble in the narrow lanes: speed wobbles
      const wobble = 0.82 + 0.18 * Math.sin(this.clock * 1.7 + k * 2.1) * Math.sin(this.clock * 0.6 + k);
      let step = this.speed * (1 - k * 0.08) * wobble * dt;
      while (step > 0) {
        const target = this.idx[k] + 1 < this.trail.length ? this.trail[this.idx[k] + 1] : new THREE.Vector3(h.x, 0, h.z);
        const d = Math.hypot(target.x - f.position.x, target.z - f.position.z);
        if (d <= step) { f.position.x = target.x; f.position.z = target.z; step -= d; if (this.idx[k] + 1 < this.trail.length) this.idx[k]++; else break; }
        else { f.position.x += (target.x - f.position.x) / d * step; f.position.z += (target.z - f.position.z) / d * step; step = 0; }
      }
      const dx = h.x - f.position.x, dz = h.z - f.position.z;
      f.rotation.y = Math.atan2(-dx, -dz);
      f.userData.walk = 1; f.userData.stride += dt * this.speed * 3.2;
      best = Math.min(best, Math.hypot(dx, dz));
    });
    return best;
  }
}
