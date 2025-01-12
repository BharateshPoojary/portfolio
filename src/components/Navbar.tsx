"use client";
import { useSidebarStore } from "@/store/sidebarStore";
import React from "react";

const navbar: React.FC = () => {
  const toggleSidebar = useSidebarStore((state) => state.toggleSidebar);
  const isSidebarOpen = useSidebarStore((state) => state.isSidebarOpen);
  console.log(isSidebarOpen);
  return (
    <div className="">
      <nav className="md:block hidden relative">
        <ul className=" flex justify-center space-x-20 text-1xl font-bold">
          <li>About</li>
          <li>Skills</li>
          <li>Experience</li>
          <li>Projects</li>
          <li>Education</li>
        </ul>
      </nav>
      <div className="flex justify-end">
        <div className="block md:hidden ">
          <button
            type="button"
            className={`text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300 ${
              isSidebarOpen ? "blur-md " : "blur-none"
            }`}
            onClick={toggleSidebar}
          >
            <svg width="30" height="30">
              <path
                d="M6 4h24M6 12h24M6 20h24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 h-full w-64  shadow-lg transform bg-white ${
          isSidebarOpen ? "translate-x-0 " : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-30`}
      >
        <ul className="mt-8 space-y-4 text-xl font-semibold text-center ">
          <li>About</li>
          <li>Skills</li>
          <li>Experience</li>
          <li>Projects</li>
          <li>Education</li>
        </ul>
      </div>
      {isSidebarOpen && (
        <div className="fixed inset-0 z-20" onClick={toggleSidebar}></div>
      )}
    </div>
  );
};

export default navbar;
