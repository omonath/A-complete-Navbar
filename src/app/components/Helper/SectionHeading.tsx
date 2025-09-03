import React from "react";

//define props type
type Props = {
  children: React.ReactNode;
};
const SectionHeading = ({ children }: Props) => {
  return (
    <h1 className="bg-blue-800 w-fit text-center px-3 py-2 mx-auto  text-white text-2xl sm:text-3xl md:text-4xl uppercase -rotate-9">
      {children}
    </h1>
  );
};

export default SectionHeading;
