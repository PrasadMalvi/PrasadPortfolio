import React from 'react';

const HeroSkeleton = () => {
  return (
    <>
      <section className="bg-white flex items-center justify-around h-[90vh] p-5">
        <div className="animate-pulse w-[550px] h-[250px] bg-gray-200 rounded-lg"></div>
        <div className="flex flex-col items-center">
          <div className="animate-pulse w-[350px] h-[80px] bg-gray-200 rounded-lg mb-4"></div>
          <div className="animate-pulse w-[500px] h-[500px] bg-gray-200 rounded-full mb-4"></div>
          <div className="flex space-x-4">
            <div className="animate-pulse w-[70px] h-[70px] bg-gray-200 rounded-full"></div>
            <div className="animate-pulse w-[70px] h-[70px] bg-gray-200 rounded-full"></div>
            <div className="animate-pulse w-[70px] h-[70px] bg-gray-200 rounded-full"></div>
            <div className="animate-pulse w-[70px] h-[70px] bg-gray-200 rounded-full"></div>
            <div className="animate-pulse w-[70px] h-[70px] bg-gray-200 rounded-full"></div>
            <div className="animate-pulse w-[70px] h-[70px] bg-gray-200 rounded-full"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSkeleton;