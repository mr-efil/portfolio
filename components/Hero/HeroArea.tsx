import React from "react";
import { Inter } from "next/font/google";
import FastTravelButtons from "./FastTravelButtons";

const inter = Inter({ subsets: ["latin"] });
type Props = {};

const HeroArea = (props: Props) => {
  return (
    <main
      className={`flex h-screen w-full items-center justify-center gap-48 p-24 relative ${inter.className}`}
    >
      <div className="flex flex-col items-start justify-start">
        <p className="text-white font-bold text-4xl">Hi!</p>
        <p className="text-white font-extralight text-4xl">
          I am a Front-end Developer
        </p>
      </div>
      <div className="flex flex-col items-start justify-start gap-2">
        <FastTravelButtons text="JOB HISTORY" />
        <FastTravelButtons text="RECENT WORKS" />
        <FastTravelButtons text="CONTACT ME" />
      </div>

      <p className="text-white font-extralight text-xs absolute bottom-4 left-4">
        Developer
      </p>
      <p className="text-white font-extralight text-xs absolute bottom-4 right-4 ">
        Developer
      </p>
    </main>
  );
};

export default HeroArea;
