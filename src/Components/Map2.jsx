// import React, { useEffect, useRef } from 'react';
// import styled from 'styled-components';

// const GoogleMap = () => {
//   const mapRef = useRef(null);

//   // Define an array of locations with coordinates and attributes
//   const locations = [
//     { lat: 37.4239163, lng: -122.0947209, title: "Location 1" },
//     { lat: 37.4289163, lng: -122.0947209, title: "Location 2" },
//     { lat: 37.4239163, lng: -122.0997209, title: "Location 3" },
//     // Add more locations as needed
//   ];


//   useEffect(() => {
//     const initMap = async () => {
//       if (!window.google) {
//         console.error("Google Maps script is not loaded.");
//         return;
//       }
  
//       const { Map } = await google.maps.importLibrary("maps");
//       const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  
//       const map = new Map(mapRef.current, {
//         center: { lat: 37.4239163, lng: -122.0947209 },
//         zoom: 14,
//         mapId: "4504f8b37365c3d0",
//         // styled: darkTheme, 
//       });
  
//       // Loop through locations and add markers
//       locations.forEach((location) => {
//         new AdvancedMarkerElement({
//           map,
//           position: { lat: location.lat, lng: location.lng },
//           title: location.title,  
//         });
//       });
//     };
  
//     // Set a timeout to delay the execution of initMap
//     const timer = setTimeout(() => {
//       initMap();
//     }, 5000);
  
//     // Clear the timeout if the component unmounts to avoid memory leaks
//     return () => clearTimeout(timer);
//   }, [locations]);
  

//   return (
//     <div
//       ref={mapRef}
//       style={{ width: '100%', height: '100%' }}
//     ></div>
//   );
// };

// export default GoogleMap;





// import React from 'react';
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// const containerStyle = {
//   width: '100%',
//   height: '400px',
// };

// const center = {
//   lat: 37.7749, // Latitude for center
//   lng: -122.4194, // Longitude for center
// };

// // Replace this with your actual API key
// const apiKey = "AIzaSyB9nW_l7Dw8WnnSCOJyJSGjtTYyF9ct3qk"; 

// const GoogleMap1 = () => {
//   return (
//     <LoadScript googleMapsApiKey={apiKey}>
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         center={center}
//         zoom={10}
//       >
//         {/* Place a Marker at the center */}
//         <Marker position={center} />
//       </GoogleMap>
//     </LoadScript>
//   );
// };

// export default GoogleMap1;



import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, MarkerF as Marker } from '@react-google-maps/api';
import glowIcon from "../Assets/glowIcon.png"

const containerStyle = {
  width: '100%',
  height: '450px',
};

const center = {
  lat: 37.7749,
  lng: -122.4194, // San Francisco
};

const locations = [
  { lat: 37.7749, lng: -122.4194, title: "San Francisco" },
  { lat: 37.8044, lng: -122.2712, title: "Oakland" },
  { lat: 37.6879, lng: -122.4702, title: "Daly City" }
];

const darkTheme = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#242f3e"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#746855"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#242f3e"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#263c3f"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#6b9a76"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#38414e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#212a37"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9ca5b3"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#746855"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#1f2835"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#f3d19c"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#2f3948"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#17263c"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#515c6d"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#17263c"
      }
    ]
  }
];


const GoogleMap1 = () => {
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    setMapLoaded(true);
  }, []);

  const CustomTooltip = ({ data }) => {
    return (
      <div className="custom-tooltip">
        {/* Display tooltip content using data */}
        <p style={{color:"white"}}><b>{data.title}eljdfl;ewflj';wlemf';lnew;lfn;lwenf'l;nwe;flnlernwf;lnew;lfn</b></p>
        {/* Add additional details as needed */}
      </div>
    );
  };
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyB9nW_l7Dw8WnnSCOJyJSGjtTYyF9ct3qk" // Replace with your Google Maps API key
    >
      {mapLoaded && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          options={{
            styles:darkTheme
          }}
        >
          {locations.map((location, index) => (
            <Marker
              key={index}
              position={{ lat: location.lat, lng: location.lng }}
              title={location.title}
              icon={{
                url: glowIcon, // Replace with your actual image URL
                
              }}
              infoWindow={<CustomTooltip data={locations[index]} />}
            />
          ))}
        </GoogleMap>
      )}
    </LoadScript>
  );
};

export default GoogleMap1;
