import * as THREE from 'three';
import gui from './debug';

export const setUpCamera = (canvasRef) => {
  const camera = new THREE.PerspectiveCamera(
    80,
    canvasRef.current.clientWidth / canvasRef.current.clientHeight,
    0.1,
    1000,
  );
  camera.position.set(3, 2, 0);
  gui.add(camera.position, 'x').min(0).max(10).step(0.001).name('rotationyX');
  gui.add(camera.position, 'y').min(0).max(10).step(0.001).name('rotationY');
  gui.add(camera.position, 'z').min(0).max(10).step(0.001).name('rotationZ');

  return camera;
};
