import React, { useRef, useState } from 'react'
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import { HiMiniStar } from "react-icons/hi2";

const Menu = () => {

    let [value, setValue] = useState(0)
    let [menus, setMenus] = useState(0)

    let RightBtn = ()=> {
        value >= 184 ? "" : setValue((prev)=> prev + 46)
    }

    let leftBtn = ()=> {
        value <= 0 ? "" : setValue((prev)=> prev - 46)
    }

    const menu = [
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
    ]

    const data = [ 
        {
            id:1,
            image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png"
        },
        {
            id:2,
            image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_160,h_192/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png"
        },
        {
            id:3,
            image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_160,h_192/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_burger.png"
        },
        {
            id:4,
            image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_160,h_192/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Chinese.png"
        },
        {
            id:5,
            image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_160,h_192/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_cake.png"
        },
        {
            id:6,
            image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_160,h_192/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/17/58760e8e-324f-479e-88fa-31800120ea38_Rolls1.png"
        },
        {
            id:7,
            image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_160,h_192/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Momos.png"
        },
        {
            id:8,
            image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_160,h_192/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/f1263395-5d4a-4775-95dc-80ab6f3bbd89_samosa.png"
        },
        {
            id:9,
            image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_160,h_192/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Pure%20Veg.png"
        },
        {
            id:10,
            image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_160,h_192/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/f1263395-5d4a-4775-95dc-80ab6f3bbd89_shawarma.png"
        },
        {
            id:11,
            image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_160,h_192/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/f1263395-5d4a-4775-95dc-80ab6f3bbd89_pasta.png"
        },
        {
            id:12,
            image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_160,h_192/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/f1263395-5d4a-4775-95dc-80ab6f3bbd89_pakoda.png"
        },
        {
            id:13,
            image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_160,h_192/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Noodles.png"
        },
        {
            id:14,
            image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_160,h_192/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Pav%20Bhaji.png"
        },
        {
            id:15,
            image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_160,h_192/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Kachori.png"
        },
        {
            id:16,
            image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_160,h_192/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Salad.png"
        },
        {
            id:17,
            image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_160,h_192/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Dosa.png"
        },
        {
            id:18,
            image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_160,h_192/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_chole%20bhature.png"
        },
        {
            id:19,
            image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_160,h_192/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/f1263395-5d4a-4775-95dc-80ab6f3bbd89_pastry.png"
        },
        {
            id:20,
            image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_160,h_192/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Khichdi.png"
        }
    ]

    console.log(menus)


    let prevBtn = ()=> { 
        menus <= 0 ? "" : setMenus((prev)=> prev - 49)
    }

    let nextBtn = ()=> { 
        menus >= 240 ? "" : setMenus((prev)=> prev + 49)
    }

    

  return (
    <div className='w-full rounded-2xl'>
        <div className='w-full max-w-[1200px] h-full mx-auto pt-14  px-4'>
            <div className='flex items-center justify-between'>
                <div>
                    <h1 className='md:text-2xl font-semibold'>Your Favorite Food, Just a Tap Away!</h1>
                </div>
                <div className='flex gap-2'>
                    <div onClick={leftBtn} className='bg-gray-300 p-2 rounded-full'>
                        <GoArrowLeft />
                    </div>
                    <div  onClick={RightBtn} className='bg-gray-300 p-2 rounded-full'>
                        <GoArrowRight />
                    </div>
                </div>
            </div>
            <div className='overflow-hidden pb-7 border-b-2 border-slate-200'>
                <div   
                style={{translate:`-${value}%`}}
                className='flex mt-10 gap-4 duration-1000' >
                {
                    data.map((item, index)=>(
                            <img key={index} className='w-[150px] h-[200px]  bg-cover' src={item.image} alt="#" />
                        ))
                    }
                </div>
            </div>
            <div className='py-7'>
                <div className='flex items-center justify-between'>
                    <h1 className='md:text-2xl font-semibold'>Top Restaurants in Pune</h1>
                    <div className='flex gap-2'>
                        <div onClick={prevBtn} className='bg-gray-300 p-2 rounded-full'>
                            <GoArrowLeft />
                        </div>
                            <div onClick={nextBtn} className='bg-gray-300 p-2 rounded-full'>
                                <GoArrowRight />
                            </div>
                        </div>
                    </div>
                <div className='overflow-hidden border-b-2 border-slate-200'>
                    <div style={{translate:`-${menus}%`}} 
                        className='flex gap-5 duration-1000'>
                            {menu.map((item,index)=> 
                            <div key={index} className='w-[500px] h-[300px] my-10 hover:scale-95 duration-200'>
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

export default Menu