"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";

export function AnimatedTooltipPreview() {
  const TechStack = [
    {
      id: 1,
      name: "MongoDB",
      image: "/MongoDB.png",
    },
    {
      id: 2,
      name: "Expressjs",
      image: "/Express.png",
    },
    {
      id: 3,
      name: "Reactjs",
      image: "/react.png",
    },
    {
      id: 4,
      name: "Nodejs",
      image: "/Node.js.png",
    },
    {
      id: 5,
      name: "Nextjs",
      image: "/Next.js.png",
    },
  ];
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={TechStack} />
    </div>
  );
}
