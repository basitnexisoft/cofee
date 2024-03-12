import React from 'react';
import ProductCard from '../layouts/ProductCard';
import img1 from '../assets/img/Product1.webp';
import img2 from '../assets/img/Product2.webp';
import img3 from '../assets/img/Product3.webp';

const Product = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor">
      <h1 className="font-semibold text-center text-4xl lg:mt-14-024 mb-8">
        Our Products
      </h1>

      <div className="flex flex-col lg:flex-row gap-12 justify-center">
        <ProductCard img={img1} title="Nespresso" />
        <ProductCard img={img2} title="AeroPress" />
        <ProductCard img={img3} title="Chemex" />
      </div>
    </div>
  );
};

export default Product;
