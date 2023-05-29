import React from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack'
import {useState} from 'react'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { BiCurrentLocation } from "react-icons/bi";

import './step2.css'

const models = ['BMW', 'Audi', 'Toyoto']

function StepTwo() {

    const [lat, setLat] = useState<any>(null);
    const [long, setLong] = useState<any>(null);
    const [error, setError] = useState<String>('')
   
    console.log(lat, long)

    const getUserCoordinates = () => {
        const geolocationAPI = navigator.geolocation;
        if (!geolocationAPI) {
          setError('Geolocation API is not available in your browser!')
        } else {
          geolocationAPI.getCurrentPosition((position) => {
            const { coords } = position;
            setLat(coords.latitude);
            setLong(coords.longitude);
            setError('')
          }, (error) => {
            setError('Something went wrong getting your position!')
          })
        }
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
                                options={models}
                                sx={{ width: 452 }}
                                renderInput={(params) => <TextField {...params} placeholder="Abudabi" className='ads-person-coutry-input-field' />}
                            />
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={models}
                                sx={{ width: 452 }}
                                renderInput={(params) => <TextField {...params} placeholder="Zayed City" className='ads-person-city-input-field' />}
                            />
                            <button type="button" className='ads-person-map-location-button-container' onClick={getUserCoordinates}><BiCurrentLocation className='loacation-icon' /><span>Locate me</span></button>
                            <div className='ads-person-location-on-map-container'>
                                <div id="embedded-map-display" >
                                    <iframe
                                        style={{ width: 452, height: 300 }}
                                        src={`https://www.google.com/maps/embed/v1/place?q=${lat}, ${long}&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`}>
                                    </iframe>
                                </div>
                                <p style={{color:'red',fontSize:10, margin:0}}>{error}</p>
                            </div>
                        </div>
                        <div className='ads-person-contact-details-info-container'>
                            <div className='ads-person-contact-details-heading-container'>
                                <h3 className='ads-person-contact-details-heading'>Contact Details</h3>
                            </div>
                            <TextField id="outlined-basic" placeholder="Name" variant="outlined" sx={{ width: 452, height: 44 }} />
                            <TextField id="outlined-basic" placeholder="Email" variant="outlined" sx={{ width: 452, height: 44 }} />
                            <Stack direction={'row'}>
                                <div className='ads-person-contact-number-coutry-code'>+971</div>
                                <TextField id="outlined-basic" placeholder="Phone Number" variant="outlined" type="number" sx={{ width: 389, height: 44 }} />
                            </Stack>
                            <div className='display-contact-details-conformation-check-box'>
                                 <FormControlLabel required control={<Checkbox />} label="Show my contact on Ad info"  />
                            </div>
                        </div>
                        <div className='step-second-to-step-three-nav-buttons-container' ></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default StepTwo