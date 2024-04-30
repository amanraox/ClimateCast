import React from 'react'
import Heading from './Heading';

const Loading = () => {
  return (
    <div>
      <Heading/>
      <div className=" min-h-screen flex justify-center items-center bg-richblack-900">
        <div className="spinner "></div>
      </div>
    </div>
  );
}

export default Loading
