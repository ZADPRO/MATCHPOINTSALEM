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
      <div className="menuPageCont01 flex lg:flex-row flex-col items-center justify-center h-[70vh] bg-cover bg-center text-white overflow-auto"></div>

      <div className="m-3 w-full md:w-10/12 mx-auto">
        <div className="flex lg:flex-row flex-col gap-4 items-center justify-center my-3">
          <img className="w-[92%] lg:w-[45%]" src={chillax} alt="" />
          <img className="w-[92%] lg:w-[45%]" src={ceylonKadai} alt="" />
        </div>
        <div className="flex lg:flex-row flex-col gap-4 items-center justify-center my-3">
          <img className="w-[92%] lg:w-[45%]" src={saiveg} alt="" />
          <img className="w-[92%] lg:w-[45%]" src={texMex} alt="" />
        </div>
        <div className="flex items-center justify-center my-6">
          <img src={italian} className="w-[92%]" alt="" />
        </div>
        <div className="flex items-center justify-center my-6">
          <img src={yarnBird} className="w-[92%]" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Menu;
