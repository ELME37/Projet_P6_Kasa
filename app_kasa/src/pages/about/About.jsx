import React from 'react';
import './about.scss';
import Banner from '../../components/banner/Banner';
import banner_about from '../../components/banner/banner_about.png';

export default function About () {
    return (
        <div className='about'>
            <Banner imageSrcUrl={banner_about} />
            <p>page à propos</p>
        </div>
    );
};
