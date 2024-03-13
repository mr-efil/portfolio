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
  setClicked: Dispatch<SetStateAction<boolean>>;
  setClickedSection: Dispatch<SetStateAction<string>>;
  clicked: boolean;
};

const Outer = ({
  corners,
  sections,
  number,
  setClicked,
  setClickedSection,
  clicked,
}: Props) => {
  return (
    <div
      className={`kursu-outer-box-${number} ${corners[number].hover} group/item  duration-300 inverse-hover w-[258.5px] absolute flex items-center   ${corners[number].box} ${corners[number].translate2}`}
      onClick={() => {
        setClicked(!clicked);
        setClickedSection(sections[number].outer);
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
        src={icons[number].outer}
        alt="logo_deneme"
        width={30}
        height={30}
        className={`absolute right-14 top-2 invert group-hover:opacity-100 opacity-0  ${corners[number].line}`}
      /> */}{" "}
      <span
        className={`text-sm text-white font-extrabold italic uppercase absolute right-6 group-hover/item:flex hidden pointer-events-none ${corners[number].textRotate}`}
      >
        {sections[number].outer}
      </span>
    </div>
  );
};

export default Outer;
