import React from 'react';
import Footer from '../components/Footer';
import Navbar from "../components/Navbar";
import WebNavbar from '../components/WebNavbar';
import ShopProductCards from '../components/ShopProductCards';

const ShopPage = () => {
    return (
        <div>
            <WebNavbar />
            <Navbar/>
            <ShopProductCards />
            <Footer />
        </div>
    );
};

export default ShopPage;