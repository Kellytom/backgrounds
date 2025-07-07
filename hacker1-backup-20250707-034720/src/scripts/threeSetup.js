// Three.js setup and utilities for Hacker1

import * as THREE from 'three';

export function setupScene() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x000000, 0.1); // Transparent background
  
  // Position camera
  camera.position.z = 5;
  
  // Add basic lighting
  const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
  scene.add(ambientLight);
  
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
  directionalLight.position.set(1, 1, 1);
  scene.add(directionalLight);
  
  return { scene, camera, renderer };
}

export function createSacredGeometry(type, material = 'gold') {
  const materials = {
    gold: new THREE.MeshPhongMaterial({ color: 0xD4AF37 }),
    ruby: new THREE.MeshPhongMaterial({ color: 0x8A5A5A }),
    glass: new THREE.MeshPhongMaterial({ color: 0x5A7A8A, transparent: true, opacity: 0.8 }),
    bronze: new THREE.MeshPhongMaterial({ color: 0xCD7F32 }),
    crystal: new THREE.MeshPhongMaterial({ color: 0x7A5A7A, transparent: true, opacity: 0.9 })
  };
  
  let geometry;
  
  switch (type) {
    case 'cube':
      geometry = new THREE.BoxGeometry(1, 1, 1);
      break;
    case 'tetrahedron':
      geometry = new THREE.TetrahedronGeometry(1);
      break;
    case 'octahedron':
      geometry = new THREE.OctahedronGeometry(1);
      break;
    case 'icosahedron':
      geometry = new THREE.IcosahedronGeometry(1);
      break;
    case 'dodecahedron':
      geometry = new THREE.DodecahedronGeometry(1);
      break;
    default:
      geometry = new THREE.SphereGeometry(1, 32, 32);
  }
  
  return new THREE.Mesh(geometry, materials[material] || materials.gold);
}

export function createDNAHelix(length = 10, radius = 1) {
  const group = new THREE.Group();
  
  // Create the backbone curves
  const points1 = [];
  const points2 = [];
  
  for (let i = 0; i <= length * 10; i++) {
    const angle = (i / 10) * Math.PI * 2;
    const height = (i / 10) * 0.3;
    
    points1.push(new THREE.Vector3(
      Math.cos(angle) * radius,
      height,
      Math.sin(angle) * radius
    ));
    
    points2.push(new THREE.Vector3(
      Math.cos(angle + Math.PI) * radius,
      height,
      Math.sin(angle + Math.PI) * radius
    ));
  }
  
  // Create the backbone geometry
  const curve1 = new THREE.CatmullRomCurve3(points1);
  const curve2 = new THREE.CatmullRomCurve3(points2);
  
  const tubeGeometry1 = new THREE.TubeGeometry(curve1, 100, 0.05, 8, false);
  const tubeGeometry2 = new THREE.TubeGeometry(curve2, 100, 0.05, 8, false);
  
  const backboneMaterial = new THREE.MeshPhongMaterial({ color: 0x5A7A8A });
  
  group.add(new THREE.Mesh(tubeGeometry1, backboneMaterial));
  group.add(new THREE.Mesh(tubeGeometry2, backboneMaterial));
  
  // Add base pairs
  for (let i = 0; i < length * 2; i++) {
    const angle = (i / 2) * Math.PI * 2;
    const height = (i / 2) * 0.3;
    
    const point1 = new THREE.Vector3(
      Math.cos(angle) * radius,
      height,
      Math.sin(angle) * radius
    );
    
    const point2 = new THREE.Vector3(
      Math.cos(angle + Math.PI) * radius,
      height,
      Math.sin(angle + Math.PI) * radius
    );
    
    // Create base pair connection
    const basePairGeometry = new THREE.CylinderGeometry(0.02, 0.02, point1.distanceTo(point2));
    const basePairMaterial = new THREE.MeshPhongMaterial({ color: 0x8A5A5A });
    const basePair = new THREE.Mesh(basePairGeometry, basePairMaterial);
    
    basePair.position.copy(point1).add(point2).divideScalar(2);
    basePair.lookAt(point2);
    basePair.rotateX(Math.PI / 2);
    
    group.add(basePair);
  }
  
  return group;
}

export function animateRotation(mesh, speed = 0.01) {
  return function animate() {
    mesh.rotation.x += speed;
    mesh.rotation.y += speed * 0.7;
    mesh.rotation.z += speed * 0.3;
  };
}

export function createParticleSystem(count = 1000) {
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(count * 3);
  
  for (let i = 0; i < count * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 20;
    positions[i + 1] = (Math.random() - 0.5) * 20;
    positions[i + 2] = (Math.random() - 0.5) * 20;
  }
  
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  
  const material = new THREE.PointsMaterial({
    color: 0xD4AF37,
    size: 0.1,
    transparent: true,
    opacity: 0.8
  });
  
  return new THREE.Points(geometry, material);
}
