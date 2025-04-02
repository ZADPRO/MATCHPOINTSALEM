import React, { useEffect } from "react";
import "./Home.css";

import burger from "../../assets/homePage/burgerImg3.png";

import meatEat from "../../assets/restro/MeatEat.png";
import saiVeg from "../../assets/restro/SAIVEG.png";
import ceylonKadai from "../../assets/restro/ceylon.png";
import chillax from "../../assets/restro/CHILLAX.png";
import italianJob from "../../assets/restro/italian.png";
import yarnbird from "../../assets/restaurants/yarnBird3.png";
import texMex from "../../assets/restaurants/texMex1.png";

import Glide from "@glidejs/glide";

import food1 from "../../assets/homePage/food11.jpg";
import food2 from "../../assets/homePage/food22.jpg";
import food3 from "../../assets/homePage/food33.jpg";

import foodImgBg1 from "../../assets/homePage/dosa.jpg";
import pizzaBg1 from "../../assets/homePage/pizza1.jpg";

import foodImg1 from "../../assets/homePage/americanFriedChicken.png";
import foodImg2 from "../../assets/homePage/biriyani.png";
import foodImg3 from "../../assets/homePage/chickenGravy.png";
import foodImg4 from "../../assets/homePage/curdRice.png";
import foodImg5 from "../../assets/homePage/garlicBread.png";
import foodImg6 from "../../assets/homePage/pasta.png";
import foodImg7 from "../../assets/homePage/pizza.png";

// import aboutUsImg from "../../assets/about/aboutUsBgOne.png";

// import temp1 from "../../assets/blog/temp.png";

import blog1Cover from "../../assets/blog/blog1Cover.jpg";
import blog2Cover from "../../assets/blog/blog2.jpg";
import { ShieldUser, Tags, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const slider = new Glide(".glide-08", {
      type: "carousel",
      autoplay: 1,
      animationDuration: 2500,
      animationTimingFunc: "linear",
      perView: 3,
      classes: {
        swipeable: "glide__swipeable",
        dragging: "glide__dragging",
        direction: {
          ltr: "glide__direction--ltr",
          rtl: "glide__direction--rtl",
        },
        type: {
          slider: "glide__type--slider",
          carousel: "glide__type--carousel",
        },
        slide: {
          active: "glide__slide--active",
          clone: "glide__slide--clone",
        },
        arrow: {
          disabled: "glide__arrow--disabled",
        },
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 2,
          gap: 6,
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  useEffect(() => {
    const slider = new Glide(".glide-09", {
      type: "carousel",
      autoplay: 1,
      animationDuration: 1500,
      animationTimingFunc: "linear",
      perView: 5,
      classes: {
        swipeable: "glide__swipeable",
        dragging: "glide__dragging",
        direction: {
          ltr: "glide__direction--ltr",
          rtl: "glide__direction--rtl",
        },
        type: {
          slider: "glide__type--slider",
          carousel: "glide__type--carousel",
        },
        slide: {
          active: "glide__slide--active",
          clone: "glide__slide--clone",
        },
        arrow: {
          disabled: "glide__arrow--disabled",
        },
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 2,
          gap: 36,
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <div>
      <div className="homePageContainer01 flex lg:flex-row flex-col items-center justify-center h-screen bg-cover bg-center text-white overflow-auto">
        <div
          className="text-start lg:pt-0 pt-40 px-6 lg:px-20 flex-1"
          data-aos="fade-right"
        >
          <h1 className="text-3xl lg:text-5xl font-bold mb-4">
            One roof. <br />
            Infinite Happiness. <br />
            Endless Country Cuisine.{" "}
          </h1>
          <p className="text-md lg:text-xl max-w-2xl mx-auto">
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

      <div className="flex lg:flex-row flex-col gap-2 m-4">
        <div
          className="w-[100%] flex relative h-50 bg-cover bg-center items-center rounded"
          style={{ backgroundImage: `url(${food1})` }}
        >
          <div className="absolute w-1/2 left-2 p-4 rounded shadow">
            <p className="text-white">On This Week</p>
            <p className="text-white font-bold text-[25px] uppercase">
              Spicy Fried Chicken
            </p>
            <p className="text-white">Limited Time Offer</p>
          </div>
        </div>
        <div
          className="w-[100%] flex relative h-50 bg-cover bg-center items-center rounded"
          style={{ backgroundImage: `url(${food2})` }}
        >
          <div className="absolute w-1/2 left-2 p-4 rounded shadow">
            <p className="text-white">On This Week</p>
            <p className="text-white font-bold text-[25px] uppercase">
              Today Special Food{" "}
            </p>
            <p className="text-white">Limited Time Offer</p>
          </div>
        </div>
        <div
          className="w-[100%] flex relative h-50 bg-cover bg-center items-center rounded"
          style={{ backgroundImage: `url(${food3})` }}
        >
          <div className="absolute w-1/2 left-2 p-4 rounded shadow">
            <p className="text-white">On This Week</p>
            <p className="text-white font-bold text-[25px] uppercase">
              Special Chicken Roll
            </p>
            <p className="text-white">Limited Time Offer</p>
          </div>
        </div>
      </div>

      <div className="text-center py-10 overallImgBrands">
        <p className="text-white text-[25px] font-semibold fontLily">
          Our Brands
        </p>
        <p className="text-white text-[22px] font-bold py-3">
          "One food court, Endless possibilities"
        </p>

        <div className="glide-08 relative w-full overflow-hidden">
          <div data-glide-el="track">
            <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0 items-center justify-content-center">
              <li>
                <img src={meatEat} className="lg:w-150" alt="" />
              </li>
              <li>
                <img src={saiVeg} className="lg:w-150" alt="" />{" "}
              </li>
              <li>
                <img src={ceylonKadai} className="lg:w-150" alt="" />{" "}
              </li>
              <li>
                <img src={chillax} className="lg:w-150" alt="" />{" "}
              </li>
              <li>
                <img src={italianJob} className="lg:w-150" alt="" />{" "}
              </li>
              <li>
                <img src={yarnbird} className="lg:w-150" alt="" />{" "}
              </li>
              <li>
                <img src={texMex} className="lg:w-150" alt="" />{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="relative flex lg:flex-row text-center flex-col gap-2 py-10 bg-cover bg-center">
        <div className="relative flex lg:flex-row flex-col items-center">
          <img
            src={foodImgBg1}
            className="lg:w-1/4 rounded-tr-[170px] rounded-br-[170px]"
            alt=""
          />
          <div className="lg:w-1/2 px-5 py-6">
            <p className="text-black text-[25px] fontLily font-bold">
              About Us
            </p>
            <p className="text-black text-[22px] font-bold py-3">
              "Good food. Great memories. All under one roof."
            </p>
            <p className="text-center text-black px-4">
              At The Match Point, we bring together the best flavours from
              around the world under one roof. Whether you're craving juicy
              meats, flavourful vegetarian dishes, tantalizing non-vegetarian
              delights, indulgent desserts, or authentic Italian cuisine, we
              have something for everyone. Conveniently located across multiple
              branches, our food court is designed to be the ultimate culinary
              destination for families, friends, and food enthusiasts.
            </p>
          </div>
          <img
            src={pizzaBg1}
            className="lg:w-1/4 rounded-tl-[170px] rounded-bl-[170px]"
            alt=""
          />
        </div>
      </div>

      <div className="text-center py-2">
        <p className="text-black text-[25px] fontLily font-bold">
          Popular Dishes
        </p>
        <p className="text-black text-[22px] font-bold py-3">
          "Best Selling Dishes"
        </p>

        <div className="glide-09 relative overflow-hidden py-10 w-full md:w-11/12 mx-auto">
          <div data-glide-el="track">
            <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0 pb-12">
              <li className="w-[200px]">
                <div className="h-full flex flex-col items-center justify-center gap-3 w-[200px]">
                  <img src={foodImg1} className="w-[200px]" alt="" />
                  <p className="text-[18px] font-bold">
                    American Fried Chicken
                  </p>
                </div>
              </li>
              <li className="w-[200px]">
                <div className="h-full flex flex-col items-center justify-center gap-3 w-[200px]">
                  <img src={foodImg2} className="w-[200px]" alt="" />
                  <p className="text-[18px] font-bold">Biriyani</p>
                </div>
              </li>
              <li className="w-[200px]">
                <div className="h-full flex flex-col items-center justify-center gap-3 w-[200px]">
                  <img src={foodImg3} className="w-[200px]" alt="" />
                  <p className="text-[18px] font-bold">Chicken Gravy</p>
                </div>
              </li>
              <li className="w-[200px]">
                <div className="h-full flex flex-col items-center justify-center gap-3 w-[200px]">
                  <img src={foodImg4} className="w-[200px]" alt="" />
                  <p className="text-[18px] font-bold">Curd Rice</p>
                </div>
              </li>
              <li className="w-[200px]">
                <div className="h-full flex flex-col items-center justify-center gap-3 w-[200px]">
                  <img src={foodImg5} className="w-[200px]" alt="" />
                  <p className="text-[18px] font-bold">Garlic Bread</p>
                </div>
              </li>
              <li className="w-[200px]">
                <div className="h-full flex flex-col items-center justify-center gap-3 w-[200px]">
                  <img src={foodImg6} className="w-[200px]" alt="" />
                  <p className="text-[18px] font-bold">Pasta</p>
                </div>
              </li>
              <li className="w-[200px]">
                <div className="h-full flex flex-col items-center justify-center gap-3 w-[200px]">
                  <img src={foodImg7} className="w-[200px]" alt="" />
                  <p className="text-[18px] font-bold">Pizza</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* BLOG PAGE */}
      <div className="blogContents flex flex-col w-full md:w-10/12 mx-auto py-4">
        <p className="text-black text-[25px] fontLily font-bold text-center">
          Latest News
        </p>
        <p className="text-center font-bold text-[22px] uppercase py-2">
          Our Latest Food News
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 w-full md:w-10/12 py-5 mx-auto">
          <div
            className="cardCont flex flex-col m-4 shadow-lg cursor-pointer"
            onClick={() => {
              navigate("/a-food-court-for-every-craving");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <img
              src={blog1Cover}
              alt=""
              className="rounded h-60 object-cover"
            />
            <div className="flex m-2 items-center justify-around">
              <div className="date bg-[#5a2104] px-5 py-3 rounded-lg text-center">
                <p className="text-white font-bold text-[22px]">19</p>
                <p className="text-white font-bold text-[12px] m-0">Mar</p>
              </div>
              <div className="byWhom flex gap-1">
                {" "}
                <ShieldUser /> Admin
              </div>
              <div className="tag flex gap-1">
                {" "}
                <Tags /> Chicken
              </div>
            </div>
            <div className="title line-clamp-2 pl-3 text-black font-bold text-[19px]">
              A Food Court for Every Craving: Exploring the Best Eateries Under
              One Roof
            </div>
            <div className="readMoreBtn text-center flex items-center justify-center gap-3 bg-[#5a2104] py-2 mt-3 rounded text-white font-bold uppercase">
              Read More <TrendingUp />
            </div>
          </div>
          <div
            className="cardCont flex flex-col m-4 shadow-lg cursor-pointer"
            onClick={() => {
              navigate("/crispy-and-crunchy");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <img
              src={blog2Cover}
              alt=""
              className="rounded h-60 object-cover"
            />
            <div className="flex m-2 items-center justify-around">
              <div className="date bg-[#5a2104] px-5 py-3 rounded-lg text-center">
                <p className="text-white font-bold text-[22px]">28</p>
                <p className="text-white font-bold text-[12px] m-0">Mar</p>
              </div>
              <div className="byWhom flex gap-1">
                {" "}
                <ShieldUser /> Admin
              </div>
              <div className="tag flex gap-1">
                {" "}
                <Tags /> Chicken
              </div>
            </div>
            <div className="title line-clamp-2 pl-3 text-black font-bold text-[19px]">
              Crispy & Crunchy: The Ultimate Guide to Fried Chicken (American,
              Korean & More!)
            </div>
            <div className="readMoreBtn text-center flex items-center justify-center gap-3 bg-[#5a2104] py-2 mt-3 rounded text-white font-bold uppercase">
              Read More <TrendingUp />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
