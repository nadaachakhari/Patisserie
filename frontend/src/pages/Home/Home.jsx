//import React from 'react'
import { useState } from 'react'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import Header from '../../components/Header/Header'
import './Home.css'

const Home = () => {
    const [categorie, setCategorie] = useState('Tout')
    return (
        <div>
            <Header />
            <ExploreMenu categorie={categorie} setCategorie={setCategorie} />
        </div>
    )
}

export default Home
