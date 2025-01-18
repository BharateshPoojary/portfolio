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
    scene.background = new THREE.Color(0xffffff); //sets the background color of the scene to white (0xffffff).
    sceneRef.current = scene; //Stores the scene instance in the sceneRef useRef hook

    // Camera setup
    const camera = new THREE.PerspectiveCamera( //Creates a new instance of a PerspectiveCamera with specific parameters.
      40,//The field of view (FOV) in degrees. It defines how wide the camera's view angle is. A smaller value zooms in, while a larger value zooms out.
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      //The aspect ratio, which is the width-to-height ratio of the camera's view. This ensures the scene looks correct without distortion. 
      /**Let’s say your container is 800px wide and 600px tall (800/600=1.33 800/600=1.33), but you use an aspect ratio of 2.0 instead.The scene will be stretched horizontally because the camera thinks it needs to render for a much wider viewport than what exists. This calculates the actual width-to-height ratio of the containerRef (likely a DOM element like a <div>).
      The calculated aspect ratio ensures the camera’s view matches the proportions of the container, maintaining proper scaling and avoiding distortion.*/
      1,//If the near clipping plane is set to 1, an object at a distance of 0.5 from the camera will not be visible.
      1000//If the far clipping plane is set to 1000, objects farther than 1000 units away from the camera will not be rendered.
    );
    camera.position.set(5, 15, 18);//Sets the position of the camera in the 3D space.(x,y,z) coordinate
    //The X-coordinate, determining how far the camera is moved horizontally.
    //The Y-coordinate, determining how far the camera is moved vertically.
    //The Z-coordinate, determining how far the camera is moved in depth (closer to or farther from the objects in the scene).
    scene.add(camera);//Adds the camera to the scene.
    cameraRef.current = camera;//cameraRef is likely a React useRef object, which is used to hold a reference to the camera instance.

    // OrbitControls setup
    const controls = new OrbitControls(camera, renderer.domElement);
    //Creates an instance of OrbitControls, which enables the user to orbit around, zoom in/out, and pan the camera interactively.This control is tied to the camera (the camera to be controlled) and renderer.domElement (the DOM element where the scene is rendered, typically a <canvas>).
    controls.addEventListener("change", render);//Adds an event listener that triggers the render function whenever the camera's position or orientation changes due to user interaction.

    controls.minDistance = 20;//Sets the minimum zoom distance for the camera. This prevents the user from zooming too close to the target point of the controls Prevents users from zooming too far into objects, which could cause visual artifacts or disorientation.
    controls.maxDistance = 50;//Sets the maximum zoom distance for the camera. This prevents the user from zooming too far away from the target point.
    controls.maxPolarAngle = Math.PI;

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
