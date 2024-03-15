import React from "react";

type Props = {
  href: string;
};

const GotoProject = ({ href }: Props) => {
  return (
    <a
      href={href}
      target="_blank"
      className="border px-5 py-3 rounded-xl font-extrabold flex items-center justify-center border-white bg-white text-black hover:bg-transparent hover:text-white border-opacity-30 uppercase inverse-hover cursor-none"
    >
      Go to Project
    </a>
  );
};

export default GotoProject;
