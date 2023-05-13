import { useState } from 'react';
import './ColorPalette.css';

interface ColorPaletteProps {
  config: {
    colors: string[];
    types: string[];
    title: string;
    modelPosition: string;
  };
  changeColor: (color: string, types: string[], modelPosition: string) => void;
  indexString: string;
}

function ColorPalette({ config, changeColor, indexString }: ColorPaletteProps): JSX.Element {
  const { colors, types, title, modelPosition } = config;
  const [selectedColorIndex, setSelectedColor] = useState(0);

  return (
    <div className='color-palette'>
      <div className='color-tab-title'>
        {title}
        {indexString}
      </div>
      <div className='colors-tray'>
        <ul className='colors-list'>
          {colors.map((color, index) => {
            return (
              <li
                key={index}
                className={`color-circle ${index === selectedColorIndex ? 'selected' : ''}`}
                style={{ background: color }}
                onClick={() => {
                  setSelectedColor(index);
                  changeColor(color, types, modelPosition);
                }}
              ></li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ColorPalette;
