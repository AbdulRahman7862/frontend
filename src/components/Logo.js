import React from 'react'

const Logo = () => {
    const images = [
        'images/LOGO .png',
    ];

  return (
    <div className='w-20 h-20 rounded-full'>
      <img src={images[0]} alt="TechEdge Logo" />
    </div>
  )
}

export default Logo
