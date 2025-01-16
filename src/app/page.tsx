"use client";
import Navbar from "@/components/Navbar";
import { useSidebarStore } from "@/store/sidebarStore";
import Reveal from "./reveal";
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import Image from "@/components/Image";
export default function Home() {
  const isSidebarOpen = useSidebarStore((state) => state.isSidebarOpen);
  const Slideref = useRef(null);
  const isInView = useInView(Slideref, { once: true });
  const slideControl = useAnimation();
  useEffect(() => {
    // console.log(isInView);
    if (isInView) {
      slideControl.start("visible");
    }
  }, [isInView]);
  return (
    <div className="py-5 px-4 font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <Reveal>
        <div
          className={` relative px-4 py-5 md:px-48 md:py-20  ${
            isSidebarOpen ? "blur-md " : "blur-none"
          }`}
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <h3 className="text-4xl font-bold relative md:w-1/2" ref={Slideref}>
              <motion.div
                variants={{
                  hidden: { left: 0 },
                  visible: { left: "100%" },
                }}
                initial="hidden"
                animate={slideControl}
                transition={{ duration: 0.5, ease: "easeIn" }}
                style={{
                  position: "absolute",
                  top: 4,
                  bottom: 4,
                  left: 0,
                  right: 0,
                  backdropFilter: "blur(10px)", // Apply blur effect
                  background: "white", // Semi-transparent black
                  zIndex: 20,
                }}
              />
              <span className="text-6xl relative ">
                Hi, I am Bharatesh Poojary
              </span>
              a Full Stack Developer passionate about developing web
              applications using MERN stack.
            </h3>
            <Image />
          </div>
        </div>
      </Reveal>
    </div>
  );
}
