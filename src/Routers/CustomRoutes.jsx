import React from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "../components/navbar/Navigation.jsx";
import HomePage from "../pages/HomePage.jsx";
import Footer from "../components/footer/Footer";
import ProductPage from "../pages/ProductPage.jsx";
import ProductDetailsPage from "../pages/ProductDetailsPage.jsx";
import CartPage from "../pages/CartPage.jsx";
import CheckoutPage from "../pages/CheckoutPage.jsx";
import OrderPage from "../pages/OrderPage.jsx";
import OrderDetails from "../components/CheckoutPageComponents/OrderDetails.jsx";

const CustomRoutes = () => {
  return (
    <div>
        
      <div>
        <Navigation />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/:levelOne/:levelTwo/:levelThree"
          element={<ProductPage />}
        />

        <Route path="/product/:productId" element={<ProductDetailsPage />} />

        <Route path="/cart" element={<CartPage />} />

        <Route path="/checkout" element={<CheckoutPage />} />

        <Route path="/account/orders" element={<OrderPage />} />

        <Route path="/account/order/:orderId" element={<OrderDetails />} />
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CustomRoutes;
