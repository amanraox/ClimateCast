import React, { useContext, useEffect, useState } from "react";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { AppContext } from "../context/AppContext";
import TableScroll from "./TableScroll";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import FavTable from "./FavTable";
const Search = () => {
  const navigate = useNavigate();
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  const { setCity, city, fetchDetails } = useContext(AppContext);
  const [favFlag, setFavFlag] = useState(false);

  function favHandler() {
    var favour = document.querySelector(".favour");
    if (favFlag) {
      setFavFlag(false);
      favour.classList.remove("bg-richblue-400");
      favour.classList.add("bg-richblack-900");
      favour.classList.remove("text-[rgb(50,253,255)]");
      favour.classList.add("text-richblack-50");
      favour.classList.remove("border-[rgb(50,253,255)]");
      favour.classList.add("border-richblack-300");
    } else {
      setFavFlag(true);
      favour.classList.remove("bg-richblack-900");
      favour.classList.add("bg-richblue-400");
      favour.classList.remove("text-richblack-50");
      favour.classList.add("text-[rgb(50,253,255)]");
      favour.classList.remove("border-richblack-300");
      favour.classList.add("border-[rgb(50,253,255)]");
    }
  }
  function submitHandler(e) {
    e.preventDefault();
    const city = e.target[0].value;
    // console.log(city);
    setCity(city);
    navigate(`/city/${city}`);
  }
  return (
    <div className="md:mt-[13rem] xs:mt-[10rem]  mb-16">
      <div className=" flex md:flex-row flex-col gap-4">
        <div className="w-[300px]  ">
          <form
            action=""
            onSubmit={(e) => submitHandler(e)}
            className=" flex gap-3"
          >
            <input
              className=" hover:border-[rgb(50,253,255)] hover:text-[rgb(50,253,255)] bg-richblack-900 w-full border border-richblack-300 rounded-md py-2 px-3 text-white capitalize"
              id="outlined-basic"
              placeholder="Enter City Name"
              label="Search"
              value={inputText}
              onChange={inputHandler}
            />
            <button
              type="submit"
              className="hover:scale-90 w-fit transition-all duration-200 bg-richblack-900 border border-richblack-300 rounded-md text-richblack-50  py-2 px-3 hover:text-[rgb(50,253,255)] hover:border-[rgb(50,253,255)]"
            >
              <IoSearch className="  scale-[1.4] transition-all duration-200"/>
            </button>
          </form>
        </div>

        <Link
          to="/location"
          className="hover:scale-90 w-fit transition-all duration-200 bg-richblack-900 border border-richblack-300 rounded-md text-richblack-50  py-2 px-3 hover:text-[rgb(50,253,255)] hover:border-[rgb(50,253,255)] "
        >
          Location
        </Link>
        <div
          className="hover:scale-90 w-fit favour transition-all duration-100 bg-richblack-900 border border-richblack-300 rounded-md text-richblack-50  py-2 px-3 hover:text-[rgb(50,253,255)] hover:border-[rgb(50,253,255)]"
          onClick={() => favHandler()}
        >
          <button className=" "> Favourites</button>
        </div>
      </div>
      {favFlag && (
        <div className="border border-richblack-500 rounded-md mt-5">
          <FavTable />
        </div>
      )}
      {!favFlag && (
        <div className="border border-richblack-500 rounded-md mt-5">
          <TableScroll input={inputText} />
        </div>
      )}
    </div>
  );
};

export default Search;
