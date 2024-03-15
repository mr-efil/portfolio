import gsap from "gsap";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";

type Props = {};

const CustomCursor2 = (props: Props) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [isOnImage, setIsOnImage] = useState(false);
  const [isOnSmallImage, setIsOnSmallImage] = useState(false);
  const moveCursor = (e: MouseEvent): void => {
    gsap.to(cursorRef.current, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.1,
    });
    gsap.to(followerRef.current, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.9,
    });
  };

  const router = useRouter();

  useEffect(() => {
    const elements = document.getElementsByClassName("inverse-hover");
    const innerCursor = document.getElementById("inner-cursor");
    const outerCursor = document.getElementById("outer-cursor");
    const images = document.getElementsByClassName("images");
    const smallImages = document.getElementsByClassName("image");

    gsap.set(cursorRef.current, {
      xPercent: 100,
      yPercent: 100,
    });
    gsap.set(followerRef.current, {
      xPercent: -20,
      yPercent: -20,
    });

    gsap.to(innerCursor, { width: 4, height: 4 }); // refresh problem solver
    gsap.to(outerCursor, { width: 44, height: 44 }); // refresh problem solver

    const handleMouseOver = (e: MouseEvent) => {
      gsap.to(innerCursor, { width: 60, height: 60 });
      gsap.to(outerCursor, { width: 10, height: 10 });
    };

    // Function to handle hover-out event
    const handleMouseOut = () => {
      gsap.to(innerCursor, { width: 4, height: 4 });
      gsap.to(outerCursor, { width: 44, height: 44 });
    };

    const handleMouseOverImage = (e: MouseEvent) => {
      setIsOnImage(true);
      gsap.to(innerCursor, {
        width: 100,
        height: 100,
      });
    };

    // Function to handle hover-out event
    const handleMouseOutImage = () => {
      setIsOnImage(false);
      gsap.to(innerCursor, { width: 4, height: 4 });
    };

    const handleMouseOverImageSmall = (e: MouseEvent) => {
      setIsOnSmallImage(true);
      gsap.to(innerCursor, {
        width: 100,
        height: 100,
      });
    };

    // Function to handle hover-out event
    const handleMouseOutImageSmall = () => {
      setIsOnSmallImage(false);
      gsap.to(innerCursor, { width: 4, height: 4 });
    };

    for (const element of elements) {
      element.addEventListener("mouseover", handleMouseOver as EventListener);
      element.addEventListener("mouseout", handleMouseOut as EventListener);
    }

    for (const image of images) {
      image.addEventListener(
        "mouseover",
        handleMouseOverImage as EventListener
      );
      image.addEventListener(
        "mouseout",
        handleMouseOutImageSmall as EventListener
      );
    }

    for (const image of smallImages) {
      image.addEventListener(
        "mouseover",
        handleMouseOverImageSmall as EventListener
      );
      image.addEventListener(
        "mouseout",
        handleMouseOutImageSmall as EventListener
      );
    }

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      for (const element of elements) {
        element.removeEventListener(
          "mouseover",
          handleMouseOver as EventListener
        );
        element.removeEventListener(
          "mouseout",
          handleMouseOut as EventListener
        );
      }
      for (const image of images) {
        image.removeEventListener(
          "mouseover",
          handleMouseOverImage as EventListener
        );
        image.removeEventListener(
          "mouseout",
          handleMouseOutImage as EventListener
        );
      }

      for (const image of smallImages) {
        image.removeEventListener(
          "mouseover",
          handleMouseOverImageSmall as EventListener
        );
        image.removeEventListener(
          "mouseout",
          handleMouseOutImageSmall as EventListener
        );
      }
    };
  }, [router]);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed z-[999] pointer-events-none  mix-blend-difference "
      >
        <div
          id="inner-cursor"
          className="rounded-full fixed z-[999] bg-white pointer-events-none -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
          style={{
            width: 4,
            height: 4,
          }}
        >
          {isOnImage ? (
            <Image
              src={"/bumerang-white-right-empty.png"}
              alt="arrow"
              width={300}
              height={300}
              className="w-6 h-auto object-cover invert"
            />
          ) : (
            isOnSmallImage && (
              <Image
                src={"/magnifying-glass.png"}
                alt="glass"
                width={300}
                height={300}
                className="w-6 h-auto object-cover"
              />
            )
          )}
        </div>
      </div>
      <div
        ref={followerRef}
        className="fixed z-[999] pointer-events-none  mix-blend-difference "
      >
        <div
          id="outer-cursor"
          className=" rounded-full fixed z-[999] border border-white bg-transparent pointer-events-none -translate-x-1/2 -translate-y-1/2"
          style={{
            width: 44,
            height: 44,
          }}
        />
      </div>
    </>
  );
};

export default CustomCursor2;
