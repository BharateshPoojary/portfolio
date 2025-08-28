"use client";
import React, { useEffect, useRef } from "react";
import { FlipWords } from "@/components/ui/flip-words";
import Navbar from "./Navbar";
import { PinContainer } from "../ui/3d-pin";
import { useInViewStore, useToggleThemeStore } from "@/store/sidebarStore";
import TimeLine from "./TimeLine";
import { useInView } from "react-intersection-observer";
import GradientCards from "./GradientCards";
import { AnimatedTooltipPreview } from "./AnimatedTooltipPreview";
import BlurText from "../ui/BlurText";
import Contact from "./Contact";
import Footer from "./Footer";
import Image from "next/image";
import { Button } from "../ui/button";
export default function MainLayout() {
  const AboutRef = useRef(null);
  const TimeLineRef = useRef(null);
  const ProjectsRef = useRef(null);
  const ContactRef = useRef(null);
  const Resume: string = "/blurred-resume.png";
  const words = ["Hi,I am Bharatesh Poojary", " I am a Full Stack Developer"];
  const { CurrentTheme } = useToggleThemeStore();
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
            text="Frontend Engineer Turning Designs into High-Performance Applications"
            delay={150}
            animateBy="words"
            direction="top"
            className=" mx-36 lg:text-7xl md:text-6xl text-5xl"
          />
        </div>
        {/* <div className="h-fit flex items-center justify-center">
          <Image
            src="/Bharat.png"
            alt="Bharatesh Photo"
            height="1000"
            width="1000"
            className=" h-fit w-fit"
          />
        </div> */}
      </div>
      <div
        ref={AboutRef}
        className="max-w-7xl mx-auto flex md:flex-row flex-col max-[523px]:mt-[12vw] max-[345px]:mt-[26vw] max-[302px]:mt-[30vw]"
      >
        <div className="h-[28rem] flex flex-col justify-center items-center px-4 w-full">
          <div className={`text-4xl  font-normal ${CurrentTheme === "dark" ? "text-white" : "text-black"}`}>
            {/* <FlipWords words={words} /> */}
            <span className="text-violet-700"> Hi,I am Bharatesh Poojary
            </span>
            <div>
              I craft modern, high-performing applications with React & Next.js.
              <div className="flex sm:flex-row flex-col justify-start items-start space-x-2">
                {/* <div className="flex">
                  <AnimatedTooltipPreview />
                </div> */}
                {/* <div className="text-violet-600 font-bold text-5xl">stack.</div> */}
                <Button className="px-8 py-5 my-3 bg-violet-800 hover:bg-violet-900 text-white rounded-full"
                  onClick={() => window.open("https://drive.google.com/file/d/18xseCsAoy52rMo3k65GylWRJEViQ3MLX/view?usp=drivesdk")}
                >My Resume</Button>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="md:hidden flex flex-col justify-center items-center  w-full min-w-full"></div> */}
        {/* <div
          className=" h-[30rem] md:h-[42rem] w-full flex  justify-center items-center px-2"
          ref={pinRef}
        >
          <PinContainer
            title="Click To View Resume"
            href={process.env.NEXT_PUBLIC_RESUME_S3_URL}
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
        </div> */}
        <div className="h-fit flex items-center justify-center">
          <Image
            src="/purple_image-removebg-preview.png"
            alt="About Image Photo"
            height="1000"
            width="1000"
            className=" h-fit w-fit"
          />
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
