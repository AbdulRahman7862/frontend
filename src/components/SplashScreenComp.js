import React from 'react'

const SplashScreenComp = () => {

    const image = "/images/LOGO .png";
    return (
        <div className='flex justify-center items-center h-screen flex-col'>
        {/* for gradient on top left */}
        <div className='w-[408px] h-[408px] rounded-full bg-gradient-to-bl from-blue-600 via-transparent to-orange-500 filter blur-[74.5px] absolute left-0 top-0'></div>
  
        {/* circle to the center */}
        <div className='absolute w-[380px] h-[380px] rounded-full blur-46'></div>
  
        <img
          src={image}
          alt="TechEdge Logo"
          width={300}
          height={300}
          className='animate-slide-in' 
        />
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-red-500 to-orange-500 animate-slide-in" style={{ fontSize: '3rem' }}>Your Partner in Innovation</h1>
        {/* gradient to the bottom right */}
        <div className='w-[300px] h-[300px] bg-gradient-to-bl from-blue-600 to-orange-500 filter blur-[74.5px] absolute right-0 bottom-0'></div>
      </div>
    )
}

export default SplashScreenComp
