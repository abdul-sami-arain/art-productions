import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const GoogleMap = () => {
  const mapRef = useRef(null);

  // Define an array of locations with coordinates and attributes
  const locations = [
    { lat: 37.4239163, lng: -122.0947209, title: "Location 1" },
    { lat: 37.4289163, lng: -122.0947209, title: "Location 2" },
    { lat: 37.4239163, lng: -122.0997209, title: "Location 3" },
    // Add more locations as needed
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

  // useEffect(() => {
  //   const initMap = async () => {
  //     if (!window.google) {
  //       console.error("Google Maps script is not loaded.");
  //       return;
  //     }

  //     const { Map } = await google.maps.importLibrary("maps");
  //     const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  //     const map = new Map(mapRef.current, {
  //       center: { lat: 37.4239163, lng: -122.0947209 },
  //       zoom: 14,
  //       mapId: "4504f8b37365c3d0",
  //       // styled: darkTheme, 
  //     });

  //     // Loop through locations and add markers
  //     locations.forEach((location) => {
  //       new AdvancedMarkerElement({
  //         map,
  //         position: { lat: location.lat, lng: location.lng },
  //         title: location.title,  
  //       });
  //     });
  //   };

  //   initMap();
  // }, [locations]); // Dependency array to re-run if locations change

  return (
    <div
      ref={mapRef}
      style={{ width: '100%', height: '100%' }}
    ></div>
  );
};

export default GoogleMap;
