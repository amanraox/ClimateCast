import React, { useContext, useEffect, useState } from "react";
import data from "../data/1008.json";
// import data from "../data/codeshack-output.json"
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { AppContext } from "../context/AppContext";
import Tablee from "./Tablee";
const TableScroll = (props) => {
  const { fetchDetails } = useContext(AppContext);
  const [nameFlag, setNameFlag] = useState(null);
  const [populationFlag, setPopulationFlag] = useState(null);
  const [countryFlag, setCountryFlag] = useState(null);
  let input = props.input;
  // const [filterData, setFilterData] = useState([])
  const [filterData, setFilterData] = useState(
    data.filter((e) => {
      if (props.input === "") {
        return data;
      } else {
        return e.name.toLowerCase().includes(input);
      }
    })
  );
  useEffect(()=>{
    setFilterData(
      data.filter((e) => {
        if (props.input === "") {
          return data;
        } else {
          return e.name.toLowerCase().includes(input);
        }
      })
    );
  },[props.input])

  let filteredData = data.filter((e) => {
    if (props.input === "") {
      return data;
    } else {
      return e.name.toLowerCase().includes(input);
    }
  });

  // Population Sort
  useEffect(() => {
    function sortByPopuInc() {
      let data = filteredData.sort((a, b) => {
        const A = parseInt(a.population); // ignore upper and lowercase
        const B = parseInt(b.population); // ignore upper and lowercase
        if (A < B) {
          return -1;
        }
        if (A > B) {
          return 1;
        }
        // names must be equal
        return 0;
      });
      setFilterData(data)
      filteredData=data
      console.log("Incre", filteredData);
    }
    function sortByPopuDec() {
      let data = filteredData.sort((a, b) => {
        const A = parseInt(a.population); // ignore upper and lowercase
        const B = parseInt(b.population); // ignore upper and lowercase
        if (A > B) {
          return -1;
        }
        if (A < B) {
          return 1;
        }
        // names must be equal
        return 0;
      });
      setFilterData(data)
      filteredData = data;
      console.log("Decre", filteredData);
    }
    if (populationFlag == true ) sortByPopuInc();
    else if(populationFlag ==false) sortByPopuDec();
  }, [populationFlag]);


  // Name sort
  useEffect(() => {
    function sortByNameInc() {
      let data = filteredData.sort((a, b) => {
        const A = a.name.toUpperCase(); // ignore upper and lowercase
        const B = b.name.toUpperCase(); // ignore upper and lowercase
        if (A < B) {
          return -1;
        }
        if (A > B) {
          return 1;
        }
        // names must be equal
        return 0;
      });
      setFilterData(data)
      filteredData=data
      console.log("Incre", filteredData);
    }
    function sortByNameDec() {
      let data = filteredData.sort((a, b) => {
        const A = a.name.toUpperCase(); // ignore upper and lowercase
        const B = b.name.toUpperCase(); // ignore upper and lowercase
        if (A > B) {
          return -1;
        }
        if (A < B) {
          return 1;
        }
        // names must be equal
        return 0;
      });
      setFilterData(data)
      filteredData = data;
      console.log("Decre", filteredData);
    }
    if (nameFlag == true ) sortByNameInc();
    else if(nameFlag ==false) sortByNameDec();
  }, [nameFlag]);


  // Country Name Sort
  useEffect(() => {
    function sortByCountryInc() {
      let data = filteredData.sort((a, b) => {
        const A = a.cou_name_en.toUpperCase(); // ignore upper and lowercase
        const B = b.cou_name_en.toUpperCase(); // ignore upper and lowercase
        if (A < B) {
          return -1;
        }
        if (A > B) {
          return 1;
        }
        // names must be equal
        return 0;
      });
      setFilterData(data);
      filteredData = data;
      console.log("Incre", filteredData);
    }
    function sortByCountryDec() {
      let data = filteredData.sort((a, b) => {
        const A = a.cou_name_en.toUpperCase(); // ignore upper and lowercase
        const B = b.cou_name_en.toUpperCase(); // ignore upper and lowercase
        if (A > B) {
          return -1;
        }
        if (A < B) {
          return 1;
        }
        // names must be equal
        return 0;
      });
      setFilterData(data);
      filteredData = data;
      console.log("Decre", filteredData);
    }
    if (countryFlag == true) sortByCountryInc();
    else if (countryFlag == false) sortByCountryDec();
  }, [countryFlag]);
  return (
    <div className="">
      <Tablee nameFlag={nameFlag} setNameFlag={setNameFlag} populationFlag={populationFlag} setPopulationFlag={setPopulationFlag} countryFlag={countryFlag} setCountryFlag={setCountryFlag}  data={filterData} />
    </div>
  )
};

export default TableScroll;
