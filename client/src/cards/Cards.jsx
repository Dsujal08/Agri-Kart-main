import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

const articles = [
  { 
    name: "Seeds", 
    imgSrc: "/src/images/seeds.png", 
    review: "High-quality seeds for better yield.", 
    link: "/seedsDetails" 
  },
  { 
    name: "Fertilizers", 
    imgSrc: "/src/images/fruits.png", 
    review: "100% organic farm-fresh vegetables.", 
    link: "/fertilizers" 
  },
  { 
    name: "Organic Fruits", 
    imgSrc: "/src/images/Organic.png", 
    review: "Pesticide-free delicious fresh fruits.", 
    link: "/products/fruits" 
  },
  { 
    name: "Fertilizers", 
    imgSrc: "/src/images/fertilizer.png", 
    review: "Natural fertilizers for sustainable farming.", 
    link: "/products/fertilizers" 
  },
  { 
    name: "Dairy Products", 
    imgSrc: "/src/images/fruits.png", 
    review: "Pure and organic dairy for a healthy life.", 
    link: "/products/dairy" 
  }
];

const settings = {
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 768, settings: { slidesToShow: 1 } }
  ]
};

const ArticleCard = ({ name, imgSrc, review, link }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow-xl hover:shadow-2xl rounded-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 mx-3">
      <div className="bg-gradient-to-b from-green-300 to-green-100 flex justify-center items-center p-5">
        <img src={imgSrc} alt={name} className="h-40 w-40 object-contain transition-all duration-300" />
      </div>
      <div className="flex flex-col items-center p-6 space-y-3">
        <h2 className="text-2xl font-bold text-green-800">{name}</h2>
        <p className="text-center text-gray-700">{review}</p>
        <button 
          className="bg-green-600 text-white text-lg px-6 py-2 rounded-full shadow-md hover:bg-green-700 hover:shadow-lg transition-all duration-300"
          onClick={() => navigate(link)}
        >
          Read More
        </button>
      </div>
    </div>
  );
};

const ArticleSlider = () => {
  return (
    <section className="w-11/12 md:w-3/4 mx-auto mt-16">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-green-800 drop-shadow-md">Pure Organic Food</h1>
        <p className="text-xl md:text-2xl font-semibold text-green-900 mt-3 max-w-xl mx-auto">
          Experience a healthy life with fresh & organic products
        </p>
      </div>
      <Slider {...settings}>
        {articles.map((article) => (
          <ArticleCard key={article.name} {...article} />
        ))}
      </Slider>
    </section>
  );
};

export default ArticleSlider;
