"use client";
import React, { useEffect, useRef } from "react";
import { FlipWords } from "@/components/ui/flip-words";
import Navbar from "./Navbar";
import { PinContainer } from "../ui/3d-pin";
import { useSidebarStore } from "@/store/sidebarStore";
import { ArrowDown } from "lucide-react";
import TimeLine from "./TimeLine";

export default function MainLayout() {
  const Resume: string = "/resume-image.png";
  const words = ["Hi,I am Bharatesh Poojary", " I am a Full Stack Developer"];
  const { isSidebarOpen, closeSideBar } = useSidebarStore();
  const resumeRef = useRef<HTMLImageElement | null>(null);
  const handleClick = () => {
    if (resumeRef) {
      resumeRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
    }

    // Cleanup on unmount or when sidebar state changes
    return () => {
      document.body.style.overflow = "auto"; // Ensure scrolling is enabled
    };
  }, [isSidebarOpen]);

  return (
    <>
      <Navbar />
      {isSidebarOpen && (
        <div className={`relative `}>
          <div className="fixed inset-0  z-[90]" onClick={closeSideBar}></div>
        </div>
      )}
      <div className=" my-5 flex flex-col md:flex-row  md:justify-evenly md:items-center ">
        <div className="h-[28rem] flex flex-col justify-center items-center px-4 w-full">
          <div className="text-4xl  font-normal text-neutral-600 dark:text-neutral-400">
            <FlipWords words={words} />
            passionate about developing web applications using MERN stack.
          </div>
        </div>
        <div className="md:hidden flex flex-col justify-center items-center  w-full min-w-full">
          <button
            className=" p-4 bg-violet-500 border-violet-950 rounded-full text-lg mt-5 mx-0 text-white font-semibold "
            onClick={handleClick}
          >
            Click Below To View Resume
          </button>

          <ArrowDown size={32} />
        </div>
        <div className=" h-[30rem] md:h-[42rem] w-full flex  justify-center items-center px-2">
          <PinContainer
            title="Resume"
            href="https://drive.google.com/file/d/16Uy1A9V95HwxqXUVwpgTMVwjUi6Xbx93/view?usp=drivesdk"
          >
            <div
              className="flex basis-full flex-col tracking-tight sm:basis-1/2 w-[17rem] h-[24rem] rounded-xs"
              style={{ border: "2px solid #8317FF" }}
            >
              <img
                src={Resume}
                className="w-full h-full border-none blur-sm "
                ref={resumeRef}
              />
            </div>
          </PinContainer>
        </div>
      </div>
      <TimeLine />
    </>
  );
}
