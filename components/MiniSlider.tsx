import { HrefAndTexts, hrefAndTexts } from "@/constants/image_texts";
import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";

type Props = {
  setActiveIndex: Dispatch<SetStateAction<number>>;
  activeImage: string;
  images: string[];
  section: keyof HrefAndTexts;
};

export default function MiniSlider({
  setActiveIndex,
  images,
  activeImage,
}: Props) {
  return (
    <div className="flex justify-center items-center gap-8">
      {images.map((imageSrc, index) => (
        <Image
          key={index}
          src={imageSrc}
          alt="kuyu"
          width={200}
          height={200}
          onClick={() => {
            setActiveIndex(index);
          }}
          className={`w-44 h-auto hover:scale-110 ${
            activeImage === imageSrc ? "scale-110 border-4 border-white" : ""
          }`}
        />
      ))}
      {/* ["/kuyu.png", "/labirent.png", "/yilan.png"] */}
    </div>
  );
}
