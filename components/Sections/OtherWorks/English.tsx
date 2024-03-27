import React, { useEffect, useState } from "react";
import Image from "next/image";
import ProjectTitle from "../../Buttons/ProjectTitle";
import Labels from "../../Labels";
import GotoProject from "../../Buttons/GotoProject";
import { hrefAndTexts } from "@/constants/image_texts";
import inter from "next/font/google";
import Slider from "@/components/Slider";
import MiniSlider from "@/components/MiniSlider";

const English = () => {
  const [activeImage, setActiveImage] = React.useState(
    "/english/dashboard.png"
  );
  const [activeText, setActiveText] = React.useState(
    hrefAndTexts.english[0].text
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    "/english/dashboard.png",
    "/english/chat.png",
    "/english/dialogs.png",
  ];

  useEffect(() => {
    setActiveImage(images[activeIndex]);
    setActiveText(hrefAndTexts.english[activeIndex].text);
  }, [activeIndex]);

  return (
    <main
      className={`flex h-screen lg:h-3/4 w-3/4 items-center justify-center gap-48 p-24 `}
    >
      <div className="w-3/4 h-full  flex flex-col justify-center items-center gap-2">
        <ProjectTitle title={"English Learning App"} />
        <div className="flex flex-col items-center gap-16 p-10 rounded-xl border-white border-opacity-30">
          <div className="w-full ">
            <p className="font-light text-lg">
              In this project, we&apos;ve developed a website aimed at helping
              English learners improve their skills through practice. The
              process begins with creating photos depicting various life
              scenarios using Midjourney. Subsequently, we generate dialogs
              using the OpenAI API, which are then read aloud by one of the
              elevenlabs voices. Finally, users&apos; voices are recorded to
              assess the pronunciation accuracy. One advantage of the platform
              is that users can practice speaking without fear or shyness, and
              they can also expose themselves to different accents. Another
              advantage is that users can prepare for real-life scenarios by
              practicing on the platform.
            </p>
          </div>
          <Labels
            labels={[
              "OpenAI API",
              "Elevenlabs API",
              "Midjourney API",
              "Open Source Github",
              "Speech to Text",
              "Figma",
              "React Context",
            ]}
          />
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
            section="english"
          />
        </div>
      </div>
    </main>
  );
};

export default English;