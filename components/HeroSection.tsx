"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import PreviewSection from "./PreviewSection";
import ShinyButton from "./ui/shiny-button";
import { TrustedSection } from "./TrustedSection";
import { BorderBeam } from "./ui/border-beam";
import BlurFade from "./ui/blur-fade";

export default function HeroSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Joining waitlist with email:", email);
  };

  return (
    <div className="bg-gray-950 text-gray-200 min-h-screen">
      <Navbar />
      <header className="container mx-auto px-4 pt-40 pb-16 text-center">
        <h1 className="text-7xl md:text-8xl font-bold mb-6">
          <span className="bg-gradient-to-b from-white to-gray-400 text-transparent bg-clip-text">
            Automation that
            <br />{" "}
            <span className="bg-gradient-to-b from-blue-500 to-blue-600 text-transparent bg-clip-text">
              drives
            </span>{" "}
            sales.
          </span>
        </h1>
        <BlurFade
          delay={0.2}
          direction="up"
          inView
          className="max-w-xl mx-auto mb-8">
          <p className="text-xl text-gray-400 tracking-wider leading-8">
            The AI-driven CRM that <b>automates lead engagement</b> and{" "}
            <b>transforms car dealerships</b> into sales machines. Let your
            sales team focus on <b>closing more deals</b>.
          </p>
        </BlurFade>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
          <BlurFade
            delay={0.4}
            direction="up"
            inView
            className="relative size-full md:basis-3/4 rounded-3xl">
            <Input
              type="email"
              placeholder="Your email address..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="placeholder:text-gray-400 placeholder:font-light placeholder:text-base text-base md:text-base text-gray-200 bg-gray-800 border-gray-700 rounded-3xl w-full h-12 pl-5"
            />
            <BorderBeam
              size={75}
              delay={4}
              colorFrom="#2563eb"
              colorTo="#60a5fa"
              borderWidth={1.5}
            />
          </BlurFade>

          <BlurFade delay={0.6} direction="up" inView className="md:basis-1/4">
            <ShinyButton className="bg-gray-100 h-12 md:basis-1/4">
              Join
            </ShinyButton>
          </BlurFade>
        </form>
      </header>
      <PreviewSection />
      <TrustedSection />
    </div>
  );
}
