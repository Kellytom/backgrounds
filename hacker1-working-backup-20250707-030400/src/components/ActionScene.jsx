// ActionScene.jsx - Three.js game-like component for Action subcategory
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { setupScene, createSacredGeometry, animateRotation, createParticleSystem } from '../scripts/threeSetup.js';

export default function ActionScene({ containerId = 'action-canvas' }) {
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

    // Create interactive elements
    const sacredCube = createSacredGeometry('cube', 'gold');
    sacredCube.position.x = -2;
    scene.add(sacredCube);

    const tetrahedron = createSacredGeometry('tetrahedron', 'ruby');
    tetrahedron.position.x = 2;
    scene.add(tetrahedron);

    const icosahedron = createSacredGeometry('icosahedron', 'crystal');
    icosahedron.position.y = 2;
    scene.add(icosahedron);

    // Add particle system
    const particles = createParticleSystem(500);
    scene.add(particles);

    // Animation functions
    const rotateCube = animateRotation(sacredCube, 0.01);
    const rotateTetra = animateRotation(tetrahedron, 0.015);
    const rotateIcosa = animateRotation(icosahedron, 0.008);

    // Mouse interaction
    const mouse = new THREE.Vector2();
    const raycaster = new THREE.Raycaster();
    let selectedObject = null;

    function onMouseMove(event) {
      const rect = container.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / containerWidth) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / containerHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects([sacredCube, tetrahedron, icosahedron]);

      // Reset all materials
      [sacredCube, tetrahedron, icosahedron].forEach(obj => {
        obj.material.emissive.setHex(0x000000);
      });

      if (intersects.length > 0) {
        const intersected = intersects[0].object;
        intersected.material.emissive.setHex(0x333333);
        container.style.cursor = 'pointer';
      } else {
        container.style.cursor = 'default';
      }
    }

    function onClick(event) {
      const rect = container.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / containerWidth) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / containerHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects([sacredCube, tetrahedron, icosahedron]);

      if (intersects.length > 0) {
        selectedObject = intersects[0].object;
        // Add a scaling animation on click
        const originalScale = selectedObject.scale.clone();
        selectedObject.scale.multiplyScalar(1.2);
        setTimeout(() => {
          selectedObject.scale.copy(originalScale);
        }, 200);
      }
    }

    container.addEventListener('mousemove', onMouseMove);
    container.addEventListener('click', onClick);

    // Animation loop
    function animate() {
      animationRef.current = requestAnimationFrame(animate);
      
      rotateCube();
      rotateTetra();
      rotateIcosa();
      
      // Animate particles
      particles.rotation.y += 0.002;
      
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
      container.removeEventListener('mousemove', onMouseMove);
      container.removeEventListener('click', onClick);
      window.removeEventListener('resize', handleResize);
      
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      
      renderer.dispose();
    };
  }, []);

  return (
    <div className="action-scene-container">
      <div className="action-controls">
        <h3>Interactive Sacred Geometry</h3>
        <p>Click and hover over the geometric shapes to interact with them. This demonstrates game-like interaction patterns using Three.js.</p>
      </div>
      <div 
        ref={mountRef} 
        id={containerId}
        style={{ 
          width: '100%', 
          height: '400px',
          border: '2px solid #444',
          borderRadius: '8px',
          background: 'rgba(0, 0, 0, 0.3)'
        }} 
      />
      <div className="action-info">
        <h4>Sacred Geometry Elements:</h4>
        <ul>
          <li><strong>Cube (Gold):</strong> Represents Earth element and stability</li>
          <li><strong>Tetrahedron (Ruby):</strong> Represents Fire element and transformation</li>
          <li><strong>Icosahedron (Crystal):</strong> Represents Water element and flow</li>
        </ul>
      </div>
    </div>
  );
}
