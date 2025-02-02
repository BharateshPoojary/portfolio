"use client";

import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import StackIcon from "tech-stack-icons";
import Link from "next/link";

export function SkillsCard() {
  const people = [
    {
      id: 1,
      name: "mongodb",
    },
    {
      id: 2,
      name: "reactjs",
    },
    {
      id: 3,
      name: "nodejs",
    },
    {
      id: 4,
      name: "html5",
    },
    {
      id: 5,
      name: "css3",
    },
    {
      id: 6,
      name: "js",
    },
  ];
  return (
    <>
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-4xl md:text-6xl mb-4 text-violet-500 dark:text-white max-w-4xl">
          Skills
        </h2>
        <div className="text-3xl mb-4 text-gray-800 dark:text-white max-w-7xl">
          Here are some of <span className="text-violet-500">my skills</span> on
          which I have been working on for the past year.
        </div>
      </div>
      <div className="flex flex-row items-center justify-center mb-10 w-full">
        <AnimatedTooltip items={people} />
      </div>
    </>
  );
}
