import React from 'react';
import './header.scss';
import logo from "./LOGO.svg";
import { NavLink } from 'react-router-dom';


export default function Header() {
    return (
        <div className='container'>
            <header className="header">

                <div className="header__logo">
                    <img src={logo} alt="logo kasa" />
                </div>

                <nav className="header__navigation">
                    <ul className="navigation__list">
                        <li className='navigation__list--item'>
                            <NavLink to="/" className="navigation__item--link">
                                Accueil
                            </NavLink>
                        </li>
                        <li className='navigation__list--item'>
                            <NavLink to="/about" className="navigation__item--link">
                                A Propos
                            </NavLink>
                        </li>
                    </ul>
                </nav>

            </header>
        </div>
    )
};
