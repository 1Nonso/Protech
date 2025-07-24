import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const content = [
  "ProTech builds web experiences.",
  "We craft beautiful UI/UX.",
  "We analyze data intelligently.",
  "We protect your digital assets.",
  "We bring ideas to life.",
];

export default function ScrollFadeSwap() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const sections = content.map((text, index) => {
    const start = index / content.length;
    const end = (index + 1) / content.length;

    const opacity = useTransform(scrollYProgress, [start, end], [1, 0]);

    return (
      <motion.div
        key={index}
        style={{ opacity }}
        className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-white"
      >
        {text}
      </motion.div>
    );
  });

  return (
    <section className="h-[500vh] relative bg-black">
      <div
        ref={containerRef}
        className="sticky top-0 h-screen w-full overflow-hidden"
      >
        <div className="relative w-full h-full">{sections}</div>
      </div>
    </section>
  );
}
