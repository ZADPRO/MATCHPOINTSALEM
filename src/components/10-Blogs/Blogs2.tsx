import React from "react";

import blog1Cover from "../../assets/blog/blog2.jpg";
import blog1Img1 from "../../assets/blog/blog21.jpg";
import blog1Img2 from "../../assets/blog/blog22.jpg";
import blog1Img3 from "../../assets/blog/blog23.jpg";

import blog2Cover from "../../assets/blog/blog2.jpg";

const Blog2: React.FC = () => {
  return (
    <div className="bg-gray-100">
      <div className="blogPage1Cover flex flex-col items-center justify-center h-[70vh] bg-cover bg-center text-white overflow-auto">
        <h1 className="text-3xl lg:text-5xl font-bold mb-4">Blog Details</h1>
        <p className="text-md lg:text-xl max-w-2xl mx-auto">
          Crispy & Crunchy: The Ultimate Guide to Fried Chicken (American,
          Korean & More!)
        </p>
      </div>

      <div className="m-5">
        <div className="flex lg:flex-row flex-col text-justify w-full md:w-10/12 mx-auto my-5 justify-between">
          <div className="mainCont lg:w-[70%] w-full py-3">
            <img
              src={blog1Img1}
              alt=""
              className="w-full rounded h-[400px] object-cover"
            />
            <p className="text-black font-bold text-[25px] py-4">
              Crispy & Crunchy: The Ultimate Guide to Fried Chicken (American,
              Korean & More!)
            </p>
            <p
              className="text-[18px]"
              style={{ fontStyle: "italic", textIndent: "2rem" }}
            >
              "There are few comfort foods more popular internationally than
              fried chicken. With their crispy, golden exterior and succulent,
              juicy interior, few foods have taken the world as completely by
              storm as fried chicken. While, of course, the United States is
              perhaps the most renowned source of Southern fried chicken in the
              world, other nations do their own that is just as tasty. Starting
              with Korean double-fried wings and going all the way to Japanese
              karaage, this book takes you through the best-fried chicken
              flavours, special preparation techniques, and tips for cooking the
              crunchiest, crispiest fried chicken at home."
            </p>
          </div>
          <div className="subCont lg:w-[26%] w-full py-3">
            <div className="card">
              <p className="text-black font-bold uppercase text-[18px]">
                Recent Blogs
              </p>
              <div className="flex gap-3 my-3 px-3 py-4 bg-white rounded-lg items-center">
                <img src={blog2Cover} className="w-[80px]" alt="" />
                <div className="flex flex-col">
                  <p className="text-[#5a2104] font-semibold">
                    19 - Mar - 2025
                  </p>
                  <p className="line-clamp-2 m-0 text-[15px] font-bold">
                    A Food Court for Every Craving: Exploring the Best Eateries
                    Under One Roof
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-10/12 mx-auto text-justify">
          {/* <div className="flex gap-10 lg:flex-row flex-col items-center">
            <div className="">
              <p className="text-black font-bold text-[25px]">
                The American Classic: Southern Fried Chicken{" "}
              </p>
              <p className="text-black text-[18px] indent-[2rem]">
                Southern fried chicken is the most well-known form of fried
                chicken globally. The dish is a product of the American South
                and has a reputation for being well-seasoned, crispy, and
                crunchy on the outside due to a buttermilk marinade and a
                seasoned flour dredge.
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
          </div> */}
          <p className="text-black font-bold text-[25px] mt-5 text-justify">
            The American Classic: Southern Fried Chicken{" "}
          </p>
          <p className="text-black text-[18px] indent-[2rem]">
            Southern fried chicken is the most well-known form of fried chicken
            globally. The dish is a product of the American South and has a
            reputation for being well-seasoned, crispy, and crunchy on the
            outside due to a buttermilk marinade and a seasoned flour dredge.
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
                  Marinate in Buttermilk{" "}
                </h4>
                <p className=" text-black">
                  The chicken is submerged in buttermilk for a couple of hours
                  or overnight. This tenderizes the meat and gives it flavour.
                </p>
              </div>
            </li>
            <li
              role="article"
              className="relative pl-6 before:absolute before:left-0 before:top-2 before:z-10 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-[#5a2104] before:ring-2 before:ring-white"
            >
              <div className="flex flex-col flex-1 gap-4">
                <h4 className="text-lg font-medium text-[#5a2104]">
                  Seasoned Flour Dredge{" "}
                </h4>
                <p className=" text-black">
                  The chicken is dredged in a mix of flour, salt, pepper, and
                  seasonings like paprika, cayenne, and garlic powder.
                </p>
              </div>
            </li>
            <li
              role="article"
              className="relative pl-6 before:absolute before:left-0 before:top-2 before:z-10 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-[#5a2104] before:ring-2 before:ring-white"
            >
              <div className="flex flex-col flex-1 gap-4">
                <h4 className="text-lg font-medium text-[#5a2104]">
                  Deep-Frying{" "}
                </h4>
                <p className=" text-black">
                  Chicken is deep-fried in oil at approximately 350°F (175°C)
                  until golden and cooked through.
                </p>
              </div>
            </li>
            <li
              role="article"
              className="relative pl-6 before:absolute before:left-0 before:top-2 before:z-10 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-[#5a2104] before:ring-2 before:ring-white"
            >
              <div className="flex flex-col flex-1 gap-4">
                <h4 className="text-lg font-medium text-[#5a2104]">
                  Rest & Serve{" "}
                </h4>
                <p className=" text-black">
                  Allowing the chicken to rest on a wire rack once fried keeps
                  the chicken crispy with excess oil being drained.
                </p>
              </div>
            </li>
          </ul>

          <p className="text-black font-bold text-[25px] mt-5">
            Korean Fried Chicken: The Double-Fried Perfection{" "}
          </p>
          <p className="text-black text-[18px]">
            Korean fried chicken (KFC) is loved globally for its extremely
            crunchy skin and tasty sauces. Its secret is in its double-frying
            method, which drains excess fat, resulting in the skin becoming
            extremely crunchy.
          </p>
          <div className="flex gap-10 lg:flex-row flex-col items-center">
            <div className="py-4">
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
                        restaurants in Portugal, offering everything from
                        seafood to traditional pastries like pastéis de nata.
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
                        A traditional indoor market featuring tapas, seafood,
                        and premium wines, all in one place.
                      </p>
                    </div>
                  </li>
                </ul>
              </ul>
            </div>
          </div>

          <p className="text-black font-bold text-[25px] mt-5">
            Tips for Making the Crispiest Fried Chicken at Home{" "}
          </p>
          <p className="text-black text-[18px]">
            Whichever style you prefer, here are some tips that apply no matter
            what for making super-crispy fried chicken at home:
          </p>
          <ul>
            <li className="text-black text-[18px]">
              <b>Use buttermilk or brine :</b> This tenderizes the chicken and
              provides flavour
            </li>
            <li className="text-black text-[18px]">
              <b>Let the Coating Rest : </b>Once dredged, allow the chicken to
              rest for 15-20 minutes before frying to allow the coating to
              adhere better.
            </li>
            <li className="text-black text-[18px]">
              <b>Use the Right Oil : </b> Peanut oil, canola oil, or vegetable
              oil with a high smoke point is best.
            </li>
            <li className="text-black text-[18px]">
              <b>Monitor Oil Temperature :</b> Maintain it consistently between
              325°F and 375°F for optimal crispiness.
            </li>
            <li className="text-black text-[18px]">
              <b>Drain on a Wire Rack :</b> Fried chicken on a wire rack keeps
              it from becoming soggy.
            </li>
          </ul>

          <div className="py-10">
            <p className="text-black font-bold text-[25px] mt-5">Conclusion</p>
            <p className="text-black text-[18px] indent-[2rem]">
              From the Southern-style comfort of buttermilk fried chicken to the
              double-fried crunch of Korean chicken and the spicy kick of
              Nashville hot chicken, there’s a fried chicken style for every
              palate. Whether you’re making it at home or enjoying it from your
              favourite restaurant, crispy, crunchy fried chicken will always be
              a crowd-pleaser. Try out different styles, experiment with
              flavours, and enjoy the ultimate fried chicken experience!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog2;
