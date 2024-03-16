import React, { useEffect, useState } from "react";
import Image from "next/image";
import ProjectTitle from "../../Buttons/ProjectTitle";
import Labels from "../../Labels";
import Slider from "@/components/Slider";
import { hrefAndTexts } from "@/constants/image_texts";
import MiniSlider from "@/components/MiniSlider";

const Publisher = () => {
  const [activeImage, setActiveImage] = useState("/atolye/designerprofil.png");
  const [activeText, setActiveText] = useState(hrefAndTexts.publisher[0].text);
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    "/atolye/ogretmenprofil.png",
    "/atolye/ogretmenupload.png",
    "/atolye/designerprofil.png",
    "/atolye/designertake.png",
  ];

  useEffect(() => {
    setActiveImage(images[activeIndex]);
    setActiveText(hrefAndTexts.publisher[activeIndex].text);
  }, [activeIndex]);

  return (
    <main
      className={`flex h-screen lg:h-3/4 w-3/4 items-center justify-center gap-48 p-24`}
    >
      <div className="w-3/4 h-full  flex flex-col justify-center items-center gap-2">
        <ProjectTitle title={"Publishing Management App"} />
        <div className="flex flex-col items-center gap-16 p-10 rounded-xl border-white border-opacity-30">
          <div className="w-full ">
            <p className="font-light text-lg">
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
        <Slider
          activeImage={activeImage}
          activeText={activeText}
          setActiveIndex={setActiveIndex}
          limit={images.length}
          activeIndex={activeIndex}
        />
        <div>
          <h1 className="text-center text-2xl my-10 italic font-bold">
            Sample Interfaces
          </h1>
          <MiniSlider
            images={images}
            activeImage={activeImage}
            section="publisher"
            setActiveIndex={setActiveIndex}
          />
        </div>
      </div>
    </main>
  );
};

export default Publisher;
