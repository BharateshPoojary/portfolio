"use client";
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import Image from "next/image";
import Link from "next/link";
import { Github } from "lucide-react";
import StackIcon from "tech-stack-icons";
const GradientCards = () => {
  interface TechStack {
    id: number;
    techStackSource: string;
    techStackAlt: string;
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
      title: "Movie Reviewer Platform",
      src: "/movie-reviewer.png",
      alt: "movie reviewer",
      description: `Built a dynamic web application using Vanilla JavaScript to
                    explore the latest movies and access detailed stories about each
                    movie. Included direct links to YouTube for trailers, reviews,
                    and music, enhancing user engagement.`,
      majorConcepts: "Local Storage, DOM manipulation, etc.",
      techStacks: [
        { id: 1, techStackSource: "/HTML5.png", techStackAlt: "html5" },
        { id: 2, techStackSource: "/css3.svg", techStackAlt: "css3" },
        {
          id: 3,
          techStackSource: "/js.png",
          techStackAlt: "js",
        },
        {
          id: 4,
          techStackSource: "/tmdb.png",
          techStackAlt: "tmdb",
        },
        {
          id: 5,
          techStackSource: "/localstorage.png",
          techStackAlt: "localstorage",
        },
      ],
      demoLink: "https://bharatmoviereviewer.netlify.app/",
      githubLink: "https://github.com/BharateshPoojary/moviereview",
    },
    {
      id: 2,
      title: "Bharat Weather App",
      src: "/weather-app.png",
      alt: "weather app",
      description: `Users can access their current location's weather data, including
                    temperature, humidity, wind speed, etc. They can also search for
                    other cities' weather data using the search bar.`,
      majorConcepts: "Conditional Rendering, Geolocation API, etc.",
      techStacks: [
        { id: 1, techStackSource: "/reactjs.png", techStackAlt: "reactjs" },
        { id: 2, techStackSource: "/vite.svg", techStackAlt: "vite" },
        {
          id: 3,
          techStackSource: "/geolocation.png",
          techStackAlt: "geolocation",
        },
      ],
      demoLink: "https://bharatweatherapp.netlify.app/",
      githubLink: "https://github.com/BharateshPoojary/weather",
    },
    {
      id: 3,
      title: "Bharat Note App",
      src: "/note-app-image.png",
      alt: "bharat note app",
      description: `Developed a full-stack note-taking app using the MERN stack. Enabled
                    users to add, read, edit, and delete notes with a clean and user-friendly interface.`,
      majorConcepts:
        "Context API, JWT Token, bcryptjs, MongoDB Atlas, Netlify (AWS Lambda).",
      techStacks: [
        { id: 1, techStackSource: "/HTML5.png", techStackAlt: "html5" },
        { id: 2, techStackSource: "/css3.svg", techStackAlt: "css3" },
        {
          id: 3,
          techStackSource: "/js.png",
          techStackAlt: "js",
        },
      ],
      demoLink: "https://bharat-note-app.netlify.app/",
      githubLink: "https://github.com/BharateshPoojary/notebook-app",
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
              className="rounded-[22px] w-fit"
            >
              <div>
                <div className="bg-gray-50    dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                  <div className="text-xl font-bold text-violet-600 dark:text-white">
                    {eachproject.title}
                  </div>

                  <Image
                    src={eachproject.src}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt={eachproject.alt}
                  />

                  <div className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                    {eachproject.description}
                  </div>
                  <div className="flex  flex-row justify-between items-center w-full text-neutral-500 text-sm ">
                    <div className="flex-1">
                      <span className="text-violet-600 text-xl ">
                        Highlights
                      </span>
                      <br />
                      {eachproject.majorConcepts}
                    </div>
                    <div className="flex-1">
                      <span className="text-violet-600 text-xl ">
                        Tech Stacks
                      </span>
                      <br />
                      <div className="flex">
                        {eachproject.techStacks.map((eachtechstack) => (
                          <Image
                            key={eachtechstack.id}
                            src={eachtechstack.techStackSource}
                            alt={eachtechstack.techStackAlt}
                            height="1000"
                            width="1000"
                            className="h-10 w-10 "
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-10">
                    <Link
                      href={eachproject.demoLink}
                      target="__blank"
                      className=" md:px-6 md:py-4  rounded-xl text-sm font-bold  text-white bg-violet-600 px-4 py-4  border-2 mx-auto"
                    >
                      View Live App
                    </Link>
                    <Link
                      href={eachproject.githubLink}
                      target="__blank"
                      className=" flex justify-evenly items-center px-4 py-3 md:px-6 md:py-4  rounded-xl bg-black  text-white text-xs font-bold p-2 border-2 border-black mx-auto"
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
