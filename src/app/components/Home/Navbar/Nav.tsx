"use client";
import { navLinks } from "@/app/constant/constant";
import { handler } from "next/dist/build/templates/app-page";
import Link from "next/link";
import React, { use, useEffect, useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";

//define props type
type props = {
  openNav: () => void;
};
const Nav = ({ openNav }: props) => {
  const [navBg, setNavBg] = useState(false);
  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) {
        setNavBg(true);
      } else if (window.scrollY < 90) {
        setNavBg(false);
      }
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return (
    <div
      className={`fixed ${
        navBg ? "bg-[#2f0d4b]" : "fixed"
      } h-[12vh] z-[10]  w-full transition-all duration-300 ease-in-out`}
    >
      <div className="flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-80% mx-auto">
        {/* Logo can be added here */}
        <img
          src="./assets/natlogo.png"
          alt="LOGO "
          width={170}
          height={170}
          className=" ml-[-1.5rem] sm:ml-0"
        />

        {/* Navigation links can be added here */}
        <div className="flex items-center space-x-10 ">
          <div className="hidden lg:flex items-center space-x-8 ">
            {navLinks.map((navlink) => {
              return (
                <Link key={navlink.id} href={navlink.url}>
                  <div className="group relative inline-block cursor-pointer">
                    <p className="nav__link text-white transition-colors duration-300 ease-in-out">
                      {navlink.label}
                    </p>
                    <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-gray-500 transition-all duration-300 ease-in-out group-hover:w-full" />
                  </div>
                </Link>
              );
            })}
          </div>
          {/* button can be added here */}
          <div className="flex items-center space-x-4">
            <button className="md:px-8 md:py-3 px-8 py-3 text-gray-500 font-semibold sm:text-base text-sm bg-white rounded-full hover:bg-gray-400 transition-colors duration-300 ease-in-out">
              Hire Me
            </button>

            {/* Mobile menu icon can be added here */}
            <HiBars3BottomRight
              onClick={openNav}
              className="w-8 h-8 text-white cursor-pointer lg:hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
