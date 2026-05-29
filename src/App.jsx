import React from "react";
import Navbar from "./components/navbar/Navigation.jsx";
import HomePage from "./pages/HomePage";
import Footer from "./components/footer/Footer";
import ProductPage from "./pages/ProductPage.jsx";
import ProductDetailsPage from "./pages/ProductDetailsPage.jsx";

const App = () => {
  return (

    <>
      <Navbar />

      {/* <HomePage />
      <ProductPage /> */}
      <ProductDetailsPage />

      <Footer />
    </>
  );
};

export default App;
