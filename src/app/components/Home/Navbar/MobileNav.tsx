import { navLinks } from "@/app/constant/constant";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";

// Define props type
type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ closeNav, showNav }: Props) => {
  const navopen = showNav ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <div>
      {/* Mobile navigation content can be added here */}
      <div
        className={`fixed ${navopen} transform transition-all duration-500 inset-0 z-[1000] bg-white-800 opacity-70 w-full h-screen`}
      ></div>
      {/* Nav links items can be added here */}
      <div
        className={`text-black ${navopen} transform transition-all duration-500 delay-300 fixed justify-center  flex flex-col h-full w-[80%] sm:w-[60] bg-[#502556] space-x-6 z-[10000]`}
      >
        {navLinks.map((navlink) => {
          return (
            <Link key={navlink.id} href={navlink.url}>
              <p className="nav__link text-[20px] ml-12 border-b-[1.5px] pb-2 border-b-white sm:text-[40px] bottom-[10rem]">
                {navlink.label}
              </p>
            </Link>
          );
        })}
        {/* closed button */}
        <CgClose
          onClick={closeNav}
          className="absolute top-[0.7rem] right-[0.12rem] sm:w-8 sm:h-8 w-6 h-6 text-black  "
        />
      </div>
    </div>
  );
};

export default MobileNav;
