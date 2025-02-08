"use client";
import React from "react";
import { Menu, MenuItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";

export default function Navbar({ className }: { className?: string }) {
  return (
    <>
      <div
        className={cn(
          "fixed  inset-x-0 max-w-3xl mx-auto z-50 rounded-full bg-white/30 backdrop-blur-lg my-5 md:mt-0 ",
          className
        )}
        style={{ border: "2px solid #8317FF" }}
      >
        <Menu>
          <MenuItem item="About"></MenuItem>
          <MenuItem item="Timeline"></MenuItem>
          <MenuItem item="Projects"></MenuItem>
          <MenuItem item="Skills"></MenuItem>
          <MenuItem item="Contact"></MenuItem>
        </Menu>
      </div>
    </>
  );
}
