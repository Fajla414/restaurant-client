import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home/Home';

const Body = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
        </Routes>
    );
};

export default Body;