import { useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const App = () => {
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else {
      // SystemPref
      const prefersDark = window.matchMedia(
        "prefers-color-scheme: dark",
      ).matches;

      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

  return (
    <div className="min-h-screen bg-lightPrimaryBg transition-colors duration-300">
      <Navbar />
      <Home />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </div>
  );
};

export default App;
