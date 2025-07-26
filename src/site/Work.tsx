import areotailsImage from "./../assets/images/travelWeb.png";
import steplyticsImage from "./../assets/images/dataAnalysis.png";
import shopEasyImage from "./../assets/images/eCommerce.png";
import chopWiselyImage from "./../assets/images/foodWeb.png";
import beFitImage from "./../assets/images/physicalFitness.png";
import pixelsmintsImage from "./../assets/images/pixelsmintsImage.png";

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
      className="w-dvw backgroundImage2 py-10 text-white flex flex-col items-center backgroundImage3 "
    >
      <div>
        <h5 className="text-4xl md:text-7xl">
          <span className="font-[roboto] ">our</span> work
        </h5>
        <p>
          We create the standout work your brand deserves. Bold ideas that
          capture attention and inspire action. Designs that turn viewers into
          customers and deliver results worth celebrating.
        </p>
      </div>
      {works.map((work) => {
        const { id, title, field, classes, img } = work;
        return (
          <div key={id}>
            <img src={img} alt={title} />
            <div>
              <div>
                <h5>{title}</h5>
                <p>{field}</p>
              </div>
              <hr />
              <div>
                {classes.map((workclass, i) => {
                  return <p key={i}>{workclass}</p>;
                })}
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Work;
