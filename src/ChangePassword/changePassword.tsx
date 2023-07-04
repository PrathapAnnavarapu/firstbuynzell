
import * as React from 'react';
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
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack'

import {useState, useEffect} from 'react'


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



const ChangePassword = (props: any) =>{
    const navigate = useNavigate()

    const [passwordDetails, setPasswordDetails] = useState<any>({
        email:'',
        newPassword:'',
        confirmNewPassword:''
    })

    
    const [Errors, setErrors] = useState<any>({})

    const [passwordOpen, setPasswordOpen] = React.useState(false);
  const [successDialogStatus, setSuccessDialogStatus] = React.useState<any>('')


  const handleClicKForgetPasswordkOpen = () => {
    setPasswordOpen(true);

  };
  const handleClickForgetPasswordClose = () => {
    setPasswordOpen(false);
    
  };

    


    const onChangeHandeler = (e) =>{
        const {name, value} = e.target
        setPasswordDetails({...passwordDetails, [name]:value})
    }

    const validateForm = values => {
        const errors: any = {}
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        const re = {
          uppercase: /(?=.*?[A-Z])/,
          digit: /(?=.*?[0-9])/,
          specialCharacter: /(?=.*?[#?!@$%^&*-])/,
        }     
    
       
        if (!values.email) {
          errors.email = 'Email is Required!'
        } else if (!regex.test(values.email)) {
          errors.email = 'This is not Valid Email Format!'
        }
    
        if (!values.newPassword) {
          errors.newPassword = 'Password is Required!'
        } else if (values.newPassword.length < 7) {
          errors.newPassword = 'Password must have  grater than 8 characters!'
        } else if (values.newPassword.length > 15) {
          errors.newPassword = 'Password cannot grater than 16 characters!'
        } else if (!re.uppercase.test(values.newPassword)) {
          errors.newPassword = 'Password Must have at least one Capital Letter!'
        } else if (!re.digit.test(values.newPassword)) {
          errors.newPassword = 'Password Must have at least one Digit!'
        } else if (!re.specialCharacter.test(values.newPassword)) {
          errors.newPassword = 'Password Should have one Special Character!'
        }
        
        if (!values.confirmNewPassword){
            errors.confirmNewPassword = 'confirmPassword is Required'
        }else if (values.confirmNewPassword !== values.newPassword){
            errors.confirmNewPassword = 'ConfirmPassword must same as newPassword'
        }
        return errors
      }

    



    const handleSubmit = e => {
        e.preventDefault()
        setErrors(validateForm(passwordDetails))
        upDatePasswordDetailsToDB()
    }


    const upDatePasswordDetailsToDB = async() =>{
        const url ="http://localhost:4000/updatePassword"
        const options={
           method:'PUT',
           headers: {
            'Content-type': 'application/json',
            // "x-api-key": "497a9dba-2e9f-4895-9357-9175a40bcb9e",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": "true",
            // "Access-Control-Allow-Headers": "Content-Type, Depth, User-Agent, X-File-Size, X-Requested-With, If-Modified-Since, X-File-Name, Cache-Control,Accept",
            // 'Access-Control-Allow-Methods': "GET, POST, PATCH, PUT, DELETE, OPTIONS",
            // 'Content-Type': 'multipart/form-data'
          },
          body: JSON.stringify(passwordDetails)
        }

        const response = await fetch (url, options)
        const data = await response.json()
        if (response.status === 200){
          setSuccessDialogStatus(true)
            handleClicKForgetPasswordkOpen()

          
            console.log(data.message)
        }
        else{
            console.log(data.message)
            setSuccessDialogStatus(false)
        }   
    }


    



    return(
        <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Create new Password
          </Typography>
          {/* <Typography component="h1" variant="h6">
            to sell and buy
          </Typography> */}
          <form id="onForm" onSubmit={handleSubmit} style={{ marginTop: 20 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="email"
                  required
                  fullWidth
                  id="firstname"
                  placeholder="Email"
                  autoFocus
                  onChange={onChangeHandeler}
                  value={passwordDetails.email}
                />
                <p className="error-msg">{Errors.email}</p>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  placeholder="New Password"
                  name="newPassword"
                  autoComplete="New Password"
                  onChange={onChangeHandeler}
                  value={passwordDetails.newPassword}
                />
              </Grid>
              <p className="error-msg">{Errors.newPassword}</p>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirmNewPassword"
                  placeholder="Confirm New Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={onChangeHandeler}
                  value={passwordDetails.confirmNewPassword}
                />
              </Grid>
              {/* <p className="error-msg">{Errors.confirmNewPassword}</p>               */}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Update Password
            </Button>            
              <BootstrapDialog
                onClose={handleClickForgetPasswordClose}
                aria-labelledby="customized-dialog-title"
                open={passwordOpen}
              // className='delete-account-dialog-container'
              >
                <div className='account-delete-information-first-container'>
                  <div className='check-mark-container'>
                    {successDialogStatus ? (<img src='https://img.freepik.com/premium-vector/correct-sign-right-mark-icon-set-green-tick-flat-symbol-check-ok-yes-marks-vote-decision_473851-126.jpg' alt='correct' className='correct-check-mark'/>):
                    (< img src='https://png.pngtree.com/png-vector/20190228/ourmid/pngtree-wrong-false-icon-design-template-vector-isolated-png-image_711430.jpg' alt='wrong' className='correct-check-mark' />)}

                  </div >
                  <div className='delete-account-conformation-container'>
                    <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClickForgetPasswordClose}>
                      {successDialogStatus ? ( <span className='are-yousure-text'>You Password is Updated Successfully</span>):( <span className='are-yousure-text'>User is Already Exists</span>)}
                     
                    </BootstrapDialogTitle>
                  </div>
                </div>
                <div className='delte-account-conformation-buttons-contaier'>
                  <Stack direction={'column'} justifyContent={'space-between'}>
                    <button type='button' className='cancel-delete-account-button' onClick={() => navigate('/Settings/Myprofile')}> My Profile
                    </button>

                  </Stack>
                </div>
              </BootstrapDialog>       
            <Grid container justifyContent="flex-end">
              <Grid item>
                {/* <button type="button" className="alredy-have-account-button" onClick={() => navigate('/Login')}>
                  Already have an account? Sign in
                </button> */}
              </Grid>
            </Grid>
          </form>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>

    )
}

export default ChangePassword