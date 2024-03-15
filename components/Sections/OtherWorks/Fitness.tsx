import React, { useEffect, useState } from "react";
import Image from "next/image";
import ProjectTitle from "../../Buttons/ProjectTitle";
import Labels from "../../Labels";
import GotoProject from "../../Buttons/GotoProject";
import Slider from "@/components/Slider";
import inter from "next/font/google";
import { hrefAndTexts } from "@/constants/image_texts";
import MiniSlider from "@/components/MiniSlider";

const Fitness = () => {
  const [activeImage, setActiveImage] = useState("/fitness/main.png");
  const [activeText, setActiveText] = useState(hrefAndTexts.fitness[0].text);
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    "/fitness/main.png",
    "/fitness/diet.png",
    "/fitness/game.png",
  ];

  useEffect(() => {
    setActiveImage(images[activeIndex]);
    setActiveText(hrefAndTexts.fitness[activeIndex].text);
  }, [activeIndex]);

  return (
    <main
      className={`flex h-screen lg:h-3/4 w-3/4 items-center justify-center gap-48 p-24`}
    >
      <div className="w-3/4 h-full  flex flex-col justify-center items-center gap-2">
        <ProjectTitle title={"Fitness App"} />
        <div className="flex flex-col items-center gap-16 p-10 rounded-xl border-white border-opacity-30">
          <div className="w-full ">
            <p className="text-xl font-normal">
              In this project, we've developed a website featuring a 3D model of
              the human body to illustrate muscle groups and corresponding
              exercises for targeted development. Additionally, tailored dietary
              plans are provided for each specific body region. On the website,
              there's also a game waiting for you. I hope you enjoy playing it!
            </p>
          </div>
          <Labels
            labels={[
              "Three.js",
              "React-fiber",
              "React-Context",
              "Vite.js",
              "Gaming",
            ]}
          />
          <GotoProject href="https://muscle-workout.vercel.app/" />
        </div>
        <Slider
          activeImage={activeImage}
          activeText={activeText}
          setActiveIndex={setActiveIndex}
          limit={images.length}
          activeIndex={activeIndex}
        />
        <div>
          <h1 className="text-center text-2xl mb-10 italic font-bold">
            Sample Interfaces
          </h1>
          <MiniSlider
            images={images}
            activeImage={activeImage}
            setActiveIndex={setActiveIndex}
            section="fitness"
          />
        </div>
      </div>
    </main>
  );
};

export default Fitness;
