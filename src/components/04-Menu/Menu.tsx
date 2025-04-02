import React from "react";

import chillax from "../../assets/menu/chillax2.jpg";
import ceylonKadai from "../../assets/menu/ceylonKadai.jpg";
import italian from "../../assets/menu/italian.jpg";
import saiveg from "../../assets/menu/saiveg.jpg";
import texMex from "../../assets/menu/texMex.jpg";
import yarnBird from "../../assets/menu/yarnBird.jpg";

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
            src={chillax}
            alt=""
            data-aos="flip-right"
          />
          <img
            className="w-[92%] lg:w-[45%]"
            src={ceylonKadai}
            alt=""
            data-aos="flip-left"
          />
        </div>
        <div className="flex lg:flex-row flex-col gap-4 items-center justify-center my-3">
          <img
            className="w-[92%] lg:w-[45%]"
            src={saiveg}
            alt=""
            data-aos="flip-right"
          />
          <img
            className="w-[92%] lg:w-[45%]"
            src={texMex}
            alt=""
            data-aos="flip-left"
          />
        </div>
        <div className="flex items-center justify-center my-6">
          <img src={italian} className="w-[92%]" alt="" data-aos="flip-right" />
        </div>
        <div className="flex items-center justify-center my-6">
          <img
            src={yarnBird}
            className="w-[92%]"
            alt=""
            data-aos="flip-right"
          />
        </div>
      </div>
    </div>
  );
};

export default Menu;
