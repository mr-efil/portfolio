import React, { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import StartDown from "@/components/Sections/RecentWorks/StartDown";
import Corners from "@/components/kursu/corners/Corners";
import CenterTop from "@/components/kursu/center/CenterTop";
import CenterBottom from "@/components/kursu/center/CenterBottom";
import Engineering from "@/components/Sections/Experience/Engineering";
import Bumerang from "@/components/Sections/RecentWorks/Bumerang";

const inter = Inter({ subsets: ["latin"] });
type Props = {};

const index = (props: Props) => {
  return (
    <div className="kursu-outer-lines min-h-screen flex flex-col w-full relative justify-between items-center bg-[#0d0d0d]">
      <Corners />
      <CenterTop />
      <Bumerang /> <CenterBottom />
    </div>
  );
};

export default index;
