import { useState } from "react";

const ProjectCard = ({ project }) => {
  const [coloredImage, setColoredImage] = useState(false);

  return (
    <div
      className="bg-lightCardBg rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col h-full min-h-[400px] sm:min-h-[420px] md:min-h-[450px]"
      onMouseEnter={() => setColoredImage(true)}
      onMouseLeave={() => setColoredImage(false)}
    >
      {/* Image */}
      <div className="h-48 overflow-hidden">
        <img
          src={coloredImage ? project.imageColored : project.imageBW}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        <h3 className="text-xl font-bold text-lightHeadingText">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-lightBodyText line-clamp-3">
          {project.description}
        </p>

        {/* Tech */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <span
              key={item}
              className="px-2 py-1 text-xs bg-lightBrand/10 text-lightBrand rounded-md"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex justify-between mt-auto flex-wrap gap-2">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-lightBrand text-white text-sm font-semibold hover:bg-lightBrandHover transition-all duration-300"
          >
            <i className="bx bx-arrow-out-up-right-stroke-square text-base" />
            Demo
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-lightBrand text-sm font-semibold hover:bg-lightBrand text-lightBodyText hover:text-white transition-all duration-300"
          >
            <i className="bx bx-code-alt text-base group-hover:rotate-12" />
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
