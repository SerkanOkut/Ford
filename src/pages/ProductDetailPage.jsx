import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from "../components/Navbar";
import WebNavbar from '../components/WebNavbar';
import ProductDetailCard from '../components/ProductDetailCard';
import Footer from '../components/Footer';

const ProductDetailPage = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <WebNavbar />
      <div className="flex-grow container mx-auto px-4 py-8 mt-32">
        <ProductDetailCard productId={id} />
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetailPage;