"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";
import { Github } from "lucide-react";

export default function ThreeDCardDemo() {
  return (
    <>
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-4xl md:text-6xl mb-4 text-violet-500 dark:text-white max-w-4xl">
          Projects
        </h2>
      </div>
      <div className="grid  [@media_(min-width:1534px)]:grid-cols-3  [@media_(min-width:1016px)]:grid-cols-2 grid-cols-1   gap-4 px-3">
        <CardContainer className="inter-var ">
          <CardBody className="bg-gray-50  group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-violet-600 dark:text-white"
            >
              Bharat Weather App
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/weather-app.png"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="weatherapp"
              />
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Users can access their current location weather data such as
              temperature,humidity,wind speed etc. Users can also access other
              cities weather data through the search bar provided in the
              website.
              <br />
              <br />
              <span className="text-violet-600 text-xl ">Highlights</span>
              <br />
              Conditional Rendering,Geolocation API etc
            </CardItem>
            <div className="flex justify-between items-center mt-10">
              <CardItem
                translateZ={20}
                as={Link}
                href="https://bharatweatherapp.netlify.app/"
                target="__blank"
                className=" md:px-6 md:py-4  rounded-xl text-sm font-bold text-violet-500 md:text-white md:bg-violet-600 p-2 border-2 border-violet-500 mx-auto"
              >
                View Live App
              </CardItem>
              <CardItem
                translateZ={20}
                as={Link}
                href="https://github.com/BharateshPoojary/weather"
                target="__blank"
                className=" flex justify-evenly items-center px-4 py-3 md:px-6 md:py-4  rounded-xl md:bg-black dark:bg-white text-black md:text-white text-xs font-bold p-2 border-2 border-black mx-auto"
              >
                View Code On <Github />
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-violet-600 dark:text-white"
            >
              Movie Reviewer Platform
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/movie-reviewer.png"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="movie reviewer"
              />
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Built a dynamic web application using Vanilla JavaScript to
              explore the latest movies and access detailed stories about each
              movie. Included direct links to YouTube for trailers, reviews, and
              music, enhancing user engagement.
              <br />
              <br />
              <span className="text-violet-600 text-xl ">Highlights</span>
              <br />
              Local Storage,DOM manipulation etc
            </CardItem>
            <div className="flex justify-between items-center mt-10">
              <CardItem
                translateZ={20}
                as={Link}
                href="https://bharatmoviereviewer.netlify.app/"
                target="__blank"
                className=" md:px-6 md:py-4  rounded-xl text-sm font-bold text-violet-500 md:text-white md:bg-violet-600 p-2 border-2 border-violet-500 mx-auto"
              >
                View Live App
              </CardItem>
              <CardItem
                translateZ={20}
                as={Link}
                href="https://github.com/BharateshPoojary/moviereview"
                target="__blank"
                className=" flex justify-evenly items-center px-4 py-3 md:px-6 md:py-4  rounded-xl md:bg-black dark:bg-white text-black md:text-white text-xs font-bold p-2 border-2 border-black mx-auto"
              >
                View Code On <Github />
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-violet-600 dark:text-white"
            >
              Bharat Note App
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/note-app-image.png"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="bharat note app "
              />
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Developed a full-stack note-taking app using (MERN stack). Enabled
              users to add, read, edit, and delete notes with a clean and
              user-friendly interface.
              <br />
              <br />
              <span className="text-violet-600 text-xl ">Highlights</span>
              <br />
              Context API,JWT Token,bcryptjs,MongoDB Atlas,Netlify (AWS Lambda)
            </CardItem>
            <div className="flex justify-between items-center mt-10">
              <CardItem
                translateZ={20}
                as={Link}
                href="https://bharat-note-app.netlify.app/"
                target="__blank"
                className=" md:px-6 md:py-4  rounded-xl text-sm font-bold text-violet-500 md:text-white md:bg-violet-600 p-2 border-2 border-violet-500 mx-auto"
              >
                View Live App
              </CardItem>
              <CardItem
                translateZ={20}
                as={Link}
                href="https://github.com/BharateshPoojary/notebook-app"
                target="__blank"
                className=" flex justify-evenly items-center px-4 py-3 md:px-6 md:py-4  rounded-xl md:bg-black dark:bg-white text-black md:text-white text-xs font-bold p-2 border-2 border-black mx-auto"
              >
                View Code On <Github />
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>
    </>
  );
}
