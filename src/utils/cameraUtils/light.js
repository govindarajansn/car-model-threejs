import * as THREE from 'three';
import gui from './debug';

export const setupLights = (scene, debug = false) => {
  // Add hemisphere light to scene
  var hemiLight1 = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.8);
  hemiLight1.position.set(4, 2, 4);
  // Add hemisphere light to scene
  scene.add(hemiLight1);
  const hemiLight1Lighthelper = new THREE.HemisphereLightHelper(hemiLight1, 2, 0xff0000);

  gui.add(hemiLight1.position, 'x').min(-10).max(10).step(0.001).name('Hemi 1 lightX');
  gui.add(hemiLight1.position, 'y').min(-10).max(10).step(0.001).name(' Hemi 1 lightY');
  gui.add(hemiLight1.position, 'z').min(-10).max(10).step(0.001).name(' Hemi 1 lightZ');
  var hemiLight2 = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.4);
  hemiLight2.position.set(0, 2, 0);
  // Add hemisphere light to scene
  scene.add(hemiLight2);
  const hemiLight2Lighthelper = new THREE.HemisphereLightHelper(hemiLight2, 2, 0x0000ff);

  gui.add(hemiLight2.position, 'x').min(-10).max(10).step(0.001).name('Hemi 2 lightX');
  gui.add(hemiLight2.position, 'y').min(-10).max(10).step(0.001).name('Hemi 2lightY');
  gui.add(hemiLight2.position, 'z').min(-10).max(10).step(0.001).name('Hemi 2 lightZ');
  // upward
  var dirLight = new THREE.DirectionalLight(0xffffff, 0.4);

  dirLight.position.set(0.25, 3, -2.25);
  dirLight.shadow.mapSize.set(1024, 1024);
  dirLight.castShadow = true;
  dirLight.intensity = 8;
  dirLight.shadow.mapSize = new THREE.Vector2(1024, 1024);

  // Add directional Light to scene
  scene.add(dirLight);
  const lighthelper = new THREE.DirectionalLightHelper(dirLight, 1, 0x127048);

  gui.add(dirLight, 'intensity').min(0).max(10).step(0.001).name('lightIntensity');
  gui.add(dirLight.position, 'x').min(-5).max(5).step(0.001).name('lightX');
  gui.add(dirLight.position, 'y').min(-5).max(5).step(0.001).name('lightY');
  gui.add(dirLight.position, 'z').min(-5).max(5).step(0.001).name('lightZ');
  // Add the directional light to the scene
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
  directionalLight.position.set(0, -1, 0);
  directionalLight.target.position.set(0, -1, 0);
  const directionalLighthelper = new THREE.DirectionalLightHelper(directionalLight, 4, 0x127048);

  scene.add(directionalLight);

  if (debug) {
    scene.add(hemiLight1Lighthelper);
    scene.add(directionalLighthelper);
    scene.add(lighthelper);
    scene.add(hemiLight2Lighthelper);
  }

  return { directionalLight, dirLight, hemiLight1, hemiLight2 };
};
