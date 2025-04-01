import React from "react";

import blog1Cover from "../../assets/blog/blog1Cover.jpg";
import blog1Img1 from "../../assets/blog/blog11.jpg";
import blog1Img2 from "../../assets/blog/blog12.jpg";
import blog1Img3 from "../../assets/blog/blog13.jpg";

const Blog1: React.FC = () => {
  return (
    <div>
      <div className="blogPage1Cover flex flex-col items-center justify-center h-[70vh] bg-cover bg-center text-white overflow-auto">
        <h1 className="text-3xl lg:text-5xl font-bold mb-4">Blog Details</h1>
        <p className="text-md lg:text-xl max-w-2xl mx-auto">
          A Food Court for Every Craving: Exploring the Best Eateries Under One
          Roof{" "}
        </p>
      </div>

      <div className="flex lg:flex-row flex-col text-justify w-full md:w-10/12 mx-auto my-5">
        <div className="mainCont w-[70%]">
          <img
            src={blog1Img1}
            alt=""
            className="w-full rounded h-[400px] object-cover"
          />
          <p className="text-black font-bold text-[25px]">
            A Food Court for Every Craving: Exploring the Best Eateries Under
            One Roof
          </p>
          <p
            className="text-[18px]"
            style={{ fontStyle: "italic", textIndent: "2rem" }}
          >
            "Food courts are heaven on earth for food enthusiasts. They present
            a cultural mix of tastes, cuisines, and flavours in one venue.
            Whether gourmet burgers, genuine sushi, hot street food, or rich
            desserts appeal to your mood, food courts have something for every
            desire. From contemporary malls to vibrant marketplaces, let us
            delve deeper into what food courts have become and where to find the
            best under one roof. "
          </p>
        </div>
        <div className="subCont w-[30%]"></div>
      </div>

      <div className="w-full md:w-10/12 mx-auto text-justify">
        <div className="flex gap-10 lg:flex-row flex-col items-center">
          <div className="">
            <p className="text-black font-bold text-[25px]">
              The Allure of Food Courts
            </p>
            <p className="text-black text-[18px] indent-[2rem]">
              Food courts are a far cry from their fast-food chain cousins
              tucked in the corner of a shopping mall. Now, they are lively food
              centres that combine local specialities, international cuisine,
              and even Michelin-starred restaurants. Having a choice of multiple
              dining options in one venue makes them an attractive destination
              for families, friends, and single diners. To boot, the relaxed
              setting is more cost-effective than an upscale restaurant.
            </p>
            <p className="text-black text-[18px] indent-[2rem]">
              One of the most significant benefits of food courts is their
              versatility when it comes to pleasing different palates and
              dietary requirements. If you're vegan, gluten-free, or simply a
              high-protein-diet eater, there's something for all of us. Food
              courts also permit people to try new cuisine without ordering an
              entire meal from a restaurant that they've never tried before.
              Food courts, therefore, provide a perfect solution for sampling
              world foods without venturing too far from home.
            </p>
          </div>
          <div className="">
            <img
              src={blog1Img2}
              alt="Home Banner"
              className="lg:w-[1400px] rounded-lg"
            />
          </div>
        </div>
        <p className="text-black font-bold text-[25px] mt-5 text-justify">
          A World Culinary Adventure
        </p>
        <p className="text-black text-[18px] indent-[2rem]">
          The greatest food courts are international eateries in and of
          themselves, with a variety of international foods available. These are
          some must-haves:
        </p>
        <ul
          aria-label="Changelog feed"
          role="feed"
          className="relative flex flex-col gap-2 py-12 pl-6 before:absolute before:top-0 before:left-6 before:h-full before:-translate-x-1/2 before:border before:border-dashed before:border-slate-200 after:absolute after:top-6 after:left-6 after:bottom-6 after:-translate-x-1/2 after:border after:border-slate-200 "
        >
          <li
            role="article"
            className="relative pl-6 before:absolute before:left-0 before:top-2 before:z-10 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-[#5a2104] before:ring-2 before:ring-white"
          >
            <div className="flex flex-col flex-1 gap-4">
              <h4 className="text-lg font-medium text-[#5a2104]">
                Asian Delights:{" "}
              </h4>
              <p className=" text-black">
                For fans of strong flavours, food courts usually have stalls for
                sushi, dim sum, ramen, or spicy Thai curries.
              </p>
            </div>
          </li>
          <li
            role="article"
            className="relative pl-6 before:absolute before:left-0 before:top-2 before:z-10 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-[#5a2104] before:ring-2 before:ring-white"
          >
            <div className="flex flex-col flex-1 gap-4">
              <h4 className="text-lg font-medium text-[#5a2104]">
                Classic American Comforts:{" "}
              </h4>
              <p className=" text-black">
                Juicy cheeseburgers, crispy fried chicken, and loaded fries are
                always a winner.
              </p>
            </div>
          </li>
          <li
            role="article"
            className="relative pl-6 before:absolute before:left-0 before:top-2 before:z-10 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-[#5a2104] before:ring-2 before:ring-white"
          >
            <div className="flex flex-col flex-1 gap-4">
              <h4 className="text-lg font-medium text-[#5a2104]">
                Mediterranean Marvels:{" "}
              </h4>
              <p className=" text-black">
                Gyros, falafel wraps, grilled kebabs, and fresh hummus transport
                the taste of Greece, Turkey, and the Middle East to food courts.
              </p>
            </div>
          </li>
          <li
            role="article"
            className="relative pl-6 before:absolute before:left-0 before:top-2 before:z-10 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-[#5a2104] before:ring-2 before:ring-white"
          >
            <div className="flex flex-col flex-1 gap-4">
              <h4 className="text-lg font-medium text-[#5a2104]">
                Latin American Spice:{" "}
              </h4>
              <p className=" text-black">
                Burritos, tacos, and empanadas are a tasty and filling meal on
                the move.
              </p>
            </div>
          </li>
          <li
            role="article"
            className="relative pl-6 before:absolute before:left-0 before:top-2 before:z-10 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-[#5a2104] before:ring-2 before:ring-white"
          >
            <div className="flex flex-col flex-1 gap-4">
              <h4 className="text-lg font-medium text-[#5a2104]">
                European Elegance:{" "}
              </h4>
              <p className=" text-black">
                Freshly baked pizzas, creamy pasta, or French pastries bring a
                hint of European refinement to the table.
              </p>
            </div>
          </li>
        </ul>

        <p className="text-black font-bold text-[25px] mt-5">
          Iconic Food Courts Around the World
        </p>
        <p className="text-black text-[18px]">
          If you’re a foodie traveller, visiting some of the world’s most famous
          food courts should be on your bucket list. <br /> Here are some top
          contenders:
        </p>
        <div className="flex gap-10 lg:flex-row flex-col items-center">
          <div className="">
            <img
              src={blog1Img1}
              alt="Home Banner"
              className="lg:w-[800px] rounded-lg"
            />
          </div>
          <div className="">
            <ul
              aria-label="Changelog feed"
              role="feed"
              className="relative flex flex-col gap-2 py-12 pl-6 before:absolute before:top-0 before:left-6 before:h-full before:-translate-x-1/2 before:border before:border-dashed before:border-slate-200 after:absolute after:top-6 after:left-6 after:bottom-6 after:-translate-x-1/2 after:border after:border-slate-200 "
            >
              {" "}
              <ul>
                <li
                  role="article"
                  className="relative pl-6 before:absolute before:left-0 before:top-2 before:z-10 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-[#5a2104] before:ring-2 before:ring-white"
                >
                  <div className="flex flex-col flex-1 gap-4">
                    <h4 className="text-lg font-medium text-[#5a2104]">
                      Timeout Market (Lisbon, Portugal):
                    </h4>
                    <p className="text-black">
                      A gourmet food hall featuring the best chefs and
                      restaurants in Portugal, offering everything from seafood
                      to traditional pastries like pastéis de nata.
                    </p>
                  </div>
                </li>

                <li
                  role="article"
                  className="relative pl-6 before:absolute before:left-0 before:top-2 before:z-10 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-[#5a2104] before:ring-2 before:ring-white"
                >
                  <div className="flex flex-col flex-1 gap-4">
                    <h4 className="text-lg font-medium text-[#5a2104]">
                      Hawker Centres (Singapore):
                    </h4>
                    <p className="text-black">
                      Not your average mall food court, Singapore's hawker
                      centres are famous for having some of the world's best
                      street food at bargain prices.
                    </p>
                  </div>
                </li>

                <li
                  role="article"
                  className="relative pl-6 before:absolute before:left-0 before:top-2 before:z-10 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-[#5a2104] before:ring-2 before:ring-white"
                >
                  <div className="flex flex-col flex-1 gap-4">
                    <h4 className="text-lg font-medium text-[#5a2104]">
                      Eataly (Multiple Locations Around the World):
                    </h4>
                    <p className="text-black">
                      A paradise for Italian food enthusiasts, Eataly boasts
                      several counters with fresh pasta, artisanal pizza, and
                      rich gelato.
                    </p>
                  </div>
                </li>

                <li
                  role="article"
                  className="relative pl-6 before:absolute before:left-0 before:top-2 before:z-10 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-[#5a2104] before:ring-2 before:ring-white"
                >
                  <div className="flex flex-col flex-1 gap-4">
                    <h4 className="text-lg font-medium text-[#5a2104]">
                      Smorgasburg (New York, USA):
                    </h4>
                    <p className="text-black">
                      A large outdoor food bazaar that functions like a food
                      court, collecting innovative and varied gastronomic
                      experiences.
                    </p>
                  </div>
                </li>

                <li
                  role="article"
                  className="relative pl-6 before:absolute before:left-0 before:top-2 before:z-10 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-[#5a2104] before:ring-2 before:ring-white"
                >
                  <div className="flex flex-col flex-1 gap-4">
                    <h4 className="text-lg font-medium text-[#5a2104]">
                      Mercado de San Miguel (Madrid, Spain):
                    </h4>
                    <p className="text-black">
                      A traditional indoor market featuring tapas, seafood, and
                      premium wines, all in one place.
                    </p>
                  </div>
                </li>
              </ul>
            </ul>
          </div>
        </div>

        <p className="text-black font-bold text-[25px] mt-5">
          Tips for Maximising Your Food Court Experience
        </p>
        <p className="text-black text-[18px] indent-[2rem]">
          To fully appreciate a food court experience, remember the following
          tips:
        </p>
        <ul>
          <li>
            Walk Around First: Walk around to check out all the choices before
            deciding on one dish. This way, you won't get food envy after seeing
            something even better.
          </li>
          <li>
            Eat with Friends: If you can, go with friends so that you can order
            several dishes and share them, enabling you to taste a greater
            number of foods.
          </li>
          <li>
            Time It Right : Food courts can get crowded, especially during peak
            hours. Visiting during off-hours can ensure shorter lines and a more
            relaxed dining experience.
          </li>
          <li>
            Check for Local Specials: Many food courts feature rotating vendors
            or limited-time offerings that showcase seasonal ingredients or
            special promotions.
          </li>
          <li>
            Try Something New: Step out of your comfort zone and taste something
            you’ve never had before—you might just discover a new favourite!
          </li>
        </ul>

        <p className="text-black font-bold text-[25px] mt-5">Conclusion</p>
        <p className="text-black text-[18px] indent-[2rem]">
          Food courts are not merely convenient eating places; they are food
          playgrounds where one gets a taste of everything in moderation. You
          might be out to experiment with international cuisine, yearning for
          comfort food, or just looking for a fast, delectable meal, but a good
          food court has all this and more. Next time you feel hungry and cannot
          make up your mind, take the next turn into a food court and let your
          palate set sail on a gastronomic tour!
        </p>
      </div>
    </div>
  );
};

export default Blog1;
