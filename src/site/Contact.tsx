import contactImage from "./../assets/images/contactImage.webp";
import { useMediaQuery } from "react-responsive";
import phoneIcon from "./../assets/images/phoneIcon.svg";
import emailIcon from "./../assets/images/emailicon.svg";

const Contact = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center md:justify-evenly bg-[#000b22] w-full pt-10 md:pt-40 "
    >
      <div className="flex items-center justify-evenly w-full">
        <div className="md:w-[50%] flex flex-col items-center justify-center ">
          <h5 className="text-white text-5xl md:text-7xl w-[85%] md:w-full ">
            we're really excited about this
          </h5>
          {isMobile && (
            <img
              src={contactImage}
              alt="image of a macbook with figma open"
              className="w-[85%] md:w-[30%] rounded-lg my-10 "
            />
          )}
          <p className="text-xl md:text-2xl text-center md:text-left my-5 text-white">
            Working with brands that refuse to blend in. If you want to break
            rules, challenge norms, and create work that actually matters, let's
            talk. Our global team is standing by, always ready for a challenge.
          </p>
          <div className="text-white ">
            <p className="text-2xl underline my-5">Lets get started</p>
            <div className="flex items-center my-5">
              <img src={emailIcon} alt="phone Icon" className="w-10 pr-2" />
              <p>Email: protechnigltd6@gmail.com </p>
            </div>
            <div className="flex items-center my-5">
              <img src={phoneIcon} alt="Email Icon" className="w-10 pr-2" />
              <p>Phone Number: +234 7010698493</p>
            </div>
          </div>
        </div>
        {!isMobile && (
          <img
            src={contactImage}
            alt="image of a macbook with figma open"
            className="w-[85%] md:w-[30%] rounded-lg my-10 "
          />
        )}
      </div>
      <p className="text-white my-25 font-[borel] text-3xl text-center ">
        Protech. Bringing bold ideas to life
      </p>
    </section>
  );
};

export default Contact;
