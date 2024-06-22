import React, { useContext } from 'react';
import './PatisserieItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const PatisserieItem = ({ id, name, image, description, price }) => {


    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext)

    return (
        <div className='Patisserie-item'>
            <div className="patisserie-item-img-container">
                <img className="patisserie-item-image" src={image} alt={name} />
                {!cartItems[id] ?
                    <img className='add' onClick={() => addToCart(id)} src={assets.add} alt="Add item" /> :
                    <div className='patisserie-item-counter'>
                        <img onClick={() => removeFromCart(id)} src={assets.remove_icon} alt="Remove item" />
                        <p>{cartItems[id]}</p>
                        <img onClick={() => addToCart(id)} src={assets.add_icon} alt="Add item" />
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
