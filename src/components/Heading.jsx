import React from 'react'
import logo from "../assets/logo.png"
const Heading = () => {
  return (
    <div className=" flex justify-center items-center -translate-x-[5%] mx-auto gap-5 bg-richblack-900 w-full fixed flex-wrap">
    <img src={logo} alt="No logo"  className='w-[60px] sm:w-[100px] aspect-square mt-6 saturate-[5]' />
      <h1 className="heading text-3xl sm:text-5xl mt-8 font-inter uppercase">Clima Cast</h1>
    </div>
  );
}

export default Heading
