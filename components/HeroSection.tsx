"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import PreviewSection from "./PreviewSection";
import ShinyButton from "./ui/shiny-button";
import { TrustedSection } from "./TrustedSection";
import { BorderBeam } from "./ui/border-beam";

export default function HeroSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const demoSection = document.querySelector("#demo");
    demoSection?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div className="bg-gray-950 text-gray-200 min-h-screen">
      <Navbar />
      <header className="container mx-auto px-6 pt-36 2xl:pt-52 pb-20 md:pb-16 2xl:pb-24 text-center">
        <h1 className="text-center z-0 text-5xl md:text-7xl lg:text-[84px] 2xl:text-8xl font-black md:font-bold mb-5 uppercase tracking-wide leading-snug">
          <span className="inline bg-gradient-to-b from-gray-200 to-gray-400 text-transparent bg-clip-text">
            Automation that
            <br className="hidden md:inline" />{" "}
            <span className="inline bg-gradient-to-b from-blue-400 to-blue-600 text-transparent bg-clip-text">
              drives
            </span>{" "}
            sales.
          </span>
        </h1>

        <div className="max-w-xl 2xl:max-w-2xl mx-auto mb-8 2xl:mb-10">
          <p className="text-base md:text-lg lg:text-xl 2xl:text-2xl text-gray-400 tracking-wider leading-7 lg:leading-8">
            The AI-driven CRM that <b>automates lead engagement</b> and{" "}
            <b>transforms car dealerships</b> into sales machines.{" "}
            <br className="hidden md:flex lg:hidden" />
            Let your sales team focus on <b>closing more deals</b>.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-lg mx-auto px-4 md:px-0"
        >
          <div className="relative size-full md:basis-3/4 rounded-3xl">
            <Input
              type="email"
              placeholder="Your email address..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-center md:text-left placeholder:text-gray-400 placeholder:font-light placeholder:text-sm placeholder:md:text-base text-sm md:text-base text-gray-200 bg-gray-800 border-gray-700 rounded-3xl w-full h-10 md:h-12 pl-5"
            />
            <BorderBeam
              size={75}
              delay={4}
              colorFrom="#2563eb"
              colorTo="#60a5fa"
              borderWidth={1.5}
            />
          </div>
          <ShinyButton className="bg-gray-200 h-10 md:h-12 w-full md:basis-1/4">
            <span className="hidden md:inline">Join</span>
            <span className="inline md:hidden">Book a Demo</span>
          </ShinyButton>
        </form>
      </header>
      <PreviewSection />
      <TrustedSection />
    </div>
  );
}
