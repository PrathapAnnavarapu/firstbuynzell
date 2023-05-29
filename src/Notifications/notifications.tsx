
import React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import HeadSection from '../HeadSection/Header'

import './notifications.css'

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}


function Notifications(){

    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
            Home
        </Link>,
        <Link
            underline="hover"
            key="2"
            color="inherit"
            href="/material-ui/getting-started/installation/"
            onClick={handleClick}
        >
            Notifications
        </Link>
        
    ];


    return(
        <>
        <HeadSection/>
        <div className='notifications-main-container'>
            <div className='notification-inner-container'>
                <div className='notification-bread-crumbs'>
                <Breadcrumbs
                            separator={<NavigateNextIcon fontSize="small" />}
                            aria-label="breadcrumb"
                        >
                            {breadcrumbs}
                        </Breadcrumbs>

                </div>
                <div className='notifications-container'>
                    <h2>Notification</h2>

                </div>
            </div>
        </div>
        </>
        
    )
}

export default Notifications