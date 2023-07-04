import React from 'react'
import { useEffect } from 'react'
import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack'
// import Button from '@mui/material/Button'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
// import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
import Button from '@mui/material/Button'
import { IoMdClose, IoMdPhotos } from "react-icons/io"
import { useDispatch, useSelector } from 'react-redux';

import './step3.css'
import StepFour from './Step4';



const tiers = [
  {
    title: 'Silver',
    price: '100',
    description: [
      'Each for 3 days',
      'upto 15 Ads',
      'Featuring for 1.5 days',
    ],
    buttonText: 'Sign up for free',
    buttonVariant: 'outlined',
  },
  {
    title: 'Gold',
    subheader: 'Most popular',
    price: '250',
    description: [
      'Each for 3 days',
      'upto 15 Ads',
      'Featuring for 1.5 days',
    ],
    buttonText: 'Get started',
    buttonVariant: 'contained',
  },
  {
    title: 'Diamond',
    price: '500',
    description: [
      'Each for 3 days',
      'upto 15 Ads',
      'Featuring for 1.5 days',
    ],
    buttonText: 'Contact us',
    buttonVariant: 'outlined',
  },
];

const Input = styled(MuiInput)`
  width: 42px;
`;

const discountCouponsList = [{ code: 'Firstsell', price: 123 }, { code: 'Secondsell', price: 83 }, { code: 'Buynzell100', price: 100 }]
// interface discount { code: string, price: number }


function StepThree() {
  const dispatch = useDispatch()

  
  const adDetails:null|any = useSelector((state:null |any)=> state.postAdDetails[0])
  const contactDetails:any = useSelector((state:null |any)=> state.postAdDetails[1])

  const previewOfPhoto = useSelector((state:any)=> state.previewPhotos)

  const jsonLoginDetails = localStorage.getItem('loginDetails')
  const parseLoginDetails: any = JSON.parse(String(jsonLoginDetails))
 
 

  const [isActiveSiverPlan, setIsActiveSiverPlan] = React.useState<boolean>(false)
  const [isActiveGoldPlan, setIsActiveGoldPlan] = React.useState<boolean>(false)
  const [isActiveDiamondPlan, setIsActiveDiamondPlan] = React.useState<boolean>(false)
  const [couponCodeInput, setCouponCodeInput] = React.useState<string>('')
  const [errorMsg, setErrorMsg] = React.useState<string>('')
  const [activeCouponDetils, setActiveCouponDetils] = React.useState<any>([])
 


  const [planDetails, setPlanDetails] = React.useState<any>({
    planValidityDays: '',
    isSelectFeatureInCategory: false,
    isSelectFeatureInSearchResults: false,
    activeMemberShipPackage: '',
    discountCouponDetails: '',
    totalAmount: '',
    adCurrentStatus:'Under review'
  })



  const subTotalPricesArray: any = [(planDetails.planValidityDays * 50)]
  planDetails.isSelectFeatureInCategory && subTotalPricesArray.push(100)
  planDetails.isSelectFeatureInSearchResults && subTotalPricesArray.push(200)
  isActiveSiverPlan && subTotalPricesArray.push(100)
  isActiveGoldPlan && subTotalPricesArray.push(250)
  isActiveDiamondPlan && subTotalPricesArray.push(500)
  const subTotalAmount = subTotalPricesArray.reduce((accu, curr) => accu + curr)
  const vatAmount: any = Math.ceil((subTotalAmount * 5) / 100)
  const totalAmountArray: any = [subTotalAmount, vatAmount]
  const totalPrice: any = totalAmountArray.reduce((acc, cur) => acc + cur)
  const GrandTotalPrice: null | number = activeCouponDetils.length >=1 ? totalPrice - activeCouponDetils.map((each)=> each.price)[0] : totalPrice

  useEffect(() => {
    setPlanDetails({ ...planDetails, totalAmount: GrandTotalPrice })
  }, [GrandTotalPrice])


  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setPlanDetails({ ...planDetails, planValidityDays: newValue });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlanDetails({ ...planDetails, planValidityDays: event.target.value === '' ? '' : Number(event.target.value) });
  };

  const handleBlur = () => {
    if (planDetails.planValidityDays < 1) {
      setPlanDetails({ ...planDetails, planValidityDays: 1 });
    } else if (planDetails.planValidityDays > 100) {
      setPlanDetails({ ...planDetails, planValidityDays: 100 });
    }
  };

  const changeHandleFeatureCategory = () => {
    setPlanDetails({ ...planDetails, isSelectFeatureInCategory: !planDetails.isSelectFeatureInCategory })
  }

  const changeHandleFeatureSearchResult = () => {
    setPlanDetails({ ...planDetails, isSelectFeatureInSearchResults: !planDetails.isSelectFeatureInSearchResults })
  }

  const handleSelectPlan = (plan) => {
    setPlanDetails({ ...planDetails, activeMemberShipPackage: plan })
    if (plan === 'Silver') {
      setIsActiveSiverPlan(true)
    }
    else {
      setIsActiveSiverPlan(false)
    }
    if (plan === 'Gold') {
      setIsActiveGoldPlan(true)
    }
    else {
      setIsActiveGoldPlan(false)
    }
    if (plan === 'Diamond') {
      setIsActiveDiamondPlan(true)
    }
    else {
      setIsActiveDiamondPlan(false)
    }
  }


  const onClickAddCoupon = () => {
    if (couponCodeInput === '') {
      setErrorMsg('Please Enter a Valid Coupon code')
    } else {
      const isCouponValid = discountCouponsList.filter((eachCoupon) => eachCoupon.code === couponCodeInput)
      if (isCouponValid.length > 0) {

        setPlanDetails({ ...planDetails, discountCouponDetails: JSON.stringify(isCouponValid) })
        setActiveCouponDetils(isCouponValid)
        setCouponCodeInput('')
        setErrorMsg('')
      } else {
        setErrorMsg('Invalid Coupon Code')
      }
    }
    return errorMsg
  }

  const onClickRemoveDiscount = () => {
    setActiveCouponDetils([])

  }

  const sendPlanDetailsToReduxStore = async() => {
    dispatch({ type: 'addPlanDetails', payload: planDetails })
    dispatch({ type: 'IncActivePageCount', payload: 3 })
    const stepUrl = `http://localhost:4000/updateTheActivePageCount/${parseLoginDetails.customer_id}`
        const options={
            method:'PUT',
           headers:{
                'Content-type': 'application/json',
            // "x-api-key": "497a9dba-2e9f-4895-9357-9175a40bcb9e",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": "true",

            },
            body:JSON.stringify({customerId:parseLoginDetails.customer_id, 	activePageStep:3})
        }
        const response = await fetch(stepUrl, options)
        const data = await response.json()
        if (response.status === 200){
            console.log(data.message)
        }
   
    // localStorage.setItem(`${parseLoginDetails.user_name}ActivePage`, '3')

  }

  return (
    <div className='seller-payments-info-outer-contaier'>
      <div className='seller-payments-info-inner-container'>
        <div className='seller-ads-payment-main-contaier'>
          <div className='ads-plan-heading-container'>
            <h2 className='ads-plan-heading'>Select Your Plan</h2>
            <p className='third-step-heading'>step 3/4</p>
          </div>
          <div className='ads-plan-selection-info-container'>
            <div className='no-of-days-selection-plan-container'>

              <Stack direction={'row'}>
                <Grid item>
                  <Input
                  sx={{color:'#0068B3', width:42}}
                    value={planDetails.planValidityDays}
                    size="small"
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    inputProps={{
                      step: 10,
                      min: 0,
                      max: 100,
                      type: 'number',
                      // 'aria-labelledby': 'input-slider',
                    }}
                  />
                </Grid>
                <Typography id="input-slider" gutterBottom sx={{color:'#0068B3'}}>
                  {planDetails.planValidityDays === 1 ? 'Day' : 'Days'} (<span style={{ color: 'black', fontWeight: 500 }}>AED {planDetails.planValidityDays * 50}</span>)
                </Typography>
              </Stack>
            </div>
            <div className='no-of-days-ad-selection-slider-container'>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs>
                  <Slider
                    value={typeof planDetails.planValidityDays === 'number' ? planDetails.planValidityDays : 0}
                    onChange={handleSliderChange}
                    aria-labelledby="input-slider"
                  />
                </Grid>
              </Grid>
            </div>
            <div className='ads-feature-category-plan-container'>
              <div className='featured-category-plan-selection-checkbox-container'>
                <Stack direction={'row'} justifyContent={'space-between'} sx={{ width: 550, m: 0, p: 0 }}>
                  <FormControlLabel required control={<Checkbox />} label='Feature In Category For 2.5 Days' onChange={changeHandleFeatureCategory} sx={{ width: 200 }} />
                  <h5 >AED 100</h5>
                </Stack>
              </div>
              <hr className='content-saparate-line' />
              <div className='featured-category-plan-search-result-checkbox-container'>
                <Stack direction={'row'} justifyContent={'space-between'} sx={{ width: 550, m: 0 }}>
                  <FormControlLabel required control={<Checkbox />} label='Feature In Search Result For 2.5 Days' onChange={changeHandleFeatureSearchResult} sx={{ width: 200 }} />
                  <h5 >AED 200</h5>
                </Stack>
              </div>
            </div>
          </div>
          <div className='ads-packages-info-container'>
            <div className='ads-pacakges-heading-container'>
              <h3 className='ads-pacakges-heading'>Try Packages</h3>
            </div>
            <div className='ads-pacakages-list-contaier' >

              {tiers.map((tier) => (
                // Enterprise card is full width at sm breakpoint
                <Grid
                  item
                >
                  <Card className='ads-package-card-container'>
                    <CardHeader
                      // title={tier.title}
                      // subheader={tier.subheader}
                      titleTypographyProps={{ align: 'center' }}
                      action={tier.title === 'Pro' ? <StarIcon /> : <FormControlLabel required control={<Checkbox />} label={tier.title} key={tier.title} onChange={() => handleSelectPlan(tier.title)} checked={tier.title === planDetails.activeMemberShipPackage} className='checkbox-input' />}
                      subheaderTypographyProps={{
                        align: 'center',
                      }}
                      sx={{
                        width: 173,
                        height: 30,
                        p: 0
                      }}
                    />
                    <CardContent>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'start',
                          alignItems: 'baseline',
                          mb: 2,
                        }}
                      >
                        <Typography component="h2" variant="h6" color="text.primary" className='plan-price-text'>
                          AED {tier.price}
                        </Typography>
                      </Box>
                      <ul className='package-features-info-container'>
                        {tier.description.map((line) => (
                          <Typography
                            component="li"
                            variant="subtitle1"
                            align="center"
                            key={line}
                          >
                            {line}
                          </Typography>
                        ))}
                      </ul>
                    </CardContent>
                    {/* <CardActions>
                    <Button
                      fullWidth
                      variant={tier.buttonVariant as 'outlined' | 'contained'}
                    >
                      {tier.buttonText}
                    </Button>
                  </CardActions> */}
                  </Card>
                </Grid>
              ))}
            </div>
          </div>
          <div className='ads-payment-summury-info-container'>
            <div className='ads-payment-summary-heading-container'>
              <h4 className='ads-payment-summary-heading'>Summary</h4>
            </div>
            <div className='ad-preview-container'>    
              <img src={previewOfPhoto[0]} alt='photo' className='preview-image'/>
              <div className='previw-description'>
                <div className='ad_preview_title_container'>
                  <h5 className='preview-title'>{adDetails.title}</h5>
                  {planDetails.isSelectFeatureInCategory && <div className='feature-card'>FEATURE</div>}
                </div>
                <h6 className='preview-price'>AED {adDetails.price}</h6>
                <h6 className='preview-address'>{contactDetails.city} . {contactDetails.region} . {contactDetails.country}</h6>
              </div>
            </div>

            <div className='ads-payment-discount-input-container'>
              <h4 className='ads-payment-discount-heading'>Discount </h4>
              <Stack direction={'row'} justifyContent={'space-between'} sx={{ width: 452 }}>
                <TextField id="outlined-basic" placeholder="Coupon Code" variant="outlined" type="search" onChange={(e) => setCouponCodeInput(e.target.value)} value={couponCodeInput} sx={{ width: 300 }} />
                <Button type='button' variant='contained' onClick={onClickAddCoupon}>Add Coupon</Button>
              </Stack>
              <p style={{ color: 'red', margin: 0 }}>{errorMsg}</p>
            </div>
            <div className='ads-price-details-info-container'>
              <div className='ads-price-details-sub-heading-text'>
                <h4 className='ads-price-details-sub-heading'>Price Details</h4>
              </div>
              <div className='days-amount-plan-container'>
                <p className='day-ad-amount-title'>{planDetails.planValidityDays} Day Ad</p>
                <p className='day-ad-amount-price'>AED {planDetails.planValidityDays * 50}</p>
              </div>
              {isActiveSiverPlan && (
                <div className='silver-amount-plan-container'>
                  <p className='silver-ad-premium-title'>Premium Silver</p>
                  <p className='silver-ad-premium-price'>AED 100</p>
                </div>)}
              {isActiveGoldPlan && (
                <div className='days-amount-plan-container'>
                  <p className='day-ad-amount-title'>Premium Gold</p>
                  <p className='day-ad-amount-price'>AED 250</p>
                </div>)}
              {isActiveDiamondPlan && (
                <div className='days-amount-plan-container'>
                  <p className='day-ad-amount-title'>Premium Diamond</p>
                  <p className='day-ad-amount-price'>AED 500</p>
                </div>)}
              {planDetails.isSelectFeatureInCategory && (
                <div className='feature-category-amount-plan-container'>
                  <p className='feature-category-ad-amount-title'>2.5 Day Feature</p>
                  <p className='feature-category-ad-amount-price'>AED 100</p>
                </div>)}
              {planDetails.isSelectFeatureInSearchResults && (
                <div className='featured-results-amount-plan-container'>
                  <p className='featured-results-ad-amount-title'>Feature In Search Result</p>
                  <p className='featured-results-ad-amount-price'>AED 200</p>
                </div>)}
              <div className='vat-amount-plan-container'>
                <p className='vat-amount-title'>Vat 5%</p>
                <p className='vat-amount-price'>AED {vatAmount}</p>
              </div>
              {activeCouponDetils.length !== 0 &&
                (<div className='discount-amount-plan-container'>
                  <p className='day-ad-amount-title'>Discount <span style={{ color: 'blue' }}>{activeCouponDetils.map((each) => each.code)}</span><Button type="button" onClick={onClickRemoveDiscount} sx={{ p: 0 }}><IoMdClose /></Button></p>
                  <p className='day-ad-amount-price'>AED {activeCouponDetils.map((each) => each.price)}</p>
                </div>)
              }
            </div>
            <div className='total-amount-container'>
              <div className='total-amount-inner-container'>
                <h3 className='day-ad-total-amount-text'>Total</h3>
                <h3 className='day-ad-total-amount-price'>AED {planDetails.totalAmount}</h3>
              </div>
              <div className='confirm-check-box'>
              <FormControlLabel required control={<Checkbox />} label="I accepted all terms& Conditions" name='terms&conditions'  />
              </div>
              <div className='step-three-buttons-container'>
              <button type="button" className='step-three-back-button' onClick={()=> dispatch({type:'decreaseThePageCount', payload:1})}>Back</button>
              <button type="button" className='step-three-pay-button' onClick={sendPlanDetailsToReduxStore}>Pay</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default StepThree