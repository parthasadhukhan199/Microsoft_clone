import React from 'react'
import slogo from "../assets/search-svgrepo-com.svg"
import mlogo from "../assets/RE1Mu3b.png"
import clogo from "../assets/cart-shopping-svgrepo-com.svg"
import alogo from "../assets/account-svgrepo-com.svg"


export default function Navbar() {
  return (
    <>
      <div className="nav flex justify-between py-2">

            <div className='1st flex md:order-2'> 
                <div className="ham  px-2 py-1 md:hidden ">
                    <div className=" w-5 h-0.5 bg-black my-0.5 "></div>
                    <div className=" w-5 h-0.5 bg-black mt-0.5 "></div>
                    <div className=" w-5 h-0.5 bg-black mt-0.5 "></div>
                </div>
                <div className="search w-10 px-2 md:hidden">
                    <img src={slogo} alt="" />
                </div>
                
            </div>


            <div className='2nd w-28 flex md:order-1 md:px-3 md:w-48'>
                <img className='w-32 h-7' src={mlogo} alt="" />

                <div className='list_items   absolute bg-white md:bg-transparent  px-6 md:pt-[0.4rem] -translate-x-[96rem] md:translate-x-[7.25rem] mt-10 md:mt-0 '>
                    <ul className=' flex flex-col md:flex-row md:w-[35rem]  space-x-3 space-y-5 md:space-y-0 text-sm cursor-pointer '>
                        <li className='hover:underline'>Microsoft 365</li>
                        <li className='hover:underline'>Teams</li>
                        <li className='hover:underline'>Copilot</li>
                        <li className='hover:underline'>Windows</li>
                        <li className='hover:underline'>Surface</li>
                        <li className='hover:underline'>More</li>
                    </ul>
                </div>
            </div>


            <div className=' 3rd flex md:order-3'>
                <div className="search w-10 px-2 hidden md:block">
                    <img src={slogo} alt="" />
                </div>
                <div className="cart w-10 px-2">
                    <img src={clogo} alt="" />
                </div>
                <div className="account w-10 px-2">
                    <img src={alogo} alt="" />
                </div>
            </div>



      </div>
    </>
  )
}
