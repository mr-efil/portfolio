import { hrefAndTexts } from "@/constants/image_texts";
import { Clicker_Script } from "next/font/google";
import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";

type Props = {
  type: "startdown" | "bumerang" | "calendar";
  activeImage: string;
  setActiveIndex: Dispatch<SetStateAction<number>>;
  limit: number;
  activeIndex: number;
};

const ImageSlider = ({
  type,
  activeImage,
  setActiveIndex,
  activeIndex,
  limit,
}: Props) => {
  return (
    <div>
      <Image
        src={activeImage}
        alt="kuyu"
        width={1000}
        height={1000}
        className="w-[100%] h-auto object-cover border border-white images"
        onClick={() =>
          setActiveIndex(activeIndex < limit - 1 ? activeIndex + 1 : 0)
        }
      />
    </div>
  );
};

export default ImageSlider;
