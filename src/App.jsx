import React from "react";
import Navbar from "./components/navbar/Navigation.jsx";
import HomePage from "./pages/HomePage";
import Footer from "./components/footer/Footer";
import ProductPage from "./pages/ProductPage.jsx";
import ProductDetailsPage from "./pages/ProductDetailsPage.jsx";
import CartPage from "./pages/CartPage.jsx";

const App = () => {
  return (

    <>
      <Navbar />

      {/* <HomePage />
      <ProductPage />
      <ProductDetailsPage /> */}
      <CartPage/>

      <Footer />
    </>
  );
};

export default App;
