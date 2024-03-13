import React from "react";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
type Props = {};

const Publisher = (props: Props) => {
  return (
    <main
      className={`flex h-screen lg:h-3/4 w-3/4 items-center justify-center gap-48 p-24 ${inter.className}`}
    >
      <div className="w-1/2 h-full border flex flex-col justify-center items-center gap-2">
        <h1 className="text-center">Publishing Management Application</h1>
        <h2>Tools: React-Native Dynamodb Expo Clerk </h2>
        <p>
          In this project, we've created a mobile app designed for managing a
          database system. The app caters to three distinct user roles: Admins,
          Editors, and Teachers.
          <br />
          <br />
          Teachers are responsible for creating questions, which are then sent
          to Editors for refinement, including tasks like adding images,
          arranging fonts, etc. Once the edits are completed, the questions are
          sent back to the Teachers for approval. This back-and-forth process
          between Editors and Teachers continues until both parties are
          satisfied with the question's quality.
          <br />
          <br />
          Subsequently, the approved questions are forwarded to the Admin for
          final approval. Upon receiving Admin approval, the questions are
          stored in the main database.
        </p>
      </div>
    </main>
  );
};

export default Publisher;
