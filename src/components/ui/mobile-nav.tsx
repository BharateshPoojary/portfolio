"use client";
import React from "react";
import { motion } from "framer-motion";
import { itemType } from "../layout/Navbar";
interface OptionsProps {
  items: itemType[]; //It expect items as props which should be  of itmeType[]
}
export const Options = ({ items }: OptionsProps) => {
  return (
    <select className="relative ">
      {items.map((eachitem) => (
        <motion.option
          key={eachitem.id}
          className="cursor-pointer  hover:text-violet-800 dark:text-white font-medium"
        >
          {eachitem.item}
        </motion.option>
      ))}
    </select>
  );
};

export const Select = ({ children }: { children: React.ReactNode }) => {
  return (
    <nav className="relative rounded-full border border-white/30 bg-white/30 backdrop-blur-lg shadow-input flex justify-evenly space-x-4 px-8 py-6 ">
      {children}
    </nav>
  );
};
