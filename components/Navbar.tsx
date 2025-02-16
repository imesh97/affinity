"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { navLinks } from "@/constants";
import ShimmerButton from "./ui/shimmer-button";
import MobileNavbar from "./MobileNavbar";
import Logo from "./Logo";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const demoSection = document.querySelector("#demo");
    demoSection?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-950/90 backdrop-blur-sm shadow-xl"
          : "bg-transparent"
      }`}
    >
      <div className="container-fluid lg:container mx-auto px-8 py-6 flex items-center justify-between">
        <Logo />
        <ul className="hidden lg:flex space-x-8">
          {navLinks.slice(0, 5).map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                scroll={true}
                className="text-gray-300 hover:text-blue-400 font-medium tracking-wide transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <form onSubmit={handleSubmit}>
          <ShimmerButton
            type="submit"
            className="hidden lg:flex w-full md:w-auto font-bold tracking-widest text-sm text-gray-100 uppercase"
            background="#3b82f6"
            borderRadius="10px"
            shimmerSize="0.1em"
          >
            Book a Demo
          </ShimmerButton>
        </form>

        <MobileNavbar />
      </div>
    </nav>
  );
}
