import React, { useEffect } from 'react'
import './Services.css'
import documentaryImage from '../../Assets/services/documentaries.png'
import interviewImage from '../../Assets/services/interview.png'
import ServiceCard from '../../Components/ServiceCard/ServiceCard'
import FAQs from '../../GlobalComponents/FAQs'
import ReadyToAsk from '../../GlobalComponents/ReadyToAsk/ReadyToAsk'
import SEO from '../../Components/SEO'
import tv_shows from "../../Assets/services/tv_shows.png"
import crew from "../../Assets/services/crew.png"
import doc from "../../Assets/services/doc.jpg"
import short from "../../Assets/services/short.jpg"
import social from "../../Assets/services/social.jpg" 
import market from "../../Assets/services/market.jpg"
import event from "../../Assets/services/event.jpg"
import graphic from "../../Assets/services/graphics.jpg"
import interview from "../../Assets/services/interview.jpg"
import promotional_videos from "../../Assets/services/promotional.jpg"
import video_pro from "../../Assets/services/video_pro.jpg"
import post_pro from "../../Assets/services/post_pro.jpg"
import equip from "../../Assets/services/equipment.jpg"



const Services = () => {
    const servicesData = [
        {
            bgColor: 'var(--section-bg)', 
            slide: 'slide-right', 
            padding: '0 0 0 0px', 
            contentJustify: 'start', 
            serviceName: 'Documentaries', 
            img: doc, 
            paraOne: `At Art Production®, we specialize in creating compelling documentaries that educate and inspire. From concept development and scriptwriting to post-production and distribution, we guide you through every step of the process. `,
            paraTwo: `Our team handles everything, from scouting the perfect locations to securing top-tier equipment and talent, ensuring a visually captivating and impactful story. `, 
            paraThree: `With award-winning expertise and collaborations with networks like AL-JAZEERA TV and MBC TV, we deliver films that spark conversation and drive change.`,
            projectCount: '60+'
        },
        {
            bgColor: 'var(--section-bg-two)', 
            slide: 'slide-left', 
            padding: '0 120px 0 0', 
            contentJustify: 'end', 
            flexDir: 'row-reverse', 
            serviceName: 'Short', 
            serviceNameTwo: 'Films', 
            img: short, 
            paraOne: `At Art Production®, we are passionate about creating impactful short films that captivate and resonate with audiences. `, 
            paraTwo:`With our team of drama and cinema specialists, we focus on perfecting every step, from script editing to storyboarding. We ensure the entire crew understands each detail to produce creative, high-quality films.`,
            paraThree:`Our post-production phase includes expert video editing and color grading, followed by strategic distribution and marketing to ensure your short film reaches its audience.`,
            projectCount: '50+'
        },
        {
            bgColor: 'var(--section-bg)', 
            slide: 'slide-right', 
            padding: '0 0 0 0px', 
            contentJustify: 'start', 
            serviceName: 'TV ', 
            serviceNameTwo: 'Shows', 
            img: tv_shows, 
            paraOne: `Television has the power to educate, entertain, and inspire. At Art Production®, we bring your TV show ideas to life, whether they are educational, entertaining, or informative. `, 
            paraTwo:`With experience working with leading networks like Al-Jazzera, Orient Tv, Syria Tv, Alaraby Tv, and MBC, we develop your concept, handle content creation, and design visual aesthetics. `,
            paraThree:`Our team of editors and art directors ensure every aspect is aligned with your vision, making the process seamless and enjoyable for you.`,
            projectCount: '60+'
        },
        {
            bgColor: 'var(--section-bg-two)', 
            slide: 'slide-left', 
            padding: '0 120px 0 0', 
            contentJustify: 'end', 
            flexDir: 'row-reverse', 
            serviceName: 'Promotional ', 
            serviceNameTwo: 'Videos',
            img: promotional_videos, 
            paraOne: `Promotional videos are a powerful tool to boost engagement and drive sales. At Art Production®, we create compelling video ads that combine motion and sound to grab attention and communicate your message effectively. `, 
            paraTwo:`With online video ads being 27.4 times more likely to generate clicks than standard banners, our tailored promotional videos help businesses increase visibility and profits, ensuring your brand stands out in a crowded market.`,
            projectCount: '60+'
        },
        {
            bgColor: 'var(--section-bg)', 
            slide: 'slide-right', 
            padding: '0 0 0 0px', 
            contentJustify: 'start', 
            serviceName: 'Creative ', 
            serviceNameTwo: 'Interview', 
            img: interview, 
            paraOne: `We specialize in producing creative interviews that captivate audiences and communicate your message effectively.`, 
            paraTwo:`Whether you're looking to conduct thought-provoking conversations, highlight key figures, or share insightful stories, our team ensures every interview is visually engaging and professionally executed. From scripting thoughtful questions to capturing the perfect angles with high-quality audio and video, we handle all aspects of production.`,
            paraThree:`Our expert post-production team ensures a polished final product through professional editing and color grading, delivering interviews that captivate and resonate with your audience.`,
            projectCount: '60+'
        },
        {
            bgColor: 'var(--section-bg-two)', 
            slide: 'slide-left', 
            padding: '0 120px 0 0', 
            contentJustify: 'end', 
            flexDir: 'row-reverse', 
            serviceName: 'Video ', 
            serviceNameTwo: 'Production', 
            img: video_pro, 
            paraOne: `At Art Production®, we bring your visions to life with high-quality video production that captivates audiences. `, 
            paraTwo:`From corporate videos and commercials to documentaries and branded content, we handle every stage of production, ensuring a seamless process from start to finish. `,
            paraThree:`Our experienced team of directors, producers, and videographers work together to deliver impactful visual stories that engage and convert.`,
            projectCount: '60+'
        },
        {
            bgColor: 'var(--section-bg)', 
            slide: 'slide-right', 
            padding: '0 0 0 0px', 
            contentJustify: 'start', 
            serviceName: 'Graphic ', 
            serviceNameTwo: 'Design', 
            img: graphic, 
            paraOne: `We provide creative and impactful graphic design solutions tailored to your brand.`, 
            paraTwo:`From logos to digital assets, we craft visually striking designs that reflect your brand’s identity and captivate your audience. `,
            paraThree:`Our professional team ensures every design communicates your message clearly while standing out in today’s competitive market.`,
            projectCount: '60+'
        },
        {
            bgColor: 'var(--section-bg-two)', 
            slide: 'slide-left',
             padding: '0 120px 0 0',
              contentJustify: 'end', 
              flexDir: 'row-reverse', 
              serviceName: 'Event ', 
              serviceNameTwo: 'Management', 
              img: event, 
              paraOne: `At Art Production®, our expert event management services ensure your event runs smoothly from start to finish. `, 
            paraTwo:`Whether it’s a corporate event, product launch, or private gathering, we handle everything from planning to execution. `,
            paraThree:`With attention to detail and creative solutions, we make your event memorable and stress-free.`,
            projectCount: '60+'
        },
        {
            bgColor: 'var(--section-bg)', 
            slide: 'slide-right', 
            padding: '0 0 0 0px', 
            contentJustify: 'start', 
            serviceName: 'Advertising', 
            img: social, 
            paraOne: `We produce high-quality commercials and advertising videos at Art Production® that grab attention and deliver results. `,
            paraTwo: `From concept to post-production, we manage the entire process, creating compelling ads that align with your marketing goals. `,
            paraThree:`Our experience in both TV and online advertising ensures your brand stands out and resonates with your audience.`, 
            projectCount: '60+'
        },
        {
            bgColor: 'var(--section-bg-two)', 
            slide: 'slide-left', 
            padding: '0 120px 0 0', 
            contentJustify: 'end', 
            flexDir: 'row-reverse', 
            serviceName: 'Social Media ', 
            serviceNameTwo: 'Management', 
            img: social, 
            paraOne:`Art Production® offers comprehensive social media management designed to grow your brand’s online presence. `, 
            paraTwo:`We create engaging content, manage posting schedules, and interact with your audience across platforms. `,
            paraThree:`Our strategic approach increases engagement, builds followers, and drives conversions, helping you achieve measurable success.`,
            projectCount: '60+'
        },
        {
            bgColor: 'var(--section-bg)', 
            slide: 'slide-right', 
            padding: '0 0 0 0px', 
            contentJustify: 'start', 
            serviceName: 'Post ', 
            serviceNameTwo: 'Production', 
            img: post_pro, 
            paraOne: `Our post-production services ensure your project reaches its full potential. `,
            paraTwo: `We provide expert video editing, sound design, color grading, and visual effects, transforming raw footage into a polished, compelling story. `,
            paraThree: `With meticulous attention to detail, we enhance every element of your video, delivering a seamless and captivating final product that engages your audience and reflects your brand’s vision.`,
            projectCount: '60+'
        },
        {
            bgColor: 'var(--section-bg-two)', 
            slide: 'slide-left', 
            padding: '0 120px 0 0', 
            contentJustify: 'end', 
            flexDir: 'row-reverse', 
            serviceName: 'Production ', 
            serviceNameTwo: 'Crew', 
            img: crew, 
            paraOne: `We provide experienced, top-tier production crews tailored to your project needs. Our team includes directors, cinematographers, sound engineers, and lighting experts, all dedicated to bringing your vision to life. `,
            paraTwo: `Whether it's a large-scale commercial or an intimate documentary, our crew ensures professional execution at every stage of production, delivering results that exceed expectations.`, 
            projectCount: '60+'
        },
        {
            bgColor: 'var(--section-bg)', 
            slide: 'slide-right', 
            padding: '0 0 0 0px', 
            contentJustify: 'start', 
            serviceName: 'Production', 
            serviceNameTwo: 'Equipment', 
            img: equip, 
            paraOne: `At Art Production®, we use the industry’s finest production equipment to deliver unparalleled quality. `,
            paraTwo: `Our arsenal includes top-tier cameras like RED, Arri Alexa, and Sony FX series, ensuring your project is captured with cinematic precision. `, 
            paraThree:`From 4K and 8K resolution to advanced lighting, audio, and drone technology, we equip our expert operators with the tools needed to elevate your video to the highest professional standards.`,
            projectCount: '60+'
        },
        {
            bgColor: 'var(--section-bg-two)', 
            slide: 'slide-left', 
            padding: '0 120px 0 0', 
            contentJustify: 'end', 
            flexDir: 'row-reverse', 
            serviceName: 'Marketing', 
            img: market, 
            paraOne: `We offer comprehensive marketing services designed to elevate your brand and reach your target audience effectively. `,
            paraTwo: `From developing tailored strategies to executing digital and traditional campaigns, we focus on driving engagement and boosting your brand’s visibility. `,
            paraThree: `Our expertise spans content marketing, SEO, email marketing, and paid advertising, ensuring your message reaches the right audience at the right time. Let us help you create impactful campaigns that deliver measurable results.`, 
            projectCount: '60+'
        },
    ]
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <SEO
                title="Services - Art Productions"
                description="Art Productions"
                keywords="art, productions"
                author="Three Mean"
            />
            <div className='services-main-section'>
                {servicesData.map((items, index) => (
                    <ServiceCard
                        key={index}
                        serviceHeading={items.serviceName}
                        serviceHeadingTwo={items.serviceNameTwo}
                        serviceBanner={items.img}
                        paraOne={items.paraOne}
                        paraTwo={items.paraTwo}
                        paraThree={items.paraThree}
                        backgroundColor={items.bgColor}
                        flexDirection={items.flexDir}
                        justifyContent={items.contentJustify}
                        padding={items.padding}
                        slideSection={items.slide}
                        projectDone={items.projectCount}
                        ind={index}
                    />

                ))}
                <FAQs />
                <ReadyToAsk />
            </div>

        </>
    )
}

export default Services
