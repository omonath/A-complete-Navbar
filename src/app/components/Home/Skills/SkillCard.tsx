import React from "react";

//define the props type for SkillCard
type Props = {
  skill: {
    id: number;
    title: string;
    assets: string; // should be a valid image path or URL
    percent: number;
  };
};

const SkillCard = ({ skill }: Props) => {
  const { assets, percent, title } = skill;
  return (
    <div className="p-6 hover:bg-blue-900 duration-300 transition-all cursor-pointer text-center rounded-lg bg-gray-900">
      <img
        src={assets}
        alt={title}
        width={50}
        height={50}
        className="object-cover mx-auto"
      />
      <h1 className="text- [18px] mt-4 text-white font-[500]">{title}</h1>
      <div className="bg-black mt-4 rounded-lg p-2 text-white opacity-40">
        {percent}%
      </div>
    </div>
  );
};

export default SkillCard;
