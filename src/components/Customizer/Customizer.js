import { useCallback } from 'react';
import './Customizer.css';
import colorConfig from './CarConfig';
import gsap from 'gsap';
import ListComponent from '../ListCards/ListCards';
import { download, blinkAnimation } from './customizeUtils';

const Customizer = (props) => {
  const { modelRef, controlsRef, rendererRef, selectedCarIndex, actionRef, setColorIndex } = props;


  const rotateModel = useCallback(() => {
    gsap.to(modelRef.current.rotation, {
      y: Math.PI * 2,
      duration: 0.8,
      ease: 'power1.inOut',
      onComplete: () => {
        actionRef.current.play();
      },
    });
  }, [modelRef.current]);

  const stopModel = useCallback(() => {
    gsap.to(modelRef.current.rotation, {
      y: Math.PI * 2,
      duration: 0.8,
      ease: 'power1.inOut',
      onComplete: () => {
        actionRef.current.stop();
      },
    });
  }, [modelRef.current]);

  const onChange = useCallback(
    (index) => {
      setColorIndex(index);
      const position = colorConfig[selectedCarIndex].colorConfigs[index].modelPosition;
      gsap.to(controlsRef.current.object.position, {
        ...position,
        duration: 1,
        ease: 'power3.inOut',
      });
      colorConfig[selectedCarIndex].colorConfigs[index].types.forEach((type) => {
        blinkAnimation(type, modelRef);
      });
    },
    [modelRef.current, controlsRef.current],
  );


  function selectType(index) {
    onChange(index);
  }

  // const reset = useCallback(() => {
  //   const configToUse = generatedColorConfig.length
  //     ? generatedColorConfig
  //     : colorConfig[selectedCarIndex].colorConfigs;

  //   configToUse.forEach((config) => {
  //     config.types.forEach((type) => {
  //       modelRef.current.getObjectByName(type).material = modelRef.current
  //         .getObjectByName(type)
  //         .material.clone();

  //       gsap.to(modelRef.current.getObjectByName(type).material.color, {
  //         r: new THREE.Color(0xf6f6f6).r,
  //         g: new THREE.Color(0xf6f6f6).g,
  //         b: new THREE.Color(0xf6f6f6).b,
  //         duration: 0.1,
  //       });
  //     });
  //   });
  //   const position = colorConfig[selectedCarIndex].colorConfigs[2].modelPosition;
  //   gsap.to(controlsRef.current.object.position, {
  //     ...position,
  //     duration: 1,
  //     ease: 'power3.inOut',
  //   });
  //   modelRef.traverse(child => {
  //     console.log(child);
  //   })
  // }, []);

  // const currentColorConfig = generatedColorConfig.length
  //   ? generatedColorConfig
  //   : colorConfig[selectedCarIndex].colorConfigs;

  return (
    <div className='color-customizer'>
      <div className='color-generator'>

      </div>
      <div className='grid-component'>
        <div className="list-component" style={{ maxHeight: window.innerHeight }}>
          <ListComponent
            selectedCarIndex={selectedCarIndex}
            selectType={selectType}
          />
        </div>
        <div className='button-container'>
          {/* <button
            className='apply-button'
            disabled={currentColorConfig.length ? false : true}
            onClick={reset}
            aria-label='Reset'
            data-microtip-position='top'
            role='tooltip'
          >
            <img height={16} width={16} src='/logo/reload.svg' alt='reload'></img>
          </button> */}
          <button
            className='apply-button'
            onClick={rotateModel}
            aria-label='Surprise me'
            data-microtip-position='top'
            role='tooltip'
          >
            <img
              className='apply-colors'
              src='/logo/magic.png'
              alt='magic'
              width={24}
              height={24}
            ></img>
          </button>
          <button
            className='apply-button'
            onClick={() => {
              download(modelRef, rendererRef);
            }}
            aria-label='Download Image'
            data-microtip-position='top'
            role='tooltip'
          >
            <img
              className='apply-colors'
              src='/logo/download.svg'
              alt='magic'
              width={24}
              height={24}
            ></img>
          </button>
          <button
            className='apply-button'
            onClick={stopModel}
            aria-label='Stop me'
            data-microtip-position='top'
            role='tooltip'
          >
            <img
              className='apply-colors'
              src='/logo/stop.svg'
              alt='magic'
              width={24}
              height={24}
              style={{ color: 'grey' }}
            ></img>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Customizer;
