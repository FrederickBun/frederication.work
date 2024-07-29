"use client";
import { AlignLeft, AtSign, Facebook, Github, Link2, LinkedinIcon, Mail, MailQuestion, Twitter, Youtube } from "lucide-react";
import { Navigation } from "../components/nav";
import AnimatedTitleWord from "@/app/components/framer-animation/animated-title-word";
import AnimatedDivider from "@/app/components/framer-animation/animated-divider";
import AnimatedText from "@/app/components/framer-animation/animated-text";
import React from "react";

export default function Example() {
  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-24 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32 pb-16">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <AnimatedTitleWord className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            About
          </AnimatedTitleWord>
          <AnimatedText className="mt-4 text-zinc-400">
            The introduce of myself.
          </AnimatedText>
        </div>
      </div>
    </div>
  );
}
