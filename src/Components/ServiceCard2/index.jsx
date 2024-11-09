import React from "react";
import "./style.css";
import PrimeryButton from "../../ControlledComponents/PrimeryButton/PrimeryButton";
import playBtn from '../../Assets/icons/play-button (1).png'
import PlayIcon from "../../GlobalComponents/Play-button-1";
import Button4 from "../../GlobalComponents/button3";
import { AiFillFire } from "react-icons/ai";
import { useNavigate } from "react-router-dom";


export default function ServiceCard2() {
    const navigate = useNavigate()
    return(
        <div className="service-name-2">
            <div className="content_section">
                <p className="content_section_p">
                    <span style={{fontWeight:"bold"}}>Founded in 2004, Art Production® is an award-winning media production company,</span> dedicated to transforming ideas into impactful stories that inspire and captivate audiences worldwide. We specialize in creating innovative and compelling content—whether it's documentaries, commercials, or live events—ensuring that every project leaves a lasting impression.
                </p>
                <Button4 
                    text_1={"Get Started Today"} 
                    text_2={"Get Started Today"} 
                    iconComponent={AiFillFire} 
                    width={"265px"}   
                    navigateClick={() => {
                        navigate("/contact-us")
                    }} 
                    height={"55px"}
                />
            </div>
            <div className="service-poster-2">
                {/* <img src={playBtn} alt="play" className="play-button" /> */}
                <div className="play-button">
                <PlayIcon height={"60px"} width={"60px"} />
                </div>
                
            </div>
        </div>
    )
}