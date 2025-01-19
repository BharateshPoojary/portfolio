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

  // const API = {This object is used when need gui controls
  //   offsetX: 0,
  //   offsetY: 0,
  //   repeatX: 0.25,
  //   repeatY: 0.25,
  //   rotation: Math.PI / 4,
  //   centerX: 0.5,
  //   centerY: 0.5,
  // };

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
      40, //The field of view (FOV) in degrees. It defines how wide the camera's view angle is. A smaller value zooms in, while a larger value zooms out.
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      //The aspect ratio, which is the width-to-height ratio of the camera's view. This ensures the scene looks correct without distortion.
      /**Let’s say your container is 800px wide and 600px tall (800/600=1.33 800/600=1.33), but you use an aspect ratio of 2.0 instead.The scene will be stretched horizontally because the camera thinks it needs to render for a much wider viewport than what exists. This calculates the actual width-to-height ratio of the containerRef (likely a DOM element like a <div>).
      The calculated aspect ratio ensures the camera’s view matches the proportions of the container, maintaining proper scaling and avoiding distortion.*/
      1, //If the near clipping plane is set to 1, an object at a distance of 0.5 from the camera will not be visible.
      1000 //If the far clipping plane is set to 1000, objects farther than 1000 units away from the camera will not be rendered.
    );
    camera.position.set(15, 15, 18); //Sets the position of the camera in the 3D space.(x,y,z) coordinate
    //The X-coordinate, determining how far the camera is moved horizontally.
    //The Y-coordinate, determining how far the camera is moved vertically.
    //The Z-coordinate, determining how far the camera is moved in depth (closer to or farther from the objects in the scene).
    scene.add(camera); //Adds the camera to the scene.
    cameraRef.current = camera; //cameraRef is likely a React useRef object, which is used to hold a reference to the camera instance.

    // OrbitControls setup
    const controls = new OrbitControls(camera, renderer.domElement);
    //Creates an instance of OrbitControls, which enables the user to orbit around, zoom in/out, and pan the camera interactively.This control is tied to the camera (the camera to be controlled) and renderer.domElement (the DOM element where the scene is rendered, typically a <canvas>).
    controls.addEventListener("change", render); //Adds an event listener that triggers the render function whenever the camera's position or orientation changes due to user interaction.

    controls.minDistance = 20; //Sets the minimum zoom distance for the camera. This prevents the user from zooming too close to the target point of the controls Prevents users from zooming too far into objects, which could cause visual artifacts or disorientation.
    controls.maxDistance = 40; //Sets the maximum zoom distance for the camera. This prevents the user from zooming too far away from the target point.
    controls.maxPolarAngle = Math.PI;
    //maxPolarAngle defines the maximum vertical angle (in radians) that the camera can orbit relative to the upward direction (the Y-axis by default).
    // 𝜋 =  180°. i.e it can move 180 deg vertically
    //π/2 i.e it can move 90 deg vertically
    //π/3 i.e it can move 60 deg veritcally
    //     // Geometry and texture setup
    const geometry = new THREE.BoxGeometry(10, 10, 10);
    //reates a box geometry with dimensions 10x10x10.
    //The BoxGeometry is a built-in geometry class in Three.js that represents a cube or rectangular prism.
    //10x10x10 represent width,height and depth of box i.e.(X,Y,Z  axis
    new THREE.TextureLoader().load("/Bharat.jpg", (texture) => {
      //a texture is a 2D image or pattern that is applied to the surface of a 3D object to give it a detailed appearance.
      //Loads the texture (Bharat.jpg) asynchronously.
      // Callback function is invoked once the texture is successfully loaded.
      texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
      //Control how the texture repeats in the horizontal (S) and vertical (T) directions.
      //THREE.RepeatWrapping allows the texture to repeat.
      texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
      //Enhances texture clarity at oblique angles.
      //renderer.capabilities.getMaxAnisotropy() retrieves the maximum supported anisotropy value.
      texture.colorSpace = THREE.SRGBColorSpace;
      //Specifies the color space of the texture.
      //THREE.SRGBColorSpace makes the texture color space consistent with sRGB.
      const material = new THREE.MeshBasicMaterial({ map: texture });
      //A material An image or pattern applied to the surface.
      //a material defines the appearance of the surface of a 3D object.
      //creates a material that applies the texture to the geometry.
      // map: texture specifies the loaded texture as the material's texture map.
      const mesh = new THREE.Mesh(geometry, material);
      //Combines geometry (BoxGeometry) and material (MeshBasicMaterial) into a renderable object.
      scene.add(mesh); //includes the mesh in the scene for rendering.
      meshRef.current = mesh;

      updateUvTransform(); // Invokes a function to apply initial UV transformation settings. Likely updates properties like offset, rotation, or repeat based on the API object.

      // Creates a GUI using the dat.GUI library for real-time parameter adjustments.
      // const gui = new GUI();
      // gui//Adds interactive controls for UV transformations.
      //   .add(API, "offsetX", 0.0, 1.0)//API: An object storing adjustable properties (e.g., offsetX, offsetY, repeatX, etc.).
      //   //"offsetX": The property in API to adjust.
      //   //0.0, 1.0: The range of values for the slider.
      //   .name("offset.x")//Renames the control in the GUI (e.g., offset.x).
      //   .onChange(updateUvTransform);//Calls updateUvTransform whenever the property changes to reflect the updates in the scene.
      // gui
      //   .add(API, "offsetY", 0.0, 1.0)
      //   .name("offset.y")
      //   .onChange(updateUvTransform);
      // gui
      //   .add(API, "repeatX", 0.25, 2.0)
      //   .name("repeat.x")
      //   .onChange(updateUvTransform);
      // gui
      //   .add(API, "repeatY", 0.25, 2.0)
      //   .name("repeat.y")
      //   .onChange(updateUvTransform);
      // gui
      //   .add(API, "rotation", -2.0, 2.0)
      //   .name("rotation")
      //   .onChange(updateUvTransform);
      // gui
      //   .add(API, "centerX", 0.0, 1.0)
      //   .name("center.x")
      //   .onChange(updateUvTransform);
      // gui
      //   .add(API, "centerY", 0.0, 1.0)
      //   .name("center.y")
      //   .onChange(updateUvTransform);
      // guiRef.current = gui;

      render(); //Calls a function to render the scene after making changes.
    });

    const onWindowResize = () => {
      //Ensures the scene is rendered correctly after resizing.
      if (!camera || !renderer) return;
      const { clientWidth, clientHeight } = containerRef.current!; //Retrieves the width and height of the container element (containerRef.current
      //clientWidth and clientHeight: Reflect the current size of the container.
      camera.aspect = clientWidth / clientHeight; //camera.aspect: The width-to-height ratio of the view. Must match the container's aspect ratio for proper rendering.
      camera.updateProjectionMatrix(); //Recalculates the projection matrix to apply the new aspect ratio.
      renderer.setSize(clientWidth, clientHeight); //Updates the renderer's size to match the container.
      render(); //Ensures the scene is redrawn immediately after resizing.
    };

    window.addEventListener("resize", onWindowResize); //istens for the browser's resize event and triggers onWindowResize when the window is resized.
    //Executes cleanup when the component is unmounted
    return () => {
      window.removeEventListener("resize", onWindowResize); //Removes the event listener when the component unmounts.
      renderer.dispose(); //Frees GPU resources used by the renderer.
      guiRef.current?.destroy();
      // Destroys the GUI, cleaning up its resources.
    };
  }, []);

  const render = () => {
    //Renders the current scene using the Three.js renderer.
    if (!rendererRef.current || !sceneRef.current || !cameraRef.current) return; //Ensures rendering only happens if the necessary references (renderer, scene, and camera) are initialized.
    rendererRef.current.render(sceneRef.current, cameraRef.current); //Renders the scene (sceneRef.current) from the perspective of the camera (cameraRef.current) onto the canvas managed by the renderer.
  };

  const updateUvTransform = () => {
    //Updates the UV transformations (like offset, repeat, center, and rotation) for the texture applied to a 3D mesh.
    if (!meshRef.current) return;
    const material = meshRef.current.material; //Accesses the material applied to the mesh.
    if (
      material instanceof THREE.MeshBasicMaterial ||
      material instanceof THREE.MeshStandardMaterial
    ) {
      //ome materials, like THREE.MeshBasicMaterial and THREE.MeshStandardMaterial, support textures and UV transformations.
      //Other materials (e.g., THREE.ShaderMaterial) may not have a map property or handle UVs differently.
      const texture = material.map; //Retrieves the texture (material.map) applied to the material.
      if (!texture) return; //Exits if no texture is present, as UV transformations are irrelevant without a texture.
      texture.offset.set(0.066, 0.164); //Adjusts the starting point of the texture on the mesh.Values range between 0 and 1, where (0, 0) represents the bottom-left corner.
      texture.repeat.set(0.94675, 0.66675); //Controls how many times the texture repeats along the U (x-axis) and V (y-axis) directions.
      texture.center.set(0.508, 0.5); //Controls how many times the texture repeats along the U (x-axis) and V (y-axis) directions.
      texture.rotation = -0.016; //Rotates the texture around the center point in radians.
      render(); //Ensures the scene is updated immediately to reflect the new texture transformations.
    }
  };

  return (
    <div
      ref={containerRef}
      style={{ width: "400px", height: "400px" }}
      className=" flex justify-center align-middle md:w-1/2 md:self-end"
    />
  );
};

export default ThreeJsExample;
