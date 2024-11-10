import React, {useEffect} from 'react'
import './Contact.css'
import ContactForm from '../../Components/ContactForm/ContactForm'
import SEO from '../../Components/SEO'

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <SEO 
                title="Contact - Art Productions" 
                description="Art Productions" 
                keywords="art, productions" 
                author="Three Mean"
          />
          <ContactForm 
            titleOne={`Let’s Bring`}
            titleTwo={`Your Stories to Screen!`}
        />
    </>
        
  )
}

export default Contact
