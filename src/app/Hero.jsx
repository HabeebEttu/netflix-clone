import React from 'react'
import Header from './Header';
import { FaArrowRight } from 'react-icons/fa'
import { BiNavigation, BiSkipNext } from 'react-icons/bi'
import { } from "react-icons/fa6";
import {} from "react-icons/si";
import { MdNavigateNext } from "react-icons/md";

export default function Hero() {
    return (
      <div className="bg-[url('/netflix-bg.jpg')] h-[100vh] relative bg-cover overflow-visible">
        <div className="absolute top-0 left-0 w-[100vw] h-[100vh] bg-radial from-[#000000ce] via-[#000000a1] to-[#000000]">
          <div className="w-full flex items-center justify-between py-3">
            <Header />
          </div>
          <div className="flex flex-col items-center justify-center w-full h-[80vh]">
                    <span className='w-fit text-center text-5xl font-extrabold '>Unlimited movies,<br></br> <div className="h-3"></div> Tv Shows, and more</span>
                    <div className="my-3 ">Starts at ₦2200. Cancel anytime</div>
                    <div className="">Ready to watch? Enter your email to creatte or restart your membership </div>
                    <div className="flex item-center justify-center gap-3 my-4">
                      <input type='email' placeholder='Email Address' className='px-3 py-2 border border-[#d4c8c8] rounded-sm w-[30vw] bg-[#dfdfdf15]'/>
                      <button type='submit' className="bg-red-600 text-white text-2xl px-6 py-4 flex items-center rounded-sm">
                        Get Started <MdNavigateNext className="ml-2" />
                      </button>
                    </div>
          </div>
        </div>
      </div>
    );
}
