import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='w-full bg-[#FF5200] text-white'>
      <div className='w-full max-w-[1200px] mx-auto py-10 px-4'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='text-center md:text-left'>
            <h1 className='text-2xl font-bold'>FoodShop</h1>
            <p className='mt-2'>Delicious meals delivered to your doorstep.</p>
          </div>
          <div className='flex gap-4 mt-4 md:mt-0'>
            <a href="#" className='p-2 bg-white text-[#FF5200] rounded-full'>
              <FaFacebookF />
            </a>
            <a href="#" className='p-2 bg-white text-[#FF5200] rounded-full'>
              <FaTwitter />
            </a>
            <a href="#" className='p-2 bg-white text-[#FF5200] rounded-full'>
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className='mt-8 border-t border-gray-300 pt-4'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <p className='text-sm'>© 2024 FoodShop. All rights reserved.</p>
            <div className='flex gap-4 mt-4 md:mt-0'>
              <a href="#" className='text-sm'>Privacy Policy</a>
              <a href="#" className='text-sm'>Terms of Service</a>
              <a href="#" className='text-sm'>Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;