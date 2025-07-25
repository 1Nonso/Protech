import servicesImage from "./../assets/images/servicesImage.webp";
import brandImage from "./../assets/images/designImage.webp";
import designImage from "./../assets/images/brandImage.webp";
import webImage from "./../assets/images/webImage.webp";
import SlideSection from "../components/slideScrollComponent";
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
      des: " Good design gets noticed. Great design gets remembered. We create visuals that make your audience stop, think, and act.",
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
  return (
    <section
      id="services"
      className="w-dvw aboutBackgroundImage px-4 py-10 text-white "
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6">
        <p className="text-center text-lg font-medium">
          Shaping what&apos;s next — from web design to development and beyond.
        </p>
        <img
          src={servicesImage}
          alt="drawing of a computer"
          className="w-15 md:w-15"
        />
      </div>

      <hr className="mt-2" />

      <div className="bg-linear-to-r from-[#0099FF] to-[#0101bf] bg-clip-text w-full ">
        <h5 className="font-bold text-4xl pt-10 text-center text-transparent  ">
          what we deliver
        </h5>
      </div>
      {services.map((service) => {
        const { id, title, des, lists, img } = service;
        return (
          <SlideSection key={id}>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 my-14 font-[roboto] ">
              <div className="md:w-1/2">
                <div className="bg-linear-to-r from-[#0099FF] to-[#0101bf] bg-clip-text w-full ">
                  <h5 className="text-3xl font-bold mb-3 text-transparent font-[dynapuff] ">
                    {title}
                  </h5>
                </div>
                <p className="mb-5 text-xl">{des}</p>
                <hr className="text-[#0101bf] " />
                <motion.ul className="list-disc list-inside space-y-1">
                  {lists.map((item, i) => {
                    return (
                      <div key={i}>
                        <motion.li
                          initial={{ x: 0 }}
                          whileHover={{ x: 100 }}
                          transition={{ duration: 1 }}
                          className="pt-3 font-[dynapuff] text-lg"
                        >
                          {item}
                        </motion.li>
                        <hr className="my-4 text-[#0101bf] " />
                      </div>
                    );
                  })}
                </motion.ul>
              </div>
              <motion.img
                src={img}
                alt=""
                className="w-full md:w-2/4"
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              />
            </div>
          </SlideSection>
        );
      })}
      <div className="w-dvw flex items-center justify-center mt-40">
        <p className="font-[borel] text-2xl ">
          we build websites that work overtime so you don't have time.
        </p>
      </div>
    </section>
  );
};

export default Services;
