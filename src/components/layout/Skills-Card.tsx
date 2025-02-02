"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

import StackIcon from "tech-stack-icons";
import Link from "next/link";

export function SkillsCard() {
  return (
    <>
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-4xl md:text-6xl mb-4 text-violet-500 dark:text-white max-w-4xl">
          Skills
        </h2>
        <div className="text-2xl mb-4 text-gray-800 dark:text-white max-w-4xl">
          Here are some of <span className="text-violet-500">my skills</span> on
          which I have been working on for the past year.
        </div>
        <div className="p-4 bg-gray-200/20 w-fit rounded-lg shadow-md hover:scale-125 hover:shadow-xl transition-all duration-300">
          <Link href="https://react.dev/">
            <StackIcon name="reactjs" className="w-10" />
          </Link>
        </div>
        <div className="p-4 bg-gray-200/20 w-fit rounded-lg shadow-md hover:scale-125 hover:shadow-xl transition-all duration-300">
          <Link href="https://www.mongodb.com/">
            <StackIcon name="mongodb" className="w-10" />
          </Link>
        </div>
      </div>
    </>
  );
}
