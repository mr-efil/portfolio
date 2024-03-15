import React from "react";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
type Props = {};

const Freelance = (props: Props) => {
  return (
    <main
      className={`flex h-screen lg:h-3/4 w-3/4 items-center justify-center gap-48 p-24 ${inter.className} kursu-ranking-box`}
    >
      <div className="flex flex-col items-start justify-start">
        <p className="text-white font-bold text-4xl">Hi!</p>
        <p className="text-white font-extralight text-4xl">
          free
        </p>
      </div>
    </main>
  );
};

export default Freelance;
