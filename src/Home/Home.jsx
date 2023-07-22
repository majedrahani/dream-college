import React from 'react';
import Banner from './Banner';
import PopulerCollege from './PopulerCollege';
import Gallery from './Gallery';
import Review from './Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopulerCollege></PopulerCollege>
            <Gallery></Gallery>
            <Review></Review>
        </div>
    );
};

export default Home;