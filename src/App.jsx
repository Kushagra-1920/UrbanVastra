import React from "react";
import Navbar from "./components/navbar/Navigation.jsx";
import HomePage from "./pages/HomePage";
import Footer from "./components/footer/Footer";

const App = () => {
  return (

    <>
      <Navbar />
      <div>
        <HomePage />
      </div>
      <Footer/>
   </>
  );
};

export default App;
