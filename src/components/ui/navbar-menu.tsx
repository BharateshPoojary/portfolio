"use client";
import React from "react";
import { motion } from "framer-motion";

export const MenuItem = ({ item }: { item: string }) => {
  return (
    <div className="relative ">
      <motion.p className="cursor-pointer  hover:text-violet-800 dark:text-white">
        {item}
      </motion.p>
    </div>
  );
};

export const Menu = ({ children }: { children: React.ReactNode }) => {
  return (
    <nav className="relative rounded-full border border-transparent dark:bg-black dark:border-white/[0.2] bg-white shadow-input flex justify-center space-x-4 px-8 py-6 ">
      {children}
    </nav>
  );
};
