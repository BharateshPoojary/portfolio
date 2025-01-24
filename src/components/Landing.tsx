import React from "react";
import { FlipWords } from "@/components/ui/flip-words";

export default function FlipWordsDemo() {
  const words = ["Hi,I am Bharatesh Poojary", " I am a Full Stack Developer"];

  return (
    <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        <FlipWords words={words} /> <br />
        passionate about developing web applications using MERN stack.
      </div>
    </div>
  );
}
