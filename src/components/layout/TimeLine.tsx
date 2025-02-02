import React from "react";
import { Timeline } from "@/components/ui/timeline";
const TimeLine = () => {
  const data = [
    {
      title: "2024-Present",
      content: (
        <div>
          <p className="text-violet-800 dark:text-neutral-200 text-3xl font-normal mb-4">
            Lazytech Infotech Solutions
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-2xl font-normal mb-8">
            Software Developer Intern
          </p>
        </div>
      ),
    },
    {
      title: "2021-24",
      content: (
        <div>
          <p className="text-violet-800 dark:text-neutral-200 text-3xl font-normal mb-4">
            Bachelor of Computer Application
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-2xl font-normal mb-8">
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
