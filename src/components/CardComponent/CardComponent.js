import React from 'react';
import './CardComponent.css';

function CardComponent({ title, pic }) {
    return (
        <>
            <div className="card">
                <div className="container">
                    <img
                        height={55}
                        width={55}
                        src={pic}
                        style={{ borderRadius: '50%' }}
                    ></img>
                    <div className='pad-5'>{title}</div>
                </div>
            </div>
        </>
    )
}

export default CardComponent;