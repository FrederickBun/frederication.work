"use client";
import { AlignLeft, AtSign, Facebook, Github, Link2, LinkedinIcon, Mail, MailQuestion, Twitter, Youtube, ArrowUpRight } from "lucide-react";
import { Navigation } from "../components/nav";
import AnimatedTitleWord from "@/app/components/framer-animation/animated-title-word";
import AnimatedDivider from "@/app/components/framer-animation/animated-divider";
import AnimatedText from "@/app/components/framer-animation/animated-text";
import Link from "next/link";
import React from "react";

export default async function ShowWorks() {
  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-24 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32 pb-16">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <AnimatedTitleWord className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Frederication
          </AnimatedTitleWord>
          <AnimatedText className="mt-4 text-zinc-400">
            My personal workspace. And you can call it "Oktica"
          </AnimatedText>
        </div>
        <div className="max-w-2xl mx-auto lg:mx-0">
          <AnimatedText className="text-zinc-400">
            My personal workspace. All of my open sorce projects are listed here.
          </AnimatedText>
          <br></br>
          <AnimatedText className="text-zinc-400">
            If you see "Oktica Innovation" or other "Oktica xxx", it means that I am the creator of the project.
          </AnimatedText>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="flex flex-row sm:grid gap-y-6 gap-x-8 text-base text-zinc-400 font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              <div
                className={
                  "group flex flex-row items-center justify-center.5 cursor-pointer hover:text-zinc-300 transition-all"
                }
              >
                <Link target="_blank" href="https://github.com/Frederication">
                  <Github
                    className={
                      "w-5 h-5 transition-all"
                    }
                  />
                </Link>
              </div>
              <div
                className={
                  "group flex flex-row items-center justify-center.5 cursor-pointer hover:text-zinc-300 transition-all"
                }
              >
                <Link target="_blank" href="mailto:seventeen@ohdragonboi.cn">
                  <Mail
                    className={
                      "w-5 h-5 transition-all"
                    }
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <AnimatedDivider className={"h-px bg-zinc-800"} />
        <div className="max-w-2xl mx-auto lg:mx-0">
          <AnimatedTitleWord className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            AlignPixel Developer Team
          </AnimatedTitleWord>
          <AnimatedText className="mt-4 text-zinc-400">
            The organization from China
          </AnimatedText>
        </div>
        <div className="max-w-2xl mx-auto lg:mx-0">
          <AnimatedText className="text-zinc-400">
            I'm the Co-Founder of AlignPixel. This is a Chinese organization that focuses on the development of open source projects.
          </AnimatedText>
          <br></br>
          <AnimatedText className="text-zinc-400">
            If you like our projects, please star our projects and follow us on Github, Thanks.
          </AnimatedText>
          <br></br>
          <AnimatedText className="text-zinc-400">
            I can't wait to tell you about our recently released new project: Pixel-Chat-App
          </AnimatedText>
          <AnimatedText className="text-zinc-400">
            If you want to get more information about this project, please click the link below.
          </AnimatedText>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="flex flex-row sm:grid gap-y-6 gap-x-8 text-base text-zinc-400 font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              <div
              className={
                  "group flex flex-row items-center justify-center.5 cursor-pointer hover:text-zinc-300 transition-all"
              }
              >
              <Link target="_blank" href="https://github.com/AlignPixel/Pixel-Chat-App">
                  The repository of Pixel-Chat-App
              </Link>
              <ArrowUpRight
                  className={
                  "w-5 h-5 transition-all"
                  }
              />
              </div>
              <div
                className={
                  "group flex flex-row items-center justify-center.5 cursor-pointer hover:text-zinc-300 transition-all"
                }
              >
                <Link target="_blank" href="https://github.com/Frederication">
                  <Github
                    className={
                      "w-5 h-5 transition-all"
                    }
                  />
                </Link>
              </div>
              <div
                className={
                  "group flex flex-row items-center justify-center.5 cursor-pointer hover:text-zinc-300 transition-all"
                }
              >
                <Link target="_blank" href="https://ohdragonboi.cn">
                  <Link2
                    className={
                      "w-5 h-5 transition-all"
                    }
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
