import { useEffect, useState } from "react";

const Navbar = () => {
  const links = ["Home", "Projects", "Skills", "About", "Contact"];

  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // sync theme
    const savedTheme = localStorage.getItem("theme");
    setIsDark(savedTheme === "dark");

    const sections = document.querySelectorAll("section[id]");

    const handleScroll = () => {
      const scrollY = window.scrollY + 120;

      sections.forEach((section) => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop;
        const sectionId = section.getAttribute("id");

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          setActiveLink(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;

    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <>
      <nav className="w-full h-16 flex justify-between items-center xl:px-36 lg:px-24 md:px-12 sm:px-6 px-4 fixed top-0 z-40 backdrop-blur-md shadow-sm transition-colors duration-300">
        {/* Logo */}
        <div className="flex items-center justify-between gap-4">
          <a
            href="#home"
            className="text-xl font-bold text-lightHeadingText tracking-tighter hover:text-lightBrand"
          >
            Bhaduria
          </a>
          <button
            className="p-2 flex items-center justify-center cursor-pointer  border border-lightBrand rounded-full"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
          >
            <i
              className={`${isDark ? "bx bx-sun text-yellow-500" : "bx bx-moon text-lightBodyText"} text-xl md:text-2xl`}
            ></i>
          </button>
        </div>
        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const id = link.toLowerCase();
            const isActive = activeLink === id;

            return (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className={`group lg:text-lg md:text-base text-sm font-bold tracking-tight relative ${isActive ? "text-lightBrand" : "text-lightHeadingText"}`}
              >
                {link}
                {/* Underline Animation */}
                <span
                  className={`absolute -bottom-1 left-0 w-full h-px ${isActive ? "bg-lightBrand scale-x-100 origin-left" : "bg-lightHeadingText scale-x-0 origin-right group-hover:scale-x-100 group-hover:origin-left"} transform transition-transform duration-300`}
                ></span>
              </a>
            );
          })}
        </div>
        {/* Mobile Button */}
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="md:hidden text-lightHeadingText text-2xl"
        >
          <i className={`${isOpen ? "bx bx-x-circle" : "bx bx-apps"}`} />
        </button>
      </nav>
      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-14 sm:top-16 left-0 w-full bg-lightPrimaryBg shadow-md z-40 transform transition-all duration-300 ease-in-out ${isOpen ? "opacity-100 translate-y-0 max-h-screen" : "opacity-0 translate-y-5 max-h-0 overflow-hidden"}`}
      >
        <div className="flex flex-col items-center gap-6 py-6">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className={`text-base font-bold transition-colors duration-300 ${
                activeLink === link.toLowerCase()
                  ? "text-lightBrand"
                  : "text-lightHeadingText"
              }`}
            >
              {/* {link} */}
              <span className="flex items-center gap-2">
                {activeLink === link.toLowerCase() && (
                  <span className="w-2 h-2 bg-lightBrand rounded-full"></span>
                )}
                {link}
              </span>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
