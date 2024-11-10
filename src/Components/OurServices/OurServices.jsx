import React, { useState } from 'react';
import './OurServices.css';
import videoProductionImage from '../../Assets/services-images/portrait-fitness-influencer.png'
import documentriesImage from '../../Assets/services-images/private-investigator-searching-files-based-case-names-archive_482257-83351 1.png'
import creativeInterviewImage from '../../Assets/services-images/high-angle-man-with-laptop-podcast.png'
import commercialImage from '../../Assets/services-images/man-woman-looking-clipboard.png'
import eventManagmentImage from '../../Assets/services-images/man-making-music-bedroom-front-view.png'
import shortFilmImage from '../../Assets/services-images/man-filming-with-professional-camera.png'
import markeetingImage from '../../Assets/services-images/tech-vlogger.png'
// import Button from '../../ControlledComponents/PrimeryButton/PrimeryButton';
import PrimeryButton from '../../ControlledComponents/PrimeryButton/PrimeryButton';
import { useNavigate } from 'react-router-dom';
import Button3 from '../../GlobalComponents/button-style-2';
import Button4 from '../../GlobalComponents/button3';
import { TbLayoutDashboardFilled } from "react-icons/tb";
const OurServices = () => {
    const servicesData = [
        {name: 'Video Production', checkName: 'Video Production', img: videoProductionImage, para: 'We transform ideas into compelling video content, from script to screen, with precision and creativity.', gridClass: 'video-production'},
        {name: 'Documentaries', img: documentriesImage, para: 'Bringing real stories to life, we create documentaries that inform, inspire, and captivate audiences.', gridClass: 'documentaries'},
        {name: 'Creative Interview', img: creativeInterviewImage, para: 'Our creative interviews capture authentic voices and perspectives, engaging viewers with impactful storytelling.', gridClass: 'creative-interview'},
        {name: 'Commercial & Advertisement', img: commercialImage, para: 'Eye-catching and memorable, our commercials spotlight your brand and resonate with your target audience.', gridClass: 'commercial'},
        {name: 'Event Management', img: eventManagmentImage, para: 'We plan, coordinate, and execute events seamlessly, turning your vision into an unforgettable experience.', gridClass: 'event-managment'},
        {name: 'Short Films', img: shortFilmImage, para: 'With artistry and attention to detail, our short films evoke emotion and connect meaningfully with viewers.', gridClass: 'short-films'},
        {name: 'Marketing', img: markeetingImage, para: 'We create smart marketing plans that help your brand stand out and connect with the right audience.', gridClass: 'markeeting'},

    ]
    const [currentIndex, setCurrentIndex] = useState(null)
    const handleMouseOver = (index) => {setCurrentIndex(index)}
    const handleMouseLeave = () => {setCurrentIndex(null)}

    const navigate = useNavigate();
  return (
    <div className='our-services-main-section'>
        <h3>Our <span>Services</span></h3>
        <div className='services-show-case-main-container'>
            
            {servicesData.map((items, index) => (
                <div 
                    className={`grid-col ${items.gridClass}`}  
                    onMouseEnter={() => handleMouseOver(index)} 
                    onMouseLeave={handleMouseLeave}
                >
                    <div className={`flesh-container ${currentIndex === index ? 'slide-flash' : ''}`}></div>
                    <img src={items.img} alt='video production' />
                    <div 
                        className={`col-overlay ${currentIndex === index ? 'show-overlay' : ''}`}
                    > 
                        <h3>{items.name}</h3>
                        <div className={`col-inner-overlay ${currentIndex === index ? 'show-inner-overlay' : ''}`}>
                            <div className={`inner-overlay-containt ${currentIndex === index  ? 'inner-overlay-containt-effect' : ''}`}>
                                <h3>{items.name}</h3>
                                <p>{items.para}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        <div className=''>
            {/* <PrimeryButton 
                text={'See All Projects'} 
                width={'243px'} 
                height={'55px'}
                fontSize={'18px'}
                lineHeight={'22px'}
                fontWeight={'400'}
                color={'#fff'}
                arrowTrue={true}
                navigateClick={()=>{
                    navigate("/our-projects")
                }}
            /> */}
              <Button4 text_1={"See All Services"} text_2={"See All Services"} iconComponent={TbLayoutDashboardFilled} width={"220px"}   navigateClick={()=>{
                    navigate("/services")
                }} />
        </div>
      
    </div>
  )
}

export default OurServices
