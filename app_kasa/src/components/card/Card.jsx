import React from 'react';
import './card.scss';
import { Link } from 'react-router-dom';

export default function Card ({ id, title, cover }) {
    return (
    
        <Link to={`/lodging/${id}`} key={id} className="card__link">
           
                <h2 className='card__title'>{title}</h2>
                <div className='card__image'>
                    <img src={cover} alt={title} />
                </div>
          
        </Link>
        
    );
};
