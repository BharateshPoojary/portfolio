"use client";
import React, { RefObject } from "react";
import { Menu, MenuItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useToggleThemeStore } from "@/store/sidebarStore";

export default function Navbar({
  className,
  aboutRef,
  timelineRef,
  projectsRef,
  contactRef,
}: {
  className?: string;
  aboutRef: RefObject<HTMLDivElement | null>;
  timelineRef: RefObject<HTMLDivElement | null>;
  projectsRef: RefObject<HTMLDivElement | null>;
  contactRef: RefObject<HTMLDivElement | null>;
}) {
  const handleNav = (ref: RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const { CurrentTheme, setTheme } = useToggleThemeStore();
  return (
    <>
      <div className="fixed   w-12 h-12 z-[100] rounded-full  my-5 md:mt-0 cursor-pointer  md:top-10 top-4  sm:right-5 right-0">
        {CurrentTheme === "dark" ? (
          <Image
            src="/sun.png"
            width={1000}
            height={1000}
            alt="lightmodeicon"
            onClick={() => setTheme()}
            className="sm:h-15 h-7 sm:w-15 w-7"
          />
        ) : (
          <Image
            src="/moon.png"
            width={1000}
            height={1000}
            alt="moonlineicon"
            onClick={() => setTheme()}
            className="sm:h-15 h-7 sm:w-15 w-7"
          />
        )}
      </div>

      <div
        className={
          CurrentTheme === "dark"
            ? cn(
                "fixed  inset-x-0 sm:max-w-3xl  mx-auto z-50 rounded-full bg-black/30 backdrop-blur-lg my-5 md:mt-0 ",
                className
              )
            : cn(
                "fixed  inset-x-0 sm:max-w-3xl  mx-auto z-50 rounded-full bg-white/30 backdrop-blur-lg my-5 md:mt-0 ",
                className
              )
        }
        style={{ border: "2px solid #8317FF" }}
      >
        <Menu>
          <div onClick={() => handleNav(aboutRef)}>
            <MenuItem item="About"></MenuItem>
          </div>
          <div onClick={() => handleNav(timelineRef)}>
            <MenuItem item="Timeline"></MenuItem>
          </div>
          <div onClick={() => handleNav(projectsRef)}>
            <MenuItem item="Projects"></MenuItem>
          </div>
          <div onClick={() => handleNav(contactRef)}>
            <MenuItem item="Contact"></MenuItem>
          </div>
        </Menu>
      </div>
    </>
  );
}
