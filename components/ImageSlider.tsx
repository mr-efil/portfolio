import { Clicker_Script } from "next/font/google";
import Image from "next/image";
import React from "react";

type Props = {};

const ImageSlider = (props: Props) => {
  return (
    <div>
      <Image
        src="/startdown/dashboard.png"
        alt="kuyu"
        width={1000}
        height={1000}
        className="w-full"
      />
      <h1>Single Games</h1>
      <div className="flex justify-between items-center gap-2">
        <Image
          src="/startdown/dashboard.png"
          alt="kuyu"
          width={200}
          height={200}
        />
        <Image
          src="/startdown/sidebar.png"
          alt="kuyu"
          width={200}
          height={200}
        />
        <Image
          src="/startdown/transition.png"
          alt="kuyu"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
};

export default ImageSlider;
