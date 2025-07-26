import areotailsImage from "./../assets/images/travelWeb.png";
import steplyticsImage from "./../assets/images/dataAnalysis.png";
import shopEasyImage from "./../assets/images/eCommerce.png";
import chopWiselyImage from "./../assets/images/foodWeb.png";
import beFitImage from "./../assets/images/physicalFitness.png";
import pixelsmintsImage from "./../assets/images/pixelsmintsImage.png";
import workSectionImage from "./../assets/images/workSectionImage.webp";

const Work = () => {
  const works = [
    {
      id: 1,
      title: "AeroTrails",
      field: "Travel & Tourism",
      classes: ["Branding", "Design"],
      img: areotailsImage,
    },
    {
      id: 2,
      title: "Steplytics",
      field: "Data & Analytics",
      classes: ["Design"],
      img: steplyticsImage,
    },
    {
      id: 3,
      title: "ShopEasy",
      field: "E-commerce & Retail",
      classes: ["Branding"],
      img: shopEasyImage,
    },
    {
      id: 4,
      title: "ChopWisely",
      field: "Food & Dining",
      classes: ["Website & Digital", "Design"],
      img: chopWiselyImage,
    },
    {
      id: 5,
      title: "BeFit",
      field: "Health & Fitness",
      classes: ["Branding", "Design"],
      img: beFitImage,
    },
    {
      id: 6,
      title: "Pixelsmints",
      field: "NFT & Web3",
      classes: ["Website & Digital", "Design"],
      img: pixelsmintsImage,
    },
  ];

  return (
    <section
      id="work"
      className="w-dvw py-10 text-white flex flex-col items-center bg-[#000b22] "
    >
      <div className="w-full flex items-center justify-end mr-5 ">
        <img
          src={workSectionImage}
          alt="work section image"
          className="w-15 my-3 right-0"
        />
      </div>
      <hr className="text-white h-2 z-50 w-full" />
      <div className="flex flex-col items-center justify-evenly h-70 w-full">
        <h5 className="text-4xl md:text-7xl">
          <span className="font-[roboto] ">our</span> work
        </h5>
        <p className="w-full text-center md:text-2xl">
          We create the standout work your brand deserves. Bold ideas that
          capture attention and inspire action. Designs that turn viewers into
          customers and deliver results worth celebrating.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center w-full ">
        {works.map((work) => {
          const { id, title, field, classes, img } = work;
          return (
            <div
              key={id}
              className="w-full flex flex-col items-center justify-center my-10 "
            >
              <img src={img} alt={title} className="w-[90%] h-70 rounded-lg " />
              <div className="w-[95%] flex flex-col items-center justify-center my-2">
                <div className="flex justify-between items-center w-[90%] ">
                  <h5 className="text-2xl">{title}</h5>
                  <p>{field}</p>
                </div>
                <hr className="w-[90%] my-2.5 " />
                <div className="w-[90%] flex items-center justify-start ">
                  {classes.map((workclass, i) => {
                    return (
                      <p
                        key={i}
                        className="mr-5 border text-center flex items-center justify-center h-10 w-fit px-5 rounded-xl"
                      >
                        {workclass}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Work;
