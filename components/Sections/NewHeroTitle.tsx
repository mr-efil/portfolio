// NewHeroTitle.tsx

import React, { useEffect } from "react";
import { useRouter } from "next/router";

const NewHeroTitle: React.FC = () => {
  useEffect(() => {
    const words: HTMLCollectionOf<Element> =
      document.getElementsByClassName("original");
    const changedwords: HTMLCollectionOf<Element> =
      document.getElementsByClassName("word");
    const wordArray: HTMLElement[][] = [];
    let currentWord: number = 0;

    (words[currentWord] as HTMLElement).style.opacity = "1";
    for (let i = 0; i < words.length; i++) {
      splitLetters(words[i] as HTMLElement, changedwords[i] as HTMLElement);
    }

    function changeWord() {
      console.log("wordArray", wordArray);
      const cw: HTMLElement[] = wordArray[currentWord];
      const nw: HTMLElement[] =
        currentWord === words.length - 1
          ? wordArray[0]
          : wordArray[currentWord + 1];
      for (let i = 0; i < cw.length; i++) {
        animateLetterOut(cw, i);
      }

      for (let i = 0; i < nw.length; i++) {
        nw[i].className = "letter behind";
        (nw[0].parentElement as HTMLElement).style.opacity = "1";
        animateLetterIn(nw, i);
      }

      currentWord = currentWord === wordArray.length - 1 ? 0 : currentWord + 1;
    }

    function animateLetterOut(cw: HTMLElement[], i: number) {
      setTimeout(function () {
        cw[i].className =
          cw[i].innerHTML === " " ? "letter out w-3" : "letter out";
      }, i * 80);
    }

    function animateLetterIn(nw: HTMLElement[], i: number) {
      setTimeout(function () {
        nw[i].className =
          nw[i].innerHTML === " " ? "letter in w-3" : "letter in";
      }, 340 + i * 80);
    }

    function splitLetters(word: HTMLElement, changedwords: HTMLElement) {
      const content: string = word.innerHTML;
      changedwords.innerHTML = "";
      const letters: HTMLElement[] = [];
      for (let i = 0; i < content.length; i++) {
        const letter: HTMLElement = document.createElement("span");
        letter.className = content.charAt(i) === " " ? "letter w-3" : "letter";
        letter.innerHTML = content.charAt(i);
        changedwords.appendChild(letter);
        letters.push(letter);
      }

      wordArray.push(letters);
    }
    changeWord();
    const intervalId: NodeJS.Timeout = setInterval(changeWord, 3000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Run this effect only once when the component mounts

  const router = useRouter();

  const handleClick = () => {
    router.push("/auth/login");
  };

  return (
    <div className="relative lg:top-[30%] z-50 flex flex-col justify-center items-center lg:items-start">
      <h2
        className="text-2xl lg:text-5xl font-extrabold leading-relaxed w-full lg:w-[750px] "
        style={{ fontFamily: "Montserrat ; sans-serif" }}
      >
        <span className="text-2xl lg:text-3xl font-extrabold text-[#787878] ">
          {/* {"ALPEREN EFİLOĞLU"} */}
          {"İBRAHİM ERGEN"}
        </span>
        <div className="relative h-14 lg:h-20 w-fit mt-4">
          <div className="NewHeroTitle text-4xl lg:text-6xl font-extrabold text-white flex flex-col absolute w-fit items-start">
            <p className="absolute top-0 left-0">
              <span className="word wisteria flex flex-row inverse-hover">
                {/* FRONT-END DEVELOPER */}
                FULL-STACK DEVELOPER
              </span>
            </p>
            <p className="absolute top-0 left-0">
              <span className="word belize flex flex-row inverse-hover">
                MECHANICAL ENGINEER
              </span>
            </p>

            <span className="original hidden">
              {/* FRONT-END DEVELOPER */}
              FULL-STACK DEVELOPER
            </span>
            <span className="original hidden">MECHANICAL ENGINEER</span>
          </div>
        </div>
      </h2>
      <h3
        className="text-base lg:text-2xl font-extralight text-[#787878] w-full lg:w-[690px] mt-3 mb-24 lg:mb-10"
        style={{ fontFamily: "Montserrat ; sans-serif" }}
      >
        {"Let's solve your technical problems together."}
      </h3>

      <a
        href={"/contact"}
        className={
          "border px-5 py-3 rounded-xl font-extrabold flex items-center justify-center border-white bg-white text-black hover:bg-transparent hover:text-white border-opacity-30 uppercase inverse-hover cursor-none go-to-project"
        }
      >
        CONTACT ME
      </a>
    </div>
  );
};

export default NewHeroTitle;
