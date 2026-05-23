import React from "react";
import Navbar from "./components/navbar/Navigation";
import HomePage from "./pages/HomePage";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <div>
        <HomePage />
      </div>
      <Footer/>
   </div>
  );
};

export default App;
