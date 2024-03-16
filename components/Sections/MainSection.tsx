import React from "react";
import { Inter } from "next/font/google";
import TypewriterAnimation from "../TypeWriterAnimation";
import FastTravelButtons from "../Hero/FastTravelButtons";
const inter = Inter({ subsets: ["latin"] });

const MainSection = () => {
  return (
    <main
      className={`flex h-screen lg:h-3/4 w-3/4 items-center justify-center gap-24 p-24 ${inter.className}`}
    >
      <div className="flex flex-col items-start justify-start gap-8 w-[550px]">
        <div>
          <TypewriterAnimation
            textArray={["FullStack Developer"]}
            speed={150}
          />
          <p className="text-white font-bold text-6xl mt-2 image">
            İbrahim Ergen
          </p>
        </div>
        <p className="text-white text-1xl">
          Hey there! My name is İbrahim Ergen and I'm a FullStack Developer
          based in Ankara, Turkey. I have over 2 years of experience in web and
          mobile development.
        </p>
        <button>Con</button>
        <FastTravelButtons text="CONTACT ME" />
      </div>
      {/* <div className="flex flex-col items-start justify-start gap-4 w-96">
        <FastTravelButtons
          text="Check
          out"
        />
        <p className="text-white font-light  text-1xl">
          Hey there!, my name is İbrahim Ergen and I'm a FullStack Developer
          based in Ankara, Turkey. I have over 2 years of experience in web
          development.
        </p>

      </div> */}
    </main>
  );
};

export default MainSection;
