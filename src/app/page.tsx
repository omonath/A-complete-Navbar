import React from "react";
import Home from "./components/Home/Home";

const page = () => {
  return (
    <div className="h-[1000px]">
      <Home /> {/* Assuming Home is imported from the correct path */}
    </div>
  );
};

export default page;
