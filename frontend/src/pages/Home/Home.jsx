//import React from 'react'
import { useState } from 'react'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import Header from '../../components/Header/Header'
import './Home.css'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'

const Home = () => {
    const [categorie, setCategorie] = useState('Tout')
    return (
        <div>
            <Header />
            <ExploreMenu categorie={categorie} setCategorie={setCategorie} />
            <FoodDisplay categorie={categorie} />
        </div>
    )
}

export default Home
