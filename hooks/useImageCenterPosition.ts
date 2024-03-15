import { useEffect, useState } from "react";

const useImageCenterPosition = (imgRef: React.RefObject<HTMLImageElement>) => {
  const [centerPosition, setCenterPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const calculatePosition = () => {
      if (imgRef.current) {
        const { left, top, width, height } =
          imgRef.current.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        setCenterPosition({ x: centerX, y: centerY });
      }
    };

    calculatePosition();

    window.addEventListener("resize", calculatePosition);

    return () => {
      window.removeEventListener("resize", calculatePosition);
    };
  }, [imgRef]);

  return centerPosition;
};

export default useImageCenterPosition;
