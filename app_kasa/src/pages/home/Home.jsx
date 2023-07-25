import React, { useState, useEffect } from 'react';
import './home.scss';
import Banner from '../../components/banner/Banner';
import banner_home from '../../components/banner/banner_home.png';
import Card from '../../components/card/Card';

export default function Home () {

    const [lodgingData, setLodgingData] = useState([]);


    useEffect(() => {
        
        fetch('/data_lodging/lodging.json')
            .then(response => response.json())
            .then(data => setLodgingData(data))
            .catch(error => console.error(error))
    }, []); 


    return (
        <div className='home'>
            <Banner title={<span>Chez vous, <br className="banner__br"/>partout et ailleurs</span>} imageSrcUrl={banner_home} />

            <div className="gallery">
                {lodgingData.map(lodging => (
                    <Card key={lodging.id} id={lodging.id} cover={lodging.cover} title={lodging.title}  />
                ))}
            </div>

        </div>
    );
};
