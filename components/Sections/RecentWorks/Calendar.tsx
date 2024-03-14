import React from "react";
import Image from "next/image";
import ProjectTitle from "../../Buttons/ProjectTitle";
import Slider from "@/components/Slider";
import Labels from "@/components/Labels";
import { hrefAndTexts } from "@/constants/image_texts";

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
        <Slider activeImage={activeImage} activeText={activeText} />

        <div className="mb-20">
          <h1 className="text-center text-2xl my-10 italic font-bold">
            Sample Interfaces
          </h1>
          <div className="flex justify-center items-center gap-2">
            {[
              "/takvim/daily.png",
              "/takvim/dashboard.png",
              "/takvim/kronometre.png",
            ].map((imageSrc, index) => (
              <Image
                key={index}
                src={imageSrc}
                alt="kuyu"
                width={200}
                height={200}
                onClick={() => {
                  setActiveImage(imageSrc);
                  setActiveText(hrefAndTexts.calendar1[index].text);
                }}
              />
            ))}
          </div>
        </div>
        <Slider activeImage={activeImage2} activeText={activeText2} />
        <div >
          <h1 className="text-center text-2xl my-10 italic font-bold">
            Sample Interfaces
          </h1>
          <div className="flex justify-center items-center gap-2">
            {[
              "/takvim/eventadd.png",
              "/takvim/tablet.png",
              "/takvim/settings.png",
            ].map((imageSrc, index) => (
              <Image
                key={index}
                src={imageSrc}
                alt="kuyu"
                width={200}
                height={200}
                onClick={() => {
                  setActiveImage2(imageSrc);
                  setActiveText2(hrefAndTexts.calendar2[index].text);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Calendar;
