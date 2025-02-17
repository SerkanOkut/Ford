import React from 'react';
import Footer from '../components/Footer';
import Navbar from "../components/Navbar";
import HeroCarousel from "../components/HeroCarousel";
import ShopCards from '../components/ShopCards';
import ProductCards from '../components/ProductCards';
import FeaturedProductCarousel from '../components/FeaturedProductCarousel';
import PromotionContainer from '../components/PromotionContainer';
import FeaturedBlog from '../components/FeaturedBlog';
import ContactNavbar from '../components/ContactNavbar';
import WebNavbar from '../components/WebNavbar';
const HomePage = () => {
  return (
    <div>
      <ContactNavbar />
      <WebNavbar />
      <Navbar/>
      <HeroCarousel /> 
      <ShopCards />  
      <ProductCards />
      <FeaturedProductCarousel />
      <PromotionContainer />
      <FeaturedBlog />
      <Footer />
    </div>
  );
};

export default HomePage;
