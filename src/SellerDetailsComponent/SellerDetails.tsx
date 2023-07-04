import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Header from '../HeadSection/Header'
import Footer from '../Footer/footer'
import { BsChatLeft, BsTelephone } from "react-icons/bs";
import { RiHeartAddLine } from "react-icons/ri";
import { BiShareAlt } from "react-icons/bi";


import './SellerDetails.css'


const SellerDetails = () => {
    const { customerId } = useParams()


    const [sellerDetailsList, setSellerDetailsList] = useState<null | any>([])
    console.log(sellerDetailsList)

    const bannerImageUrl = `http://localhost:4000/${sellerDetailsList.map((each) => each.bannerImage_url)[0]}`
    const profilePicUrl = `http://localhost:4000/${sellerDetailsList.map((each) => each.profile_image_url)[0]}`
    const accountCreatedDate = sellerDetailsList.map((each) => each.accountCreatedDate)[0]

    const newDate = new Date(accountCreatedDate)
    const month = newDate.getMonth()
    let monthName = ''
    if (month === 0) {
        monthName = 'Jan'
    } else if (month === 1) {
        monthName = 'Feb'
    }
    else if (month === 2) {
        monthName = 'Mar'
    }
    else if (month === 3) {
        monthName = 'Apr'
    }
    else if (month === 4) {
        monthName = 'May'
    }
    else if (month === 5) {
        monthName = 'Jun'
    }
    else if (month === 6) {
        monthName = 'July'
    }
    else if (month === 7) {
        monthName = 'Aug'
    }
    else if (month === 8) {
        monthName = 'Sep'
    }
    else if (month === 9) {
        monthName = 'Oct'
    }
    else if (month === 10) {
        monthName = 'Nov'
    } else if (month === 11) {
        monthName = 'Dec'
    }
    const year = newDate.getFullYear()

    const getTheSellerDetails = async () => {
        const url = `http://localhost:4000/GetSellerAllPostedAdsDetails/${customerId}`
        const options = {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                // "x-api-key": "497a9dba-2e9f-4895-9357-9175a40bcb9e",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": "true",
                // "Access-Control-Allow-Headers": "Content-Type, Depth, User-Agent, X-File-Size, X-Requested-With, If-Modified-Since, X-File-Name, Cache-Control,Accept",
                'Access-Control-Allow-Methods': "GET, POST, PATCH, PUT, DELETE, OPTIONS"
            }
        }

        const response = await fetch(url, options)
        const data = await response.json()

        if (response.status === 200) {
            setSellerDetailsList(data.adListItemsDetails)
        }
    }

    useEffect(() => {
        getTheSellerDetails()
    }, [])

    return (
        <>
            <Header />
            <div className='seller-top-main-container'>

                <div className='seller-banner-image-preview-image-container' style={{ backgroundImage: `url(${bannerImageUrl})`, height: 240, display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start' }} >
                    {/* <div className='banner-image-logo' >
                        <h2 className='replace-banner-heading'>Replce banner image</h2>
                        <p className='banner-dimensions'>Dimesinos 1440 x 240</p>
                    </div> */}
                </div>
                <div id='main-seller-details-container'>
                    <div className='seller-profile-information-and-live-ads-list-container'>
                        <div className='seller-profile-container'>
                            <div className='seller-profile-inner-container'>
                                <div className='profile-logo-image'>
                                    {sellerDetailsList.map((each) => each.profile_image_url)[0] !== '' ?
                                        <img src={profilePicUrl} alt='profile-image' className='profile-pic' /> :
                                        <h2>{String(sellerDetailsList.map((each) => each.user_name)).slice(0, 1)}</h2>}
                                </div>
                                <div className='seller-details-along-with-contact-details-container'>
                                    <div className='seller-name-member-details'>
                                        <h3 className='seller-name-heading'>{sellerDetailsList.map((each) => each.user_name)[0]}</h3>
                                        <p className='seller-membership-status'>Member Since {monthName} {year}</p>
                                    </div>
                                </div>
                                <div className="seller-person-contact-information-details-buttons">
                                    <button type='button' className="chat-with-seller-button"><BsChatLeft />Chat with seller</button>
                                    <button type='button' className="contact-with-seller-button"><BsTelephone />{sellerDetailsList.map((each) => each.phone_number)[0]}</button>
                                </div>
                                <div className='seller-fav-share-container'>
                                    <button type='button' className='seller-fav'><RiHeartAddLine/> Favorite</button>
                                    <button type='button' className='seller-share'><BiShareAlt/> Share</button>
                                </div>
                            </div>
                        </div>
                        <div className='seller-live-ads-list-container'>
                            <h2 className='live-ads-heading-text'>Live Ads</h2>
                        </div>
                    </div>                    
                </div>
                <div className='seller-footer-container'>
            <Footer />
            </div>
        </div>

        </>
    )
}

export default SellerDetails