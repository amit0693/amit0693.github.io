"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { TextureLoader } from "three";

interface IconCloudProps {
  images: string[];
  radius?: number;
  depth?: number;
  count?: number;
  imageSize?: number;
  autoRotate?: boolean;
  rotationSpeed?: number;
}

export function IconCloud({
  images,
  radius = 300,
  depth = 10,
  count = 30,
  imageSize = 60,
  autoRotate = true,
  rotationSpeed = 0.001,
}: IconCloudProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const spritesRef = useRef<THREE.Sprite[]>([]);
  const frameIdRef = useRef<number | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Initialize scene, camera, and renderer
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 400;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight
    );
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create sprites
    const sprites: THREE.Sprite[] = [];
    const textureLoader = new TextureLoader();

    for (let i = 0; i < count; i++) {
      const imgIndex = i % images.length;
      const texture = textureLoader.load(images[imgIndex]);
      const material = new THREE.SpriteMaterial({ map: texture });
      const sprite = new THREE.Sprite(material);

      // Position in a sphere
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;

      sprite.position.setFromSphericalCoords(
        radius,
        phi,
        theta
      );

      // Add some randomness to z position for depth
      sprite.position.z += (Math.random() - 0.5) * depth;
      
      // Set size
      sprite.scale.set(imageSize, imageSize, 1);
      
      scene.add(sprite);
      sprites.push(sprite);
    }

    spritesRef.current = sprites;

    // Animation loop
    const animate = () => {
      frameIdRef.current = requestAnimationFrame(animate);

      if (autoRotate) {
        scene.rotation.y += rotationSpeed;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current || !cameraRef.current || !rendererRef.current) return;
      
      cameraRef.current.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(
        containerRef.current.clientWidth,
        containerRef.current.clientHeight
      );
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      
      if (frameIdRef.current !== null) {
        cancelAnimationFrame(frameIdRef.current);
      }
      
      if (rendererRef.current && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      
      // Dispose of resources
      spritesRef.current.forEach((sprite) => {
        if (sprite.material instanceof THREE.SpriteMaterial) {
          sprite.material.map?.dispose();
          sprite.material.dispose();
        }
        scene.remove(sprite);
      });
    };
  }, [images, radius, depth, count, imageSize, autoRotate, rotationSpeed]);

  return <div ref={containerRef} className="w-full h-full" />;
}
