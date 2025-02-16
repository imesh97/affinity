"use client";

import { useEffect, useState } from "react";

import { AnimatedCircularProgressBar } from "@/components/ui/animated-circular-progress-bar";
import clsx from "clsx";

export default function LeadBar({ className }: { className?: string }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const handleIncrement = (prev: number) => {
      if (prev === 100) {
        return 0;
      }
      return prev + 10;
    };
    setValue(handleIncrement);
    const interval = setInterval(() => setValue(handleIncrement), 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={clsx(className, "blur-[1.25px]")}>
      <div className="top-50% left-50% transform-gpu -translate-x-50% -translate-y-50% ">
        <AnimatedCircularProgressBar
          max={100}
          min={0}
          value={value}
          gaugePrimaryColor="rgb(59 130 246)"
          gaugeSecondaryColor="rgba(0, 0, 0, 0.1)"
        />
      </div>
    </div>
  );
}
