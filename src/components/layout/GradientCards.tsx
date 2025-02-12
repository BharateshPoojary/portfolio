"use client";
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import Image from "next/image";
import Link from "next/link";
import { Github } from "lucide-react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import { useToggleThemeStore } from "@/store/sidebarStore";
const GradientCards = () => {
  const { CurrentTheme } = useToggleThemeStore();
  const expressImageSrc =
    CurrentTheme === "dark" ? "/Express-white.png" : "/Express.png";
  const nextjsImageSrc =
    CurrentTheme === "dark" ? "/nextjs-white.png" : "/Next.js.png";

  interface TechStack {
    id: number;
    name: string;
    image: string;
  }
  interface ProjectsType {
    id: number;
    title: string;
    src: string;
    alt: string;
    description: string;
    majorConcepts: string;
    demoLink: string;
    githubLink: string;
    techStacks: TechStack[];
  }
  const projects: ProjectsType[] = [
    {
      id: 1,
      title: "My Portfolio",
      src: "/bharat-portfolio.png",
      alt: "my Portfolio",
      description: `Built with Next.js, TypeScript, Tailwind CSS, and Aceternity UI, this portfolio is a showcase of my skills in full-stack development using the MERN stack. It features a sleek, responsive design with smooth UI interactions, highlighting my expertise in React, Node.js, Express, and MongoDB. `,
      majorConcepts: "TypeScript, Next.js and libraries like Aceternity UI",
      techStacks: [
        { id: 1, name: "Next.js", image: nextjsImageSrc },
        { id: 2, name: "Typescript", image: "/TypeScript.png" },
        { id: 3, name: "Tailwind", image: "/TailwindCSS.png" },
        { id: 4, name: "Aceternity", image: "/Aceternity.png" },
        { id: 5, name: "zustand", image: "/zustand.png" },
      ],
      demoLink: "https://bharatesh-portfolio.vercel.app/",
      githubLink: "https://github.com/BharateshPoojary/portfolio",
    },
    {
      id: 2,
      title: "Bharat Note App",
      src: "/note-app-image.png",
      alt: "bharat note app",
      description: `Developed a full-stack note-taking app using the MERN stack. Enabled
                    users to add, read, edit, and delete notes with a clean and user-friendly interface.`,
      majorConcepts:
        "Context API, JWT Token, bcryptjs, MongoDB Atlas, Netlify (AWS Lambda).",
      techStacks: [
        { id: 1, name: "MongoDB", image: "/MongoDB.png" },
        { id: 2, name: "Express", image: expressImageSrc },
        { id: 3, name: "React", image: "/React.png" },
        { id: 4, name: "Node.js", image: "/Node.js.png" },
      ],
      demoLink: "https://bharat-note-app.netlify.app/",
      githubLink: "https://github.com/BharateshPoojary/notebook-app",
    },
    {
      id: 3,
      title: "Movie Reviewer Platform",
      src: "/movie-reviewer.png",
      alt: "movie reviewer",
      description: `Built a dynamic web application using Vanilla JavaScript to
                    explore the latest movies and access detailed stories about each
                    movie. Included direct links to YouTube for trailers, reviews,
                    and music, enhancing user engagement.`,
      majorConcepts: "Local Storage, DOM manipulation, etc.",
      techStacks: [
        { id: 1, name: "HTML5", image: "/HTML5.png" },
        { id: 2, name: "CSS3", image: "/CSS3.png" },
        {
          id: 3,
          name: "javaScript",
          image: "/JavaScript.png",
        },
      ],
      demoLink: "https://bharatmoviereviewer.netlify.app/",
      githubLink: "https://github.com/BharateshPoojary/moviereview",
    },
  ];

  return (
    <div>
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-4xl md:text-6xl mb-4 text-violet-500 dark:text-white max-w-4xl">
          Projects
        </h2>
      </div>
      <div className="max-w-8xl mx-auto px-2 md:px-10 lg:px-15">
        <div className="grid  [@media_(min-width:1534px)]:grid-cols-3  [@media_(min-width:1016px)]:grid-cols-2 grid-cols-1   gap-4 ">
          {projects.map((eachproject) => (
            <BackgroundGradient
              key={eachproject.id}
              className="rounded-[22px] w-fit h-fit"
            >
              <div>
                <div
                  className={`${
                    CurrentTheme === "dark" ? " bg-black " : " bg-white "
                  }   dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] min-[422]:h-[38rem] h-[48]rounded-xl p-6 border rounded-xl `}
                >
                  <div className="text-xl font-bold text-violet-600 dark:text-white">
                    {eachproject.title}
                  </div>

                  <Image
                    src={eachproject.src}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-fit rounded-xl group-hover/card:shadow-xl"
                    alt={eachproject.alt}
                  />

                  <div className="text-neutral-300 text-sm max-w-sm mt-2 dark:text-neutral-300">
                    {eachproject.description}
                  </div>
                  <div className="flex  flex-row justify-between items-center w-full text-neutral-300 text-sm">
                    <div className="flex-1">
                      <span className="text-violet-400 text-xl ">
                        Highlights
                      </span>
                      <br />
                      {eachproject.majorConcepts}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-row items-center justify-center ">
                        <AnimatedTooltip items={eachproject.techStacks} />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-10">
                    <Link
                      href={eachproject.demoLink}
                      target="__blank"
                      className=" md:px-6 md:py-4  rounded-xl text-sm font-bold  text-white bg-violet-600 px-4 py-4 mx-auto"
                    >
                      View Live App
                    </Link>
                    <Link
                      href={eachproject.githubLink}
                      target="__blank"
                      className=" flex justify-evenly items-center px-4 py-3 md:px-6 md:py-4  rounded-xl bg-black border text-white text-xs font-bold p-2 mx-auto"
                    >
                      View Code On <Github />
                    </Link>
                  </div>
                </div>
              </div>
            </BackgroundGradient>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GradientCards;
