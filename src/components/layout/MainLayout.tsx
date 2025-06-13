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
            className=" h-fit w-fit"
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
            href="https://bharat-miscellaneous-bucket.s3.ap-south-1.amazonaws.com/Motivated%20and%20results-driven%20Business%20School%20graduate%20seeking%20a%20challenging%20position%20within%20a%20large%20organisation%20as%20a%20Business%20Analyst%20or%20Project%20Manager.%20Offering%20a%20strong%20foundation%20in%20business%20%20%285%29.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIA5MSUB7AQKGKMZ6XQ%2F20250613%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20250613T035813Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCmFwLXNvdXRoLTEiSDBGAiEAogjYyNQ2ip%2FYHWno%2FubUhzX0x9YmIqc5LoArRenY8s8CIQDLGzz%2Brwyav8IORCcztqUIX1u5BJF53RTULphzvaYzPCrjAgj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDkyMDM3MzAzMjk5MiIMHDhoitJDcJZDE%2FnRKrcCuN6kwIEVLhsiXon8rEp3wuRCN8ZpplU219TMZaEgV%2BsFA%2B0gB6nFAVgEwsgrXiVX4EhufblZkhmHvgzH8yp9u3qVx1HojY835d%2BpaQfiALoc3Lthki%2F4CUmqs45nEo6LsEfLo%2BSUxlQYLSS1zT9kiaaG2wH%2BgJ8nbavaO0Bw%2BhU22h1sl%2FVnG5xI5xQQDBYM0m%2FLJBlXKtS7PAacObbLY9YhrUg8%2BSJjI8Pe4hpkcDpDaGRV3nzsRPx1oPZcdgZ3pCAhwA%2F98UjJ3LqJD41aVlXx89nkHXDnHIDJJEPaGJ6s1mDhWVXrH%2FeLHG7fHcYC%2BSkUf2kyshXAYEGVQrUSphliXz5qrSWwOQOKHExiUB4TMsrdOODauSR8a9IzFHNFZnkbJfzZe77vu5n6EjVsWR656w0%2BulswvMCuwgY6rAL6Rx3n8YDBW68VC5Vr6UmZRm5mZb34T11hvRcvYZ2FOh%2Ftz29LPtUasFiuS94IiOiNKlyDKOJ3BoQzFuGPEODkr5VnMJ2U6ot6rsot%2FnPUgDWi0sPI8aMDjDUZ9UleqvtyNYpJXDkPu8t3yplCgUIrhmCnvwT5Ho%2BhdjRNVHpzL0fIxawG8jlI8bqtKgh1jf61g%2FxDTYIFEgJ%2Bd%2FEoX1Qinp0z2L0yQEpRL1IzifSR55ovQCNQwk%2FLmZXDxlaD%2Fi4LRqVBkSadp6MR2hSvG5mAIZUFE%2FfbX7bb%2FfI4dhmZM8UZT%2FK%2Fo9N%2FzL92VpVE9FvRVmEEOFmcnULFyNVeT%2BZUfgwlfz1C67dL3%2BRgKQ5rqQ5X8gvvATt6V7jgbZwNla4MwSlqcNT%2BO9SyNqs%3D&X-Amz-Signature=80d2e1edf8d123176a44511c1231d07d49dfb61799cedda3e57135cd48d2824d&X-Amz-SignedHeaders=host&response-content-disposition=inline"
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
