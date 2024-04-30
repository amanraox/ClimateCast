import React, { useContext, useState } from "react";
import Search from "../components/Search";
import Heading from "../components/Heading";
import { AppContext } from "../context/AppContext";

const Home = () => {
  const {city,setCity,setTab} = useContext(AppContext)

  return (
    <div className=" flex  flex-col min-h-screen text-white bg-richblack-900 font-inter">
    <div className=" w-11/12 mx-auto">
      <Heading  />
      <Search  />
    </div>
    </div>
  );
};

export default Home;
