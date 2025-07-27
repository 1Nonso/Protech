const Footer = () => {
  return (
    <footer className="bg-[#0099FF] text-white px-6 md:px-20 py-12">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div className="flex flex-col gap-3 max-w-sm">
          <img
            src="/protech-Logo.svg"
            alt="Protech Logo"
            className="w-20 bg-white rounded-full p-2"
          />
          <p className="text-lg font-[borel]">
            No Borders. No Delays. Only Creativity — On Demand 24/7.
          </p>
        </div>
        <div className="flex gap-16">
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-xl mb-2">Explore</h4>
            <a href="#home" className="hover:underline">
              Home
            </a>
            <a href="#services" className="hover:underline">
              Services
            </a>
            <a href="#approach" className="hover:underline">
              Our Approach
            </a>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-xl mb-2">Connect</h4>
            <a href="#" className="hover:underline">
              Instagram
            </a>
            <a href="#" className="hover:underline">
              Twitter
            </a>
            <a href="#" className="hover:underline">
              LinkedIn
            </a>
            <a
              href="mailto:protechnigltd6@gmail.com"
              className="hover:underline"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
      <div className="mt-10 text-sm text-center border-t border-white pt-6">
        © {new Date().getFullYear()} Protech Agency. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
