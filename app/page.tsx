import React from "react";
import Particles from "./components/particles";
import HomeTitle from "@/app/components/home-title";
import CursorLink from "@/app/components/cursor-link";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
  { name: "Works", href: "/works" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "https://www.setbun.com" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-8 sm:my-16 animate-fade-in">
        <div className="flex flex-row items-center justify-center gap-5">
          {navigation.map((item) => (
            <CursorLink
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </CursorLink>
          ))}
        </div>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <HomeTitle className="select-none text-center z-10 text-5xl text-transparent duration-700 bg-white cursor-default animate-title text-edge-outline font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        frederick.css
      </HomeTitle>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="hidden sm:block my-16 text-center animate-fade-in">
        <h2 className="px-8 text-sm text-zinc-500 select-none">
          Hi, my name is <span className={"font-bold"}>Frederick Chen</span>. I'm a
          frontend developer and also an OI player.
          <div className={"mt-1"}>
            I'm a student currently studying in{" "}
            <span className={"underline underline-offset-1"}>Chongqing</span>, China.
          </div>
        </h2>
      </div>
      <div
        id={"mobile desc"}
        className="block sm:hidden my-8 text-center animate-fade-in"
      >
        <h2 className="px-8 text-sm text-zinc-500 ">
          Hi, my name is <span className={"font-bold"}>Frederick Chen</span>. I'm a
          frontend developer and also an OI player.
          <div className={"mt-2"}>
            I'm a student currently studying in{" "}
            <span className={"underline underline-offset-1"}>Chongqing</span>, China.
          </div>
        </h2>
      </div>
    </div>
  );
}
