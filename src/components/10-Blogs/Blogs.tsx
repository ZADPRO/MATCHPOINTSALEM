import React from "react";
import { useNavigate } from "react-router-dom";

import blog1Cover from "../../assets/blog/blog1Cover.jpg";
import blog2Cover from "../../assets/blog/blog2.jpg";
import blog3Cover from "../../assets/blog/blog31.jpg";

import { ShieldUser, Tags, TrendingUp } from "lucide-react";

const Blogs: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="blogPage1Cover flex flex-col items-center justify-center h-[70vh] bg-cover bg-center text-white overflow-auto">
        <h1 className="text-3xl lg:text-5xl font-bold mb-4">Blogs</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 w-full md:w-10/12 py-5 mx-auto">
        <div
          className="cardCont flex flex-col m-4 shadow-lg cursor-pointer"
          onClick={() => {
            navigate("/a-food-court-for-every-craving");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <img src={blog1Cover} alt="" className="rounded h-60 object-cover" />
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
          <img src={blog2Cover} alt="" className="rounded h-60 object-cover" />
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
        <div
          className="cardCont flex flex-col m-4 shadow-lg cursor-pointer"
          onClick={() => {
            navigate("/discover-matchpoint-salem");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <img src={blog3Cover} alt="" className="rounded h-60 object-cover" />
          <div className="flex m-2 items-center justify-around">
            <div className="date bg-[#5a2104] px-5 py-3 rounded-lg text-center">
              <p className="text-white font-bold text-[22px]">12</p>
              <p className="text-white font-bold text-[12px] m-0">May</p>
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
            One Food Court, Endless Possibilities: Discover MatchPoint Salem
            Today
          </div>
          <div className="readMoreBtn text-center flex items-center justify-center gap-3 bg-[#5a2104] py-2 mt-3 rounded text-white font-bold uppercase">
            Read More <TrendingUp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
