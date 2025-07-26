import servicesImage from "./../assets/images/servicesImage.webp";
import brandImage from "./../assets/images/designImage.webp";
import designImage from "./../assets/images/brandImage.webp";
import webImage from "./../assets/images/webImage.webp";
import { SlideSection } from "../components/scrollComponen";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Branding",
      des: "Your brand isn't just your logo. It's the feeling people get when they hear your name. The story they tell themselves about you.",
      lists: [
        "Brand Strategy",
        "Verbal Identity",
        "Visual Identity",
        "Brand Experience",
        "Brand Playbook",
      ],
      img: brandImage,
    },
    {
      id: 2,
      title: "Design",
      des: "Good design gets noticed. Great design gets remembered. We create visuals that make your audience stop, think, and act.",
      lists: [
        "Pitch Deck Design",
        "Advertising Mocks",
        "Campaign Design",
        "Social Media",
        "Packaging",
      ],
      img: designImage,
    },
    {
      id: 3,
      title: "Web & Digital",
      des: "Your website should work as good as it looks. We build experience that converts visitors into fans and customers.",
      lists: [
        "Web Designs",
        "Web Development",
        "UI/UX Design",
        "App Design",
        "E-commerce",
      ],
      img: webImage,
    },
  ];

  const slideChildren: React.ReactNode[] = [];

  services.forEach(({ title, des, lists, img }) => {
    slideChildren.push(
      <div key={`${title}-text`} className="space-y-4">
        <h5 className="text-3xl font-bold mb-4 text-transparent bg-gradient-to-r from-[#0099FF] to-[#0101bf] bg-clip-text font-[dynapuff]">
          {title}
        </h5>
        <p className="text-lg mb-5 leading-relaxed">{des}</p>
        <ul className="list-disc list-inside space-y-2">
          {lists.map((item, i) => (
            <li
              key={i}
              className="font-[dynapuff] text-base hover:translate-x-2 transition-transform cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    );

    slideChildren.push(
      <div key={`${title}-image`} className="flex justify-center items-center">
        <img
          src={img}
          alt={title}
          className="w-full max-w-md rounded-lg object-cover"
        />
      </div>
    );
  });

  return (
    <section id="services" className="w-full bg-[#000b22]">
      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 w-full max-w-6xl px-4 my-3">
          <p className="text-center text-lg font-medium text-white">
            Shaping what&apos;s next — from web design to development and
            beyond.
          </p>
          <img
            src={servicesImage}
            alt="drawing of a computer"
            className="w-20 md:w-15"
          />
        </div>
        <hr className="max-w-5xl border-blue-700 w-[97.5%] " />
        <h5 className="text-4xl font-bold mt-10 bg-gradient-to-r from-[#0099FF] to-[#0101bf] bg-clip-text text-transparent text-center">
          what we deliver
        </h5>
      </div>
      <SlideSection>{slideChildren}</SlideSection>
      <motion.p
        className="font-[borel] text-2xl text-center w-full relative bottom-40 text-white z-50"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        We build websites that work overtime so you don't have to.
      </motion.p>
    </section>
  );
};

export default Services;
