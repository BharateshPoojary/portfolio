"use client";
import Navbar from "@/components/Navbar";
import { useSidebarStore } from "@/store/sidebarStore";
export default function Home() {
  const isSidebarOpen = useSidebarStore((state) => state.isSidebarOpen);
  return (
    <div className="py-5 px-4 font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <div
        className={` relative px-4 py-5 md:px-48 md:py-20  ${
          isSidebarOpen ? "blur-md " : "blur-none"
        }`}
      >
        <div className="grid grid-cols-2">
          <h3 className="text-4xl font-bold">
            <span className="text-6xl">Bharatesh here,</span>a Full Stack
            Developer passionate about developing web applicatons using MERN
            stack.
          </h3>
        </div>
      </div>
    </div>
  );
}
