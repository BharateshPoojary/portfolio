"use client";
import Navbar from "@/components/Navbar";
import "./page.css";
import { useSidebarStore } from "@/store/sidebarStore";
import Reveal from "./reveal";
import React, { useEffect, useRef } from "react";

import Image from "@/components/Image";
import Card from "@/components/CardComp";
import gsap from "gsap";
import SplitTextJS from "split-text-js";

export default function Home() {
  const isSidebarOpen = useSidebarStore((state) => state.isSidebarOpen);
  const Slideref = useRef(null);
  useEffect(() => {
    const titles = gsap.utils.toArray(".text-animation") as HTMLElement[];
    console.log(titles);
    const timeline = gsap.timeline({
      repeat: -1,
    });
    console.log(timeline);
    titles.forEach((title) => {
      const splitTitle = new SplitTextJS(title);
      timeline.from(
        splitTitle.chars,
        {
          opacity: 0,
          y: 50,
          rotateX: -20,
        },
        "<"
      );
      timeline.to(
        splitTitle.chars,
        {
          opacity: 0,
          y: -50,
          rotateX: 30,
        },
        "<1"
      );
    });
  }, []);
  return (
    <div className="py-5 px-4 font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <Reveal>
        <div
          className={`  px-5 py-5 md:px-16 md:py-16  ${
            isSidebarOpen ? "blur-md " : "blur-none"
          }`}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:w-7/12 my-10">
              <div className="w-full my-2">
                <h2 className="max-[460px]:text-xl text-3xl   text-animation md:text-4xl font-medium ">
                  Hi,I am Bharatesh Poojary
                </h2>
                <h2 className=" max-[460px]:text-xl text-3xl  text-animation md:text-4xl font-medium  text-wrapper">
                  I am a Full Stack Developer
                </h2>
              </div>
              <h3 className="text-4xl font-bold md:w-1/2 " ref={Slideref}>
                passionate about developing web applications using MERN stack.
              </h3>
            </div>
            <Image />
          </div>
          <Card />
        </div>
      </Reveal>
    </div>
  );
}
