import React from "react";

import aboutImg from "../../assets/about/about1.jpg";
import aboutImg2 from "../../assets/about/about2.jpg";

const About: React.FC = () => {
  return (
    <div>
      <div className="aboutPageCont01 flex lg:flex-row flex-col items-center justify-center h-[90vh] bg-cover bg-center text-white overflow-auto">
        <div
          className="text-start lg:pt-0 pt-40 px-6 lg:px-20 flex-1"
          data-aos="fade-right"
        >
          <h1 className="text-3xl lg:text-5xl font-bold mb-4">
            Good Food. <br />
            Great Memories. <br />
            All Under One Roof.{" "}
          </h1>
        </div>
        <div className="lg:mt-6 flex-1" data-aos=""></div>
      </div>

      <div className="w-full md:w-10/12 mx-auto">
        <div className="flex lg:flex-row flex-col gap-5 items-center justify-center m-5">
          <div
            className="text-start lg:pt-0 pt-10 flex-1 flex items-center"
            data-aos="fade-right"
          >
            <p
              className="text-[18px] text-justify"
              style={{ textIndent: "2rem" }}
            >
              <span className="font-bold fontFam">Welcome to Match Point,</span>{" "}
              where flavours from around the world come together in one vibrant
              dining destination. More than just a food court, we are a culinary
              experience—a place where food lovers can indulge in a variety of
              cuisines, crafted with passion and quality. Whether you're craving
              sizzling meats, wholesome vegetarian dishes, indulgent desserts,
              or bold international flavours, Match Point has something to
              satisfy every palate.
            </p>
          </div>

          <div className="lg:mt-6 flex-1 flex" data-aos="fade-left">
            <img
              src={aboutImg}
              alt="About Image"
              className="w-full object-cover h-[280px] rounded-xl"
            />
          </div>
        </div>

        <div className="py-5 m-5">
          <p className="text-[20px]">
            With seven distinct brands, each offering a unique taste experience,
            every visit is a new adventure:
          </p>
          <p className="text-[20px]">
            From flame-grilled meats at Meat and Eat to wholesome vegetarian
            delights at Sai Veg Restaurant, Match Point offers flavours for
            every craving. Savour bold South Asian spices at Ceylon Kadai
            Non-Veg, indulge in sweet treats at Chillax, and enjoy authentic
            Italian dishes at Italian Job. Craving fried chicken? Yardbird
            serves up crispy American and Korean-style bites, while Tex-Mex
            Delights brings sizzling fajitas and cheesy quesadillas. A world of
            flavours, all in one place!
          </p>
          <p className="text-[20px]">
            At Match Point, we celebrate variety, quality, and innovation,
            ensuring every meal is a delightful experience. Whether you're
            dining in with family and friends or grabbing a quick bite, we
            promise a memorable feast that keeps you coming back for more.
          </p>
        </div>

        <img src={aboutImg2} alt="" className="h-[70vh] w-full object-cover" />

        <div className="py-10">
          <p className="text-[20px] font-bold uppercase text-center">
            Frequently Asked Questions
          </p>
          <section className="w-full divide-y py-4 rounded divide-slate-200 ">
            <details className="p-4 group" open>
              <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
                1. Do you offer vegan, vegetarian, or gluten-free options?{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute right-0 w-4 h-4 transition duration-300 top-1 shrink-0 stroke-slate-700 group-open:rotate-45"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-labelledby="title-ac01 desc-ac01"
                >
                  <title id="title-ac01">Open icon</title>
                  <desc id="desc-ac01">
                    icon that represents the state of the summary
                  </desc>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </summary>
              <p className="mt-4 text-slate-500">
                Yes, Sai Veg Restaurant and Italian Job offer vegan and
                vegetarian options. Gluten-free dishes are also available upon
                request.
              </p>
            </details>
            <details className="p-4 group">
              <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
                2. Can I customize my order to suit my dietary preferences?{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute right-0 w-4 h-4 transition duration-300 top-1 shrink-0 stroke-slate-700 group-open:rotate-45"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-labelledby="title-ac03 desc-ac03"
                >
                  <title id="title-ac03">Open icon</title>
                  <desc id="desc-ac03">
                    icon that represents the state of the summary
                  </desc>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </summary>
              <p className="mt-4 text-slate-500">
                Absolutely! We aim to accommodate special dietary needs wherever
                possible. Please inform our staff while placing your order.
              </p>
            </details>
            <details className="p-4 group">
              <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
                3. Are there any seasonal or limited-time dishes available?{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute right-0 w-4 h-4 transition duration-300 top-1 shrink-0 stroke-slate-700 group-open:rotate-45"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-labelledby="title-ac04 desc-ac04"
                >
                  <title id="title-ac04">Open icon</title>
                  <desc id="desc-ac04">
                    icon that represents the state of the summary
                  </desc>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </summary>
              <p className="mt-4 text-slate-500">
                Yes, we regularly introduce seasonal specialties and
                limited-time offers. Follow us on social media to stay updated.
              </p>
            </details>
            <details className="p-4 group">
              <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
                4. What cuisines are available at the food court?{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute right-0 w-4 h-4 transition duration-300 top-1 shrink-0 stroke-slate-700 group-open:rotate-45"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-labelledby="title-ac04 desc-ac04"
                >
                  <title id="title-ac04">Open icon</title>
                  <desc id="desc-ac04">
                    icon that represents the state of the summary
                  </desc>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </summary>
              <p className="mt-4 text-slate-500">
                We offer a variety of cuisines, including vegetarian,
                non-vegetarian, Italian, desserts, and more from our five
                brands: Meat and Eat, Sai Veg Restaurant, Ceylon Kadai Non-Veg,
                Chillax, and Italian Job.
              </p>
            </details>
            <details className="p-4 group">
              <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
                5. Who do I contact if there is an issue with my order?{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute right-0 w-4 h-4 transition duration-300 top-1 shrink-0 stroke-slate-700 group-open:rotate-45"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-labelledby="title-ac04 desc-ac04"
                >
                  <title id="title-ac04">Open icon</title>
                  <desc id="desc-ac04">
                    icon that represents the state of the summary
                  </desc>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </summary>
              <p className="mt-4 text-slate-500">
                Please call our customer service hotline at +91 86673 55490, or
                email us at order@matchpointsalem.com. We’ll resolve your
                concern promptly.
              </p>
            </details>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
