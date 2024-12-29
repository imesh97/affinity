"use client";

import RetroGrid from "@/components/ui/retro-grid";
import { cn } from "@/lib/utils";

export default function PredictiveAnalytics({
  className,
}: {
  className: string;
}) {
  return (
    <div
      className={cn(
        "relative flex h-[300px] w-full scale-110 flex-col items-center justify-center overflow-hidden rounded-lg bg-gray-950 md:shadow-xl",
        className
      )}>
      <RetroGrid lightLineColor="#f9fafb" opacity={0.4} />
    </div>
  );
}
