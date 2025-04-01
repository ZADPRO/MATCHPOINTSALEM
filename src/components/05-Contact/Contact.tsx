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

      <div className="flex lg:flex-row flex-col w-full md:w-9/12 mx-auto gap-5">
        <div className="flex-1"></div>
        <div className="flex-1">
          <div className="contactForm bg-white shadow-lg p-5 rounded-2xl">
            <p>Get In Touch</p>
            <div className="flex">
              <div className="flex-1 m-2">
                <input
                  type="text"
                  placeholder="Name"
                  className="border-1 border-[#ff0000] p-2 rounded w-full"
                />
              </div>
              <div className="flex-1 m-2">
                <input
                  type="text"
                  placeholder="Email"
                  className="border-1 border-[#ff0000] p-2 rounded w-full"
                />
              </div>
            </div>
            <div className="flex">
              <div className="flex-1 m-2">
                <input
                  type="text"
                  placeholder="Name"
                  className="border-1 border-[#ff0000] p-2 rounded w-full"
                />
              </div>
              <div className="flex-1 m-2">
                <input
                  type="text"
                  placeholder="Email"
                  className="border-1 border-[#ff0000] p-2 rounded w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
