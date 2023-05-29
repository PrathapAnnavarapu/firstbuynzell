// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import {useState} from 'react'




// //import {useHistory} from 'react-router-dom'

// const Copyright = (props: any) => {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }


// const theme = createTheme();

//  const  SignupWays = (props:any) =>{
    
//     //let history = useHistory()


// //   const [credentials, setCredentials] = useState({
// //     email: '',
// //     password: '',
// //     showSubmitError: false,
// //     errorMsg: '',
// //   })

  
//   /*const onSubmitSuccess = (data) => {
//     let id =''
//     console.log(id)
//     {data.data.map((eachObject)=>{
//         return id = eachObject.id
//     }
//     )}
//     let to = (props.to || `/preview/${id}`)
//     history.push(to);
//     window.location.reload();
//   }

//   const onSubmitFailure = error => {
//     setCredentials({
//       ...credentials,
//       showSubmitError: true,
//       errorMsg: error,
//     })
//   }*/

// //   const sendDetailsToServer = () =>{
// //     const loginDetails = {
// //       username: credentials.email,
// //       password: credentials.password,
// //     }
// //     const url = 'http://localhost:5000/login'
// //     const options = {
// //       method: 'POST',
// //       headers: {
// //         'Content-type': 'application/json'
// //       },
// //       body: JSON.stringify(loginDetails),
// //     }
// //     fetch(url, options)
// //     .then((res)=> res.json())
// //     .then((data)=>{
// //       if (data.status === 200){
// //         //onSubmitSuccess(data)
// //       }else{
// //         //onSubmitFailure(data.message)
// //       }
// //       })    
// //     .catch((err)=>{
// //       console.log(err)
// //       //onSubmitFailure(err.message)
// //   })
// // }


// //   const handleSubmit = (event) => {
// //     event.preventDefault(); 
// //     sendDetailsToServer()   
// //   };

//   return (
//     <h1>welcome</h1>
//     // <ThemeProvider theme={theme} >
//     //   <Container component="main" maxWidth="xs" className='signin-container'>
//     //     <CssBaseline />
//     //     <Box
//     //       sx={{
//     //         marginTop: 8,
//     //         display: 'flex',
//     //         flexDirection: 'column',
//     //         alignItems: 'center',
//     //       }}
//     //     >
//     //       <Avatar sx={{ bgcolor: 'secondary.main' }}>
//     //         <LockOutlinedIcon />
//     //       </Avatar>
//     //       <Typography component="h1" variant="h5">
//     //       Sign in your account
//     //       </Typography>          
//     //       <Box component="form" noValidate sx={{ mt: 1 }}>
//     //       <Button variant="outlined" size="small">
//     //            Sign up
//     //          </Button>
            
//     //         <FormControlLabel
//     //           control={<Checkbox value="remember" color="primary" />}
//     //           label="Remember me"
//     //         />
//     //         <Button
//     //           type="submit"
//     //           fullWidth
//     //           variant="contained"
//     //           sx={{ mt: 3, mb: 2 }}
//     //         >
//     //           Sign In
//     //         </Button>
//     //         <Grid container>
//     //           <Grid item xs>
//     //             <Link href="#" variant="body2">
//     //               Forgot password?
//     //             </Link>
//     //           </Grid>
//     //           <Grid item>
//     //             <Link href="/SignUp" variant="body2">
//     //               {"Don't have an account? Sign Up"}
//     //             </Link>
//     //           </Grid>
//     //         </Grid>
//     //       </Box>
//     //     </Box>
//     //     <Copyright sx={{ mt: 8, mb: 4 }} />
//     //   </Container>
//     // </ThemeProvider>
//   );
// }
// export default SignupWays