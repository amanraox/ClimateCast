import React, { useContext } from 'react'
import Heading from './Heading';
import { AppContext } from '../context/AppContext';
const NotFound = () => {
    const {backHandler} = useContext(AppContext)
  return (
    <div className="bg-richblack-900 text-richblack-5 h-screen flex flex-col">
      <Heading  />
      <div className=" mt-[230px]  flex justify-center items-center flex-col gap-8">
        <h1 className="  text-5xl">City Not Found,</h1>
        <h1 className="  text-5xl my-3">Try Another One</h1>
        <button className=" px-6 py-3  text-richblack-25 rounded-md text-5xl border border-richblack-500" onClick={()=>backHandler()}>
          Go Back
        </button>
      </div>
    </div>
  );
}

export default NotFound
