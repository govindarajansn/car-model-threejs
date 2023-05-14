import React, { useCallback, useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import gui from '../../utils/cameraUtils/debug';
import { setupControls } from '../../utils/cameraUtils/controls';
import { setUpRenderer } from '../../utils/cameraUtils/renderer';
import { setupLights } from '../../utils/cameraUtils/light';
import { setUpCamera } from '../../utils/cameraUtils/camera';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment';
import { excludedMesh } from '../../utils/cameraUtils//model';
import Customizer from '../Customizer/Customizer';
import './Playground.css';
import carColorConfigs from '../Customizer/CarConfig';
import ColorPaletteComponent from '../Customizer/ColorPaletteComponent';

function getLoader() {
  const loader = new GLTFLoader();
  return loader;
}

const debugObject = {};

function Playground() {
  const [selectedCarIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const sceneRef = useRef(null);
  const canvasRef = useRef(null);
  const cameraRef = useRef(null);
  const controlsRef = useRef(null);
  const rendererRef = useRef(null);
  const modelRef = useRef(null);
  const mixerRef = useRef(null);
  const actionRef = useRef(null);

  const animate = useCallback(() => {
    controlsRef.current.update();
    mixerRef.current && mixerRef.current.update(0.01);
    rendererRef.current.render(sceneRef.current, cameraRef.current);
    requestAnimationFrame(animate);
  }, [mixerRef.current]);

  const handleLoad = (gltf, scene) => {
    console.log(gltf)
    const model = gltf.scene;
    modelRef.current = model;

    model.scale.set(1, 1, 1);
    model.position.set(-1, 0, 0);
    scene.add(gltf.scene);

    const clip = gltf.animations[0];
    mixerRef.current = new THREE.AnimationMixer(gltf.scene.children[0]);
    actionRef.current = mixerRef.current.clipAction(clip);
    // action.play();

    gui.add(model.rotation, 'y', -Math.PI, Math.PI, 0.001).name('rotation');

    scene.traverse((child) => {
      if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial) {
        child.material.envMapIntensity = debugObject.envMapIntensity;
        child.castShadow = true;
        child.receiveShadow = true;
        if (excludedMesh[child.name]) {
          child.material.color.set(0xffffff);
          return;
        }
      }
    });

    model.position.x = 1.4;
    model.position.y = 0;
    controlsRef.current.object.position.set(3.2721405209559538, 1.9869284325362329, 1.7718614102150416)
  };

  function setColorIndex(index) {
    setSelectedIndex(index);
  }


  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('rgb(f,f,f,0.1)');
    sceneRef.current = scene;

    const loader = getLoader();

    loader.load(carColorConfigs[selectedCarIndex].modelUrl, (gltf) => {
      handleLoad(gltf, scene);
    });

    cameraRef.current = setUpCamera(canvasRef);
    setupLights(scene);
    rendererRef.current = setUpRenderer(canvasRef);
    controlsRef.current = setupControls(cameraRef.current, canvasRef);
    const pmremGenerator = new THREE.PMREMGenerator(rendererRef.current);

    scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 1).texture;

    const environmentMap = new THREE.CubeTextureLoader().load([
      '/texture/environmentMaps/px.png',
      '/texture/environmentMaps/nx.png',
      '/texture/environmentMaps/py.png',
      '/texture/environmentMaps/ny.png',
      '/texture/environmentMaps/pz.png',
      '/texture/environmentMaps/nz.png',
    ]);

    environmentMap.encoding = THREE.sRGBEncoding;


    scene.environment = environmentMap;

    debugObject.envMapIntensity = 1;

    window.addEventListener('resize', () => {
      resize(rendererRef, cameraRef);
    });

    animate();
  }, [animate]);

  function resize(renderer, cameraRef) {
    // Update camera
    cameraRef.current.aspect = window.innerWidth / window.innerHeight;
    cameraRef.current.updateProjectionMatrix();

    // Update renderer
    renderer.current.setSize(window.innerWidth, window.innerHeight);
    renderer.current.setPixelRatio(2);
  }

  return (
    <div className='app'>
      <div className='header'>
        <div className='title'>{carColorConfigs[selectedCarIndex].name}</div>
        <div className='icons-list'>
          <a
            href={'https://www.linkedin.com/in/sneha-govindarajan/'}
            target='_blank'
            rel='noreferrer'
          >
            <img
              height={24}
              width={24}
              src={'/logo/linkedin.svg'}
              alt={'git-logo'}
              className='logo'
            ></img>
          </a>
        </div>
      </div>
      <div className="flex-container">
        <div className='car-region'>
          <canvas ref={canvasRef} className='webgl'></canvas>
          <div className="color-palate">
            <ColorPaletteComponent
              selectedIndex={selectedIndex}
              selectedCarIndex={selectedCarIndex}
              modelRef={modelRef}
            />
          </div>
        </div>
        <div className='side-container'>
          <Customizer
            selectedCarIndex={selectedCarIndex}
            modelRef={modelRef}
            cameraRef={cameraRef}
            controlsRef={controlsRef}
            canvasRef={canvasRef}
            rendererRef={rendererRef}
            actionRef={actionRef}
            setColorIndex={setColorIndex}
          ></Customizer>
        </div>
      </div>
    </div>
  );
}

export default Playground;
