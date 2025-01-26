"use client";
import React, { useState } from "react";
import { Menu, MenuItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";

export default function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 rounded-full",
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
  );
}
