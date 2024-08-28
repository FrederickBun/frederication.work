"use client";
import { AlignLeft, AtSign, Facebook, Github, Link2, LinkedinIcon, Mail, MailQuestion, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import React from "react";

const socials = [
  {
    icon: <Twitter size={20} />,
    href: "https://twitter.com/FrederickBun",
    label: "twitter",
    handle: "@FrederickBun",
  },
  {
    icon: <AtSign size={20} />,
    href: "mailto:seventeen@ohdragonboi.cn",
    label: "email",
    handle: "seventeen",
  },
  {
    icon: <Github size={20} />,
    href: "https://github.com/FrederickBun",
    label: "github",
    handle: "/FrederickBun",
  },
  {
    icon: <Facebook size={20} />,
    href: "https://www.facebook.com/FrederickAsYou",
    label: "facebook",
    handle: "@FrederickAsYou",
  },
  {
    icon: <Youtube size={20} />,
    href: "https://www.youtube.com/@Fredgg0017",
    label: "youtube",
    handle: "@Fredgg0017",
  },
  {
    icon: <AlignLeft size={20} />,
    href: "https://setbun.com",
    label: "blog",
    handle: "Buntalk",
  },
];

export default function Example() {
  return (
    <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="container pt-24 flex items-center justify-center min-h-screen px-4 mx-auto md:!max-w-7xl">
        <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-18 sm:mt-0 md:grid-cols-3 lg:gap-12">
          {socials.map((s, index) => (
            <Card key={index} delay={index * 0.15}>
              <Link
                href={s.href}
                target="_blank"
                className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
              >
                <span
                  className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                  aria-hidden="true"
                />
                <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                  {s.icon}
                </span>{" "}
                <div className="z-10 flex flex-col items-center">
                  <span className="text-xl font-medium duration-150 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
                    {s.handle}
                  </span>
                  <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                    {s.label}
                  </span>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
