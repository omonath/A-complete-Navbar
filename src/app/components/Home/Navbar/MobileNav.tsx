import { navLinks } from "@/app/constant/constant";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ closeNav, showNav }: Props) => {
  // Tailwind has -translate-x-full, no need for translate-x-[-100%]
  const navopen = showNav ? "translate-x-0" : "-translate-x-full";

  return (
    // 👇 ensures it only shows on mobile/tablet
    <div className="block lg:hidden">
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[1000] bg-black/70 transition-opacity duration-500 ${
          showNav ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeNav}
      ></div>

      {/* Sidebar */}
      <div
        className={`text-white ${navopen} transform transition-transform duration-500 fixed top-0 left-0 flex flex-col h-full w-[80%] sm:w-[60%] bg-[#502556] z-[10000]`}
      >
        {/* Close button */}
        <CgClose
          onClick={closeNav}
          className="absolute top-4 right-4 sm:w-8 sm:h-8 w-6 h-6 text-white cursor-pointer"
        />

        {/* Links */}
        <div className="mt-16 space-y-6 pl-12">
          {navLinks.map((navlink) => (
            <Link key={navlink.id} href={navlink.url} onClick={closeNav}>
              <p className="text-lg border-b border-white pb-2 sm:text-2xl">
                {navlink.label}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
