"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Gem } from "lucide-react";
import { navLinks } from "@/constants";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

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
        <Link href="/" className="flex items-center space-x-2">
          <Gem className="w-8 h-8 text-blue-500" />
          <span className="text-xl font-bold text-white">affinity.ai</span>
        </Link>
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={`#${link.href}`}
                className="text-white hover:text-blue-400 transition-colors">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <Button className="hidden md:inline-flex font-semibold text-gray-950 bg-white border-white hover:bg-white hover:text-gray-950">
          Join Waitlist
        </Button>
      </div>
    </nav>
  );
}
