//import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import { SearchOutlined } from '@ant-design/icons'
import './Navbar.css'
import { useState } from 'react'

const Navbar = () => {
    const [menu, setMenu] = useState("Accueil")
    return (
        <div className='navbar'>
            <img src={assets.logo} alt='logo patisserie lobna' className='logo' />
            <ul className="navbar-menu">
                <li onClick={() => setMenu("Accueil")} className={menu === "Accueil" ? "active" : ""}>Accueil</li>
                <li onClick={() => setMenu("Menu")} className={menu === "Menu" ? "active" : ""}>Menu</li>
                <li onClick={() => setMenu("Mobil-app")} className={menu === "Mobil-app" ? "active" : ""}>Mobil-app</li>
                <li onClick={() => setMenu("Contactez-nous")} className={menu === "Contactez-nous" ? "active" : ""}>Contactez-nous</li>
            </ul>
            <div className="navbar-right">
                <SearchOutlined />
                <div className="navbar-search-icon">
                    <img src={assets.panier} className='panier' />
                    <div className="dot"></div>
                </div>
                <button> se connecter </button>
            </div>
        </div>
    )
}

export default Navbar
