import React from "react";
import Navbar from "./components/navbar/Navigation.jsx";
import HomePage from "./pages/HomePage";
import Footer from "./components/footer/Footer";
import ProductPage from "./pages/ProductPage.jsx";

const App = () => {
  return (

    <>
  <Navbar />
      <div>
        <ProductPage />
      </div>
      <div>
      {/* <HomePage /> */}
      </div>
   <Footer/>
   </>
  );
};

export default App;
