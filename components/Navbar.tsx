"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Gem } from "lucide-react";
import { navLinks } from "@/constants";
import ShimmerButton from "./ui/shimmer-button";
import { scrollToTop } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-950/90 backdrop-blur-sm shadow-xl"
          : "bg-transparent"
      }`}>
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center space-x-2"
          scroll={false}
          onClick={(e) => scrollToTop(e)}>
          <Gem className="w-8 h-8 text-blue-500" />
          <span className="text-xl font-bold text-white">affinity.ai</span>
        </Link>
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={`#${link.href}`}
                scroll={true}
                className="text-gray-300 hover:text-blue-400 font-medium tracking-wide transition-colors">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <ShimmerButton
          type="submit"
          className="w-full md:w-auto font-bold tracking-widest text-gray-100 uppercase"
          background="#3b82f6"
          borderRadius="10px"
          shimmerSize="0.1em">
          Book a Demo
        </ShimmerButton>
      </div>
    </nav>
  );
}
