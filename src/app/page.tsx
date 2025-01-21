"use client";
import Navbar from "@/components/Navbar";

import { useSidebarStore } from "@/store/sidebarStore";
import Reveal from "./reveal";
import React, { useRef } from "react";

import Image from "@/components/Image";
import Card from "@/components/CardComp";
export default function Home() {
  const isSidebarOpen = useSidebarStore((state) => state.isSidebarOpen);
  const Slideref = useRef(null);

  return (
    <div className="py-5 px-4 font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <Reveal>
        <div
          className={` relative px-5 py-5 md:px-16 md:py-16  ${
            isSidebarOpen ? "blur-md " : "blur-none"
          }`}
        >
          <div className="flex flex-col md:flex-row justify-between items-center max-w-full">
            <div className="flex flex-col md:w-7/12">
              <h2 className="text-6xl relative ">Hi, I am Bharatesh Poojary</h2>
              <h3
                className="text-4xl font-bold relative md:w-1/2"
                ref={Slideref}
              >
                I am a Full Stack Developer passionate about developing web
                applications using MERN stack.
              </h3>
            </div>
            <Image />
          </div>
        </div>
        <Card />
      </Reveal>
    </div>
  );
}
