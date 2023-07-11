import React from 'react';
import './footer.scss';
import logo from "./LOGO.svg";

export default function Footer () {
    return (
        <footer className='footer'>
            <div className="footer__logo">
                <img src={logo} alt="logo kasa" />
            </div>
            <p className='footer__text'>© 2020 Kasa. All rights reserved</p> 
        </footer>
    );
};