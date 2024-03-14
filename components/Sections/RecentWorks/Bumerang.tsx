import React from "react";
import Image from "next/image";
import ProjectTitle from "../../Buttons/ProjectTitle";
import GotoProject from "../../Buttons/GotoProject";
import inter from "next/font/google";
import Slider from "@/components/Slider";
import Labels from "@/components/Labels";
import { hrefAndTexts } from "@/constants/image_texts";

const Bumerang = () => {
  const [activeImage, setActiveImage] = React.useState("/kuyu.png");
  const [activeImage2, setActiveImage2] = React.useState("/bomba.png");
  const [activeImage3, setActiveImage3] = React.useState("/oyunentrance.png");
  const [activeImage4, setActiveImage4] = React.useState("/minideneme.png");
  const [activeText, setActiveText] = React.useState(hrefAndTexts.bumerang[0].text);
  const [activeText2, setActiveText2] = React.useState(hrefAndTexts.bumerang2[0].text);
  const [activeText3, setActiveText3] = React.useState(hrefAndTexts.bumerang3[0].text);
  const [activeText4, setActiveText4] = React.useState(hrefAndTexts.bumerang4[0].text);

  return (
    <main
      className={`flex h-screen lg:h-3/4 w-3/4 items-center justify-center gap-48 p-24 kursu-ranking-box`}
    >
      <div className="w-3/4 h-full  flex flex-col justify-center items-center gap-2">
        <ProjectTitle title={"Bumerang"} />
        <div className="flex flex-col items-center gap-16 p-10 rounded-xl border-white border-opacity-30">
          <div className="w-full ">
            <p>
              Bumerang is an innovative Learning Management System that
              seamlessly integrates gamification elements. Designed to enhance
              students' learning experience, it offers a variety of games
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
          <GotoProject href="https://www.bmrng.app/" />
        </div>
        <Slider activeImage={activeImage} activeText={activeText} />

        <div className="mb-10">
          <h1 className="text-center text-2xl my-10 italic font-bold">
            Single Games
          </h1>
          <div className="flex justify-center items-center gap-8">
            {["/kuyu.png", "/labirent.png", "/yilan.png"].map(
              (imageSrc, index) => (
                <Image
                  key={index}
                  src={imageSrc}
                  alt="kuyu"
                  width={200}
                  height={200}
                  onClick={() => {
                    setActiveImage(imageSrc);
                    setActiveText(hrefAndTexts.bumerang[index].text);
                  }}
                  className={`w-64 h-32 hover:scale-110 ${
                    activeImage === imageSrc
                      ? "scale-110 border-4 border-white"
                      : ""
                  }`}
                />
              )
            )}
          </div>
        </div>
        <Slider activeImage={activeImage2} activeText={activeText2} />
        <div className="mb-10">
          <h1 className="text-center text-2xl my-10 italic font-bold">
            Multiplayer Games
          </h1>
          <div className="flex justify-center items-center gap-8">
            {["/bomba.png", "/fetih.png", "/maraton.png"].map(
              (imageSrc, index) => (
                <Image
                  key={index}
                  src={imageSrc}
                  alt="kuyu"
                  width={200}
                  height={200}
                  onClick={() => {
                    setActiveImage2(imageSrc);
                    setActiveText2(hrefAndTexts.bumerang2[index].text);
                  }}
                  className={`w-64 h-32 hover:scale-110 ${
                    activeImage === imageSrc
                      ? "scale-110 border-4 border-white"
                      : ""
                  }`}
                />
              )
            )}
          </div>
        </div>
        <Slider activeImage={activeImage3} activeText={activeText3} />
        <div className="mb-10">
          <h1 className="text-center text-2xl my-10 italic font-bold">
            User Interfaces
          </h1>
          <div className="flex justify-center items-center gap-8">
            {["/oyunentrance.png", "/sorusolve.png", "/meydan.png"].map(
              (imageSrc, index) => (
                <Image
                  key={index}
                  src={imageSrc}
                  alt="kuyu"
                  width={200}
                  height={200}
                  onClick={() => {
                    setActiveImage3(imageSrc);
                    setActiveText3(hrefAndTexts.bumerang3[index].text);
                  }}
                  className={`w-64 h-32 hover:scale-110 ${
                    activeImage === imageSrc
                      ? "scale-110 border-4 border-white"
                      : ""
                  }`}
                />
              )
            )}
          </div>
        </div>
        <Slider activeImage={activeImage4} activeText={activeText4} />
        <div className="mb-10">
          <h1 className="text-center text-2xl my-10 italic font-bold">
            Progress Charts
          </h1>
          <div className="flex justify-center items-center gap-8">
            {["/minideneme.png", "/progress.png", "/bölge.png"].map(
              (imageSrc, index) => (
                <Image
                  key={index}
                  src={imageSrc}
                  alt="kuyu"
                  width={200}
                  height={200}
                  onClick={() => {
                    setActiveImage4(imageSrc);
                    setActiveText4(hrefAndTexts.bumerang4[index].text);
                  }}
                  className={`w-64 h-32 hover:scale-110 ${
                    activeImage === imageSrc
                      ? "scale-110 border-4 border-white"
                      : ""
                  }`}
                />
              )
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Bumerang;
