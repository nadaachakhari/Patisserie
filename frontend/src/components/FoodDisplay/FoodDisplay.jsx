//import React from 'react'
import { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import PatisserieItem from '../PatisserieItem/PatisserieItem'

const FoodDisplay = ({ categorie }) => {

    const { Patisserie_list } = useContext(StoreContext)

    return (
        <div className='food-display' id='food-display'>
            <h2>Les meilleurs gâteaux près de chez vous</h2>
            <div className="food-display-list">
                {Patisserie_list.map((item, index) => {
                    return <PatisserieItem key={index} id={item._id} name={item.name} description={item.description}
                        image={item.image} price={item.price} category={item.category}
                    />
                })}
            </div>
        </div>
    )
}

export default FoodDisplay
