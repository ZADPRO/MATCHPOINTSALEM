import React from "react";
import "./Home.css";

import burger from "../../assets/homePage/burger.png";

const Home: React.FC = () => {
  return (
    <div>
      <div className="homePageContainer01 flex lg:flex-row flex-col items-center justify-center h-screen bg-cover bg-center text-white overflow-auto">
        <div
          className="text-start lg:pt-0 pt-30 px-6 lg:px-20 flex-1"
          data-aos="fade-right"
        >
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            One roof. <br />
            Infinite Happiness. <br />
            Endless Country Cuisine.{" "}
          </h1>
          <p className="text-lg lg:text-xl max-w-2xl mx-auto">
            Match point will be the go-to destination for anyone who loves
            variety, quality, and innovation in food.
          </p>
        </div>
        <div className="lg:mt-6 flex-1" data-aos="fade-left">
          <img
            src={burger}
            alt="Home Banner"
            className="w-full max-w-[500px] rounded-lg"
          />
        </div>
      </div>
      <div className="h-screen"></div>
    </div>
  );
};

export default Home;
