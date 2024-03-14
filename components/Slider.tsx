import React from "react";
import ImageSlider from "./ImageSlider";

type Props = {
  activeText: string;
  activeImage: string;
};

const Slider = ({ activeImage, activeText }: Props) => {
  return (
    <>
      <ImageSlider type="startdown" activeImage={activeImage} />
      <div className="w-full mt-10">
        <div dangerouslySetInnerHTML={{ __html: activeText }} />
      </div>
    </>
  );
};

export default Slider;
