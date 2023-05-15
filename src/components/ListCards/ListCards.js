import React from 'react';
import CardComponent from '../CardComponent/CardComponent';
import carColorConfigs from '../Customizer/CarConfig';
import './ListCards.css'

function ListCards(props) {
    const { selectType } = props;
    return (
        <> <ul className='cards-list'>
            {carColorConfigs.length > 0 &&
                carColorConfigs[0].colorConfigs.map((item, index) => {
                    return (
                        <>
                            <li><div className='list-parts' onClick={() => {
                                selectType(index);
                            }}>
                                <CardComponent
                                    className='menu-item'
                                    key={index}
                                    title={item.title}
                                    pic={item.image}
                                />
                            </div>
                            </li>
                        </>
                    );
                })}
        </ul>
        </>
    )
}

export default ListCards;

