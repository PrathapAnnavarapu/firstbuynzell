import React from 'react';
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { FiUploadCloud } from "react-icons/fi";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { v4 as uuidv4 } from 'uuid'
import { LinearProgressProps } from '@mui/material/LinearProgress';
import { GiCancel } from "react-icons/gi";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import './step1.css'

const NoOfDoorsOptions = ['2', '4', '6']
const NoOfSeatsOptions = ['2', '3', '4', '5', '6', '7', '8', '9', '10']
const NoOfCylinderOptions = ['1', '2', '3', '4', '5', '6']
const horsePowerOptions = ['0-100', '100-200', '200-300', '300-400', '400-500']
const steeringOptions = ['Left', 'Right']
const years = ['1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023']
const fuelTypes = [{ type: 'Gasoline', id: 1 }, { type: 'Diesel', id: 2 }, { type: 'CNG', id: 3 }, { type: 'Hybrid', id: 4 }, { type: 'Electric', id: 5 }]
const NoofOwners = ['1', '2', '3', '4+']
const insurenceAvailable = ['Yes', 'No']


function StepOne(props: LinearProgressProps & { value: number }) {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const ad:any = useSelector((state:any)=> state.postAdDetails[0])
    const previewOfPhotos = useSelector((state:any)=> state.previewPhotos)

    useEffect(()=>{
        if(previewOfPhotos !== undefined){
            setSelectedPhotosFile(previewOfPhotos)
        }
    },[previewOfPhotos])
  
     
    useEffect(()=>{
        if (ad!== undefined){
            setuserPostAdDetails({...userPostAdDetails, brand:ad.brand, model:ad.model, yearOfRegistration:ad.yearOfRegistration, kmDriven:ad.kmDriven, title:ad.title, description:ad.description, noOfOwners:ad.noOfOwners, fuelType:ad.fuelType, steeringOption:ad.steeringOption, horsePower:ad.horsePower, noOfDoors:ad.noOfDoors,
          noOfCylinders:ad.noOfCylinders, noOfSeats:ad.noOfSeats, insurenceValidityUpto:ad.insurenceValidityUpto, exteriorColor:ad.exteriorColor,interiorColor:ad.interiorColor ,peviewphotosArray:ad.peviewphotosArray, price:ad.price
        })       
    }
    },[ad])

    const breadcrumbs = [
        <Link key="1" color="#0068B3" href='' onClick={() => navigate('/')}>
            Home
        </Link>,
        <Typography key="2" color="#0068B3">
            Cars
        </Typography>
    ];

    const jsonLoginDetails = localStorage.getItem('loginDetails')
    const parseLoginDetails: any = JSON.parse(String(jsonLoginDetails))

    // const [progress, setProgress] = React.useState<any>({ started: false, pc: 0 })
    const [usedCarsBrandsList, setUsedCarsBrandsList] = React.useState<any>([])
    const [usedCarsModelsList, setUsedCarsModelsList] = React.useState<any>([])
    const [serverPhotos, setServerPhotos] = React.useState<any>([])
    const [selectedPhotosFile, setSelectedPhotosFile] = React.useState<any>([])
    // const [previewPhotosId, setPreviewPhotosId] = React.useState<number>(0)
    const [additionalInfo, setAdditionaInfo] = React.useState<boolean>(false)
    const [activeInsurenceButton, setActiveInsurenceButton] = React.useState<string>()
    const [userPostAdDetails, setuserPostAdDetails] = React.useState<any>({
        customerId: parseLoginDetails.customer_id,
        listingId: uuidv4(),
        category: 'motors',
        subCategory: 'usedCars',
        adPostedDate: String(new Date()),
        brand: '',
        model: '',
        yearOfRegistration: '',
        kmDriven: '',
        title: '',
        description: '',
        noOfOwners: '',
        fuelType: '',
        steeringOption: '',
        horsePower: '',
        noOfDoors: '',
        noOfCylinders: '',
        noOfSeats: '',
        insurenceValidityUpto: String(dayjs('dd-mm-yyyy')),
        exteriorColor: '',
        interiorColor: '',
        price: ''
    })

    
  console.log(serverPhotos)

    const sendActivePageCountToDB = async () => {
        const stepUrl = `http://localhost:4000/updateTheActivePageCount/${parseLoginDetails.customer_id}`
        const options = {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
                // "x-api-key": "497a9dba-2e9f-4895-9357-9175a40bcb9e",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": "true",

            },
            body: JSON.stringify({activePageStep: 1 })
        }
        const response = await fetch(stepUrl, options)
        const data = await response.json()
        if (response.status === 200) {
            console.log(data.message)
        }
    }




    const onSubmitDetailsToRedux = () => {       
        dispatch({ type: 'addPostDetails', payload: userPostAdDetails })
        dispatch({ type: 'addServerPhotosArray', payload: serverPhotos })
        dispatch({type:'addPreviewPhotosArray', payload:selectedPhotosFile})
        dispatch({ type: 'IncActivePageCount', payload: 1 })
        sendActivePageCountToDB()
    }


    const onHandleChange = (event) => {
        const { name, value } = event.target
        setuserPostAdDetails({ ...userPostAdDetails, [name]: value })
    }

    const getUsedCarsBrandsList = async () => {
        const usedCarsBrandsUrl = 'http://localhost:4000/usedCarsBrandsList'
        const relations = {
            method: "GET",
            // headers:{
            //     'Content-type': 'application/json',
            // // "x-api-key": "497a9dba-2e9f-4895-9357-9175a40bcb9e",
            // "Access-Control-Allow-Origin": "*",
            // "Access-Control-Allow-Credentials": "true",

            // }
        }

        const response = await fetch(usedCarsBrandsUrl, relations)
        const Listdata = await response.json()
        if (response.status === 200) {
            setUsedCarsBrandsList(Listdata.list)
        }

    }


    const getUsedCarsModelsList = async () => {
        const usedCarsModelsUrl = `http://localhost:4000/usedCarsModelsList/${userPostAdDetails.brand}`
        const options = {
            method: "GET",
        }
        const response = await fetch(usedCarsModelsUrl, options)
        const data = await response.json()
        if (response.status === 200) {
            setUsedCarsModelsList(data.data)
        }
    }

    useEffect(() => {
        getUsedCarsBrandsList()
        getUsedCarsModelsList()
    }, [userPostAdDetails.brand])




    const removeImageFromList = (each) => {
        setSelectedPhotosFile(selectedPhotosFile
            .filter((eachPhoto) => eachPhoto.id !== each.id))
    }



    const handleFileUpload = async (event) => {
        if (event.target.files) {
            const filesArray = Array.from(event.target.files).map((eachFile: any) => URL.createObjectURL(eachFile))
            // setPreviewPhotosId((prev) => prev + 1)
            setSelectedPhotosFile((prevImage) => prevImage.concat(filesArray));
            Array.from(event.target.files).map((eachFile: any) => URL.revokeObjectURL(eachFile))
            setServerPhotos((prevPhoto)=> prevPhoto.concat(Array.from(event.target.files).map((eachFile) => eachFile)))
        }

    }



    return (
        <div className='main-seller-contaier'>
            <div className='seller-flow-bread-crumbs-container'>
                <Breadcrumbs
                    separator={<NavigateNextIcon fontSize="small" />}
                    aria-label="breadcrumb"
                >
                    {breadcrumbs}
                </Breadcrumbs>
            </div>
            <div className={additionalInfo && selectedPhotosFile.length >= 1 || additionalInfo ? 'seller-product-information-container-along-additional-info' : 'seller-product-information-container'}>
                <div className='ad-details-text-heading-container'>
                    <h2 className='text-heading'>Enter Ad Details</h2>
                    <p className='step-heading'>step 1/4</p>
                </div>
                <div className={additionalInfo ? 'ad-details--of-car-container-along-with-additional-info' : 'ad-details--of-car-container'}>
                    <>
                        <div className='car-ad-info-heading-container'>
                            <h3 className='car-ad-info-heading'>Car Info</h3>
                        </div>
                        <form className='car-ad-info-input-fields-container' encType='multipart/form-data'>
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                value={userPostAdDetails.brand}
                                options={usedCarsBrandsList.map((each => each.brand))}
                                onChange={(e, v) => setuserPostAdDetails({ ...userPostAdDetails, brand: v })}
                                sx={{ width: 452 }}
                                renderInput={(params) => <TextField {...params} placeholder="Brand" className='car-ad-info--input-field' />}
                            />

                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={usedCarsModelsList.map((each) => each.model)}
                                sx={{ width: 452 }}
                                value={userPostAdDetails.model}
                                onChange={(e, value) => setuserPostAdDetails({ ...userPostAdDetails, model: value })}
                                renderInput={(params) => <TextField {...params} placeholder="Model" className='car-ad-info--input-field' />}
                            />
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={years}
                                value={userPostAdDetails.yearOfRegistration}
                                onChange={(e, value) => setuserPostAdDetails({ ...userPostAdDetails, yearOfRegistration: value })}
                                sx={{ width: 452 }}
                                renderInput={(params) => <TextField {...params} placeholder="Year Of Registration" name="yearOfRegistration" className='car-ad-info--input-field' />}
                            />
                            <TextField id="outlined-basic" sx={{ width: 452, height: 44 }} placeholder="KM Driven" name="kmDriven" value={userPostAdDetails.kmDriven} onChange={(e) => onHandleChange(e)} />
                            <TextField id="outlined-basic" placeholder="Title" variant="outlined" sx={{ width: 452, height: 44 }} name="title" value={userPostAdDetails.title} onChange={(e) => onHandleChange(e)} />
                            <TextField id="standard-multiline-static" placeholder="Description" multiline rows={4} variant="outlined" sx={{ width: 452 }} name="description" value={userPostAdDetails.description} onChange={(e) => onHandleChange(e)} />
                            {additionalInfo ?
                                (<>
                                    <button type='button' onClick={() => setAdditionaInfo((prev) => !prev)} className='additions-info-button'>Additional Info -</button><div className='no-of-owners-container'>
                                        <h3 className='no-of-owners-heading'>No Of Owners</h3>
                                        <div className='no-of-owners-buttons-container'>
                                            {NoofOwners.map((each) =>
                                                <button type="button" className={each === userPostAdDetails.noOfOwners ? 'active-Owner-button' : 'deactive-owner-button'} onClick={() => setuserPostAdDetails({ ...userPostAdDetails, noOfOwners: each })}>{each}</button>
                                            )}
                                            {/* <button type="button" className='owner-button'>1</button>
                                            <button type="button" className='owner-button'>2</button>
                                            <button type="button" className='owner-button'>3</button>
                                            <button type="button" className='owner-button'>4+</button> */}
                                        </div>
                                    </div>
                                    <div className='fuel-type-info-container'>
                                        <label className='fuel-type-label'>Fuel Type</label>
                                        <div className='fuel-type-filter-info-buttons-container'>
                                            {fuelTypes.map((each) => (
                                                <button type="button" onClick={() => setuserPostAdDetails({ ...userPostAdDetails, fuelType: each.type })} key={each.id} className={each.type === userPostAdDetails.fuelType ? 'activeFuelinfo' : 'deactiveFuelInfo'}>{each.type}</button>
                                            ))}
                                        </div>
                                    </div>
                                    <Autocomplete
                                        disablePortal
                                        id="combo-box-demo"
                                        options={steeringOptions}
                                        value={userPostAdDetails.steeringOption}
                                        onChange={(e, value) => setuserPostAdDetails({ ...userPostAdDetails, steeringOption: value })}
                                        sx={{ width: 452 }}
                                        renderInput={(params) => <TextField {...params} placeholder="Steering Side" name="steeringOption" className='car-ad-info--input-field' />}
                                    />
                                    <Autocomplete
                                        disablePortal
                                        id="combo-box-demo"
                                        options={horsePowerOptions}
                                        value={userPostAdDetails.horsePower}
                                        onChange={(e, value) => setuserPostAdDetails({ ...userPostAdDetails, horsePower: value })}
                                        sx={{ width: 452 }}
                                        renderInput={(params) => <TextField {...params} placeholder="Horse Power" name="horsePower" className='car-ad-info--input-field' />}
                                    />
                                    <Autocomplete
                                        disablePortal
                                        id="combo-box-demo"
                                        options={NoOfDoorsOptions}
                                        value={userPostAdDetails.noOfDoors}
                                        onChange={(e, value) => setuserPostAdDetails({ ...userPostAdDetails, noOfDoors: value })}
                                        sx={{ width: 452 }}
                                        renderInput={(params) => <TextField {...params} placeholder="No of Doors" name="noOfDoors" className='car-ad-info--input-field' />}
                                    />
                                    <Autocomplete
                                        disablePortal
                                        id="combo-box-demo"
                                        options={NoOfCylinderOptions}
                                        value={userPostAdDetails.noOfCylinders}
                                        onChange={(e, value) => setuserPostAdDetails({ ...userPostAdDetails, noOfCylinders: value })}
                                        sx={{ width: 452 }}
                                        renderInput={(params) => <TextField {...params} placeholder="No of Cylinders" name="noOfCylinders" className='car-ad-info--input-field' />}
                                    />
                                    <Autocomplete
                                        disablePortal
                                        id="combo-box-demo"
                                        options={NoOfSeatsOptions}
                                        value={userPostAdDetails.noOfSeats}
                                        onChange={(e, value) => setuserPostAdDetails({ ...userPostAdDetails, noOfSeats: value })}
                                        sx={{ width: 452 }}
                                        renderInput={(params) => <TextField {...params} placeholder="No of Seats" name="noOfSeats" className='car-ad-info--input-field' />}
                                    />
                                    <div className='insurence-validity-container'>
                                        <h3 className='insurence-heading-text'>Is Insurance Available ?</h3>
                                        <div className='insurence-buttons-container'>
                                            {insurenceAvailable.map((each) =>
                                                <button type="button" onClick={() => { setActiveInsurenceButton(each) }} className={each === activeInsurenceButton ? 'active-insurence-button' : 'deactive-insurence-button'} >{each}</button>

                                            )}
                                            {/* <button type="button" onClick={() => setInsurenceStatus(false)} className='deactive-insurence-button'>No</button> */}
                                        </div>
                                        {activeInsurenceButton === 'Yes' ? (
                                            <>
                                                <div >
                                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                        <DemoContainer components={['DatePicker']}>
                                                            <DatePicker
                                                                disablePast={true}
                                                                sx={{ width: 452 }}
                                                                label='MM/DD/YYYY'
                                                                value={userPostAdDetails.insurenceValidityUpto}
                                                                onChange={(newValue) => setuserPostAdDetails({ ...userPostAdDetails, insurenceValidityUpto: newValue })}
                                                            />
                                                        </DemoContainer>
                                                    </LocalizationProvider>
                                                </div>
                                                <TextField id="outlined-basic" placeholder="Exterior Color" variant="outlined" sx={{ width: 452, height: 44, mt: 1 }} name="exteriorColor" value={userPostAdDetails.exteriorColor} onChange={(e) => onHandleChange(e)} />
                                                <TextField id="outlined-basic" placeholder="Interior Color" variant="outlined" sx={{ width: 452, height: 44, mt: 2 }} name="interiorColor" value={userPostAdDetails.interiorColor} onChange={(e) => onHandleChange(e)} />

                                            </>
                                        ) : null}
                                    </div></>
                                ) : (<div className='plus-aditional-info-container'><button type='button' className="additions-info-button" onClick={() => setAdditionaInfo((prev) => !prev)}>Additional Info +</button></div>)
                            }
                        </form>
                    </>
                </div>               
                <div className={selectedPhotosFile.length >= 1 ? 'car-ads-photos-info-container-along-with-photos' : 'car-ads-without-photos-info-container'}>
                    <div className='cars-ad-photos-info-heading-container'>
                        <h3 className='cars-ad-photos-info-heading'>Add Photos</h3>
                    </div>
                    <div className='upload-car-ads-images-container' >
                        <div className='upload-car-ads-images-inner-container'>
                            <div className='upload-images-icon'>
                                <FiUploadCloud className='upload-icon' />
                            </div>
                            <label htmlFor='upload' style={{ color: "blue", cursor: 'pointer' }}>Click to Upload <span style={{ color: 'black' }}>or drag and drop<br />PNG, JPG or JPEG (max 15 photos)</span></label>
                            <input id="upload" type="file" name='file[]' accept='image/jpeg, image/jpg, image/png' multiple={true} onChange={handleFileUpload} />
                        </div>
                    </div>                
                    {/* <div className='new-upload-progress-bar'>
                    {progress.started && <progress max='100' value={progress.pc}></progress>}
                </div> */}
                    {selectedPhotosFile.length >= 1 &&
                        (<ul className='unique-unorder-upload-images-list'>
                            {selectedPhotosFile.map((each) => (
                                <li style={{ backgroundImage: `url(${each})`, backgroundSize: 'cover', minWidth: 140, minHeight: 120 }}>
                                    {/* <img src={process.env.PUBLIC_URL + each.name} alt="name"  />   */}
                                    <button type='button' className='photos-cancel-button' onClick={() => removeImageFromList(each)}><GiCancel className='cancel-icon-button' /></button>
                                </li>
                            ))}
                        </ul>)}
                    </div>                
                <div className='car-ads-price-info-container'>
                    <div className='cars-ads-price-info-heading-container'>
                        <h3 className='cars-ads-price-info-heading'>Price</h3>
                    </div>
                    <div className='cars-ads-price-info-input-field-container'>
                        <div className='type-of-rupee'>AED  </div>
                        <TextField placeholder="Price" type="number" sx={{ width: 400, padding: 0 }} name="price" value={userPostAdDetails.price} onChange={(e) => onHandleChange(e)} />
                    </div>
                </div>
                <div className='procedings-container'>
                    <p className='privacy-statement'>By proceeding, you agree to our <span className='special-text'>Terms of use</span> & <span className='special-text'>Privacy Policy</span></p>
                    <div className='stepone-buttons-container'>
                        {/* <button type="button" className='back-button'>Back</button> */}
                        <button type="button" onClick={onSubmitDetailsToRedux} className='next-button' >Next</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default StepOne



{/*defaultValue={dayjs('2022-04-17')} */ }


 // const convertToBase64 = (file) => {
    //     return new Promise((resolve, reject) => {
    //         const fileReader = new FileReader();
    //         fileReader.readAsDataURL(file);
    //         fileReader.onload = () => {
    //             resolve(fileReader.result);
    //         };
    //         fileReader.onerror = (error) => {
    //             reject(error);
    //         };
    //     });
    // };


    // const handleFileUpload = async (e) => {
    //     const file = e.target.files[0];
    //     const base64 = await convertToBase64(file);

    //     setPhotosArray([...photosArray, { base64, id: photosId }]);
    //     setPhotosId(photosId + 1)
    // };