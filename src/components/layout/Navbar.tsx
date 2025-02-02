"use client";
import React from "react";
import { Menu, MenuItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import { AlignJustify } from "lucide-react";
import { useSidebarStore } from "@/store/sidebarStore";

export default function Navbar({ className }: { className?: string }) {
  const { isSidebarOpen, toggleSidebar } = useSidebarStore();
  return (
    <>
      <div className="relative min-h-[100px] md:min-h-0">
        <div
          className={` md:hidden  fixed top-8 right-5 z-[100]   ${
            isSidebarOpen
              ? "bg-white/60 backdrop-blur-sm z-[90] "
              : "bg-white/60"
          }`}
          onClick={toggleSidebar}
        >
          <AlignJustify size={32} />
        </div>

        <nav
          className={`fixed top-0 left-0 h-full w-60 bg-white shadow-lg z-[120]  ${
            isSidebarOpen
              ? "translate-x-0 transition-transform duration-300 overflow-y-hidden"
              : "-translate-x-full transition-transform duration-300 "
          }`}
        >
          <ul className="flex flex-col items-left  h-full py-4  ml-2 space-y-6  text-lg font-medium">
            <li>About</li>
            <li>Time Line</li>
            <li>Projects</li>
            <li>Skills</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
      <div
        className={cn(
          "fixed  inset-x-0 max-w-2xl mx-auto z-50 rounded-full md:block hidden",
          className
        )}
        style={{ border: "2px solid #8317FF" }}
      >
        <Menu>
          <MenuItem item="About"></MenuItem>
          <MenuItem item="Timeline"></MenuItem>
          <MenuItem item="Projects"></MenuItem>
          <MenuItem item="Skills"></MenuItem>
          <MenuItem item="Tech Stack"></MenuItem>
          <MenuItem item="Contact"></MenuItem>
        </Menu>
      </div>
    </>
  );
}
