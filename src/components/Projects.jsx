import ProjectCard from "./ProjectCard";
import { project } from "../data/data.js";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full min-h-screen py-16 flex items-center justify-center scroll-mt-20"
    >
      <div className="w-full max-w-7xl px-4 sm:px-6 md:px-12 lg:px-24">
        {/* Heading Div */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-lightHeadingText">
            Projects
          </h2>
          <p className="text-lightBodyText mt-2">My recent works</p>
        </div>
        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {project.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
