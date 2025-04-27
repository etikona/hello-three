import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

// Initialize the scene
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshBasicMaterial({
  color: "blue",
});

// add object to the scene
const scene = new THREE.Scene();
const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);

scene.add(cubeMesh);

// Initialize the camera
// const camera = new THREE.PerspectiveCamera(
//   35,
//   window.innerWidth / window.innerHeight,
//   0.001,
//   30
// );
const aspectRatio = window.innerWidth / window.innerHeight;

const camera = new THREE.OrthographicCamera(
  -1 * aspectRatio,
  1 * aspectRatio,
  1,
  -1,
  0.1,
  200
);

camera.position.z = 5;

// Initialize the render
const canvas = document.querySelector("canvas.threejs");
const renderer = new THREE.WebGLRenderer({ canvas: canvas });

renderer.setSize(window.innerWidth, window.innerHeight);
//Initialize the control
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.autoRotate = true;

const animate = () => {
  controls.update();
  window.requestAnimationFrame(animate);
  renderer.render(scene, camera);
};

animate();
