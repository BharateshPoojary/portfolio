"use client";
import { useSidebarStore } from "@/store/sidebarStore";
import React, { useEffect } from "react";

const navbar: React.FC = () => {
  const toggleSidebar = useSidebarStore((state) => state.toggleSidebar);
  const isSidebarOpen = useSidebarStore((state) => state.isSidebarOpen);
  useEffect(() => {
    // Disable scrolling when the sidebar is open
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = ""; // Re-enable scrolling
    }

    // Cleanup function to reset overflow on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [isSidebarOpen]);

  console.log(isSidebarOpen);
  return (
    <div>
      <nav className="md:block hidden ">
        <ul className=" flex justify-center md:space-x-20 lg:space-x-32 text-2xl font-bold fixed top-0 left-0 py-4 w-full h-12 z-50 backdrop-blur bg-white/30 ">
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Skills</li>
          <li className="cursor-pointer">Experience</li>
          <li className="cursor-pointer">Projects</li>
          <li className="cursor-pointer">Education</li>
        </ul>
      </nav>
      <div className="flex justify-end fixed top-4  right-6 w-full z-50">
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
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Skills</li>
          <li className="cursor-pointer">Experience</li>
          <li className="cursor-pointer">Projects</li>
          <li className="cursor-pointer">Education</li>
        </ul>
      </div>
      {isSidebarOpen && (
        <div className="fixed inset-0 z-20" onClick={toggleSidebar}></div>
      )}
    </div>
  );
};

export default navbar;
