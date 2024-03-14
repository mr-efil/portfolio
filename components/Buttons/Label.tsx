import React from "react";

type Props = { label: string; ind: number };

const Label = ({ label, ind }: Props) => {
  return (
    <p
      className={`border px-6 py-2 h-11 text-center rounded-xl font-light flex items-center justify-center -skew-x-6 ${
        ind < 5
          ? "border-red-500"
          : ind >= 5 && ind < 10
          ? "border-yellow-500"
          : "border-green-500"
      } border-opacity-30`}
    >
      {label}
    </p>
  );
};

export default Label;
