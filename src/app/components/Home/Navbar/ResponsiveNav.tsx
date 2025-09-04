"use client";

import React, { use, useState } from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const ResponsiveNav = () => {
  // This component is responsible for rendering both Nav and MobileNav components
  // It can be used to switch between desktop and mobile navigation based on screen size
  const [showNav, setShowNav] = useState(false);
  const showNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);

  return (
    // This component combines Nav and MobileNav components
    <div>
      {/* Desktop Nav (visible from md and up) */}
      <div className="hidden md:block">
        <Nav openNav={showNavHandler} />
      </div>

      {/* Mobile Nav (visible below md) */}
      <div className="block md:hidden">
        <MobileNav showNav={showNav} closeNav={closeNavHandler} />
      </div>
    </div>
  );
};

export default ResponsiveNav;
