import React from "react";
import { useNavigate } from "react-router-dom";

import blog1Cover from "../../assets/blog/blog1Cover.jpg";
import blog2Cover from "../../assets/blog/blog2.jpg";
import blog3Cover from "../../assets/blog/blog31.jpg";
import blog4Cover from "../../assets/blog/blog41.jpg";

import { ShieldUser, Tags, TrendingUp } from "lucide-react";

const blogData = [
  {
    cover: blog1Cover,
    date: { day: "19", month: "Mar" },
    author: "Admin",
    tag: "Food",
    title:
      "A Food Court for Every Craving: Exploring the Best Eateries Under One Roof",
    route: "/a-food-court-for-every-craving",
  },
  {
    cover: blog2Cover,
    date: { day: "28", month: "Mar" },
    author: "Admin",
    tag: "Chicken",
    title:
      "Crispy & Crunchy: The Ultimate Guide to Fried Chicken (American, Korean & More!)",
    route: "/crispy-and-crunchy",
  },
  {
    cover: blog3Cover,
    date: { day: "12", month: "May" },
    author: "Admin",
    tag: "Food Court",
    title:
      "One Food Court, Endless Possibilities: Discover MatchPoint Salem Today",
    route: "/discover-matchpoint-salem",
  },
  {
    cover: blog4Cover,
    date: { day: "28", month: "May" },
    author: "Admin",
    tag: "Pizza",
    title: "How Many Calories in a Slice of Pizza? A Complete Guide by Type",
    route: "/how-many-calories-in-a-slice-of-pizza",
  },
];

const Blogs: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="blogPage1Cover flex flex-col items-center justify-center h-[70vh] bg-cover bg-center text-white overflow-auto">
        <h1 className="text-3xl lg:text-5xl font-bold mb-4">Blogs</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 w-full md:w-10/12 py-5 mx-auto">
        {blogData.map((blog, index) => (
          <div
            key={index}
            className="cardCont flex flex-col m-4 shadow-lg cursor-pointer"
            onClick={() => {
              navigate(blog.route);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <img
              src={blog.cover}
              alt=""
              className="rounded h-60 object-cover"
            />
            <div className="flex m-2 items-center justify-around">
              <div className="date bg-[#5a2104] px-5 py-3 rounded-lg text-center">
                <p className="text-white font-bold text-[22px]">
                  {blog.date.day}
                </p>
                <p className="text-white font-bold text-[12px] m-0">
                  {blog.date.month}
                </p>
              </div>
              <div className="byWhom flex gap-1">
                <ShieldUser /> {blog.author}
              </div>
              <div className="tag flex gap-1">
                <Tags /> {blog.tag}
              </div>
            </div>
            <div className="title line-clamp-2 pl-3 text-black font-bold text-[19px]">
              {blog.title}
            </div>
            <div className="readMoreBtn text-center flex items-center justify-center gap-3 bg-[#5a2104] py-2 mt-3 rounded text-white font-bold uppercase">
              Read More <TrendingUp />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
