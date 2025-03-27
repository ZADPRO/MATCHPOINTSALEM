import React, { useEffect } from "react";
import "./Home.css";

import burger from "../../assets/homePage/burger.png";

import meatEat from "../../assets/restro/MeatEat.png";
import saiVeg from "../../assets/restro/SAIVEG.png";
import ceylonKadai from "../../assets/restro/ceylon.png";
import chillax from "../../assets/restro/CHILLAX.png";
import italianJob from "../../assets/restro/italian.png";
import yarnbird from "../../assets/restaurants/yarnBird.jpg";
import texMex from "../../assets/restaurants/texMex.jpg";

import Glide from "@glidejs/glide";

const Home: React.FC = () => {
  useEffect(() => {
    const slider = new Glide(".glide-09", {
      type: "carousel",
      autoplay: 1,
      animationDuration: 4500,
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
          perView: 1,
          gap: 36,
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

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
          perView: 1,
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
      <div className="text-center py-10">
        <p className="text-black text-[18px] font-semibold uppercase">
          Our Brands
        </p>
        <p className="text-black text-[22px] font-bold py-3">
          "One food court, Endless possibilities"
        </p>
        <div className="glide-09 relative w-full overflow-hidden py-5">
          <div data-glide-el="track">
            <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0 items-center justify-content-center">
              <li>
                <p>Meat & Eat</p>
              </li>
              <li>
                <p>Sai Veg Restaurant</p>
              </li>
              <li>
                <p>Ceylon Kadai</p>
              </li>
              <li>
                <p>Chillax</p>
              </li>
              <li>
                <p>Italian Job</p>
              </li>
              <li>
                <p>Yarnbird Fried Chicken</p>
              </li>
              <li>
                <p>Tex-Mex Delights</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="glide-08 relative w-full overflow-hidden bg-[#5a2104]">
          <div data-glide-el="track">
            <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0 items-center justify-content-center">
              <li>
                <img src={meatEat} className="w-100" alt="" />
              </li>
              <li>
                <img src={saiVeg} className="w-100" alt="" />{" "}
              </li>
              <li>
                <img src={ceylonKadai} className="w-100" alt="" />{" "}
              </li>
              <li>
                <img src={chillax} className="w-100" alt="" />{" "}
              </li>
              <li>
                <img src={italianJob} className="w-100" alt="" />{" "}
              </li>
              <li>
                <img src={yarnbird} className="w-100" alt="" />{" "}
              </li>
              <li>
                <img src={texMex} className="w-100" alt="" />{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
