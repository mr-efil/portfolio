import React, { useState } from "react";
import Image from "next/image";
import ProjectTitle from "../../Buttons/ProjectTitle";
import Labels from "../../Labels";
import Slider from "@/components/Slider";
import { hrefAndTexts } from "@/constants/image_texts";

const Publisher = () => {
  const [activeImage, setActiveImage] = useState("/atolye/designerprofil.png");
  const [activeText, setActiveText] = useState(hrefAndTexts.publisher[0].text);

  return (
    <main
      className={`flex h-screen lg:h-3/4 w-3/4 items-center justify-center gap-48 p-24`}
    >
      <div className="w-3/4 h-full  flex flex-col justify-center items-center gap-2">
        <ProjectTitle title={"Publishing Management App"} />
        <div className="flex flex-col items-center gap-16 p-10 rounded-xl border-white border-opacity-30">
          <div className="w-full ">
            <p>
              In this project, we've created a mobile app designed for managing
              a database system. The app caters to three distinct user roles:
              Admins, Editors, and Teachers.
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
          <Labels
            labels={[
              "Three.js",
              "React-fiber",
              "React-Context",
              "Vite.js",
              "Gaming",
            ]}
          />
        </div>
        <Slider activeImage={activeImage} activeText={activeText} />
        <div>
          <h1 className="text-center text-2xl my-10 italic font-bold">
            Sample Interfaces
          </h1>
          <div className="flex justify-center items-center gap-8">
            {[
              "/atolye/ogretmenprofil.png",
              "/atolye/ogretmenupload.png",
              "/atolye/designerprofil.png",
              "/atolye/designertake.png",
            ].map((imageSrc, index) => (
              <Image
                key={index}
                src={imageSrc}
                alt="kuyu"
                width={200}
                height={200}
                onClick={() => {
                  setActiveImage(imageSrc);
                  setActiveText(hrefAndTexts.publisher[index].text);
                }}
                className={`w-64 h-32 hover:scale-110 ${
                  activeImage === imageSrc
                    ? "scale-110 border-4 border-gray-500"
                    : ""
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Publisher;
