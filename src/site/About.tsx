import { ScrollFadeSwap } from "../components/scrollComponents";
import sample from "./../assets/images/sample.png";
import niceImage from "./../assets//images/aboutPage.webp";
import { AnimatePresence, motion } from "framer-motion";
import photoOfDesignerCybersecurity from "./../assets/images/echebiri.png";
import photoOfAiEngineer from "./../assets/images/godswill.png";
import photoOfBackendDeveloper from "./../assets/images/chisom.png";
import photoOfFrontendDeveloper from "./../assets/images/othniel.jpg";
import photoOfDesigner from "./../assets/images/nicole.jpeg";

const About = () => {
  const motto = [
    "Explore big",
    "Take the lead",
    "Sweat the details",
    "Stay hungry",
    "Bring the vibe",
  ];
  const team = [
    {
      name: "CHUKWUANI CHINONSO OTHNIEL",
      role: "Software Engineer | Web Development",
      desc: "I'm a Web Developer with a strong foundation in React, TypeScript, and modern web technologies. I have hands-on experience building responsive, user-focused interfaces that combine technical precision with creative design. Through real-world projects, I've developed interactive UIs, dynamic dashboards, and seamless API integrations to enhance user experiences. My academic background in Computer Science, along with a consistent focus on writing clean, maintainable code, equips me to thrive in fast-paced development environments. I'm eager to contribute my energy, skills, and growth mindset to a forward-thinking team.",
      img: photoOfFrontendDeveloper,
    },
    {
      name: "ECHEBIRI MUNACHIMSO",
      role: "UI/UX Designer | Ethical Hacker ",
      desc: "Hi, I'm Muna, a UI/UX Designer and Ethical Hacker passionate about crafting secure and user-centric digital experiences. I leverage Figma to design intuitive website and web app templates that prioritize both aesthetics and functionality. With a keen eye for detail, I infuse personality into my designs through thoughtful animations and seamless interactions. By combining my expertise in UI/UX I create amazing designs to fit to the client's choice and with ethical hacking principles and tools I'm able to detect vulnerability and threats in every web app or mobile app I create, which will ensure their security. I create digital solutions that are not only visually stunning but also secure and user-friendly.",
      img: photoOfDesignerCybersecurity,
    },
    {
      name: "NWANEBUIKE CHISOM D.",
      role: "Backend Web-Developer",
      desc: "...",
      img: photoOfBackendDeveloper,
    },
    {
      name: "UZOECHINA GODSWILL",
      role: "AI/ML Engineer",
      desc: "...",
      img: photoOfAiEngineer,
    },
    {
      name: "Nicole Ogbonnaya",
      role: "UI/UX Designer",
      desc: "Hi, I`m Nicole — a UI/UX Designer who effortlessly brings ideas to life through clean, creative, and user-friendly designs. Using the software Figma, I design unique website and web app templates, always considering the user experience. I enjoy adding a bit of personality to every project through thoughtful animations and smooth interactions that make the design feel alive. Whether it`s sketching out wireframes or building high-fidelity prototypes, I`m all about creating digital experiences that are not just beautiful, but actually make sense to the people using them. I`m always learning, always creating, and always excited to design something that stands out and solves real problems.",
      img: photoOfDesigner,
    },
  ];

  return (
    <section id="about" className="w-dvw">
      <div className="bg-white  w-full pt-40 flex flex-col items-center overflow-hidden relative">
        {/* <h5 className="font-bold text-5xl mb-10 w-[95%] ">about us</h5> */}
        <div className="bg-linear-to-r from-[#0099FF] to-[#0101bf] bg-clip-text w-fit absolute top-0 left-6 ">
          <h5 className="font-bold text-5xl my-10 text-transparent  ">
            about us
          </h5>
          {/* to-[#0101bf], from-[#ACB6E5] to-[#86FDE8] */}
        </div>
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
          <AnimatePresence>
            <motion.p
              className="text-lg text w-[90%] md:w-[50%] font-[roboto] font-semibold text-left "
              initial={{ opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0, x: -200 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              <span className="font-bold text-xl">
                ProTech is a future-driven tech collective, built to shape how
                businesses connect, grow, and protect in the digital age.
              </span>
              <span className="block text-center text-xl my-5 font-[borel] italic text-[#0101bf] ">
                creativity?, no bounds
              </span>
              We craft sleek, intuitive websites and mobile apps tailored to the
              pulse of modern business. But we don`t stop at launch — our data
              analysis services help companies uncover patterns, predict trends,
              and make smarter moves. And in a world full of digital threats,
              we`ve made cybersecurity part of the blueprint — not an
              afterthought.
              <span className="block text-center text-xl my-5 font-[borel] italic text-[#0101bf] ">
                Our client, always in the spotlight
              </span>
              ProTech was born to solve real-world problems with bold,
              custom-built solutions. From UX design to backend architecture,
              our team blends design thinking, technical mastery, and a deep
              respect for digital trust. Wherever your business is headed, we`re
              already building the road to get there.{" "}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
      <div className="bg-white w-full pt-5 flex flex-col items-center  ">
        <h5 className="font-bold text-2xl mt-15 md:mt-40 mb-3 font-[borel] text-center text-[#0101bf] w-[95%] ">
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
      <div className="bg-white w-full px-5 relative">
        <div className="w-full">
          <div className="bg-linear-to-r from-[#0099FF] to-[#0101bf] bg-clip-text flex justify-between items-center w-[97.5%] ">
            <h5 className="font-bold text-xl pt-10 text-center text-transparent  ">
              meet the team
            </h5>
            <motion.img
              src={niceImage}
              alt="drawing of a lightbulb "
              className="w-10 relative bottom-5.5 right-5.5"
              animate={{
                x: [0, 25, 25, 0, -25, -25, 0],
                y: [0, 0, 25, 25, 25, 0, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "linear",
              }}
            />
          </div>
          <hr className="bg-[#0101bf] " />
          <p className="mt-5 text-2xl text-center font-[borel] font-semibold ">
            From designers to developers, our team brings diverse expertise and
            shared energy to every project. Together, we build with purpose —
            and keep the momentum going.
          </p>
        </div>
        <ScrollFadeSwap>
          {team.map((member, idx) => (
            <div
              key={idx}
              className="w-dvw text-center flex flex-col md:flex-row justify-evenly px-4 "
            >
              <div className="w-full md:w-[40%] flex flex-col items-center ">
                <img
                  src={member.img}
                  alt=""
                  className="w-30 md:w-60 md:h-60 h-30 mx-auto rounded-full md:rounded-lg bg-gray-300"
                />
                <h5 className="text-2xl font-bold mt-4 text-[#0101bf] ">
                  {member.name}
                </h5>
                <div className="bg-linear-to-r from-[#0099FF] to-[#0101bf] bg-clip-text w-fit ">
                  <p className="text-sm font-semibold italic font-[borel] my-2 text-transparent ">
                    {member.role}
                  </p>
                </div>
              </div>
              <p className="mt-2 text-base md:text-right w-full md:w-[50%] ">
                {member.desc}
              </p>
            </div>
          ))}
        </ScrollFadeSwap>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1.2 }}
          className="mt-5 text-2xl text-center font-[borel] font-semibold relative bottom-10 md:bottom-30 "
        >
          <span className="block">we`re always on.</span>
          <span>
            our global team works round the clock, helping you stay ahead.
          </span>
        </motion.p>
      </div>
    </section>
  );
};

export default About;
