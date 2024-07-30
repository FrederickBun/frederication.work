"use client";
import { AlignLeft, AtSign, Facebook, Github, Link2, LinkedinIcon, Mail, MailQuestion, Twitter, Youtube, ArrowUpRight } from "lucide-react";
import { Navigation } from "../components/nav";
import AnimatedTitleWord from "@/app/components/framer-animation/animated-title-word";
import AnimatedDivider from "@/app/components/framer-animation/animated-divider";
import AnimatedText from "@/app/components/framer-animation/animated-text";
import Link from "next/link";
import React from "react";

export default async function AboutPage() {
  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-24 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32 pb-16">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <AnimatedTitleWord className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            About
          </AnimatedTitleWord>
          <AnimatedText className="mt-4 text-zinc-400">
            The introduction of my self.
          </AnimatedText>
        </div>
        <AnimatedDivider className={"h-px bg-zinc-800"} />
        <div className="max-w-2xl mx-auto lg:mx-0">
          <AnimatedText className="text-zinc-400">
            Hello there! I'm Frederick Chen, a student from Chongqing, China. I'm a OI player, and I'm currently a front-end developer. 
          </AnimatedText>
          <br></br>
          <AnimatedText className="text-zinc-400">
            In my spare time, I'll make some interesting projects. And I also develop with my friends, because I think it's fun.
          </AnimatedText>
          <br></br>
          <AnimatedText className="text-zinc-400">
            If you want to contact me, you can visit the Contact Page.
          </AnimatedText>
          <AnimatedText className="text-zinc-400">
            For more information about my projects, please visit my Github profile.
          </AnimatedText>
          <br></br>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="flex flex-row sm:grid gap-y-6 gap-x-8 text-base text-zinc-400 font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              
              <div
                className={
                  "group flex flex-row items-center justify-center.5 cursor-pointer hover:text-zinc-300 transition-all"
                }
              >
                <Link target="_blank" href="/contact">
                  Contact Page
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
                <Link target="_blank" href="https://setbun.com">
                  Buntalk(Blog)
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
                <Link target="_blank" href="https://github.com/FrederickBun">
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
              <div
                className={
                  "group flex flex-row items-center justify-center.5 cursor-pointer hover:text-zinc-300 transition-all"
                }
              >
                <Link target="_blank" href="https://x.com/FrederickAsYou">
                  <Twitter
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
