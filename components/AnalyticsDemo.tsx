"use client";

import { useAnimate } from "framer-motion";
import { useEffect } from "react";

export default function AnalyticsDemo({ className }: { className?: string }) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      [
        ["#pointer", { left: 200, top: 60 }, { duration: 0 }],
        ["#javascript", { opacity: 1 }, { duration: 0.3 }],
        [
          "#pointer",
          { left: 50, top: 102 },
          { at: "+0.5", duration: 0.5, ease: "easeInOut" },
        ],
        ["#javascript", { opacity: 0.4 }, { at: "-0.3", duration: 0.1 }],
        ["#react-js", { opacity: 1 }, { duration: 0.3 }],
        [
          "#pointer",
          { left: 224, top: 170 },
          { at: "+0.5", duration: 0.5, ease: "easeInOut" },
        ],
        ["#react-js", { opacity: 0.4 }, { at: "-0.3", duration: 0.1 }],
        ["#typescript", { opacity: 1 }, { duration: 0.3 }],
        [
          "#pointer",
          { left: 88, top: 198 },
          { at: "+0.5", duration: 0.5, ease: "easeInOut" },
        ],
        ["#typescript", { opacity: 0.4 }, { at: "-0.3", duration: 0.1 }],
        ["#next-js", { opacity: 1 }, { duration: 0.3 }],
        [
          "#pointer",
          { left: 200, top: 60 },
          { at: "+0.5", duration: 0.5, ease: "easeInOut" },
        ],
        ["#next-js", { opacity: 0.5 }, { at: "-0.3", duration: 0.1 }],
      ],
      {
        repeat: Number.POSITIVE_INFINITY,
      }
    );
  }, [animate]);
  return (
    <div className={className}>
      <div className="relative mx-auto blur-[0.75px]">
        <div className="flex justify-center">
          <div className="flex h-full flex-col justify-center gap-10 p-4 md:h-[300px] md:flex-row">
            <div
              className="relative mx-auto h-[270px] w-[300px] md:h-[270px] md:w-[350px] text-gray-900"
              ref={scope}
            >
              <div
                id="next-js"
                className="absolute bottom-12 left-14 rounded-3xl border border-slate-400 bg-slate-200 px-2 py-1.5 text-sm opacity-50 dark:border-slate-600 dark:bg-slate-800"
              >
                Buyer Patterns
              </div>
              <div
                id="react-js"
                className="absolute left-2 top-20 rounded-3xl border border-slate-400 bg-slate-200 px-2 py-1.5 text-sm opacity-50 dark:border-slate-600 dark:bg-slate-800"
              >
                Market Trends
              </div>
              <div
                id="typescript"
                className="absolute bottom-20 right-1 rounded-3xl border border-slate-400 bg-slate-200 px-2 py-1.5 text-sm opacity-50 dark:border-slate-600 dark:bg-slate-800"
              >
                Inventory Planning
              </div>
              <div
                id="javascript"
                className="absolute right-12 top-10 rounded-3xl border border-slate-400 bg-slate-200 px-2 py-1.5 text-sm opacity-50 dark:border-slate-600 dark:bg-slate-800"
              >
                Behavior Analysis
              </div>

              <div id="pointer" className="absolute">
                <svg
                  width="16.8"
                  height="18.2"
                  viewBox="0 0 12 13"
                  className="fill-blue-500"
                  stroke="white"
                  strokeWidth="1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 5.50676L0 0L2.83818 13L6.30623 7.86537L12 5.50676V5.50676Z"
                  />
                </svg>
                <span className="relative -top-1 left-3 rounded-3xl px-2 py-1 text-xs text-gray-200">
                  Affinity
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
