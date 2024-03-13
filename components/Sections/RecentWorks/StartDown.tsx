import React from "react";
import { Inter } from "next/font/google";
import Image from "next/image";
import Label from "../../Buttons/Label";
import GotoProject from "../../Buttons/GotoProject";
import Labels from "../../Labels";
import ProjectTitle from "../../Buttons/ProjectTitle";
import ImageSlider from "@/components/ImageSlider";
import Slider from "@/components/Slider";
const inter = Inter({ subsets: ["latin"] });
type Props = {};

const StartDown = (props: Props) => {
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
          <GotoProject />
        </div>
        <Slider />

        <div>
          <h1>Single Games</h1>
          <div className="flex justify-between items-center gap-2">
            <Image
              src="/startdown/calendar.png"
              alt="kuyu"
              width={200}
              height={200}
            />
            <Image
              src="/startdown/course.png"
              alt="kuyu"
              width={200}
              height={200}
            />
            <Image
              src="/startdown/courseana.png"
              alt="kuyu"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default StartDown;
