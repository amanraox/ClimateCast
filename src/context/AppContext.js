import { createContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
const replaceSpecialCharacters = require("replace-special-characters");
export const AppContext = createContext();
export default function AppContextProvider({ children }) {
  let location = useLocation();

  const Weather_API = "https://api.openweathermap.org/data/2.5/forecast?q=";
  const Api_id = "&appid=78ed598f2c285ed927ce209249702481";
  const [fav, setFav] = useState([]);
  const [star, setStar] = useState(false);
  const [loading, setLoading] = useState(false);
  const [tab, setTab] = useState(false);
  const [city, setCity] = useState();
  const [date, setDate] = useState(null);
  const [weatherIcon, setWeatherIcon] = useState(null);
  const [weather, setWeather] = useState(null);
  const [weatherDesc, setWeatherDesc] = useState(null);
  const [temp, setTemp] = useState(null);
  const [feelsLike, setFeelsLike] = useState(null);
  const [minTemp, setMinTemp] = useState(null);
  const [maxTemp, setMaxTemp] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [wind, setWind] = useState(null);
  const [visibility, setVisibility] = useState(null);
  const [foreDetails, setForeDetails] = useState([]);
  const [graphDetails, setGraphDetails] = useState([]);
  const [coordinates, setCoordinates] = useState([]);
  const [id, setId] = useState(null);
  const [pressure, setPressure] = useState(null);
  const [countryCode, setCountryCode] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const navigate = useNavigate();
  const [para, setPara] = useState(null);

  if (
    location.pathname.split("/").length == 3 &&
    location.pathname.split("/").at(-1)
  !==para) {
    setPara(location.pathname.split("/").at(-1));
  } 
  useEffect(() => {
    const fetchDetails = async () => {
      setNotFound(false);
      setLoading(true);
      if (location.pathname.split("/").length < 3) {
        setLoading(false)
        return;
      }
      // console.log(location.pathname.split("/").at(-1));
      setCity(location.pathname.split("/").at(-1));
      try {
        // console.log(city);
        let API;
        if (!city) {
          API = `${Weather_API}${location.pathname.split("/").at(-1)}${Api_id}`;
        } else API = `${Weather_API}${city}${Api_id}`;
        const res = await (await axios.get(API)).data;
        // console.log("api");
        const lat = res.city.coord.lat;
        const lon = res.city.coord.lon;
        const current = res.list[0];
        const sendGraph = res.list;
        setGraphDetails(sendGraph);
        setCoordinates([lat, lon]);
        setDate(current.dt_txt);
        setWeather(current.weather[0].main);
        setWeatherIcon(current.weather[0].icon);
        setWeatherDesc(current.weather[0].description);
        setTemp(parseFloat(current.main.temp - 273).toFixed(2));
        setFeelsLike(parseFloat(current.main.feels_like - 273).toFixed(2));
        setMinTemp(parseFloat(current.main.temp_min - 273).toFixed(2));
        setMaxTemp(parseFloat(current.main.temp_max - 273).toFixed(2));
        setHumidity(current.main.humidity);
        setWind(current.wind.speed);
        setVisibility(parseFloat(current.visibility / 1000).toFixed(1));
        let details = [];
        for (let i = 0; i < 40; i += 8) {
          details.push(res.list[i]);
        }
        setForeDetails(details);
        setId(current.weather[0].id);
        setPressure(current.main.pressure);
        setCountryCode(res.city.country);
        if (!fav.includes(city)) setStar(false);
      } catch (error) {
        console.log(error);
        setNotFound(true);
      }
      setLoading(false);
    };
    fetchDetails();
  }, [para]);
  const fetchDetails = async (city) => {
    setLoading(true);
    // console.log("city->", city);
    if (!city) {
      return;
    }
    let API = `${Weather_API}${city}${Api_id}`;
    try {
      const res = await (await axios.get(API)).data;
      const lat = res.city.coord.lat;
      const lon = res.city.coord.lon;
      const current = res.list[0];
      const sendGraph = res.list;
      setGraphDetails(sendGraph);
      setCoordinates([lat, lon]);
      setDate(current.dt_txt);
      setWeather(current.weather[0].main);
      setWeatherIcon(current.weather[0].icon);
      setWeatherDesc(current.weather[0].description);
      setTemp(parseFloat(current.main.temp - 273).toFixed(2));
      setFeelsLike(parseFloat(current.main.feels_like - 273).toFixed(2));
      setMinTemp(parseFloat(current.main.temp_min - 273).toFixed(2));
      setMaxTemp(parseFloat(current.main.temp_max - 273).toFixed(2));
      setHumidity(current.main.humidity);
      setWind(current.wind.speed);
      setVisibility(parseFloat(current.visibility / 1000).toFixed(1));
      let details = [];
      for (let i = 0; i < 40; i += 8) {
        details.push(res.list[i]);
      }
      setForeDetails(details);
      setId(current.weather[0].id);
      setPressure(current.main.pressure);
      setCity(city);
      setCountryCode(res.city.country);
      setNotFound(false);
      if (!fav.includes(city)) setStar(false);

      // console.log("true");
    } catch (error) {
      console.log(error);
      setNotFound(true);
    }
    setLoading(false);
  };
  const backHandler = () => {
    // setCity(null);
    navigate("/");
  };
  const favHandler = (city) => {
    if (fav.includes(city)) {
      setFav(
        fav.filter(function (item) {
          return item != city;
        })
      );
    } else setFav([...fav, city]);
  };
  // console.log(fav);
  const value = {
    countryCode,
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
    notFound,
    loading,
    fav,
    star,
    loading,

    setLoading,
    setStar,
    setFav,
    favHandler,
    setLoading,
    setNotFound,
    setCountryCode,
    setCity,
    setTab,
    setDate,
    setWeatherIcon,
    setWeather,
    setWeatherDesc,
    setTemp,
    setFeelsLike,
    setMinTemp,
    setMaxTemp,
    setHumidity,
    setWind,
    setVisibility,
    setForeDetails,
    setGraphDetails,
    setCoordinates,
    setId,
    setPressure,
    fetchDetails,
    backHandler,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
