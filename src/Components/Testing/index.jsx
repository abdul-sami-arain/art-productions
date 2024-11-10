import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import bgImgStories from "../../Assets/stories/stories-section-bg.png"
import './style.css';
import MainHeading from '../../GlobalComponents/Utils/mainHeading';
import alJazeeraLogo from '../../Assets/logos/aljazeera.png';
// import arrowLeft from '../../Assets/icons/arrow-left-white.png';
// import arrowRight from '../../Assets/icons/arrow-white-right.png';
import { MdArrowForwardIos  } from "react-icons/md";
import { MdArrowBackIos  } from "react-icons/md";


// Import required modules
import { Pagination, Autoplay } from 'swiper/modules';

export default function SwiperSlider() {
    const desktopSwiperRef = useRef(null); // Create a ref to access Swiper instance
    const mobileRef = useRef(null);

    // Custom navigation functions
    // const handleNext = () => {
    //     swiperRef.current.swiper.slideNext(); // Go to the next slide
    // };

    // const handlePrev = () => {
    //     console.log("working")
    //     swiperRef.current.swiper.slidePrev(); // Go to the previous slide
    // };
       const handleNext = () => {
        if (desktopSwiperRef.current) {
            desktopSwiperRef.current.swiper.slideNext(); // Go to the next slide
        }
    };

    const handlePrev = () => {
        if (desktopSwiperRef.current) {
            desktopSwiperRef.current.swiper.slidePrev(); // Go to the previous slide
        }
    };
    
    const storiesData = [
        {
            logo: alJazeeraLogo, post: `Art Production® transformed our project at Al Jazeera with their creative vision. Their ability to
deliver high-quality, impactful documentaries is unparalleled.`,
            name: 'Ahmad', position: 'Creative Head at Al Jazeera'
        },
        {
            logo: alJazeeraLogo, post: `Working with Art Production® on Mahgarcom was an absolute pleasure. Their innovative approach
and dedication to quality made a huge difference to our project at Orient TV.`,
            name: 'Zainab Al-Mansoori', position: 'Creative Head at Orient TV'
        },
        {
            logo: alJazeeraLogo, post: `Art Production® elevated our documentary Guardians of Democracy with their exceptional
storytelling and attention to detail. Abdos leadership ensures every project is executed flawlessly.`,
            name: 'Mohammed Aziz', position: 'Program Director at Al-Arabiya TV'
        },
        {
            logo: alJazeeraLogo, post: `The production of Out of the Place with Art Production® was a true success. Their creativity and
professionalism delivered exceptional results under tight deadlines.`,
            name: 'Nadia El-Sayed', position: 'Executive Producer at Syrian TV'
        },
        {
            logo: alJazeeraLogo, post: `Art Production® brought our documentary Peace Underground to life with remarkable attention to
detail. Their expertise in telling powerful, untold stories is second to none.`,
            name: 'Omar Khalil', position: 'Content Director at MBC TV'
        },

    ]

    return (
        <>
        <div style={{
                backgroundImage: `url(${bgImgStories})`
            }}  className='mySlider smile'>
                <MainHeading width={'95%'} gap={'10px'} flexDirection={'row'} align={'center'} content1={"Stories That Make "} content2={"Us Smile!"} />
                
                <div onClick={handlePrev} className="swiper-button-prev-cust"><MdArrowBackIos /></div>
                
                <Swiper
                    ref={desktopSwiperRef}
                    spaceBetween={5}
                    slidesPerView={1.6}
                    initialSlide={1}
                    loop={true}
                    centeredSlides={true}
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 3000, // 3 seconds delay
                        disableOnInteraction: false,
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                >
                    {storiesData.map((item, index) => (
                        <SwiperSlide key={index} className='innerSliderContent'>
                            <img src={item.logo} alt='logo' />
                            <p>{item.post}</p>
                            <div>
                                <h3>{item.name}</h3>
                                <h4>{item.position}</h4>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div onClick={handleNext} className="swiper-button-next-cust"><MdArrowForwardIos /></div>
            </div>

            <div style={{
                backgroundImage: `url(${bgImgStories})`
            }} className='mobile-view-mySlider'>
                <MainHeading width={'95%'} gap={'10px'} flexDirection={'row'} align={'center'} content1={"Stories That Make "} content2={"Us Smile!"} />
                
                <Swiper
                    ref={mobileRef}
                    spaceBetween={5}
                    slidesPerView={1.2}
                    initialSlide={1}
                    loop={true}
                    centeredSlides={true}
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 3000, // 3 seconds delay
                        disableOnInteraction: false,
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                >
                    {storiesData.map((item, index) => (
                        <SwiperSlide key={index} className='innerSliderContent'>
                            <img src={item.logo} alt='logo' />
                            <p>{item.post}</p>
                            <div>
                                <h3>{item.name}</h3>
                                <h4>{item.position}</h4>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
}
