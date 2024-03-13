import React from "react";
import ImageSlider from "./ImageSlider";

type Props = {};

const Slider = (props: Props) => {
  return (
    <>
      <ImageSlider />
      <div className="w-full ">
        <p className="text-xl font-extralight">
          StartDown is a Course-Based Learning Platform where users are assigned
          courses based on their experience levels. Each course is tailored to
          include exercises and challenges designed to enhance learning.
          Examples of available courses include Learning English, Web
          Development, App Development, and more. In the platform, there is also
          form section where users can communicate with each other and share
          informations with others.
        </p>
      </div>
    </>
  );
};

export default Slider;
