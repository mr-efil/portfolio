import useBumerangAngle from "@/hooks/useBumerangAngle";
import useImageCenterPosition from "@/hooks/useImageCenterPosition";
import useMousePosition from "@/hooks/useMousePosition";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

type Props = { position: string; number: number };

const Bumerang = ({ position, number }: Props) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const mousePosition = useMousePosition();
  const bumerangPosition = useImageCenterPosition(imgRef);
  const bumerangAngle = useBumerangAngle({ mousePosition, bumerangPosition });

  return (
    <Image
      ref={imgRef}
      src="/bumerang-white-right-empty.png"
      alt="bumerang"
      width={1000}
      height={1000}
      className={`w-5 absolute top-0 opacity-60 ${position}`}
      style={{
        rotate:
          number < 3 && number > 0 && bumerangAngle
            ? `${-bumerangAngle + 360}deg`
            : `${bumerangAngle}deg`,
      }}
    />
  );
};

export default Bumerang;
