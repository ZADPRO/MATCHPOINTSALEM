import React from "react";

import blog1Img1 from "../../assets/blog/blog5Cover.jpg";
import blog2Cover from "../../assets/blog/blog2.jpg";
import blog4 from "../../assets/blog/blog51.jpg";

const Blog5: React.FC = () => {
  return (
    <div>
      <div className="bg-gray-100">
        <div className="blogPage1Cover flex flex-col items-center justify-center h-[70vh] bg-cover bg-center text-white overflow-auto">
          <h1 className="text-3xl lg:text-5xl font-bold mb-4">Blog Details</h1>
          <p className="text-md lg:text-xl max-w-2xl mx-auto">
            Best Veg Restaurants in Salem: Try Our Mini Tiffin Combo at
            MatchPoint!{" "}
          </p>
        </div>

        <div className="m-5">
          <div className="flex lg:flex-row flex-col text-justify w-full md:w-10/12 mx-auto my-5 justify-between">
            <div className="mainCont lg:w-[70%] w-full py-3">
              <img
                src={blog1Img1}
                alt=""
                className="w-full rounded h-[450px] object-cover"
              />
              <p className="text-black font-bold text-[25px] py-4">
                Best Veg Restaurants in Salem: Try Our Mini Tiffin Combo at
                MatchPoint!{" "}
              </p>
              <p
                className="text-[18px]"
                style={{ fontStyle: "italic", textIndent: "2rem" }}
              >
                "When it comes to comfort food, there’s nothing quite like a
                delicious South Indian mini tiffin to satisfy your cravings,
                especially if you're looking for a wholesome yet light meal to
                start your day. And if you’re hunting for the best veg
                restaurants in Salem, you're in for a real treat. Salem has
                slowly emerged as a foodie paradise with a penchant for
                vegetarian cuisine, and at the forefront of this revolution is
                MatchPoint Salem - a name that has become synonymous with
                quality, hygiene, and delectable taste. "
              </p>
              <p
                className="text-[18px]"
                style={{ fontStyle: "italic", textIndent: "2rem" }}
              >
                Whether you've been around for a while or are a visitor who
                types "vegan eateries near me" or "vegetarian eateries near me"
                into your search field, this blog is your go-to guide to
                learning why MatchPoint needs to be your new food destination,
                particularly for our signature Mini Tiffin Combo!
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

          <div className="w-full md:w-10/12 mx-auto text-justify">
            <div className="flex gap-10 lg:flex-row flex-col items-center">
              <div className="">
                <p className="text-black font-bold text-[25px]">
                  Why Salem Loves Veg Food{" "}
                </p>
                <p className="text-black text-[18px] indent-[2rem]">
                  Salem is rooted in rich Tamil culture, where conventional
                  vegetarian food has always been at the forefront. From crispy
                  dosas to puffy idlis and spicy chutneys, each dish is a tale
                  of tradition, love, and community. With increased health
                  consciousness and a move toward returning to plant-based
                  living, greater numbers of individuals are now specifically
                  looking for veg restaurants or searching for "vegan
                  restaurants near me" when discovering Salem's active culinary
                  scene.
                </p>
                <p className="text-black text-[18px] indent-[2rem]">
                  And of them, MatchPoint Salem is notable not only for its
                  flavor, but for the whole experience it provides.
                </p>
              </div>
              <div className="">
                <img
                  src={blog4}
                  alt="Home Banner"
                  className="lg:w-[1400px] rounded-lg"
                />
              </div>
            </div>
            <p className="text-black font-bold text-[25px] mt-5 text-justify">
              What Sets MatchPoint Salem Apart from the Rest?{" "}
            </p>
            <p className="text-black text-[18px] indent-[2rem]">
              Here's why MatchPoint is high on the list of best vegetarian
              restaurants near me:
            </p>
            {/* Subsection 1 */}
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-2">
                1. Thoughtfully Crafted South Indian Menu
              </h3>
              <p className="text-lg indent-8">
                MatchPoint is all about true South Indian cuisine with a twist.
                Though the menu serves a diverse variety of dishes, the star of
                the show has to be our Mini Tiffin Combo — a beautifully
                balanced platter that embodies the spirit of Tamil breakfast
                culture in a small, filling meal.
              </p>
            </div>

            {/* Subsection 2 */}
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-2">
                2. Clean, Hygienic Dining
              </h3>
              <p className="text-lg indent-8">
                Cleanliness is not only a habit at MatchPoint — it's a
                commitment. Our open kitchen design guarantees full
                transparency, and our staff are trained to uphold the highest
                standards of hygiene. It’s little wonder locals point us out
                when asked for "safe and clean vegetarian restaurants near me."
              </p>
            </div>

            {/* Subsection 3 */}
            <div>
              <h3 className="text-2xl font-semibold mb-2">
                3. Vegan-Friendly Options
              </h3>
              <p className="text-lg indent-8">
                We understand — veganism is not just a trend; it's a way of
                life. That's why so many of our menu items are already vegan or
                can be modified with your request. So, when you're searching for
                "vegan restaurants near me," don't forget that MatchPoint Salem
                is your solution.
              </p>
            </div>
          </div>

          <div className="w-full md:w-10/12 mx-auto text-justify">
            {/* Section: Star of the Show - Mini Tiffin Combo */}
            <div className="mt-10">
              <p className="text-black font-bold text-[25px]">
                The Star of the Show: Our Mini Tiffin Combo
              </p>
              <p className="text-lg indent-8 mb-4">
                Let's discuss the meal that's being talked about by everyone —
                the Mini Tiffin Combo. This small but varied meal is the perfect
                introduction to the best of South Indian cuisine.
              </p>

              <ul className="list-disc pl-10 text-lg mb-6 space-y-2">
                <li>
                  <strong>1 Idly</strong> – Steamed rice cakes that will melt in
                  your mouth.
                </li>
                <li>
                  <strong>1 Mini Dosa</strong> – Crispy, soft inside, and topped
                  with a dollop of ghee.
                </li>
                <li>
                  <strong>1 Pongal</strong> – Spiced rice-lentil dish that will
                  warm your soul.
                </li>
                <li>
                  <strong>1 Vada</strong> – Golden brown, crunchy outside, soft
                  inside — your perfect savoury bite.
                </li>
                <li>
                  <strong>1 Poori with Masala</strong> – Puffy, deep-fried bread
                  served with lightly spiced potato curry.
                </li>
                <li>
                  <strong>Sambar, Chutneys</strong> – Because no South Indian
                  tiffin is complete without them.
                </li>
              </ul>

              <p className="text-lg indent-8 mb-4">
                Our Mini Tiffin Combo is just the right way to introduce you to
                all of it — everything in just the right size. Whether you're
                gearing up for the day or just need a little pick-me-up in the
                middle of the morning, this combo is easy on the stomach but
                full-on flavour and satisfaction.
              </p>

              <h3 className="text-2xl font-semibold mb-2">
                Who Should Try the Mini Tiffin?
              </h3>
              <ul className="list-disc pl-10 text-lg space-y-2">
                <li>Office workers in need of a fast yet healthy breakfast.</li>
                <li>
                  Students seeking a cost-effective, energy-boosting meal.
                </li>
                <li>
                  Foreign tourists looking for traditional South Indian cuisine
                  without excess.
                </li>
                <li>Senior citizens seeking light yet delicious food.</li>
                <li>
                  Sports enthusiasts demanding plant-based, high-protein food.
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full md:w-10/12 mx-auto text-justify">
            {/* Section: Location, Reviews, and Closing */}
            <div className="mt-10 space-y-6">
              {/* Convenient Location & Ambience */}
              <div>
                <h2 className="text-3xl font-extrabold mb-3">
                  MatchPoint's Convenient Location & Ambience
                </h2>
                <p className="text-lg indent-8">
                  MatchPoint is conveniently placed in the heart of Salem —
                  easily accessible from shopping malls, colleges, and the
                  central bus stand. Whether you’re searching for “veg
                  restaurants near me” or “vegan restaurants Salem,” you’ll
                  likely find us right at the top — and for good reason.
                </p>
                <p className="text-lg indent-8 mt-2">
                  Our ambience is welcoming to all — solo diners, families, or
                  even casual business meetings. It's a calm and cozy spot to
                  relax, recharge, and enjoy food crafted with care and love.
                </p>
              </div>

              {/* Social Proof */}
              <div>
                <h2 className="text-2xl font-bold mb-2">
                  Don't Just Take Our Word for It…
                </h2>
                <p className="text-lg indent-8">
                  MatchPoint Salem has earned glowing reviews on Google, Zomato,
                  and other food platforms. Guests regularly praise the quality,
                  flavor, and variety of dishes as well as our quick service and
                  courteous staff. One review even said our Mini Tiffin "tastes
                  just like home" — and honestly, that’s the highest compliment
                  we could hope for.
                </p>
              </div>

              {/* Final Bite */}
              <div>
                <h2 className="text-2xl font-bold mb-2">
                  Final Bite: Why You Should Visit MatchPoint Today
                </h2>
                <p className="text-lg indent-8 mb-2">
                  If you're passionate about vegetarian food or looking to
                  explore plant-based options, MatchPoint Salem should be your
                  first stop. We bring together tradition, flavor, and
                  exceptional service to give you a dining experience that’s
                  both memorable and wholesome.
                </p>
                <p className="text-lg indent-8">
                  So if you’re still searching for “vegetarian restaurants near
                  me” or “mini tiffin combo in Salem,” stop right there —
                  MatchPoint is your answer. Let your taste buds experience
                  something special.
                </p>
              </div>

              {/* Call to Action */}
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-center mb-2">
                  Come Visit Us!
                </h3>
                <p className="text-center text-lg">
                  📍 <strong>MatchPoint Salem</strong>
                  <br />
                  Seelanayakanpatti, Salem – Tamil Nadu
                </p>
                <p className="text-center text-lg mt-2">
                  🕒 <strong>Timings:</strong> 7:00 AM – 10:30 PM
                </p>
                <p className="text-center text-lg mt-2">
                  📞 <strong>Orders & Reservations:</strong>{" "}
                  <a href="tel:8667355490" className="text-blue-600 underline">
                    86673 55490
                  </a>
                </p>
                <p className="text-center text-lg mt-4 font-medium">
                  Whether it’s your first visit or your fiftieth, our Mini
                  Tiffin Combo is always ready to welcome you. Come taste the
                  tradition — the MatchPoint way!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog5;
