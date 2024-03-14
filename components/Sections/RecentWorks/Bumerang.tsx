import React from "react";
import { Inter } from "next/font/google";
import Image from "next/image";
import ProjectTitle from "@/components/Buttons/ProjectTitle";
import Labels from "@/components/Labels";
import GotoProject from "@/components/Buttons/GotoProject";
const inter = Inter({ subsets: ["latin"] });
type Props = {};

const Bumerang = (props: Props) => {
  return (
    <main
      className={`flex h-fit lg:h-3/4 w-3/4 items-center justify-center gap-48 p-24 ${inter.className} kursu-ranking-box`}
    >
      <div className="w-3/4 h-full  flex flex-col justify-center items-center gap-2">
        <ProjectTitle title={" Bumerang"} />
        <div className="flex flex-col items-center gap-16 p-10 rounded-xl border-white border-opacity-30">
          <div className="w-full ">
            <p className="text-xl font-normal">
              Bumerang is an innovative Learning Management System that
              seamlessly integrates gamification elements. Designed to enhance
              students`&apos;` learning experience, it offers a variety of games
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
          <GotoProject />
        </div>
        <div>
          <h1>Single Games</h1>
          <div className="flex justify-center items-center gap-2">
            <Image src="/kuyu.png" alt="kuyu" width={200} height={200} />
            <Image src="/labirent.png" alt="kuyu" width={200} height={200} />
            <Image src="/yilan.png" alt="kuyu" width={200} height={200} />
          </div>
        </div>
        <div>
          <h1>Multiplayer Games</h1>
          <div className="flex justify-center items-center gap-2">
            <Image src="/bomba.png" alt="kuyu" width={200} height={200} />
            <Image src="/fetih.png" alt="kuyu" width={200} height={200} />
            <Image src="/maraton.png" alt="kuyu" width={200} height={200} />
          </div>
        </div>
        <div>
          <h1>User Interfaces</h1>
          <div className="flex justify-center items-center gap-2">
            <Image
              src="/oyunentrance.png"
              alt="kuyu"
              width={200}
              height={200}
            />
            <Image src="/sorusolve.png" alt="kuyu" width={200} height={200} />
            <Image src="/meydan.png" alt="kuyu" width={200} height={200} />
          </div>
        </div>
        <div>
          <h1>Progress Charts</h1>
          <div className="flex justify-center items-center gap-2">
            <Image src="/minideneme.png" alt="kuyu" width={200} height={200} />
            <Image src="/progress.png" alt="kuyu" width={200} height={200} />
            <Image src="/bölge.png" alt="kuyu" width={200} height={200} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Bumerang;
