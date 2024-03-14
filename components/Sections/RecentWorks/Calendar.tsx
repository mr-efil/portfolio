import React from "react";
import { Inter } from "next/font/google";
import Image from "next/image";
import ProjectTitle from "@/components/Buttons/ProjectTitle";
import Labels from "@/components/Labels";
import GotoProject from "@/components/Buttons/GotoProject";
const inter = Inter({ subsets: ["latin"] });
type Props = {};

const Calendar = (props: Props) => {
  return (
    <main
      className={`flex h-fit lg:h-3/4 w-3/4 items-center justify-center gap-48 p-24 ${inter.className} kursu-ranking-box`}
    >
      <div className="w-3/4 h-full  flex flex-col justify-center items-center gap-2">
        <ProjectTitle title={"Time Management and Habit Tracker App"} />
        <div className="flex flex-col items-center gap-16 p-10 rounded-xl border-white border-opacity-30">
          <div className="w-full ">
            <p className="text-xl font-normal">
              Bumerang Calendar is a time management and habit tracker app that
              it helps the student track their time. Students can set goals, add
              notes, and track their progress.Also app provides daily, weekly
              and monthly goals for suggestions. In addition, students can also
              start any habit and track their progress. Calendar is connected
              with Bumerang Website.
            </p>
          </div>
          <Labels
            labels={[
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
            ]}
          />
          <GotoProject />
        </div>
        <h1>Single Games</h1>
        <div className="flex justify-center items-center gap-2">
          <Image src="/takvim/daily.png" alt="kuyu" width={200} height={200} />
          <Image
            src="/takvim/dashboard.png"
            alt="kuyu"
            width={200}
            height={200}
          />
          <Image
            src="/takvim/kronometre.png"
            alt="kuyu"
            width={200}
            height={200}
          />
        </div>
        <div>
          <h1>Single Games</h1>
          <div className="flex justify-center items-center gap-2">
            <Image
              src="/takvim/eventadd.png"
              alt="kuyu"
              width={200}
              height={200}
            />
            <Image
              src="/takvim/tablet.png"
              alt="kuyu"
              width={200}
              height={200}
            />
            <Image
              src="/takvim/settings.png"
              alt="kuyu"
              width={200}
              height={200}
            />
          </div>
        </div>{" "}
      </div>
    </main>
  );
};

export default Calendar;
