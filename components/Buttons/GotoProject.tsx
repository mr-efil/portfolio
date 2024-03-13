import React from "react";

type Props = {};

const GotoProject = (props: Props) => {
  return (
    <button className="border px-5 py-3 rounded-xl font-extrabold flex items-center justify-center border-white bg-white text-black hover:bg-transparent hover:text-white border-opacity-30 uppercase inverse-hover">
      Go to Project
    </button>
  );
};

export default GotoProject;
