import * as THREE from 'three';
import { makePerson, poseSit, animateSew, animateIdle, makeFPHand, applyHandCurl, HAND_POSES } from '../src/people.js';
const r = new THREE.WebGLRenderer({ antialias: true }); r.setSize(1400, 700); document.body.appendChild(r.domElement);
r.shadowMap.enabled = true; r.toneMapping = THREE.ACESFilmicToneMapping; r.outputColorSpace = THREE.SRGBColorSpace;
const s = new THREE.Scene(); s.background = new THREE.Color(0x8aa0b4);
const sun = new THREE.DirectionalLight(0xfff0dc, 3); sun.position.set(3, 6, 5); sun.castShadow = true; sun.shadow.mapSize.set(2048,2048); sun.shadow.normalBias = 0.02; sun.shadow.bias = -0.0005; Object.assign(sun.shadow.camera,{left:-6,right:6,top:4,bottom:-1}); s.add(sun);
s.add(new THREE.HemisphereLight(0xa8c0e0, 0x5a4a3a, 1.2));
const fl = new THREE.Mesh(new THREE.PlaneGeometry(30, 10), new THREE.MeshStandardMaterial({ color: 0xc8b8a0 })); fl.rotation.x = -Math.PI/2; fl.receiveShadow = true; s.add(fl);
const P = [
  { top: 0x8a7e62, bottom: 0x3a3226, skin: 0x8a5a3c, mustache: true, belly: 0.03, outfit: 'shirt', seed: 1 },
  { female: true, top: 0xa8322a, bottom: 0xa8322a, scarf: 0xd9a22a, skin: 0x8a5a3c, seed: 2 },
  { top: 0xb8b09a, bottom: 0x4a4038, skin: 0x6e4228, cap: true, seed: 3 },
  { child: true, top: 0x6a7d9a, bottom: 0x3a3a4a, skin: 0x7a4c30, seed: 4 },
  { child: true, female: true, top: 0xd9a22a, bottom: 0xd9a22a, skin: 0x9a6844, seed: 5 },
  { child: true, top: 0xf4f2ea, bottom: 0x2a3a6a, outfit: 'uniform', seed: 6 },
];
const ppl = P.map((o, i) => { const p = makePerson({ ...o, scale: 1 }); p.position.set(-3.2 + i * 1.25, 0, 0); s.add(p); return p; });
const back = P.slice(0,3).map((o,i)=>{ const p = makePerson({ ...o, scale: 1 }); p.position.set(4.6 + i*0.9, 0, -1.5); p.rotation.y = Math.PI; s.add(p); return p; });
const sit = makePerson({ ...P[1], scale: 1 }); poseSit(sit, 0.48); sit.position.set(-4.6, 0, 0.6); sit.rotation.y = 0.6; s.add(sit);
const hands = Object.keys(HAND_POSES).slice(0,4).map((k,i)=>{ const h = makeFPHand(1); applyHandCurl(h, HAND_POSES[k]); h.position.set(-1.45 + i*0.3, 1.9, 1.2); h.rotation.set(-0.3,0.15,-0.2); h.scale.setScalar(1); s.add(h); return h; });
const hl = makeFPHand(-1); applyHandCurl(hl, HAND_POSES.relax); hl.position.set(-1.75, 1.9, 1.2); hl.rotation.set(-0.3,-0.15,0.2); hl.scale.setScalar(1); hl.scale.setScalar(2.2); s.add(hl);
const cam = new THREE.PerspectiveCamera(32, 2, 0.1, 100);
const V = new URLSearchParams(location.search).get('v') || 'all';
if (V==='all') { cam.position.set(0.3, 1.6, 9.5); cam.lookAt(0.3, 1.0, 0); }
if (V==='adults') { cam.position.set(-1.95, 1.25, 4.2); cam.lookAt(-1.95, 0.95, 0); }
if (V==='faces') { cam.fov=14; cam.updateProjectionMatrix(); cam.position.set(-1.95, 1.62, 2.4); cam.lookAt(-1.95, 1.58, 0); }
if (V==='faces2') { cam.fov=14; cam.updateProjectionMatrix(); cam.position.set(-0.2, 1.62, 2.0); cam.lookAt(-0.7, 1.58, 0); }
if (V==='kids') { cam.position.set(1.8, 1.0, 3.6); cam.lookAt(1.8, 0.75, 0); }
if (V==='back') { cam.position.set(5.5, 1.3, 2.2); cam.lookAt(5.5, 1.0, -1.5); }
if (V==='hands') { cam.fov=40; cam.updateProjectionMatrix(); cam.position.set(-1.15, 2.2, 1.75); cam.lookAt(-1.15, 1.88, 1.1); }
const cl = new THREE.Clock(); let t=0;
r.setAnimationLoop(()=>{ const dt = cl.getDelta(); t+=dt; ppl.concat(back).forEach(p=>animateIdle(p,t,dt)); animateSew(sit,t,dt,1); r.render(s,cam); });
window.__ok = true;
