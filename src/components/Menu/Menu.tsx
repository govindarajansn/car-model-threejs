import React from 'react';
import shoeColorConfigs from '../Customizer/ShoeConfig';
import './Menu.css';

interface Props {
  selectMenu: (index: number) => void;
  closeMenu: () => void;
}

function Menu({ selectMenu, closeMenu }: Props): JSX.Element {
  return (
    <div className='menu-container'>
      <button className='close-menu-button' onClick={closeMenu}>
        X
      </button>
      <ul className='menu-list'>
        {shoeColorConfigs.length > 0 &&
          shoeColorConfigs[0].colorConfigs.map((item, index) => {
            return (
              <li
                className='menu-item'
                key={index}
                onClick={() => {
                  selectMenu(index);
                }}
              >
                {index + 1}.{item.title}
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Menu;
