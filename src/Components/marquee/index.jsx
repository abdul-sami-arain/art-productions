import React from "react";
import "./style.css";
import MainHeading from "../../GlobalComponents/Utils/mainHeading";
import Button4 from "../../GlobalComponents/button3";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

export default function Marquee1() {
    const navigate = useNavigate();
    return (
         <div className="main_marquee">
            <div className="marquee1">
            <MainHeading width={'95%'} gap={'10px'} flexDirection={'row'} margin={"0 0 20px 0"} content1={"Our "} content2={"Highlights"} />
            <div className="slider_marquee">
                <div className="video_frame">
                    <video
                        src="https://framerusercontent.com/assets/ipJDJDzyGh28f0srj26FErvHFE.mp4"
                        autoPlay muted loop
                    >
                    </video>
                </div>
                <div className="video_frame">
                    <video src="https://framerusercontent.com/assets/1e2A7OU7TBR3pI5QOeDg8cPUCI.mp4" autoPlay muted loop></video>
                </div>
                <div className="video_frame">
                    <video src="https://framerusercontent.com/assets/ipJDJDzyGh28f0srj26FErvHFE.mp4" autoPlay muted loop></video>
                </div>
                <div className="video_frame">
                    <video src="https://framerusercontent.com/assets/tioFfbYDZayFhDa0ksUzRE6jr5k.mp4" autoPlay muted loop></video>
                </div>
                <div className="video_frame">
                    <video src="https://framerusercontent.com/assets/RFoMiPXhXPJrUB5GiUwVKomXjg.mp4" autoPlay muted loop></video>
                </div>
                <div className="video_frame">
                    <video src="https://framerusercontent.com/assets/1e2A7OU7TBR3pI5QOeDg8cPUCI.mp4" autoPlay muted loop></video>
                </div>
                <div className="video_frame">
                    <video src="https://framerusercontent.com/assets/ipJDJDzyGh28f0srj26FErvHFE.mp4" autoPlay muted loop></video>
                </div>
                <div className="video_frame">
                    <video src="https://framerusercontent.com/assets/ipJDJDzyGh28f0srj26FErvHFE.mp4" autoPlay muted loop></video>
                </div>
                <div className="video_frame">
                    <video src="https://framerusercontent.com/assets/ipJDJDzyGh28f0srj26FErvHFE.mp4" autoPlay muted loop></video>
                </div>
                <div className="video_frame">

                </div>
                <div className="video_frame">

                </div>
                <div className="video_frame">

                </div>
            </div>
           
        </div>
        <Button4 
            text_1={"See All Projects"} 
            text_2={"See All Projects"} 
            iconComponent={TbLayoutDashboardFilled} 
            width={"220px"}   
            navigateClick={()=>{
                    navigate("/our-projects")
                }} />
         </div>
    )
}