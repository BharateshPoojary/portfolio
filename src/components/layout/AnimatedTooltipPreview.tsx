"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import { useToggleThemeStore } from "@/store/sidebarStore";
export function AnimatedTooltipPreview() {
  const { CurrentTheme } = useToggleThemeStore();
  const expressImageSrc =
    CurrentTheme === "dark" ? "/express-white.png" : "/Express.png";
  const nextjsImageSrc =
    CurrentTheme === "dark" ? "/nextjs-white.png" : "/Next.js.png";
  const TechStack = [
    {
      id: 1,
      name: "MongoDB",
      image: "/MongoDB.png",
    },
    {
      id: 2,
      name: "Expressjs",
      image: expressImageSrc,
    },
    {
      id: 3,
      name: "Reactjs",
      image: "/React.png",
    },
    {
      id: 4,
      name: "Nodejs",
      image: "/Node.js.png",
    },
    {
      id: 5,
      name: "Nextjs",
      image: nextjsImageSrc,
    },
  ];
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={TechStack} />
    </div>
  );
}
