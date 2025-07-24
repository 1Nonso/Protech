import { motion } from "framer-motion";
import protechLogo from "/protech-Logo.svg";
import { easeInOut } from "framer-motion";

const approachItems = [
  "No guesswork — we plan before we build.",
  "No fluff — we keep it clean and simple.",
  "No delays — we move fast and update often.",
  "No silos — we collaborate closely with you.",
  "No cover-ups — we solve, not spin.",
  "No vanity — we design for real results.",
];

const fadeInUp = {
  hidden: { opacity: 0, y: 100 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom,
      duration: 1.2,
      ease: easeInOut,
    },
  }),
};

const Home = () => {
  return (
    <section id="home" className="w-dvw">
      <div className="homeBackgroundImage h-dvh w-dvw fixed top-0 -z-10">
        <motion.p
          className="absolute bottom-16 font-black text-white text-7xl text-center w-full"
          custom={0.5}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          DESIGN. DEVELOP.
          <span className="text-[#0099FF] block">DELIVER</span>
        </motion.p>
      </div>
      <div className="bg-gradient-to-b from-[#0099FF] from-40% to-[#ffff] to-55%">
        <div className="relative min-h-fit mt-200 py-10 text-center flex flex-col md:flex-row-reverse items-center justify-evenly text-white w-dvw px-6 overflow-hidden">
          <motion.p
            className="font-bold text-3xl md:text-5xl w-[90%] md:w-[60%]"
            initial={{ opacity: 0, y: -100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.7,
                duration: 1,
                ease: easeInOut,
              },
            }}
          >
            a global{" "}
            <span className="font-[borel] text-[#0099]">creative agency</span>{" "}
            built to power your brand`s vision.{" "}
            <span className="font-[borel] text-[#0099] block my-3 md:my-8">
              PROTECH
            </span>
          </motion.p>
          <motion.div
            className="md:w-[30%] flex flex-col md:flex-col-reverse items-center"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.7,
                duration: 1,
                ease: easeInOut,
              },
            }}
          >
            <img
              className="bg-white md:w-[35%] w-[45%] rounded-full py-7 md:py-5 my-10"
              src={protechLogo}
              alt="Protech Logo"
            />
            <p className="font-[borel] font-semibold text-xl w-70 md:w-full">
              No Borders. No delays. Only Creativity, On demand 24/7
            </p>
          </motion.div>
        </div>
        <motion.div
          className="text-[#0099FF] w-full flex flex-col md:flex-row gap-8 p-8 md:p-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2.3 }}
          viewport={{ amount: 0.3 }}
        >
          <div className="w-full md:w-[40%]">
            <h2 className="font-bold text-3xl mb-3">Our Approach</h2>
            <p className="text-lg text-left max-w-xl">
              We won`t bore you with the details — we`ll just get it done. Fast,
              seamless, no drama.
            </p>
          </div>
          <motion.ol
            className="space-y-4 text-lg md:text-xl text-left w-full md:w-[60%]"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.3,
                },
              },
            }}
          >
            {approachItems.map((item, idx) => (
              <motion.li
                key={idx}
                className="relative"
                variants={fadeInUp}
                custom={0.2 * idx}
              >
                {idx + 1} {". "}
                {item}
                <hr className="border-t border-[#0099FF] mt-3" />
              </motion.li>
            ))}
          </motion.ol>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
