const SkillCard = ({ category, icon, skills }) => {
  return (
    <div className="bg-lightCardBg rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6">
      {/* Category */}
      <h3 className="text-xl font-bold text-lightHeadingText mb-6 text-center flex items-center justify-center gap-2">
        <i className={`${icon} text-lightBrand text-2xl`}></i>
        {category}
      </h3>
      {/* Skill Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center gap-2 p-3 rounded-xl bg-lightBrand/5 hover:bg-lightBrand/10 transition-all duration-300 group"
          >
            {/* Icon */}
            <span className="text-3xl text-lightBodyText">
              <i
                className={`${skill.icon} text-lightBodyText group-hover:text-lightBrand`}
              ></i>
            </span>
            {/* Name */}
            <span className="text-sm font-semibold text-lightHeadingText text-center">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
