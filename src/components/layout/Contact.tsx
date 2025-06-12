"use client";

import { useToggleThemeStore } from "@/store/sidebarStore";
import Image from "next/image";
import Link from "next/link";
import { contactSchema } from "@/schema/contact-schema";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import type { z } from "zod";
import { Textarea } from "../ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MessageCircle, Send } from "lucide-react";
import { BackgroundGradient } from "../ui/background-gradient";

const Contact = () => {
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      userName: "",
      message: "",
    },
  });

  const { CurrentTheme } = useToggleThemeStore();
  const githubImageSrc =
    CurrentTheme === "dark" ? "/github-white.png" : "/GitHub.png";

  const SocialHandle = [
    {
      id: 1,
      name: "Gmail",
      image: "/Gmail.webp",
      src: "mailto:bharateshpoojari@gmail.com",
      description: "bharateshpoojari@gmail.com",
    },
    {
      id: 2,
      name: "Linkedin",
      image: "/LinkedIn.png",
      src: "https://linkedin.com/in/bharatesh-poojary",
      description: "Connect on LinkedIn",
    },
    {
      id: 3,
      name: "Github",
      image: githubImageSrc,
      src: "https://github.com/BharateshPoojary",
      description: "Follow on GitHub",
    },
  ];

  const onSubmit = (data: z.infer<typeof contactSchema>) => {
    console.log("Data", data);
    //api call to do
  };

  return (
    <section
      className={`min-h-screen  ${
        CurrentTheme === "dark" ? "bg-dark " : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 dark:bg-violet-900/20 text-violet-600 dark:text-violet-400 text-sm font-medium mb-6">
            <MessageCircle className="w-4 h-4" />
            Get In Touch
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
            Contact
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Let&apos;s connect and create something{" "}
            <span className="text-violet-600 dark:text-violet-400 font-semibold">
              great
            </span>{" "}
            together!
          </p>
        </div>

        {/* Social Links Section */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-6">
            {SocialHandle.map((social) => (
              <Link
                key={social.id}
                href={social.src}
                className="group relative"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card className="w-48 h-24 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-violet-200 dark:hover:border-violet-800">
                  <CardContent className="flex items-center gap-4 p-4 h-full">
                    <div className="relative">
                      <Image
                        height={40}
                        width={40}
                        src={social.image || "/placeholder.svg"}
                        alt={social.name}
                        className="object-cover rounded-lg group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-sm text-foreground">
                        {social.name}
                      </h4>
                      <p className="text-xs text-muted-foreground truncate">
                        {social.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="max-w-2xl  mx-auto">
          <BackgroundGradient className="rounded-[22px] ">
            <Card className="shadow-2xl border-0 w-full">
              <CardHeader className="text-center pb-8 ">
                <div className="mx-auto w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold">
                  Send me a message
                </CardTitle>
                <p className="text-muted-foreground">
                  I&apos;ll get back to you as soon as possible
                </p>
              </CardHeader>

              <CardContent className="space-y-6">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <FormField
                      control={form.control}
                      name="userName"
                      render={({ field }) => (
                        <FormItem className="space-y-2">
                          <FormLabel className="text-sm font-medium text-foreground">
                            Your Name
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your name"
                              className="h-12 border-2 focus:border-violet-500 transition-colors"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem className="space-y-2">
                          <FormLabel className="text-sm font-medium text-foreground">
                            Your Message
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell me about your project or just say hello..."
                              className="min-h-32 border-2 focus:border-violet-500 transition-colors resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full h-12 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-semibold transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </BackgroundGradient>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
