import React, { useState } from "react";
import MainCarousel from "../components/HomePageComponents/MainCaraousel";
import ItemCaraousel1 from "../components/HomePageComponents/ItemCaraousel1";
import {MenKurta} from "../assets/Men/men_kurta"
import {mensShoes} from "../assets/shoes"


const HomePage = () => {
  return (
    <>
      <div>
        <MainCarousel />
      </div>
       
       
        
      <div className="space-y-10 py-20  flex flex-col  justify-center px-5 lg:px-10 "> 
        <ItemCaraousel1 data={MenKurta} sectionName={"Men's Kurta"} />
        <ItemCaraousel1 data={mensShoes} sectionName={"Men's Shoes"} />
        <ItemCaraousel1 data={MenKurta} sectionName={"Men's Kurta"} />
        <ItemCaraousel1 data={MenKurta} sectionName={"Men's Kurta"} />

      </div>
    </>
  );
};

export default HomePage;
