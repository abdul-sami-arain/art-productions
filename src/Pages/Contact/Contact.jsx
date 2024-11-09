import React, {useEffect} from 'react'
import './Contact.css'
import ContactForm from '../../Components/ContactForm/ContactForm'

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
        <ContactForm 
            titleOne={`Let’s Bring`}
            titleTwo={`Your Stories to Screen!`}
        />
  )
}

export default Contact
