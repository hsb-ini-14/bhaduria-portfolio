import { useState } from "react";
import selfImage from "../assets/image/bhaduriaImage.jpg";

const Home = () => {
  const [bounce, setBounce] = useState(false);
  return (
    <section
      id="home"
      className="w-full min-h-screen flex items-center justify-center pt-20 scroll-mt-20"
    >
      {/* Home Container */}
      <div className="w-full max-w-7xl flex flex-col-reverse lg:flex-row items-center justify-between gap-12 px-4 sm:px-6 md:px-12 lg:px-24">
        {/* Socials */}
        <div className="flex lg:flex-col flex-row gap-4 justify-center text-lightHeadingText">
          {/* GitHub */}
          <a
            href="https://github.com/hsb-ini-14"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-lightBrand transition-colors duration-300"
          >
            <i className="bxl bx-github text-3xl sm:text-4xl" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/harsh-ini14/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-lightBrand transition-colors duration-300"
          >
            <i className="bxl bx-linkedin-square text-3xl sm:text-4xl" />
          </a>
        </div>
        {/* middle side */}
        <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left">
          {/* Name */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-lightHeadingText font-bold tracking-tight whitespace-nowrap flex items-center justify-center md:justify-start gap-2">
            Harsh Singh Bhaduria
            <i
              className={`bxf bx-thumb-up text-2xl sm:text-4xl text-yellow-500 ml-2 ${bounce ? "animate-bounce" : ""}`}
            />
          </h1>

          {/* Role */}
          <div className="flex items-center gap-2 font-light text-base sm:text-lg lg:text-xl">
            <span className="h-px w-6 bg-lightHeadingText"></span>
            <h4 className="text-lightHeadingText">Frontend Developer</h4>
          </div>

          {/* Description */}
          <p className="max-w-md text-lightBodyText font-semibold">
            I'm a frontend developer passionate about building modern,
            responsive, and user-friendly web applications using React and
            Tailwind CSS.
          </p>
          {/* Button */}
          <div className="mt-6">
            <a
              onMouseEnter={() => setBounce(true)}
              onMouseLeave={() => setBounce(false)}
              href="#contact"
              className="px-6 py-3 rounded-2xl bg-lightBrand text-white font-bold text-lg hover:bg-lightBrandHover transition-colors duration-300"
            >
              Say Hello{" "}
              <i className="bx bx-arrow-up-right-stroke-circle text-lg ml-1"></i>
            </a>
          </div>
        </div>
        {/* Image Container */}
        {/* <div className="container-2 w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-60 lg:h-60 xl:w-80 xl:h-80 shrink-0"></div> */}
        <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-60 lg:h-60 xl:w-80 xl:h-80 shrink-0 relative">
          <img
            src={selfImage}
            alt="Harsh Singh Bhaduria"
            className="w-full h-full object-cover animate-blob border-[8px] border-lightBrand"
          />
        </div>
      </div>
      {/* Scroll Indicator */}
      <a
        href="#projects"
        className="absolute bottom-6 right-2 -translate-x-1/2 flex flex-col items-center gap-2 text-lightHeadingText opacity-80 hover:opacity-100 transition"
      >
        {/* mouse */}
        <div className="w-6 h-10 border-2 border-lightHeadingText rounded-full flex justify-center">
          <span className="w-1.5 h-1.5 bg-lightHeadingText rounded-full mt-2 animate-scroll"></span>
        </div>
        {/* Text Scroll */}
        <span className="text-xs tracking-widest uppercase">Scroll</span>
      </a>
    </section>
  );
};

export default Home;
