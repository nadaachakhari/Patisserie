import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'


const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-ontent-left">
                    <img src={assets.logo} alt="" className='logo' />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum officia omnis in? Deserunt, incidunt corporis culpa eligendi iste natus reprehenderit odit, voluptates placeat vel veniam. Eius tempora quaerat voluptates placeat.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.instagram_icon} alt="" />
                        <img src={assets.pinterest_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Accueil</li>
                        <li>À propos de nous</li>
                        <li>Livraison</li>
                        <li>Politique de confidentialité</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>ENTRER EN CONTACT</h2>
                    <ul>
                        <li>+216 55 564 698 </li>
                        <li>patisserieLobna@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">© {new Date().getFullYear()} Pâtisserie Exquise. Tous droits réservés.</p>
        </div>
    )
}

export default Footer
