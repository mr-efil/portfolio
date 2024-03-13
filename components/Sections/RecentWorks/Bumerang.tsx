import React from "react";
import { Inter } from "next/font/google";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });
type Props = {};

const Bumerang = (props: Props) => {
  return (
    <main
      className={`flex h-screen lg:h-3/4 w-3/4 items-center justify-center gap-48 p-24 ${inter.className} kursu-ranking-box`}
    >
      <div className="w-3/4 h-full  flex flex-col justify-center items-center gap-2">
        <h1 className="text-center text-4xl italic font-extrabold text-red-700 mb-12">
          Bumerang
        </h1>
        <div className="flex flex-col items-center gap-10 border p-10 bg-gray-800">
          <div className="flex justify-center gap-10 p-2">
            <div className="w-2/5 border-r-2 ">
              <h1 className="mb-5 text-2xl">Categories</h1>
              <div className="flex gap-2 flex-wrap w-full">
                <p className="border px-4 py-2 w-32 text-center">Next.js</p>
                <p className="border px-4 py-2 w-32 text-center">React Query</p>
                <p className="border px-4 py-2 w-32 text-center">Websocket</p>
                <p className="border px-4 py-2 w-32 text-center">Serverless</p>
                <p className="border px-4 py-2 w-32 text-center">AWS S3</p>
                <p className="border px-4 py-2 w-32 text-center">DynamoDB</p>
                <p className="border px-4 py-2 w-32 text-center">TypeScript</p>
                <p className="border px-4 py-2 w-32 text-center">Tailwind</p>
                <p className="border px-4 py-2 w-32 text-center">Cognito</p>
                <p className="border px-4 py-2 w-32 text-center">chart-js</p>
                <p className="border px-4 py-2 w-32 text-center">
                  canvas drawing
                </p>
                <p className="border px-4 py-2 w-32 text-center">
                  AWS CodePipeline
                </p>
              </div>
            </div>
            <div className="w-3/5 ">
              <p className="text-xl font-light">
                Bumerang is an innovative Learning Management System that
                seamlessly integrates gamification elements. Designed to enhance
                students' learning experience, it offers a variety of games
                tailored to develop specific skills such as time management and
                quick decision-making. On the platform, students can engage in
                interactive quizzes covering fundamental sciences, earning
                points as they progress. A dynamic leaderboard showcases the top
                achievers, fostering healthy competition and motivation among
                users. Moreover, students have the option to challenge their
                peers, adding a social dimension to the learning process.
                Deployed on the reliable infrastructure of AWS, Bumerang ensures
                a seamless and reliable experience for all users.
              </p>
            </div>
          </div>
          <button className="border px-4 py-2">Go to Project</button>
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
