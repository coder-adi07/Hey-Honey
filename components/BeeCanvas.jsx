'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function BeeCanvas() {
  const mountRef = useRef(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const container = mountRef.current;
    if (!container) return;

    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || 600;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 9);

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance',
      });
    } catch (e) {
      console.warn('WebGL not supported or context error:', e);
      return;
    }

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xfff6e5, 1.4);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xffd580, 2.2);
    sunLight.position.set(5, 8, 5);
    scene.add(sunLight);

    const beeLight = new THREE.PointLight(0xe5b34f, 2.5, 8);
    scene.add(beeLight);

    // ==========================================
    // 3D HONEY BEE GROUP CREATION
    // ==========================================
    const beeGroup = new THREE.Group();
    beeGroup.scale.set(0.75, 0.75, 0.75);
    scene.add(beeGroup);

    // Materials
    const goldYellowMat = new THREE.MeshStandardMaterial({
      color: 0xdeb841,
      roughness: 0.35,
      metalness: 0.15,
    });
    const darkStripeMat = new THREE.MeshStandardMaterial({
      color: 0x241d15,
      roughness: 0.5,
      metalness: 0.1,
    });
    const thoraxMat = new THREE.MeshStandardMaterial({
      color: 0x6e4922,
      roughness: 0.6,
      metalness: 0.1,
    });
    const eyeMat = new THREE.MeshStandardMaterial({
      color: 0x120d09,
      roughness: 0.15,
      metalness: 0.8,
    });
    const wingMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.68,
      roughness: 0.1,
      metalness: 0.1,
      side: THREE.DoubleSide,
    });

    // 1. Thorax (Middle Body)
    const thoraxGeo = new THREE.SphereGeometry(0.52, 20, 20);
    thoraxGeo.scale(1, 0.9, 1.1);
    const thorax = new THREE.Mesh(thoraxGeo, thoraxMat);
    thorax.position.set(0, 0, 0);
    beeGroup.add(thorax);

    // 2. Head
    const headGeo = new THREE.SphereGeometry(0.38, 16, 16);
    headGeo.scale(0.9, 0.85, 0.9);
    const head = new THREE.Mesh(headGeo, thoraxMat);
    head.position.set(0, 0.05, 0.75);
    beeGroup.add(head);

    // Eyes
    const eyeGeo = new THREE.SphereGeometry(0.14, 12, 12);
    eyeGeo.scale(0.8, 1.2, 0.9);
    const leftEye = new THREE.Mesh(eyeGeo, eyeMat);
    leftEye.position.set(0.2, 0.12, 0.85);
    leftEye.rotation.set(0.2, 0.3, -0.2);
    beeGroup.add(leftEye);

    const rightEye = new THREE.Mesh(eyeGeo, eyeMat);
    rightEye.position.set(-0.2, 0.12, 0.85);
    rightEye.rotation.set(0.2, -0.3, 0.2);
    beeGroup.add(rightEye);

    // Antennae
    const antennaMat = new THREE.MeshBasicMaterial({ color: 0x1e1610 });
    const antennaGeo = new THREE.CylinderGeometry(0.018, 0.015, 0.4, 6);
    const leftAntenna = new THREE.Mesh(antennaGeo, antennaMat);
    leftAntenna.position.set(0.1, 0.32, 0.95);
    leftAntenna.rotation.set(0.6, 0.2, -0.3);
    beeGroup.add(leftAntenna);

    const rightAntenna = new THREE.Mesh(antennaGeo, antennaMat);
    rightAntenna.position.set(-0.1, 0.32, 0.95);
    rightAntenna.rotation.set(0.6, -0.2, 0.3);
    beeGroup.add(rightAntenna);

    // 3. Abdomen (Striped Rear)
    const abdomenGroup = new THREE.Group();
    abdomenGroup.position.set(0, -0.05, -0.5);
    beeGroup.add(abdomenGroup);

    const segments = [
      { r: 0.48, len: 0.22, z: -0.1, mat: goldYellowMat },
      { r: 0.52, len: 0.22, z: -0.3, mat: darkStripeMat },
      { r: 0.5, len: 0.22, z: -0.5, mat: goldYellowMat },
      { r: 0.44, len: 0.22, z: -0.7, mat: darkStripeMat },
      { r: 0.35, len: 0.22, z: -0.9, mat: goldYellowMat },
      { r: 0.22, len: 0.2, z: -1.08, mat: darkStripeMat },
    ];

    segments.forEach((seg) => {
      const geo = new THREE.CylinderGeometry(seg.r * 0.95, seg.r, seg.len, 18);
      geo.rotateX(Math.PI / 2);
      const mesh = new THREE.Mesh(geo, seg.mat);
      mesh.position.set(0, 0, seg.z);
      abdomenGroup.add(mesh);
    });

    // Stinger
    const stingerGeo = new THREE.ConeGeometry(0.06, 0.22, 8);
    stingerGeo.rotateX(-Math.PI / 2);
    const stinger = new THREE.Mesh(stingerGeo, darkStripeMat);
    stinger.position.set(0, 0, -1.25);
    abdomenGroup.add(stinger);

    // 4. Wings
    const wingGeo = new THREE.CircleGeometry(0.65, 24);
    wingGeo.scale(0.55, 1.4, 1);

    const leftWingPivot = new THREE.Group();
    leftWingPivot.position.set(0.28, 0.38, 0.1);
    const leftWing = new THREE.Mesh(wingGeo, wingMat);
    leftWing.position.set(0.35, 0.05, -0.2);
    leftWing.rotation.set(-Math.PI / 2.2, 0.2, -0.4);
    leftWingPivot.add(leftWing);
    beeGroup.add(leftWingPivot);

    const rightWingPivot = new THREE.Group();
    rightWingPivot.position.set(-0.28, 0.38, 0.1);
    const rightWing = new THREE.Mesh(wingGeo, wingMat);
    rightWing.position.set(-0.35, 0.05, -0.2);
    rightWing.rotation.set(-Math.PI / 2.2, -0.2, 0.4);
    rightWingPivot.add(rightWing);
    beeGroup.add(rightWingPivot);

    const smallWingGeo = new THREE.CircleGeometry(0.42, 20);
    smallWingGeo.scale(0.5, 1.2, 1);

    const leftHindPivot = new THREE.Group();
    leftHindPivot.position.set(0.25, 0.32, -0.1);
    const leftHindWing = new THREE.Mesh(smallWingGeo, wingMat);
    leftHindWing.position.set(0.28, 0.03, -0.15);
    leftHindWing.rotation.set(-Math.PI / 2.2, 0.15, -0.5);
    leftHindPivot.add(leftHindWing);
    beeGroup.add(leftHindPivot);

    const rightHindPivot = new THREE.Group();
    rightHindPivot.position.set(-0.25, 0.32, -0.1);
    const rightHindWing = new THREE.Mesh(smallWingGeo, wingMat);
    rightHindWing.position.set(-0.28, 0.03, -0.15);
    rightHindWing.rotation.set(-Math.PI / 2.2, -0.15, 0.5);
    rightHindPivot.add(rightHindWing);
    beeGroup.add(rightHindPivot);

    // 5. Tiny Legs
    const legMat = new THREE.MeshStandardMaterial({ color: 0x221a12, roughness: 0.6 });
    for (let i = 0; i < 3; i++) {
      const zOffset = 0.15 - i * 0.22;
      const legGeo = new THREE.CylinderGeometry(0.02, 0.015, 0.4, 6);

      const lLeg = new THREE.Mesh(legGeo, legMat);
      lLeg.position.set(0.28, -0.32, zOffset);
      lLeg.rotation.set(0.3, 0, -0.6);
      beeGroup.add(lLeg);

      const rLeg = new THREE.Mesh(legGeo, legMat);
      rLeg.position.set(-0.28, -0.32, zOffset);
      rLeg.rotation.set(0.3, 0, 0.6);
      beeGroup.add(rLeg);
    }

    // ==========================================
    // FLOATING GOLDEN POLLEN DUST
    // ==========================================
    const pollenCount = 140;
    const pollenGeo = new THREE.BufferGeometry();
    const pollenPos = new Float32Array(pollenCount * 3);

    for (let i = 0; i < pollenCount * 3; i += 3) {
      pollenPos[i] = (Math.random() - 0.5) * 16;
      pollenPos[i + 1] = (Math.random() - 0.5) * 10;
      pollenPos[i + 2] = (Math.random() - 0.5) * 8 - 1;
    }

    pollenGeo.setAttribute('position', new THREE.BufferAttribute(pollenPos, 3));

    const pollenMat = new THREE.PointsMaterial({
      size: 0.16,
      color: 0xdeb841,
      transparent: true,
      opacity: 0.75,
    });

    const pollenPoints = new THREE.Points(pollenGeo, pollenMat);
    scene.add(pollenPoints);

    // Mouse Interaction
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;
      mouse.targetX = (clientX / width) * 2 - 1;
      mouse.targetY = -(clientY / height) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || 600;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let clock = new THREE.Clock();
    let reqId;

    const animate = () => {
      reqId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      const flightX = Math.sin(elapsed * 0.8) * 2.6 + mouse.x * 2.0;
      const flightY = Math.cos(elapsed * 1.1) * 1.0 + Math.sin(elapsed * 1.8) * 0.3 + mouse.y * 1.4;
      const flightZ = Math.sin(elapsed * 0.6) * 1.2 + 1.0;

      beeGroup.position.x += (flightX - beeGroup.position.x) * 0.08;
      beeGroup.position.y += (flightY - beeGroup.position.y) * 0.08;
      beeGroup.position.z += (flightZ - beeGroup.position.z) * 0.08;

      const nextX = Math.sin((elapsed + 0.1) * 0.8) * 2.6 + mouse.x * 2.0;
      const nextY = Math.cos((elapsed + 0.1) * 1.1) * 1.0 + mouse.y * 1.4;
      const dirX = nextX - beeGroup.position.x;
      const dirY = nextY - beeGroup.position.y;

      beeGroup.rotation.y = Math.atan2(dirX, 1.5) + Math.PI;
      beeGroup.rotation.x = -dirY * 0.5 + Math.sin(elapsed * 4) * 0.05;
      beeGroup.rotation.z = -dirX * 0.35;

      const wingFlap = Math.sin(elapsed * 50) * 0.65;
      leftWingPivot.rotation.z = wingFlap;
      rightWingPivot.rotation.z = -wingFlap;
      leftHindPivot.rotation.z = wingFlap * 0.85;
      rightHindPivot.rotation.z = -wingFlap * 0.85;

      abdomenGroup.rotation.x = Math.sin(elapsed * 3) * 0.1;
      beeLight.position.copy(beeGroup.position);

      const positions = pollenPoints.geometry.attributes.position.array;
      for (let i = 1; i < pollenCount * 3; i += 3) {
        positions[i] -= 0.006;
        if (positions[i] < -5) positions[i] = 5;
      }
      pollenPoints.geometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(reqId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container && renderer && renderer.domElement) {
        try {
          container.removeChild(renderer.domElement);
          renderer.dispose();
        } catch (e) {}
      }
    };
  }, [isClient]);

  if (!isClient) return null;

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
}
