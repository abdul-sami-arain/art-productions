import React, { useState } from "react";
import "./style.css";
import arrow from "../../Assets/ei_arrow-up.png";

export default function Accordian({question,answer}) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`accordian ${isOpen ? "rotate" : ""}`} onClick={toggleAccordion}>

            <div className={`arrow ${isOpen ? "rotate" : ""}`}>
                <img src={arrow} alt="arrow" />
            </div>
            <p className={`question ${isOpen ? "open" : ""}`}>{question}</p>
            <p className="answer">{answer}</p>
        </div>
    );
}
