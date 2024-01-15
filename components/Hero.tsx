// use to turn this component to a client component
// "use Client"; // <- Remove or comment out this line

import Image from "next/image";
import CustomButton from "./CustomButton";

// const Hero = () => {
//   const handleScroll = () => {
//     const nextSection = document.getElementById("discover");

//     if (nextSection) {
//       nextSection.scrollIntoView({ behavior: "smooth"})
//     }
//   };
 
const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="hero flex mx-auto max-w-[1440px] px-4">
      <div className="flex-1 pt-48 padding-x">
        <h1 className="hero__title">Business Aviation</h1>
        <p className="mt-2">
          We understand the needs of our international customers and partners.
          We quickly and flexibly respond to your request with absolute
          reliability.
        </p>
        <h1 className="hero__title">High Level Operations</h1>
        <p className="mt-2">
          Our customers’ wishes are at the center of everything we do. You can
          always expect personal consultation and all-round service from a
          single source.
        </p>
        <h1 className="hero__title">Safety First</h1>
        <p className="mt-2">
          Our safety and quality standards go above and beyond the legal
          requirements. Our carefully selected staff receive continuous
          instruction with regular flight simulator training.
        </p>
        <p className="hero__subtitle">Buy or Rent a Jet today</p>
        
        <CustomButton
          title="Explore luxury Jets"
          containerStyles="bg-secondary-orange text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container -mt-16 pr-16 px-8 rounded-sm">
        <div className="hero_image rounded-3xl">
          <Image
            src="/hero-bg.jpg"
            alt="hero"
            width={700}
            height={800}
            priority={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
