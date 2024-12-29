"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import PreviewSection from "./PreviewSection";
import ShinyButton from "./ui/shiny-button";
import { TrustedSection } from "./TrustedSection";

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
        <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto tracking-wider leading-7">
          The AI-driven CRM that <b>automates lead engagement</b> and{" "}
          <b>transforms car dealerships</b> into sales machines. Let your sales
          team focus on what matters most &mdash; <b>closing deals</b> and{" "}
          <b>building relationships</b>.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
          <Input
            type="email"
            placeholder="Your email address..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="placeholder:text-gray-400 placeholder:font-light placeholder:text-base text-base md:text-base bg-gray-800 border-gray-700 text-gray-100 rounded-3xl w-full h-12 pl-5 md:basis-3/4"
          />
          <ShinyButton className="bg-white h-12 md:basis-1/4">Join</ShinyButton>
        </form>
      </header>
      <PreviewSection />
      <TrustedSection />
    </div>
  );
}
