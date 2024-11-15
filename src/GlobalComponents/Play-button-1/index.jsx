import React from 'react';
import './style.css';

const PlayIcon = ({ height, width, onClick }) => (
  <svg
    version="1.1"
    id="play"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    height={height}
    width={width}
    viewBox="0 0 100 100"
    enableBackground="new 0 0 100 100"
    xmlSpace="preserve"
    onClick={onClick}
  >
    {/* Define the drop shadow filter */}
    <defs>
      <filter id="shadow">
        <feDropShadow dx="2" dy="2" stdDeviation="3" floodColor="black" floodOpacity="0.5" />
      </filter>
    </defs>

    <path
      className="stroke-solid"
      fill="none"
      stroke="#ddbe72"
      d="M49.9,2.5C23.6,2.8,2.1,24.4,2.5,50.4C2.9,76.5,24.7,98,50.3,97.5c26.4-0.6,47.4-21.8,47.2-47.7
        C97.3,23.7,75.7,2.3,49.9,2.5"
      filter="url(#shadow)" /* Apply the shadow filter */
    />
    <path
      className="icon"
      fill="#ddbe72"
      d="M38,69c-1,0.5-1.8,0-1.8-1.1V32.1c0-1.1,0.8-1.6,1.8-1.1l34,18c1,0.5,1,1.4,0,1.9L38,69z"
    />
  </svg>
);

export default PlayIcon;
