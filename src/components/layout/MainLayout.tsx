"use client";
import React, { useEffect, useRef } from "react";
import { FlipWords } from "@/components/ui/flip-words";
import Navbar from "./Navbar";
import { PinContainer } from "../ui/3d-pin";
import { useInViewStore } from "@/store/sidebarStore";
import TimeLine from "./TimeLine";
import { useInView } from "react-intersection-observer";
import GradientCards from "./GradientCards";
import { AnimatedTooltipPreview } from "./AnimatedTooltipPreview";
import BlurText from "../ui/BlurText";
import Contact from "./Contact";
import Footer from "./Footer";
import Image from "next/image";
export default function MainLayout() {
  const AboutRef = useRef(null);
  const TimeLineRef = useRef(null);
  const ProjectsRef = useRef(null);
  const ContactRef = useRef(null);
  const Resume: string = "/blurred-resume.png";
  const words = ["Hi,I am Bharatesh Poojary", " I am a Full Stack Developer"];
  const { setIsInView } = useInViewStore();
  const { ref: pinRef, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });
  useEffect(() => {
    setIsInView(inView);
  }, [setIsInView, inView]);
  return (
    <>
      <Navbar
        aboutRef={AboutRef}
        timelineRef={TimeLineRef}
        projectsRef={ProjectsRef}
        contactRef={ContactRef}
      />
      <div className="md:flex md:h-screen items-center justify-center">
        <div className="h-screen flex items-center justify-center">
          <BlurText
            text="Welcome to Bharatesh's Portfolio"
            delay={150}
            animateBy="words"
            direction="top"
            className="lg:text-8xl md:text-7xl text-6xl   "
          />
        </div>
        <div className="h-fit flex items-center justify-center">
          <Image
            src="/Bharat.png"
            alt="Bharatesh Photo"
            height="1000"
            width="1000"
            className=" h-fit w-fit "
          />
        </div>
      </div>
      <div
        ref={AboutRef}
        className="max-w-7xl mx-auto flex md:flex-row flex-col max-[523px]:mt-[12vw] max-[345px]:mt-[26vw] max-[302px]:mt-[30vw]"
      >
        <div className="h-[28rem] flex flex-col justify-center items-center px-4 w-full">
          <div className="text-4xl  font-normal text-neutral-600 dark:text-neutral-400">
            <FlipWords words={words} />
            <div>
              passionate about developing web applications using
              <div className="flex sm:flex-row flex-col justify-start items-start space-x-2">
                <div className="flex">
                  <AnimatedTooltipPreview />
                </div>
                <div className="text-violet-600 font-bold text-5xl">stack.</div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:hidden flex flex-col justify-center items-center  w-full min-w-full"></div>
        <div
          className=" h-[30rem] md:h-[42rem] w-full flex  justify-center items-center px-2"
          ref={pinRef}
        >
          <PinContainer
            title="Click To View Resume"
            href="https://drive.google.com/file/d/1L3MmB0oCrsPJeK9R4q-UtlmwHmW2Xqss/view?usp=drivesdk"
          >
            <div
              className="flex basis-full flex-col tracking-tight sm:basis-1/2 w-[17rem] h-[24rem] rounded-xs"
              style={{ border: "2px solid #8317FF" }}
            >
              <Image
                src={Resume}
                className="w-full h-full border-none  "
                alt="resume"
                width={1000}
                height={1000}
              />
            </div>
          </PinContainer>
        </div>
      </div>
      <div ref={TimeLineRef}>
        <TimeLine />
      </div>

      <div ref={ProjectsRef}>
        <GradientCards />
      </div>
      <div ref={ContactRef}>
        <Contact />
      </div>
      <Footer />
    </>
  );
}
