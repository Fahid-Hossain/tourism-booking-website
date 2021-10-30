import React from 'react';
import Tours from '../Tours/Tours';
import About from './About';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Tours></Tours>
        </div>
    );
};

export default Home;