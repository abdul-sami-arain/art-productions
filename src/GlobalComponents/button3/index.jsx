import "./style.css";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Button4({
    text_1,
    text_2, 
    width, 
    height, 
    padding,
    fontSize,
    lineHeight,
    fontWeight,
    color,
    arrowTrue,
    navigateClick,
    iconComponent: IconComponent,
    position,
    top,
    bottom,
    left,
    right,
    zIndex,
}) {
    return (
        <button
        style={{
            width: width, 
            height: height, 
            padding: padding,
            fontSize: fontSize,
            lineHeight: lineHeight,
            fontWeight: fontWeight,
            color: color,
            position:position,
            top:top,
            left:left,
            bottom:bottom,
            right:right,
            zIndex:zIndex
          }}
         className="button4" onClick={navigateClick}>
            <span className="hidText">
                {IconComponent && <IconComponent />} 
                <span className="hidText1">{text_2}</span> 
            </span>
            <p>
                {text_1}
            </p>
            <span className="icon"><FaArrowRightLong /></span>
        </button>
    )
}
