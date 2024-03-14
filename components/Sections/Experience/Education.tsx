import React from "react";
import { Inter } from "next/font/google";
import ProjectTitle from "@/components/Buttons/ProjectTitle";
const inter = Inter({ subsets: ["latin"] });
type Props = {};

const Education = (props: Props) => {
  return (
    <main
      className={`flex h-screen lg:h-3/4 w-3/4 items-center justify-center gap-48 p-24 ${inter.className} kursu-ranking-box`}
    >
      <div className="flex flex-col items-center justify-start h-[2000px]">
        <ProjectTitle title="EDUCATION" />
        <svg
          width="800"
          height="400"
          viewBox="0 0 200 430"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-8"
        >
          <path
            d="M100,30 L100,500"
            stroke="white"
            stroke-width="2"
            strokeDasharray={"6 6"}
          />

          <circle cx="100" cy="60" r="7" stroke="white" />

          <circle cx="100" cy="60" r="3" fill="white" />
          <text
            x="130"
            y="67"
            font-size="12"
            fill="white"
            className="text-2xl font-bold italic"
          >
            StartDown <tspan font-size="text-sm">(2023-ongoing)</tspan>
          </text>
          <text
            x="130"
            y="100"
            font-size="12"
            fill="white"
            className="text-lg font-extralight italic"
          >
            Manufacturing and Assemblying
          </text>
        </svg>
      </div>
    </main>
  );
};

export default Education;
