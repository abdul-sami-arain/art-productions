import React from "react";
import "./style.css"

export default function ShortDescription({content,width}) {
    return(
            <p style={{width:width}} className="shortDescription" >{content}</p> 
    )
}