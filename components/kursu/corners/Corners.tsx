import React, { Dispatch, SetStateAction } from "react";
import KursuCorner from "./corner/KursuCorner";

type Props = {
  clickedSection: string;
  setClickedSection: Dispatch<SetStateAction<string>>;
};
 
const Corners = ({ clickedSection, setClickedSection }: Props) => {
  return (
    <>
      <div className="scale-[60%] lg:scale-75 2xl:scale-100 origin-top-left left-8 top-0 fixed z-50">
        <KursuCorner
          number={0}
          clickedSection={clickedSection}
          setClickedSection={setClickedSection}
        />
      </div>
      <div className="w-1 h-10 bg-[#f7f6f160] rounded-l left-[3.2rem] lg:left-[4.2rem] 2xl:left-20 fixed top-0 bottom-0 my-auto" />
      <div className="scale-[60%] lg:scale-75 2xl:scale-100 origin-bottom-left  left-8 bottom-0 fixed z-50">
        <KursuCorner
          number={1}
          clickedSection={clickedSection}
          setClickedSection={setClickedSection}
        />
      </div>
      <div className="scale-[60%] lg:scale-75 2xl:scale-100 origin-top-right right-8 top-0 fixed z-50">
        <KursuCorner
          number={2}
          clickedSection={clickedSection}
          setClickedSection={setClickedSection}
        />
      </div>
      <div className="w-1 h-10 bg-[#f7f6f160] rounded-r right-[3.2rem] lg:right-[4.2rem] 2xl:right-20 fixed top-0 bottom-0 my-auto" />
      <div className="scale-[60%] lg:scale-75 2xl:scale-100 origin-bottom-right  right-8 bottom-0 fixed z-50">
        <KursuCorner
          number={3}
          clickedSection={clickedSection}
          setClickedSection={setClickedSection}
        />
      </div>
    </>
  );
};

export default Corners;
