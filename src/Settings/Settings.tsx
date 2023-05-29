import React from 'react'
import HeadSection from '../HeadSection/Header'
import Switch from '@mui/material/Switch';
import { IoIosArrowForward } from "react-icons/io";
// import Stack from '@mui/material/Stack'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import './settings.css'
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const label = { inputProps: { 'aria-label': 'Switch demo' } };






const Settings = (props) => {
    const navigate = useNavigate()
    const onClickTermsAndConditions = () => {
        navigate('/Settings/Terms&Conditions')
    }
    const onClickFaqs = () => {
        navigate('/Settings/Faqs')
    }
    const reportAnIssue = () => {
        navigate('/Settings/ReportIssue')

    }

    const handleClick = () =>{
        navigate('/')
    }

    const breadcrumbs = [
        <Link  key="1" color="inherit" href='' onClick={handleClick}>
            Home
        </Link>,
         <Typography key="2" color="text.primary">
        Settings
       </Typography>

    ];

    return (
        <>
            <HeadSection />
            <div className='main-settings-container'>
                <div className='settings-main-ads-container'>
                    <div className='setting-ad-container'>ad</div>
                </div>
                <div className='settings-bottom-container'>
                    <div className='settings-bread-crumbs'>
                        <Breadcrumbs
                            separator={<NavigateNextIcon fontSize="small" />}
                            aria-label="breadcrumb"
                        >
                            {breadcrumbs}
                        </Breadcrumbs>
                    </div>
                    <div className='settings-container'>
                        <h1 className='settings-heading'>Settings</h1>
                        <div className='notification-switches-container'>
                            <h3 className='notifications-heading'>Notifications</h3>
                            <div className='general-switch'>
                                <h4 className='general-heading'>General</h4>
                                <Switch {...label} defaultChecked />
                            </div>
                            <div className='chat-switch'>
                                <h3 className='chat-heading'>Chat</h3>
                                <Switch {...label} defaultChecked />
                            </div>
                        </div>
                        <div className='payment-container'>
                            <h3 className='payments-heading'>Payments</h3>
                            <div className='saved-payments-button'>
                                <h4 className='saved-payments-heading'>See Saved Payments</h4>
                                <Button type="button"><IoIosArrowForward /></Button>
                            </div>
                        </div>
                        <div className='privacy-container'>
                            <h3 className='payments-heading'>Privacy</h3>
                            <div className='privacy-button-container'>
                                <h4 className='saved-payments-heading'>Terms & Conditions</h4>
                                <Button type='button' onClick={onClickTermsAndConditions}><IoIosArrowForward /></Button>
                            </div>
                        </div>
                        <div className='support'>
                            <h3 className='payments-heading'>Support</h3>
                            <div className='support-button1'>
                                <h4 className='saved-payments-heading'>FAQs</h4>
                                <Button type='button' onClick={onClickFaqs}><IoIosArrowForward /></Button>
                            </div>
                            <div className='support-button2'>
                                <h4 className='saved-payments-heading'>Contact Us</h4>
                                <Button type='button'><IoIosArrowForward /></Button>
                            </div>
                            <div className='support-button3'>
                                <h4 className='saved-payments-heading'>Report an Issue</h4>
                                <Button type='button' onClick={reportAnIssue}><IoIosArrowForward /></Button>
                            </div>
                        </div>
                        <div className='delete-account-container'>
                            <h3 className='delete-account-heading'>Deactive Account</h3>
                            <button type='button' className='delete-account'>Delete My account</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Settings