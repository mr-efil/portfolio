import React from "react";
import StartDown from "@/components/Sections/RecentWorks/StartDown";
import Corners from "@/components/kursu/corners/Corners";
import CenterTop from "@/components/kursu/center/CenterTop";
import CenterBottom from "@/components/kursu/center/CenterBottom";


const index = () => {
  return (
    <div className="kursu-outer-lines min-h-screen flex flex-col w-full relative justify-between items-center bg-[#0d0d0d]">
      <Corners />
      <CenterTop />
      <StartDown /> <CenterBottom />
    </div>
  );
};

export default index;
