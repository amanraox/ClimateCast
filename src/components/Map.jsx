import React from "react";
import GoogleMapReact from "google-map-react";
const Map = ({ coordinates }) => {
  const AnyReactComponent = ({ text }) => <div className=" text-2xl">{text}</div>;
  // console.log(coordinates);
  const defaultProps = {
    center: {
      lat: 21.220640,
      lng: 81.306475,
    },
    zoom: 11,
  };
  const location ={
    lat:coordinates[0],
    lng:coordinates[1]
  }
  // console.log("done", coordinates);
  return (
    <div className="ls:w-96 ls:h-96 xs:w-80 xs:h-80 xs:mt-5 sm:mt-0  xs:mx-auto   ">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        center={location}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={coordinates[0]} lng={coordinates[1]} text="📍" />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
