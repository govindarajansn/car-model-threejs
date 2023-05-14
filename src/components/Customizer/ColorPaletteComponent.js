import React, { useState } from 'react';
import ColorPalette from '../ColorPalette/ColorPalette';
import colorConfig from './CarConfig';
import { changeColor } from './customizeUtils';

function ColorPaletteComponent(props) {
    const { selectedCarIndex, selectedIndex, modelRef } = props
    const [generatedColorConfig] = useState([]);
    const currentColorConfig = generatedColorConfig.length
        ? generatedColorConfig
        : colorConfig[selectedCarIndex].colorConfigs;
    return (

        <>
            {currentColorConfig.map((config, index) => {
                if (index !== selectedIndex) {
                    return
                }
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
        </>
    )
}

export default ColorPaletteComponent;