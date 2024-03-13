import React from "react";
import { Inter } from "next/font/google";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });
type Props = {};

const English = (props: Props) => {
  return (
    <main
      className={`flex h-screen lg:h-3/4 w-3/4 items-center justify-center gap-48 p-24 ${inter.className}`}
    >
      <div className="w-3/4 h-full  flex flex-col justify-center items-center gap-2">
        <h1 className="text-center text-4xl italic font-extrabold text-red-700 mb-12">
          English Learning App
        </h1>
        <div className="flex flex-col items-center gap-10 border p-10 bg-gray-800">
          <div className="flex justify-center gap-10 p-2">
            <div className="w-2/5 border-r-2 ">
              <h1 className="mb-5 text-2xl">Categories</h1>
              <div className="flex gap-2 flex-wrap w-full">
                <p className="border px-4 py-2 w-32 text-center">OpenAI API</p>
                <p className="border px-4 py-2 w-32 text-center">
                  Elevenlabs API
                </p>
                <p className="border px-4 py-2 w-32 text-center">
                  Midjourney API
                </p>
                <p className="border px-4 py-2 w-32 text-center">
                  Open Source Github
                </p>
                <p className="border px-4 py-2 w-32 text-center">
                  Speech to Text
                </p>
                <p className="border px-4 py-2 w-32 text-center">Figma</p>
                <p className="border px-4 py-2 w-32 text-center">
                  React Context
                </p>
              </div>
            </div>
            <div className="w-3/5 ">
              <p className="text-xl font-light">
                In this project, we've developed a website aimed at helping
                English learners improve their skills through practice. The
                process begins with creating photos depicting various life
                scenarios using Midjourney. Subsequently, we generate dialogs
                using the OpenAI API, which are then read aloud by one of the
                elevenlabs voices. Finally, users' voices are recorded to assess
                the pronunciation accuracy. One advantage of the platform is
                that users can practice speaking without fear or shyness, and
                they can also expose themselves to different accents. Another
                advantage is that users can prepare for real-life scenarios by
                practicing on the platform.
              </p>
            </div>
          </div>
          <button className="border px-4 py-2">Go to Project</button>
        </div>
        <div>
          <h1>Single Games</h1>
          <div className="flex justify-center items-center gap-2">
            <Image
              src="/english/dashboard.png"
              alt="kuyu"
              width={200}
              height={200}
            />
            <Image
              src="/english/chat.png"
              alt="kuyu"
              width={200}
              height={200}
            />
            <Image
              src="/english/dialogs.png"
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

export default English;
