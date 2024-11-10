import React, {useEffect} from 'react'
import './Portfolio.css';
import PrimeryButton from '../../ControlledComponents/PrimeryButton/PrimeryButton';
import surviveImage from '../../Assets/portfolio/survival-story-image.png'
import documenteryImage from '../../Assets/portfolio/documentery-image.png'
import videoGRaphyImage from '../../Assets/portfolio/video-graphy.png';
import interviewImage from '../../Assets/portfolio/interview.png';
// import ContactForm from '../../Components/ContactForm/ContactForm';
import ProductCategories from '../../Components/ProductCategory/ProductCategories';
import SingleProject from '../../Components/SingleProject/SingleProject';
import ReadyToAsk from '../../GlobalComponents/ReadyToAsk/ReadyToAsk';
import Button4 from '../../GlobalComponents/button3';
import { AiFillFire } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import SEO from '../../Components/SEO';

const Portfolio = () => {
  
    const singleProject = [
        {img: surviveImage, tag: 'Commercial', chanel: 'Al Jazeera', projectTitle: 'The Strugle of Survival', videoId: '759468445'},
        {img: documenteryImage, tag: 'Commercial', chanel: 'Al Jazeera', projectTitle: 'The First Documentary', videoId: '759468445'},
        {img: videoGRaphyImage, tag: 'Commercial', chanel: 'Al Jazeera', projectTitle: 'The Strugle of Survival', videoId: '759468445'},
        {img: interviewImage, tag: 'Commercial', chanel: 'Al Jazeera', projectTitle: 'The First Documentary', videoId: '759468445'},
        {img: surviveImage, tag: 'Commercial', chanel: 'Al Jazeera', projectTitle: 'The Strugle of Survival', videoId: '759468445'},
        {img: documenteryImage, tag: 'Commercial', chanel: 'Al Jazeera', projectTitle: 'The First Documentary', videoId: '759468445'},
        {img: videoGRaphyImage, tag: 'Commercial', chanel: 'Al Jazeera', projectTitle: 'The Strugle of Survival', videoId: '759468445'},
        {img: interviewImage, tag: 'Commercial', chanel: 'Al Jazeera', projectTitle: 'The First Documentary', videoId: '759468445'},
        {img: surviveImage, tag: 'Commercial', chanel: 'Al Jazeera', projectTitle: 'The Strugle of Survival', videoId: '759468445'},
        {img: documenteryImage, tag: 'Commercial', chanel: 'Al Jazeera', projectTitle: 'The First Documentary', videoId: '759468445'},
        {img: videoGRaphyImage, tag: 'Commercial', chanel: 'Al Jazeera', projectTitle: 'The Strugle of Survival', videoId: '759468445'},
        {img: interviewImage, tag: 'Commercial', chanel: 'Al Jazeera', projectTitle: 'The First Documentary', videoId: '759468445'},
        {img: surviveImage, tag: 'Commercial', chanel: 'Al Jazeera', projectTitle: 'The Strugle of Survival', videoId: '759468445'},
        {img: documenteryImage, tag: 'Commercial', chanel: 'Al Jazeera', projectTitle: 'The First Documentary', videoId: '759468445'},
        {img: videoGRaphyImage, tag: 'Commercial', chanel: 'Al Jazeera', projectTitle: 'The Strugle of Survival', videoId: '759468445'},
        {img: interviewImage, tag: 'Commercial', chanel: 'Al Jazeera', projectTitle: 'The First Documentary', videoId: '759468445'},
    ]
    const navigate = useNavigate();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
     <>
       <SEO 
    title="Projects - Art Productions" 
    description="Art Productions" 
    keywords="art, productions" 
    author="Three Mean"
/>
    <div className='project-main-container'>
        <ProductCategories />
      <div className='projects-display'>
        {singleProject.map((items, index) => (
          <SingleProject 
            tag={items.tag}
            projectImage={items.img}
            chanelName={items.chanel}
            projectTitle={items.projectTitle}
            vimeoId={items.videoId}
          />
        ))}
      </div>
      <div className='see-all-project-btn-div'>
        {/* <PrimeryButton 
          text={'See All Projects'} 
          width={'243px'} 
          height={'50px'} 
          padding={'4px 15px'}  
          fontSize={'18px'}
          lineHeight={'22px'}
          fontWeight={'400'}
          color={'#fff'}
          arrowTrue={true}
        /> */}
          <Button4 
                    text_1={"See All Projects"} 
                    text_2={"See All Projects"} 
                    iconComponent={AiFillFire} 
                    width={"265px"}   
                    navigateClick={() => {
                        navigate("/our-projects")
                    }} 
                    height={"55px"}
                />
      </div>
      {/* <ContactForm 
        titleOne={`Let's Create and`}
        titleTwo={`Collaborate!`}
      /> */}
      <ReadyToAsk />
    </div>
     </>
  )
}

export default Portfolio
