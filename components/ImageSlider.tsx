import { hrefAndTexts } from "@/constants/image_texts";
import { Clicker_Script } from "next/font/google";
import Image from "next/image";
import React from "react";

type Props = {
  type: "startdown" | "bumerang" | "calendar";
  activeImage: string;
};

const ImageSlider = ({ type, activeImage }: Props) => {
  return (
    <div>
      <Image
        src={activeImage}
        alt="kuyu"
        width={1000}
        height={1000}
        className="w-[100%] h-auto object-cover border border-white images"
      />
    </div>
  );
};

export default ImageSlider;
