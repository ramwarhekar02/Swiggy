import React, { useState } from 'react'

const Navbar = () => {
  return (
    <div className='w-full bg-[#FF5200]'>
        <div className='flex justify-between text-white w-full max-w-[1240px] mx-auto md:py-4 px-2 sm:py-1 py-2'>
            <div className='flex md:h-16 gap-2 h-10'>
                <div className='md:w-10 flex items-center w-7'>
                    <img src="https://cdn-icons-png.flaticon.com/512/6779/6779884.png" alt="" />
                </div>
                <div className='flex items-center justify-center'>
                    <h1 className='md:text-3xl text-xl font-bold'>FoodShop</h1>
                </div>
            </div>
            <div className='flex gap-5 items-center md:h-16 h-10'>
                <div className='flex items-center gap-5'>
                    {["Contacts","Partner With Us","About"].map((index, item)=>(
                        <a className='font-["General_Sans"] md:text-xl text-sm font-semibold' href="#" key={item}>{index}</a>
                    ))}
                    <button className='md:w-[150px] rounded-xl font-semibold md:py-2 py-1 px-2 bg-black'>Login In</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar

// [#FF5200]