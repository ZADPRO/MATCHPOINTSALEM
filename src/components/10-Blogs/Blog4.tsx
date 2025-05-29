import React from "react";

import blog1Img1 from "../../assets/blog/blog4Cover.jpg";
import blog2Cover from "../../assets/blog/blog2.jpg";
import blog4 from "../../assets/blog/blog42.jpg";

const Blog4: React.FC = () => {
  return (
    <div>
      <div className="bg-gray-100">
        <div className="blogPage1Cover flex flex-col items-center justify-center h-[70vh] bg-cover bg-center text-white overflow-auto">
          <h1 className="text-3xl lg:text-5xl font-bold mb-4">Blog Details</h1>
          <p className="text-md lg:text-xl max-w-2xl mx-auto">
            How Many Calories in a Slice of Pizza? A Complete Guide by Type
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
                How Many Calories in a Slice of Pizza? A Complete Guide by Type
              </p>
              <p
                className="text-[18px]"
                style={{ fontStyle: "italic", textIndent: "2rem" }}
              >
                "Whether you are monitoring your waistline or simply interested
                in what your favourite comfort food contains, knowing the
                calories found in pizza is key. Pizza is among the most consumed
                foods globally, enjoyed for its unlimited variety and
                mouth-watering flavour. But while delicious to eat, not every
                slice is equal in terms of calorie count. In this article, we'll
                examine the typical calorie amounts for various types of pizza,
                why the figures are different, and how you can make more
                intelligent decisions when you order from your neighbourhood
                pizzeria. "
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
                      28 - Mar - 2025
                    </p>
                    <p className="line-clamp-2 m-0 text-[15px] font-bold">
                      Crispy & Crunchy: The Ultimate Guide to Fried Chicken
                      (American, Korean & More!){" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-10/12 mx-auto text-justify mt-10">
          {/* Section 1 */}
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            {/* Text Content */}
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Do Calories in Pizza Differ?
              </h2>
              <p className="text-lg text-gray-800 mb-6 indent-8 leading-relaxed">
                With pizza, the number of calories is not fixed. A slice can be
                anywhere between 150 and more than 400 calories, based on a
                variety of factors:
              </p>

              {/* List */}
              <ul role="feed" className="relative pl-2 space-y-3">
                {[
                  {
                    title: "Crust thickness and type",
                    desc: "Thin crust generally has less fat than thick or stuffed crusts.",
                  },
                  {
                    title: "Toppings",
                    desc: "High-fat meats such as pepperoni, sausage, and excess cheese contribute substantially to the calorie load.",
                  },
                  {
                    title: "Cheese",
                    desc: "Additional cheese equals additional calories and fat.",
                  },
                  {
                    title: "Slice size",
                    desc: "One person's slice may be someone else's half-pizza.",
                  },
                  {
                    title: "Restaurant or brand",
                    desc: "A slice from a gourmet pizzeria might be more calorie-rich than one from a fast-food restaurant.",
                  },
                ].map((item, index) => (
                  <li
                    key={index}
                    role="article"
                    className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:h-3 before:w-3 before:rounded-full before:bg-[#5a2104] before:ring-2 before:ring-white"
                  >
                    <h4 className="text-[#5a2104] font-semibold text-lg mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-700">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image */}
            <div className="flex-1">
              <img
                src={blog4}
                alt="Pizza"
                className="rounded-xl shadow-lg w-full max-w-full"
              />
            </div>
          </div>

          {/* Section 2 */}
          <div className="mt-16">
            <p className="text-lg text-gray-800 mb-4 leading-relaxed">
              Knowing these points will enable you to make better decisions
              without compromising flavour.
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Average Calories in Pizza by Type (Per Slice)
            </h2>
            <p className="text-lg text-gray-800">
              Here is a general breakdown of the average calories in a standard
              slice (1/8 of a 14-inch pizza):
            </p>
          </div>

          <div className="mt-8 overflow-x-auto">
            <table className="min-w-full border border-gray-300 rounded-lg shadow-sm">
              <thead className="bg-[#5a2104] text-white">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                    Pizza Type
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                    Average Calories
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white text-gray-800">
                {[
                  ["Cheese (Thin Crust)", "190–220"],
                  ["Cheese (Regular Crust)", "220–280"],
                  ["Pepperoni", "250–310"],
                  ["Veggie", "200–270"],
                  ["Meat Lovers", "300–400+"],
                  ["Margherita (Thin Crust)", "170–230"],
                  ["Deep Dish Cheese", "300–370"],
                  ["BBQ Chicken", "270–330"],
                  ["White Pizza (No Sauce)", "280–350"],
                ].map(([type, calories], index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-gray-50" : ""}
                  >
                    <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                      {type}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                      {calories}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-md shadow-sm">
            <p className="text-yellow-800 font-medium">
              💡 Tip:{" "}
              <span className="font-normal text-black">
                Lighter options like{" "}
                <span className="font-semibold">thin crust veggie</span> or{" "}
                <span className="font-semibold">Margherita</span> can help
                reduce calorie intake without compromising on flavour.
              </span>
            </p>
          </div>

          <div className="w-full text-justify mt-10">
            <div className="flex gap-10 lg:flex-row flex-col items-center">
              <div className="w-full">
                <p className="text-black font-bold text-[25px] mb-4">
                  Calories in Pizza from Popular Pizza Shops
                </p>
                <p className="text-black text-[18px] mb-4">
                  Let's see what you may get in your favourite pizza shop. Chain
                  restaurants have standard portion sizes and list nutritional
                  information:
                </p>

                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-300 rounded-md shadow-md text-left">
                    <thead className="bg-[#5a2104] text-white">
                      <tr>
                        <th className="py-3 px-5 font-semibold">Pizza Chain</th>
                        <th className="py-3 px-5 font-semibold">Type</th>
                        <th className="py-3 px-5 font-semibold">
                          Average Calories (Per Slice)
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-black">
                      <tr className="border-t border-gray-200">
                        <td className="py-3 px-5">Domino's</td>
                        <td className="py-3 px-5">Cheese (Hand Tossed)</td>
                        <td className="py-3 px-5">~200–290</td>
                      </tr>
                      <tr className="border-t border-gray-200">
                        <td className="py-3 px-5">Pizza Hut</td>
                        <td className="py-3 px-5">Meat Lover's (Pan Crust)</td>
                        <td className="py-3 px-5">~350–400+</td>
                      </tr>
                      <tr className="border-t border-gray-200">
                        <td className="py-3 px-5">Papa John's</td>
                        <td className="py-3 px-5">
                          Pepperoni (Original Crust)
                        </td>
                        <td className="py-3 px-5">~280–320</td>
                      </tr>
                      <tr className="border-t border-gray-200">
                        <td className="py-3 px-5">Little Caesars</td>
                        <td className="py-3 px-5">Cheese (Regular Crust)</td>
                        <td className="py-3 px-5">~240</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-black text-[16px] mt-4">
                  These values may also change according to regional recipes,
                  offers, and speciality toppings, so always refer to the exact
                  nutritional information on their website or in-store.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-10/12 mx-auto text-justify mt-10">
          <div className="flex gap-10 lg:flex-row flex-col items-center">
            <div className="w-full">
              <p className="text-black font-bold text-[25px] mb-4">
                Tips to Reduce Calories Without Losing the Pizza Joy
              </p>
              <p className="text-black text-[18px] mb-6">
                You don't have to give up pizza to stay on track with your
                health goals. Here are a few practical and tasty ways to enjoy
                pizza while keeping the calorie count in check:
              </p>

              <ol className="list-decimal list-inside space-y-4 text-black text-[18px]">
                <li>
                  <span className="font-semibold">Choose Thin Crust:</span>{" "}
                  Thinner crust means fewer carbs and fewer calories. It also
                  helps the toppings shine through more!
                </li>
                <li>
                  <span className="font-semibold">Go Light on the Cheese:</span>{" "}
                  You don't need to go cheese-less. Simply ask your pizza
                  parlour for "light cheese" or forgo the extra cheese topping.
                </li>
                <li>
                  <span className="font-semibold">
                    Choose Veggies Over Meats:
                  </span>{" "}
                  Veggies such as bell peppers, mushrooms, spinach, and onions
                  are low-calorie and rich in fibre, so your slice will feel
                  more filling.
                </li>
                <li>
                  <span className="font-semibold">Portion Control:</span> Rather
                  than ordering three or four slices, have one or two and
                  accompany them with a side salad or a vegetable dish.
                </li>
                <li>
                  <span className="font-semibold">
                    Avoid Stuffed or Pan Crust:
                  </span>{" "}
                  Stuffed crust and pan varieties tend to contain twice the
                  number of calories found in thin crust varieties because they
                  contain additional dough and cheese.
                </li>
                <li>
                  <span className="font-semibold">Create Your Own:</span> Making
                  your own pizza allows you maximum control over what goes into
                  it. Make use of whole wheat dough, low-fat cheese, and
                  unprocessed vegetables for a better option.
                </li>
              </ol>
            </div>
          </div>
        </div>

        <div className="w-full md:w-10/12 mx-auto text-justify mt-10">
          <div className="flex gap-10 lg:flex-row flex-col items-center">
            <div className="w-full">
              <p className="text-black font-bold text-[25px] mb-4">
                How to Estimate Calories in Custom Pizza
              </p>
              <p className="text-black text-[18px] mb-6">
                If you're making your pizza or getting one at a local restaurant
                without nutrition information, here's a guesstimate breakdown to
                estimate calories:
              </p>
              <ul className="list-disc list-inside space-y-2 text-black text-[18px] mb-6">
                <li>
                  <span className="font-semibold">
                    Crust (standard, 1/8 pizza):
                  </span>{" "}
                  120–150 calories
                </li>
                <li>
                  <span className="font-semibold">Cheese (1 oz):</span> ~80
                  calories
                </li>
                <li>
                  <span className="font-semibold">Pepperoni (3-4 slices):</span>{" "}
                  ~50 calories
                </li>
                <li>
                  <span className="font-semibold">Veggies (1/4 cup):</span>{" "}
                  ~10–20 calories
                </li>
              </ul>
              <p className="text-black text-[18px] mb-10">
                Add them up according to your portion size. You'll be shocked
                how fast things add up and also how simple it is to substitute
                with lighter ingredients.
              </p>

              <div className="bg-yellow-100 border-l-4 border-yellow-400 p-4 rounded-md shadow-sm">
                <p className="text-black font-bold text-[20px] mb-2">
                  🍕 Fun Fact: Pizza Isn’t Always a Junk Food
                </p>
                <p className="text-black text-[18px]">
                  Believe it or not, pizza can be part of a healthy diet. When
                  made with whole ingredients, it provides a good balance of
                  protein, carbs, and fats. It can also include fibre-rich
                  veggies and even calcium from cheese.
                </p>
              </div>

              <p className="text-black text-[18px] my-5">
                The key is balance and moderation. The occasional indulgent
                pizza night won't wreck your diet if you're mindful the rest of
                the time.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-10/12 mx-auto text-justify mt-10 pb-10">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h2 className="text-black font-bold text-[25px] mb-4">
              Final Thoughts
            </h2>
            <p className="text-black text-[18px] mb-4">
              Pizza doesn’t have to be off-limits when you’re watching your
              diet. By understanding the calories in pizza and making informed
              choices, you can still indulge without guilt. Whether you’re
              ordering from your favourite pizza shop or making one at home,
              there are plenty of ways to enjoy this beloved dish in a healthier
              way.
            </p>
            <p className="text-black text-[18px] mb-4">
              If you're in{" "}
              <span className="font-semibold text-red-600">Tamil Nadu</span>,
              you can also explore a pizza shop in{" "}
              <span className="font-semibold text-red-600">Salem</span> for a
              local and flavourful pizza experience that fits your dietary
              goals. Popular places like{" "}
              <span className="font-semibold">Match Point Salem</span>, known
              for their variety of pizza in Salem, or trying out pizza in{" "}
              <span className="font-semibold">Match Point</span> and options
              like <span className="font-semibold">Italian Job</span> offer
              tasty yet manageable calorie options.
            </p>
            <p className="text-black text-[18px] font-medium">
              Remember: It’s not about giving up what you love. It’s about
              enjoying it smarter. So go ahead, grab a slice – just maybe not
              the whole pie!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog4;
