import React from "react";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
type Props = {};

const English = (props: Props) => {
  return (
    <main
      className={`flex h-screen lg:h-3/4 w-3/4 items-center justify-center gap-48 p-24 ${inter.className}`}
    >
      <div className="w-1/2 h-full border flex flex-col justify-center items-center gap-2">
        <h1 className="text-center">English Learning App</h1>
        <h2>
          Tools: OpenAI api, elevenlabs api, Midjourney api , Open Source
          Projects
        </h2>
        <p>
          In this project, we've developed a website aimed at helping English
          learners improve their skills through practice. The process begins
          with creating photos depicting various life scenarios using
          Midjourney. Subsequently, we generate dialogs using the OpenAI API,
          which are then read aloud by one of the elevenlabs voices. Finally,
          users' voices are recorded to assess the pronunciation accuracy.
          <br />
          <br />
          One advantage of the platform is that users can practice speaking
          without fear or shyness, and they can also expose themselves to
          different accents. Another advantage is that users can prepare for
          real-life scenarios by practicing on the platform.
          <br />
        </p>
      </div>
    </main>
  );
};

export default English;
