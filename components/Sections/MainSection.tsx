import React from "react";
import { Inter } from "next/font/google";
import TypewriterAnimation from "../TypeWriterAnimation";
import NewHeroTitle from "./NewHeroTitle";
const inter = Inter({ subsets: ["latin"] });

const MainSection = () => {
  return (
    <main
      className={`flex h-screen lg:h-3/4 w-3/4 items-center justify-center p-24 ${inter.className}`}
    >
      <div className="flex flex-col items-start justify-start gap-4">
        {/* <p className="text-white font-bold text-4xl">Hi!</p>
        <div className="flex gap-2 w-[480px] justify-start items-center">
          <p className="text-white font-extralight text-3xl"> I'm</p>
          <TypewriterAnimation
            textArray={["FullStack Developer"]}
            speed={100}
          />
        </div> */}
        <NewHeroTitle />
      </div>
      {/* <div className="flex flex-col items-center justify-start gap-4">
        <p className="text-white font-extralight  text-6xl">ALPEREN</p>
        <p className="text-white font-extrabold text-6xl">EFİLOĞLU</p>
      </div> */}
    </main>
  );
};

export default MainSection;
