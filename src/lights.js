// LIGHT POOL — the whole journey shares a fixed handful of real point lights.
// Every lamp, bulb and glow in every space registers as a light *source*; each frame the pool
// gives its real lights to the sources that matter most near you, cross-fading when they change.
// Because the number of lights never changes, walking from one space into the next never forces
// the GPU to recompile its shaders (that is what causes a hitch), and each pixel only pays for a
// few lights however many lamps the world has.
import * as THREE from 'three';

export class LightPool {
  constructor(scene, count = 6) {
    this.slots = [];
    for (let i = 0; i < count; i++) {
      const L = new THREE.PointLight(0xffffff, 0, 8, 1.6);
      L.position.set(0, -50, 0); scene.add(L);
      this.slots.push({ L, src: null, w: 0, next: null });
    }
    this.sources = [];
    this.acc = 1;
  }
  // { pos: Vector3, color, intensity, distance, decay, space, priority }
  add(o) {
    const s = { pos: o.pos.clone(), color: new THREE.Color(o.color ?? 0xffffff), intensity: o.intensity ?? 1, distance: o.distance ?? 8, decay: o.decay ?? 1.6, space: o.space || '', priority: o.priority ?? 1, on: true };
    this.sources.push(s); return s;
  }
  score(s, head) {
    if (!s.on || s.intensity <= 0.001) return -1;
    const d = s.pos.distanceTo(head);
    if (d > s.distance + 7) return -1;
    return s.intensity * s.priority / (1 + (d / Math.max(1, s.distance)) ** 2 * 4);
  }
  update(dt, head, active) {
    // re-rank a few times a second (cheap), fade every frame
    this.acc += dt;
    if (this.acc > 0.2) {
      this.acc = 0;
      const ranked = this.sources.filter(s => active.has(s.space)).map(s => [s, this.score(s, head)]).filter(([, sc]) => sc > 0).sort((a, b) => b[1] - a[1]).slice(0, this.slots.length).map(([s]) => s);
      const want = new Set(ranked);
      // keep slots whose source is still wanted
      this.slots.forEach(sl => { if (sl.src && want.has(sl.src)) { want.delete(sl.src); sl.next = null; } else if (sl.src) sl.next = undefined; });
      // hand the rest out to free (or fading) slots
      const free = this.slots.filter(sl => !sl.src || sl.next === undefined);
      [...want].forEach((s, i) => { if (free[i]) free[i].next = s; });
    }
    for (const sl of this.slots) {
      if (sl.next !== null && sl.next !== undefined && !sl.src) { sl.src = sl.next; sl.next = null; sl.w = 0; }
      const leaving = sl.next !== null;          // being replaced or dropped: fade out first
      sl.w = THREE.MathUtils.clamp(sl.w + (leaving ? -dt * 5 : dt * 3), 0, 1);
      if (leaving && sl.w <= 0) { sl.src = sl.next || null; sl.next = null; }
      const s = sl.src;
      if (!s) { sl.L.intensity = 0; continue; }
      sl.L.position.copy(s.pos); sl.L.color.copy(s.color); sl.L.distance = s.distance; sl.L.decay = s.decay;
      sl.L.intensity = s.intensity * sl.w;
    }
  }
}
