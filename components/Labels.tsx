import React from "react";
import Label from "./Buttons/Label";

type Props = { labels: string[] };

const Labels = ({ labels }: Props) => {
  return (
    <div className="w-full ">
      {/* <h1 className="mb-5 text-2xl font-extrabold uppercase ">
      Categories
    </h1> */}
      <div className="gap-2 w-full flex flex-wrap items-center justify-center">
        {labels.map((label, index) => (
          <Label key={index} label={label} />
        ))}
      </div>
    </div>
  );
};

export default Labels;
