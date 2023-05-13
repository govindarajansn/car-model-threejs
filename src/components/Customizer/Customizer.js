import { useCallback, useState, useRef, useEffect } from 'react';
import './Customizer.css';
import ColorPalette from '../ColorPalette/ColorPalette.tsx';
import colorConfig from './ShoeConfig';
import Carousel from '../Carousel/Carousel';
import * as THREE from 'three';
import gsap from 'gsap';
import { fetchColorPalette } from '../../utils/apiUtils/api';
import { generateConfig } from '../Customizer/buildColorConfig';
import { getRandomColor, download, changeColor, blinkAnimation } from './customizeUtils';
import BottomSheet from '../BottomSheet/BottomSheet';
import Menu from '../Menu/Menu';

const Customizer = (props) => {
  const { modelRef, controlsRef, rendererRef, selectedShoeIndex, actionRef } = props;
  const colorInputRef = useRef(null);
  const [showMenu, setShowMenu] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [description, setDescription] = useState('');
  const [generatedColorConfig, setGeneratedColorConfig] = useState([]);

  function handleDescriptionChange(event) {
    setDescription(event.target.value);
  }

  useEffect(() => {
    setSelectedIndex(0);
  }, [selectedShoeIndex]);

  async function generateColorPalette() {
    if (!description) {
      return;
    }
    const requestBody = {
      description: description,
      type: 'DESCRIPTION',
      count: 8,
    };
    const response = await fetchColorPalette(requestBody);
    setGeneratedColorConfig(generateConfig(selectedShoeIndex, response.data.colors));
  }

  function applyColor() {
    changeColor(
      colorInputRef.current.value,
      colorConfig[selectedShoeIndex].colorConfigs[selectedIndex].types,
      modelRef,
    );
  }

  // const applyColorPalette = useCallback(() => {
  //   const configToUse = generatedColorConfig.length
  //     ? generatedColorConfig
  //     : colorConfig[selectedShoeIndex].colorConfigs;

  //   configToUse.forEach((config) => {
  //     const colorToApply = getRandomColor(config.colors);
  //     config.types.forEach((type) => {
  //       console.log(modelRef.current.getObjectByName(type));
  //       modelRef.current.getObjectByName(type).material = modelRef.current
  //         .getObjectByName(type)
  //         .material.clone();

  //       gsap.to(modelRef.current.getObjectByName(type).material.color, {
  //         r: new THREE.Color(colorToApply).r,
  //         g: new THREE.Color(colorToApply).g,
  //         b: new THREE.Color(colorToApply).b,
  //         duration: 0.1,
  //       });
  //     });
  //   });
  // }, [modelRef.current, generatedColorConfig]);

  const rotateModel = useCallback(() => {
    gsap.to(modelRef.current.rotation, {
      y: Math.PI * 2,
      duration: 0.8,
      ease: 'power1.inOut',
      onComplete: () => {
        // gsap.to(modelRef.current.rotation, {
        //   y: 0,
        //   duration: 0,
        // });
        console.log(actionRef);
        // actionRef.current.play();
      },
    });
  }, [modelRef.current]);

  const onChange = useCallback(
    (index) => {
      setSelectedIndex(index);
      const position = colorConfig[selectedShoeIndex].colorConfigs[index].modelPosition;
      gsap.to(controlsRef.current.object.position, {
        ...position,
        duration: 1,
        ease: 'power3.inOut',
      });
      colorConfig[selectedShoeIndex].colorConfigs[index].types.forEach((type) => {
        blinkAnimation(type, modelRef);
      });
    },
    [modelRef.current, controlsRef.current],
  );

  function selectMenu(index) {
    onChange(index);
    setShowMenu(false);
  }

  function closeMenu() {
    setShowMenu(false);
  }

  const reset = useCallback(() => {
    const configToUse = generatedColorConfig.length
      ? generatedColorConfig
      : colorConfig[selectedShoeIndex].colorConfigs;

    configToUse.forEach((config) => {
      config.types.forEach((type) => {
        modelRef.current.getObjectByName(type).material = modelRef.current
          .getObjectByName(type)
          .material.clone();

        gsap.to(modelRef.current.getObjectByName(type).material.color, {
          r: new THREE.Color(0xf6f6f6).r,
          g: new THREE.Color(0xf6f6f6).g,
          b: new THREE.Color(0xf6f6f6).b,
          duration: 0.1,
        });
      });
    });
    const position = colorConfig[selectedShoeIndex].colorConfigs[2].modelPosition;
    gsap.to(controlsRef.current.object.position, {
      ...position,
      duration: 1,
      ease: 'power3.inOut',
    });
  }, [generatedColorConfig, modelRef.current, controlsRef.current]);

  const currentColorConfig = generatedColorConfig.length
    ? generatedColorConfig
    : colorConfig[selectedShoeIndex].colorConfigs;

  return (
    <div className='color-customizer'>
      <div className='color-generator'>
        <div className='button-container'>
          {/* <input
            placeholder='Describe theme for color'
            type='text'
            className='description-input'
            value={description}
            onChange={handleDescriptionChange}
          ></input> */}
          {/* <button
            className='generate-button'
            disabled={description.trim() ? false : true}
            onClick={generateColorPalette}
            aria-label='Generate color palette from description'
            data-microtip-position='bottom'
            role='tooltip'
          >
            Generate
          </button> */}
          <button
            className='apply-button'
            disabled={currentColorConfig.length ? false : true}
            onClick={reset}
            aria-label='Reset'
            data-microtip-position='bottom'
            role='tooltip'
          >
            <img height={16} width={16} src='/logo/reload.svg' alt='reload'></img>
          </button>
          <button
            className='apply-button'
            onClick={rotateModel}
            aria-label='Surprise me'
            data-microtip-position='bottom'
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
            data-microtip-position='bottom'
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
          <div className='color-picker'>
            <input
              type={'color'}
              className='color-input'
              aria-label='Pick Color'
              data-microtip-position='bottom'
              role='tooltip'
              ref={colorInputRef}
            ></input>
            <button
              className='menu-button'
              onClick={() => {
                applyColor();
              }}
            >
              Apply
            </button>
          </div>
        </div>
        <div className='menu-container'>
          <button
            className='menu-button'
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          >
            Menu
          </button>
        </div>
      </div>
      <BottomSheet show={showMenu}>
        <Menu selectMenu={selectMenu} closeMenu={closeMenu}></Menu>
      </BottomSheet>
      <div className='color-customizer-tab'>
        <Carousel onChange={onChange} selectedIndex={selectedIndex}>
          {currentColorConfig.map((config, index) => {
            return (
              <ColorPalette
                key={index}
                indexString={`${selectedIndex + 1}/${currentColorConfig.length}`}
                config={config}
                changeColor={(color, types) => {
                  changeColor(color, types, modelRef);
                }}
              ></ColorPalette>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Customizer;
