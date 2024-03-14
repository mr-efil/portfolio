import React from "react";
import { Inter } from "next/font/google";
import Image from "next/image";
import Label from "@/components/Buttons/Label";
import Labels from "@/components/Labels";
import ProjectTitle from "@/components/Buttons/ProjectTitle";
const inter = Inter({ subsets: ["latin"] });
type Props = {};

const Socials = (props: Props) => {
  const labels = [
    "React Native",
    "Expo",
    "SQLite",
    "Redux",
    "Django",
    "Django Rest Framework",
    "Figma",
    "Apache E-charts",
    "dayjs",
    "PostgreSQL",
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
  ];
  return (
    <main
      className={`flex h-screen lg:h-3/4 w-3/4 items-center justify-center gap-48 p-24 ${inter.className}`}
    >
      <div className="w-3/4 h-full  flex flex-col justify-center items-center gap-2">
        <ProjectTitle title="socials" />
        <div className="pt-12 flex flex-wrap items-start justify-center gap-10">
          <div className="flex flex-col items-center justify-start gap-4">
            <div className="border border-white border-opacity-30 w-16 h-16 rounded-xl"></div>
            <span className="text-white font-extralight text-sm">
              INSTAGRAM
            </span>
          </div>
          <div className="flex flex-col items-center justify-start gap-4">
            <div className="border border-white border-opacity-30 w-16 h-16 rounded-xl"></div>
            <span className="text-white font-extralight text-sm">LINKEDIN</span>
          </div>
          <div className="flex flex-col items-center justify-start gap-4">
            <div className="border border-white border-opacity-30 w-16 h-16 rounded-xl"></div>
            <span className="text-white font-extralight text-sm">MAIL</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Socials;
