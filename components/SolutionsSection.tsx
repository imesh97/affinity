"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Solution {
  title: string;
  description: string;
  preview: React.ReactNode;
}

const solutions = [
  {
    title: "Maximize every opportunity.",
    description:
      "Free your sales team to focus on closing deals, while our AI instantly engages and qualifies 100% of inquiries, boosting lead conversion rates by 35%.",
    preview: (
      <div className="max-w-md mx-auto mt-6 lg:mt-0 space-y-4 bg-gray-900/50 p-4 lg:p-6 rounded-xl backdrop-blur-sm border border-none shadow-md">
        <div className="flex items-center gap-3 p-2 hover:bg-gray-800/50 rounded-md transition-colors cursor-pointer">
          <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
            <svg
              className="w-4 h-4 text-gray-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M3 9h18" />
            </svg>
          </div>
          <div className="w-full">
            <div className="font-medium text-gray-200/95">
              Live Inquiry &mdash; Website
            </div>
            <div className="text-sm text-gray-400">
              Looking at your inventory right now, hoping to...
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 p-2 hover:bg-gray-800/50 rounded-md transition-colors cursor-pointer">
          <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
            <svg
              className="w-4 h-4 text-gray-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <div className="w-full">
            <div className="font-medium text-gray-200/95">
              David Miller &mdash; Facebook
            </div>
            <div className="text-sm text-gray-400">
              Been following your posts. Really interested in...
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 p-2 hover:bg-gray-800/50 rounded-md transition-colors cursor-pointer">
          <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
            <svg
              className="w-4 h-4 text-gray-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div className="w-full">
            <div className="font-medium text-gray-200/95">
              Lead &mdash; AutoTrader
            </div>
            <div className="text-sm text-gray-400">
              Hi there, saw your listing for the 2023 Camry a...
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Never miss a hot lead.",
    description:
      "Cut response time from 3 hours to <1 minute. Our AI identifies and responds to your hottest prospects before competition even sees the lead.",
    preview: (
      <div className="space-y-4 p-6 text-left">
        <div className="flex gap-3 items-start">
          <div className="w-8 h-8 rounded-full bg-gray-800 flex-shrink-0 shadow-md" />
          <div className="bg-gray-800/50 backdrop-blur-sm border border-none rounded-lg py-2 px-3 max-w-[80%] shadow-md">
            <p className="text-sm text-gray-300">
              Hey I saw the white BMW X5 online. Can I schedule a test drive for
              tomorrow afternoon?
            </p>
          </div>
        </div>
        <div className="flex gap-3 items-start justify-end">
          <div className="bg-blue-600 rounded-lg py-2 px-3 max-w-[80%] shadow-md">
            <p className="text-sm text-gray-200/95">
              Hi, thanks for your interest in the X5! Let me check its
              availability. I&apos;ll get back to you right away with some time
              slots that work best for you tomorrow afternoon.
            </p>
          </div>
          <div className="w-8 h-8 rounded-full bg-blue-500/20 flex-shrink-0 shadow-md" />
        </div>
      </div>
    ),
  },
  {
    title: "Build your sales machine.",
    description:
      "Scale your success with AI that manages leads 24/7, increasing callback rates by 55% and keeping your pipeline full.",
    preview: (
      <div className="space-y-4 p-6 text-left">
        <div className="flex gap-3 items-start justify-end">
          <div className="bg-blue-600 rounded-lg py-2 px-3 max-w-[80%] shadow-md">
            <p className="text-sm text-gray-200/95">
              Hey this is Jerry reaching back out because it is time for your
              test drive. Does this Thursday at 1pm work?
            </p>
          </div>
          <div className="w-8 h-8 rounded-full bg-blue-500/20 flex-shrink-0 shadow-md" />
        </div>
        <div className="flex gap-3 items-start">
          <div className="w-8 h-8 rounded-full bg-gray-800 flex-shrink-0 shadow-md" />
          <div className="bg-gray-800/50 backdrop-blur-sm border-none rounded-lg py-2 px-3 max-w-[80%] shadow-md">
            <p className="text-sm text-gray-300">
              Hey Jerry. Yes that time works
            </p>
          </div>
        </div>
      </div>
    ),
  },
];

const SolutionsCard = ({
  solution,
  isActive,
  onMouseEnter,
  onClick,
  isExpanded,
  isMobile,
}: {
  solution: Solution;
  isActive: boolean;
  onMouseEnter: () => void;
  onClick: () => void;
  isExpanded: boolean;
  isMobile: boolean;
}) => {
  return (
    <Card
      className={`bg-transparent border-none transition-all duration-500 hover:bg-gray-900/50 group relative ${
        isActive
          ? "transition-all bg-gray-900/50 ring-1 ring-gray-800 cursor-pointer ease-in-out"
          : ""
      }`}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
    >
      <CardHeader
        className={`transition-colors ${
          isActive ? "text-gray-200" : "text-gray-300"
        }`}
      >
        <CardTitle className="text-2xl font-semibold">
          {solution.title}
        </CardTitle>
        {/* <Button
          variant="ghost"
          className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Book a Demo
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button> */}
      </CardHeader>
      <CardContent>
        <p className="text-gray-400">{solution.description}</p>
        {isMobile && isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 lg:mt-8 max-w-xl mx-auto"
          >
            {solution.preview}
          </motion.div>
        )}
      </CardContent>
    </Card>
  );
};

export default function SolutionsSection() {
  const [activeSolution, setActiveSolution] = useState(0);
  const [expandedSolution, setExpandedSolution] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    if (isMobile) setActiveSolution(-1);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isHovered && !isMobile) {
      intervalRef.current = setInterval(() => {
        setActiveSolution((prev) => (prev + 1) % solutions.length);
      }, 3000);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovered, isMobile]);

  const handleCardClick = (index: number) => {
    if (isMobile) {
      setExpandedSolution(expandedSolution === index ? null : index);
      setActiveSolution(-1);
      setActiveSolution(index);
    }
  };

  const handleSolutionPositon = (index: number) => {
    if (index == 0) return "items-start pt-10";
    else if (index == 1) return "items-center";
    return "items-end pb-8";
  };

  return (
    <div
      className="bg-gradient-to-b from-gray-950 to-gray-950/[98%] to-75% pt-4 pb-12 md:pt-20 lg:pb-20 2xl:pt-20"
      id="solutions"
    >
      <div className="container max-w-5xl 2xl:max-w-6xl mx-auto px-6 md:px-12 lg:px-8">
        {/* <h2 className="text-center text-blue-500 font-semibold mb-4">
          INTRODUCING AFFINITY.AI
        </h2> */}
        <h2 className="text-[42px] 2xl:text-5xl font-bold text-center mb-4 2xl:mb-6 text-gray-200">
          Stop <span className="inline text-blue-500">Losing</span> Leads,{" "}
          <br className="hidden sm:flex lg:hidden" />
          Start <span className="inline text-blue-500">Closing</span> Deals.
        </h2>
        <p className="text-lg lg:text-xl text-center text-gray-400 tracking-wide leading-7 lg:leading-8 mb-12 lg:mb-16 max-w-2xl 2xl:max-w-3xl mx-auto mt-4 md:mt-0 px-4 md:px-0">
          Take your dealership&apos;s performance to the next level with a
          solution that turns <b>cold leads</b> into <b>warm prospects,</b> and{" "}
          <b>prospects</b> into <b>satisfied customers</b>.
        </p>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div
            className="space-y-8 lg:space-y-6 mx-auto max-w-2xl lg:max-w-full lg:mx-0 text-center lg:text-left"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {solutions.map((feature, index) => (
              <SolutionsCard
                key={index}
                solution={feature}
                isActive={activeSolution === index}
                onMouseEnter={() => !isMobile && setActiveSolution(index)}
                onClick={() => handleCardClick(index)}
                isExpanded={expandedSolution === index}
                isMobile={isMobile}
              />
            ))}
          </div>
          {!isMobile && (
            <div className="hidden lg:block relative h-[500px]">
              <AnimatePresence mode="wait">
                <motion.div
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  key={activeSolution}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className={`absolute inset-0 flex justify-center ${handleSolutionPositon(
                    activeSolution
                  )}`}
                >
                  {solutions[activeSolution].preview}
                </motion.div>
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
