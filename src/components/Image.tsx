"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GUI } from "three/addons/libs/lil-gui.module.min.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const ThreeJsExample: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
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
    rotation: Math.PI / 4,
    centerX: 0.5,
    centerY: 0.5,
  };

  useEffect(() => {
    if (!containerRef.current) return;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight
    );
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      40,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
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
      const { clientWidth, clientHeight } = containerRef.current!;
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(clientWidth, clientHeight);
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
    const material = meshRef.current.material;
    if (
      material instanceof THREE.MeshBasicMaterial ||
      material instanceof THREE.MeshStandardMaterial
    ) {
      const texture = material.map;
      if (!texture) return;
      texture.offset.set(API.offsetX, API.offsetY);
      texture.repeat.set(API.repeatX, API.repeatY);
      texture.center.set(API.centerX, API.centerY);
      texture.rotation = API.rotation;
      render();
    }
  };

  return (
    <div
      ref={containerRef}
      style={{ width: "300px", height: "300px", border: "1px solid black" }}
      className="md:w-1/2 md:self-end"
    />
  );
};

export default ThreeJsExample;
