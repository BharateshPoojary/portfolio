"use client";
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import Image from "next/image";
import Link from "next/link";
import { Github } from "lucide-react";
const GradientCards = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-4xl md:text-6xl mb-4 text-violet-500 dark:text-white max-w-4xl">
          Projects
        </h2>
      </div>
      <div className="grid  [@media_(min-width:1534px)]:grid-cols-3  [@media_(min-width:1016px)]:grid-cols-2 grid-cols-1   gap-4 px-3">
        <BackgroundGradient className="rounded-[22px] w-fit">
          <div>
            <div className="bg-gray-50    dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <div className="text-xl font-bold text-violet-600 dark:text-white">
                Bharat Weather App
              </div>

              <Image
                src="/weather-app.png"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="weatherapp"
              />

              <div className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                Users can access their current location weather data such as
                temperature,humidity,wind speed etc. Users can also access other
                cities weather data through the search bar provided in the
                website.
                <br />
                <br />
                <span className="text-violet-600 text-xl ">Highlights</span>
                <br />
                Conditional Rendering,Geolocation API etc
              </div>
              <div className="flex justify-between items-center mt-10">
                <Link
                  href="https://bharatweatherapp.netlify.app/"
                  target="__blank"
                  className=" md:px-6 md:py-4  rounded-xl text-sm font-bold text-violet-500 md:text-white md:bg-violet-600 p-2 border-2 border-violet-500 mx-auto"
                >
                  View Live App
                </Link>
                <Link
                  href="https://github.com/BharateshPoojary/weather"
                  target="__blank"
                  className=" flex justify-evenly items-center px-4 py-3 md:px-6 md:py-4  rounded-xl md:bg-black dark:bg-white text-black md:text-white text-xs font-bold p-2 border-2 border-black mx-auto"
                >
                  View Code On <Github />
                </Link>
              </div>
            </div>
          </div>
        </BackgroundGradient>
      </div>
    </div>
  );
};

export default GradientCards;
