import { useEffect, useRef } from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';

const ExploreMenu = ({ category, setCategory }) => {
    const listRef = useRef(null);

    useEffect(() => {
        const list = listRef.current;
        const firstElementWidth = list.children[0].offsetWidth + 30; // Adjust the gap value
        list.style.setProperty('--item-width', `${firstElementWidth}px`);
        list.style.setProperty('--num-items', menu_list.length * 2); // We duplicated the list
    }, []);

    const infiniteList = [...menu_list, ...menu_list];

    return (
        <div className='explore-menu' id='explore-menu'>
            <h1>Explorez notre menu</h1>
            <p className="explore-menu-text">
                Choisissez parmi un menu varié proposant une gamme exquise de pâtisseries.
                Notre mission est de satisfaire vos envies sucrées et d&apos;enrichir votre expérience gustative,
                une délicieuse gourmandise à la fois.
            </p>
            <div className="explore-menu-list-wrapper">
                <div className="explore-menu-list" ref={listRef}>
                    {infiniteList.map((item, index) => {
                        return (
                            <div onClick={() => setCategory(prev => prev === item.menu_name ? "Tout" : item.menu_name)} key={index} className='explore-menu-list-item'>
                                <div className={`explore-menu-image-wrapper ${category === item.menu_name ? "active" : ""}`}>
                                    <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt={item.menu_name} />
                                </div>
                                <p>{item.menu_name}</p>
                            </div>
                        )
                    })}
                </div>
                <hr />
            </div>
        </div>
    )
}

export default ExploreMenu;
