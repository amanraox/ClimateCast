import React, { useEffect } from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
const Forecast = ({ foreDetails }) => {
  return (
    <div className=" p-3">
      <h2 className=" p-3 text-2xl font-light">5 Days Forecast</h2>
      <div className="   sm:w-full ">
      {/* <div className=" flex justify-center items-center flex-col flex-wrap"> */}
        {foreDetails?.map((item, i) => {
          {
            /* console.log("item-> ",item) */
          }
          return (
            <div key={i}>
              <Table  className=" sm:text-left p-3 sm:mx-auto">
                <Tbody>
                  <td className=" text-center sm:w-1/3">{item?.dt_txt}</td>
                  <td className=" flex flex-row justify-center items-center sm:w-full">
                    <div className=" flex gap-3 items-center justify-center">
                      <img
                        src={`http://openweathermap.org/img/w/${item?.weather[0].icon}.png`}
                        alt=""
                      />
                      <p className="">
                        {`${(item.main.temp - 273.15).toFixed(2)}/${(
                          item.main.feels_like - 273.15
                        ).toFixed(2)} ℃`}
                      </p>
                    </div>
                  </td>
                  <td className=" text-center capitalize sm:w-1/4">
                    {item.weather[0].description}
                  </td>
                </Tbody>
              </Table>
                <div className=" h-[1px] w-[60%] sm:hidden bg-richblack-300 mx-auto my-3 ">
                </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Forecast;
