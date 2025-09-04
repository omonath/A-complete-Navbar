import { BaseInfo } from "@/app/Data/data";
import React from "react";
import { FaDownload } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#0f0118] overflow-hidden relative ">
      <div className="flex justify-center flex-col w-4/5 h-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Left Side Content */}
          <div>
            {/* Sub Heading*/}
            <h1
              data-aos="fade-left"
              className="text-2xl md:text-3xl lg:text-4xl mb-3 text-gray-600 font-semibold"
            >
              I am {BaseInfo.name}
            </h1>
            {/* Tittle*/}
            <h1
              data-aos="fade-right"
              data-aos-delay="100"
              className="text-bg text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem] text-black"
            >
              {BaseInfo.position}
            </h1>
            {/* Description*/}
            <p
              data-aos="fade-left"
              data-aos-delay="200"
              className="text-white md:text-base text-sm mt-6 text-opacity-60"
            >
              {BaseInfo.description}
            </p>
            {/* Button*/}
            <button
              data-aos="zoom-in"
              data-aos-delay="300"
              className="md:px-8 mt-8 md:py-2.5 py-1.5 text-white font-semibold rounded-md text-sm md:text-lg transition-all  flex items-center space-x-2 bg-blue-700 hover:bg-blue-900  duration-300 ease-in-out"
            >
              <span>Download CV</span>
              <FaDownload />
            </button>
          </div>
          {/* Right Side Content image content*/}
          <div
            data-aos="zoom-in"
            data-aos-delay="400"
            className="mx-auto hidden lg:block rounded-[2rem] border-[1.5px]  overflow-x-hidden"
          >
            <img
              src={"./assets/Natimg.jpeg"}
              alt={BaseInfo.name}
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
