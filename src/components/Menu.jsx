import React from "react";
import MenuCard from "../layouts/MenuCard";
import img1 from "../assets/img/menu1.webp";
import img2 from "../assets/img/menu2.webp";
import img3 from "../assets/img/menu3.webp";
import img4 from "../assets/img/menu4.webp";
import img5 from "../assets/img/menu5.webp";
import img6 from "../assets/img/menu6.webp";

const Menu = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor">
      <h1 className="font-semibold text-center text-4xl mt-24 mb-8">Our Menu</h1>

      <div className="flex flex-wrap pb-8 justify-center gap-12">
        <MenuCard img={img1} title="Espresso" />
        <MenuCard img={img2} title="Latte" />
        <MenuCard img={img3} title="Cappuccino" />
        <MenuCard img={img4} title="Mocha" />
        <MenuCard img={img5} title="Americano" />
        <MenuCard img={img6} title="Macchiato" />
      </div>
    </div>
  );
};

export default Menu;
