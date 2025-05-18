import React from "react";

import blog1Img1 from "../../assets/blog/blog31.jpg";
import blog2Cover from "../../assets/blog/blog32.jpg";

const Blog3: React.FC = () => {
  return (
    <div>
      <div className="bg-gray-100">
        <div className="blogPage1Cover flex flex-col items-center justify-center h-[70vh] bg-cover bg-center text-white overflow-auto">
          <h1 className="text-3xl lg:text-5xl font-bold mb-4">Blog Details</h1>
          <p className="text-md lg:text-xl max-w-2xl mx-auto">
            One Food Court, Endless Possibilities: Discover MatchPoint Salem
            Today
          </p>
        </div>
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
              One Food Court, Endless Possibilities: Discover MatchPoint Salem
              Today
            </p>
            <p
              className="text-[18px]"
              style={{ fontStyle: "italic", textIndent: "2rem" }}
            >
              "If you're that person who's ever spent 15 minutes standing in
              front of a menu board, debating the merits of biryani over burgers
              or chaats versus Chinese, then you know first-hand how real that
              "what to eat?" can be. What if you never had to select just one
              option? What if you could please every craving at one location –
              without compromise?"
            </p>
            <p
              className="text-[18px]"
              style={{ fontStyle: "italic", textIndent: "2rem" }}
            >
              <b>Welcome to Match Point Salem:</b> the best food court in town
              where any craving finds its solution. In the heart of Salem, Tamil
              Nadu, lies Match Point, which is not just a food court but a
              destination for flavours, a social hub, and a community space all
              in one. Let us take you on a taste adventure through what has made
              Match Point the buzzword in town.
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
          <p className="text-black font-bold text-[25px] mt-5 text-justify">
            A Culinary Carnival Under One Roof{" "}
          </p>
          <p className="text-black text-[18px] indent-[2rem]">
            Variety is the spice of life at Match Point Salem. With more than 7
            food brands all under one roof, it's not a food court - it's a
            culinary carnival.
          </p>
          <p className="text-black text-[18px] indent-[2rem]">
            Missing crispy dosa and filter coffee? There's a stall for that.
            Yearning for a sizzling plate of sizzlers? That too. In the mood for
            spicy momos, cheesy pizzas, smoky barbecue, or creamy kulfis? Match
            Point has them all. From North Indian gravies to South Indian
            snacks, from international fast-food chains to favourite local
            hangouts - here's where all your food fantasies come alive.
          </p>
          <p className="text-black text-[18px] indent-[2rem]">
            Whether you're dining with picky eaters, a group of friends, or your
            entire family, Match Point caters to everyone's preferences without
            any hassle.
          </p>
        </div>

        <div className="w-full md:w-10/12 mx-auto text-justify">
          <p className="text-black font-bold text-[25px] mt-5 text-justify">
            A Feast for All Ages{" "}
          </p>
          <p className="text-black text-[18px] indent-[2rem]">
            What makes Match Point so great is how inclusive it is. It's not
            only for college students wanting to hang out or office workers
            picking up a quick lunch. It's a space where:
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
                  Families connect over thalis and sweets.{" "}
                </h4>
              </div>
            </li>
            <li
              role="article"
              className="relative pl-6 before:absolute before:left-0 before:top-2 before:z-10 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-[#5a2104] before:ring-2 before:ring-white"
            >
              <div className="flex flex-col flex-1 gap-4">
                <h4 className="text-lg font-medium text-[#5a2104]">
                  Teens hang out with bubble tea and burgers.{" "}
                </h4>
              </div>
            </li>
            <li
              role="article"
              className="relative pl-6 before:absolute before:left-0 before:top-2 before:z-10 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-[#5a2104] before:ring-2 before:ring-white"
            >
              <div className="flex flex-col flex-1 gap-4">
                <h4 className="text-lg font-medium text-[#5a2104]">
                  Children dash to the ice cream counter with wide-eyed glee.{" "}
                </h4>
              </div>
            </li>
            <li
              role="article"
              className="relative pl-6 before:absolute before:left-0 before:top-2 before:z-10 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-[#5a2104] before:ring-2 before:ring-white"
            >
              <div className="flex flex-col flex-1 gap-4">
                <h4 className="text-lg font-medium text-[#5a2104]">
                  Foodies document their latest discoveries.{" "}
                </h4>
              </div>
            </li>
            <li
              role="article"
              className="relative pl-6 before:absolute before:left-0 before:top-2 before:z-10 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-[#5a2104] before:ring-2 before:ring-white"
            >
              <div className="flex flex-col flex-1 gap-4">
                <h4 className="text-lg font-medium text-[#5a2104]">
                  Seniors sit down for evening conversations with chai and
                  snacks.{" "}
                </h4>
              </div>
            </li>
          </ul>

          <p className="text-black text-[18px] indent-[2rem]">
            The seating is roomy, the atmosphere lively, and the atmosphere just
            right for all generations.
          </p>
        </div>

        <div className="w-full md:w-10/12 mx-auto text-justify">
          <p className="text-black font-bold text-[25px] mt-5 text-justify">
            It's Not Just Food, it’s a Social Experience{" "}
          </p>
          <p className="text-black text-[18px] indent-[2rem]">
            Match Point is not only where you dine. It's where you meet,
            socialise, and create memories. The food court is intended to foster
            community interaction - with open seating, live music nights,
            weekend flea markets, and even periodic open mic nights.
          </p>
          <p className="text-black text-[18px] indent-[2rem]">
            Whether you're having a low-key date, marking a small victory, or
            reconnecting with friends you haven't seen in ages, Match Point
            provides the ideal setting.
          </p>
          <p className="text-black text-[18px] indent-[2rem]">
            Pro Tip: Visit on a Saturday evening for the whole experience - live
            acoustic sets, inviting food scents wafting through the air, and
            vibrant energy all over.
          </p>
        </div>

        <div className="w-full md:w-10/12 mx-auto text-justify">
          <p className="text-black font-bold text-[25px] mt-5 text-justify">
            Instagrammable Aesthetics{" "}
          </p>
          <p className="text-black text-[18px] indent-[2rem]">
            In the era of "phone eats first", aesthetics count - and Match Point
            doesn't disappoint. The interiors are carefully curated with sleek
            modernism and bold colours that provide the ultimate Instagram
            setting.
          </p>
          <p className="text-black text-[18px] indent-[2rem]">
            From quirky neon signs to artistic food murals, every corner is
            photo - worthy. Many local influencers and vloggers flock here to
            film reels and reviews, which is why Match Point has become quite
            the social media sensation in Salem.
          </p>
          <p className="text-black text-[18px] indent-[2rem]">
            Don’t forget to snap a picture of your food before digging in
            #MatchPointSalem is your go-to hashtag!
          </p>
        </div>

        <div className="w-full md:w-10/12 mx-auto text-justify">
          <p className="text-black font-bold text-[25px] mt-5 text-justify">
            A Safe & Sanitised Space{" "}
          </p>
          <p className="text-black text-[18px] indent-[2rem]">
            Safety is as crucial as taste in this day and age. Match Point
            doesn't joke with hygiene. Sanitising regularly, contactless
            payment, clean kitchens, and friendly service make sure that each
            bite you enjoy is not only delicious but also safe.
          </p>
          <p className="text-black text-[18px] indent-[2rem]">
            Parents can rest assured that their children are eating in a
            hygienic environment, and everyone can enjoy their meal without
            fear.
          </p>
        </div>

        <div className="w-full md:w-10/12 mx-auto text-justify">
          <p className="text-black font-bold text-[25px] mt-5 text-justify">
            Fast Service, Friendly Vibes{" "}
          </p>
          <p className="text-black text-[18px] indent-[2rem]">
            In spite of its humming popularity, Match Point boasts speedy
            service and a friendly staff. No matter if you're a first-time
            visitor or a fiftieth-time visitor, there's always a smile in store
            for you at each counter.
          </p>
          <p className="text-black text-[18px] indent-[2rem]">
            Ordering is seamless – digital kiosks or QR code orders at many of
            the stalls reduce waiting time. Not sure what to order but want to
            try something new? The owners will be more than willing to recommend
            something quickly or even give you a free taste!
          </p>
        </div>

        <div className="w-full md:w-10/12 mx-auto text-justify">
          <p className="text-black font-bold text-[25px] mt-5 text-justify">
            Events, Offers & Food Fests{" "}
          </p>
          <p className="text-black text-[18px] indent-[2rem]">
            Another massive draw that keeps foodies returning to Match Point is
            the regularly changing roster of events and seasonal offerings.
          </p>
          <p className="text-black text-[18px] indent-[2rem]">
            You'll frequently discover:
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
                  Weekend Food Fests featuring exotic cuisines{" "}
                </h4>
              </div>
            </li>
            <li
              role="article"
              className="relative pl-6 before:absolute before:left-0 before:top-2 before:z-10 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-[#5a2104] before:ring-2 before:ring-white"
            >
              <div className="flex flex-col flex-1 gap-4">
                <h4 className="text-lg font-medium text-[#5a2104]">
                  Special festival combo deals{" "}
                </h4>
              </div>
            </li>
            <li
              role="article"
              className="relative pl-6 before:absolute before:left-0 before:top-2 before:z-10 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-[#5a2104] before:ring-2 before:ring-white"
            >
              <div className="flex flex-col flex-1 gap-4">
                <h4 className="text-lg font-medium text-[#5a2104]">
                  Live cooking demonstrations and chef pop-ups{" "}
                </h4>
              </div>
            </li>
            <li
              role="article"
              className="relative pl-6 before:absolute before:left-0 before:top-2 before:z-10 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-[#5a2104] before:ring-2 before:ring-white"
            >
              <div className="flex flex-col flex-1 gap-4">
                <h4 className="text-lg font-medium text-[#5a2104]">
                  Student and loyal customer discounts{" "}
                </h4>
              </div>
            </li>
            <li
              role="article"
              className="relative pl-6 before:absolute before:left-0 before:top-2 before:z-10 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-[#5a2104] before:ring-2 before:ring-white"
            >
              <div className="flex flex-col flex-1 gap-4">
                <h4 className="text-lg font-medium text-[#5a2104]">
                  Giveaways & contests on Match Point’s social media
                </h4>
              </div>
            </li>
          </ul>

          <p className="text-black text-[18px] indent-[2rem]">
            No two trips to Match Point are ever the same. There's always
            something new to try or discover.{" "}
          </p>
        </div>

        <div className="w-full md:w-10/12 mx-auto text-justify">
          <p className="text-black font-bold text-[25px] mt-5 text-justify">
            Location & Accessibility{" "}
          </p>
          <p className="text-black text-[18px] indent-[2rem]">
            Match Point Salem is well placed in a central location, in
            Seelanaikenpatty, Salem. making it easily reachable from any point
            in the city. Whether driving in, alighting from a bus, or taking an
            auto, reaching here is convenient. There is ample parking space, and
            the design is welcoming for senior citizens and differently abled
            visitors.
          </p>
        </div>

        <div className="w-full md:w-10/12 mx-auto text-justify">
          <p className="text-black font-bold text-[25px] mt-5 text-justify">
            Why Match Point Salem is a Must-Visit{" "}
          </p>
          <p className="text-black text-[18px] indent-[2rem]">
            In a world were eating out is no longer solely about the food, Match
            Point Salem provides the whole experience. It honours diversity - of
            flavour, of people, of moments. It's where great food and wonderful
            memories come together, all in one lively, open space.
          </p>
          <p className="text-black text-[18px] indent-[2rem]">
            Whether you’re a local looking for your new hangout spot or a
            visitor exploring Salem’s evolving food culture, Match Point is a
            must-visit. It’s not just a food court - its where endless
            possibilities begin.
          </p>
        </div>

        <div className="w-full md:w-10/12 mx-auto text-justify">
          <p className="text-black font-bold text-[25px] mt-5 text-justify">
            Final Bite{" "}
          </p>
          <p className="text-black text-[18px] indent-[2rem]">
            So the next time your taste buds can't decide what they're hungry
            for, don't fret. Go to Match Point Salem - where one food court
            delivers the world of flavours to your doorstep. Arrive hungry,
            depart smiling - and likely already thinking about your next
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog3;
