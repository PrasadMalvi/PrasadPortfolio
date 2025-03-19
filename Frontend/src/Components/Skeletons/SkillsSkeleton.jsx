import React from 'react';

const SkillsSkeleton = () => {
  return (
    <>
      <section id="skills" className="bg-white">
        <div className="skills-container max-w-3xl mx-auto p-5">
          <h1 className="skills-title bg-gray-300 h-10 w-3/4 animate-pulse mb-6"></h1>
          <div className="skills-category mb-10">
            <h2 className="category-title bg-gray-300 h-8 w-1/2 animate-pulse mb-4"></h2>
            <div className="skills-grid grid grid-cols-3 gap-5 p-5">
              <div className="skill-card bg-gray-300 rounded-full w-28 h-28 flex flex-col items-center justify-center animate-pulse">
                <div className="skill-icon bg-gray-200 rounded-full w-16 h-16 mb-2"></div>
                <h3 className="skill-name bg-gray-300 h-4 w-3/4 animate-pulse"></h3>
              </div>
              <div className="skill-card bg-gray-300 rounded-full w-28 h-28 flex flex-col items-center justify-center animate-pulse">
                <div className="skill-icon bg-gray-200 rounded-full w-16 h-16 mb-2"></div>
                <h3 className="skill-name bg-gray-300 h-4 w-3/4 animate-pulse"></h3>
              </div>
              <div className="skill-card bg-gray-300 rounded-full w-28 h-28 flex flex-col items-center justify-center animate-pulse">
                <div className="skill-icon bg-gray-200 rounded-full w-16 h-16 mb-2"></div>
                <h3 className="skill-name bg-gray-300 h-4 w-3/4 animate-pulse"></h3>
              </div>
            </div>
          </div>
          <div className="skills-category mb-10">
            <h2 className="category-title bg-gray-300 h-8 w-1/2 animate-pulse mb-4"></h2>
            <div className="skills-grid grid grid-cols-3 gap-5 p-5">
              <div className="skill-card bg-gray-300 rounded-full w-28 h-28 flex flex-col items-center justify-center animate-pulse">
                <div className="skill-icon bg-gray-200 rounded-full w-16 h-16 mb-2"></div>
                <h3 className="skill-name bg-gray-300 h-4 w-3/4 animate-pulse"></h3>
              </div>
              <div className="skill-card bg-gray-300 rounded-full w-28 h-28 flex flex-col items-center justify-center animate-pulse">
                <div className="skill-icon bg-gray-200 rounded-full w-16 h-16 mb-2"></div>
                <h3 className="skill-name bg-gray-300 h-4 w-3/4 animate-pulse"></h3>
              </div>
              <div className="skill-card bg-gray-300 rounded-full w-28 h-28 flex flex-col items-center justify-center animate-pulse">
                <div className="skill-icon bg-gray-200 rounded-full w-16 h-16 mb-2"></div>
                <h3 className="skill-name bg-gray-300 h-4 w-3/4 animate-pulse"></h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SkillsSkeleton;
