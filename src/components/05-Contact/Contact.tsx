import { Clock, LocateIcon, MailIcon, PhoneIcon } from "lucide-react";
import React from "react";

const Contact: React.FC = () => {
  return (
    <div>
      <div className="contactPageCont01 flex lg:flex-row flex-col items-center justify-center h-[70vh] bg-cover bg-center text-white overflow-auto"></div>

      <div className="flex lg:flex-row flex-col w-full md:w-10/12 mx-auto py-10">
        <div className="cardContacts flex flex-1 flex-col m-5 items-center border-1 border-[#ff0000] p-4 rounded text-center">
          <div className="iconCont border-1 border-[#ff0000] p-3 rounded">
            <LocateIcon />
          </div>
          <p className="text-black font-bold text-[22px]">Our Address</p>
          <p className="text-[16px]">
            No.1 , Selva Nagar, Seelanaickenpatty, Salem, Tamil Nadu, 636201.
          </p>
        </div>
        <div className="cardContacts flex flex-1 flex-col m-5 items-center border-1 border-[#ff0000] p-4 rounded text-center">
          <div className="iconCont border-1 border-[#ff0000] p-3 rounded">
            <MailIcon />
          </div>
          <p className="text-black font-bold text-[22px]">Our Mail</p>
          <p className="text-[16px]">orders@matchpointsalem.com</p>
        </div>
        <div className="cardContacts flex flex-1 flex-col m-5 items-center border-1 border-[#ff0000] p-4 rounded text-center">
          <div className="iconCont border-1 border-[#ff0000] p-3 rounded">
            <PhoneIcon />
          </div>
          <p className="text-black font-bold text-[22px]">Mobile Number</p>
          <p className="text-[16px]">+91 86673 55490</p>

          <p className="text-[16px]">24/7 priority support.</p>
        </div>
        <div className="cardContacts flex flex-1 flex-col m-5 items-center border-1 border-[#ff0000] p-4 rounded text-center">
          <div className="iconCont border-1 border-[#ff0000] p-3 rounded">
            <Clock />
          </div>
          <p className="text-black font-bold text-[22px]">Opening Hours</p>
          <p className="text-[16px]">
            9:00 AM - 10:00 PM <br /> Monday - Saturday
          </p>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col w-full md:w-9/12 mx-auto gap-5 py-10">
        <div className="flex-1"></div>
        <div className="flex-1">
          <div className="container px-4 mx-auto">
            <div className="mx-auto">
              <div className="max-w-md mx-auto px-8 py-6 bg-gray-100 rounded-lg">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Contact Us
                </h2>
                <form>
                  <div className="mb-4">
                    <label className="block text-gray-800 mb-1">
                      Your Name
                    </label>
                    <input
                      className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                      placeholder="Enter your name"
                      type="text"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-800 mb-1">
                      Your Email
                    </label>
                    <input
                      className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                      placeholder="Enter your email"
                      name="email"
                      id="email"
                      type="email"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-800 mb-1">
                      Your Message
                    </label>
                    <textarea
                      className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                      placeholder="Enter your message"
                      rows={4}
                      name="message"
                      id="message"
                    ></textarea>
                  </div>
                  <button
                    className="w-full bg-yellow-300 text-gray-800 py-2 px-4 rounded-lg hover:bg-yellow-400 transition duration-300"
                    type="submit"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
