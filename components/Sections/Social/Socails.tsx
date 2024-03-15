import React from "react";
import { Inter } from "next/font/google";
import Image from "next/image";
import Label from "@/components/Buttons/Label";
import Labels from "@/components/Labels";
import ProjectTitle from "@/components/Buttons/ProjectTitle";
const inter = Inter({ subsets: ["latin"] });
type Props = {};

const Socials = (props: Props) => {
  const instagram = "https://www.instagram.com/brhm_ergen/";
  const linkedin = "https://www.linkedin.com/in/ibrahim-ergen-6a7902198/";
  // "https://www.linkedin.com/in/muhammet-alperen-efiloğlu-31019a206/";
  const email = "brhmrgn1@gmail.com";
  // "muhammet.alperen.efiloglu@gmail.com";

  const handleMailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <main
      className={`flex h-screen lg:h-3/4 w-3/4 items-center justify-center gap-48 p-24 ${inter.className}`}
    >
      <div className="w-3/4 h-full  flex flex-col justify-center items-center gap-2">
        <ProjectTitle title="socials" />
        <div className="pt-12 flex flex-wrap items-start justify-center gap-10">
          <div className="flex flex-col items-center justify-start gap-4">
            <a
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white border-opacity-30 w-16 h-16 rounded-xl flex justify-center items-center images group hover:bg-white"
            >
              <Image
                src={"/instagram-icon.png"}
                alt="instagram-icon"
                width={100}
                height={100}
                className={`w-8 object-cover invert group-hover:invert-0`}
              />
            </a>
            <span className="text-white font-extralight text-sm">
              INSTAGRAM
            </span>
          </div>
          <div className="flex flex-col items-center justify-start gap-4">
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white border-opacity-30 w-16 h-16 rounded-xl  flex justify-center items-center images group hover:bg-white"
            >
              <Image
                src={"/linkedin-icon.png"}
                alt="linkedin-icon"
                width={100}
                height={100}
                className={`w-10 object-cover invert group-hover:invert-0`}
              />
            </a>
            <span className="text-white font-extralight text-sm">LINKEDIN</span>
          </div>
          <div className="flex flex-col items-center justify-start gap-4">
            <div
              onClick={handleMailClick}
              className="border border-white border-opacity-30 w-16 h-16 rounded-xl  flex justify-center items-center images group hover:bg-white"
            >
              <Image
                src={"/mail-icon.png"}
                alt="mail-icon"
                width={100}
                height={100}
                className={`w-7 object-cover invert group-hover:invert-0`}
              />
            </div>
            <span className="text-white font-extralight text-sm">MAIL</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Socials;
