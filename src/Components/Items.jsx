import React from 'react'
import { useState } from 'react';
import { LuSettings2 } from "react-icons/lu";
import { TiArrowSortedDown } from "react-icons/ti";
import { HiMiniStar } from "react-icons/hi2";

const Items = () => {
    let [menus, setMenus] = useState(0)

    const originalMenu = [
        {
            id:1,
            img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/c997ac50-07f4-4dff-b1d6-03ace6065734_14780.jpg",
            rnname:"Pizza Hut",
            item:"Pizzas",
            place:"Pune",
        },
        {
            id:2,
            img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/5116a385bac0548e06c33c08350fbf11",
            rnname:"The Belgian Waffle Co.",
            item:"Waffle, Deserts, Ice Cream",
            place:"Hinjewadi",
        },
        {
            id:3,
            img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/a63b8ecb-89f9-449d-9b51-4dbaa27efe40_752535.JPG",
            rnname:"KFC",
            item:"Burgers, Biryani, American",
            place:"Pune Wale",
        },
        {
            id:4,
            img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/ec733942-4589-44d4-a543-64e83c412f72_36014.JPG",
            rnname:"Subway",
            item:"Drinks, Sandwich, Warp",
            place:"Tathwade",
        },
        {
            id:5,
            img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/cab874d5-c7ed-4122-9eb9-935992f4bcee_253596.JPG",
            rnname:"Burger King",
            item:"Burgers, American",
            place:"Hingewadi",
        },
        {
            id:6,
            img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/85ccae4e3576f9330af102c46ca85395",
            rnname:"Baskin Robbins-IceCream",
            item:"Deserts, Ice Cream",
            place:"Hingewadi",
        },
        {
            id:7,
            img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/bc4ec468-be5f-4817-a11d-a9b8578a99e6_23716.jpg",
            rnname:"McDonals's",
            item:"Burgers, Beverages",
            place:"Hingewadi",
        },
        {
            id:8,
            img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/c997ac50-07f4-4dff-b1d6-03ace6065734_14780.jpg",
            rnname:"Pizza Hut",
            item:"Pizzas",
            place:"Pune",
        },
        {
            id:9,
            img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/30/19a46a25-cc86-4bbf-8383-89e0db3cb9bb_643827.JPG",
            rnname:"WeFit - Protein Bowls",
            item:"Healthy Food, Salads",
            place:"Marunji",
        },
        {
            id:10,
            img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e165225d26130103fecf1c40f5dc3669",
            rnname:"Pizza Hut",
            item:"Pizzas",
            place:"Pune",
        },
        {
            id:11,
            img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/8/30/0df302b0-0a16-44f8-bc2c-a3f52f59430a_681607.jpg",
            rnname:"Pizza Hut",
            item:"Pizzas",
            place:"Pune",
        },
        {
            id:12,
            img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e165225d26130103fecf1c40f5dc3669",
            rnname:"Pizza Hut",
            item:"Pizzas",
            place:"Pune",
        },
        {
            id:13,
            img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e165225d26130103fecf1c40f5dc3669",
            rnname:"Pizza Hut",
            item:"Pizzas",
            place:"Pune",
        }
    ];

    const menu = [];
    for (let i = 0; i < 6; i++) {
        menu.push(...originalMenu);
    }

  return (
    <div className='w-full'>
        <div className='w-full max-w-[1200px] h-full mx-auto pt-14  px-4'>
            <div>
                <h1 className='md:text-2xl font-semibold'>Your Favorite Food, Just a Tap Away!</h1>
            </div>
            <div className='flex gap-2 mt-3'>
                <button className='border-2 px-4 py-1 rounded-full font-semibold flex items-center gap-2'>Filter <LuSettings2 size={18} /></button>
                <button className='border-2 px-4 py-1 rounded-full font-semibold flex items-center gap-2'>Sort By <TiArrowSortedDown /></button>
                <button className='border-2 px-4 py-1 rounded-full font-semibold'>Fast Delivery</button>
                <button className='border-2 px-4 py-1 rounded-full font-semibold'>New On Swiggy</button>
                <button className='border-2 px-4 py-1 rounded-full font-semibold'>Rating 4.0+</button>
                <button className='border-2 px-4 py-1 rounded-full font-semibold'>Pure Veg</button>
            </div>
            <div>
                <div className='border-b-2 border-slate-200'>
                    <div
                    className='grid grid-cols-4 gap-5 duration-1000'>
                            {menu.map((item,index)=> 
                            <div key={index} className='h-[300px] my-4 hover:scale-95 duration-200 cursor-pointer'>
                                <div className='w-[280px] h-3/5'>
                                    <img className='w-full h-full bg-cover rounded-2xl' src={item.img} alt="" />
                                </div>
                                <div className='px-2'>
                                    <h1 className='text-2xl font-bold'>{item.rnname}</h1>
                                    <div>   
                                        <div className='flex items-center gap-2 font-semibold leading-9'>
                                            <div className='p-1 bg-green-600 flex items-center justify-center rounded-full'>
                                                <HiMiniStar color='white' />
                                            </div>
                                            <h1>4.1</h1>
                                            <h1>25-30 mins</h1>
                                        </div>
                                        <h1 className=' font-[600] text-slate-500'>{item.item}</h1>
                                        <h1 className=' font-[600] text-slate-500'>{item.place}</h1>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Items