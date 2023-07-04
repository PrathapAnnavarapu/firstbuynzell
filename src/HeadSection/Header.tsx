import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { BsGlobe, BsChatLeft, BsFacebook } from "react-icons/bs";
import Logo from '../assets/content.svg';
import CoutryImage from '../assets/AE.svg'
import { v4 as uuidv4 } from 'uuid'
import { useNavigate } from 'react-router-dom'
import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { useDispatch, useSelector } from 'react-redux';
import { VscPlug } from "react-icons/vsc";
import { BiCar, BiSearchAlt2, } from "react-icons/bi";
import { TbSofa, TbShoppingBag } from "react-icons/tb";
import { RiGroupLine, RiBuildingLine, RiPlayListAddFill, RiAppleFill } from "react-icons/ri";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";

import Cookies from 'js-cookie'
// import { IoIosClose } from "react-icons/io";
import SellerFlowSteps from '../SellerFlowSteps/newSellerFlowSteps'
import './Header.css'
import { Paper } from '@mui/material';






const navItems = [
  { label: 'Motors', id: 1 },
  { label: 'Electronics', id: 2 },
  { label: 'Classified', id: 3 },
  { label: 'Jobs', id: 4 },
  { label: 'Community', id: 5 },
  { label: "Property", id: 6 }
]

const statesOfUAE = [
  {label:'All Cities (UAE)', id:1},
  { label: 'Dubai', id: 2 },
  { label: 'Abu Dhabi', id: 3 },
  { label: 'Ras al Khaimah', id: 4 },
  { label: 'Sharjah', id: 5 },
  { label: 'Fujairah', id: 6 },
  { label: "Ajman", id: 7 },
  { label: 'Umm al Quwain', id: 8 },
  {label:'Al Ain', id:9}
  
]

const settings = [{ name: 'My Profile', id: 1 }, { name: 'My Ads', id: 2 }, { name: 'Notifications', id: 3 }, { name: 'Chats', id: 4 }, { name: 'Favorites', id: 5 }, { name: 'Packages', id: 6 }, { name: 'Become a Dealer', id: 7 }, { name: 'Settings', id: 8 }, { name: 'Logout', id: 9 }];


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 0}} {...other}>
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


const MotorsDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export interface MotorDialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

function MotorsDialogTitle(props: MotorDialogTitleProps) {
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

const SignUpDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

interface SignupDialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

function SignupDialogTitle(props: SignupDialogTitleProps) {
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

const SignInToPostDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

interface SignInToPostDialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

function SignInToPostDialogTitle(props: SignInToPostDialogTitleProps) {
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

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface searchResults {
  name: string;
  id: string;
}

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}


const ResponsiveAppBar = (props: any) => {
  let naviagete = useNavigate()
  const dispatch = useDispatch()


  const userDetailsjson =localStorage.getItem('loginDetails')
  const ParseUserDetails = JSON.parse(String(userDetailsjson))

  const jwtToken = Cookies.get('jwt_token')
  
  const [activeState, setActiveSate] = React.useState<any>(statesOfUAE.map((each)=> each.label)[1])
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const [open, setOpen] = React.useState(false);
  const [motorsAdOpen, setMotorsAdOpen] = React.useState(false)
  const [fullopen, setFullOpen] = React.useState(false);
  const [searchInput, setSearchInput] = React.useState<string>('')
  const [searchResults, setSearchResult] = React.useState<any>([])
  const searchObject:any = { name: searchInput, id: uuidv4() }

  const [searchOpen, setSearchOpen] = React.useState(false);
  const [options, setOptions] = React.useState<readonly searchResults[]>([]);
  const loading = searchOpen && options.length === 0;




  React.useEffect(() => {
    let active = true;
    if (!loading) {
      return undefined;
    }

    (async () => {
      await sleep(1e3); // For demo purposes.

      if (active) {
        setOptions([...searchResults]);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!searchOpen) {
      setOptions([]);
    }
  }, [searchOpen]);



  const onSubmitForm = e => {
    e.preventDefault()
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const handleFullOpen = () => {
    setFullOpen(true);
  };
  const handleFullClose = () => {
    setFullOpen(false);
  };

  const onClickMotorsAd = () => {
    setMotorsAdOpen(true)
  }

  const handleCloseMotorsAd = () => {
    setMotorsAdOpen(false)
  }

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (id) => {
    if (id === 2) {
      naviagete('/MyAds')

    }
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const onClickOnEachProfile = (id) => {
    if (id === 8) {
      if (jwtToken !== undefined){
      naviagete('/Settings')
      }else{
        naviagete('/')
      }
    }
    else if (id === 3) {
      if (jwtToken !== undefined){
      naviagete('/Settings/Notifications')
    }else{
       naviagete('/')
    }
  }
    else if (id === 1) {
      if (jwtToken !== undefined){
      naviagete('/Settings/Myprofile')
    }else{
       naviagete('/')
    }
  }
    else if (id === 6) {
      if (jwtToken !== undefined){
      naviagete('/MyPackage')
    }else{
      naviagete('/')
    }
  }
    else if (id === 5) {
      if (jwtToken !== undefined){
      naviagete('/MyFaviorites')
    }else{
      naviagete('/')
    }
  }
    else if (id === 2) {  
      if (jwtToken !== undefined){
      naviagete('/MyAds')
      }  else{
        naviagete('/')
      }
    }    
    else if (id === 9) {
      Cookies.remove('jwt_token')
      localStorage.removeItem('loginDetails')
      naviagete('/')
    }
  }

  const addSearchResults = () => {
    setSearchResult([...searchResults, searchObject])  
    dispatch({type:'SearchInput', payload:searchInput})  
    naviagete(`/SearchResults`)
    setSearchInput('')
    
  }

  // const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  // const openLanguage = Boolean(anchorEl);

  // const handleClick = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleCloseLanguage = () => {
  //   setAnchorEl(null);
  // };

  const [signupOpen, setSignupOpen] = React.useState(false);

  const SignuphandleClickOpen = () => {
    setSignupOpen(true);

  };
  const SignuphandleClose = () => {
    setSignupOpen(false);
  };

  const [signInToPostAdOpen, setSignInToPostAdOpen] = React.useState(false);

  const SignInToPosthandleClickOpen = () => {
    setSignInToPostAdOpen(true);

  };
  const SignInToPosthandleClose = () => {
    setSignInToPostAdOpen(false);
  };

  const onClickCreateNewAccount = () => {
    naviagete('/SignUp')
    SignuphandleClose()
    // dispatch({ type: 'IncActivePageCount', payload:0 })
  }


  


  const [motorsMenu, setMotorsMenu] = React.useState<null | HTMLElement>(null);
  const openMotorsMenu = Boolean(motorsMenu);

  const handleMotorsMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMotorsMenu(event.currentTarget);
  };
  const handleMotorsMenuClose = () => {
    setMotorsMenu(null);
  };


  const [statesMenu, setStatesMenu] = React.useState<null | HTMLElement>(null);
  const openStatesMenu = Boolean(statesMenu);

  const handleStatesMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setStatesMenu(event.currentTarget);
  };
  const handleStatesMenuClose = () => {
    setStatesMenu(null);
  };



  // const onClickOpen = (each)=>{
  //   if (each.label === 'Motors'){
  //     handleMotorsMenuClick(event)
  //   }
  // }

  const onClickChangeToMyAds = ()=>{
    if (jwtToken !== undefined){
       naviagete('/myAds')      
    }else{
      naviagete('/')
      SignuphandleClickOpen()
    }
  }


  return (
    <>
      <form onSubmit={onSubmitForm} className='headercontainer'>
        <div className='top-container'>
          <div className='top-inner-container'>
            <div>
              <img src={Logo} alt="name" className='company-logo' onClick={()=> naviagete('/')}/>
            </div>
            <div className='top-inner-middle-container'>
              <div className='citys-dropdown-container'>
                <img src={CoutryImage} alt="country" className='coutry-image' />
                {/* <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={statesOfUAE}
                  sx={{ width: 95, mt: 1, p: 0, mb: 1 }}
                  renderInput={(params) => <TextField {...params} placeholder="Dubai" sx={{ boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }} />} className='coutryDropdownInput' /> */}
                <div className='states-list-container'>            
                  <button   id="basic-button" type='button' className='state-butons-style'  aria-controls={open ? 'basic-menu' : undefined}  aria-haspopup="true"  aria-expanded={open ? 'true' : undefined} onClick={handleStatesMenuClick}>{activeState} <MdOutlineKeyboardArrowDown /></button>
                <Menu
                  id="basic-menu"              
                  open={openStatesMenu}
                  onClose={handleStatesMenuClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                  sx={{position:'absolute', top:-50, left:250}}
                >
                  {statesOfUAE.map((each)=>
                  <MenuItem className='state-navbuttons' onClick={()=>{setActiveSate(each.label); handleStatesMenuClose()}}>{each.label} </MenuItem>)}                 
                </Menu>
                </div>
              </div>
              {/*SearchBar*/}
              <form className='search-main-container'>
                <Autocomplete
                  id="free-solo-demo"
                  freeSolo
                  className='search-container'
                  sx={{ height: 24, p: 0 }}
                  open={searchOpen}
                  onOpen={() => {
                    setSearchOpen(true);
                  }}
                  onClose={() => {
                    setSearchOpen(false);
                  }}
                  isOptionEqualToValue={(option, value) => option.name === value.name}
                  // getOptionLabel={(option) => option.name}
                  options={options}
                  loading={loading}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      placeholder='Search Anything'
                      value={searchInput}
                      onChange={(e) => setSearchInput(e.target.value)}
                      InputProps={{
                        ...params.InputProps,
                        //   endAdornment: (
                        //     <React.Fragment>
                        //       {loading ? <CircularProgress color="inherit" size={20}* /> : null}
                        //       {params.InputProps.endAdornment}
                        //     </React.Fragment>
                        //   ),
                      }}
                    />
                  )}
                />
                <button type="submit" className='search-button' onClick={addSearchResults}><BiSearchAlt2 style={{ color: 'black', fontSize: 20 }} /></button>
              </form>
            </div>
            {/* Language settings */}
            <div className='inner-end-container'>
              <div className='language-ads-container'>
                <button type="button" className='icons'><BsGlobe style={{ width: 20, height: 20 }} /><span className='lan-text'>EN</span></button>
                <button type="button" className='icon2' onClick={onClickChangeToMyAds} ><RiPlayListAddFill style={{ width: 20, height: 20 }} /><span className='lan-text'>MyAds</span></button>
                <button type="button" className='icon3'><BsChatLeft style={{ width: 20, height: 20 }} /><span className='lan-text'>Chat</span></button>
              </div>

              {/*open profile section */}
              {jwtToken === undefined ? (<div className='signin-container'>
                <button type="button" className="signin-signup-button" onClick={SignuphandleClickOpen}>SignIn/SignUp</button>
                <SignUpDialog
                  onClose={SignuphandleClose}
                  aria-labelledby="customized-dialog-title"
                  open={signupOpen}
                // className='signup-dialog-container'
                >
                  <div className='signip-first-container'>
                    <div className='logo-icon-container'>
                      <img src={Logo} alt="logo" style={{ width: 150, height: 44 }} />
                    </div>
                    <div className='signup-mai-heading-container'>
                      <SignupDialogTitle id="customized-dialog-title" onClose={SignuphandleClose}>
                        Sign into your account
                      </SignupDialogTitle>                     
                    </div>
                  </div>
                  <div className='social-media-group-buttons-container'>
                    <button type="button" className='social-media-buttons' >
                      <FcGoogle style={{ fontSize: 24 }} /><a href='https://accounts.google.com/v3/signin/identifier?dsh=S957186528%3A1686988941292863&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ifkv=Af_xneHEPTU5wFfw4YQ9cT9IPfuO4U5-5aUpWP7du8GGwcSoFNHB7oUiA2rztfAzTfWaWBydNL2wzg&rip=1&sacu=1&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin' target='_top'> Continue with Google</a>
                    </button>
                    <button type="button" className='social-media-buttons'>
                      <BsFacebook style={{ color: '#1877F2', fontSize: 24 }} />Continue with Facebook
                    </button>
                    <button type="button" className='social-media-buttons'>
                      <RiAppleFill style={{ fontSize: 24 }} /> Continue with Apple
                    </button>
                    <button type="button" className='social-media-buttons'>
                      <MdEmail style={{ color: '#0068B3', fontSize: 24 }} />Continue with Email
                    </button>
                  </div>
                  <div className='create-account-button-contaier'>
                    <button type='button' onClick={onClickCreateNewAccount} className='creat-account-button'> Don’t have an account? Create one
                    </button>
                  </div>
                </SignUpDialog>
              </div>) :
                (<div className='profile-details-main-container'>
                  <Tooltip title="Open Profile">
                    <IconButton onClick={handleOpenUserMenu} >
                      <div className='avatar-container'><span className='avatar-title'>{String(ParseUserDetails.user_name).slice(0, 1)}</span></div>
                    </IconButton>
                  </Tooltip>
                  <Menu
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
                    sx={{ top: 65 }}
                  >
                    {settings.map((each) => (
                      <MenuItem key={each.id} onClick={handleCloseUserMenu}>
                        <button type='button' id='profile-nav-buttons-hover-style' className='profile-nav-buttons' onClick={() => onClickOnEachProfile(each.id)}><div>{each.name}</div></button>
                      </MenuItem>
                    ))}
                  </Menu>
                  <div className='avatar-name-container'>
                    <p className='profile-name'>{ParseUserDetails.user_name}</p>
                  </div>
                </div>)}

              {/*Add Post Code */}
              {jwtToken === undefined ? (<div className='postad-container'>
              <button onClick={SignInToPosthandleClickOpen} className='postad-button'>
                  + Post Ad
                </button>
                <SignInToPostDialog
                  onClose={SignInToPosthandleClose}
                  aria-labelledby="customized-dialog-title"
                  open={signInToPostAdOpen}
                // className='signup-dialog-container'
                >
                  <div className='signip-first-container'>
                    <div className='logo-icon-container'>
                      <img src={Logo} alt="logo" style={{ width: 150, height: 44 }} />
                    </div>
                    <div className='signup-mai-heading-container'>
                      <SignInToPostDialogTitle id="customized-dialog-title" onClose={SignInToPosthandleClose}>
                        Sign in to Post an ad
                      </SignInToPostDialogTitle>                     
                    </div>
                  </div>
                  <div className='social-media-group-buttons-container'>
                    <button type="button" className='social-media-buttons'>
                      <FcGoogle style={{ fontSize: 24 }} /> Continue with Google
                    </button>
                    <button type="button" className='social-media-buttons'>
                      <BsFacebook style={{ color: '#1877F2', fontSize: 24 }} />Continue with Facebook
                    </button>
                    <button type="button" className='social-media-buttons'>
                      <RiAppleFill style={{ fontSize: 24 }} /> Continue with Apple
                    </button>
                    <button type="button" className='social-media-buttons'>
                      <MdEmail style={{ color: '#0068B3', fontSize: 24 }} />Continue with Email
                    </button>
                  </div>
                  <div className='create-account-button-contaier'>
                    <button type='button' onClick={onClickCreateNewAccount} className='creat-account-button'> Don’t have an account? Create one
                    </button>
                  </div>
                </SignInToPostDialog>
              </div>):
              (<div className='postad-container'>
                <button onClick={handleClickOpen} className='postad-button'>
                  + Post Ad
                </button>
                <BootstrapDialog
                  onClose={handleClose}
                  aria-labelledby="customized-dialog-title"
                  open={open}

                >
                  <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    <div className='post-ad-dialog-heading-container'>
                      <img src={Logo} alt="logo" style={{ width: 150, height: 44 }} />
                      <div className="post-ad-heading-contaier">
                        <h3 className='post-ad-heading'>What do you want to Sell?</h3>
                        <p className='post-ad-supporting-text'>Select the category that best suits your ad</p>
                      </div>
                    </div>
                  </BootstrapDialogTitle>
                  <DialogContent dividers>
                    <Stack direction={'row'} justifyContent={'start'} alignItems={'start'} flexWrap={'wrap'} sx={{ width: 428, height: 282 }}>
                      <button onClick={onClickMotorsAd} className='motots-main-icon' >
                        <div className='avatar-icons'>
                          <BiCar className='ad-image' />
                        </div>
                        <div className='motor-icon-heading'>
                          Motors
                        </div>
                      </button>
                      <MotorsDialog
                        onClose={handleCloseMotorsAd}
                        aria-labelledby="customized-dialog-title"
                        open={motorsAdOpen}
                      // sx={{ height: 667 }}
                      >
                        <MotorsDialogTitle id="customized-dialog-title" onClose={handleCloseMotorsAd} >
                          <Stack direction={'column'}>
                            <BiCar className='car-logo' />
                            <span className='motor-fetures-heading'>
                              Motors
                            </span>
                          </Stack>
                          <DialogContent dividers>
                            <Stack direction={'column'} justifyContent={'start'} alignItems={'start'} sx={{ width: 448, height: 400 }}>
                              <button type="button" className='diff-feature-buttons-of-motors' onClick={handleFullOpen}>Used car for sale</button>
                              <Dialog
                                fullScreen
                                open={fullopen}
                                onClose={handleFullClose}
                                TransitionComponent={Transition}
                              >
                                <AppBar sx={{ position: 'relative', backgroundColor: 'white' }}>
                                  <Toolbar>
                                    <IconButton
                                      edge="start"
                                      color="inherit"
                                      sx={{ color: 'black' }}
                                      onClick={handleFullClose}
                                      aria-label="close"
                                    >
                                      <CloseIcon />
                                    </IconButton>
                                    <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                                      <img src={Logo} alt="logo" style={{ alignSelf: 'center' }} />
                                    </Typography>
                                  </Toolbar>
                                </AppBar>
                                <SellerFlowSteps />
                              </Dialog>
                              <hr style={{ width: 448, color: 'lightgray' }} />
                              <button type="button" className='diff-feature-buttons-of-motors'>Motorcycles</button>
                              <hr style={{ width: 448, color: 'lightgray' }} />
                              <button type="button" className='diff-feature-buttons-of-motors'>Bikes</button>
                              <hr style={{ width: 448, color: 'lightgray' }} />
                              <button type="button" className='diff-feature-buttons-of-motors'>Boats</button>
                              <hr style={{ width: 448, color: 'lightgray' }} />
                              <button type="button" className='diff-feature-buttons-of-motors'>Heavy Vehicles</button>
                              <hr style={{ width: 448, color: 'lightgray' }} />
                              <button type="button" className='diff-feature-buttons-of-motors'>Used auto spare parts</button>
                              <hr style={{ width: 448, color: 'lightgray' }} />
                              <button type="button" className='diff-feature-buttons-of-motors'>Used 2 Wheelers spare parts</button>
                              <hr style={{ width: 448, color: 'lightgray' }} />
                              <button type="button" className='diff-feature-buttons-of-motors'>Used spare parts</button>
                              <hr style={{ width: 448, color: 'lightgray' }} />
                              <button type="button" className='diff-feature-buttons-of-motors'>Others</button>
                            </Stack>
                          </DialogContent>
                        </MotorsDialogTitle>
                      </MotorsDialog>
                      <button className='motots-main-icon' >
                        <div className='avatar-icons'>
                          <VscPlug className='ad-image' />
                        </div>
                        <div className='motor-icon-heading'>
                          Electronics
                        </div>
                      </button>
                      <button className='motots-main-icon' >
                        <div className='avatar-icons'>
                          <TbSofa className='ad-image' />
                        </div>
                        <div className='motor-icon-heading'>
                          Classified
                        </div>
                      </button>
                      <button className='motots-main-icon'>
                        <div className='avatar-icons'>
                          <TbShoppingBag className='ad-image' />
                        </div>
                        <div className='motor-icon-heading'>
                          Jobs
                        </div>
                      </button>
                      <button className='motots-main-icon' >
                        <div className='avatar-icons'>
                          <RiGroupLine className='ad-image' />
                        </div>
                        <div className='motor-icon-heading'>
                          Community
                        </div>
                      </button>
                      <button className='motots-main-icon' >
                        <div className='avatar-icons'>
                          <RiBuildingLine className='ad-image' />
                        </div>
                        <div className='motor-icon-heading'>
                          Property
                        </div>
                      </button>
                    </Stack>
                  </DialogContent>
                </BootstrapDialog>
              </div>)}
            </div>
            {/* </Toolbar> */}
          </div>
        </div>
        <div className='header-bottom-container'>
          <div className='navigation-container'>            
              <button   id="basic-button" type='button' className='nav-butons-style'  aria-controls={open ? 'basic-menu' : undefined}  aria-haspopup="true"  aria-expanded={open ? 'true' : undefined} onClick={handleMotorsMenuClick}>Motors <MdOutlineKeyboardArrowDown /></button>
            <Menu
              id="basic-menu"              
              open={openMotorsMenu}
              onClose={handleMotorsMenuClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleMotorsMenuClose}>Used Cars </MenuItem>
              <MenuItem onClick={handleMotorsMenuClose}>Motor Cycles</MenuItem>
              <MenuItem onClick={handleMotorsMenuClose}>Bikes</MenuItem>
              <MenuItem onClick={handleMotorsMenuClose}>Boats</MenuItem>
              <MenuItem onClick={handleMotorsMenuClose}>Heavy Vechiles</MenuItem>
              <MenuItem onClick={handleMotorsMenuClose}>Used 2 Wheelers spare parts</MenuItem>
              <MenuItem onClick={handleMotorsMenuClose}>Used spare parts</MenuItem>
              <MenuItem onClick={handleMotorsMenuClose}>Used auto spare parts</MenuItem>
              <MenuItem onClick={handleMotorsMenuClose}>Others</MenuItem>
            </Menu>
            <button   id="basic-button" type='button' className='nav-butons-style'  aria-controls={open ? 'basic-menu' : undefined}  aria-haspopup="true"  aria-expanded={open ? 'true' : undefined} onClick={handleMotorsMenuClick}>Electronics <MdOutlineKeyboardArrowDown /></button>
            <Menu
              id="basic-menu"              
              open={openMotorsMenu}
              onClose={handleMotorsMenuClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleMotorsMenuClose}>Used Cars </MenuItem>
              <MenuItem onClick={handleMotorsMenuClose}>Motor Cycles</MenuItem>
              <MenuItem onClick={handleMotorsMenuClose}>Bikes</MenuItem>
              <MenuItem onClick={handleMotorsMenuClose}>Boats</MenuItem>
              <MenuItem onClick={handleMotorsMenuClose}>Heavy Vechiles</MenuItem>
              <MenuItem onClick={handleMotorsMenuClose}>Used 2 Wheelers spare parts</MenuItem>
              <MenuItem onClick={handleMotorsMenuClose}>Used spare parts</MenuItem>
              <MenuItem onClick={handleMotorsMenuClose}>Used auto spare parts</MenuItem>
              <MenuItem onClick={handleMotorsMenuClose}>Others</MenuItem>
            </Menu>
            <button   id="basic-button" type='button' className='nav-butons-style'  aria-controls={open ? 'basic-menu' : undefined}  aria-haspopup="true"  aria-expanded={open ? 'true' : undefined} onClick={handleMotorsMenuClick}>Classified <MdOutlineKeyboardArrowDown /></button>
            <Menu
              id="basic-menu"              
              open={openMotorsMenu}
              onClose={handleMotorsMenuClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleMotorsMenuClose}>Used Cars </MenuItem>
              <MenuItem onClick={handleMotorsMenuClose}>Motor Cycles</MenuItem>
              <MenuItem onClick={handleMotorsMenuClose}>Bikes</MenuItem>
              <MenuItem onClick={handleMotorsMenuClose}>Boats</MenuItem>
              <MenuItem onClick={handleMotorsMenuClose}>Heavy Vechiles</MenuItem>
              <MenuItem onClick={handleMotorsMenuClose}>Used 2 Wheelers spare parts</MenuItem>
              <MenuItem onClick={handleMotorsMenuClose}>Used spare parts</MenuItem>
              <MenuItem onClick={handleMotorsMenuClose}>Used auto spare parts</MenuItem>
              <MenuItem onClick={handleMotorsMenuClose}>Others</MenuItem>
            </Menu>
            <button   id="basic-button" type='button' className='nav-butons-style'  aria-controls={open ? 'basic-menu' : undefined}  aria-haspopup="true"  aria-expanded={open ? 'true' : undefined} onClick={handleMotorsMenuClick}>Jobs <MdOutlineKeyboardArrowDown /></button>
            <Menu
              id="basic-menu"              
              open={openMotorsMenu}
              onClose={handleMotorsMenuClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleMotorsMenuClose}>Used Cars </MenuItem>
              <MenuItem onClick={handleMotorsMenuClose}>Motor Cycles</MenuItem>
              <MenuItem onClick={handleMotorsMenuClose}>Bikes</MenuItem>
              <MenuItem onClick={handleMotorsMenuClose}>Boats</MenuItem>
              <MenuItem onClick={handleMotorsMenuClose}>Heavy Vechiles</MenuItem>
              <MenuItem onClick={handleMotorsMenuClose}>Used 2 Wheelers spare parts</MenuItem>
              <MenuItem onClick={handleMotorsMenuClose}>Used spare parts</MenuItem>
              <MenuItem onClick={handleMotorsMenuClose}>Used auto spare parts</MenuItem>
              <MenuItem onClick={handleMotorsMenuClose}>Others</MenuItem>
            </Menu>
            <button   id="basic-button" type='button' className='nav-butons-style'  aria-controls={open ? 'basic-menu' : undefined}  aria-haspopup="true"  aria-expanded={open ? 'true' : undefined} onClick={handleMotorsMenuClick}>Community <MdOutlineKeyboardArrowDown /></button>
            <Menu
              id="basic-menu"              
              open={openMotorsMenu}
              onClose={handleMotorsMenuClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleMotorsMenuClose}>Used Cars </MenuItem>
              <MenuItem onClick={handleMotorsMenuClose}>Motor Cycles</MenuItem>
              <MenuItem onClick={handleMotorsMenuClose}>Bikes</MenuItem>
              <MenuItem onClick={handleMotorsMenuClose}>Boats</MenuItem>
              <MenuItem onClick={handleMotorsMenuClose}>Heavy Vechiles</MenuItem>
              <MenuItem onClick={handleMotorsMenuClose}>Used 2 Wheelers spare parts</MenuItem>
              <MenuItem onClick={handleMotorsMenuClose}>Used spare parts</MenuItem>
              <MenuItem onClick={handleMotorsMenuClose}>Used auto spare parts</MenuItem>
              <MenuItem onClick={handleMotorsMenuClose}>Others</MenuItem>
            </Menu>
            <button   id="basic-button" type='button' className='nav-butons-style'  aria-controls={open ? 'basic-menu' : undefined}  aria-haspopup="true"  aria-expanded={open ? 'true' : undefined} onClick={handleMotorsMenuClick}>Property <MdOutlineKeyboardArrowDown /></button>
            <Menu
              id="basic-menu"              
              open={openMotorsMenu}
              onClose={handleMotorsMenuClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleMotorsMenuClose}>Used Cars </MenuItem>
              <MenuItem onClick={handleMotorsMenuClose}>Motor Cycles</MenuItem>
              <MenuItem onClick={handleMotorsMenuClose}>Bikes</MenuItem>
              <MenuItem onClick={handleMotorsMenuClose}>Boats</MenuItem>
              <MenuItem onClick={handleMotorsMenuClose}>Heavy Vechiles</MenuItem>
              <MenuItem onClick={handleMotorsMenuClose}>Used 2 Wheelers spare parts</MenuItem>
              <MenuItem onClick={handleMotorsMenuClose}>Used spare parts</MenuItem>
              <MenuItem onClick={handleMotorsMenuClose}>Used auto spare parts</MenuItem>
              <MenuItem onClick={handleMotorsMenuClose}>Others</MenuItem>
            </Menu>   
            <a  target='_blank'  id="basic-button" className='join-corporate-style' href='/Join-Corporate'>Join Corporate</a>
          </div>
        </div>
      </form>
    </>
  );
}
export default ResponsiveAppBar;