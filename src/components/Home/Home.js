import React from 'react';
import Contact from '../Contact/Contact';
import Tours from '../Tours/Tours';
import About from './About';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Tours></Tours>
            <Contact></Contact>
        </div>
    );
};

export default Home;