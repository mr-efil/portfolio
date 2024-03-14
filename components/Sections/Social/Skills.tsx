import React from "react";
import { Inter } from "next/font/google";
import Image from "next/image";
import Label from "@/components/Buttons/Label";
import Labels from "@/components/Labels";
import ProjectTitle from "@/components/Buttons/ProjectTitle";
const inter = Inter({ subsets: ["latin"] });
type Props = {};

const Skills = (props: Props) => {
  const labels = [
    "Figma",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind",
    "Redux Toolkit",
    "React Query",
    "React Context",
    "React Hook",
    "Apache E-charts",
    "dayjs",
    "chart-js",
    "canvas drawing",
    "React Native",
    "Expo",
    "SQLite",
    "PostgreSQL",
    "DynamoDB",
    "Django",
    "Django Rest Framework",
    "Websocket",
    "Serverless",
    "AWS S3",
    "Cognito",
    "AWS CodePipeline",
    "Docker",
    "Heroku"
  ];
  return (
    <main
      className={`flex h-screen lg:h-3/4 w-3/4 items-center justify-center gap-48 p-24 ${inter.className}`}
    >
      <div className="w-3/4 h-full  flex flex-col justify-center items-center gap-2">
        <ProjectTitle title="skills" />
        <div className="pt-12">
          <Labels labels={labels} />
        </div>
      </div>
    </main>
  );
};

export default Skills;
