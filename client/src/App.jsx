import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import ProductDetail from './Seeds/Details';
import { CartProvider } from './Seeds/Cart';
import { Checkout } from './Checkout/Checkout';
import { SeedsDetails } from './Seeds/Seeds_details';
import FerLayout from './Fertilizers/Ferlayout';
import HomeFer from './Fertilizers/HomeFer';
import Ferdetail from './Fertilizers/Ferdetail';
import Brands from './cards/Brands';
import BrandsPage from './cards/BrandsPage';

const App = () => {
  return (
    <CartProvider>

        <ToastContainer />
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/email-verify" element={<EmailVerify />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/sign" element={<Sign />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/checkout" element={<Checkout />} />

          {/* Seeds Section */}
          <Route path="/seedsDetails" element={<SeedsDetails />} />
          <Route path="/seeds" element={<Layout />}>
            <Route index element={<Homeseeds />} />
          </Route>

          {/* Fertilizers Section */}
          <Route path="/FerDetails" element={<Ferdetail />} />
          <Route path="/fertilizers" element={<FerLayout />}>
            <Route index element={<HomeFer />} />
          </Route>

          {/* Brands Section */}
          <Route path="/trusted-brands" element={<Brands />} />
          <Route path="/brands" element={<BrandsPage />} />

          {/* Product Details */}
          <Route path="/product/:slug" element={<ProductDetail />} />
        </Routes>
    </CartProvider>
  );
};

export default App;
