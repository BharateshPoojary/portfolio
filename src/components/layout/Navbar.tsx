"use client";
import React from "react";
import { Menu, MenuItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import { AlignJustify } from "lucide-react";
import { useSidebarStore } from "@/store/sidebarStore";
import { Select, Options } from "../ui/mobile-nav";
export interface itemType {
  id: number;
  item: string;
}
export default function Navbar({ className }: { className?: string }) {
  const { isSidebarOpen, toggleSidebar } = useSidebarStore();
  const Item: itemType[] = [
    { id: 1, item: "About" },
    { id: 2, item: "Timeline" },
    { id: 3, item: "Projects" },
    { id: 4, item: "Skills" },
    { id: 5, item: "Contact" },
  ];
  return (
    <>
      <div
        className={cn(
          "fixed  inset-x-0 max-w-2xl mx-auto mt-5 z-50 rounded-full md:hidden block",
          className
        )}
        style={{ border: "2px solid #8317FF" }}
      >
        <Select>
          <Options items={Item} />
        </Select>
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
          <MenuItem item="Contact"></MenuItem>
        </Menu>
      </div>
    </>
  );
}
