// The Long Way Home — created by Sicheng Zheng. © 2026 Sicheng Zheng. All rights reserved.
// The red thread — wayfinding shared by every space.
// guide.set(target) with a Vector3, or a function (head) => [points...] for routes around corners.
import * as THREE from 'three';

export class Guide {
  constructor(scene, player) {
    this.player = player;
    this.mat = new THREE.MeshBasicMaterial({ color: 0xd23a2c, transparent: true, opacity: 0.85, toneMapped: false, fog: false });
    this.mesh = new THREE.Mesh(new THREE.BufferGeometry(), this.mat);
    this.mesh.visible = false; this.mesh.frustumCulled = false;
    scene.add(this.mesh);
    this.target = null; this.timer = 0; this.urgent = false;
    this._h = new THREE.Vector3(); this._d = new THREE.Vector3();
  }
  set(target) { this.target = target; this.timer = 0; }
  clear() { this.target = null; }

  update(dt, t) {
    this.mesh.visible = !!this.target && !this.hidden;
    if (!this.target) return;
    this.timer -= dt;
    if (this.timer <= 0) {
      this.timer = 0.08;
      const p = this.player; p.headWorld(this._h);
      p.camera.getWorldDirection(this._d); this._d.y = 0; this._d.normalize();
      const start = new THREE.Vector3(this._h.x, 0.9, this._h.z).addScaledVector(this._d, 0.45);
      const pts = typeof this.target === 'function' ? this.target(this._h) : [this.target];
      const all = [start];
      let prev = start;
      pts.forEach((q, i) => {
        // let the thread dip to the floor between points, rise at the final target
        const mid = prev.clone().lerp(q, 0.5); mid.y = 0.05;
        if (prev.distanceTo(q) > 1.2) all.push(mid);
        all.push(i === pts.length - 1 ? q.clone() : new THREE.Vector3(q.x, 0.05, q.z));
        prev = q;
      });
      if (all.length < 2) return;
      const curve = new THREE.CatmullRomCurve3(all, false, 'centripetal');
      this.mesh.geometry.dispose();
      this.mesh.geometry = new THREE.TubeGeometry(curve, Math.min(200, 30 * all.length), 0.009, 5, false);
    }
    this.mat.opacity = (0.55 + 0.35 * Math.sin(t * (this.urgent ? 9 : 4))) * (this.urgent ? 1 : 0.8);
  }
}
