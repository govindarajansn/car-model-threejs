import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export function setupControls(camera, canvasRef) {
  // Add controls
  var controls = new OrbitControls(camera, canvasRef.current);
  controls.target.set(1, 0, 0);
  controls.rotateSpeed = 0.2; // decrease rotation speed by half
  controls.zoomSpeed = 0.5; // decrease zoom speed by half
  controls.panSpeed = 0.5; // decrease pan speed by half
  controls.minDistance = 3.5;
  controls.maxDistance = 4.5;
  controls.enableDamping = true;
  controls.enablePan = false;
  controls.dampingFactor = 0.1;
  controls.autoRotate = false; // Toggle this if you'd like the chair to automatically rotate
  controls.autoRotateSpeed = 4; // 30
  window.controls = controls;
  return controls;
}
