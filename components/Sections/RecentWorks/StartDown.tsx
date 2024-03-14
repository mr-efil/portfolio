import React from "react";
import { Inter } from "next/font/google";
import Image from "next/image";
import GotoProject from "../../Buttons/GotoProject";
import Labels from "../../Labels";
import ProjectTitle from "../../Buttons/ProjectTitle";
import Slider from "@/components/Slider";
import { hrefAndTexts } from "@/constants/image_texts";
const inter = Inter({ subsets: ["latin"] });
type Props = {};

const StartDown = (props: Props) => {
  const [activeImage, setActiveImage] = React.useState(
    "/startdown/calendar.png"
  );
  const [activeText, setActiveText] = React.useState(hrefAndTexts.startdown[0].text);
  return (
    <main
      className={`flex h-screen lg:h-3/4 w-3/4 items-center justify-center p-24 ${inter.className} kursu-ranking-box`}
    >
      <div className="w-3/4 h-full  flex flex-col justify-center items-center gap-12">
        <ProjectTitle title={"StartDown Social"} />
        <div className="flex flex-col items-center gap-16 p-10 rounded-xl border-white border-opacity-30">
          <div className="w-full ">
            <p className="text-xl font-normal">
              StartDown is a Course-Based Learning Platform where users are
              assigned courses based on their experience levels. Each course is
              tailored to include exercises and challenges designed to enhance
              learning. Examples of available courses include Learning English,
              Web Development, App Development, and more. In the platform, there
              is also form section where users can communicate with each other
              and share informations with others.
            </p>
          </div>
          <Labels
            labels={[
              "Next.js",
              "Django",
              "Django Rest Framework",
              "Postman",
              "PostgreSQL",
              "Figma",
              "Redux Toolkit",
              "Redux Thunk",
              "Heroku",
              "Role Based Auth",
            ]}
          />
          <GotoProject href="https://www.xn--sfrdan-p9ab.net/courses" />
        </div>
        <Slider activeImage={activeImage} activeText={activeText} />

        <div>
          <h1 className="text-center text-2xl mb-10 italic font-bold">
            Sample Interfaces
          </h1>
          <div className="flex justify-between items-center gap-8">
            {[
              "/startdown/calendar.png",
              "/startdown/course.png",
              "/startdown/courseana.png",
            ].map((imageSrc, index) => (
              <Image
                key={index}
                src={imageSrc}
                alt="kuyu"
                width={200}
                height={200}
                onClick={() => {
                  setActiveImage(imageSrc);
                  setActiveText(hrefAndTexts.startdown[index].text);
                }}
                className={`w-64 h-32 hover:scale-110 ${
                  activeImage === imageSrc
                    ? "scale-110 border-4 border-gray-500"
                    : ""
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default StartDown;
