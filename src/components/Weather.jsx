import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Forecast from "./Forecast";
import Graph from "./Graph";
import Map from "./Map";
import { AppContext } from "../context/AppContext";
import NotFound from "./NotFound";
import Loading from "./Loading";
import { IoStarOutline } from "react-icons/io5";
import { IoStar } from "react-icons/io5";
const Weather = () => {
  const {
    notFound,
    city,
    date,
    weatherIcon,
    weather,
    weatherDesc,
    temp,
    feelsLike,
    minTemp,
    maxTemp,
    humidity,
    wind,
    visibility,
    foreDetails,
    graphDetails,
    coordinates,
    id,
    pressure,
    backHandler,
    fetchDetails,
    countryCode,
    loading,
    favHandler,
    star,
    setStar
  } = useContext(AppContext);
  
  function favClickHandler(city) {
    if (star) {
      setStar(false);
      favHandler(city);
    } else {
      setStar(true);
      favHandler(city);
    }
  }
  if(id)
  return (
    <div className=" text-white">
      {loading && <Loading />}
      {!loading && notFound && <NotFound />}
      {!loading && !notFound && (
        <div
          className={` sm:py-8 ${
            id <= 800
              ? id <= 799
                ? id < 700
                  ? id < 600
                    ? id < 500
                      ? "thunderstorm"
                      : "rain"
                    : "snow text-black"
                  : "fog text-black"
                : "sunny text-black"
              : "clouds"
          }`}
        >
          <div className=" min-h-screen flex flex-col gap-5 sm:w-11/12 lg:w-8/12 mx-auto h-full w-full bg-blue-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100">
            <div className=" flex justify-center items-center uppercase text-3xl font-bold p-3 gap-5 underline">
              {city}
              <img
                src={`https://flagsapi.com/${countryCode}/shiny/32.png`}
              ></img>
            </div>
            <div className=" mx-8  max-w-fit   flex gap-3">
              <button
                onClick={() => backHandler()}
                className="cursor-pointer hover:font-normal border rounded-xl border-gray-500 hover:bg-gray-500 transition-all duration-200 hover:scale-90 px-4 py-2 hover:border-richblack-900 hover:bg-richblack-700 "
              >
                Go Back
              </button>
              <button onClick={() => favClickHandler(city)} className=" w-10">
                {star && <IoStar className=" text-yellow-50 transition-all w-full duration-200 scale-[2] hover:scale-[2.3]"/>}
                {!star && <IoStarOutline className=" w-full scale-[2] hover:text-yellow-50 transition-all duration-200 hover:scale-[2.3]" />}
              </button>
            </div>
            <div className=" bg-gray-500 h-[1px] w-[90%] mx-auto mt-3"></div>

            {/* <WeatherBox date={date} /> */}
            <div className=" flex sm:flex-row flex-col justify-around p-3 ">
              <div className=" flex flex-col justify-center xs:max-w-fit xs:mx-auto md:mx-0">
                <div className=" flex">
                  <img
                    src={`http://openweathermap.org/img/w/${weatherIcon}.png`}
                    alt=""
                  />
                  <p className=" text-4xl ">{temp} ℃</p>
                </div>
                <p className=" text-lg my-2">Feels Like {feelsLike} ℃</p>
                <p className=" text-2xl">{weather}</p>
                <p className=" text-md capitalize">{weatherDesc}</p>
                <div className=" h-1 w-[10%] rounded-2xl bg-pink-600 my-3"></div>

                <p className=" text-lg font-light">
                  Min/Max Today : {minTemp}/{maxTemp} ℃
                </p>
                <div className=" flex flex-row sm:justify-between gap-5 mt-3">
                  <div className="hidden md:flex w-[2px] h-full bg-pink-600"></div>
                  <div className=" flex flex-col">
                    <p className=" text-md">Humidity : {humidity}%</p>
                    <p className=" text-md">Wind : {wind}m/s SSE</p>
                  </div>
                  <div className=" flex flex-col">
                    <p className=" text-md">Pressure : {pressure}hPa</p>
                    <p className=" text-md">Visibility : {visibility}km</p>
                  </div>
                </div>
              </div>
              <Map coordinates={coordinates} />
            </div>
            <Graph graphDetails={graphDetails} />
            <div className=" ">
              <Forecast foreDetails={foreDetails} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
