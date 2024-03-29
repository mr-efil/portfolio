import { useRouter } from "next/router";
import React, { Dispatch, SetStateAction } from "react";

type Props = {
  corners: {
    line: string;
    box: string;
    popup: string;
    translate1: string;
    translate2: string;
    hover: string;
    titleRotate: string;
    text: string;
    textRotate: string;
    bumerang: string;
  }[];
  sections: {
    inside: string;
    center: string;
    outer: string;
  }[];
  number: number;
};

const Inner = ({ corners, sections, number }: Props) => {
  const router = useRouter();
  const pathName = router.asPath;

  return (
    <div
      className={`kursu-outer-box-${number} ${corners[number].hover}  ${
        pathName.includes(sections[number].inside)
          ? number < 2
            ? "left-32"
            : "right-32"
          : ""
      } group/item  duration-300 inverse-hover w-[258.5px] absolute flex items-center   ${
        corners[number].box
      } `}
      onClick={() => {
        router.push(sections[number].inside);
      }}
    >
      <svg
        viewBox="0 0 240 47"
        fill="#f7f6f1"
        xmlns="http://www.w3.org/2000/svg"
        className=" hover:fill-[#f7f6f160] fill-[#f7f6f110] transition-colors duration-300"
      >
        <path
          d="M234.859 0.5H5C2.51472 0.5 0.5 2.51472 0.5 5V42C0.5 44.4853 2.51472 46.5 5 46.5H130.5H191.167C192.232 46.5 193.263 46.1223 194.075 45.4341L237.767 8.43406C240.965 5.72554 239.05 0.5 234.859 0.5Z"
          stroke=" #f7f6f160"
        />
      </svg>
      {/* <Image
      src={icons[number].inside}
      alt="logo_deneme"
      width={30}
      height={30}
      className={`absolute right-14 top-2 invert group-hover:opacity-100 opacity-0  ${corners[number].line}`}
    /> */}
      <span
        className={`text-xl lg:text-lg 2xl:text-base text-white font-extrabold italic uppercase absolute right-12 pointer-events-none ${
          corners[number].textRotate
        } ${
          pathName.includes(sections[number].inside)
            ? "flex"
            : "group-hover/item:flex hidden"
        }`}
      >
        {sections[number].inside}
      </span>
    </div>
  );
};

export default Inner;
