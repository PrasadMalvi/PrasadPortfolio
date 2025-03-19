import React from 'react';

const AboutSkeleton = () => {
      return (
        <>
          <section id="about" className="bg-white">
            <div className="about-container flex flex-wrap items-center justify-center max-w-1100 mx-auto gap-5">
              <div className="about-image w-full max-w-[380px] h-auto relative overflow-hidden rounded-lg">
                <div className="animate-pulse bg-gray-300 w-full h-64"></div>
              </div>
              <div className="about-content flex-1 max-w-full text-left p-2">
                <div className="about-title animate-pulse bg-gray-300 h-8 w-3/4 mb-4"></div>
                <div className="about-description animate-pulse bg-gray-300 h-24 w-full mb-5"></div>
                <div className="about-tabs flex gap-2 mb-5 justify-center">
                  <button className="tab-button animate-pulse bg-gray-300 h-8 w-20 rounded"></button>
                  <button className="tab-button animate-pulse bg-gray-300 h-8 w-20 rounded"></button>
                  <button className="tab-button animate-pulse bg-gray-300 h-8 w-20 rounded"></button>
                </div>
                <div className="tab-content bg-gray-300 p-2 rounded-lg min-w-full">
                  <ul className="animate-pulse">
                    <li className="bg-gray-200 h-6 w-3/4 mb-2"></li>
                    <li className="bg-gray-200 h-6 w-3/4 mb-2"></li>
                    <li className="bg-gray-200 h-6 w-3/4 mb-2"></li>
                  </ul>
                </div>
              </div>
            </div>
            <a href="#" className="download-cv1 block w-44 mx-auto my-5 p-2 bg-gray-300 rounded text-center animate-pulse"></a>
          </section>
        </>
      );
    };
export default AboutSkeleton;
