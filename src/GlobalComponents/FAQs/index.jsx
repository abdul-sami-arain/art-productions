import React from "react";
import "./style.css";
import Accordian from "../Accordian";
import MainHeading from "../Utils/mainHeading";

const faqs = [
    {
        question:"How much does video production cost?",
        answer:"Video production costs vary based on project length, complexity, and specific needs. At Art Production®, we offer customized quotes to fit your budget and goals. Contact us to discuss pricing for your project."
    },
    {
        question:"What video production services do you offer?",
        answer:"At Art Production®, we provide comprehensive video production services, including documentaries, short films, TV shows, commercials, and promotional videos. From planning to post-production, we ensure each project is crafted with creativity and professionalism."
    },
    {
        question:"How experienced is the Art Production® team?",
        answer:"With over 17 years in the industry, we’ve partnered with major networks like AL-JAZEERA TV and MBC TV and received awards, including the Silver Dolphin at Cannes. Our team has completed over 256 projects, consistently delivering top-quality work."
    },
    {
        question:"What’s your process for creating videos?",
        answer:"Our process includes understanding your vision, followed by scriptwriting, filming, and post-production editing. We ensure every detail aligns with your goals, and we also offer distribution support to maximize your project’s reach."
    },
]

export default function FAQs() {
    return(
        <div className="FAQs_section">
            <MainHeading align={"center"} width={"50%"} content1={"Light, Camera, Answers!"} content2={"(FAQs)"} />
            <div className="FAQs">
                {
                    faqs.map((item,index)=>(
                        <Accordian key={index} question={item.question} answer={item.answer} />
                    ))
                }
            </div>
        </div>
    )
}