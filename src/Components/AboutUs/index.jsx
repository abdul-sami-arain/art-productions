import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import MainHeading from "../../GlobalComponents/Utils/mainHeading";
import camera from "../../Assets/about/camera.png";
import PrimeryButton from "../../ControlledComponents/PrimeryButton/PrimeryButton";
import Button3 from "../../GlobalComponents/button-style-2";
import { useNavigate } from "react-router-dom";
import Button4 from "../../GlobalComponents/button3";
import { MdOutlineReadMore } from "react-icons/md";
import { MdReadMore } from "react-icons/md";
import { AiFillFire } from "react-icons/ai";

export default function AboutUs() {
    const navigate = useNavigate();
    const aboutUsRef = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (aboutUsRef.current) {
                const rect = aboutUsRef.current.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom >= 0) {
                    setInView(true);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Check on initial load

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div ref={aboutUsRef} className={`aboutUs ${inView ? "in-view" : ""}`}>
            <div className="leftSection">
                <MainHeading width={'95%'} gap={'10px'} flexDirection={'row'} margin={"0 0 0px 0"} content1={"About "} content2={"Us"} />
                <p>
                    <span>Founded in 2004, Art Production® is an award-winning media production company</span>, dedicated to transforming ideas into impactful stories that inspire and captivate audiences worldwide. We specialize in creating innovative and compelling content whether it's documentaries, commercials, or live events—ensuring that every project leaves a lasting impression...
                </p>
                <Button4 
                    text_1={"Read More"} 
                    text_2={"Read More"} 
                    iconComponent={AiFillFire} 
                    width={"200px"}   
                    navigateClick={() => {
                        navigate("/about-us")
                    }} 
                />
            </div>
            <div className="rightSection">
                <img src={camera} alt="Camera" />
            </div>   
        </div>
    );
}
