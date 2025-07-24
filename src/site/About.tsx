import sample from "./../assets/sample.png";
import { motion } from "framer-motion";

const About = () => {
  const motto = [
    "Explore big",
    "Take the lead",
    "Sweat the details",
    "Stay hungry",
    "Bring the vibe",
  ];
  return (
    <section id="about" className="w-dvw">
      <div className="bg-white text-[#0099FF] w-full pt-40 flex flex-col items-center overflow-hidden">
        <h5 className="font-bold text-5xl mb-5 w-[95%] ">about us</h5>
        <div className="w-full flex flex-col md:flex-row items-center justify-evenly">
          <motion.img
            initial={{ x: -250, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.25, delay: 0.7 }}
            viewport={{ amount: 0.0, once: true }}
            src={sample}
            alt="image of a worker"
            className="w-[80%] md:w-[30%] rounded-lg mb-5"
          />
          <motion.p
            className="text-lg text w-[90%] md:w-[50%] font-[roboto] font-semibold text-left "
            initial={{ opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <span className="font-bold text-xl">
              ProTech is a future-driven tech collective, built to shape how
              businesses connect, grow, and protect in the digital age.
            </span>
            <span className="block text-center text-xl my-5 font-[borel] italic ">
              creativity?, no bounds
            </span>
            We craft sleek, intuitive websites and mobile apps tailored to the
            pulse of modern business. But we don`t stop at launch — our data
            analysis services help companies uncover patterns, predict trends,
            and make smarter moves. And in a world full of digital threats,
            we`ve made cybersecurity part of the blueprint — not an
            afterthought.
            <span className="block text-center text-xl my-5 font-[borel] italic">
              Our client, always in the spotlight
            </span>
            ProTech was born to solve real-world problems with bold,
            custom-built solutions. From UX design to backend architecture, our
            team blends design thinking, technical mastery, and a deep respect
            for digital trust. Wherever your business is headed, we`re already
            building the road to get there.{" "}
          </motion.p>
        </div>
      </div>
      <div className="bg-white text-[#0099FF] w-full pt-5 flex flex-col items-center  ">
        <h5 className="font-bold text-3xl mt-40 mb-3 font-[borel] text-center w-[95%] ">
          our motto - powered by our values.
        </h5>
        <ol className=" text-xl mb-5 italic font-semibold flex flex-wrap items-center justify-evenly w-full">
          {motto.map((item, idx) => {
            return (
              <li key={idx} className="w-50">
                {"-"} {item}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default About;
