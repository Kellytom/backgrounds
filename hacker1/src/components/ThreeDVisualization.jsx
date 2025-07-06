// ThreeDVisualization.jsx - Three.js visualization component for scientific/mathematical 3D models
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { setupScene, createSacredGeometry, createDNAHelix, animateRotation } from '../scripts/threeSetup.js';

export default function ThreeDVisualization({ type = 'dna-helix', data }) {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Setup scene
    const { scene, camera, renderer } = setupScene();
    sceneRef.current = { scene, camera, renderer };
    
    // Resize renderer to container
    const container = mountRef.current;
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight || 400;
    
    renderer.setSize(containerWidth, containerHeight);
    camera.aspect = containerWidth / containerHeight;
    camera.updateProjectionMatrix();
    
    // Add renderer to container
    container.appendChild(renderer.domElement);

    let mainObject;

    switch (type) {
      case 'dna-helix':
        mainObject = createDNAHelix(8, 1.5);
        mainObject.position.y = -2;
        break;
      
      case 'platonic-solids':
        mainObject = new THREE.Group();
        const solids = [
          { type: 'tetrahedron', material: 'ruby', position: [-3, 0, 0] },
          { type: 'cube', material: 'gold', position: [-1, 0, 0] },
          { type: 'octahedron', material: 'glass', position: [1, 0, 0] },
          { type: 'icosahedron', material: 'crystal', position: [3, 0, 0] },
          { type: 'dodecahedron', material: 'bronze', position: [0, 2, 0] }
        ];
        
        solids.forEach(solid => {
          const mesh = createSacredGeometry(solid.type, solid.material);
          mesh.position.set(...solid.position);
          mesh.scale.setScalar(0.8);
          mainObject.add(mesh);
        });
        break;
      
      case 'molecular-structure':
        mainObject = new THREE.Group();
        
        // Create water molecule (H2O)
        const oxygenGeometry = new THREE.SphereGeometry(0.66, 32, 32);
        const oxygenMaterial = new THREE.MeshPhongMaterial({ color: 0xff0000 });
        const oxygen = new THREE.Mesh(oxygenGeometry, oxygenMaterial);
        oxygen.position.set(0, 0, 0);
        mainObject.add(oxygen);
        
        const hydrogenGeometry = new THREE.SphereGeometry(0.31, 16, 16);
        const hydrogenMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff });
        
        const hydrogen1 = new THREE.Mesh(hydrogenGeometry, hydrogenMaterial);
        hydrogen1.position.set(0.757, 0.587, 0);
        mainObject.add(hydrogen1);
        
        const hydrogen2 = new THREE.Mesh(hydrogenGeometry, hydrogenMaterial);
        hydrogen2.position.set(-0.757, 0.587, 0);
        mainObject.add(hydrogen2);
        
        // Add bonds
        const bondGeometry = new THREE.CylinderGeometry(0.05, 0.05, 1);
        const bondMaterial = new THREE.MeshPhongMaterial({ color: 0x888888 });
        
        const bond1 = new THREE.Mesh(bondGeometry, bondMaterial);
        bond1.position.set(0.378, 0.294, 0);
        bond1.rotation.z = Math.atan2(0.587, 0.757);
        bond1.scale.y = Math.sqrt(0.757 * 0.757 + 0.587 * 0.587);
        mainObject.add(bond1);
        
        const bond2 = new THREE.Mesh(bondGeometry, bondMaterial);
        bond2.position.set(-0.378, 0.294, 0);
        bond2.rotation.z = Math.PI - Math.atan2(0.587, 0.757);
        bond2.scale.y = Math.sqrt(0.757 * 0.757 + 0.587 * 0.587);
        mainObject.add(bond2);
        break;
      
      case 'fibonacci-sphere':
        mainObject = new THREE.Group();
        
        // Generate fibonacci sphere points
        const numPoints = 500;
        const points = [];
        
        for (let i = 0; i < numPoints; i++) {
          const y = 1 - (i / (numPoints - 1)) * 2;
          const radius = Math.sqrt(1 - y * y);
          const theta = 2.618033988749895 * i; // Golden angle
          
          const x = Math.cos(theta) * radius;
          const z = Math.sin(theta) * radius;
          
          points.push(new THREE.Vector3(x, y, z));
        }
        
        points.forEach((point, index) => {
          const pointGeometry = new THREE.SphereGeometry(0.02, 8, 8);
          const pointMaterial = new THREE.MeshPhongMaterial({ 
            color: new THREE.Color().setHSL((index / numPoints) * 0.3 + 0.1, 0.8, 0.6)
          });
          const pointMesh = new THREE.Mesh(pointGeometry, pointMaterial);
          pointMesh.position.copy(point).multiplyScalar(2);
          mainObject.add(pointMesh);
        });
        break;
      
      default:
        mainObject = createSacredGeometry('icosahedron', 'crystal');
    }

    scene.add(mainObject);

    // Position camera for optimal viewing
    camera.position.set(5, 3, 5);
    camera.lookAt(0, 0, 0);

    // Add orbital controls simulation
    let angle = 0;
    const radius = 7;

    // Animation loop
    function animate() {
      animationRef.current = requestAnimationFrame(animate);
      
      // Rotate main object
      if (mainObject) {
        mainObject.rotation.y += 0.005;
        if (type === 'platonic-solids') {
          mainObject.children.forEach((child, index) => {
            child.rotation.x += 0.01 * (index + 1);
            child.rotation.z += 0.008 * (index + 1);
          });
        }
      }
      
      // Orbital camera movement
      angle += 0.003;
      camera.position.x = Math.cos(angle) * radius;
      camera.position.z = Math.sin(angle) * radius;
      camera.lookAt(0, 0, 0);
      
      renderer.render(scene, camera);
    }
    animate();

    // Handle resize
    function handleResize() {
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight || 400;
      
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    }
    
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      
      renderer.dispose();
    };
  }, [type, data]);

  const getTitle = () => {
    switch (type) {
      case 'dna-helix':
        return 'DNA Double Helix';
      case 'platonic-solids':
        return 'Platonic Solids';
      case 'molecular-structure':
        return 'Water Molecule (H₂O)';
      case 'fibonacci-sphere':
        return 'Fibonacci Sphere';
      default:
        return '3D Visualization';
    }
  };

  const getDescription = () => {
    switch (type) {
      case 'dna-helix':
        return 'The elegant double helix structure of DNA, the blueprint of life. "I will praise you because I am fearfully and wonderfully made." - Psalm 139:14';
      case 'platonic-solids':
        return 'The five perfect solids discovered by Plato, representing the classical elements: tetrahedron (fire), cube (earth), octahedron (air), icosahedron (water), and dodecahedron (universe).';
      case 'molecular-structure':
        return 'Water molecule showing oxygen and hydrogen atoms with covalent bonds. Water, essential for all life, reminds us of spiritual cleansing and renewal.';
      case 'fibonacci-sphere':
        return 'Points distributed on a sphere using the Fibonacci sequence and golden angle, demonstrating divine mathematical principles in nature.';
      default:
        return 'Interactive 3D visualization demonstrating mathematical and scientific principles.';
    }
  };

  return (
    <div className="three-d-visualization">
      <div className="visualization-header">
        <h3>{getTitle()}</h3>
        <p>{getDescription()}</p>
      </div>
      <div 
        ref={mountRef}
        className="visualization-container"
        style={{
          width: '100%',
          height: '400px',
          border: '2px solid #444',
          borderRadius: '8px',
          background: 'rgba(0, 0, 0, 0.3)',
          margin: '10px 0'
        }}
      />
      <div className="visualization-footer">
        <p><em>"The heavens declare the glory of God; the skies proclaim the work of his hands." - Psalm 19:1</em></p>
      </div>
    </div>
  );
}
