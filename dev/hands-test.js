import * as THREE from 'three';
import { makeFPHand, applyHandCurl, HAND_POSES } from '../src/people.js';
import { GRIP } from '../src/fp.js';
const r = new THREE.WebGLRenderer({ antialias: true }); r.setSize(1280, 720); document.body.appendChild(r.domElement);
r.shadowMap.enabled = true; r.toneMapping = THREE.ACESFilmicToneMapping; r.outputColorSpace = THREE.SRGBColorSpace;
const s = new THREE.Scene(); s.background = new THREE.Color(0x2a221a);
const sun = new THREE.DirectionalLight(0xffd8a8, 3); sun.position.set(-3, 5, 2); sun.castShadow = true; sun.shadow.normalBias = 0.01; Object.assign(sun.shadow.camera,{left:-2,right:2,top:2,bottom:-2}); s.add(sun);
s.add(new THREE.HemisphereLight(0x9ab0c8, 0x4a3a2a, 1.0));
const table = new THREE.Mesh(new THREE.BoxGeometry(2, 0.05, 1), new THREE.MeshStandardMaterial({ color: 0x7a4a2a })); table.position.set(0, 0.975, -0.5); table.receiveShadow = true; s.add(table);
const V = new URLSearchParams(location.search).get('v') || 'table';
const cam = new THREE.PerspectiveCamera(72, 16/9, 0.03, 50); cam.position.set(0, 1.3, 0); cam.rotation.set(-0.5, 0, 0, 'YXZ'); s.add(cam);
const L = makeFPHand(-1, { skin: 0x7a4c30 }), R = makeFPHand(1, { skin: 0x7a4c30 }); s.add(L, R);
const put = (h, side, x, y, z, eul, pose) => { h.position.set(x, y, z); h.quaternion.setFromEuler(eul); applyHandCurl(h, HAND_POSES[pose]); };
if (V === 'table') { put(L, -1, -0.13, 1.025, -0.36, GRIP.table(-1), 'relax'); put(R, 1, 0.13, 1.025, -0.36, GRIP.table(1), 'relax'); }
if (V === 'flat') { put(L, -1, -0.12, 1.02, -0.42, GRIP.table(-1), 'flat'); put(R, 1, 0.12, 1.02, -0.42, GRIP.table(1), 'flat'); }
if (V === 'grip') { cam.rotation.set(-0.15,0,0,'YXZ'); put(L, -1, -0.1, 1.15, -0.4, GRIP.reach(-1, 0.3, -0.55), 'pinch'); put(R, 1, 0.2, 1.06, -0.42, GRIP.hold(1), 'grip'); }
if (V === 'push') { cam.rotation.set(0,0,0,'YXZ'); put(L, -1, -0.12, 1.2, -0.45, GRIP.push(-1, 0), 'flat'); put(R, 1, 0.22, 1.02, -0.45, GRIP.hold(1), 'grip'); }
r.render(s, cam); window.__ok = true;
