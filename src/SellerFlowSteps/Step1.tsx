import React, { ChangeEvent } from 'react'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { FiUploadCloud } from "react-icons/fi";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

import './step1.css'
const models = ['BMW', 'Audi', 'Toyoto']
const fuelTypes = [{ type: 'Gasoline', id: 1 }, { type: 'Diesel', id: 2 }, { type: 'CNG', id: 3 }, { type: 'Hybrid', id: 4 }, { type: 'Electric', id: 5 }]
const NoofOwners = []
function StepOne() {
    const [additionalInfo, setAdditionaInfo] = React.useState<boolean>(false)
    const [insurenceStatus, setInsurenceStatus] = React.useState<boolean>(false)
    const [activeFuelType, setActivefuelType] = React.useState<any>(0)
    const [image, setImage] = React.useState<any>([])
    console.log(image)




    return (
        <div className='main-seller-contaier'>
            <div className='seller-flow-bread-crumbs-container'>
                crumbs
            </div>
            <div className='seller-product-information-container'>
                <div className='ad-details-text-heading-container'>
                    <h2 className='text-heading'>Enter Ad Details</h2>
                    <p className='step-heading'>step 1/4</p>
                </div>
                {/* <hr style={{ width: 500, color: 'lightgray', margin: 0 }} /> */}


                <div className='ad-edetails--of-car-container'>
                    <div className='car-ad-info-heading-container'>
                        <h3 className='car-ad-info-heading'>Car Info</h3>
                    </div>
                    <div className='car-ad-info-input-fields-container'>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={models}
                            sx={{ width: 452 }}
                            renderInput={(params) => <TextField {...params} placeholder="Brand" className='car-ad-info--input-field' />}
                        />
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={models}
                            sx={{ width: 452 }}
                            renderInput={(params) => <TextField {...params} placeholder="Model" className='car-ad-info--input-field' />}
                        />
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={models}
                            sx={{ width: 452 }}
                            renderInput={(params) => <TextField {...params} placeholder="Year Of Registration" className='car-ad-info--input-field' />}
                        />
                        <TextField id="outlined-basic" sx={{ width: 452, height: 44 }} placeholder="KM Driven" />
                        <div className='fuel-type-info-container'>
                            <label className='fuel-type-label'>Fuel Type</label>
                            <div className='fuel-type-filter-info-buttons-container' >
                                {fuelTypes.map((each) => (
                                    <button type="button" onClick={() => setActivefuelType(each.id)} key={each.id} className={each.id === activeFuelType ? 'activeFuelinfo' : 'deactiveFuelInfo'}>{each.type}</button>
                                ))}
                            </div>
                        </div>
                        <TextField id="outlined-basic" placeholder="Title" variant="outlined" sx={{ width: 452, height: 44 }} />
                        <TextField id="standard-multiline-static" placeholder="Description" multiline rows={4} variant="outlined" sx={{ width: 452 }} />
                        {additionalInfo ?
                            (<Stack direction={'column'} justifyContent={'start'}>
                                <button type='button' onClick={() => setAdditionaInfo((prev) => !prev)} >Additional Info -</button>
                                <h3 style={{ margin: 0, textAlign: 'left' }}>No Of Owners</h3>
                                <Stack direction={'row'} justifyContent={'space-between'}>
                                    <Button type="button" variant='outlined' sx={{ m: 1 }}>1</Button>
                                    <Button type="button" variant='outlined' sx={{ m: 1 }}>2</Button>
                                    <Button type="button" variant='outlined' sx={{ m: 1 }}>3</Button>
                                    <Button type="button" variant='outlined' sx={{ m: 1 }}>4+</Button>
                                </Stack>
                                <h3 style={{ margin: 0, textAlign: 'left' }}>Is Insurance Available ?</h3>
                                <Stack direction={'row'}>
                                    <Button type="button" variant='outlined' onClick={() => setInsurenceStatus(true)} sx={{ m: 1 }}>Yes</Button>
                                    <Button type="button" variant='outlined' onClick={() => setInsurenceStatus(false)} sx={{ m: 1 }}>No</Button>
                                </Stack>
                                {insurenceStatus ? (
                                    <Stack direction={'column'}>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DemoContainer components={['DatePicker']} sx={{ m: 1 }}>
                                                <DatePicker label="Validity Upto" />
                                            </DemoContainer>
                                        </LocalizationProvider>
                                        <TextField id="outlined-basic" label="Color" variant="outlined" />
                                    </Stack>
                                ) : null}
                            </Stack>) : (<button type='button' className="additions-info-button" onClick={() => setAdditionaInfo((prev) => !prev)}>Additional Info +</button>)}
                    </div>
                    <div className='car-ads-photos-info-container'>
                        <div className='cars-ad-photos-info-heading-container'>
                            <h3 className='cars-ad-photos-info-heading'>Add Photos</h3>
                        </div>
                        <div className='upload-car-ads-images-container'>
                            <div className='upload-car-ads-images-inner-container'>
                                <div className='upload-images-icon'>
                                    <FiUploadCloud className='upload-icon' />
                                </div>
                                <label htmlFor='upload' style={{ color: "blue", cursor: 'pointer' }}>Click to Upload <span style={{ color: 'black' }}>or drag and drop<br />PNG, JPG or JPEG (max 15 photos)</span></label>
                                <input id="upload" type="file" name='file' accept='image/jpeg, image/jpg, image/png' onChange={(e) => setImage([...image, e.target.files])} />
                                {image.map((each) => (
                                    <Stack direction={'row'}>
                                        <img src={process.env.PUBLIC_URL + each.name} alt="name" style={{ width: 150, height: 150 }} />
                                    </Stack>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='car-ads-price-info-container'>
                        <div className='cars-ads-price-info-heading-container'>
                            <h3 className='cars-ads-price-info-heading'>Price</h3>
                        </div>
                        <div className='cars-ads-price-info-input-field-container'>
                            <div className='type-of-rupee'>AED</div>
                            {/* <TextField id="outlined-basic" placeholder="Price"  type="number"  className='cars-ads-price-input-field' /> */}
                        </div>
                    </div>
                    <div className='procedings-container'>
                        <p className='privacy-statement'>By proceeding, you agree to our <span className='special-text'>Terms of use</span> & <span className='special-text'>Privacy Policy</span></p>
                        {/* <Stack direction={'row'} justifyContent={'space-between'} >
                    {/* <Button type="button" variant='outlined' sx={{ m: 1 }}>Cancel</Button> 
                    {/* <Button type="button" variant='contained' sx={{ backgroundColor: 'black', color: 'white', m: 1 }}>Next</Button> 
                </Stack> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default StepOne