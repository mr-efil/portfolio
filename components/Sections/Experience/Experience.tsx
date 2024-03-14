import React from "react";
import { Inter } from "next/font/google";
import ProjectTitle from "@/components/Buttons/ProjectTitle";
const inter = Inter({ subsets: ["latin"] });
type Props = {};

const Experience = (props: Props) => {
  const paginatedItems = [
    { company: "STARTDOWN", duration: "2 YEARS" },
    { company: "FREELANCE", duration: "3 YEARS" },
  ];
  return (
    <main
      className={`flex h-screen lg:h-3/4 w-3/4 items-center justify-center gap-48 p-24 ${inter.className} kursu-ranking-box`}
    >
      <div className="flex flex-col items-center justify-start h-[2000px] w-3/4">
        <ProjectTitle title="EXPERIENCE" />
        <div className="z-50 w-full mt-12 flex flex-col items-center justify-start  kursu-ranking-box  text-[#f7f6f1]">
          <div className="relative flex flex-row justify-between w-full h-9 font-bold text-base border-b border-[#f7f6f160] kursu-circle px-12">
            <span className=" left-[2%] ">COMPANY</span>
            <span className=" left-[17%]">DURATION</span>
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
              <span className=" absolute right-12 inverse-hover whitespace-nowrap">
                {item.duration}
              </span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Experience;
