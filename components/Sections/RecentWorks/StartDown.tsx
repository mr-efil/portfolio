import React from "react";
import { Inter } from "next/font/google";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });
type Props = {};

const StartDown = (props: Props) => {
  return (
    <main
      className={`flex h-screen lg:h-3/4 w-3/4 items-center justify-center gap-48 p-24 ${inter.className} kursu-ranking-box`}
    >
      <div className="w-3/4 h-full  flex flex-col justify-center items-center gap-2">
        <h1 className="text-center text-4xl italic font-extrabold text-red-700 mb-12">
          StartDown Social
        </h1>
        <div className="flex flex-col items-center gap-10 border p-10 bg-gray-800">
          <div className="flex justify-center gap-10 p-2">
            <div className="w-2/5 border-r-2 ">
              <h1 className="mb-5 text-2xl">Categories</h1>
              <div className="flex gap-2 flex-wrap w-full">
                <p className="border px-4 py-2 w-32 text-center">Next.js</p>
                <p className="border px-4 py-2 w-32 text-center">Django</p>
                <p className="border px-4 py-2 w-32 text-center">
                  Django Rest Framework
                </p>
                <p className="border px-4 py-2 w-32 text-center">Postman</p>
                <p className="border px-4 py-2 w-32 text-center">PostgreSQL</p>
                <p className="border px-4 py-2 w-32 text-center">Figma</p>
                <p className="border px-4 py-2 w-32 text-center">
                  Redux Toolkit
                </p>
                <p className="border px-4 py-2 w-32 text-center">Redux Thunk</p>
                <p className="border px-4 py-2 w-32 text-center">Heroku</p>
                <p className="border px-4 py-2 w-32 text-center">
                  Role Based Auth
                </p>
              </div>
            </div>
            <div className="w-3/5 ">
              <p className="text-xl font-light">
                StartDown is a Course-Based Learning Platform where users are
                assigned courses based on their experience levels. Each course
                is tailored to include exercises and challenges designed to
                enhance learning. Examples of available courses include Learning
                English, Web Development, App Development, and more. In the
                platform, there is also form section where users can communicate
                with each other and share informations with others.
              </p>
            </div>
          </div>
          <button className="border px-4 py-2">Go to Project</button>
        </div>
        <div>
          <h1>Single Games</h1>
          <div className="flex justify-center items-center gap-2">
            <Image
              src="/startdown/dashboard.png"
              alt="kuyu"
              width={200}
              height={200}
            />
            <Image
              src="/startdown/sidebar.png"
              alt="kuyu"
              width={200}
              height={200}
            />
            <Image
              src="/startdown/transition.png"
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
              src="/startdown/calendar.png"
              alt="kuyu"
              width={200}
              height={200}
            />
            <Image
              src="/startdown/course.png"
              alt="kuyu"
              width={200}
              height={200}
            />
            <Image
              src="/startdown/courseana.png"
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

export default StartDown;
