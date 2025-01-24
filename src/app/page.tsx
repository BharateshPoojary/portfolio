"use client";
import Navbar from "@/components/Navbar";
import Landing from "@/components/Landing";
import React from "react";

export default function Home() {
  return (
    <div className="py-5 px-4 font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <Landing />
    </div>
  );
}
