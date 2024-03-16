import React from "react";
import { Inter } from "next/font/google";
import ProjectTitle from "@/components/Buttons/ProjectTitle";
const inter = Inter({ subsets: ["latin"] });
type Props = {};

const Education = (props: Props) => {
  const paginatedItems = [
    {
      company: "VEHBI DINCER SCIENCE HIGH SCHOOL",
      department: "",
      task: "97/100",
    },
    {
      company: "TURKEY UNIVERSITY EXAM",
      department: "",
      task: "rank 3K/4M",
    },
    {
      company: "MIDDLE EAST TECHNICAL UNIVERSITY",
      department: "Mechanical Engineering",
      task: "3.73/4",
    },
    {
      company: "MIDDLE EAST TECHNICAL UNIVERSITY",
      department: "Electrical and Electronics Engineering",
      task: "3.51/4",
    },
  ];
  return (
    <main
      className={`flex h-screen lg:h-3/4 w-3/4 items-center justify-center gap-48 p-24 ${inter.className} kursu-ranking-box`}
    >
      <div className="flex flex-col items-center justify-start h-[2000px] w-3/4">
        <ProjectTitle title="EDUCATION" />
        <div className="z-50 w-full mt-12 flex flex-col items-center justify-start  kursu-ranking-box  text-[#f7f6f1]">
          <div className="relative flex flex-row justify-between w-full h-9 font-bold text-base border-b border-[#f7f6f160] kursu-circle px-12">
            <span className=" left-[2%] ">SCHOOL</span>
            <span className=" left-[17%] ml-24">DEPARTMENT</span>
            <span className=" left-[17%]">GRADE</span>
          </div>
          {paginatedItems.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-row w-full h-16 font-light text-base border-b border-[#f7f6f160] items-center justify-between hover:font-bold hover:border-b-0 kursu-underline "
            >
              <div className="kursu-circle w-full flex items-center justify-start px-12" />
              <span className=" absolute left-12 inverse-hover whitespace-nowrap">
                {item.company}
              </span>
              <span className=" absolute left-[calc(48%)] inverse-hover whitespace-nowrap">
                {item.department}
              </span>
              <span className=" absolute right-12 inverse-hover whitespace-nowrap">
                {item.task}
              </span>
            </div>
          ))}
        </div>
        {/* <svg
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
        </svg> */}
      </div>
    </main>
  );
};

export default Education;
