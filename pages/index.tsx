import React, { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import MainSection from "@/components/Sections/MainSection";
import StartDown from "@/components/Sections/RecentWorks/StartDown";
import Bumerang from "@/components/Sections/RecentWorks/Bumerang";
import Corners from "@/components/kursu/corners/Corners";
import Companies from "@/components/Sections/Experience/Experience";
import Freelance from "@/components/Sections/Experience/Freelance";
import Engineering from "@/components/Sections/Experience/Engineering";
import CenterTop from "@/components/kursu/center/CenterTop";
import CenterBottom from "@/components/kursu/center/CenterBottom";
import Contact from "@/components/Sections/Social/Contact";
import Fitness from "@/components/Sections/OtherWorks/Fitness";
import English from "@/components/Sections/OtherWorks/English";
import Publisher from "@/components/Sections/OtherWorks/Publisher";
import Skills from "@/components/Sections/Social/Skills";
import Calendar from "@/components/Sections/RecentWorks/Calendar";

const inter = Inter({ subsets: ["latin"] });
type Props = {};

const index = (props: Props) => {
  return (
    <div className="kursu-outer-lines min-h-screen flex flex-col w-full relative justify-between items-center bg-[#0d0d0d]">
      <Corners />
      <CenterTop />
      <MainSection />
      <CenterBottom />
    </div>
  );
};

export default index;
