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
              <img src={selfImage} alt="dummyImage" className="w-full h-full rounded-2xl object-cover" />
            </div>
          </div>
          {/* Right Side */}
          <div className="w-full md:w-1/2 flex flex-col gap-5 text-center md:text-left">
            <h3 className="text-2xl font-bold text-lightHeadingText">
              FrontEnd Developer
            </h3>
            <p className="text-lightBodyText leading-relaxed">
              I’m a frontend developer focused on building modern, responsive,
              and user-friendly web applications using React and Tailwind CSS.
            </p>

            <p className="text-lightBodyText leading-relaxed">
              I have hands-on experience creating real-world projects like a
              to-do app, expense tracker, and portfolio website, with a strong
              focus on clean UI and reusable components.
            </p>

            <p className="text-lightBodyText leading-relaxed">
              I follow best practices such as writing maintainable code, using
              Git for version control, optimizing performance, and ensuring
              cross-device compatibility.
            </p>

            <p className="text-lightBodyText leading-relaxed">
              Currently, I’m seeking an entry-level frontend developer role
              where I can learn, contribute, and grow as a professional.
            </p>
            <div className="mt-4">
              <a
                href="#"
                // download
                className="inline-flex items-center gap-2 px-6 py-3 bg-lightBrand text-white font-semibold rounded-xl hover:bg-lightBrandHover transition-all duration-300"
              >
                <i className="bx bx-download"></i>
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
