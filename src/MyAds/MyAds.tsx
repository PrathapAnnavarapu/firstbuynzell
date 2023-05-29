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
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const [open, setOpen] = React.useState(false);
   
     const handleClick = () =>{
        navigate('/')
     }
     
    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
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


    console.log(open)

    const handleClickOpen = () => {
        setOpen(true);

    };
    const handleClose = () => {
        setOpen(false);
    };



    const onClickOnSold = (id) => {
        if (id === 3) {
            const indexOfSoldItem = soldOptions.findIndex((each) => each.id === id)
            setSoldStatus((prev) => !prev)
            const newSoldOptions = [...soldOptions]
            newSoldOptions[indexOfSoldItem] = { ...newSoldOptions[indexOfSoldItem], name: soldStatus ? 'Sold' : 'Unsold' }
            setSoldOptions(newSoldOptions)
        }
    }




    const onClickFilterButton = (id) => {
        setActiveFilterId(id)
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
                            className='breadcrumbs'            >
                            {breadcrumbs}
                        </Breadcrumbs>
                        <div className='my-ads-container'>
                            <h2 className='myads-heading'>My Ads</h2>
                            <div className='myads-filter-buttons'>
                                <div className='buttons'>
                                    {myAdsfilterButtons.map((each) => (
                                        <button type="button" key={each.id} onClick={() => onClickFilterButton(each.id)} className={each.id === activeFilterId ? 'activeMyFavButtons' : 'DeactiveMyFavButtons'}>{each.name}</button>
                                    ))}
                                </div>
                                <Stack>
                                    <Button type='button'><BsFilter />Filters</Button>
                                </Stack>
                            </div>
                            <div className='my-ads-list-container'>
                                <div className='my-ads-section-container'>
                                    <h3 className='motors-heading-container'>Motors</h3>
                                    <div className='motors-ads-container'>
                                        <p className='ads-date'>27 Jan 2023</p>
                                        <div className='ads-container'>
                                            <div className='ads-frame'>
                                                {soldStatus && <h6 className='sold'>Sold</h6>}
                                                <img src='https://media.istockphoto.com/id/170110046/photo/photorealistic-illustration-of-blue-car.jpg?s=612x612&w=0&k=20&c=-hoFPF15-T07bUBJn6ccsSwGw96ZObf5JEdS4Y8Co1M=' alt="img" className='my-add-image' />

                                                <div className='my-ad-description' >
                                                    <div className='staus-container'>
                                                        <div>
                                                            <div className='my-ad-under-progress-container'><span className='my-ad-under-review-heading'>Under review</span></div>
                                                        </div>
                                                        <Box sx={{ flexGrow: 0 }}  >
                                                            <Tooltip title="Open settings">
                                                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
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
                                                                        <button type='button' onClick={() => setting.id === 4 ? handleClickOpen() : onClickOnSold(setting.id)}><Stack direction={'row'} justifyContent={'space-between'} sx={{ width: 95, color:'black' }}>{setting.logo}{setting.name}</Stack></button>
                                                                        <BootstrapDialog
                                                                            onClose={handleClose}
                                                                            aria-labelledby="customized-dialog-title"
                                                                            open={open}
                                                                            // className='delete-ad-dialog-container'

                                                                        >
                                                                            <div className='delete-ad-icon-container'>
                                                                            < CgTrash className='delete-ad-icon' />
                                                                            </div>
                                                                            <div className='delete-conformation-container'>
                                                                                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                                                                                    Delete Ad
                                                                                </BootstrapDialogTitle>
                                                                                <Typography gutterBottom sx={{ p: 2 }}>
                                                                                    Are you sure you want to delete this Ad? <br />This action cannot be undone.
                                                                                </Typography>
                                                                            </div>
                                                                            <div className='delte-ad-buttons-contaier'>
                                                                                <Stack direction={'row'} justifyContent={'space-between'}>
                                                                                    <Button type='button' variant='outlined' sx={{ color: 'black' }} onClick={handleClose}> Cancel
                                                                                    </Button>
                                                                                    <Button type='button' variant='contained' sx={{ backgroundColor: 'red', color: 'white' }}> Delete
                                                                                    </Button>
                                                                                </Stack>
                                                                            </div>
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
                                        </div>
                                    </div>
                                    <div className='motors-ads-container'>
                                        <p className='ads-date'>23 Dec 2022</p>
                                        <div className='ads-container'>
                                            <div className='ads-frame'>
                                                {soldStatus && <h6 className='sold'>Sold</h6>}
                                                <img src='https://imgd.aeplcdn.com/0x0/n/cw/ec/106785/exterior-right-front-three-quarter-2.jpeg?isig=0' alt="img" className='my-add-image' />

                                                <div className='my-ad-description' >
                                                    <div className='staus-container'>
                                                        <div>
                                                            <div className='my-ad-live-container'><span className='my-ad-live-heading'>Live</span></div>
                                                        </div>
                                                        <Box sx={{ flexGrow: 0 }}>
                                                            <Tooltip title="Open settings">
                                                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
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
                                                                        <Button type='button' onClick={() => setting.id === 4 ? handleClickOpen() : onClickOnSold(setting.id)}><Stack direction={'row'} justifyContent={'space-between'} sx={{ width: 95 }}>{setting.logo}{setting.name}</Stack></Button>
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
                                                        <div className='details-ad'>
                                                            <p className='vechile-price'>AED 91,900</p>
                                                            <p className='location'>Location</p>
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
                                    <div className='motors-ads-container'>
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
                                                                        <Button type='button' onClick={() => setting.id === 4 ? handleClickOpen() : onClickOnSold(setting.id)}><Stack direction={'row'} justifyContent={'space-between'} sx={{ width: 95 }}>{setting.logo}{setting.name}</Stack></Button>
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
                                                                        <Button type='button' onClick={() => setting.id === 4 ? handleClickOpen() : onClickOnSold(setting.id)}><Stack direction={'row'} justifyContent={'space-between'} sx={{ width: 95 }}>{setting.logo}{setting.name}</Stack></Button>
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
                                                                        <Button type='button' onClick={() => setting.id === 4 ? handleClickOpen() : onClickOnSold(setting.id)}><Stack direction={'row'} justifyContent={'space-between'} sx={{ width: 95 }}>{setting.logo}{setting.name}</Stack></Button>
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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