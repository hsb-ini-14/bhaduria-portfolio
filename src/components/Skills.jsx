import { skillsData, educationData } from "../data/data";
import EducationTimeline from "./EducationTimeline";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full min-h-screen py-16 flex flex-col items-center justify-center gap-16 scroll-mt-20"
    >
      {/* Skill Div */}
      <div className="w-full max-w-7xl px-4 sm:px-6 md:px-12 lg:px-24">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-lightHeadingText">
            Skills
          </h2>
          <p className="text-lightBodyText mt-2">Technologies I work with</p>
        </div>
        {/* Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((item) => (
            <SkillCard
              key={item.category}
              category={item.category}
              icon={item.icon}
              skills={item.skills}
            />
          ))}
        </div>
      </div>
      {/* Qualification Div */}
      <div className="w-full max-w-7xl px-4 sm:px-6 md:px-12 lg:px-24 flex flex-col">
        {/* Heading Container */}
        <div className="text-center mb-14">
          <h2 className="flex items-center justify-center gap-2">
            <i className="bx bx-education text-5xl text-lightBrand"></i>
            <span className="text-3xl sm:text-4xl font-bold text-lightHeadingText">
              Education
            </span>
          </h2>
        </div>
        {/* Education Content */}
        <EducationTimeline data={educationData} />
      </div>
    </section>
  );
};

export default Skills;
