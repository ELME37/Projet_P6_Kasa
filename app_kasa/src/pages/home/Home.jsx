import React from 'react';
import './home.scss';
import Banner from '../../components/banner/Banner';
import banner_home from '../../components/banner/banner_home.png';

export default function Home () {
    return (
        <div className='home'>
            <Banner title="Chez vous, partout et ailleurs" imageSrcUrl={banner_home} />
            <div>page principale</div>
        </div>
    );
};
