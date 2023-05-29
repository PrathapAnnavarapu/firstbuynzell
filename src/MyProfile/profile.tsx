import React, { useState } from 'react'
import Button from '@mui/material/Button'
import HeadSection from '../HeadSection/Header'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { BiChevronRight } from "react-icons/bi";
import { useNavigate } from 'react-router-dom'
import addCircle from '../assets/add-circle.svg'
import './myprofile.css'

const languages = [
    { label: 'Engilsh', id: 1 },
    { label: 'Arub', id: 2 }
]

const MyProfile = () => {

    const navigate = useNavigate()
    const [bannerImage, setBannerImage] = useState<any>({})


    return (
        <>
            <HeadSection />
            <div className='main-profile-container'>
                <div className='banner-image-container'>
                    <div className='banner-image-logo'>
                        <h2 className='replace-banner-heading'>Replce banner image</h2>
                        <p className='banner-dimensions'>Dimesinos 1440 x 240</p>
                        <label htmlFor='resource' className='label-button-container' onChange={(e) => setBannerImage(e.target.files)}><span className='label-button-heading'>+ Replace</span></label>
                        <input type='file' id="resource" accept='image/jpeg, image/jpg, image/png' />
                    </div>
                </div>
                <div className='profile-bottom-container'>
                    <div className='profile-shor-info'>
                        <div className='profile-inner-container'>
                            <div className='profile-logo-image'>
                                <h2>P</h2>
                            </div>
                            <img src={addCircle} alt='add' className='add-circle'/>
                            <div className='myOptions'>
                                <div className='name'>
                                    <h3 className='person-heading'>Name</h3>
                                    <p className='person-membership-status'>Member Since January 2023</p>
                                </div>
                                <div className='profile-navigations-container'>
                                    <button type="button" className='nav-buttons-container1' onClick={() => navigate('/MyAds')}>
                                        <span className='nav-button-heading1'>
                                        My Ads
                                        </span>
                                        <span className='nav-button-icon'>
                                        <BiChevronRight />
                                        </span>
                                    </button>
                                    <hr className='hr-line' />
                                    <button type="button" className='nav-buttons-container2' onClick={() => navigate('/MyFaviorites')}>
                                        <span className='nav-button-heading2'>
                                        Favorites
                                        </span>
                                        <span className='nav-button-icon'>
                                        <BiChevronRight />
                                        </span>
                                    </button>
                                    <hr className='hr-line1' />
                                    <button type="button" className='nav-buttons-container3' onClick={() => navigate('/MyPackage')}>
                                        <span className='nav-button-heading3'>
                                        My Packages
                                        </span>
                                        <span className='nav-button-icon'>
                                        <BiChevronRight />
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='profile-long-info'>
                        <h2 className='myprofile-heading'>My Profile</h2>
                        <div className='general-info-container'>
                            <div className='general-info-inputs-container'>
                                <h3 className='general-info-heading'>General Info</h3>
                                <div className='input-field1'>
                                    <label htmlFor='Name' className='label'>Name</label>                                    
                                    <Box
                                    component="form"
                                    // sx={{
                                    //     '& > :not(style)': { m: 1, width: '45ch' },
                                    // }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField id="Number" type="text" variant="outlined" sx={{ width: 412, height: 71 }} />
                                </Box>                                    
                                </div>
                                <div className='input-field2'>
                                     <label htmlFor='lastName' className='label'>Last Name</label>                                    
                                     <Box
                                    component="form"
                                    // sx={{
                                    //     '& > :not(style)': { m: 1, width: '45ch' },
                                    // }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField id="lastName" type="text" variant="outlined" sx={{ width: 412, height: 71 }} />
                                </Box>        
                                </div>
                                <div className='input-field3'>
                                    <label htmlFor='About you' className='label'>About You </label>
                                    <Box
                                        component="form"
                                        // sx={{
                                        //     '& > :not(style)': { m: 1, width: '45ch' },
                                        // }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <TextField
                                            id="About you"
                                            label={undefined}
                                            multiline
                                            rows={4}
                                            defaultValue=""
                                            sx={{ width: 412, height: 128 }}
                                        />
                                    </Box>
                                </div>                      

                            </div>
                            <div className='saveChange-container'>
                            <button type='button'className='saveChangesButton'>Save Changes</button>
                            </div>
                        </div>
                        <div className='security-container'>
                            <h3 className='general-info-heading'>Security</h3>
                            <div className='input-field4'>
                                <label htmlFor='Number' className='label'>Phone Number</label>
                                <Box
                                    component="form"
                                    // sx={{
                                    //     '& > :not(style)': { m: 1, width: '45ch' },
                                    // }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField id="Number" type="number"  variant="outlined" sx={{ width: 412, height: 71 }} />
                                </Box>
                            </div>
                            <div className='input-field5'>
                                <label htmlFor='Email' className='label'>Email</label>
                                <Box
                                    component="form"
                                    // sx={{
                                    //     '& > :not(style)': { m: 1, width: '45ch' },
                                    // }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField id="Email" variant="outlined" sx={{ width: 412, height: 71 }} />
                                </Box>
                                <Button type='button'>Change Password</Button>
                            </div>
                        </div>
                        <div className='language-container'>
                            <h3 className='language-heading'>Language</h3>
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={languages}
                                sx={{ width: '45ch' }}
                                renderInput={(params) => <TextField {...params} placeholder="Language" sx={{ width: 412, height: 71 }} />}
                            />

                        </div>
                        <div className='links'>
                            <h3 className='weblinks-heading'>Web Link</h3>
                            <Box
                                component="form"
                                // sx={{
                                //     '& > :not(style)': { m: 1, width: '45ch' },
                                // }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField id="Number" type="number" placeholder="WebLink" variant="outlined" sx={{ width: 412, height: 71 }} />
                            </Box>
                        </div>
                        <div className='external-links'>
                            <h3 className='link-account-heading'>Link Account</h3>
                            <div className='input-field6'>
                                <label htmlFor='whatsapp' className='label'>WhatsApp</label>
                                <Box
                                    component="form"
                                    // sx={{
                                    //     '& > :not(style)': { m: 1, width: '45ch' },
                                    // }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField id="whatsapp" type="number" placeholder="Whats App" variant="outlined" sx={{ width: 412, height: 71 }} />
                                </Box>
                            </div>
                            <div className='input-field7'>
                                <label htmlFor='facebook' className='label'>FaceBook</label>
                                <Box
                                    component="form"
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField id="facebook" type="number" placeholder='FaceBook' variant="outlined" sx={{ width: 412, height: 71 }} />
                                </Box>
                            </div>
                            <Button type='button' className='add-button'>+ Add</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MyProfile