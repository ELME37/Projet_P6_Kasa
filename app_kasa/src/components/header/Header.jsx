import React from 'react';
import './header.scss';
import logo from "./LOGO.svg";
import ROUTES from '../../router/Routes';
import { Link, NavLink } from 'react-router-dom';


export default function Header() {
    return (
            <header className="header">

                <Link to={ROUTES.home} className="header__logo">
                    <img src={logo} alt="logo kasa" />
                </Link>

                <nav className="header__navigation">
                    <ul className="navigation__list">
                        <li className='navigation__list--item'>
                            <NavLink to={ROUTES.home} className="navigation__item--link">
                                Accueil
                            </NavLink>
                        </li>
                        <li className='navigation__list--item'>
                            <NavLink to={ROUTES.about} className="navigation__item--link">
                                A Propos
                            </NavLink>
                        </li>
                    </ul>
                </nav>

            </header>
    )
};
