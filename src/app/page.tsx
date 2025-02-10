"use client";

import MainLayout from "@/components/layout/MainLayout";
import React from "react";
import { useToggleThemeStore } from "@/store/sidebarStore";
export default function Home() {
  const { CurrentTheme } = useToggleThemeStore();
  return (
    <div
      className={`md:py-5  font-[family-name:var(--font-geist-sans)] max-w-full w-full overflow-x-hidden ${
        CurrentTheme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <MainLayout />
    </div>
  );
}
