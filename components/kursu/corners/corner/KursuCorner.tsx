import Image from "next/image";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Inner from "./boxes/Inner";
import Center from "./boxes/Center";
import Outer from "./boxes/Outer";
import Bumerang from "./Bumerang";

type Props = {
  number: number;
  clickedSection: string;
  setClickedSection: Dispatch<SetStateAction<string>>;
};

const KursuCorner = ({ number, clickedSection, setClickedSection }: Props) => {
  const [clicked, setClicked] = useState(false);

  const sections = [
    {
      inside: "calendar",
      center: "bumerang",
      outer: "startdown",
    },
    {
      inside: "Fitness App",
      center: "English Learning App",
      outer: "Publishing Management App",
    },
    {
      inside: "engineering",
      center: "freelance",
      outer: "software",
    },
    {
      inside: "social media",
      center: "skills",
      outer: "contact",
    },
  ];

  const corners = [
    {
      line: "",
      box: " top-20 left-12",
      popup: "top-36 left-12",
      translate1: "-translate-x-4 -translate-y-4",
      translate2: "-translate-x-8 -translate-y-8",
      hover: "hover:left-32 transition-left",
      titleRotate:
        "bottom-12 left-16 rotate-90 origin-bottom-left -translate-y-32",
      text: "RECENT WORKS",
      textRotate: "",
      bumerang: "top-36 left-14",
    },
    {
      line: " -scale-y-100",
      box: " bottom-20 left-12 -scale-y-100",
      popup: "bottom-36 left-12 -scale-y-100",
      translate1: "-translate-x-4 translate-y-4",
      translate2: "-translate-x-8 translate-y-8",
      hover: "hover:left-32 transition-left",
      titleRotate:
        "top-12 left-16 rotate-90 origin-bottom-left -translate-y-24",
      text: "OTHER WORKS",
      textRotate: " -scale-y-100",
      bumerang: "top-36 left-14 -scale-y-100",
    },
    {
      line: " -scale-x-100 ",
      box: " top-20 right-12  -scale-x-100",
      popup: "top-36 right-12  -scale-x-100",
      translate1: "translate-x-4 -translate-y-4",
      translate2: "translate-x-8 -translate-y-8",
      hover: "hover:right-32 transition-right",
      titleRotate:
        "bottom-12 right-16 -rotate-90 origin-bottom-right -translate-y-20",
      text: "EXPERIENCE",
      textRotate: "-scale-x-100",
      bumerang: "top-36 left-14 -scale-x-100",
    },
    {
      line: "-scale-x-100 -scale-y-100",
      box: "bottom-20 right-12 -scale-x-100 -scale-y-100",
      popup: "bottom-36 right-12 -scale-x-100 -scale-y-100",
      translate1: "translate-x-4 translate-y-4",
      translate2: "translate-x-8 translate-y-8",
      hover: "hover:right-32 transition-right",
      titleRotate:
        "top-12 right-16 -rotate-90 origin-bottom-right -translate-y-24",
      text: "SOCIALS",
      textRotate: "-scale-x-100 -scale-y-100",
      bumerang: "top-36 left-14 -scale-x-100 -scale-y-100",
    },
  ];

  const icons = [
    {
      inside: "Fitness App",
      center: "English Learning App",
      outer: "Publishing Management App",
    },
    {
      inside: "/logo_deneme.png",
      center: "/logo_deneme.png",
      outer: "/logo_deneme.png",
    },
    {
      inside: "/logo_deneme.png",
      center: "/logo_deneme.png",
      outer: "/logo_deneme.png",
    },
    {
      inside: "/logo_deneme.png",
      center: "/logo_deneme.png",
      outer: "/logo_deneme.png",
    },
  ];
  return (
    <section key={number} className="relative group">
      <div
        className={`absolute group-hover:flex hidden ${corners[number].titleRotate}`}
      >
        <span className="italic text-2xl text-white font-extrabold opacity-60">
          {corners[number].text}
        </span>
      </div>
      <div
        className={`right-lines w-[546.34px] opacit ${corners[number].line}`}
      >
        <svg
          viewBox="0 0 504 444"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.3"
            d="M443.528 78.3069L319.749 78.3074C315.066 78.3074 310.465 80.0687 306.782 83.2704L251.698 131.165C248.016 134.367 243.414 136.128 238.732 136.128L120.534 136.129C115.868 136.129 111.282 137.877 107.606 141.058L53.9675 187.467C49.2386 191.559 46.4761 197.615 46.4761 203.892L46.4761 443.123"
            stroke="#f7f6f1"
          />
          <rect
            className="marker"
            width="20"
            height="5.5"
            y="-2.75"
            rx="2.5"
            fill="#f7f6f160"
          />
        </svg>
        <Bumerang position={corners[number].bumerang} number={number} />
      </div>
      <Inner
        clicked={clicked}
        corners={corners}
        number={number}
        sections={sections}
        setClickedSection={setClickedSection}
        setClicked={setClicked}
      />{" "}
      <Center
        clicked={clicked}
        corners={corners}
        number={number}
        sections={sections}
        setClickedSection={setClickedSection}
        setClicked={setClicked}
      />{" "}
      <Outer
        clicked={clicked}
        corners={corners}
        number={number}
        sections={sections}
        setClickedSection={setClickedSection}
        setClicked={setClicked}
      />
      {/* <div
        key={"top-popup"}
        className={`absolute z-[99] w-[217px] ${corners[number].popup} ${
          clicked ? "flex" : "hidden"
        } justify-center `}
      >
        <svg
          viewBox="0 0 267 362"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="-scale-100"
        >
          <path
            d="M267 342C267 353.046 258.046 362 247 362L20.0001 362C8.95437 362 6.1839e-05 353.046 6.28307e-05 342L7.72847e-05 181L8.54095e-05 90.5L8.85198e-05 55.8543C8.91152e-05 49.2221 3.28791 43.0212 8.77764 39.2997L61.6677 3.44533C64.9797 1.20015 68.8889 -1.68654e-05 72.8902 -1.65247e-05L133.5 -1.1365e-05L194.11 -6.20519e-06C198.111 -5.86456e-06 202.02 1.20015 205.332 3.44534L258.222 39.2997C263.712 43.0212 267 49.2221 267 55.8543L267 90.5L267 181L267 342Z"
            fill="#F7F6F1"
          />
          <path
            d="M247 361.5L20.0001 361.5C9.23053 361.5 0.500062 352.77 0.500063 342L0.500077 181L0.500085 90.5L0.500089 55.8543C0.500089 49.3879 3.70572 43.342 9.0582 39.7135L61.9483 3.8592C65.1774 1.67015 68.989 0.499983 72.8902 0.499983L133.5 0.499989L194.11 0.499994C198.011 0.499994 201.823 1.67016 205.052 3.85922L257.942 39.7135C263.294 43.342 266.5 49.3879 266.5 55.8543L266.5 90.5L266.5 181L266.5 342C266.5 352.77 257.77 361.5 247 361.5Z"
            stroke=" #f7f6f160"
            stroke-opacity="0.6"
          />
        </svg>
      </div> */}
    </section>
  );
};

export default KursuCorner;
