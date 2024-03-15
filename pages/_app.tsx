import CustomCursor from "@/components/Cursor/CustomCursor";
import CustomCursor2 from "@/components/Cursor/CustomCursor2";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <CustomCursor2 />
      <Component {...pageProps} />
    </>
  );
}
