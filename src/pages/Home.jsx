import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Carousel from "../components/Carousel"
const Home = () => {
  return (
   <>
      <Header></Header> 
      <div className='w-[408px] h-[408px] rounded-full bg-gradient-to-bl from-blue-600 via-transparent to-orange-500 filter blur-[74.5px] absolute left-0 top-0'></div>
      <div className='absolute w-[380px] h-[380px] rounded-full blur-46 top-[10rem] left-[47%]'></div>
      <div className='w-[300px] h-[300px] bg-gradient-to-bl from-blue-600 to-orange-500 filter blur-[74.5px] absolute right-0 bottom-0'></div>
      <Hero></Hero>
      <Carousel></Carousel>
   </>
  )
}

export default Home
