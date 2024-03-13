import React from "react";
import { Inter } from "next/font/google";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });
type Props = {};

const Skills = (props: Props) => {
  return (
    <main
      className={`flex h-screen lg:h-3/4 w-3/4 items-center justify-center gap-48 p-24 ${inter.className}`}
    >
      <div className="w-1/2 h-full border flex flex-col justify-center items-center gap-2">
        <h1>MY SKILLS</h1>
        <div className="w-full flex justify-start items-center gap-2">
          <Image
            src="/next.svg"
            alt="chat toggle button "
            width={50}
            height={50}
            className="border w-10 h-10 object-contain"
          />
          <p>WEB DEVELOPMENT</p>
        </div>
        <div className="w-full flex justify-start items-center gap-2">
          <Image
            src="/main.svg"
            alt="chat toggle button "
            width={15}
            height={15}
            className="border w-10 object-contain"
          />
          <p>APP DEVELOPMENT</p>
        </div>
        <div className="w-full flex justify-start items-center gap-2">
          <Image
            src="/main.svg"
            alt="chat toggle button "
            width={15}
            height={15}
            className="border w-10 object-contain"
          />
          <p>UI DESIGN</p>
        </div>
      </div>
    </main>
  );
};

export default Skills;
