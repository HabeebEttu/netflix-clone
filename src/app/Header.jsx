import React from 'react'

export default function Header() {
  return (
    <div className="flex items-center justify-between w-[80vw] mx-auto">
      <div className="w-[190px]">
        <img src="/Netflix_Logo_PMS.png" alt="" className='w-fit'/>
          </div>
          <div className="">
              <a href="" className='w-fit bg-red-600 rounded-md px-3.5 py-1.5 '>Sign In</a>
          </div>
    </div>
  );
}
