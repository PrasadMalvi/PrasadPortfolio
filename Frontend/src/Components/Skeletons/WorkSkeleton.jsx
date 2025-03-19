import React from 'react';

const HtmlComponent = () => {
  return (
    <>
      <section id="work" className="bg-white">
        <div className="container">
          <h1 className="bg-gray-300 animate-pulse h-8 w-1/4 mx-auto rounded"></h1>
          <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-1200px mx-auto">
            <div className="project-card bg-gray-300 rounded-lg overflow-hidden animate-pulse">
              <div className="project-image-container bg-gray-200 h-64 w-full rounded-t-lg"></div>
              <div className="project-info p-4 text-center">
                <h2 className="bg-gray-300 animate-pulse h-6 w-3/4 mx-auto rounded"></h2>
                <h2 className="bg-gray-300 animate-pulse h-4 w-1/2 mx-auto rounded mt-2"></h2>
                <p className="bg-gray-300 animate-pulse h-4 w-1/3 mx-auto rounded mt-2"></p>
              </div>
            </div>
            <div className="project-card bg-gray-300 rounded-lg overflow-hidden animate-pulse">
              <div className="project-image-container bg-gray-200 h-64 w-full rounded-t-lg"></div>
              <div className="project-info p-4 text-center">
                <h2 className="bg-gray-300 animate-pulse h-6 w-3/4 mx-auto rounded"></h2>
                <h2 className="bg-gray-300 animate-pulse h-4 w-1/2 mx-auto rounded mt-2"></h2>
                <p className="bg-gray-300 animate-pulse h-4 w-1/3 mx-auto rounded mt-2"></p>
              </div>
            </div>
            <div className="project-card bg-gray-300 rounded-lg overflow-hidden animate-pulse">
              <div className="project-image-container bg-gray-200 h-64 w-full rounded-t-lg"></div>
              <div className="project-info p-4 text-center">
                <h2 className="bg-gray-300 animate-pulse h-6 w-3/4 mx-auto rounded"></h2>
                <h2 className="bg-gray-300 animate-pulse h-4 w-1/2 mx-auto rounded mt-2"></h2>
                <p className="bg-gray-300 animate-pulse h-4 w-1/3 mx-auto rounded mt-2"></p>
              </div>
            </div>
            <div className="project-card bg-gray-300 rounded-lg overflow-hidden animate-pulse">
              <div className="project-image-container bg-gray-200 h-64 w-full rounded-t-lg"></div>
              <div className="project-info p-4 text-center">
                <h2 className="bg-gray-300 animate-pulse h-6 w-3/4 mx-auto rounded"></h2>
                <h2 className="bg-gray-300 animate-pulse h-4 w-1/2 mx-auto rounded mt-2"></h2>
                <p className="bg-gray-300 animate-pulse h-4 w-1/3 mx-auto rounded mt-2"></p>
              </div>
            </div>
            </div>
            </div></section>
    </>
  );
};

export default HtmlComponent;
