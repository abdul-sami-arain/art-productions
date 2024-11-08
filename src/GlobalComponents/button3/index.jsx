import "./style.css";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { TbLayoutDashboardFilled } from "react-icons/tb";



export default function Button4(params) {
    return (
        // <div className="highlight">
        //     <span className="button" href="#">see all projects</span>
        // </div>
        // <button className="glow-on-hover">
        //     abcs
        // </button>
    //     <div class="container">
    //     <div class="center">
    //       <button class="btn">
    //         <svg width="180px" height="60px" viewBox="0 0 180 60" class="border">
    //           <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
    //           <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
    //         </svg>
    //         <span>HOVER ME</span>
    //       </button>
    //     </div>


        
    //   </div>

      // <div className="highlight">
        //     <span className="button" href="#">see all projects</span>
        // </div>
        // <button className="glow-on-hover">
        //     abcs
        // </button>
    //     <button class="button--bop">
    //     See All Projects
    //   </button>

    <button className="button4">
        <span className="hidText">
            <TbLayoutDashboardFilled/> 
            <span className="hidText1">See All Projects</span> 
        </span>
        <p>
        See All Projects
        </p>
        <span className="icon"><FaArrowRightLong/></span>

    </button>
    )
}