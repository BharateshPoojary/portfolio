"use client";
import React, { useEffect } from "react";
import { FlipWords } from "@/components/ui/flip-words";
import Navbar from "./Navbar";
import { PinContainer } from "../ui/3d-pin";
import { useSidebarStore } from "@/store/sidebarStore";

export default function MainLayout() {
  const Resume: string = "/resume-image.png";
  const words = ["Hi,I am Bharatesh Poojary", " I am a Full Stack Developer"];
  const { isSidebarOpen, closeSideBar } = useSidebarStore();
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
      <div className={`relative  `}>
        <div className={`md:flex justify-center my-5 md:my-0 `}>
          <div className=" flex flex-col md:flex-row  justify-evenly items-center ">
            <div className="h-[28rem] flex justify-center items-center px-4 w-full">
              <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
                <FlipWords words={words} /> <br />
                passionate about developing web applications using MERN stack.
              </div>
            </div>

            <div className="h-[40rem] w-full flex items-center justify-center ">
              <PinContainer
                title="Resume"
                href="https://drive.google.com/file/d/14d84h0LM0Q1WDRqNFCIOyHBHj2FTMkbB/view?usp=drivesdk"
              >
                <div
                  className="flex basis-full flex-col tracking-tight sm:basis-1/2 w-[17rem] h-[24rem] rounded-xs"
                  style={{ border: "2px solid #8317FF" }}
                >
                  <img src={Resume} className="w-full h-full border-none" />
                </div>
              </PinContainer>
            </div>
          </div>
        </div>

        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black/10 backdrop-blur-sm z-[90]"
            onClick={closeSideBar}
          ></div>
        )}
      </div>
    </>
  );
}
