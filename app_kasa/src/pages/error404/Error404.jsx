import React from 'react';
import './error404.scss';
import { Link } from 'react-router-dom';
import error from "./404.svg";

export default function Error404 () {
    return (
        <div className='error404'>
             <div className="error404__logo">
                    <img src={error} alt="logo 404" />
                </div>
            <p className='error404__text'>Oups! La page que vous demandez n'existe pas.</p>
            <Link className="backToHome" to="/">Retourner sur la page d'accueil</Link>
        </div>
    );
};
