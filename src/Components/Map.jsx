// import React from 'react';
// import { GoogleMap, LoadScript, Marker, Ad} from '@react-google-maps/api';

// const Map = () => {
//   const mapContainerStyle = {
//     width: '100%',
//     height: '100%', // Adjust as needed
//   };

//   const center = {
//     lat: 37.7749, 
//     lng: -122.4194, 
//   };
//   const locations = [
//     { lat: 37.7749, lng: -122.4194, label: "San Francisco" },
//     { lat: 34.0522, lng: -118.2437, label: "Los Angeles" },
//     { lat: 40.7128, lng: -74.0060, label: "New York" },
//     // Add more locations as needed
//   ];

//   return (
//     <LoadScript googleMapsApiKey="AIzaSyB9nW_l7Dw8WnnSCOJyJSGjtTYyF9ct3qk&amp;libraries=maps,marker,places,geometry">
//       <GoogleMap
//         mapContainerStyle={mapContainerStyle}
//         center={center}
//         zoom={4} 
//       >
//        <Marker position={{ lat: 18.52043, lng: 73.856743 }} />
     
//         {/* {locations.map((location, index) => (
//           <Marker
//             key={index}
//             position={{ lat: location.lat, lng: location.lng }}
//           />
//         ))} */}
//       </GoogleMap>
//     </LoadScript>
//   );
// };

// export default Map;



import React, { useEffect, useRef } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
// import { AdvancedMarkerElement } from '@googlemaps/marker';


const Map = () => {
  const mapRef = useRef(null);

  const mapStyles = {
    height: "400px",
    width: "100%",
  };

  const defaultCenter = {
    lat: 40.73061,
    lng: -73.935242,
  };

  const locations = [
    { lat: 40.73061, lng: -73.935242, label: "A" },
    { lat: 40.729512, lng: -73.941001, label: "B" },
    { lat: 40.735657, lng: -73.994431, label: "C" },
  ];

  useEffect(() => {
    if (mapRef.current) {
      const map = mapRef.current;

      locations.forEach((location) => {
        const markerDiv = document.createElement("div");
        markerDiv.innerHTML = `<div style="background-color: red; padding: 10px; color: white; font-weight: bold; border-radius: 8px;">
          ${location.label}
        </div>`;

      
      });
    }
  }, []);

  return (
    <LoadScript googleMapsApiKey="AIzaSyB9nW_l7Dw8WnnSCOJyJSGjtTYyF9ct3qk&amp;libraries=maps,marker,places,geometry" version="beta">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={defaultCenter}
        onLoad={(map) => (mapRef.current = map)}
      />
    </LoadScript>
  );
};

export default Map;



