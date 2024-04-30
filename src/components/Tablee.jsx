import React, { useContext, useEffect, useState } from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import SortBtn from "./SortBtn";

const Tablee = ({
  nameFlag,
  setNameFlag,
  data,
  populationFlag,
  setPopulationFlag,
  countryFlag,
  setCountryFlag,
}) => {
  const { fetchDetails, minTemp, maxTemp, city } = useContext(AppContext);
  function checkWeather(e) {
    fetchDetails(e.target.innerHTML);
  }
  const nameFlagHandler = () => {
    if (nameFlag === null || nameFlag === false) {
      setNameFlag(true);
    } else setNameFlag(false);
  };
  const popFlagHandler = () => {
    if (populationFlag === null || populationFlag === false) {
      setPopulationFlag(true);
    } else setPopulationFlag(false);
  };
  const countryFlagHandler = () => {
    if (countryFlag === null || countryFlag === false) {
      setCountryFlag(true);
    } else setCountryFlag(false);
  };

  return (
    <div className="">
      <Table className=" text-center ">
        <Thead className=" text-richblack-200">
          <Tr>
            <Th className=" font-thin p-4">No.</Th>
            <Th className=" font-thin">
              <div className="flex items-center sm:justify-center">
                Name
                <SortBtn flag={nameFlag} onclick={() => nameFlagHandler()} />
              </div>
            </Th>
            <Th className=" font-thin">Hi / Lo ℃</Th>
            <Th className=" font-thin">
              <div className="flex items-center sm:justify-center">
                Country
                <SortBtn flag={countryFlag} onclick={() => countryFlagHandler()} />
              </div>
            </Th>
            <Th className=" font-thin">
              <div className="flex items-center sm:justify-center">
                Population
                <SortBtn
                  flag={populationFlag}
                  onclick={() => popFlagHandler()}
                />
              </div>
            </Th>
            <Th className=" font-thin">Timezone</Th>
            <Th className=" font-thin">Country Code</Th>
          </Tr>
        </Thead>
        {data.map((i, index) => {
          index++;
          return (
              <Tbody key={i.geoname_id} className="">
                <Tr className="border border-richblack-500 ">
                  <Td className="p-3 text-[rgb(255,60,60)]">{index}</Td>
                  <Td
                    className="  text-richblack-25"
                    onClick={(e) => checkWeather(e)}
                  >
                    <Link
                      to={`/city/${i.name}`}
                      className={`${
                        i.name == city
                          ? " text-[rgb(50,253,255)]"
                          : " text-richblack-50"
                      } cursor-pointer hover:text-[rgb(255,60,60)] hover:tracking-widest transition-all duration-200
                    `}
                    >
                      {i.name}
                    </Link>
                  </Td>
                  {city == i.name && (
                    <Td className=" text-[rgb(50,253,255)]">{`${minTemp} / ${maxTemp}`}</Td>
                  )}
                  {city != i.name && (
                    <Td className=" text-richblack-25">NaN</Td>
                  )}
                  <Td className=" text-richblack-25">{i.cou_name_en}</Td>
                  <Td className=" text-richblack-25">{i.population}</Td>
                  <Td className=" text-richblack-25">{i.timezone}</Td>
                  <Td className=" text-richblack-25">{i.country_code}</Td>
                </Tr>
              </Tbody>
          );
        })}
      </Table>
    </div>
  );
};

export default Tablee;
