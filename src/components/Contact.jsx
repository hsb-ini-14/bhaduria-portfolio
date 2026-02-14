const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full min-h-screen py-16 flex items-center justify-center scroll-mt-20"
    >
      <div className="w-full max-w-7xl px-4 sm:px-6 md:px-12 lg:px-24">
        {/* heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-lightHeadingText">
            Contact
          </h2>
          <p className="text-lightBodyText mt-2">Get in touch</p>
        </div>
        {/* Gmail card */}

        {/* Content Grid */}
        <div className="flex flex-col items-center justify-center gap-16">
          {/* Contact Form */}
          <form className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl flex flex-col items-center justify-center gap-5">
            <div className="w-full flex flex-col gap-1">
              <label className="text-sm text-lightBodyText">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Insert your name..."
                required
                className="w-full border border-lightBodyText placeholder:text-lightBodyText/50 rounded-xl px-4 py-4 outline-none focus:border-lightBrand"
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label className="text-sm text-lightBodyText">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Insert your email..."
                required
                className="w-full border border-lightBodyText placeholder:text-lightBodyText/50 rounded-xl px-4 py-4 outline-none focus:border-lightBrand"
              />
            </div>
            <div className="w-full flex flex-col gap-1">
              <label className="text-sm text-lightBodyText">Message</label>
              <textarea
                rows="5"
                placeholder="Insert message..."
                required
                className="w-full border border-lightBodyText placeholder:text-lightBodyText/50 rounded-xl px-4 py-4 outline-none focus:border-lightBrand resize-none"
              ></textarea>
            </div>
            <button className="flex items-center justify-center gap-2 bg-lightBrand text-white px-6 py-3 rounded-xl font-semibold hover:bg-lightBrandHover transition">
              Send Message <i className="bx bx-send"></i>
            </button>
          </form>
          {/* Socials */}
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex flex-row gap-4 justify-center text-lightHeadingText">
              <a
                href="https://github.com/hsb-ini-14"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-lightBrand transition-colors duration-300 flex items-center gap-2"
              >
                <i className="bxl bx-github text-3xl sm:text-4xl" />
                <span className="hidden text-xl">Github</span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/harsh-ini14/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-lightBrand transition-colors duration-300 flex items-center gap-2"
              >
                <i className="bxl bx-linkedin-square text-3xl sm:text-4xl" />
                <span className="hidden text-xl">LinkedIn</span>
              </a>
            </div>
            {/* Gmail */}
            <div className="bg-lightCardBg shadow-lg hover:shadow-2xl p-4 flex flex-col items-center justify-center gap-2 rounded-xl group">
              <i className="bxl bx-gmail text-4xl text-lightBodyText group-hover:text-lightBrand"></i>
              <p className="text-base text-lightBodyText font-bold">
                bhaduria14harsh@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
