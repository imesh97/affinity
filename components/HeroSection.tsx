"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import PreviewSection from "./PreviewSection";

export default function HeroSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle the waitlist join logic here
    console.log("Joining waitlist with email:", email);
  };

  return (
    <div className="bg-gray-950 text-gray-200 min-h-screen">
      <Navbar />
      <header className="container mx-auto px-4 pt-40 pb-20 text-center">
        {/* <div className="inline-flex items-center bg-gray-800 rounded-full px-4 py-2 mb-8">
          <span className="text-xs font-semibold bg-blue-500 text-white rounded-full px-2 py-1 mr-2">
            New
          </span>
          <span className="text-sm mr-2">Introducing an AI Editor</span>
          <ArrowRight size={16} />
        </div> */}
        <h1 className="text-7xl md:text-8xl font-bold mb-6">
          <span className="bg-gradient-to-b from-white to-gray-400 text-transparent bg-clip-text">
            Automation that
            <br /> <span className="bg-clip-border text-blue-500">
              drives
            </span>{" "}
            sales.
          </span>
        </h1>
        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          The AI-driven CRM that <b>automates lead engagement</b> and{" "}
          <b>transforms car dealerships</b> into sales machines. Give your sales
          team the edge they need to <b>close more deals</b>.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Email Address..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-800 border-gray-700 text-white"
          />
          <Button type="submit" className="w-full md:w-auto">
            Join Waitlist
          </Button>
        </form>
      </header>
      <PreviewSection />
    </div>
  );
}
