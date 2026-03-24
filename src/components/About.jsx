import selfImage from "../assets/image/bhaduriaImage.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen py-16 flex items-center justify-center scroll-mt-20"
    >
      <div className="w-full max-w-7xl px-4 sm:px-6 md:px-12 lg:px-24">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-lightHeadingText">
            About
          </h2>
          <p className="text-lightBodyText mt-2">My Introduction</p>
        </div>
        {/* Content */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Side */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center gap-12">
            <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-2xl bg-lightBrand/10 flex items-center justify-center shadow-md">
              <img
                src={selfImage}
                alt="dummyImage"
                className="w-full h-full rounded-2xl object-cover"
              />
            </div>
          </div>
          {/* Right Side */}
          <div className="w-full md:w-1/2 flex flex-col gap-5 text-center md:text-left">
            <h3 className="text-2xl font-bold text-lightHeadingText">
              FrontEnd Developer
            </h3>
            <p className="text-lightBodyText leading-relaxed">
              Hey, I’m Harsh — a frontend developer who enjoys turning ideas
              into clean, responsive, and user-friendly web apps. I mostly work
              with React and Tailwind, and I like keeping things simple, fast,
              and visually neat.
            </p>

            <p className="text-lightBodyText leading-relaxed">
              I’ve built projects like an expense tracker, a portfolio site, and
              even an AI chat app — which gave me hands-on experience with APIs,
              component-based architecture, and making apps feel smooth across
              devices.
            </p>

            <p className="text-lightBodyText leading-relaxed">
              I pay a lot of attention to UI details, reusability, and
              performance. Whether it's structuring components properly or
              making sure things look good on mobile, I enjoy the process of
              refining and improving.
            </p>

            <p className="text-lightBodyText leading-relaxed">
              Right now, I’m looking for an opportunity where I can keep
              learning, build real-world products, and grow as a frontend
              developer while contributing to a solid team.
            </p>
            <div className="mt-4">
              <a
                href={`${import.meta.env.BASE_URL}Harsh_Singh_Bhaduria_Frontend_Resume.pdf`}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-lightBrand text-white font-semibold rounded-xl hover:bg-lightBrandHover transition-all duration-300"
              >
                <i className="bx bx-download"></i>
                Download Resume
                <span className="text-xs text-white/80 ml-1">(PDF, 150KB)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
