import React from "react";
import { Inter } from "next/font/google";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });
type Props = {};

const Publisher = (props: Props) => {
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
              <p>
                In this project, we've created a mobile app designed for
                managing a database system. The app caters to three distinct
                user roles: Admins, Editors, and Teachers.
                <br />
                Teachers are responsible for creating questions, which are then
                sent to Editors for refinement, including tasks like adding
                images, arranging fonts, etc. Once the edits are completed, the
                questions are sent back to the Teachers for approval. This
                back-and-forth process between Editors and Teachers continues
                until both parties are satisfied with the question's quality.
                <br />
                Subsequently, the approved questions are forwarded to the Admin
                for final approval. Upon receiving Admin approval, the questions
                are stored in the main database.
              </p>
            </div>
          </div>
          <button className="border px-4 py-2">Go to Project</button>
        </div>
        <div>
          <h1>Single Games</h1>
          <div className="flex justify-center items-center gap-2">
            <Image
              src="/atolye/designerprofil.png"
              alt="kuyu"
              width={200}
              height={200}
            />
            <Image
              src="/atolye/designertake.png"
              alt="kuyu"
              width={200}
              height={200}
            />
            <Image
              src="/atolye/ogretmenprofil.png"
              alt="kuyu"
              width={200}
              height={200}
            />
            <Image
              src="/atolye/ogretmenupload.png"
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

export default Publisher;
