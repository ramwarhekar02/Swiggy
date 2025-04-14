import React from 'react'
import { ImLocation } from "react-icons/im";
import { SlArrowDown } from "react-icons/sl";
import { MdSearch } from "react-icons/md";


const Hero = () => {
  return (
    <div className='w-full h-screen'>
      <div className='w-full text-center max-w-[1200px] h-full mx-auto'>
        <div className='text-7xl font-[999] font-["General_Sans"] md:pt-24'>
          <h1>Delicious Meals, Fast Delivery</h1>
          <h1>Anytime Cravings</h1>
        </div>
        <div className='w-full flex justify-center mt-7 gap-2'>
          <div className='rounded-2xl bg-gray-200 flex items-center leading-none md:px-6 md:py-4 gap-2'>
            <ImLocation size={26} color='#FF5200' fontWeight={999} />
            <input className='md:w-[280px] bg-transparent md:py-1 font-semibold outline-none border-0 md:text-[1.2vw] px-2' type="text" placeholder='Enter Your Delivery Location' />
            <SlArrowDown size={20} />
          </div>
          <div className='rounded-2xl flex bg-gray-200 items-center leading-none gap-2'>
            <input type="text" className='w-[24vw] bg-transparent font-semibold  md:px-6 md:py-4 outline-none border-0 md:text-[1.2vw] px-2' placeholder='Search For Restaurant, Item or More' />
            <div className='bg-[#FF5200] py-3 px-5 mr-2 rounded-2xl flex items-center justify-center '>
              <MdSearch size={30} color='white' fontWeight={999} />  
            </div>
          </div>
        </div>
        <div className='w-full flex justify-center mt-10'>
            <div className='w-[25vw] h-[50vh] rounded-[10%]'>
              <img className='w-full h-full bg-cover' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png" alt="" />
            </div>
            <div className='w-[25vw] h-[50vh] rounded-[10%]'>
              <img className='w-full h-full bg-cover' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png" alt="" />
            </div>
            <div className='w-[25vw] h-[50vh] rounded-[10%]'>
              <img className='w-full h-full bg-cover' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png" alt="" />
            </div>
          </div>
      </div>
    </div>
  )
}

export default Hero