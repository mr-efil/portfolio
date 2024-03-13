import React, { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import MainSection from "@/components/Sections/MainSection";
import StartDown from "@/components/Sections/RecentWorks/StartDown";
import Bumerang from "@/components/Sections/RecentWorks/Bumerang";
import Corners from "@/components/kursu/Corners";
import Companies from "@/components/Sections/Experience/Companies";
import Freelance from "@/components/Sections/Experience/Freelance";
import Engineering from "@/components/Sections/Experience/Engineering";
import CenterTop from "@/components/kursu/center/CenterTop";
import CenterBottom from "@/components/kursu/center/CenterBottom";
import Contact from "@/components/Sections/Social/Contact";
import Fitness from "@/components/Sections/Other/Fitness";
import English from "@/components/Sections/Other/English";
import Publisher from "@/components/Sections/Other/Publisher";
import Skills from "@/components/Sections/Social/Skills";
import Calendar from "@/components/Sections/RecentWorks/Calendar";

const inter = Inter({ subsets: ["latin"] });
type Props = {};

const Kursu = (props: Props) => {
  const [clickedSection, setClickedSection] = useState("main");
  const [componentToRender, setComponentToRender] = useState(null);
  useEffect(() => {
    function getComponent() {
      switch (clickedSection) {
        case "main":
          return <MainSection />;
        case "startdown":
          return <StartDown />;
        case "bumerang":
          return <Bumerang />;
        case "companies":
          return <Companies />;
        case "freelance":
          return <Freelance />;
        case "engineering":
          return <Engineering />;
        case "contact":
          return <Contact />;
        case "Fitness App":
          return <Fitness />;
        case "English Learning App":
          return <English />;
        case "Publishing Management App":
          return <Publisher />;
        case "skills":
          return <Skills />;
        case "calendar":
          return <Calendar />;
        default:
          return null;
      }
    }

    const component = getComponent();
    setComponentToRender(component);
  }, [clickedSection]);

  return (
    <div className="kursu-outer-lines min-h-screen flex flex-col w-full relative justify-between items-center bg-[#0d0d0d]">
      <Corners
        clickedSection={clickedSection}
        setClickedSection={setClickedSection}
      />
      <CenterTop />
      {/* <div className="absolute z-50 w-[85%] h-[490px] flex flex-col items-center justify-start top-[240px] kursu-ranking-box  text-[#f7f6f1]">
          <div className="relative flex flex-row w-full h-9 font-bold text-base border-b border-[#f7f6f160] kursu-circle">
            <span className="absolute left-[2%] ">SIRA</span>
            <span className="absolute left-[17%]">PUAN</span>
            <span className="absolute left-[35%]">İSİM</span>
            <span className="absolute left-[70%]">OKUL</span>
          </div>
          {paginatedItems.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-row w-full h-16 font-light text-base border-b border-[#f7f6f160] items-center hover:font-bold hover:border-b-0 kursu-underline"
              style={{ fontWeight: index === items.length - 1 ? 700 : "" }}
            >
              <div className="kursu-circle absolute w-full h-0 bottom-0 right-0" />
              <span className="absolute left-[2%] inverse-hover ">
                {item.sira}
              </span>
              <span className="absolute left-[17%] inverse-hover">
                {item.puan}
              </span>
              <span className="absolute left-[35%] inverse-hover">
                {item.isim}
              </span>
              <span className="absolute left-[70%] inverse-hover">
                {item.okul}
              </span>
            </div>
          ))}
          <div className="absolute flex flex-row w-full h-16 bottom-0 font-bold text-base border-b border-[#f7f6f160] items-center hover:font-bold hover:border-b-0 kursu-underline">
            <div className="kursu-circle absolute w-full h-0 bottom-0 right-0" />
            <span className="absolute left-[2%] inverse-hover ">
              {items[0].sira}
            </span>
            <span className="absolute left-[17%] inverse-hover">
              {items[0].puan}
            </span>
            <span className="absolute left-[35%] inverse-hover">
              {items[0].isim}
            </span>
            <span className="absolute left-[70%] inverse-hover">
              {items[0].okul}
            </span>
          </div>
          <KursuToggleButton
            handleNextPage={handleNextPage}
            handlePrevPage={handlePrevPage}
          />
        </div> */}
      {componentToRender} <CenterBottom />
    </div>
  );
};

export default Kursu;
