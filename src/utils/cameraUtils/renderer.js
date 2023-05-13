import * as THREE from 'three';
import gui from './debug';

export function setUpRenderer(canvasRef) {
  // create a Three.js renderer

  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    canvas: canvasRef.current,
    preserveDrawingBuffer: true,
  });

  renderer.setSize(window.innerWidth, window.innerHeight - 250);
  renderer.shadowMap.enabled = true;
  renderer.physicallyCorrectLights = true;
  // renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.toneMapping = THREE.ReinhardToneMapping;
  renderer.toneMappingExposure = 4.5;
  renderer.setClearColor(0x000000);
  renderer.setPixelRatio(window.devicePixelRatio);

  gui.add(renderer, 'toneMapping', {
    No: THREE.NoToneMapping,
    Linear: THREE.LinearToneMapping,
    Reinhard: THREE.ReinhardToneMapping,
    Cineon: THREE.CineonToneMapping,
    ACESFilmic: THREE.ACESFilmicToneMapping,
  });
  gui.add(renderer, 'toneMappingExposure').min(0).max(10).step(0.001);
  return renderer;
}
