import React from "react";
import { Inter } from "next/font/google";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });
type Props = {};

const Calendar = (props: Props) => {
  return (
    <main
      className={`flex h-screen lg:h-3/4 w-3/4 items-center justify-center gap-48 p-24 ${inter.className} kursu-ranking-box`}
    >
      <div className="w-3/4 h-full  flex flex-col justify-center items-center gap-2">
        <h1 className="text-center text-4xl italic font-extrabold text-red-700 mb-12">
          Time Management and Habit Tracker App
        </h1>
        <div className="flex flex-col items-center gap-10 border p-10 bg-gray-800">
          <div className="flex justify-center gap-10 p-2">
            <div className="w-2/5 border-r-2 ">
              <h1 className="mb-5 text-2xl">Categories</h1>
              <div className="flex gap-2 flex-wrap w-full">
                <p className="border px-4 py-2 w-32 text-center">
                  React Native
                </p>
                <p className="border px-4 py-2 w-32 text-center">Expo</p>
                <p className="border px-4 py-2 w-32 text-center">SQLite</p>
                <p className="border px-4 py-2 w-32 text-center">Redux</p>
                <p className="border px-4 py-2 w-32 text-center">Django</p>
                <p className="border px-4 py-2 w-32 text-center">
                  Django Rest Framework
                </p>
                <p className="border px-4 py-2 w-32 text-center">Figma</p>
                <p className="border px-4 py-2 w-32 text-center">
                  Apache E-charts
                </p>
                <p className="border px-4 py-2 w-32 text-center">dayjs</p>
                <p className="border px-4 py-2 w-32 text-center">PostgreSQL</p>
              </div>
            </div>
            <div className="w-3/5 ">
              <p className="text-xl font-light">
                Bumerang Calendar is a time management and habit tracker app
                that it helps the student track their time. Students can set
                goals, add notes, and track their progress.Also app provides
                daily, weekly and monthly goals for suggestions. In addition,
                students can also start any habit and track their progress.
                Calendar is connected with Bumerang Website.
              </p>
            </div>
          </div>
          <button className="border px-4 py-2">Go to Project</button>
        </div>
        <div>
          <h1>Single Games</h1>
          <div className="flex justify-center items-center gap-2">
            <Image
              src="/takvim/daily.png"
              alt="kuyu"
              width={200}
              height={200}
            />
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
        </div>
      </div>
    </main>
  );
};

export default Calendar;
