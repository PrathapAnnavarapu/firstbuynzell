
import React from 'react'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'
import HeadSection from '../HeadSection/Header'
import { BsCheckCircleFill } from "react-icons/bs";
import './subscription.css'

const CurrentSubscriptionDetails = () => {
    const navigate = useNavigate()
    return (
        <>
            <HeadSection />
            <div className='my-subscription-main-containier'>
                <div className='my-subscription-ad-section'>
                    ad
                </div>
                <div className='my-subscription-inner-containier'>
                    <div className='my-subscriptions-bread-crumbs'>crumbs</div>
                    <div className="subscription-container">
                        <div className='package-heading-container'>
                            <div className="silver-package-heading-tag-container">
                                <h2 className="silver-package-heading">Silver Package</h2>
                                <p className='silver-tag'>Silver</p>
                            </div>
                            <p className='ads-left-heading'>Ads Left 3/15</p>
                        </div>
                        <div className='package-description-heading-details'>
                            <p className='package-features'><BsCheckCircleFill className='check-icon' />  Each For 3 Days</p>
                            <p className='package-features'><BsCheckCircleFill className='check-icon' />  Upto 15 Ads</p>
                            <p className='package-features'><BsCheckCircleFill className='check-icon' />  Featuring for 1.5 days</p>
                        </div>
                        <div className='upgrade-buttons-container'>
                            <Stack direction={'row'} justifyContent={'space-between'} sx={{ width: 500, m: 1 }}>
                                <Button type="button" variant='outlined' sx={{ width: 250, height: 40, m: 1 }} onClick={() => navigate('/Packages/Upgrade')}>Upgrade</Button>
                                <Button type="button" variant='contained' sx={{ backgroundColor: 'Black', color: 'white', width: 250, m: 1 }}>Post Ad</Button>
                            </Stack>
                        </div>
                    </div>
                </div>
            </div>

        </>


    )
}
export default CurrentSubscriptionDetails