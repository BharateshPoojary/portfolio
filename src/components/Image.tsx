"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three"; //THREE gives access to the core library for building the 3D scene.
import { GUI } from "three/addons/libs/lil-gui.module.min.js"; //t provides a simple interface for developers to tweak and control parameters (like object position, scale, rotation, colors, etc.) interactively during development.
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
//OrbitControls is a control utility for three.js that allows the user to orbit around an object using mouse or touch gestures. It’s commonly used to navigate 3D scenes in an intuitive manner.

const ThreeJsExample: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null); //This allows the three.js renderer to render the scene inside this specific DOM element.
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null); //The WebGLRenderer is responsible for rendering the 3D scene.
  const guiRef = useRef<GUI | null>(null); //The GUI instance allows interactive controls to tweak parameters of the scene, objects, or camera dynamically.
  const sceneRef = useRef<THREE.Scene | null>(null); //The Scene is the root container for all 3D objects, lights, and cameras in the three.js setup.
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null); //The PerspectiveCamera defines how the 3D scene is projected onto the 2D canvas (field of view, aspect ratio, near/far planes).
  const meshRef = useRef<THREE.Mesh | null>(null); //A Mesh is a combination of a Geometry (shape) and Material (appearance) used to render a visible object in the scene.

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
    //Creates a new instance of the WebGLRenderer class.
    //The WebGLRenderer is responsible for rendering the 3D scene onto a canvas using WebGL (Web Graphics Library), which is a low-level graphics API for rendering 2D and 3D graphics in the browser.
    renderer.setPixelRatio(window.devicePixelRatio);
    //Sets the pixel ratio of the renderer to match the device’s pixel density.
    //Ensures the rendered output looks crisp on high-DPI displays (like Retina screens).
    renderer.setSize(
      containerRef.current.clientWidth, //The width of the container <div> element in pixels.
      containerRef.current.clientHeight //The height of the container <div> element in pixels.
    );
    //Sets the size of the rendering canvas to match the dimensions of the container element.
    containerRef.current.appendChild(renderer.domElement); //Appends the renderer.domElement (the WebGL canvas element) to the container <div> referenced by containerRef.
    rendererRef.current = renderer;
    //Stores the renderer instance in the rendererRef useRef hook. so that it persists across all components
    // Scene setup
    const scene = new THREE.Scene();
    //Creates a new instance of the Scene class.
    //The Scene is the main container for all 3D objects, lights, cameras, and other elements in the three.js application.It acts as the "world" where everything in the 3D environment is placed.
    scene.background = new THREE.Color(0xffffff); //ets the background color of the scene to white (0xffffff).
    sceneRef.current = scene; //Stores the scene instance in the sceneRef useRef hook

    // Camera setup
    const camera = new THREE.PerspectiveCamera( //Creates a new instance of a PerspectiveCamera with specific parameters.
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
