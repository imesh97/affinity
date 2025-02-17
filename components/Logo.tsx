"use client";

import { scrollToTop } from "@/lib/utils";
import { Gem } from "lucide-react";
import Link from "next/link";

export default function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`flex items-center justify-center space-x-1 align-middle ${className}`}
      scroll={false}
      onClick={(e) => scrollToTop(e)}
    >
      <Gem className="w-6 h-6 text-blue-500" />
      <span className={`text-xl font-bold text-gray-100`}>Affinity</span>
    </Link>
  );
}
