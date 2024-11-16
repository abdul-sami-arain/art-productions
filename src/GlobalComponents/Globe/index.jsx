import React, { useEffect, useRef, useState } from "react";
import Globe from "react-globe.gl";
import "./style.css";

export default function GlobeMap() {
  const globeEl = useRef(); // Reference to the Globe instance
  const [dimensions, setDimensions] = useState({ width: 700, height: 500 });

  const cities = [
    { name: "New York", lat: 40.7128, lng: -74.006 },
    { name: "Amsterdam", lat: 52.3676, lng: 4.9041 },
    { name: "Turkey", lat: 38.9637, lng: 35.2433 },
    { name: "Kuwait", lat: 29.3759, lng: 47.9774 },
    { name: "Paris", lat: 48.8566, lng: 2.3522 },
    { name: "Washington", lat: 38.9072, lng: -77.0369 },
    { name: "London", lat: 51.5074, lng: -0.1278 }
  ];

  const gData = cities.map(city => ({
    lat: city.lat,
    lng: city.lng,
    name: city.name,
    maxR: 1,
    propagationSpeed: 1,
    repeatPeriod: 10
  }));

  const colorInterpolator = (t) => `#57AEED`;

  useEffect(() => {
    // Handle screen resizing
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setDimensions({ width: 350, height: 300 }); // Mobile view dimensions
      } else {
        setDimensions({ width: 700, height: 500 }); // Default dimensions
      }
    };

    // Initialize dimensions
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (globeEl.current) {
      globeEl.current.controls().autoRotate = true; // Enable auto-rotation
      globeEl.current.controls().autoRotateSpeed = -3; // Set rotation speed
      globeEl.current.controls().enableZoom = false;
    }
  }, []);

  return (
    <div className="new_map">

    


      <div className="locations_detail left_side" >
      <div className="map_location_detail_4 location">

<p>
  Amsterdam
  <span>555 Madison Avenue, 17th<br /> Floor, New York, NY 10022</span>
</p>
<span className="c-word-glow">
  <span className="o-icon -size-8 c-stats_dot">

  </span>
</span>
</div>
<div className="map_location_detail_5 location">
<p>
  Istanbul
  <span>555 Madison Avenue, 17th<br /> Floor, New York, NY 10022</span>
</p>
<span className="c-word-glow">
  <span className="o-icon -size-8 c-stats_dot">

  </span>
</span>
</div>
<div className="map_location_detail_6 location">
<p>
  Washington
  <span>555 Madison Avenue, 17th<br /> Floor, New York, NY 10022</span>
</p>
<span className="c-word-glow">
  <span className="o-icon -size-8 c-stats_dot">

  </span>
</span>
</div>
      </div>

      <Globe
        className="globe-container"
        ref={globeEl}
        height={dimensions.height}
        width={dimensions.width}
        backgroundColor="rgba(255, 100, 50, 0)"
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        ringsData={gData}
        ringColor={() => colorInterpolator}
        ringMaxRadius="maxR"
        ringPropagationSpeed="propagationSpeed"
        ringRepeatPeriod="repeatPeriod"
      />

   
<div className="locations_detail right_side">

      <div className="map_location_detail_1 location">
        <span className="c-word-glow">
          <span className="o-icon -size-8 c-stats_dot">

          </span>
        </span>
        <p>
          Kuwait
          <span>555 Madison Avenue, 17th<br /> Floor, New York, NY 10022</span>
        </p>
      </div>
      <div className="map_location_detail_2 location">
        <span className="c-word-glow">
          <span className="o-icon -size-8 c-stats_dot">

          </span>
        </span>
        <p>
          Paris
          <span>555 Madison Avenue, 17th<br /> Floor, New York, NY 10022</span>
        </p>
      </div>
      <div className="map_location_detail_3 location">
        <span className="c-word-glow">
          <span className="o-icon -size-8 c-stats_dot">

          </span>
        </span>
        <p>
          London
          <span>555 Madison Avenue, 17th<br /> Floor, New York, NY 10022</span>
        </p>
      </div>
      </div>

      <div className="locations_detail_mobile_view">
      <div className="map_location_detail_4 location">
      <span className="c-word-glow">
  <span className="o-icon -size-8 c-stats_dot">

  </span>
</span>
<p>
  Amsterdam
  <span>555 Madison Avenue, 17th<br /> Floor, New York, NY 10022</span>
</p>

</div>
<div className="map_location_detail_5 location">
<span className="c-word-glow">
  <span className="o-icon -size-8 c-stats_dot">

  </span>
</span>
<p>
  Istanbul
  <span>555 Madison Avenue, 17th<br /> Floor, New York, NY 10022</span>
</p>

</div>
<div className="map_location_detail_6 location">
<span className="c-word-glow">
  <span className="o-icon -size-8 c-stats_dot">

  </span>
</span>
<p>
  Washington
  <span>555 Madison Avenue, 17th<br /> Floor, New York, NY 10022</span>
</p>

</div>
      <div className="map_location_detail_1 location">
        <span className="c-word-glow">
          <span className="o-icon -size-8 c-stats_dot">

          </span>
        </span>
        <p>
          Kuwait
          <span>555 Madison Avenue, 17th<br /> Floor, New York, NY 10022</span>
        </p>
      </div>
      <div className="map_location_detail_2 location">
        <span className="c-word-glow">
          <span className="o-icon -size-8 c-stats_dot">

          </span>
        </span>
        <p>
          Paris
          <span>555 Madison Avenue, 17th<br /> Floor, New York, NY 10022</span>
        </p>
      </div>
      <div className="map_location_detail_3 location">
        <span className="c-word-glow">
          <span className="o-icon -size-8 c-stats_dot">

          </span>
        </span>
        <p>
          London
          <span>555 Madison Avenue, 17th<br /> Floor, New York, NY 10022</span>
        </p>
      </div>

      </div>


     

    </div>
  );
}
