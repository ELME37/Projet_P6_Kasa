import React from 'react';
import './banner.scss';

export default function Banner({ title, imageSrcUrl }) {
    return (
            <div className='banner'>
                <h1 className='banner__title'>{title}</h1>
                <div className='banner__image'>
                    <img src={imageSrcUrl} alt="bannière" />
                </div>
            </div>
    );
};
