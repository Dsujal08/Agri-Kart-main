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
import Services from './pages/Services'
import ContactUs from './pages/ContactUs'
import OrganicFruits from './cards/organicfruits'
import SchemeDetails from './Schemes/SchemeDetails'
import Scheme from './Schemes/Schemes';
import Features from './components/Features';
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
          <Route path="/services" element={<Services />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/organicfruits" element={<OrganicFruits />} />
          <Route path="/features" element={<Features />} />


          <Route path="/" element={<Scheme />} />
          <Route path="/scheme/:id" element={<SchemeDetails />} />
          
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
