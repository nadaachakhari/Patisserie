import React, { useState } from 'react';
import './PatisserieItem.css';
import { assets } from '../../assets/assets';

const PatisserieItem = ({ id, name, image, description, price, category }) => {
    const [itemCount, setItemCount] = useState(0);

    return (
        <div className='Patisserie-item'>
            <div className="patisserie-item-img-container">
                <img className="patisserie-item-image" src={image} alt={name} />
                {!itemCount ?
                    <img className='add' onClick={() => setItemCount(prev => prev + 1)} src={assets.add} alt="Add item" /> :
                    <div className='patisserie-item-counter'>
                        <img onClick={() => setItemCount(prev => prev - 1)} src={assets.remove_icon} alt="Remove item" />
                        <p>{itemCount}</p>
                        <img onClick={() => setItemCount(prev => prev + 1)} src={assets.add_icon} alt="Add item" />
                    </div>}
            </div>
            <div className="patisserie-item-info">
                <div className="patisserie-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="Rating stars" />
                </div>
                <p className="patisserie-item-desc">{description}</p>
                <p className="patisserie-item-price">{price} Dt</p>
            </div>
        </div>
    );
};

export default PatisserieItem;
