"use client";

import { FC, ReactNode, useRef, useState, useEffect } from "react";
import { motion, MotionValue, useScroll, useTransform } from "motion/react";

import { cn } from "@/lib/utils";

interface TextRevealByWordProps {
  text: string;
  className?: string;
}

export const TextRevealByWord: FC<TextRevealByWordProps> = ({
  text,
  className,
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end center"],
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  const words = text.split(" ");

  return (
    <div ref={targetRef} className={cn("relative z-0", className)}>
      <p className="flex flex-wrap text-5xl md:text-5xl lg:text-6xl font-bold text-gray-200 italic mx-auto text-center items-center justify-center">
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          return (
            <Word
              key={i}
              progress={scrollYProgress}
              range={[start, end]}
              isVisible={isVisible}
            >
              {word}
            </Word>
          );
        })}
      </p>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
  isVisible: boolean;
}

const Word: FC<WordProps> = ({ children, progress, range, isVisible }) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="relative mx-1">
      <span className="absolute opacity-30">{children}</span>
      <motion.span
        style={{ opacity: isVisible ? opacity : 0 }}
        className="text-gray-200"
      >
        {children}
      </motion.span>
    </span>
  );
};

export default TextRevealByWord;
