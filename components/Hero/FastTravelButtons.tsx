import React from "react";

type Props = { text: string; href?: string };

const FastTravelButtons = ({ text, href }: Props) => {
  return (
    <button className="group relative items-center flex hover:translate-x-8 transition-transform duration-150 inverse-hover">
      <p className="text-white font-bold text-4xl">{text}</p>
      <div className="w-2 h-2 rounded-full bg-white group-hover:flex hidden absolute -right-12"></div>
    </button>
  );
};

export default FastTravelButtons;
