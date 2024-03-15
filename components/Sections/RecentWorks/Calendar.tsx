import React, { useEffect, useState } from "react";
import Image from "next/image";
import ProjectTitle from "../../Buttons/ProjectTitle";
import Slider from "@/components/Slider";
import Labels from "@/components/Labels";
import { hrefAndTexts } from "@/constants/image_texts";
import MiniSlider from "@/components/MiniSlider";

const Calendar = () => {
  const [activeImage, setActiveImage] = React.useState("/takvim/daily.png");
  const [activeImage2, setActiveImage2] = React.useState(
    "/takvim/eventadd.png"
  );
  const [activeText, setActiveText] = React.useState(
    hrefAndTexts.calendar1[0].text
  );
  const [activeText2, setActiveText2] = React.useState(
    hrefAndTexts.calendar2[0].text
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    ["/takvim/daily.png", "/takvim/dashboard.png", "/takvim/kronometre.png"],
    ["/takvim/eventadd.png", "/takvim/tablet.png", "/takvim/settings.png"],
  ];

  useEffect(() => {
    setActiveImage(images[0][activeIndex]);
    setActiveImage2(images[1][activeIndex]);
    setActiveText(hrefAndTexts.calendar1[activeIndex].text);
    setActiveText2(hrefAndTexts.calendar2[activeIndex].text);
  }, [activeIndex]);

  return (
    <main
      className={`flex h-screen lg:h-3/4 w-3/4 items-center justify-center gap-48 p-24  kursu-ranking-box`}
    >
      <div className="w-3/4 h-full  flex flex-col justify-center items-center gap-2">
        <ProjectTitle title={"Time Management and Habit Tracker App"} />
        <div className="flex flex-col items-center gap-16 p-10 rounded-xl border-white border-opacity-30">
          <div className="w-full ">
            <p>
              Bumerang Calendar is a time management and habit tracker app that
              it helps the student track their time. Students can set goals, add
              notes, and track their progress. Also, the app provides daily,
              weekly, and monthly goals for suggestions. In addition, students
              can also start any habit and track their progress. Calendar is
              connected with the Bumerang Website.
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
        </div>
        <Slider
          activeImage={activeImage}
          activeText={activeText}
          limit={3}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
        <div className="mb-20">
          <h1 className="text-center text-2xl my-10 italic font-bold">
            Sample Interfaces
          </h1>
          <MiniSlider
            images={images[0]}
            activeImage={activeImage}
            setActiveIndex={setActiveIndex}
            section="calendar1"
          />
        </div>
        <Slider
          activeImage={activeImage2}
          activeText={activeText2}
          limit={3}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
        <div>
          <h1 className="text-center text-2xl my-10 italic font-bold">
            Sample Interfaces
          </h1>
          <MiniSlider
            images={images[1]}
            activeImage={activeImage2}
            section="calendar2"
            setActiveIndex={setActiveIndex}
          />
        </div>{" "}
      </div>
    </main>
  );
};

export default Calendar;
