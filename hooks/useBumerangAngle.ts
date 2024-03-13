import React from "react";

const useBumerangAngle = ({
  bumerangPosition,
  mousePosition,
}: {
  bumerangPosition: { x: number | null; y: number | null };
  mousePosition: { x: number | null; y: number | null };
}) => {
  const calculateAngle = () => {
    if (
      mousePosition.x &&
      mousePosition.y &&
      bumerangPosition.x &&
      bumerangPosition.y
    ) {
      const deltaX = mousePosition.x - bumerangPosition.x;
      const deltaY = mousePosition.y - bumerangPosition.y;
      const angleInRadians = Math.atan2(deltaY, deltaX);
      // Convert radians to degrees
      const angleInDegrees = ((angleInRadians * 180) / Math.PI).toFixed(2);
      return angleInDegrees;
    } else {
      return null;
    }
  };

  const angle = calculateAngle();

  return angle;
};

export default useBumerangAngle;
