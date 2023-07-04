
import React from 'react'
import Logo from '../assets/content.svg';
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'

import './footer.css'


const Copyright = (props: any) => {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'©'}        
        {new Date().getFullYear()}
        {' '}
        <Link color="inherit" href="https://mui.com/">
          Buynzell. All rights reserved
        </Link>{' '}
      </Typography>
    );
  }


function Footer(){
    return(
        <div className="footer-section">
            <div className='inner-first-footer-section'>
                <div className='links-container'>
                    <div className='company-links-container'>
                        <h5 className='company-title'>Company</h5>
                        <h6 className='sub-nav'>About us</h6>
                        <h6 className='sub-nav'>Careers</h6>
                        <h6 className='sub-nav'>Post Ad</h6>
                        <h6 className='sub-nav'>Corporate</h6>
                        <h6 className='sub-nav'>Contact</h6>
                    </div>
                    <div className='company-links-container'>
                        <h5 className='company-title'>Resources</h5>
                        <h6 className='sub-nav'>Blog</h6>
                        <h6 className='sub-nav'>Newsletter</h6>
                        <h6 className='sub-nav'>Events</h6>
                        <h6 className='sub-nav'>Tutorials</h6>
                        <h6 className='sub-nav'>Support</h6>
                    </div>
                    <div className='company-links-container'>
                        <h5 className='company-title'>Social</h5>
                        <h6 className='sub-nav'>Twitter</h6>
                        <h6 className='sub-nav'>LinkedIn</h6>
                        <h6 className='sub-nav'>Facebook</h6>
                        <h6 className='sub-nav'>Instagram</h6>
                        <h6 className='sub-nav'>Youtube</h6>
                    </div>
                    <div className='company-links-container'>
                        <h5 className='company-title'>Social</h5>
                        <h6 className='sub-nav'>Terms</h6>
                        <h6 className='sub-nav'>Privacy</h6>
                        <h6 className='sub-nav'>Cookies</h6>
                        <h6 className='sub-nav'>Settings</h6>
                    </div>
                    <div className='company-links-container'>
                        <h5 className='company-title'>Language</h5>
                        <h6 className='sub-nav'>English</h6>
                        <h6 className='sub-nav'>عربي</h6>                        
                    </div>         
                </div>
                <div className='store-logos-images-container'>
                    <h5 className='app-heading'>Get the app</h5>
                    <img src='https://w7.pngwing.com/pngs/506/939/png-transparent-app-store-logo-iphone-app-store-get-started-now-button-electronics-text-telephone-call-thumbnail.png' alt='apple-store' className='apple-store'/>
                    <img src='https://w7.pngwing.com/pngs/91/37/png-transparent-google-play-android-app-store-android-text-logo-microsoft-store-thumbnail.png' alt='android-store' className='android-store'/>
                </div>               
            </div>
            <div className='copyrights-container'>
                <div className='copyrights-inner-container'>
                  <img src={Logo} alt='logo' className='footer-logo'/>
                  <Copyright sx={{ mt: 8, mb: 4 }} />
                </div>

            </div>

        </div>
    )

}
export default Footer