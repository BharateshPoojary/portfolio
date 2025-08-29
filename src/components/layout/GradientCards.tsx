"use client";
import React, { useState } from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import Image from "next/image";
import Link from "next/link";
import { Github } from "lucide-react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import { useToggleThemeStore } from "@/store/sidebarStore";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
const GradientCards = () => {
  const { CurrentTheme } = useToggleThemeStore();
  const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({})
  const expressImageSrc =
    CurrentTheme === "dark" ? "/Express-white.png" : "/Express.png";
  const nextjsImageSrc =
    CurrentTheme === "dark" ? "/nextjs-white.png" : "/Next.js.png";
  const toggleExpanded = (id: number) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }))
  }
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
    demoLink?: string;
    githubLink: string;
    techStacks: TechStack[];
  }
  const projects: ProjectsType[] = [
    {
      id: 1,
      title: "Anonytalks",
      src: "/bharat-snaptalk.png",
      alt: "bharat snaptalk app",
      description: `Anonytalks is a social media platform built with Next.js and TypeScript, allowing users to receive text, images, and videos from others by sending the unique links provided to them . The app features AWS S3 integration for secure file storage. Authentication is handled using NextAuth.js and bcrypt.js. Deployed on an AWS EC2 instance for scalability and performance`,
      majorConcepts: "TypeScript, Next.js ,ShadCN UI ,AWS S3,EC2, NextAuth.js",
      techStacks: [
        { id: 1, name: "Next.js", image: nextjsImageSrc },
        { id: 2, name: "Typescript", image: "/TypeScript.png" },
        { id: 3, name: "AWS", image: "/aws.jpg" },
        { id: 4, name: "NextAuth.js", image: "/nextauth.png" },
        { id: 5, name: "ShadCN UI", image: "/shadcn.png" },
      ],
      demoLink: "https://anonytalks.co.in/",
      githubLink: "https://github.com/BharateshPoojary/feedback-app",
    },
    {
      id: 2,
      title: "LLM based ChatBot",
      src: "/bharat-llm-model.png",
      alt: "bharat llm based chatbot",
      description: `Developed an LLM-powered chatbot using Next.js and TypeScript, integrated with Google Gemini AI via LangChain for natural language processing and also used vercel AI SDK for efficient integration with LLM .Utilized Pinecone for vector storage and fast similarity search to enable contextual conversations.Enabled PDF parsing and interaction using pdf-parse,allowing the chatbot to extract and process information from uploaded documents also used Clerk for seamless authentication`,
      majorConcepts:
        "GeminiAI ,Langchain ,Pinecone ,TypeScript ,Next.js ,ShadCN UI , Clerk",
      techStacks: [
        { id: 1, name: "Gemini AI", image: "/gemini-logo.webp" },
        { id: 2, name: "Langchain", image: "/langchain.jpg" },
        { id: 3, name: "Next.js", image: nextjsImageSrc },
        { id: 4, name: "Pinecone DB", image: "/pinecone.png" },
        { id: 5, name: "Clerk ", image: "/Clerk.jpg" },
      ],
      demoLink: "https://pdf-summarizer.anonytalks.co.in",
      githubLink: "https://github.com/BharateshPoojary/llm-model",
    },
    // {
    //   id: 3,
    //   title: "My Portfolio",
    //   src: "/bharat-portfolio.png",
    //   alt: "my Portfolio",
    //   description: `Built with Next.js, TypeScript, Tailwind CSS, and Aceternity UI, this portfolio is a showcase of my skills in full-stack development using the MERN stack. It features a sleek, responsive design with smooth UI interactions, highlighting my expertise in React, Node.js, Express, and MongoDB. I have also used Resend for sending the messages of users. `,
    //   majorConcepts: "TypeScript, Next.js and libraries like Aceternity UI",
    //   techStacks: [
    //     { id: 1, name: "Next.js", image: nextjsImageSrc },
    //     { id: 2, name: "Typescript", image: "/TypeScript.png" },
    //     { id: 3, name: "Tailwind", image: "/TailwindCSS.png" },
    //     { id: 4, name: "Aceternity", image: "/Aceternity.png" },
    //     { id: 5, name: "zustand", image: "/zustand.png" },
    //     { id: 6, name: "Resend", image: "/Resend.jpg" },
    //   ],
    //   demoLink: "https://bharatesh-portfolio.vercel.app/",
    //   githubLink: "https://github.com/BharateshPoojary/portfolio",
    // },
    {
      id: 4,
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
      id: 5,
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
        <div className="grid  [@media_(min-width:900px)]:grid-cols-3  [@media_(min-width:611px)]:grid-cols-2 grid-cols-1   gap-4 ">
          {projects.map((eachproject) => (
            <BackgroundGradient key={eachproject.id} >
              <Card
                className={cn(
                  "w-full rounded-xl border transition-shadow h-fit",
                  CurrentTheme === "dark" ? "bg-black/90 border-white/15 hover:shadow-xl" : "bg-white border-black/10 hover:shadow-lg",
                )}
              >
                <CardHeader className="p-5 pb-3">
                  <h3 className={cn("text-balance text-lg md:text-xl font-semibold", CurrentTheme === "dark" ? "text-white" : "text-gray-900")}>
                    {eachproject.title}
                  </h3>
                </CardHeader>

                <CardContent className="px-5 pb-4">
                  <div className="overflow-hidden rounded-lg">
                    <Image
                      src={eachproject.src || "/placeholder.svg?height=600&width=1200&query=project%20screenshot"}
                      width={1200}
                      height={600}
                      alt={eachproject.alt || "Project preview"}
                      className="h-fit w-fit object-contain"
                    />
                  </div>

                  {/* Description with 'show more/less' */}
                  <p
                    className={cn("mt-3 text-sm leading-relaxed", CurrentTheme === "dark" ? "text-neutral-300" : "text-neutral-800")}
                  >
                    {expanded[eachproject.id] ? eachproject.description : `${eachproject.description.slice(0, 120)}... `}

                    <Button
                      onClick={() => toggleExpanded(eachproject.id)}
                      variant={"ghost"}
                      className={cn(
                        "font-semibold  ",
                        CurrentTheme === "dark" ? "text-violet-300 hover:bg-black hover:text-violet-400" : "text-violet-700 ",
                      )}
                    >
                      {expanded[eachproject.id] ? "show less" : "show more"}
                    </Button>
                  </p>

                  {/* Tools & Tech */}
                  <section className="mt-4">
                    <div className={cn("text-sm font-medium", CurrentTheme === "dark" ? "text-neutral-200" : "text-neutral-900")}>
                      Tools and Tech Stack
                    </div>
                    <div className="flex mt-2">
                      <AnimatedTooltip items={eachproject.techStacks} />
                    </div>
                  </section>
                </CardContent>

                <CardFooter >
                  {/* Responsive actions:
            - mobile: full-width stacked with gaps
            - sm+: two columns with equal width
            - md+: align nicely with natural width
        */}
                  <div className="w-full">
                    <div className="grid gap-3 sm:grid-cols-2 md:flex md:items-center md:justify-start">
                      {eachproject.demoLink && (
                        <Button
                          variant={"ghost"}
                          className={cn(
                            "font-semibold underline-offset-4 hover:bg-slate-100",
                            CurrentTheme === "dark" ? "text-violet-300 hover:bg-black hover:text-violet-400" : "text-violet-700",
                          )}
                        >
                          <Link href={eachproject.demoLink} target="_blank" rel="noreferrer noopener" aria-label="Open live app">
                            View Live App
                          </Link>
                        </Button>
                      )}

                      <Button
                        asChild
                        variant={CurrentTheme === "dark" ? "secondary" : "outline"}
                        className={cn(
                          "w-full sm:w-full md:w-auto font-semibold",
                          CurrentTheme === "dark" ? "bg-white text-black hover:bg-white/90" : "",
                        )}
                      >
                        <Link
                          href={eachproject.githubLink}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="flex items-center justify-center gap-2"
                          aria-label="Open GitHub repository"
                        >
                          <Github className="h-4 w-4" aria-hidden="true" />
                          <span>View Code</span>
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </BackgroundGradient>
          ))}
        </div>
      </div>
    </div >
  );
};

export default GradientCards;
