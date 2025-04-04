"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/ui/animated-list";

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

let notifications = [
  {
    name: "Facebook Lead",
    description: "David Miller - BMW Series",
    time: "13m ago",
    icon: "👤",
    color: "#FFB800",
  },
  {
    name: "Test Drive Scheduled",
    description: "BMW X5 - Tomorrow 2PM",
    time: "9m ago",
    icon: "🚗",
    color: "#00C9A7",
  },
  {
    name: "Service Follow-up",
    description: "30-day check-in reminder",
    time: "7m ago",
    icon: "🔧",
    color: "#FF3D71",
  },
  {
    name: "AutoTrader Inquiry",
    description: "2023 Toyota Camry",
    time: "2m ago",
    icon: "💬",
    color: "#1E86FF",
  },
];

notifications = Array.from({ length: 1 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4 blur-[1.5px]",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        "transform-gpu bg-transparent backdrop-blur-md border:1px_solid_rgba(255,255,255,.1) box-shadow:0_-20px_80px_-20px_#ffffff1f_inset"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export default function FollowupList({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full flex-col p-6 overflow-hidden rounded-lg border bg-gray-950 md:shadow-xl",
        className
      )}
    >
      <AnimatedList delay={2000}>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}
