import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button'
import HeadSection from '../HeadSection/Header'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { BiChevronRight } from "react-icons/bi";
import { useNavigate } from 'react-router-dom'
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Footer from '../Footer/footer'
import { IoIosAddCircle } from "react-icons/io";


import './myprofile.css'

const languages = [
    { label: 'Engilsh', id: 1 },
    { label: 'Arub', id: 2 }
]





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
        <DialogTitle sx={{ m: 0, p: 0 }} {...other}>
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






interface profile{customerId:number, lastName:string, aboutYou:string, phoneNumber:null |number, language:string,webLink:string,whatsAppNumber:null |number, facebookLink:string}

const MyProfile = (props: any) => {

    const loginDetailsString = localStorage.getItem('loginDetails')
    const  ParseLoginDetails = JSON.parse(String(loginDetailsString))
  

    const [userProfileInformation, setUserProfileInformation] = useState<any>({
        customerId: ParseLoginDetails.customer_id,
        userName:'',
        lastName: '',
        aboutYou: '',
        phoneNumber: '',
        email:'',
        language: '',
        webLink: '',
        whatsAppNumber:'',
        facebookLink: ''
    })

    const [previewProfileImageUrl ,setPreviewProfileImageUrl] = useState<null | any>()
    const [serverProfilePhotoFile, setServerProfilePhotoFile] = useState<null | any>()
    const [serverBannerPhotoFile, setServerBannerPhotoFile] = useState<null | any>()
    const [bannerImagePreview, setBannerImagePreview] = useState<any>()

       
   



    const newDate = new Date(String(ParseLoginDetails.accountCreatedDate))
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
    const navigate = useNavigate()

    const handleChangeProfile = (e) => {
        const { name, value } = e.target
        setUserProfileInformation({ ...userProfileInformation, [name]: value })

    }


    const updateSaveChanges = async () => {
        console.log(userProfileInformation)
        const url = `http://localhost:4000/updateTheProfileDetails/${ParseLoginDetails.customer_id}`
        const options = {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
                // "x-api-key": "497a9dba-2e9f-4895-9357-9175a40bcb9e",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": "true",
                // "Access-Control-Allow-Headers": "Content-Type, Depth, User-Agent, X-File-Size, X-Requested-With, If-Modified-Since, X-File-Name, Cache-Control,Accept",
                'Access-Control-Allow-Methods': "GET, POST, PATCH, PUT, DELETE, OPTIONS",
                // 'Content-Type': 'multipart/form-data'
            },
            body: JSON.stringify(userProfileInformation)
        }
       
        const response = await fetch(url, options)
        const data = await response.json()
        if (response.status === 200) {
            console.log(data)
            // handleClickOpen()
               }
        else {
            console.log(data.message)
        }
    }


    const [open, setOpen] = React.useState(false);
    const [successDialogStatus, setSuccessDialogStatus] = React.useState(true)


    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };


    const getUserDetails = async()=>{
        const url = `http://localhost:4000/registerUserDetails/${ParseLoginDetails.customer_id}`
        const options={
            method:'GET'
        }
        const response = await fetch(url, options)
        const data = await response.json()
        if (response.status === 200) { 
            console.log(data)           
            {data.list.map((each)=> {setUserProfileInformation({...userProfileInformation, customerId:each.customer_id, userName:each.user_name, lastName:each.last_name,  aboutYou:each.about_you, phoneNumber:each.phone_number, email:each.email_address, language:each.language, webLink:each.website_link, whatsAppNumber:each.whatsapp_number, facebookLink:each.facebook_link}); setPreviewProfileImageUrl(`http://localhost:4000/${each.profile_image_url}`); setBannerImagePreview(`http://localhost:4000/${each.bannerImage_url}`)})}
        }
        else {
            console.log(data.message)
        }

    }

    useEffect(()=>{
        getUserDetails()
    },[])

    const upDateProfilePicURLindb = async()=>{
        let formData = new FormData()
        formData.append('profilePic', serverProfilePhotoFile)
        console.log(formData)

        const url = `http://localhost:4000/updateTheProfilePicture/${ParseLoginDetails.customer_id}`
        const options = {
            method: 'PUT',
            
            body: formData
        }
       
        const response = await fetch(url, options)
        const data = await response.json()
        if (response.status === 200) {
            console.log(data)
            // handleClickOpen()
               }
        else {
            console.log(data.message)
        }

    }


    useEffect(()=>{
        upDateProfilePicURLindb()
    },[serverProfilePhotoFile])


    const handleUploadProfilePic = (event) => {
        if (event.target.files[0]){
            const file = event.target.files[0]
            setPreviewProfileImageUrl(URL.createObjectURL(file))
            setServerProfilePhotoFile(file)      
        }
    }

    const upDateBannerImageURLinDb = async()=>{
        let formData = new FormData()
        formData.append('bannerImage', serverBannerPhotoFile)
        console.log(formData)

        const url = `http://localhost:4000/updateTheBannerImage/${ParseLoginDetails.customer_id}`
        const options = {
            method: 'PUT',
            
            body: formData
        }
       
        const response = await fetch(url, options)
        const data = await response.json()
        if (response.status === 200) {
            console.log(data)
            // handleClickOpen()
               }
        else {
            console.log(data.message)
        }
    }

    useEffect(()=>{
        upDateBannerImageURLinDb()
    },[serverBannerPhotoFile])

    const onHandleBannerImage = (event)=>{
        if (event.target.files[0]){
            const bannerImageFile = event.target.files[0]
            setBannerImagePreview(URL.createObjectURL(bannerImageFile))
            setServerBannerPhotoFile(bannerImageFile)
        }
    }





    return (
        <>
            <HeadSection />
            <div id='main-profile-container'>
                {bannerImagePreview ? (
                    <div className='banner-image-preview' style={{backgroundImage:`url(${bannerImagePreview})`}}>
                        <div className='banner-image-logo'>
                        <h2 className='replace-banner-heading'>Replce banner image</h2>
                        <p className='banner-dimensions'>Dimesinos 1440 x 240</p>
                        <label htmlFor='resource' className='label-button-container'><span className='label-button-heading'>+ Replace</span></label>
                        <input type='file' id="resource" accept='image/jpeg, image/jpg, image/png'  onChange={onHandleBannerImage}/>
                    </div>
                </div>
                )
                :(<div className='banner-image-container'>
                    <div className='banner-image-logo'>
                        <h2 className='replace-banner-heading'>Replce banner image</h2>
                        <p className='banner-dimensions'>Dimesinos 1440 x 240</p>
                        <label htmlFor='resource' className='label-button-container'><span className='label-button-heading'>+ Replace</span></label>
                        <input type='file' id="resource" accept='image/jpeg, image/jpg, image/png'  onChange={onHandleBannerImage}/>
                    </div>
                </div>)}
                <div className='profile-bottom-container'>
                    <div className='profile-shor-info'>
                        <div className='profile-inner-container'>
                            <div className='profile-logo-image'>
                                {previewProfileImageUrl !== '' ? 
                                <img src={previewProfileImageUrl} alt='profile-image' className='profile-pic'/>:
                                <h2>{String(ParseLoginDetails.user_name).slice(0, 1)}</h2>    }
                            </div>
                            <label htmlFor='add-photo'><IoIosAddCircle className='add-circle'/></label>
                            <input id="add-photo" type="file" name='profilePic' accept='image/jpeg, image/jpg, image/png' multiple={false} onChange={handleUploadProfilePic} />
                            <div className='myOptions'>
                                <div className='name'>
                                    <h3 className='person-heading'>{ParseLoginDetails.user_name}</h3>
                                    <p className='person-membership-status'>Member Since {monthName} {year}</p>
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
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <TextField id="Number" type="text" variant="outlined" name='userName' value={userProfileInformation.userName} onChange={handleChangeProfile} sx={{ width: 412, height: 71 }} />
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
                                        <TextField id="lastName" type="text" variant="outlined" name='lastName' value={userProfileInformation.lastName} onChange={handleChangeProfile} sx={{ width: 412, height: 71 }} />
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
                                            name='aboutYou'
                                            multiline
                                            rows={4}
                                            defaultValue=""
                                            sx={{ width: 412, height: 128 }}
                                            value={userProfileInformation.aboutYou}
                                            onChange={handleChangeProfile}
                                        />
                                    </Box>
                                </div>

                            </div>
                            <div className='saveChange-container'>
                                <button type='button' className='saveChangesButton' onClick={updateSaveChanges}>Save Changes</button>
                            </div>
                        </div>
                        <div className='security-container'>
                            <h3 className='general-info-heading'>Contact</h3>
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
                                    <TextField id="Number" type="number" variant="outlined" name='phoneNumber' value={userProfileInformation.phoneNumber} onChange={handleChangeProfile} sx={{ width: 412, height: 71 }} />
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
                                    <TextField id="Email" variant="outlined" name='email' sx={{ width: 412, height: 71 }} value={userProfileInformation.email}  onChange={handleChangeProfile}/>
                                </Box>
                                <Button type='button' onClick={() => navigate('/ChangePassword')}>Change Password</Button>
                            </div>
                        </div>
                        <div className='language-container'>
                            <h3 className='language-heading'>Language</h3>
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={languages.map((each)=> each.label)}
                                value={userProfileInformation.language}
                                onChange={(e, newValue)=> setUserProfileInformation({...userProfileInformation, language:newValue})}
                                sx={{ width: '45ch' }}
                                renderInput={(params) => <TextField {...params} placeholder="Language"  sx={{ width: 412, height: 71 }} />}
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
                                <TextField id="Number" type="text" placeholder="WebLink" variant="outlined" name='webLink' value={userProfileInformation.webLink} onChange={handleChangeProfile} sx={{ width: 412, height: 71 }} />
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
                                    <TextField id="whatsapp" type="number" placeholder="WhatsApp" variant="outlined" name='whatsAppNumber' sx={{ width: 412, height: 71 }} value={userProfileInformation.whatsAppNumber} onChange={handleChangeProfile} />
                                </Box>
                            </div>
                            <div className='input-field7'>
                                <label htmlFor='facebook' className='label'>FaceBook</label>
                                <Box
                                    component="form"
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField id="facebook" type="text" placeholder='FaceBook' variant="outlined" name='facebookLink' sx={{ width: 412, height: 71 }} value={userProfileInformation.facebookLink} onChange={handleChangeProfile} />
                                </Box>
                            </div>
                            <Button type='button' className='add-button' onClick={updateSaveChanges}>+ Add</Button>
                            <BootstrapDialog
                                onClose={handleClose}
                                aria-labelledby="customized-dialog-title"
                                open={open}

                            // className='delete-account-dialog-container'
                            >
                                <div className='account-delete-information-first-container'>
                                    <div className='check-mark-container'>
                                        {successDialogStatus ? (<img src='https://img.freepik.com/premium-vector/correct-sign-right-mark-icon-set-green-tick-flat-symbol-check-ok-yes-marks-vote-decision_473851-126.jpg' alt='correct' className='correct-check-mark' />) :
                                            (< img src='https://png.pngtree.com/png-vector/20190228/ourmid/pngtree-wrong-false-icon-design-template-vector-isolated-png-image_711430.jpg' alt='wrong' className='correct-check-mark' />)}

                                    </div >
                                    <div className='delete-account-conformation-container'>
                                        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                                            {successDialogStatus ? (<span className='are-yousure-text'>You details are Updated Successfully</span>) : (<span className='are-yousure-text'>User is Already Exists</span>)}

                                        </BootstrapDialogTitle>
                                        {/* // <p className='conformation-text'>By proceeding your account will be permanently deleted.</p> // */}
                                    </div>
                                </div>
                            </BootstrapDialog>
                        </div>
                    </div>
                </div>
                <div className='profile-footer'>
                <Footer/>
                </div>
            </div>
        </>
    )
}
export default MyProfile