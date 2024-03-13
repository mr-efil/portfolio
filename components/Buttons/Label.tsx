import React from "react";

type Props = { label: string };

const Label = ({ label }: Props) => {
  return (
    <p className="border px-6 py-2 h-11 text-center rounded-xl font-light flex items-center justify-center -skew-x-6 border-white border-opacity-30">
      {label}
    </p>
  );
};

export default Label;
