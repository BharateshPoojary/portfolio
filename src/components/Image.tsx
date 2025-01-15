"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GUI } from "three/addons/libs/lil-gui.module.min.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
// import facebook from "./facebook.jpg";

const ThreeJsExample: React.FC = () => {
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const guiRef = useRef<GUI | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const meshRef = useRef<THREE.Mesh | null>(null);

  const API = {
    offsetX: 0,
    offsetY: 0,
    repeatX: 0.25,
    repeatY: 0.25,
    rotation: Math.PI / 4, // positive is counterclockwise
    centerX: 0.5,
    centerY: 0.5,
  };

  useEffect(() => {
    // Renderer setup
    const renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      40,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    camera.position.set(10, 15, 25);
    scene.add(camera);
    cameraRef.current = camera;

    // OrbitControls setup
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.addEventListener("change", render);
    controls.minDistance = 20;
    controls.maxDistance = 50;
    controls.maxPolarAngle = Math.PI / 2;

    // Geometry and texture setup
    const geometry = new THREE.BoxGeometry(10, 10, 10);

    new THREE.TextureLoader().load("/Bharat.jpg", (texture) => {
      texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
      texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
      texture.colorSpace = THREE.SRGBColorSpace;

      const material = new THREE.MeshBasicMaterial({ map: texture });

      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);
      meshRef.current = mesh;

      updateUvTransform();

      // Initialize GUI
      const gui = new GUI();
      gui
        .add(API, "offsetX", 0.0, 1.0)
        .name("offset.x")
        .onChange(updateUvTransform);
      gui
        .add(API, "offsetY", 0.0, 1.0)
        .name("offset.y")
        .onChange(updateUvTransform);
      gui
        .add(API, "repeatX", 0.25, 2.0)
        .name("repeat.x")
        .onChange(updateUvTransform);
      gui
        .add(API, "repeatY", 0.25, 2.0)
        .name("repeat.y")
        .onChange(updateUvTransform);
      gui
        .add(API, "rotation", -2.0, 2.0)
        .name("rotation")
        .onChange(updateUvTransform);
      gui
        .add(API, "centerX", 0.0, 1.0)
        .name("center.x")
        .onChange(updateUvTransform);
      gui
        .add(API, "centerY", 0.0, 1.0)
        .name("center.y")
        .onChange(updateUvTransform);
      guiRef.current = gui;

      render();
    });

    const onWindowResize = () => {
      if (!camera || !renderer) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      render();
    };

    window.addEventListener("resize", onWindowResize);

    return () => {
      window.removeEventListener("resize", onWindowResize);
      renderer.dispose();
      guiRef.current?.destroy();
    };
  }, []);

  const render = () => {
    if (!rendererRef.current || !sceneRef.current || !cameraRef.current) return;
    rendererRef.current.render(sceneRef.current, cameraRef.current);
  };

  const updateUvTransform = () => {
    if (!meshRef.current) return;
    if (meshRef.current) {
      const material = meshRef.current.material;

      // Check if material is an array or a single material
      if (Array.isArray(material)) {
        // Handle array of materials (if needed)
        console.warn("Material is an array. Handle accordingly.");
        return;
      }
      // Check if the material has a 'map' property
      if (
        material instanceof THREE.MeshStandardMaterial ||
        material instanceof THREE.MeshBasicMaterial
      ) {
        const texture = material.map;
        if (!texture) return;

        if (texture.matrixAutoUpdate === true) {
          texture.offset.set(API.offsetX, API.offsetY);
          texture.repeat.set(API.repeatX, API.repeatY);
          texture.center.set(API.centerX, API.centerY);
          texture.rotation = API.rotation; // rotation is around center
        } else {
          texture.matrix
            .identity()
            .translate(-API.centerX, -API.centerY)
            .rotate(API.rotation) // Rotation precedes scaling
            .scale(API.repeatX, API.repeatY)
            .translate(API.centerX, API.centerY)
            .translate(API.offsetX, API.offsetY);
        }
        // Do something with the texture
        console.log("Texture found:", texture);
      } else {
        console.warn("Material does not have a map property.");
      }

      render();
    }
  };
  return null; // No direct JSX content since Three.js operates on the DOM
};

export default ThreeJsExample;
