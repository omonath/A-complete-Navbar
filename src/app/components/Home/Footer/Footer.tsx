import Link from "next/link";
import React from "react";
import {  FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="pt-16 pb-16 bg-[#0f0715]">
      
    <div className="flex justify-center items-center">
     <div>
         <a
      href="https://twitter.com/egwc_1111"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaXTwitter className="text-white text-3xl" />
</a>
     </div>

<div>
      
        <img
          src="./assets/nathlogo1.png"
          alt="LOGO "
          width={180}
          height={180}
          className=" mx-auto"
        />
      </div>
      </div>
      <div className="flex text-center flex-wrap justify-center space-x-10 space-y-4 text-white font-bold">

<div>
  <Link href="#home">Home.</Link>
</div>
<div>
  <Link href="#about">About.</Link>
</div>
<div>
  <Link href="#services">Services.</Link>
</div>
<div>
  <Link href="#skills">Skills.</Link>
</div>
<div>
  <Link href="#review">Review.</Link>
</div>
{/* <div><Link href="#blog">Blog.</Link></div> */}
<div>
  <Link href="#contact">Contact.</Link>
</div>

      </div>

      <p className="text-white text-opacity-60 mt-6 text-center">
        © 2025 by NathByte. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
