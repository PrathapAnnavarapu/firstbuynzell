import React, { useState } from 'react'
import Box from '@mui/material/Box';
import { IconButton } from '@mui/material';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import HeadSection from '../HeadSection/Header'
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { BsThreeDotsVertical, BsCheckCircle, BsFilter } from "react-icons/bs";
import { RiMessengerLine } from "react-icons/ri";
import { BiEdit } from "react-icons/bi";
import { AiOutlineEye, AiOutlineClockCircle, AiOutlineInfoCircle } from "react-icons/ai";
import { CgTrash } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';
import {useEffect} from 'react'
import Footer from '../Footer/footer'
import './Myads.css'




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
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
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






const options = [{ name: 'Edit', id: 1, logo: <BiEdit /> }, { name: 'Promote', id: 2, logo: <RiMessengerLine /> }, { name: 'Sold', id: 3, logo: <BsCheckCircle /> }, { name: 'Delete', id: 4, logo: <CgTrash /> }]

const myAdsfilterButtons = [{ name: 'All', id: 1 }, { name: 'Under review', id: 2 }, { name: 'Live', id: 3 }, { name: 'Rejected', id: 4 }, { name: 'Draft', id: 5 }]



function MyAds() {
    const navigate = useNavigate()
    const [activeFilterId, setActiveFilterId] = React.useState(0)
    const [soldOptions, setSoldOptions] = React.useState(options)
    const [soldStatus, setSoldStatus] = React.useState(false)
    const [activePostId, setsetActivePostId] = React.useState<any|null>()
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const [myAdsList, setMyAdsList] = React.useState<null|any>([])
    const [open, setOpen] = React.useState(false);
     

    
    //  const handleClick = () =>{
    //     navigate('/')
    //  }

     const jsonLoginDetails = localStorage.getItem('loginDetails')
    const parseLoginDetails: any = JSON.parse(String(jsonLoginDetails))

  const adPostedDate = myAdsList.map((each)=> each.ad_posted_date)[0]
    const date = new Date(adPostedDate)

       var month = date.getMonth(); 
        var day = date.getDate();
        var year = date.getFullYear();

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
     

    
     
    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" style={{cursor:'pointer'}} onClick={()=> navigate('/')}>            
            Home
        </Link>,
         <Typography key="3" color="text.primary">
         My Ads
       </Typography>,
    ];

    // const filterClassName = FilterButtonsStyle ?  'Deactive' : 'active' 

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
        
    }

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };


 

    const handleClickOpen = () => {
        setOpen(true);

    };
    const handleClose = () => {
        setOpen(false);
    };



   

    const onClickSelectOptions = (id) =>{
        
        if (id == 3){
            const indexOfSoldItem = soldOptions.findIndex((each) => each.id === id)
            setSoldStatus((prev) => !prev)
            const newSoldOptions = [...soldOptions]
            newSoldOptions[indexOfSoldItem] = { ...newSoldOptions[indexOfSoldItem], name: soldStatus ? 'Sold' : 'Unsold' }
            setSoldOptions(newSoldOptions)
        }
        if (id === 4){
            handleClickOpen()

        }
    }


    const onClickFilterButton = (id) => {
        setActiveFilterId(id)
    }


    const getMyPostAdDetails = async() =>{
        const ListsUrl = `http://localhost:4000/GetMyPostAdDetails/${parseLoginDetails.customer_id}`
        const options = { 
            method: 'GET'   
            
          }

          const response = await fetch(ListsUrl, options)
        const data = await response.json()
       
        if (response.status === 200) {
           
            setMyAdsList(data.adListItemsDetails)
            
        }
        if (response.status === 400) {
            console.log(data.message)
        }      
    }

      useEffect(()=>{         
       getMyPostAdDetails()
    },[])


    const getContainerClassName = status =>{
        if (status === 'Under review'){
            return 'my-ad-under-progress-container'
        }
        else if(status === 'Live'){
            return 'my-ad-live-container'
        }
        else if(status === 'Rejected'){
            return 'my-Ad-rejected-container'
        }
        else if(status === 'Expired'){
            return 'my-ad-expired-container'
        }
    }

    const getHeadingClassName = (status) =>{
        if (status === 'Under review'){
        return 'my-ad-under-review-heading'
        }else if (status === 'Live'){
            return 'my-ad-live-heading'            
        }else if (status === 'Rejected'){
            return 'my-ad-reject-heading'            
        }
        else if (status === 'Expired'){
            return 'my-ad-expiry-heading'            
        }
    }

    const onClickToDeleteAd = async()=>{
        setMyAdsList(myAdsList.filter((each)=> each.post_ad_id !== activePostId))      
   
        const url = `http://localhost:4000/Delete-postAdDetails/${activePostId}`
        const options ={
            method:'DELETE'            
        }
        debugger
        const response  = await fetch (url, options)
        const data = await response.json()
         if (response.status === 200){
            console.log(data)
         }

    }


    return (
        <>
            <HeadSection />
            <div className='my-ads-main-container'>
                <div className='my-ads-breadcrumb'>
                    <div className='main-container-ads'>
                        <Breadcrumbs
                            separator={<NavigateNextIcon fontSize="small" />}
                            aria-label="breadcrumb"
                            className='breadcrumbs'>
                            {breadcrumbs}
                        </Breadcrumbs>
                        <div className='my-ads-container'>
                            <h2 className='myads-heading'>My Ads</h2>
                            <div className='myads-filter-buttons'>
                                <div className='buttons'>
                                    {myAdsfilterButtons.map((each) => (
                                        <button type="button" key={each.id} onClick={() => onClickFilterButton(each.id)} className={each.id === activeFilterId ? 'activeMyFavButtons' : 'DeactiveMyFavButtons'}>{each.name} ({myAdsList.length})</button>
                                    ))}
                                </div>
                                <Stack>
                                    <Button type='button'><BsFilter />Filters</Button>
                                </Stack>
                            </div>
                            <div className='my-ads-list-container'>
                                <div className='my-ads-section-container'>
                                    <h3 className='motors-heading-container'>Motors</h3>                                    
                                    {myAdsList.map((each)=>(
                                    <div className='motors-ads-container'>
                                        <p className='ads-date'>{day} {monthName} {year}</p>
                                        <div className='ads-container'>
                                            <div className='ads-frame'>
                                                {soldStatus && <h6 className='sold'>Sold</h6>}
                                                <img src={`http://localhost:4000/${[each.photos.split(',')].map((each)=> each[0])}`} alt="img" className='my-add-image' />

                                                <div className='my-ad-description' >
                                                    <div className='staus-container'>
                                                        <div>
                                                            <div className={getContainerClassName(each.ad_current_status)}><span className={getHeadingClassName(each.ad_current_status)}>{each.ad_current_status}</span></div>
                                                        </div>
                                                        <Box sx={{ flexGrow: 0 }}>
                                                            <Tooltip title="Open settings">
                                                                <IconButton onClick={(e)=> {handleOpenUserMenu(e); setsetActivePostId(each.post_ad_id)}} sx={{ p: 0 }}>
                                                                    <BsThreeDotsVertical />
                                                                    {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
                                                                </IconButton>
                                                            </Tooltip>
                                                            <Menu
                                                                sx={{ mt: '45px' }}
                                                                id="menu-appbar"
                                                                anchorEl={anchorElUser}
                                                                anchorOrigin={{
                                                                    vertical: 'top',
                                                                    horizontal: 'right',
                                                                }}
                                                                keepMounted
                                                                transformOrigin={{
                                                                    vertical: 'top',
                                                                    horizontal: 'right',
                                                                }}
                                                                open={Boolean(anchorElUser)}
                                                                onClose={handleCloseUserMenu}
                                                            >
                                                                {soldOptions.map((setting) => (                                                                   
                                                                    <MenuItem key={setting.id} onClick={handleCloseUserMenu}>                                                                        
                                                                        <button type='button' className='myAd-nav-options' onClick={() => onClickSelectOptions(setting.id)}><Stack direction={'row'} justifyContent={'space-between'} sx={{ width: 95 }}>{setting.logo}{setting.name}</Stack></button>
                                                                        <BootstrapDialog
                                                                            onClose={handleClose}
                                                                            aria-labelledby="customized-dialog-title"
                                                                            open={open}

                                                                        >
                                                                            < CgTrash style={{ color: 'red', fontSize: 30, padding: 20 }} />
                                                                            <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                                                                                Delete Ad
                                                                            </BootstrapDialogTitle>
                                                                            <Typography gutterBottom sx={{ p: 2 }}>
                                                                                Are you sure you want to delete this Ad? <br />This action cannot be undone.
                                                                            </Typography>
                                                                            <DialogContent dividers>
                                                                                <Stack direction={'row'} justifyContent={'space-between'}>
                                                                                    <Button type='button' variant='outlined' sx={{ color: 'black' }} onClick={handleClose}> Cancel
                                                                                    </Button>
                                                                                    <Button type='button' variant='contained' sx={{ backgroundColor: 'red', color: 'white' }} onClick={onClickToDeleteAd}> Delete
                                                                                    </Button>
                                                                                </Stack>
                                                                            </DialogContent>
                                                                            <DialogActions>
                                                                            </DialogActions>
                                                                        </BootstrapDialog>
                                                                    </MenuItem>
                                                                ))}
                                                            </Menu>
                                                        </Box>
                                                    </div>
                                                    <div className='description-details-container'>
                                                        <h6 className='vechile-name'>{each.brand}</h6>
                                                        <div className='details-ad'>
                                                            <p className='vechile-price'>AED {each.price}</p>
                                                            <p className='my-ad-location'>{each.city}, {each.region}</p>
                                                        </div>
                                                    </div>
                                                </div >
                                            </div>
                                            <div className='views-expiry-container'>
                                                <p className='no-of-views'><AiOutlineEye /> 13 views</p>
                                                <p className='expiry'><span className='clock-icon'><AiOutlineClockCircle /></span>Expires in 5 days</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                    {/* <div className='motors-ads-container'>
                                        <p className='ads-date'>17 Dec 2022</p>
                                        <div className='ads-container'>
                                            <div className='ads-frame'>
                                                {soldStatus && <h6 className='sold'>Sold</h6>}
                                                <img src='https://m.media-amazon.com/images/I/61-7yJ5wwCL._UL1100_.jpg' alt="img" className='my-add-image' />

                                                <div className='my-ad-description' >
                                                    <div className='staus-container'>
                                                        <div>
                                                            <div className='my-ad-live-container'><span className='my-ad-live-heading'>Live</span></div>
                                                        </div>
                                                        <Box sx={{ flexGrow: 0 }}>
                                                            <Tooltip title="Open settings">
                                                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                                                    <BsThreeDotsVertical />
                                                                    // <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> 
                                                                </IconButton>
                                                            </Tooltip>
                                                            <Menu
                                                                sx={{ mt: '45px' }}
                                                                id="menu-appbar"
                                                                anchorEl={anchorElUser}
                                                                anchorOrigin={{
                                                                    vertical: 'top',
                                                                    horizontal: 'right',
                                                                }}
                                                                keepMounted
                                                                transformOrigin={{
                                                                    vertical: 'top',
                                                                    horizontal: 'right',
                                                                }}
                                                                open={Boolean(anchorElUser)}
                                                                onClose={handleCloseUserMenu}
                                                            >
                                                                {soldOptions.map((setting) => (
                                                                    <MenuItem key={setting.id} onClick={handleCloseUserMenu}>
                                                                        // <Button type='button' onClick={() => setting.id === 4 ? handleClickOpen() : onClickOnSold(setting.id)}><Stack direction={'row'} justifyContent={'space-between'} sx={{ width: 95 }}>{setting.logo}{setting.name}</Stack></Button> 
                                                                        <BootstrapDialog
                                                                            onClose={handleClose}
                                                                            aria-labelledby="customized-dialog-title"
                                                                            open={open}

                                                                        >
                                                                            < CgTrash style={{ color: 'red', fontSize: 30, padding: 20 }} />
                                                                            <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                                                                                Delete Ad
                                                                            </BootstrapDialogTitle>
                                                                            <Typography gutterBottom sx={{ p: 2 }}>
                                                                                Are you sure you want to delete this Ad? <br />This action cannot be undone.
                                                                            </Typography>
                                                                            <DialogContent dividers>
                                                                                <Stack direction={'row'} justifyContent={'space-between'}>
                                                                                    <Button type='button' variant='outlined' sx={{ color: 'black' }} onClick={handleClose}> Cancel
                                                                                    </Button>
                                                                                    <Button type='button' variant='contained' sx={{ backgroundColor: 'red', color: 'white' }}> Delete
                                                                                    </Button>
                                                                                </Stack>
                                                                            </DialogContent>
                                                                            <DialogActions>
                                                                            </DialogActions>
                                                                        </BootstrapDialog>
                                                                    </MenuItem>
                                                                ))}
                                                            </Menu>
                                                        </Box>
                                                    </div>
                                                    <div className='description-details-container'>
                                                        <h6 className='vechile-name'>BMW 3 SERIES</h6>
                                                        <p className='vechile-price'>AED 91,900</p>
                                                    </div>
                                                </div >
                                            </div>
                                            <div className='views-expiry-container'>
                                                <p className='no-of-views'><span className='eye-icon'><AiOutlineEye /></span>13 views</p>
                                                <p className='expiry'><span className='clock-icon'><AiOutlineClockCircle /></span>Expiry in 5 days</p>
                                            </div>
                                        </div>
                                    </div>
                                    <h3 className='electronics-heading-container'>Electronics</h3>
                                    <div className='motors-ads-container'>
                                        <p className='ads-date'>10 Dec 2022</p>
                                        <div className='ads-container'>
                                            <div className='ads-frame'>
                                                {soldStatus && <h6 className='sold'>Sold</h6>}
                                                <img src='https://m.media-amazon.com/images/I/71ZDY57yTQL._SL1500_.jpg' alt="img" className='my-add-image' />

                                                <div className='my-ad-description' >
                                                    <div className='staus-container'>
                                                        <div>
                                                            <div className='my-Ad-rejected-container'><span className='my-ad-reject-heading'>Rejected</span></div>
                                                        </div>
                                                        <Box sx={{ flexGrow: 0 }}>
                                                            <Tooltip title="Open settings">
                                                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                                                    <BsThreeDotsVertical />
                                                                    //  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> 
                                                                </IconButton>
                                                            </Tooltip>
                                                            <Menu
                                                                sx={{ mt: '45px' }}
                                                                id="menu-appbar"
                                                                anchorEl={anchorElUser}
                                                                anchorOrigin={{
                                                                    vertical: 'top',
                                                                    horizontal: 'right',
                                                                }}
                                                                keepMounted
                                                                transformOrigin={{
                                                                    vertical: 'top',
                                                                    horizontal: 'right',
                                                                }}
                                                                open={Boolean(anchorElUser)}
                                                                onClose={handleCloseUserMenu}
                                                            >
                                                                {soldOptions.map((setting) => (
                                                                    <MenuItem key={setting.id} onClick={handleCloseUserMenu}>
                                                                        //  <Button type='button' onClick={() => setting.id === 4 ? handleClickOpen() : onClickOnSold(setting.id)}><Stack direction={'row'} justifyContent={'space-between'} sx={{ width: 95 }}>{setting.logo}{setting.name}</Stack></Button> 
                                                                        <BootstrapDialog
                                                                            onClose={handleClose}
                                                                            aria-labelledby="customized-dialog-title"
                                                                            open={open}

                                                                        >
                                                                            < CgTrash style={{ color: 'red', fontSize: 30, padding: 20 }} />
                                                                            <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                                                                                Delete Ad
                                                                            </BootstrapDialogTitle>
                                                                            <Typography gutterBottom sx={{ p: 2 }}>
                                                                                Are you sure you want to delete this Ad? <br />This action cannot be undone.
                                                                            </Typography>
                                                                            <DialogContent dividers>
                                                                                <Stack direction={'row'} justifyContent={'space-between'}>
                                                                                    <Button type='button' variant='outlined' sx={{ color: 'black' }} onClick={handleClose}> Cancel
                                                                                    </Button>
                                                                                    <Button type='button' variant='contained' sx={{ backgroundColor: 'red', color: 'white' }}> Delete
                                                                                    </Button>
                                                                                </Stack>
                                                                            </DialogContent>
                                                                            <DialogActions>
                                                                            </DialogActions>
                                                                        </BootstrapDialog>
                                                                    </MenuItem>
                                                                ))}
                                                            </Menu>
                                                        </Box>
                                                    </div>
                                                    <div className='description-details-container'>
                                                        <h6 className='vechile-name'>I Phone 13 Pro</h6>
                                                        <p className='vechile-price'>AED 4,900</p>
                                                    </div>
                                                </div >
                                            </div>
                                        </div>
                                    </div>
                                    <div className='motors-ads-container'>
                                        <p className='ads-date'>28 Nov 2022</p>
                                        <div className='ads-container'>
                                            <div className='ads-frame'>
                                                {soldStatus && <h6 className='sold'>Sold</h6>}
                                                <img src='https://m.media-amazon.com/images/I/81Hz7EvjAvL._AC_SY355_.jpg' alt="img" className='my-add-image' />

                                                <div className='my-ad-description' >
                                                    <div className='staus-container'>
                                                        <div>
                                                            <div className='my-ad-expired-container'><span className='my-ad-expiry-heading'>Expired</span></div>
                                                        </div>
                                                        <Box sx={{ flexGrow: 0 }}>
                                                            <Tooltip title="Open settings">
                                                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                                                    <BsThreeDotsVertical />
                                                                    //  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> 
                                                                </IconButton>
                                                            </Tooltip>
                                                            <Menu
                                                                sx={{ mt: '45px' }}
                                                                id="menu-appbar"
                                                                anchorEl={anchorElUser}
                                                                anchorOrigin={{
                                                                    vertical: 'top',
                                                                    horizontal: 'right',
                                                                }}
                                                                keepMounted
                                                                transformOrigin={{
                                                                    vertical: 'top',
                                                                    horizontal: 'right',
                                                                }}
                                                                open={Boolean(anchorElUser)}
                                                                onClose={handleCloseUserMenu}
                                                            >
                                                                {soldOptions.map((setting) => (
                                                                    <MenuItem key={setting.id} onClick={handleCloseUserMenu}>
                                                                        //  <Button type='button' onClick={() => setting.id === 4 ? handleClickOpen() : onClickOnSold(setting.id)}><Stack direction={'row'} justifyContent={'space-between'} sx={{ width: 95 }}>{setting.logo}{setting.name}</Stack></Button> 
                                                                        <BootstrapDialog
                                                                            onClose={handleClose}
                                                                            aria-labelledby="customized-dialog-title"
                                                                            open={open}

                                                                        >
                                                                            < CgTrash style={{ color: 'red', fontSize: 30, padding: 20 }} />
                                                                            <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                                                                                Delete Ad
                                                                            </BootstrapDialogTitle>
                                                                            <Typography gutterBottom sx={{ p: 2 }}>
                                                                                Are you sure you want to delete this Ad? <br />This action cannot be undone.
                                                                            </Typography>
                                                                            <DialogContent dividers>
                                                                                <Stack direction={'row'} justifyContent={'space-between'}>
                                                                                    <Button type='button' variant='outlined' sx={{ color: 'black' }} onClick={handleClose}> Cancel
                                                                                    </Button>
                                                                                    <Button type='button' variant='contained' sx={{ backgroundColor: 'red', color: 'white' }}> Delete
                                                                                    </Button>
                                                                                </Stack>
                                                                            </DialogContent>
                                                                            <DialogActions>
                                                                            </DialogActions>
                                                                        </BootstrapDialog>
                                                                    </MenuItem>
                                                                ))}
                                                            </Menu>
                                                        </Box>
                                                    </div>
                                                    <div className='description-details-container'>
                                                        <h6 className='vechile-name'>I Phone Note Pad</h6>
                                                        <p className='vechile-price'>AED 2,900</p>
                                                    </div>
                                                </div >
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>                   
                </div>                
                <Footer/>               
            </div>
           
        </>
    )
}

export default MyAds


{/* <div className='reject-error-msg-container'>
    <div className='error-msg-container'>
        <span className='info-icon'><AiOutlineInfoCircle/></span>
        <p className='error-text'>We are unable to verify your number, click on edit to change</p>
    </div>
    <div className='edit-container'>
        <button type="button" className='button-text'><span className='edit-icon'><BiEdit/></span>Edit</button>
    </div>
    </div> */}