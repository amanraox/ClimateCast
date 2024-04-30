import React, { useContext, useEffect, useState } from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { FaSortAmountDownAlt, FaSortAmountUpAlt } from "react-icons/fa";
const FavTable = () => {
    const {fav} = useContext(AppContext)
    const { fetchDetails, minTemp, maxTemp, city } = useContext(AppContext);

    function checkWeather(e) {
      fetchDetails(e.target.innerHTML);
      // console.log(e.target.innerHTML);
      // console.log(e.target.innerText);
    }
    // console.log(fav)
  return (
    <div className="">
      <Table className=" text-center ">
        <Thead className=" text-richblack-200">
          <Tr>
            <Th className=" font-thin p-4">No.</Th>
            {/* <Th>Geoname Id</Th> */}
            <Th className=" font-thin">
              <div className=" flex justify-center gap-2 items-center">
                Name
              </div>
            </Th>
            </Tr>
        </Thead>
        {fav.map((i, index) => {
          {
            /* const name = replaceSpecialCharacters(i.name); */
          }
          index++;
          return (
            <Tbody key={i.geoname_id} className="">
              <Tr className="border border-richblack-500 group">
                <Td className="p-3 text-[rgb(255,60,60)]">{index}</Td>
                {/* <Td>{i.geoname_id}</Td> */}
                <Td
                  className="  text-richblack-25"
                  onClick={(e) => checkWeather(e)}
                >
                  <Link
                    to={`/city/${i}`}
                    className=" cursor-pointer hover:text-white  transition-all duration-200"
                  >
                    {i}
                  </Link>
                </Td>
              </Tr>
            </Tbody>
          );
        })}
      </Table>
    </div>
  );
};

export default FavTable;
