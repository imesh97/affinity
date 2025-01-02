"use client";

import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Gem,
} from "lucide-react";
import { navLinks } from "@/constants";
import { scrollToTop } from "@/lib/utils";

const socialLinks = [
  { icon: Facebook, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Github, href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950/[98%] text-gray-200 pb-6 pt-10 md:pt-10">
      <div className="container max-w-5xl 2xl:max-w-6xl mx-auto px-6 md:px-12 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-between content-between">
          <div className="col-span-2 text-center md:text-left">
            <Link
              href="/"
              className={`flex items-center justify-center md:justify-start space-x-1 sm:space-x-2 align-middle`}
              scroll={false}
              onClick={(e) => scrollToTop(e)}
            >
              <Gem className="w-8 sm:w-12 h-8 sm:h-12 text-blue-500" />
              <span className={`text-3xl font-bold text-gray-100`}>
                affinity.ai
              </span>
            </Link>
            <p className="text-gray-400 mt-3 mb-6 max-w-md">
              Automation that drives sales.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
                >
                  <link.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.slice(0, 3).map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-3">Resources</h3>
            <ul className="space-y-2">
              {navLinks.slice(3).map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-10 md:mt-12 pt-6 flex flex-col md:flex-row justify-between items-center font-light">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Affinity Dealer Solutions. All rights
            reserved.
          </p>
          <div className="flex space-x-5 text-sm">
            <Link
              href="#"
              className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
