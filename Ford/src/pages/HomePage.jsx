import React from 'react';
import HeroBanner from '../components/HeroBanner';
import CategorySelection from '../components/CategorySelection';
import BestsellerProducts from '../components/BestsellerProducts';
import FeaturedPosts from '../components/FeaturedPosts';
import Footer from '../components/Footer';
import NavbarContact from "../components/NavbarContact";
import Navbar from "../components/Navbar";
import HeroCarousel from "../components/HeroCarousel";
import ShopCards from '../components/ShopCards';
import ProductCards from '../components/ProductCards';
import FeaturedProductCarousel from '../components/FeaturedProductCarousel';
import PromotionContainer from '../components/PromotionalContainer';
import FeaturedBlog from '../components/FeaturedBlog';
const HomePage = () => {
  return (
    <div>
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
