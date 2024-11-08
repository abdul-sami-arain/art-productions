import React from "react";
import "./style.css"

export default function MainHeading({content1,content2,margin,width,align, flexDirection, gap}) {
    return(
            <h3 
                style={{
                    margin:margin,
                    width:width,
                    textAlign:align,
                    flexDirection: flexDirection,
                    gap: gap,
                }} 
                className="mainHeading" >
                    {content1} 
                    <span>{content2}</span>
                </h3>
    )
}