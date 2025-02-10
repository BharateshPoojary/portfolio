"use client";
import React from "react";
import { motion } from "framer-motion";

export const MenuItem = ({ item }: { item: string }) => {
  return (
    <div className="relative ">
      <motion.p className="cursor-pointer  hover:text-violet-800 dark:text-white font-medium  max-[323px]:text-[3.5vw] max-[400px]:text-[4vw] text-md ">
        {item}
      </motion.p>
    </div>
  );
};

export const Menu = ({ children }: { children: React.ReactNode }) => {
  return (
    <nav className="relative rounded-full  shadow-input flex justify-evenly sm:space-x-4 space-x-1 px-8  py-4  md:py-6 ">
      {children}
    </nav>
  );
};
