import React from 'react';
import Button from '../layouts/Button';
import coffeeImg from '../assets/img/home2.png';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:flex-row lg:justify-between items-center lg:px-32 px-5 gap-10 bg-gradient-to-r from-backgroundColor to-brightColor shadow-[0 3px 10px rgba(0,0,0,0.2)]">
      <div className="w-full lg:w-2/4 space-y-4 mt-14 lg:mt-0">
        <h1 className="font-semibold text-5xl text-center lg:text-left leading-tight">
          Start your day with a steaming cup of coffee
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Boost your productivity and build your mood with a glass of coffee in the morning.
        </p>

        <div className="flex flex-row gap-6">
          <Button title="ADD TO CART" />
          <Button title="MORE MENU" />
        </div>
      </div>

      <div className="relative">
        <img src={coffeeImg} alt="img" />

        <div className="absolute bg-white px-8 py-2 top-5 right-5 rounded-full shadow-[0 20px 50px rgba(8, 112, 184, 0.7)]">
          <h2 className="font-semibold">14K</h2>
        </div>
            
        <div className="absolute bg-white px-8 py-2 bottom-0 left-10 rounded-full">
          <h2>Cappuccino</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
