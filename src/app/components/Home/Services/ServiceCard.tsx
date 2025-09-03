"use client";

import React from "react";
import Tilt from "react-parallax-tilt";

//define the props type for ServiceCard
type Props = {
  service: {
    id: number;
    title: string;
    description: string;
    icon: string; // should be a valid image path or URL
  };
};
const ServiceCard = ({ service }: Props) => {
  return (
    <Tilt className="shadow-2xl p-6 rounded-lg bg-[#814ced] ">
      <img src={service.icon} alt={service.title} width={50} height={50} />

      <h3 className="text-white text-lg font-bold mt-4">{service.title}</h3>
      <p className="text-white mt-2 text-sm text-0pacity-80">
        {service.description}
      </p>
    </Tilt>
  );
};

export default ServiceCard;
