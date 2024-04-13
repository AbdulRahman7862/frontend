import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [animationPlayed, setAnimationPlayed] = useState(false);

  useEffect(() => {
    if (!animationPlayed) {
      setTimeout(() => {
        setAnimationPlayed(true);
      }, 100);
    }
  }, [animationPlayed]);

  return (
    <div className="font-sans flex justify-center items-center mt-[3rem] mb-[2rem] ">
      <h1
        className={`text-5xl font-bold leading-11 flex transition-transform transform-gpu ${animationPlayed ? 'animate-slide-in' : ''
          }`}
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-500 to-red-500">
          THE
        </span>
        <span className="ml-[1rem]">
          <h1 className="text-5xl font-bold leading-11">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-red-500 to-orange-500">
              BEST
            </span>
          </h1>
        </span> 
        <span className="ml-[1px]">
          <h1 className="text-5xl font-bold leading-11">
            <span className="bg-clip-text text-purple-900 ml-[1rem]">
              Engineers At Your Service
              <span className=" bg-clip-text text-red-600">.</span>
            </span>
          </h1>
        </span>
        <span className="ml-[1px]">
          <h1 className="text-8xl font-extrabold"></h1>
        </span>
      </h1>
    </div>
  );
};

export default Hero;
