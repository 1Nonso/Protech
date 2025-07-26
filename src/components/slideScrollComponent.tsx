// "use client";

// import { motion, useAnimation, useInView } from "framer-motion";
// import { useRef, useEffect } from "react";

// type Props = {
//   children: React.ReactNode;
// };

// const SlideSection = ({ children }: Props) => {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: false, margin: "-20% 0px" });
//   const controls = useAnimation();

//   useEffect(() => {
//     if (inView) {
//       controls.start("visible");
//     } else {
//       controls.start("hidden");
//     }
//   }, [inView, controls]);

//   return (
//     <motion.div
//       ref={ref}
//       initial="hidden"
//       animate={controls}
//       variants={{
//         hidden: { opacity: 0, y: 100 },
//         visible: {
//           opacity: 1,
//           y: 0,
//           transition: { duration: 1, ease: "easeOut" },
//         },
//       }}
//     >
//       {children}
//     </motion.div>
//   );
// };

// export default SlideSection;
