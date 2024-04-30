import React, { useContext, useState } from "react";
import a from "../assets/location.png";
import axios from "axios";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import Heading from "../components/Heading";
import imgi from "../assets/location.png";
import Loading from "../components/Loading";
import Button from "../components/Button";
const Location = () => {
  const navigate = useNavigate();
  const { setCity, city, loading, setLoading, backHandler } =
    useContext(AppContext);
  function getLocation() {
    setLoading(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else alert("No geolocation support");
  }
  async function showPosition(position) {
    const userCoordinates = {
      lat: position.coords.latitude,
      lon: position.coords.longitude,
    };
    sessionStorage.setItem("user-coordinates", JSON.stringify(userCoordinates));
    let API_KEY = "e46db18da6794a7fddb56583d9172cb0";
    let API = `https://api.openweathermap.org/geo/1.0/reverse?lat=${userCoordinates.lat}&lon=${userCoordinates.lon}&limit=5&appid=${API_KEY}`;
    console.log("Api done");
    try {
      const res = await (await axios.get(API)).data[0].name;
      setCity(res);
      setLoading(false);
      navigate(`/city/${res}`);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }
  console.log(loading);
  return (
    <div className=" ">
      {loading && <Loading />}
      {!loading && (
        <div className="bg-richblack-900 text-white h-screen mt-0 flex flex-col">
          <Heading />
          <div className=" mt-[240px]">
            <div className="flex rounded-md flex-col justify-center items-center border border-richblack-300 w-8/12 mx-auto bg-richblack-800">
              <img
                src={imgi}
                loading="lazy"
                alt=""
                width="80px"
                height="80px"
                className="  mt-8"
              />
              <p className=" mt-7 text-3xl">Grant Location Access</p>
              <p className="mt-3 text-2xl">
                Allow access to get weather Information
              </p>

              <Button
                onclick={() => getLocation()}
                text={"Grant Location"}
                customClasses={" mt-8 text-2xl"}
              />
              <Button
                onclick={() => backHandler()}
                text={"Go Back"}
                customClasses={" mb-5 mt-4 text-xl"}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Location;
