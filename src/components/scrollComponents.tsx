"use client";

import {
  useScroll,
  useTransform,
  motion,
  useAnimation,
  useInView,
} from "framer-motion";
import { useRef, useEffect } from "react";

type Props = {
  children: React.ReactNode[];
};

export const ScrollFadeSwap = ({ children }: Props) => {
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

export const SlideSection = ({ children }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  const step = 1 / (children.length / 2);

  return (
    <div ref={containerRef} className="relative h-[500vh] w-full">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center text-white overflow-hidden">
        {Array.from({ length: children.length / 2 }).map((_, serviceIdx) => {
          const textChild = children[serviceIdx * 2];
          const imageChild = children[serviceIdx * 2 + 1];

          const start = step * serviceIdx;
          const end = step * (serviceIdx + 1);
          const midPoint = start + step / 2;

          // Overall section opacity and scale
          const sectionOpacity = useTransform(
            scrollYProgress,
            [start, start + step * 0.2, end - step * 0.2, end],
            [0, 1, 1, 0]
          );

          const sectionScale = useTransform(
            scrollYProgress,
            [start, midPoint, end],
            [0.8, 1, 0.85]
          );

          const textX = useTransform(
            scrollYProgress,
            [start, start + step * 0.3, end - step * 0.2, end],
            [-200, 0, 0, -100]
          );

          const textOpacity = useTransform(
            scrollYProgress,
            [start, start + step * 0.3, end - step * 0.3, end],
            [0, 1, 1, 0]
          );

          const imageX = useTransform(
            scrollYProgress,
            [start, start + step * 0.3, end - step * 0.2, end],
            [200, 0, 0, 100]
          );

          const imageOpacity = useTransform(
            scrollYProgress,
            [start, start + step * 0.3, end - step * 0.3, end],
            [0, 1, 1, 0]
          );

          return (
            <motion.div
              key={serviceIdx}
              style={{
                opacity: sectionOpacity,
                scale: sectionScale,
              }}
              className="absolute w-full h-full flex items-center justify-center px-10"
            >
              <div className="flex items-center justify-between w-full max-w-7xl gap-10 flex-col md:flex-row">
                <motion.div
                  style={{
                    x: textX,
                    opacity: textOpacity,
                  }}
                  className="w-full flex flex-col relative"
                >
                  {textChild}
                </motion.div>
                <motion.div
                  style={{
                    x: imageX,
                    opacity: imageOpacity,
                  }}
                  className="w-full md:w-250 flex justify-center"
                >
                  {imageChild}
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export const SlideSectionWork = ({ children }: any) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-20% 0px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 100 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 1, ease: "easeOut" },
        },
      }}
    >
      {children}
    </motion.div>
  );
};
