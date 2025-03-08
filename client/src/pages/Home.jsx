import React from 'react';
import NavBar from '../components/NavBar';
import Slider from './Slider';
import Cards from '../cards/Cards';
import Com from '../cards/Com';
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <NavBar />
      <main className="space-y-10"> 
        <Slider />
        <Cards  />
        <Com />
        <Footer/>
        
      </main>
    </div>
  );
};

export default Home;
