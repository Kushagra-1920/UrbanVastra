import React from "react";
import Navbar from "./components/navbar/Navigation.jsx";
import HomePage from "./pages/HomePage";
import Footer from "./components/footer/Footer";
import ProductPage from "./pages/ProductPage.jsx";
import ProductDetailsPage from "./pages/ProductDetailsPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import CheckoutPage from "./pages/CheckoutPage.jsx";

const App = () => {
  return (

    < >
      
        {/* <main className="max-w-7xl mx-auto px-4 lg:px-8">
        <Routes />
        once done with router then add this css to the main div 
      </main> */}

      <Navbar />

      {/* <HomePage />
      <ProductPage />
      <ProductDetailsPage /> */}
      {/* <CartPage /> */}
        <CheckoutPage/>
        

      <Footer />
    </>
  );
};

export default App;
