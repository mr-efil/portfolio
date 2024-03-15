import React, { Dispatch, SetStateAction } from "react";
import ImageSlider from "./ImageSlider";

type Props = {
  activeText: string;
  activeImage: string;
  setActiveIndex: Dispatch<SetStateAction<number>>;
  limit: number;
  activeIndex: number;
};

const Slider = ({
  activeImage,
  activeText,
  setActiveIndex,
  limit,
  activeIndex,
}: Props) => {
  return (
    <>
      <ImageSlider
        type="startdown"
        activeImage={activeImage}
        setActiveIndex={setActiveIndex}
        limit={limit}
        activeIndex={activeIndex}
      />
      <div className="w-full mt-10">
        <div dangerouslySetInnerHTML={{ __html: activeText }} />
      </div>
    </>
  );
};

export default Slider;
