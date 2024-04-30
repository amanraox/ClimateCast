import React from 'react'

const Button = ({text,onclick,children,disabled,outline,customClasses,type}) => {
  return (
    <div>
      <button
      disabled={disabled}
        className={`${customClasses} bg-richblack-800 border border-richblack-300 px-5 py-3 rounded-md hover:scale-90 hover:bg-richblack-900 transition-all duration-200`}
        onClick={onclick}
      >
        {text}
      </button>
    </div>
  );
}

export default Button
