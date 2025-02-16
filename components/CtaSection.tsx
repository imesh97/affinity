"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import ShinyButton from "./ui/shiny-button";

export default function CtaSection() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(`Submitted: ${name}, ${company}, ${phone}, ${email}`);
    setName("");
    setCompany("");
    setPhone("");
    setEmail("");
  };

  return (
    <section
      className="bg-gray-950 pt-12 pb-28 md:pt-16 lg:pb-36 2xl:pt-16"
      id="demo"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-[42px] 2xl:text-5xl font-bold text-center mb-4 2xl:mb-6 text-gray-200">
            Ready to <span className="inline text-blue-500">Transform</span>{" "}
            Your Sales Team?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl 2xl:max-w-3xl mx-auto mb-10 2xl:mb-12 px-4 md:px-0 leading-7 lg:leading-8">
            It&apos;s time to give them an <b>unfair advantage</b>. Schedule a{" "}
            <b>personalized demo</b> and see the future of automotive sales.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-col items-center justify-center gap-4 max-w-xl mx-auto px-4 md:px-0"
          >
            <div className="relative size-full rounded-[150px]">
              <Input
                type="text"
                placeholder="Your full name..."
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mb-4 text-center md:text-left placeholder:text-gray-400 placeholder:font-light placeholder:text-base placeholder:md:text-lg text-base md:text-lg text-gray-200 bg-gray-800 border-gray-700 rounded-[150px] w-full h-12 md:h-16 pl-5"
              />
              <Input
                type="text"
                placeholder="Your company name..."
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="mb-4 text-center md:text-left placeholder:text-gray-400 placeholder:font-light placeholder:text-base placeholder:md:text-lg text-base md:text-lg text-gray-200 bg-gray-800 border-gray-700 rounded-[150px] w-full h-12 md:h-16 pl-5"
              />
              <Input
                type="text"
                placeholder="Your phone number..."
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mb-4 text-center md:text-left placeholder:text-gray-400 placeholder:font-light placeholder:text-base placeholder:md:text-lg text-base md:text-lg text-gray-200 bg-gray-800 border-gray-700 rounded-[150px] w-full h-12 md:h-16 pl-5"
              />
              <Input
                type="email"
                placeholder="Your email address..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mb-4 text-center md:text-left placeholder:text-gray-400 placeholder:font-light placeholder:text-base placeholder:md:text-lg text-base md:text-lg text-gray-200 bg-gray-800 border-gray-700 rounded-[150px] w-full h-12 md:h-16 pl-5"
              />
              {/*<BorderBeam
                size={75}
                delay={4}
                colorFrom="#2563eb"
                colorTo="#60a5fa"
                borderWidth={1.5}
              />
               <BorderBeam
              size={75}
              delay={4}
              colorFrom="#2563eb"
              colorTo="#60a5fa"
              borderWidth={1.5}
            /> */}
            </div>
            <ShinyButton className="bg-gray-200 h-12 md:h-16 w-full rounded-[150px]">
              <span className="hidden md:inline xl:hidden">Book</span>
              <span className="inline md:hidden xl:inline">Book a Demo</span>
            </ShinyButton>
            {/* <ShimmerButton
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-gray-200 font-semibold py-2 px-6 rounded-md transition-all duration-300"
            >
              Book a Demo
            </ShimmerButton> */}
          </form>
          {/*           <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 flex-grow"
            />
            <ShimmerButton
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-gray-200 font-semibold py-2 px-6 rounded-md transition-all duration-300"
            >
              Book a Demo
            </ShimmerButton>
          </form> */}
        </div>
      </div>
    </section>
  );
}
