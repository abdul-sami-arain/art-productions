import React from "react";
import "./style.css";
import MainHeading from "../Utils/mainHeading";
import PrimeryButton from "../../ControlledComponents/PrimeryButton/PrimeryButton";
import { useNavigate } from "react-router-dom";
import Button4 from "../../GlobalComponents/button3";
import { MdOutlineReadMore } from "react-icons/md";
import { MdReadMore } from "react-icons/md";
import { AiFillFire } from "react-icons/ai";

export default function ReadyToAsk() {
    const navigate = useNavigate();
    const navigateToContactPage = () => {
        navigate(`/contact-us`)
    }
    return(
        <div className="readyToAsk">
            <MainHeading width={'95%'} gap={'10px'} flexDirection={'row'} margin={"0"} content1={"Ready to work "} content2={"with us ?"} />
            {/* <PrimeryButton 
                text={'Get Started Today'} 
                width={'280px'} 
                height={'55px'}
                fontSize={'18px'}
                lineHeight={'22px'}
                fontWeight={'400'}
                color={'#fff'}
                arrowTrue={true}
                navigateClick={navigateToContactPage}
            /> */}
              <Button4 
            text_1={"Get Started"} 
            text_2={"Get Started"} 
            iconComponent={AiFillFire} 
            width={"220px"}   
            navigateClick={()=>{
                    navigate("/contact-us")
                }} />
        </div>
    )
}
