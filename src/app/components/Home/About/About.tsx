import React from "react";
import SectionHeading from "../../Helper/SectionHeading";
import { aboutInfo } from "@/app/Data/data";
import { FaCheck } from "react-icons/fa";

const About = () => {
  return (
    <div className="pt-16 pb-16 bg-[#7199c1]">
      {/* About section SectionHeading */}
      <SectionHeading> About Me</SectionHeading>
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-20">
        {/* text Content */}
        <div data-aos="fade-left" data-aos-anchor-placement="top-center">
          <h1 className="text-bg text-[26px] sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-200">
            {aboutInfo.title}
          </h1>
          <p className="mt-6 text-base text-black">{aboutInfo.description}</p>
          <div className="mt-8">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-7 h-7 bg-blue-800 flex flex-col items-center justify-center">
                <FaCheck className="text-white" />
              </div>
              <p className="text-sm sm:text-base md:text-lg font-bold text-blue-800">
                Frontend Development
              </p>
            </div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-7 h-7 bg-orange-800 flex flex-col items-center justify-center">
                <FaCheck className="text-white" />
              </div>
              <p className="text-sm sm:text-base md:text-lg font-bold text-orange-800">
                Backend Development
              </p>
            </div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-7 h-7 bg-green-800 flex flex-col items-center justify-center">
                <FaCheck className="text-white" />
              </div>
              <p className="text-sm sm:text-base md:text-lg font-bold text-green-800">
                Full Stack Development
              </p>
            </div>
          </div>
        </div>
        {/* stats Content */}
        <div
          data-aos="zoom-in"
          data-aos-delay="150"
          data-aos-anchor-placement="top-center"
          className="grid grid-cols-2 gap-16 items-center lg:mx-auto"
        >
          {/* {first stat} */}
          <div>
            <img
              src="./assets/customer.png"
              alt="img"
              width={80}
              height={80}
              className="mx-auto"
            />
            <p className="mt-3 font-bold text-xl text-black text-center">
              {aboutInfo.client}
            </p>
            <p className=" text-base sm:text-lg text-gray-700 text-center">
              Satisfied Customers
            </p>
          </div>
          {/* {second stat} */}

          <div>
            <img
              src="./assets/experience.png"
              alt="img"
              width={80}
              height={80}
              className="mx-auto"
            />
            <p className="mt-3 font-bold text-xl text-black text-center">
              {aboutInfo.experience}
            </p>
            <p className=" text-base sm:text-lg text-gray-700 text-center">
              months of Experience
            </p>
          </div>
          {/* {third stat} */}
          <div>
            <img
              src="./assets/completed.png"
              alt="img"
              width={80}
              height={80}
              className="mx-auto"
            />
            <p className="mt-3 font-bold text-xl text-black text-center">
              {aboutInfo.project}
            </p>
            <p className=" text-base sm:text-lg text-gray-700 text-center">
              Completed Projects
            </p>
          </div>
          {/* {fourth stat} */}
          <div>
            <img
              src="./assets/rocket.png"
              alt="img"
              width={80}
              height={80}
              className="mx-auto"
            />
            <p className="mt-3 font-bold text-xl text-black text-center">
              {aboutInfo.website}
            </p>
            <p className=" text-base sm:text-lg text-gray-700 text-center">
              Live Websites
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
