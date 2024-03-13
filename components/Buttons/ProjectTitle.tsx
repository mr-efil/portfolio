import React from "react";

type Props = { title: string };

const ProjectTitle = ({ title }: Props) => {
  return (
    <h1 className="text-center text-4xl font-extrabold text-white mt-12 uppercase">
      {title}
    </h1>
  );
};

export default ProjectTitle;
