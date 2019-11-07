import React from 'react';
import '../assets/styles/components/Header.css';
import userIcon from '../assets/static/logo.svg';


const Header = () => {
    return(
        <header className="header">
            <input type="text" className="header__search" placeholder="Buscar un artista o tema favorito"/>
            <div className="header__container">
                <figure className="header__container__image">
                    <img src={userIcon} alt="" width="100" className=""/>
                </figure>
                <p className="header__container__user">Santiago Gonzalez</p>
            </div>
        </header>
    )
}

export default Header;