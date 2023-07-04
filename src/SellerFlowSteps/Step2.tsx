import React, { useEffect } from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack'
import  {useState} from 'react'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { BiCurrentLocation } from "react-icons/bi";
import {useSelector, useDispatch} from 'react-redux'


import './step2.css'

const statesOfUAE = [
    { label: 'Dubai', id: 1 },
    { label: 'Abu Dhabi', id: 2 },
    { label: 'Ras al Khaimah', id: 3 },
    { label: 'Sharjah', id: 4 },
    { label: 'Fujairah', id: 5 },
    { label: "Ajman", id: 6 },
    { label: 'Umm Al Quwain', id: 7 },
    {
      label: 'Others',
      id: 8,
    }
  ]
  
  interface contactDetails{lati:number, long:number, name:string, email:string, phoneNumber:string, city:string, region:string, country:string, showContactInformation:boolean}


function StepTwo() {
    const dispatch = useDispatch()
    

    const jsonLoginDetails = localStorage.getItem('loginDetails')
    const parseLoginDetails: any = JSON.parse(String(jsonLoginDetails))
    
    const [error, setError] = useState<String>('')

    const cT = useSelector((state:any)=> state.postAdDetails[1])
    

    useEffect(()=>{
        if (cT){
        setUserDetailsInPostAd({...userDetailsInPostAd, lati:cT.lati, long:cT.long, name:cT.name, email:cT.email, phoneNumber:cT.phoneNumber, showContactInformation:cT.showContactInformation})
        }
    },[cT])
   

    const [userDetailsInPostAd, setUserDetailsInPostAd] = useState<any>({
        lati: null,
        long: null,
        name:'',
        email:'',
        phoneNumber:'',
        city:'',
        region:'',
        country:'',
        showContactInformation:false
    })


   


    const fetchAddress = async() =>{
        const url = "https://ipgeolocation.abstractapi.com/v1/?api_key=77c3840f47694905ae9ca7302ec2f77c"
        const options = {
         method :'GET',        
         headers:{
            api_key :'77c3840f47694905ae9ca7302ec2f77c'
        }
    }
    
     
        const response = await fetch(url, options)
        const data = await response.json()
        if (response.status === 200){           
           setUserDetailsInPostAd({...userDetailsInPostAd, city:data.city, region:data.region, country:data.country})
        }
    }
    fetchAddress() 
   
   

    const getUserCoordinates = () => {
        const geolocationAPI = navigator.geolocation;
        if (!geolocationAPI) {
          setError('Geolocation API is not available in your browser!')
        } else {
          geolocationAPI.getCurrentPosition((position) => {
            const { coords } = position;
            setUserDetailsInPostAd({...userDetailsInPostAd, lati:coords.latitude, long:coords.longitude});
           
            setError('')
          }, (error) => {
            setError('Something went wrong getting your position!')
          })
        }
            
    }



// Geocode.setApiKey("AIzaSyDsb7F-VyBJn7r4LilYH_lRHBpPfgyUga8");
// Geocode.enableDebug();

// Geocode.fromLatLng("48.8583701", "2.2922926").then(
//   response => {
//     const address = response.results[0].formatted_address;
//     console.log(address);
//   },
//   error => {
//     console.error(error);
//   }
// );





const getadUserDetails = async()=>{
    const url = `http://localhost:4000/registerUserDetails/${parseLoginDetails.customer_id}`
    const options={
        method:'GET'
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.status === 200) {       
        {data.list.map((each)=> setUserDetailsInPostAd({...userDetailsInPostAd, name:each.user_name,  email:each.email_address, phoneNumber:each.phone_number}))}
    }
    else {
        console.log(data.message)
    }    
}


useEffect(()=>{
    getadUserDetails()   
},[])
    

   

    const onHandleUserDetails = (e) =>{
        const {name, value} = e.target
        setUserDetailsInPostAd({...userDetailsInPostAd, [name]: value})
    }

    const sendContactDetailsToRedux = async() =>{           
        dispatch({ type: 'contactDetails', payload:userDetailsInPostAd  })
        dispatch({ type: 'IncActivePageCount', payload: 2 })
        const stepUrl = `http://localhost:4000/updateTheActivePageCount/${parseLoginDetails.customer_id}`
        const options={
            method:'PUT',
           headers:{
                'Content-type': 'application/json',
            // "x-api-key": "497a9dba-2e9f-4895-9357-9175a40bcb9e",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": "true",

            },
            body:JSON.stringify({activePageStep:2})
        }
        const response = await fetch(stepUrl, options)
        const data = await response.json()
        if (response.status === 200){
            console.log(data.message)
        }    
      
        // localStorage.setItem(`${parseLoginDetails.user_name}ActivePage`, '2')
    }

   

    const onEditToPreviousPage = () =>{
    dispatch({type:'decreaseThePageCount', payload:0})
    }

    return (
        <div className='seller-person-info-contaier'>
            <div className='seller-person-info-inner-container'>
                <div className='main-person-contaier'>
                    <div className='person-information-container'>
                        <div className='ad-person-enter-details-heading-container'>
                            <h2 className='ad-person-enter-details-heading'>Enter Your Details</h2>
                        </div>
                        <p className='second-step-heading'>step 2/4</p>    
                        <div className='ad-person-info-input-fields-container'>
                            <div className='ads-person-location-subheading-container'>
                                <h3 className='ads-person-location-subheading'>Location</h3>
                            </div>
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={statesOfUAE}
                                sx={{ width: 452 }}
                                renderInput={(params) => <TextField {...params} placeholder="Abudabi" className='ads-person-coutry-input-field' />}
                            />
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={statesOfUAE}
                                sx={{ width: 452 }}
                                renderInput={(params) => <TextField {...params} placeholder="Zayed City" className='ads-person-city-input-field' />}
                            />
                            <button type="button" className='ads-person-map-location-button-container' onClick={getUserCoordinates}><BiCurrentLocation className='loacation-icon' /><span>Locate me</span></button>
                            <div className='ads-person-location-on-map-container'>
                                <div id="embedded-map-display" >
                                    <iframe
                                        style={{ width: 452, height: 300 }}
                                        src={`https://www.google.com/maps/embed/v1/place?q=${userDetailsInPostAd.lati}N, ${userDetailsInPostAd.long}E&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`}>
                                    </iframe>
                                </div>
                                <p style={{color:'red',fontSize:10, margin:0}}>{error}</p>
                            </div>
                        </div>
                        <div className='ads-person-contact-details-info-container'>
                            <div className='ads-person-contact-details-heading-container'>
                                <h3 className='ads-person-contact-details-heading'>Contact Details</h3>
                            </div>
                            <TextField id="outlined-basic" placeholder="Name" variant="outlined" sx={{ width: 452, height: 44 }} name='name' value={userDetailsInPostAd.name} onChange={(e)=>onHandleUserDetails(e)} />
                            <TextField id="outlined-basic" placeholder="Email" variant="outlined" sx={{ width: 452, height: 44 }}  name='email' value={userDetailsInPostAd.email} onChange={(e)=>onHandleUserDetails(e)}/>
                            <Stack direction={'row'}>
                                <div className='ads-person-contact-number-coutry-code'>+971</div>
                                <TextField id="outlined-basic" placeholder="Phone Number" variant="outlined" type="number" sx={{ width: 389, height: 44 }}  name='phoneNumber' value={userDetailsInPostAd.phoneNumber} onChange={(e)=>onHandleUserDetails(e)}/>
                            </Stack>
                            <div className='display-contact-details-conformation-check-box'>
                                 <FormControlLabel required control={<Checkbox />} label="Show my contact on Ad info"  name='showContactInformation' onChange={()=> setUserDetailsInPostAd({...userDetailsInPostAd, showContactInformation:!userDetailsInPostAd.showContactInformation})}/>
                            </div>
                        </div>
                        <div className='step-second-to-step-three-nav-buttons-container' >
                            <div className='second-step-buttons-container'>
                        <button type="button" className='step-two-back-button' onClick={onEditToPreviousPage}>Edit Ad details</button>
                        <button type="button" className='step-two-next-button' onClick={sendContactDetailsToRedux}>Next</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default StepTwo