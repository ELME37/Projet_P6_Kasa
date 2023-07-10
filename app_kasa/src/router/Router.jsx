import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import Lodging from '../pages/lodging/Lodging';
import About from '../pages/about/About';
import Error404 from '../pages/error404/Error404';

export default function Router () {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lodging" element={<Lodging />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Error404 />} />
        </Routes>
    );
};
