import React from 'react'
import img from "../assets/Highlight-Surface-Pro-9-M1-Family-02-1_VP3-1083x600.avif"

export default function Section1() {
  return (
    <div className=' flex flex-col-reverse md:flex-row items-center bg-[#f2f2f2] pb-3 w-full'>


      <div className="left mx-6 shadow-lg bg-[#f2f2f3] w-11/12 px-10 md:shadow-none">

        <h1 className="text-4xl my-3">Surface Pro 9</h1>

        <p className=' md:text-xl'>Tablet versatility and laptop power — all in one ultra-portable device</p>

        <button className=' bg-[#0067b8]  hover:bg-[#4189cc] px-4 text-white  py-1 my-5 rounded-sm' > learn more -</button>

      </div>


      <div className="right ">
        <img className='w-full' src={img} alt="" />
      </div>


    </div>
  )
}
