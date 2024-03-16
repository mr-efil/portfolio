import React, { ChangeEvent, useState } from "react";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { sendContactForm } from "@/lib/api";
type Props = {};

const initValues = { name: "", email: "", message: "" };

const initState = { isLoading: false, values: initValues };

const Contact = (props: Props) => {
  const [state, setState] = useState(initState);
  const [isUpdated, setIsUpdated] = useState(false);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [name]: value,
      },
    }));
  };
  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await sendContactForm(state.values);
      setState(initState);
      setIsUpdated(false);
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
      }));
    }
  };
  return (
    <main
      className={`flex h-screen lg:h-3/4 w-3/4 items-center justify-center gap-48 p-24 ${inter.className} kursu-ranking-box`}
    >
      {state.isLoading && (
        <h1 className="text-3xl font-bold text-black">Loading...</h1>
      )}
      <div className=" relative z-10 flex flex-col items-center w-full text-center">
        <h2 className="text-2xl lg:text-4xl font-extrabold lg:leading-relaxed w-full">
          <span className="text-2xl lg:text-4xl font-extrabold uppercase">
            Let&apos;s work together
          </span>
        </h2>
        <div className="flex flex-col w-full items-center justify-center gap-12 mt-12">
          <div className="w-full lg:w-96 h-16 rounded-2xl relative border border-white border-opacity-30 inverse-hover">
            <span className="absolute -top-2 left-2 -translate-y-full font-bold text-[#787878] text-base">
              NAME
            </span>
            <input
              className="w-full h-full rounded-2xl bg-transparent px-4 cursor-none inverse-hover"
              type="text"
              name="name"
              value={state.values.name || ""}
              onChange={handleChange}
              style={{
                border:
                  isUpdated && !state.values.name ? "3px solid red" : "none",
              }}
            />
          </div>
          <div className="w-full lg:w-96 h-16 rounded-2xl border relative border-white border-opacity-30 inverse-hover">
            <span className="absolute -top-2 left-2 -translate-y-full font-bold text-[#787878] text-base">
              E-MAIL
            </span>
            <input
              className="w-full h-full rounded-2xl bg-transparent px-4 cursor-none inverse-hover"
              type="text"
              name="email"
              value={state.values.email || ""}
              onChange={handleChange}
              style={{
                border:
                  isUpdated && !state.values.email ? "3px solid red" : "none",
              }}
            />
          </div>
          <div className="w-full lg:w-96 h-40 rounded-2xl border relative border-white border-opacity-30 inverse-hover">
            <span className="absolute -top-2 left-2 -translate-y-full font-bold text-[#787878] text-base">
              MESSAGE
            </span>
            <textarea
              className="w-full h-full rounded-2xl bg-transparent px-4 py-2 cursor-none inverse-hover"
              style={{
                border:
                  isUpdated && !state.values.message ? "3px solid red" : "none",
              }}
              name="message"
              value={state.values.message || ""}
              onChange={handleChange}
            />
          </div>
        </div>
        <button
          className={
            "text-xl font-extrabold mt-4 -skew-x-6 text-[#f7f6f1] h-12 lg:h-16 rounded-2xl lg:rounded-3xl px-10 border  border-white border-opacity-30 inverse-hover hover:bg-[#F7F6F1] hover:text-[#0d0d0d] hover:border-[#0d0d0d]"
          }
          onClick={
            !state.values.name || !state.values.email || !state.values.message
              ? () => {
                  setIsUpdated(true);
                }
              : () => {
                  onSubmit();
                }
          }
          // disabled={
          //   !state.values.name || !state.values.email || !state.values.message
          // }
        >
          SEND
        </button>
      </div>
    </main>
  );
};

export default Contact;
