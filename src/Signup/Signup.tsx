
import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useState, useEffect } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { CgTrash } from "react-icons/cg";
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Stack from '@mui/material/Stack'
import './signUp.css'
import { verify } from 'crypto';

interface userdata { firstname: string, email: string, phoneNumber:'',password: string, accountCreatedDate: Date }

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
    <DialogTitle sx={{ m: 0, p: 1 }} {...other}>
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

function Copyright(props: any) {
  //const {data} = props
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

const Signup = (props: any) => {
  const navigate = useNavigate()

  const [open, setOpen] = React.useState(false);
  const [successDialogStatus, setSuccessDialogStatus] = React.useState(true)


  const handleClickOpen = () => {
    setOpen(true);

  };
  const handleClose = () => {
    setOpen(false);
    
  };

 

  const [userData, setUserData] = useState<userdata>({
    firstname: '',
    email: '',
    phoneNumber:'',
    password: '',
    accountCreatedDate:new Date()
  })

 
  const [Errors, setErrors] = useState<any>({})
  const [isSubmit, setIsSubmit] = useState<boolean>(false)





  /*const onSubmitFailure = () =>{
    const to = (props.to || '/registrationFailure')
    history.push(to);
    window.location.reload();
  }
 
  const onSubmitUserAlreadyExist = () =>{
    const to = (props.to || '/userAlreadyExist')
    history.push(to);
    window.location.reload();
 
  }*/

  const postUserDetailsToServer = async () => {
    const url = 'http://localhost:4000/register'
    const options = {
      method: 'POST',

      headers: {
        'Content-type': 'application/json',
        // "x-api-key": "497a9dba-2e9f-4895-9357-9175a40bcb9e",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        // "Access-Control-Allow-Headers": "Content-Type, Depth, User-Agent, X-File-Size, X-Requested-With, If-Modified-Since, X-File-Name, Cache-Control,Accept",
        // 'Access-Control-Allow-Methods': "GET, POST, PATCH, PUT, DELETE, OPTIONS",
        // 'Content-Type': 'multipart/form-data'
      },
      body: JSON.stringify(userData)
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.status === 200) {     
      handleClickOpen()
      console.log(data.message)
    }
    if (response.status === 400) { 
     
      setSuccessDialogStatus(false)  
      handleClickOpen()
      console.log(data.message)
    }
  }

  useEffect(() => {
    if (Object.keys(Errors).length === 0 && isSubmit === true) {
      postUserDetailsToServer()
    }
  }, [Errors])




  const validateForm = values => {
    const errors: any = {}
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    const re = {
      uppercase: /(?=.*?[A-Z])/,
      digit: /(?=.*?[0-9])/,
      specialCharacter: /(?=.*?[#?!@$%^&*-])/,
    }

    // const currentDate = new Date()
    // const userDate = new Date(userData.dateOfBirth)   

    // const daysOld = differenceInDays(currentDate, userDate)

    // const yearsOld = Number((daysOld / 365.25).toFixed(0))

    if (!values.firstname) {
      errors.firstname = 'FirstName is Required!'
    }

    if (!values.email) {
      errors.email = 'Email is Required!'
    } else if (!regex.test(values.email)) {
      errors.email = 'This is not Valid Email Format!'
    }

    if (!values.password) {
      errors.password = 'Password is Required!'
    } else if (values.password.length < 7) {
      errors.password = 'Password must have  grater than 8 characters!'
    } else if (values.password.length > 15) {
      errors.password = 'Password cannot grater than 16 characters!'
    } else if (!re.uppercase.test(values.password)) {
      errors.password = 'Password Must have at least one Capital Letter!'
    } else if (!re.digit.test(values.password)) {
      errors.password = 'Password Must have at least one Digit!'
    } else if (!re.specialCharacter.test(values.password)) {
      errors.password = 'Password Should have one Special Character!'
    }

    return errors
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validateForm(userData))
    setIsSubmit(true)


  };

  const onChangeHandeler = (event) => {
    const { name, value } = event.target
    setUserData({ ...userData, [name]: value })
  }



  // const verifyPhonenumber = () =>{
  //   const mobile = userData.phoneNumber 
  //   const rand = Math.floor(1000 + Math.random() * 9000);
  //   console.log(rand);
  //   API.post("/otp?otp="+rand+"&mobile_number="+mobile)
  //     .then(res => {
  //       console.log(res);
  //       console.log(res.data);
  //     })

  // }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Create an account
          </Typography>
          <Typography component="h1" variant="h6">
            to sell and buy
          </Typography>
          <form id="onForm" onSubmit={handleSubmit} style={{ marginTop: 20 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstname"
                  required
                  fullWidth
                  id="firstname"
                  placeholder="First Name"
                  autoFocus
                  onChange={onChangeHandeler}
                  value={userData.firstname}
                />
                <p className="error-msg">{Errors.firstname}</p>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  placeholder="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={onChangeHandeler}
                  value={userData.email}
                />
              </Grid>
              <p className="error-msg">{Errors.email}</p>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="phoneNumber"
                  placeholder="Phone Number"
                  type='number'
                  name="phoneNumber"
                  autoComplete="phoneNumber"
                  onChange={onChangeHandeler}
                  value={userData.phoneNumber}
                />
              </Grid>
              <button type='button'>Verify</button>
              <p className="error-msg">{Errors.email}</p>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  placeholder="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={onChangeHandeler}
                  value={userData.password}
                />
              </Grid>
              <p className="error-msg">{Errors.password}</p>
              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="By proceeding, you agree to our Terms of use & 
                  Privacy Policy"
                />
              </Grid> */}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Create
            </Button>            
              <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
              // className='delete-account-dialog-container'
              >
                <div className='account-delete-information-first-container'>
                  <div className='check-mark-container'>
                    {successDialogStatus ? (<img src='https://img.freepik.com/premium-vector/correct-sign-right-mark-icon-set-green-tick-flat-symbol-check-ok-yes-marks-vote-decision_473851-126.jpg' alt='correct' className='correct-check-mark'/>):
                    (< img src='https://png.pngtree.com/png-vector/20190228/ourmid/pngtree-wrong-false-icon-design-template-vector-isolated-png-image_711430.jpg' alt='wrong' className='correct-check-mark' />)}

                  </div >
                  <div className='delete-account-conformation-container'>
                    <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                      {successDialogStatus ? ( <span className='are-yousure-text'>You Registered Successfully</span>):( <span className='are-yousure-text'>User is Already Exists</span>)}
                     
                    </BootstrapDialogTitle>
                    {/* // <p className='conformation-text'>By proceeding your account will be permanently deleted.</p> // */}
                  </div>
                </div>
                <div className='delte-account-conformation-buttons-contaier'>
                  <Stack direction={'column'} justifyContent={'space-between'}>
                    <button type='button' className='cancel-delete-account-button' onClick={() => navigate('/Login')}> Please SignIn
                    </button>

                  </Stack>
                </div>
              </BootstrapDialog>       
            <Grid container justifyContent="flex-end">
              <Grid item>
                <button type="button" className="alredy-have-account-button" onClick={() => navigate('/Login')}>
                  Already have an account? Sign in
                </button>
              </Grid>
            </Grid>
          </form>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
export default Signup






















