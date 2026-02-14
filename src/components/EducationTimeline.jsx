const EducationTimeline = ({ data }) => {
  return (
    <div className="relative flex flex-col items-center">
      {/* Vertical Line */}
      <div className="absolute left-4 lg:left-1/2 top-0 h-full w-[1px] lg:w-0.5 bg-lightBodyText lg:-translate-x-1/2"></div>

      {data.map((item, index) => {
        const isEven = index % 2 === 0;

        return (
          <div
            key={item.id}
            className="relative w-full flex mb-12 last:mb-0 min-h-[80px]"
          >
            {/* Left Side (Desktop Only) */}
            <div
              className={`hidden lg:block w-1/2 ${isEven ? "text-right pr-8" : ""}`}
            >
              {isEven && (
                <>
                  <h3 className="text-lg font-semibold text-lightHeadingText">
                    {item.degree}
                  </h3>
                  <p className="text-lightBodyText">{item.institute}</p>
                  <p className="text-sm text-lightBodyText mt-1">
                    {item.duration}
                  </p>
                </>
              )}
            </div>

            {/* Dot */}
            <div className="absolute left-4 lg:static z-10 w-4 h-4 bg-lightBrand rounded-full mt-2 lg:mt-0 -translate-x-1/2 lg:translate-x-0"></div>

            {/* Right Side */}
            <div className="w-full lg:w-1/2 pl-14 lg:pl-8 pt-1">
              {/* Mobile View → ALWAYS show */}
              <div className="block lg:hidden">
                <h3 className="text-lg font-semibold text-lightHeadingText">
                  {item.degree}
                </h3>
                <p className="text-lightBodyText">{item.institute}</p>
                <p className="text-sm text-lightBodyText mt-1">
                  {item.duration}
                </p>
              </div>

              {/* Desktop → Only odd items */}
              {!isEven && (
                <div className="hidden lg:block">
                  <h3 className="text-lg font-semibold text-lightHeadingText">
                    {item.degree}
                  </h3>
                  <p className="text-lightBodyText">{item.institute}</p>
                  <p className="text-sm text-lightBodyText mt-1">
                    {item.duration}
                  </p>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EducationTimeline;
