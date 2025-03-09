import React from 'react';
import NavBar from '../components/NavBar';
import Slider from './Slider';
import Cards from '../cards/Cards';
import Com from '../cards/Com';
import Footer from '../components/Footer'
import Brands from '../cards/Brands';
import Items from '../cards/items'
import Sliderimg from '../cards/sliderimg'
const Home = () => {
  return (
    <div>
      <NavBar />
      <main className="space-y-10"> 
        <Slider />
        <Cards  />
        <Items/>
        <Com />
        <Sliderimg/>
        <Brands/>
        <Footer/>
        
      </main>
    </div>
  );
};

export default Home;
