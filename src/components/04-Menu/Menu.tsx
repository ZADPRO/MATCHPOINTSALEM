import React from "react";

import chillax1 from "../../assets/newMenu/chillax1.jpg";
import chillax2 from "../../assets/newMenu/chillax2.jpg";
import ceylon1 from "../../assets/newMenu/ceylon1.jpg";
import ceylon2 from "../../assets/newMenu/ceylon2.jpg";
import saiVeg1 from "../../assets/newMenu/saiveg1.jpg";
import saiveg2 from "../../assets/newMenu/saiveg2.jpg";
import texmex1 from "../../assets/newMenu/texmex1.jpg";
import texmex2 from "../../assets/newMenu/texmex2.jpg";
import italian1 from "../../assets/newMenu/italian1.jpg";
import italian2 from "../../assets/newMenu/italian2.jpg";
import yarnbird1 from "../../assets/newMenu/yarnbird1.jpg";
import yarnbird2 from "../../assets/newMenu/yarnbird2.jpg";

const Menu: React.FC = () => {
  return (
    <div>
      <div className="menuPageCont01 flex lg:flex-row flex-col items-center justify-center h-[70vh] bg-cover bg-center text-white overflow-auto">
        <div
          className="text-start lg:pt-0 pt-40 px-6 lg:px-20 flex-1"
          data-aos="fade-right"
        >
          <h1 className="text-3xl lg:text-5xl font-bold mb-4">Menu </h1>
        </div>
        <div className="lg:mt-6 flex-1" data-aos=""></div>
      </div>

      <div className="m-3 w-full md:w-10/12 mx-auto">
        <div className="flex lg:flex-row flex-col gap-4 items-center justify-center my-3">
          <img
            className="w-[92%] lg:w-[45%]"
            src={chillax1}
            alt=""
            data-aos="flip-right"
          />
          <img
            className="w-[92%] lg:w-[45%]"
            src={chillax2}
            alt=""
            data-aos="flip-left"
          />
        </div>
      </div>
      <div className="m-3 w-full md:w-10/12 mx-auto">
        <div className="flex lg:flex-row flex-col gap-4 items-center justify-center my-3">
          <img
            className="w-[92%] lg:w-[45%]"
            src={ceylon1}
            alt=""
            data-aos="flip-right"
          />
          <img
            className="w-[92%] lg:w-[45%]"
            src={ceylon2}
            alt=""
            data-aos="flip-left"
          />
        </div>
      </div>
      <div className="m-3 w-full md:w-10/12 mx-auto">
        <div className="flex lg:flex-row flex-col gap-4 items-center justify-center my-3">
          <img
            className="w-[92%] lg:w-[45%]"
            src={saiVeg1}
            alt=""
            data-aos="flip-right"
          />
          <img
            className="w-[92%] lg:w-[45%]"
            src={saiveg2}
            alt=""
            data-aos="flip-left"
          />
        </div>
      </div>
      <div className="m-3 w-full md:w-10/12 mx-auto">
        <div className="flex lg:flex-row flex-col gap-4 items-center justify-center my-3">
          <img
            className="w-[92%] lg:w-[45%]"
            src={texmex1}
            alt=""
            data-aos="flip-right"
          />
          <img
            className="w-[92%] lg:w-[45%]"
            src={texmex2}
            alt=""
            data-aos="flip-left"
          />
        </div>
      </div>
      <div className="m-3 w-full md:w-10/12 mx-auto">
        <div className="flex lg:flex-row flex-col gap-4 items-center justify-center my-3">
          <img
            className="w-[92%] lg:w-[45%]"
            src={italian1}
            alt=""
            data-aos="flip-right"
          />
          <img
            className="w-[92%] lg:w-[45%]"
            src={italian2}
            alt=""
            data-aos="flip-left"
          />
        </div>
      </div>
      <div className="m-3 w-full md:w-10/12 mx-auto">
        <div className="flex lg:flex-row flex-col gap-4 items-center justify-center my-3">
          <img
            className="w-[92%] lg:w-[45%]"
            src={yarnbird1}
            alt=""
            data-aos="flip-right"
          />
          <img
            className="w-[92%] lg:w-[45%]"
            src={yarnbird2}
            alt=""
            data-aos="flip-left"
          />
        </div>
      </div>
    </div>
  );
};

export default Menu;
