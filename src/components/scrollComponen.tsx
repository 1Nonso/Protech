"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

type Props = {
  children: React.ReactNode[];
};

const ScrollFadeSwap = ({ children }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  const step = 1 / children.length;

  return (
    <div ref={containerRef} className="relative h-[400vh] w-full">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center bg-white">
        {children.map((child, idx) => {
          const start = step * idx;
          const end = step * (idx + 1);

          const opacity = useTransform(
            scrollYProgress,
            [start, start + step / 2, end],
            [0, 1, 0]
          );

          return (
            <motion.div
              key={idx}
              style={{ opacity }}
              className="absolute w-full h-full flex items-center justify-center"
            >
              {child}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ScrollFadeSwap;
