import { useToggleThemeStore } from "@/store/sidebarStore";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Contact = () => {
  const { CurrentTheme } = useToggleThemeStore();
  const githubImageSrc =
    CurrentTheme === "dark" ? "/github-white.png" : "/Github.png";
  const SocialHandle = [
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
      image: githubImageSrc,
      src: "https://github.com/BharateshPoojary",
    },
  ];
  return (
    <div>
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-4xl md:text-6xl mb-4 text-violet-500 dark:text-white max-w-4xl">
          Contact
        </h2>
        <div className="flex flex-row items-center justify-center ">
          <div className="text-2xl md:text-4xl mb-4 max-w-4xl text-center  ">
            Lets&apos;s connect and create something great!
          </div>
        </div>
        <div className="flex flex-row items-center justify-center space-x-5 mb-10 w-full cursor-pointer">
          {SocialHandle.map((eachsocialhandle) => (
            <Link key={eachsocialhandle.id} href={eachsocialhandle.src}>
              <Image
                height="1000"
                width="1000"
                src={eachsocialhandle.image}
                alt={eachsocialhandle.name}
                className="object-cover !m-0 !p-0 object-top rounded-md sm:h-14 sm:w-14 h-12 w-12  group-hover:scale-105 group-hover:z-30   relative transition duration-500"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
