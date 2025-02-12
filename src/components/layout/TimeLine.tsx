import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { useToggleThemeStore } from "@/store/sidebarStore";
const TimeLine = () => {
  const { CurrentTheme } = useToggleThemeStore();
  const data = [
    {
      title: "2024-Present",
      content: (
        <div>
          <p className="text-violet-500 dark:text-neutral-200 text-3xl font-normal mb-4">
            Lazytech Infotech Solutions
          </p>
          <p
            className={`${
              CurrentTheme === "dark" ? "text-neutral-100" : "text-neutral-800"
            } text-2xl font-normal mb-8`}
          >
            Software Developer Intern
          </p>
        </div>
      ),
    },
    {
      title: "2021-24",
      content: (
        <div>
          <p className="text-violet-500 dark:text-neutral-200 text-3xl font-normal mb-4">
            Bachelor of Computer Application
          </p>
          <p
            className={`${
              CurrentTheme === "dark" ? "text-neutral-100" : "text-neutral-800"
            } text-2xl font-normal mb-8`}
          >
            Shri Mahaveera College
          </p>
        </div>
      ),
    },
  ];
  return (
    <div>
      <div className="w-full">
        <Timeline data={data} />
      </div>
    </div>
  );
};

export default TimeLine;
