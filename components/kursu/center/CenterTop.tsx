import React from "react";
import KursuCenter from "./KursuCenter";

type Props = {};

const CenterTop = (props: Props) => {
  return (
    <div
      key={"ders"}
      className="hidden lg:flex flex-row justify-between items-end top-16 2xl:top-24 relative scale-50 lg:scale-50 2xl:scale-100 origin-top "
    >
      <KursuCenter number={0} />
      {/* <div
        className={`kursu-center-box inverse-hover  center-box-top w-[267px] absolute left-1/2 bottom-16 -translate-x-1/2 justify-center flex group ${
          topBoxClicked ? "box-clicked" : ""
        }`}
        onClick={handletopboxclick}
      >
        <div className="flex flex-col justify-center items-center text-center absolute bottom-0 mb-5 ">
          <span className="font-bold text-base text-[#f7f6f1] opacity-60">
            DERS
          </span>
          <div className="h-1 w-20 bg-[#f7f6f160] rounded-b mb-3 mt-1  relative group-hover:w-24 duration-300" />
          <span className="font-bold text-3xl text-[#f7f6f1]">
            {subject}
          </span>
        </div>
        <svg
          viewBox="0 0 267 113"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.6"
            d="M266.5 56.5V93C266.5 103.77 257.77 112.5 247 112.5H20C9.23044 112.5 0.5 103.77 0.5 93V56.5V53.3681C0.5 46.6935 3.91386 40.4826 9.54889 36.9053L62.1111 3.53719C65.2359 1.55343 68.8608 0.5 72.5622 0.5H100.125H133.5H194.438C198.139 0.5 201.764 1.55343 204.889 3.53719L257.451 36.9053C263.086 40.4826 266.5 46.6935 266.5 53.3681V56.5Z"
            stroke="#f7f6f1"
          />
        </svg>
      </div>
      <div
        key={"top-popup"}
        className={`absolute z-[99] w-[267px] top-28 left-0 right-0 mx-auto ${
          topBoxClicked ? "flex" : "hidden"
        } justify-center `}
      >
        <svg
          viewBox="0 0 267 362"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="-scale-100"
        >
          <path
            d="M267 342C267 353.046 258.046 362 247 362L20.0001 362C8.95437 362 6.1839e-05 353.046 6.28307e-05 342L7.72847e-05 181L8.54095e-05 90.5L8.85198e-05 55.8543C8.91152e-05 49.2221 3.28791 43.0212 8.77764 39.2997L61.6677 3.44533C64.9797 1.20015 68.8889 -1.68654e-05 72.8902 -1.65247e-05L133.5 -1.1365e-05L194.11 -6.20519e-06C198.111 -5.86456e-06 202.02 1.20015 205.332 3.44534L258.222 39.2997C263.712 43.0212 267 49.2221 267 55.8543L267 90.5L267 181L267 342Z"
            fill="#0d0d0d"
          />
          <path
            d="M247 361.5L20.0001 361.5C9.23053 361.5 0.500062 352.77 0.500063 342L0.500077 181L0.500085 90.5L0.500089 55.8543C0.500089 49.3879 3.70572 43.342 9.0582 39.7135L61.9483 3.8592C65.1774 1.67015 68.989 0.499983 72.8902 0.499983L133.5 0.499989L194.11 0.499994C198.011 0.499994 201.823 1.67016 205.052 3.85922L257.942 39.7135C263.294 43.342 266.5 49.3879 266.5 55.8543L266.5 90.5L266.5 181L266.5 342C266.5 352.77 257.77 361.5 247 361.5Z"
            stroke="#f7f6f1"
            strokeOpacity="0.6"
          />
        </svg>
        <div className="absolute top-3 w-[244px] h-[304px] border border-[#f7f6f130] rounded-xl flex flex-col items-center justify-between text-[#f7f6f1] py-2">
          {subjects.map((subject, index) => (
            <span
              key={index}
              className="text-base font-light opacity-60 hover:font-bold hover:opacity-100 inverse-hover kursu-list-tag w-full text-center"
              onClick={() => handleSubjectClick(subject)}
            >
              {subject}
            </span>
          ))}
        </div>
      </div> */}
      <div className="w-10 h-1 bg-[#f7f6f160] rounded-b bottom-12 relative mx-10" />
      <KursuCenter number={1} />
    </div>
  );
};

export default CenterTop;
