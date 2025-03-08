import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import EmailVerify from './pages/EmailVerify';
import ResetPassword from './pages/ResetPassword';
import Sign from './pages/Sign';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import AboutUs from './pages/AboutUs';
import Layout from './Seeds/layout';
import Homeseeds from './Seeds/Homeseeds';
import ProductDetail from './Seeds/Details';  // ✅ Import ProductDetail
import { CartProvider } from './Seeds/Cart';
import { Checkout } from './Checkout/Checkout';
import { SeedsDetails } from './Seeds/Seeds_details';

const App = () => {
  return (
    <CartProvider>
      <div>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/email-verify" element={<EmailVerify />} />  
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/sign" element={<Sign />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/seedsDetails" element={<SeedsDetails />} />

          {/* Seeds Section with Layout */}
          <Route path="/seeds" element={<Layout />}>
            <Route index element={<Homeseeds />} />
          </Route>

          {/* Product Detail Page should be outside */}
          <Route path="/product/:slug" element={<ProductDetail />} />
        </Routes>
      </div>
    </CartProvider>
  );
};

export default App;
