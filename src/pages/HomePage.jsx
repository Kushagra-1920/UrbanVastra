import React from "react";
import MainCarousel from "../components/HomePageComponents/MainCaraousel";
import ItemCaraousel1 from "../components/HomePageComponents/ItemCaraousel1";
const HomePage = () => {
  return (
    <>
      <div>
        <MainCarousel />
      </div>
      <div>
        <ItemCaraousel1 />
      </div>
    </>
  );
};

export default HomePage;
