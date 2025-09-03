import React from "react";

const Footer = () => {
  return (
    <div className="pt-16 pb-16 bg-[#0f0715]">
      <div>
        <img
          src="./assets/natlogo.png"
          alt="LOGO "
          width={180}
          height={180}
          className=" mx-auto"
        />
      </div>
      <div className="flex text-center flex-wrap justify-center space-x-10 space-y-4 text-white font-bold">
        <div>Home.</div>
        <div>Services.</div>
        <div>Review.</div>
        <div>Blog.</div>
        <div>Contact.</div>
      </div>

      <p className="text-white text-opacity-60 mt-6 text-center">
        © 2025 by NathByte. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
