import React from "react";

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
        <div className="flex lg:flex-row flex-col">
          <div
            className="text-start lg:pt-0 pt-40 flex-1"
            data-aos="fade-right"
          >
            <p>
              Welcome to Match Point, where flavours from around the world come
              together in one vibrant dining destination. More than just a food
              court, we are a culinary experience—a place where food lovers can
              indulge in a variety of cuisines, crafted with passion and
              quality. Whether you're craving sizzling meats, wholesome
              vegetarian dishes, indulgent desserts, or bold international
              flavours, Match Point has something to satisfy every palate.
            </p>
          </div>
          <div className="lg:mt-6 flex-1" data-aos=""></div>
        </div>
        <p>
          With seven distinct brands, each offering a unique taste experience,
          every visit is a new adventure:
        </p>
        <p>
          From flame-grilled meats at Meat and Eat to wholesome vegetarian
          delights at Sai Veg Restaurant, Match Point offers flavours for every
          craving. Savour bold South Asian spices at Ceylon Kadai Non-Veg,
          indulge in sweet treats at Chillax, and enjoy authentic Italian dishes
          at Italian Job. Craving fried chicken? Yardbird serves up crispy
          American and Korean-style bites, while Tex-Mex Delights brings
          sizzling fajitas and cheesy quesadillas. A world of flavours, all in
          one place!
        </p>
        <p>
          At Match Point, we celebrate variety, quality, and innovation,
          ensuring every meal is a delightful experience. Whether you're dining
          in with family and friends or grabbing a quick bite, we promise a
          memorable feast that keeps you coming back for more.
        </p>

        <section className="w-full divide-y rounded divide-slate-200 ">
          <details className="p-4 group" open>
            <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
              How does TailwindCSS works?
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
              Tailwind CSS works by scanning all of your HTML files, JavaScript
              components, and any other templates for className names,
              generating the corresponding styles and then writing them to a
              static CSS file.
            </p>
          </details>
          <details className="p-4 group">
            <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
              How do I install TailwindCSS?
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-0 w-4 h-4 transition duration-300 top-1 shrink-0 stroke-slate-700 group-open:rotate-45"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-labelledby="title-ac02 desc-ac02"
              >
                <title id="title-ac02">Open icon</title>
                <desc id="desc-ac02">
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
              The simplest and fastest way to get up and running with Tailwind
              CSS from scratch is with the Tailwind CLI tool. The CLI is also
              available as a standalone executable if you want to use it without
              installing Node.js. Install tailwindcss via npm, and create your
              tailwind.config.js file.
            </p>
          </details>
          <details className="p-4 group">
            <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
              What is Wind UI about?
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
              Expertly made, responsive, accessible components in React and HTML
              ready to be used on your website or app. Just copy and paste them
              on your Tailwind CSS project.
            </p>
          </details>
          <details className="p-4 group">
            <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
              How do I use Wind UI components?
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
              All components can be copied and pasted and easily implemented in
              your tailwind css projects. You can choose which language you want
              to copy the desired component and just hover and click on the
              component you need and paste it on your project.
            </p>
          </details>
        </section>
      </div>
    </div>
  );
};

export default About;
