"use client";
import React, { RefObject } from "react";
import { Menu, MenuItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";

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
  return (
    <>
      <div
        className={cn(
          "fixed  inset-x-0 sm:max-w-3xl  max-w-80 mx-auto z-50 rounded-full bg-white/30 backdrop-blur-lg my-5 md:mt-0 ",
          className
        )}
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
