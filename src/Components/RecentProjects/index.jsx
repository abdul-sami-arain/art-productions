import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReactPlayer from 'react-player';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style.css';
import MainHeading from '../../GlobalComponents/Utils/mainHeading';
import alJazeeraLogo from '../../Assets/logos/aljazeera.png';
import img1 from "../../Assets/recent-projects/img1.jpg";
import img2 from "../../Assets/recent-projects/img2.jpg";
import img3 from "../../Assets/recent-projects/img3.jpg";
import PlayIcon from '../../GlobalComponents/Play-button-1';
import { Autoplay, Pagination } from 'swiper/modules';

export default function RecentProjects() {
    const swiperRef = useRef(null); // Create a ref to access Swiper instance
    const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
    const [videoUrl, setVideoUrl] = useState('');
    const [playing, setPlaying] = useState(false);

    const storiesData = [
        {
            logo: alJazeeraLogo,
            bg: img1,
            title: 'Abdo Madkhana',
            sub_title: 'MANAGER AL JAZEERA',
            vimeoId: '759468445'
        },
        {
            logo: alJazeeraLogo,
            bg: img3,
            title: 'Abdo Madkhana',
            sub_title: 'MANAGER AL JAZEERA',
            vimeoId: '737273982'
        },
        {
            logo: alJazeeraLogo,
            bg: img2,
            title: 'Abdo Madkhana',
            sub_title: 'MANAGER AL JAZEERA',
            vimeoId: '772986559'
        },
        {
            logo: alJazeeraLogo,
            bg: img1,
            title: 'Abdo Madkhana',
            sub_title: 'MANAGER AL JAZEERA',
            vimeoId: '737117181'
        },
    ];

    const handleVideoPlay = (vimeoId) => {
        setVideoUrl(`https://vimeo.com/${vimeoId}`);
        setIsModalOpen(true);
        setPlaying(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setVideoUrl('');
        setPlaying(false);
    };

    const handleMouseEnter = () => {
        swiperRef.current.swiper.autoplay.stop();
    };

    const handleMouseLeave = () => {
        swiperRef.current.swiper.autoplay.start();
    };

    return (
        <div className='mySlider'>
            <MainHeading align={'center'} flexDirection={'row'} gap={'10px'} width={'95%'} content1={"Recent "} content2={"Projects"} />
            <Swiper
                ref={swiperRef}
                spaceBetween={5}
                slidesPerView={1.6}
                initialSlide={1}
                loop={true}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper2"
            >
                {storiesData.map((item, index) => (
                    <SwiperSlide
                        key={index}
                        style={{ backgroundImage: `url(${item.bg})` }}
                        className='recentProjectsInnerSlider'
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className='playButton'>
                            <PlayIcon height={"60px"} width={"60px"} onClick={() => handleVideoPlay(item.vimeoId)} />
                        </div>
                        <div className='title_subtitle'>
                            <h1>{item.title}</h1>
                            <h3>{item.sub_title}</h3>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className={`videoModal ${isModalOpen ? 'show-vimeo-video' : ''}`}>
                <div className="videoContainer">
                    <ReactPlayer
                        url={videoUrl}
                        playing={playing}
                        controls={true}
                        width="100%"
                        height="100%"
                    />
                    <button className="closeButton" onClick={closeModal}>X</button>
                </div>
            </div>
        </div>
    );
}
