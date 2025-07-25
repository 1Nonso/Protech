import servicesImage from "./../assets/images/servicesImage.webp";
import designImage from "./../assets/images/designImage.webp";
import SlideSection from "../components/slideScrollComponent";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <section id="services" className="w-dvw aboutBackgroundImage px-4 py-10">
      <div className="flex flex-col-reverse md:flex-row items-center justify-evenly gap-6">
        <p className="text-center text-lg font-medium">
          Shaping what&apos;s next — from web design to development and beyond.
        </p>
        <img
          src={servicesImage}
          alt="drawing of a computer"
          className="w-32 md:w-48"
        />
      </div>

      <hr className="my-10" />

      <h5 className="text-2xl font-bold text-center mb-10">what we deliver</h5>

      {/* BRANDING */}
      <SlideSection>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 my-14">
          <div className="md:w-1/2">
            <h5 className="text-xl font-bold mb-2">branding</h5>
            <p className="mb-3">
              Your brand isn&apos;t just your logo. It&apos;s the feeling people
              get when they hear your name. The story they tell themselves about
              you.
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Brand Strategy</li>
              <li>Verbal Identity</li>
              <li>Visual Identity</li>
              <li>Brand Experience</li>
              <li>Brand Playbook</li>
            </ul>
          </div>
          <motion.img
            src={designImage}
            alt=""
            className="w-full md:w-1/3"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          />
        </div>
      </SlideSection>

      {/* DESIGN */}
      <SlideSection>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 my-14">
          <div className="md:w-1/2">
            <h5 className="text-xl font-bold mb-2">design</h5>
            <p className="mb-3">
              Good design gets noticed. Great design gets remembered. We create
              visuals that make your audience stop, think, and act.
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Pitch Deck Design</li>
              <li>Advertising Mocks</li>
              <li>Campaign Design</li>
              <li>Social Media</li>
              <li>Packaging</li>
            </ul>
          </div>
          <motion.img
            src={designImage}
            alt=""
            className="w-full md:w-1/3"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          />
        </div>
      </SlideSection>

      {/* WEB & DIGITAL */}
      <SlideSection>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 my-14">
          <div className="md:w-1/2">
            <h5 className="text-xl font-bold mb-2">web & digital</h5>
            <p className="mb-3">
              Your website should work as good as it looks. We build experience
              that converts visitors into fans and customers.
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Web Design</li>
              <li>Web Development</li>
              <li>UI/UX Design</li>
              <li>App Design</li>
              <li>E-commerce</li>
            </ul>
          </div>
          <motion.img
            src={designImage}
            alt=""
            className="w-full md:w-1/3"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          />
        </div>
      </SlideSection>
    </section>
  );
};

export default Services;
