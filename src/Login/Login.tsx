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
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Cookies from 'js-cookie'
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import './index.css';


//import {useHistory} from 'react-router-dom'

const Copyright = (props: any) => {
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

 const  SignIn = (props:any) =>{

  const navigate = useNavigate()

  const [credentials, setCredentials] = useState<any>({
    email: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
  })

  const [showPassword, setShowPassword] = React.useState<boolean>(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  
  const onSubmitSuccess = (data) => {    
     const loginObject = data.data.map((each)=>each)[0]     
    Cookies.set('jwt_token', data.jwtToken, {expires:30})    
   localStorage.setItem('loginDetails', JSON.stringify(loginObject))         
    navigate('/')
  }

  const onSubmitFailure = error => {
    setCredentials({
      ...credentials,
      showSubmitError: true,
      errorMsg: error,
    })
  }

   const sendDetailsToServer = async() =>{
    const loginDetails = {
      email: credentials.email,
      password: credentials.password,
    } 
    const url = 'http://localhost:4000/login'
    const options = {
      method: 'POST',
      headers: {        
        'Content-type': 'application/json',         
        // "x-api-key": "497a9dba-2e9f-4895-9357-9175a40bcb9e",
        "Access-Control-Allow-Origin": '*',
        "Access-Control-Allow-Credentials": "true",
        // "Access-Control-Allow-Headers": "Content-Type, Depth, User-Agent, X-File-Size, X-Requested-With, If-Modified-Since, X-File-Name, Cache-Control,Accept,'Accept-Language','Content-Language','text/plain','application/x-www-form-urlencoded','multipart/form-data'",
        // 'Access-Control-Allow-Methods': "GET, POST, PATCH, PUT, DELETE, OPTIONS",
        // 'Content-Type': 'multipart/form-data',
        
      },
      body: JSON.stringify(loginDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    
      if (data.status === 200){
        onSubmitSuccess(data)

      }else{
        onSubmitFailure(data.message)
      }   
  
}


  const handleSubmit = (event) => {
    event.preventDefault(); 
    sendDetailsToServer()   
  };

  return (
    <ThemeProvider theme={theme} >
      <Container component="main" maxWidth="xs" className='signin-container'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
          Sign in your account
          </Typography>
          <Typography component="h1" variant="h6">
            Welcome back! Please enter your details
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              value={credentials.email}
              onChange={e =>
                setCredentials({
                    ...credentials,
                    email: e.target.value,
                })
        }
            />
            <FormControl sx={{ mt: 1, width: '44ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ?  'text': 'password' }
            value={credentials.password}
            onChange={e =>
            setCredentials({
                ...credentials,
                password: e.target.value,
            })           
    }      
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ?  <Visibility />: <VisibilityOff /> }
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>      
            
           
           
             
            {credentials.showSubmitError && <p style={{color:'red'}}>{credentials.errorMsg}</p>}

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <button type='button' onClick={()=> navigate('/ChangePassword')} className='forget-password-button'>
                  Forgot password?
                </button>
              </Grid>
              <Grid item>
                <button type="button" className="signUp-button" onClick={()=> navigate('/SignUp')}>
                  {"Don't have an account? Sign Up"}
                </button>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
export default SignIn