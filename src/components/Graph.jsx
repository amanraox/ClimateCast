import React from "react";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Filler);

const Graph = ({ graphDetails }) => {
  // console.log("graph->", graphDetails);
  const labels = graphDetails.map((item) => item.dt_txt.slice(5, 16));
  const options = {
    responsive: true,
    scales: {
      y: {
        title: {
          display: true,
          text: "Temperature",
          color: "white",
        },
        ticks: {
          color: "white",
          fontSize: 40,
        },
      },
      x: {
        title: {
          display: true,
          text: "Date",
          color: "white",
        },
        ticks: {
          color: "white",
          fontSize: 40,
        },
      },
    },
    plugins: {
      subtitle: {
        display: true,
        text: "Custom Chart Subtitle",
      },
    },
  };
  const data = {
    labels,
    datasets: [
      {
        // fill: true,
        data: graphDetails.map((item) =>
          parseInt(item.main.temp - 273.15).toFixed(2)
        ),
        borderColor: "white",
        backgroundColor: "grey",
        pointStyle: "circle",
        pointRadius: 5,
        pointHoverRadius: 10,
      },
    ],
  };
  function displayData(e) {
    console.log(e.target.value);
  }
  return (
    <div className=" pl-3">
      <h2 className=" text-2xl font-light px-3">3 Hourly Forecast</h2>
    <div className=" w-100% overflow-x-auto overflow-y-hidden mt-5">
      <div className=" w-[3000px]">
        <Line options={options} data={data} width={0} height={300} />
      </div>
    </div>
    </div>
  );
};

export default Graph;
