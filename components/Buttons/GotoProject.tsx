import gsap from "gsap";
import React, { useState } from "react";

type Props = {
  href: string;
  title: string;
};

const GotoProject = ({ href, title }: Props) => {
  const [buttonResize, setButtonResize] = useState(false);
  function onClick() {
    const innerCursor = document.getElementById("inner-cursor");
    const outerCursor = document.getElementById("outer-cursor");
    const goTo = document.getElementById("go-to-project");
    gsap.to(innerCursor, { width: 4000, height: 4000 }); // refresh problem solver
    innerCursor?.parentElement?.classList.remove("mix-blend-difference");
    goTo?.classList.remove("inverse-hover");
    gsap.to(outerCursor, { width: 44, height: 44 }); // refresh problem solver

    setTimeout(() => {
      setButtonResize(true);
    }, 100);

    const routeText = document.getElementById("routeText");
    const routeInnerHTML = document.getElementById("routeInnerHTML");
    routeText?.classList.remove("hidden");
    routeText?.classList.add("flex");
    if (routeInnerHTML) {
      routeInnerHTML.innerHTML = "loading " + title;
    }

    setTimeout(() => {
      window.open(href, "_blank");
      setButtonResize(false);
      routeText?.classList.remove("flex");
      routeText?.classList.add("hidden");
      goTo?.classList.add("inverse-hover");
      innerCursor?.parentElement?.classList.add("mix-blend-difference");
      gsap.to(innerCursor, { width: 4, height: 4 });
      gsap.to(outerCursor, { width: 44, height: 44 });
    }, 1000);
  }

  return (
    <a
      // href={href}
      target="_blank"
      className={
        buttonResize
          ? "fixed top-0 left-0 w-screen h-screen z-[900] bg-white"
          : "border px-5 py-3 rounded-xl font-extrabold flex items-center justify-center border-white bg-white text-black hover:bg-transparent hover:text-white border-opacity-30 uppercase inverse-hover cursor-none go-to-project"
      }
      onClick={onClick}
    >
      Go to Project
    </a>
  );
};

export default GotoProject;
