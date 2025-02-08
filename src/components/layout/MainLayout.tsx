"use client";
import React, { useEffect } from "react";
import { FlipWords } from "@/components/ui/flip-words";
import Navbar from "./Navbar";
import { PinContainer } from "../ui/3d-pin";
import { useInViewStore } from "@/store/sidebarStore";
import TimeLine from "./TimeLine";
import Card from "./Card";
import { SkillsCard } from "./Skills-Card";
import { useInView } from "react-intersection-observer";
import GradientCards from "./GradientCards";
export default function MainLayout() {
  const Resume: string = "/blurred-resume.png";
  const words = ["Hi,I am Bharatesh Poojary", " I am a Full Stack Developer"];
  const { setIsInView } = useInViewStore();
  const { ref: pinRef, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });
  useEffect(() => {
    setIsInView(inView);
  }, [inView]);

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto flex md:flex-row flex-col max-[332px]:mt-[12vw] max-[293px]:mt-[20vw]">
        <div className="h-[28rem] flex flex-col justify-center items-center px-4 w-full">
          <div className="text-4xl  font-normal text-neutral-600 dark:text-neutral-400">
            <FlipWords words={words} />
            passionate about developing web applications using MERN stack.
          </div>
        </div>
        <div className="md:hidden flex flex-col justify-center items-center  w-full min-w-full"></div>
        <div
          className=" h-[30rem] md:h-[42rem] w-full flex  justify-center items-center px-2"
          ref={pinRef}
        >
          <PinContainer
            title="Click To View Resume"
            href="https://drive.google.com/file/d/16Uy1A9V95HwxqXUVwpgTMVwjUi6Xbx93/view?usp=drivesdk"
          >
            <div
              className="flex basis-full flex-col tracking-tight sm:basis-1/2 w-[17rem] h-[24rem] rounded-xs"
              style={{ border: "2px solid #8317FF" }}
            >
              <img src={Resume} className="w-full h-full border-none  " />
            </div>
          </PinContainer>
        </div>
      </div>
      <TimeLine />
      <GradientCards />
      <SkillsCard />
    </>
  );
}
