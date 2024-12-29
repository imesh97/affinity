import { clsx, type ClassValue } from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function scrollToTop(
  e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
