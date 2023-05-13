import './Switcher.css';
import shoeColorConfigs from '../Customizer/ShoeConfig';

interface Props {
  selectShoe: (index: number) => void;
  selectedShoeIndex: number;
}

function Switcher({ selectShoe, selectedShoeIndex }: Props): JSX.Element {
  return (
    <div className='switcher'>
      {shoeColorConfigs.map((shoe, index) => {
        return (
          <img
            onClick={() => {
              selectShoe(index);
            }}
            key={shoe.id}
            className={`switcher-image ${selectedShoeIndex === index ? 'selected' : ''}`}
            src={shoe.src}
            width={64}
            height={64}
            alt={shoe.id}
          ></img>
        );
      })}
    </div>
  );
}

export default Switcher;
