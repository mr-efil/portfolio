import React, { useEffect } from "react";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
type Props = {};

const Fitness = (props: Props) => {
  return (
    <main
      className={`flex h-screen lg:h-3/4 w-3/4 items-center justify-center gap-48 p-24 ${inter.className}`}
    >
      <div className="w-3/4 h-full  flex flex-col justify-center items-center gap-2">
        <h1 className="text-center text-4xl italic font-extrabold text-red-700 mb-12">
          Fitness App
        </h1>
        <div className="flex flex-col items-center gap-10 border p-10 bg-gray-800">
          <div className="flex justify-center gap-10 p-2">
            <div className="w-2/5 border-r-2 ">
              <h1 className="mb-5 text-2xl">Categories</h1>
              <div className="flex gap-2 flex-wrap w-full">
                <p className="border px-4 py-2">Three.js</p>
                <p className="border px-4 py-2">React-fiber</p>
                <p className="border px-4 py-2">React-Context</p>
                <p className="border px-4 py-2">Vite.js</p>
                <p className="border px-4 py-2">Gaming</p>
              </div>
            </div>
            <div className="w-3/5 ">
              <p className="text-xl font-light">
                In this project, we've developed a website featuring a 3D model
                of the human body to illustrate muscle groups and corresponding
                exercises for targeted development. Additionally, tailored
                dietary plans are provided for each specific body region. On the
                website, there's also a game waiting for you. I hope you enjoy
                playing it!
              </p>
            </div>
          </div>
          <button className="border px-4 py-2">Go to Project</button>
        </div>
      </div>
    </main>
  );
};

export default Fitness;
