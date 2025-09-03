import React from "react";
import SectionHeading from "../../Helper/SectionHeading";
import Slider from "./Slider";

const Reviews = () => {
  return (
    <div className="pt-16 pb-16 bg-[#050709]">
      <SectionHeading> Client Reviews</SectionHeading>
      <div className="w-[90%] sm:-[80%] mx-auto mt-20">
        {/* Add your review slider or content here */}
        <Slider />
      </div>
    </div>
  );
};

export default Reviews;
