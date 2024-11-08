import React, {useEffect} from 'react';
import './App.css';
import Footer from './GlobalComponents/Footer/Footer';
import Hero from './GlobalComponents/Hero/Hero';
// import Home from './Pages/Home/Home';
// import Portfolio from './Pages/Portfolio/Portfolio';
import { useLocation } from 'react-router-dom';
import AllRoutes from './utils/routes';
import  AOS  from 'aos';
import 'aos/dist/aos.css';
import bg1 from "../src/Assets/bg1.png"

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Easing function
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <MainContaint />
  );
}

const MainContaint = () => {
  const location = useLocation();
  console.log("Page Path", location.pathname)
    
  const heroContant = {
    '/': {
      welcomText: 'Welcome To Art Production',
      mainHeading: 'Innovating Art, Inspiring Creativity',
      heroDesc: '',
      img:bg1
    },
    '/about-us': {
      welcomText: 'Welcome To Art Production',
      mainHeading: 'About Us',
      heroDesc: '',
      img:bg1
    },
    '/our-projects': {
      welcomText: 'Welcome To Art Production',
      mainHeading: 'Our Projects',
      heroDesc: `From coming up with creative concepts to delivering outstanding campaigns, 
                 we're your friendly, fun-loving crew ready to turn your project dreams into 
                 reality Where every move matters.`,
      img:bg1
    },
    '/services': {
      welcomText: 'Welcome To Art Production',
      mainHeading: 'Services',
      heroDesc: `Through our long experience in this field, we were involved in many sections 
                 of video production. We don’t create only, instead, we try always to invent 
                 and be creative, we think out of the box, that’s why we are the best.`,
      img:bg1
    },
    '/contact-us': {
      welcomText: 'Welcome To Art Production',
      mainHeading: 'Contact Us',
      heroDesc: `We love hearing from you! Whether you're ready to discuss your next project, 
      have a question, or just want to say hello, we're all ears. Our team is here to make your 
      experience exceptional. Drop us a message, and let's start a conversation.`,
      img:bg1
    }
  }

  const currentHeroContent = heroContant[location.pathname] || heroContant['/'];
  return(
    <div>
      <Hero 
        welcomText={currentHeroContent.welcomText}
        mainHeading={currentHeroContent.mainHeading}
        heroDesc={currentHeroContent.heroDesc}
        heroImg={currentHeroContent.img}
      />
      <AllRoutes />
      <Footer />
    </div>
  )

}

export default App;
