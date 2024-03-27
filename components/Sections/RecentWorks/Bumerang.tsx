import React, { useEffect, useState } from "react";
import Image from "next/image";
import ProjectTitle from "../../Buttons/ProjectTitle";
import GotoProject from "../../Buttons/GotoProject";
import inter from "next/font/google";
import Slider from "@/components/Slider";
import Labels from "@/components/Labels";
import { hrefAndTexts } from "@/constants/image_texts";
import MiniSlider from "@/components/MiniSlider";

const Bumerang = () => {
  const [activeTexts, setActiveTexts] = useState<string[]>([
    hrefAndTexts.bumerang[0].text,
    hrefAndTexts.bumerang2[0].text,
    hrefAndTexts.bumerang3[0].text,
    hrefAndTexts.bumerang4[0].text,
  ]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeIndex2, setActiveIndex2] = useState(0);
  const [activeIndex3, setActiveIndex3] = useState(0);
  const [activeIndex4, setActiveIndex4] = useState(0);
  const images = [
    ["/kuyu.png", "/labirent.png", "/yilan.png"],
    ["/bomba.png", "/fetih.png", "/maraton.png"],
    ["/oyunentrance.png", "/sorusolve.png", "/meydan.png"],
    ["/minideneme.png", "/progress.png", "/bölge.png"],
  ];

  useEffect(() => {
    setActiveTexts([
      hrefAndTexts.bumerang[activeIndex].text,
      hrefAndTexts.bumerang2[activeIndex2].text,
      hrefAndTexts.bumerang3[activeIndex3].text,
      hrefAndTexts.bumerang4[activeIndex4].text,
    ]);
  }, [activeIndex, activeIndex2, activeIndex3, activeIndex4]);

  return (
    <main
      className={`flex h-screen lg:h-3/4 w-3/4 items-center justify-center gap-48 p-24 kursu-ranking-box`}
    >
      <div className="w-3/4 h-full  flex flex-col justify-center items-center gap-2">
        <ProjectTitle title={"Bumerang"} />
        <div className="flex flex-col items-center gap-16 p-10 rounded-xl border-white border-opacity-30">
          <div className="w-full ">
            <p className="font-light text-lg">
              Bumerang is an innovative Learning Management System that
              seamlessly integrates gamification elements. Designed to enhance
              students&apos; learning experience, it offers a variety of games
              tailored to develop specific skills such as time management and
              quick decision-making. On the platform, students can engage in
              interactive quizzes covering fundamental sciences, earning points
              as they progress. A dynamic leaderboard showcases the top
              achievers, fostering healthy competition and motivation among
              users. Moreover, students have the option to challenge their
              peers, adding a social dimension to the learning process. Deployed
              on the reliable infrastructure of AWS, Bumerang ensures a seamless
              and reliable experience for all users.
            </p>
          </div>
          <Labels
            labels={[
              "Next.js",
              "React Query",
              "Websocket",
              "Serverless",
              "AWS S3",
              "DynamoDB",
              "TypeScript",
              "Tailwind",
              "Cognito",
              "chart-js",
              "canvas drawing",
              "AWS CodePipeline",
            ]}
          />
          <GotoProject href="https://www.bmrng.app/" title={"Bumerang"} />
        </div>
        <Slider
          activeImage={images[0][activeIndex]}
          activeText={activeTexts[0]}
          limit={3}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />

        <div className="mb-10">
          <h1 className="text-center text-2xl my-10 italic font-bold">
            Single Games
          </h1>
          <div className="flex justify-center items-center gap-8">
            <MiniSlider
              images={images[0]}
              activeImage={images[0][activeIndex]}
              setActiveIndex={setActiveIndex}
              section="bumerang"
            />
          </div>
        </div>
        <Slider
          activeImage={images[1][activeIndex2]}
          activeText={activeTexts[1]}
          limit={3}
          activeIndex={activeIndex2}
          setActiveIndex={setActiveIndex2}
        />
        <div className="mb-10">
          <h1 className="text-center text-2xl my-10 italic font-bold">
            Multiplayer Games
          </h1>
          <MiniSlider
            images={images[1]}
            activeImage={images[1][activeIndex2]}
            setActiveIndex={setActiveIndex2}
            section="bumerang2"
          />
        </div>
        <Slider
          activeImage={images[2][activeIndex3]}
          activeText={activeTexts[2]}
          limit={3}
          activeIndex={activeIndex3}
          setActiveIndex={setActiveIndex3}
        />
        <div className="mb-10">
          <h1 className="text-center text-2xl my-10 italic font-bold">
            User Interfaces
          </h1>
          <MiniSlider
            images={images[2]}
            activeImage={images[2][activeIndex3]}
            setActiveIndex={setActiveIndex3}
            section="bumerang3"
          />
        </div>
        <Slider
          activeImage={images[3][activeIndex4]}
          activeText={activeTexts[3]}
          limit={3}
          activeIndex={activeIndex4}
          setActiveIndex={setActiveIndex4}
        />
        <div className="mb-10">
          <h1 className="text-center text-2xl my-10 italic font-bold">
            Progress Charts
          </h1>
          <MiniSlider
            images={images[3]}
            activeImage={images[3][activeIndex4]}
            setActiveIndex={setActiveIndex4}
            section="bumerang4"
          />
        </div>
      </div>
    </main>
  );
};

export default Bumerang;