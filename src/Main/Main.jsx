import React from 'react';
import Banner from '../Home/Banner';
import { Outlet } from 'react-router-dom';
import Footer from '../Home/Footer';

const Main = () => {
    return (
        <div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;