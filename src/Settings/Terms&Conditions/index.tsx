import React from 'react'
import { BsArrowLeftShort } from "react-icons/bs";
import HeadSection from '../../HeadSection/Header'
import { useNavigate } from 'react-router-dom';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import './terms.css'






const Terms = ()=>{
    const navigate = useNavigate()

  

  const handleClick = (value)=>{
    if (value === 1){
      navigate('/')
    }
    else if (value === 2){
      navigate('/Settings')
    }
  }

    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" onClick={()=>navigate('/')}>
          Home
        </Link>,
        <Link
          underline="hover"
          key="2"
          color="inherit"            
          onClick={()=> navigate('/Settings')}
        >
          Settings
        </Link>,
        <Typography key="3" color="text.primary">
          Terms & Conditions
        </Typography>,
      ];
      
      

    return(
        <>
        <HeadSection/> 
        <div className='terms-conditions-main-container'>
            <div className='terms-conditions-inner-container'>
            <div className='terms-bread-crumbs'>
                        <Breadcrumbs
                            separator={<NavigateNextIcon fontSize="small" />}
                            aria-label="breadcrumb"
                            className='terms-breadcrumbs-pointer'
                        >
                            {breadcrumbs}
                        </Breadcrumbs>
                    </div>
                    <div className='back-to-settings'>
                    <button type="button" className='back-button' onClick={()=>navigate('/Settings')}><BsArrowLeftShort/>Settings</button>
                    </div>          
            <div className='main-container'>               
                <h2 className='terms-conditions-heading-container'>Terms & Conditions</h2>
                
            <div className="terms-container">
                <h3 className='terms-conditions-sub-heading'>The data we collect about you</h3>
                <p className='para'>We take your privacy very seriously and are committed to protecting the privacy of all visitors and subscribers to our website or any application we make available via an app store (the “Platform”), and the corresponding services available through the Platform (the “Services”).
                    Below we set out our privacy policy, which will govern the way in which we process any personal information that you provide to us. We will notify you if the way in which we process your information is to change at any time.
                    Please read this privacy policy carefully as it contains important information on who we are and how we collect, store, use and share your information. By accessing the Platform or using our Services or otherwise indicating your consent, you agree to, and where required, consent to the collection, use and transfer of your information as set out in this policy. If you do not accept the terms of this policy, you must not use the Platform and/or the Services. This privacy policy supplements other notices and privacy policies and is not intended to override them.
                    This privacy policy: (i) applies only to the Platform and not to websites or applications of any other companies or organisations; and (ii) specifically addresses our obligations pursuant to local law.
                    The data we collect about you
                    When you visit our Platform or create a login in and password to access the Services, you may be asked to provide information about yourself. This may include: (i) your name and contact details, including email address and telephone number; (ii) information to enable us to check and verify your identity; (iii) location data; (iv) your billing information, transaction and payment information and history; and (v) such other information as we may from time to time require to provide the Services and comply with applicable law. You agree and, where required, consent to the collection of information about your usage of the Platform and the Services and information from messages and communications you send to us.
                    This information is required to provide the Services to you. If you do not provide such information, it may delay or prevent us from providing the Services.
                    This privacy policy will also apply when accessing the Platform and/or the Services from mobile technology (such as mobile phones, tablets or other devices). Unless you have chosen to remain anonymous through your device and/or platform settings, this information may be collected and used by us automatically if you use the Services and access the Platform from mobile technology.
                    Calls between you and us, or between you and third parties made through us (such as real estate agents you contact about a property through a form or link on our website, or using contact information found on our website), may be recorded or monitored for quality assurance and customer service purposes. We use third-party service providers to track phone calls and text messages between you and real estate professionals so that we and the real estate professional can access certain details about the contact. As part of this process, we and our service providers will receive in real time and store data about your call or text message, including the date and time of the call or text message, your phone number, and the content of the text message.
                    Who we share your personal information with
                    Your personal information (which includes your name, address and any other details you provide to us which concern you as an individual) may be processed both by us and by other companies within our group. Each of the companies in our group authorised to process your information will do so in accordance with this privacy policy.
                </p>
            </div>
        </div>
        </div>
        </div>
    </>
    )
}

export default Terms