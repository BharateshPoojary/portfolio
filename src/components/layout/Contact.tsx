import React, { useRef } from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";

const Contact = () => {
  const TechStack = [
    {
      id: 1,
      name: "Gmail",
      image: "/Gmail.webp",
      src: "mailto:bharateshpoojari@gmail.com",
    },
    {
      id: 2,
      name: "Linkedin",
      image: "/LinkedIn.png",
      src: "https://www.linkedin.com/in/bharatesh-poojary-6a1121270",
    },
    {
      id: 3,
      name: "Github",
      image: "/Github.png",
      src: "https://github.com/BharateshPoojary",
    },
  ];
  return (
    <div>
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-4xl md:text-6xl mb-4 text-violet-500 dark:text-white max-w-4xl">
          Contact
        </h2>
        <div className="text-2xl md:text-4xl mb-4 max-w-4xl text-center">
          Lets's connect and create something great!
        </div>
        <div className="flex flex-row items-center justify-center space-x-5 mb-10 w-full cursor-pointer">
          <AnimatedTooltip items={TechStack} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
