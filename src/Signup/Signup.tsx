
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
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useState, useEffect } from 'react'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Autocomplete from '@mui/material/Autocomplete'
import { differenceInDays } from 'date-fns'

import { useNavigate } from 'react-router-dom';

import './signUp.css'

interface userdata { firstname: string,  email: string,  password: string }




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

  const navigate= useNavigate()
 

  const [userData, setUserData] = useState<userdata>({
    firstname: '',    
    email: '',    
    password: '',
    
  })
  const [Errors, setErrors] = useState<any>({})
  const [isSubmit, setIsSubmit] = useState<boolean>(false)
  console.log(userData)

  //let history = useHistory();

  /*const onSubmitRegistration = () =>{
   const to = (props.to || '/registrationSuccess')
   history.push(to);
   window.location.reload();
 } 

 const onSubmitFailure = () =>{
   const to = (props.to || '/registrationFailure')
   history.push(to);
   window.location.reload();
 }

 const onSubmitUserAlreadyExist = () =>{
   const to = (props.to || '/userAlreadyExist')
   history.push(to);
   window.location.reload();

 }*/


  useEffect(() => {
    if (Object.keys(Errors).length === 0 && isSubmit === true) {
      const url = 'https://buynzell.colourful.works/wp-json/rtcl/v1/signup'
      const options = {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          "x-api-key": "497a9dba-2e9f-4895-9357-9175a40bcb9e",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": "true",
          "Access-Control-Allow-Headers": "Content-Type, Depth, User-Agent, X-File-Size, X-Requested-With, If-Modified-Since, X-File-Name, Cache-Control,Accept",
          'Access-Control-Allow-Methods': "GET, POST, PATCH, PUT, DELETE, OPTIONS",
          'Content-Type': 'multipart/form-data'
        },
        body: JSON.stringify(userData)
      }
      fetch(url, options)
        .then((res) => res.json())
        .then((data) => {
          if (data.status === 200) {
            console.log(data.message)
            navigate('/Login')
            //onSubmitRegistration()
          } else if (data.status === 400) {
            console.log(data.message)
            //onSubmitUserAlreadyExist()
          }

        })
        .catch((error) => {
          console.log(error)
          //onSubmitFailure()
        })
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
    // if (!values.lastname) {
    //   errors.lastname = 'LastName is Required!'
    // }
    // if (!values.address) {
    //   errors.address = 'Address is Required!'
    // }
    // if (!values.phonenumber) {
    //   errors.phonenumber = 'PhoneNumber is Required!'
    // } else if (values.phonenumber.length < 10) {
    //   errors.phonenumber = 'PhoneNumber must have 10 Digits'
    // } else if (values.phonenumber.length > 10) {
    //   errors.phonenumber = 'PhoneNumber cannot grater than 10 Digits'
    // }
    if (!values.email) {
      errors.email = 'Email is Required!'
    } else if (!regex.test(values.email)) {
      errors.email = 'This is not Valid Email Format!'
    }
    // if (!values.dateOfBirth) {
    //   errors.dateOfBirth = 'DateOfBirth is Required!'
    // } else if (yearsOld < 18) {
    //   errors.dateOfBirth = 'age must be grater than 18!'
    // }
    // if (!values.username) {
    //   errors.username = 'UserName is Required!'
    // } else if (values.username.length <= 3) {
    //   errors.username = 'UserName should have grater than 3 characters!'
    // } else if (values.username.length > 26) {
    //   errors.username = 'UserName cannot grater than 16 characters!'
    // }
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
    // if (!values.confirmPassword) {
    //   errors.confirmPassword = 'confirmPassword is Required!'
    // } else if (values.confirmPassword !== values.password) {
    //   errors.confirmPassword = 'confirmPassword must same as password'
    // }
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

  return (

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
            Create an account
          </Typography>
          <Typography component="h1" variant="h6">
            to sell and buy
          </Typography>
          <form  id="onForm" onSubmit={handleSubmit} style={{ marginTop: 20 }}>
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
              {/* <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastname"
                  autoComplete="family-name"
                  onChange={onChangeHandeler}
                  value={userData.lastname}
                />
                <p className="error-msg">{Errors.lastName}</p>
              </Grid> */}
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
              {/* <Grid item xs={12}>
                <FormControl >
                  <FormLabel id="demo-row-radio-buttons-group-label">Gender *</FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"                >
                    <FormControlLabel value="female" name="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" name="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" name="others" control={<Radio />} label="Other" />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <p className="error-msg">{Errors.gender}</p> */}
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
                <TextField
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  id="confirmpassword"
                  autoComplete="confirmpassword"
                  onChange={onChangeHandeler}
                  value={userData.confirmPassword}
                />
              </Grid>
              <p className="error-msg">{Errors.confirmPassword}</p> */}
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="By proceeding, you agree to our Terms of use & 
                  Privacy Policy"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Create
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/" variant="body2">
                  Already have an account? Sign in
                </Link>
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






















