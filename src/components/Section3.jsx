import React from 'react'
import q from "../assets/Content-Card-Surface-Laptop-5-M1-Platinum-01-1.webp"
import w from "../assets/gldn-XSX-CP-Xbox-Series-X.webp"
import e from "../assets/Surface-Laptop-Studio-01-CP.jpeg"
import r from "../assets/Content-Card-Microsoft-365-Lifestyle-Sandstone-Icon-Toss.avif"

export default function Section3() {
  return (
    <div className='flex flex-col md:flex-row md:justify-between  items-center'>

         
      <div className='w-2/3 md:h-[24rem] shadow-lg mx-3 my-3 md:w-96'>
            <img className='w-full' src={q} alt="" />
            <h1 className=" text-xl font-bold px-6 py-3">Surface Laptop</h1>
            <p className='px-6 text-sm leading-6 '>Sophisticated style and multitasking speed powered by 12th Gen Intel® Core, with Windows 11.</p>

            <button className='mx-6 my-4  bg-[#0067b8] hover:bg-[#0066b9c9] px-4 py-2 text-white rounded-md '> learn more</button>
      </div>

      <div className='w-2/3 md:h-[24rem] shadow-lg mx-3 my-3 md:w-96'>
            <img className='w-full' src={w} alt="" />
            <h1 className=" text-xl font-bold px-6 py-3">Surface Laptop Studio</h1>
            <p className='px-6 text-sm leading-6 '>Flex your creative muscle on the most powerful Surface Laptop. Now available with Windows 11..</p>

            <button className='mx-6 my-4  bg-[#0067b8] hover:bg-[#0066b9c9] px-4 py-2 text-white rounded-md '> learn more</button>

      </div>

      <div className='w-2/3 md:h-[24rem] shadow-lg mx-3 my-3 md:w-96'>
            <img className='w-full' src={e} alt="" />
            <h1 className=" text-xl font-bold px-6 py-3">Xbox Series X</h1>
            <p className='px-6 text-sm leading-6 '>The fastest, most powerful Xbox ever.</p>

            <button className='mx-6 my-4  bg-[#0067b8] hover:bg-[#0066b9c9] px-4 py-2 text-white rounded-md '> learn more</button>
      </div>

      <div className='w-2/3 md:h-[24rem] shadow-lg mx-3 my-3 md:w-96'>
            <img className='w-full' src={r} alt="" />
            <h1 className=" text-xl font-bold px-6 py-3">Maximise the everyday with Microsoft 365</h1>
            <p className='px-6 text-sm leading-6 '>Get online protection, secure cloud storage and needs – all in one plan.</p>

            <button className='mx-6 my-4  bg-[#0067b8] hover:bg-[#0066b9c9] px-4 py-2 text-white rounded-md '> learn more</button>
      </div>

    </div>
  )
}
