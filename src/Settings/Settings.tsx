import React from 'react'
import HeadSection from '../HeadSection/Header'
import Switch from '@mui/material/Switch';
import { IoIosArrowForward } from "react-icons/io";
// import Stack from '@mui/material/Stack'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { CgTrash } from "react-icons/cg";
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { IconButton } from '@mui/material';
import Stack from '@mui/material/Stack';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'

import Footer from '../Footer/footer'
import './settings.css'
const label = { inputProps: { 'aria-label': 'Switch demo' } };

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

interface DialogTitleProps {
    id: string;
    children?: React.ReactNode;
    onClose: () => void;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p:1 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
}






const Settings = (props) => {
    const navigate = useNavigate()
    const localUserName = localStorage.getItem('userName')

    const [open, setOpen] = React.useState(false);

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

    const handleClickOpen = () => {
        setOpen(true);

    };
    const handleClose = () => {
        setOpen(false);
    };


    const breadcrumbs = [
        <Link  key="1" color="text.primary" onClick={()=> navigate('/')}>
            Home
        </Link>,
         <Typography key="2" color="text.primary">
        Settings
       </Typography>
    ];

    const onClickDeleteAccount = async() =>{
        const url = `http://localhost:4000/Delete/${localUserName}`;
        const options={
            method:'DELETE',
            headers:{
            // 'Content-type': 'application/json',
        // "x-api-key": "497a9dba-2e9f-4895-9357-9175a40bcb9e",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true"
        }
    }

        const response = await fetch (url, options)
        const data = await response.json()
        if (response.status ===200){
            console.log(data.message)
            localStorage.removeItem('userName')
            Cookies.remove('jwt_token')
            handleClose()
        }else if (response.status === 400){
            console.log(data.message)
        }
    }

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
                            className='Settings-bread-crumbs-pointer'
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
                            <h3 className='settings-payments-heading' >Payments</h3>
                            <button className='saved-payments-button' onClick={()=>navigate('/Settings/Payments/SavedCards')}>
                                <h4 className='saved-payments-heading'>See Saved Payments</h4>
                                <IoIosArrowForward />
                            </button>
                        </div>
                        <div className='privacy-container'>
                            <h3 className='settings-payments-heading'>Privacy</h3>
                            <button className='privacy-button-container' onClick={onClickTermsAndConditions}>
                                <h4 className='saved-payments-heading'>Terms & Conditions</h4>
                                <IoIosArrowForward />
                            </button>
                        </div>
                        <div className='support'>
                            <h3 className='settings-payments-heading' >Support</h3>
                            <button className='support-button1' onClick={onClickFaqs} >
                                <h4 className='saved-payments-heading'>FAQs</h4>
                                <IoIosArrowForward />
                            </button>
                            <button className='support-button2'>
                                <h4 className='saved-payments-heading'>Contact Us</h4>
                                <IoIosArrowForward />
                            </button>
                            <button className='support-button3'onClick={reportAnIssue}>
                                <h4 className='saved-payments-heading'>Report an Issue</h4>
                                <IoIosArrowForward />
                            </button>
                        </div>
                        <div className='delete-account-container'>
                            <h3 className='delete-account-heading'>Deactive Account</h3>
                            <button type='button' className='delete-account' onClick={handleClickOpen}>Delete My account</button>
                            <BootstrapDialog
                                onClose={handleClose}
                                aria-labelledby="customized-dialog-title"
                                open={open}
                                // className='delete-account-dialog-container'

                            >
                                <div className='account-delete-information-first-container'>
                                    <div className='delete-account-icon-container'>
                                    < CgTrash className='delete-account-icon' />
                                    </div>
                                    <div className='delete-account-conformation-container'>
                                        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                                          <span className='are-yousure-text'>Are You Sure</span>
                                        </BootstrapDialogTitle>
                                         <p className='conformation-text'>By proceeding your account will be permanently deleted.</p>
                                    </div>
                                </div>
                                <div className='delte-account-conformation-buttons-contaier'>
                                    <Stack direction={'column'} justifyContent={'space-between'}>
                                    <button type='button'  className='delete-account-button' onClick={onClickDeleteAccount}> Yes, Delete My Account
                                        </button>
                                        <button type='button' className='cancel-delete-account-button' onClick={handleClose}> No, Cancel
                                        </button>                                        
                                    </Stack>
                                </div>                                
                            </BootstrapDialog>
                        </div>
                    </div>
                </div>
                <div className='settings-footer-container'>
                <Footer/>
                </div>
            </div>
        </>
    )
}
export default Settings