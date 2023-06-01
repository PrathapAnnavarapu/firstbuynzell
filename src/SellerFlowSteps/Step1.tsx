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
                <div className='ad-edetails--of-car-container'>
                    <>
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
                            <TextField id="outlined-basic" placeholder="Title" variant="outlined" sx={{ width: 452, height: 44 }} />
                            <TextField id="standard-multiline-static" placeholder="Description" multiline rows={4} variant="outlined" sx={{ width: 452 }} />
                            {additionalInfo ?
                                (<>
                                    <button type='button' onClick={() => setAdditionaInfo((prev) => !prev)} className='additions-info-button'>Additional Info -</button><div className='no-of-owners-container'>
                                        <h3 className='no-of-owners-heading'>No Of Owners</h3>
                                        <div className='no-of-owners-buttons-container'>
                                            <button type="button" className='owner-button'>1</button>
                                            <button type="button" className='owner-button'>2</button>
                                            <button type="button" className='owner-button'>3</button>
                                            <button type="button" className='owner-button'>4+</button>
                                        </div>
                                    </div>
                                    <div className='fuel-type-info-container'>
                                        <label className='fuel-type-label'>Fuel Type</label>
                                        <div className='fuel-type-filter-info-buttons-container'>
                                            {fuelTypes.map((each) => (
                                                <button type="button" onClick={() => setActivefuelType(each.id)} key={each.id} className={each.id === activeFuelType ? 'activeFuelinfo' : 'deactiveFuelInfo'}>{each.type}</button>
                                            ))}
                                        </div>
                                    </div><div className='insurence-validity-container'>
                                        <h3 className='insurence-heading-text'>Is Insurance Available ?</h3>
                                        <Stack direction={'row'} justifyContent={'space-between'}>
                                            <button type="button" onClick={() => setInsurenceStatus(true)} className='insurence-buttons'>Yes</button>
                                            <button type="button" onClick={() => setInsurenceStatus(false)} className='insurence-buttons'>No</button>
                                        </Stack>
                                        {insurenceStatus ? (
                                            <>
                                                <div >
                                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                        <DemoContainer components={['DatePicker']} >
                                                            <DatePicker label="Validity Upto" sx={{ width: 452, height: 44, mb: 2 }} />
                                                        </DemoContainer>
                                                    </LocalizationProvider>
                                                </div>
                                                <TextField id="outlined-basic" placeholder="Color" variant="outlined" sx={{ width: 452, height: 44 }} />
                                            </>
                                        ) : null}
                                    </div></>
                                ) : (<button type='button' className="additions-info-button" onClick={() => setAdditionaInfo((prev) => !prev)}>Additional Info +</button>)
                            }
                        </div>
                    </>
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
                        <div className='type-of-rupee'>AED  </div>
                        <TextField placeholder="Price" type="number" sx={{ width: 400, padding: 0 }} />
                    </div>
                </div>
                <div className='procedings-container'>
                    <p className='privacy-statement'>By proceeding, you agree to our <span className='special-text'>Terms of use</span> & <span className='special-text'>Privacy Policy</span></p>
                </div>
            </div>
        </div>
    )
}
export default StepOne