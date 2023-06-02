import React from 'react'
import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack'
// import Button from '@mui/material/Button'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
// import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
import Button from '@mui/material/Button'
import { IoMdClose } from "react-icons/io"

import './step3.css'



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
interface discount { code: string, price: number }
function StepThree() {
  const [adValue, setAdValue] = React.useState<any>(30);
  const [isCheckedFeaturedCategory, setIsCheckedFeaturedCategory] = React.useState<boolean>(false)
  const [isCheckedFeaturedSeResult, setIsCheckedFeaturedSeResult] = React.useState<boolean>(false)
  const [isActiveSiverPlan, setIsActiveSiverPlan] = React.useState<boolean>(false)
  const [isActiveGoldPlan, setIsActiveGoldPlan] = React.useState<boolean>(false)
  const [isActiveDiamondPlan, setIsActiveDiamondPlan] = React.useState<boolean>(false)
  const [couponCodeInput, setCouponCodeInput] = React.useState<string>('')
  const [activeDiscountObject, setActiveDiscountObject] = React.useState<discount>()
  const [errorMsg, setErrorMsg] = React.useState<string>('')
  const [activePlan, setActivePlan] = React.useState<string>('')

  const subTotalPricesArray: any = [(adValue * 50)]
  isCheckedFeaturedCategory && subTotalPricesArray.push(100)
  isCheckedFeaturedSeResult && subTotalPricesArray.push(200)
  isActiveSiverPlan && subTotalPricesArray.push(100)
  isActiveGoldPlan && subTotalPricesArray.push(250)
  isActiveDiamondPlan && subTotalPricesArray.push(500)
  const subTotalAmount = subTotalPricesArray.reduce((accu, curr) => accu + curr)
  const vatAmount = Math.ceil((subTotalAmount * 5) / 100)
  const totalAmountArray = [subTotalAmount, vatAmount]
  const totalPrice = totalAmountArray.reduce((acc, cur) => acc + cur)
  const GrandTotalPrice = activeDiscountObject !== undefined ? totalPrice - activeDiscountObject.price : totalPrice



  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setAdValue(newValue);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAdValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleBlur = () => {
    if (adValue < 0) {
      setAdValue(0);
    } else if (adValue > 100) {
      setAdValue(100);
    }
  };

  const changeHandleFeatureCategory = () => {
    setIsCheckedFeaturedCategory((prev) => !prev)
  }

  const changeHandleFeatureSearchResult = () => {
    setIsCheckedFeaturedSeResult((prev) => !prev)
  }

  const handleSelectPlan = (plan) => {
    setActivePlan(plan)
    if (plan === 'Silver') {
      setIsActiveSiverPlan(true)
      subTotalPricesArray.push(100)
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
      const isCouponValid = discountCouponsList.find((eachCoupon) => eachCoupon.code === couponCodeInput)
      if (isCouponValid !== undefined) {
        setActiveDiscountObject(isCouponValid)
        setCouponCodeInput('')
        setErrorMsg('')
      } else {
        setErrorMsg('Invalid Coupon Code')
      }
    }
    return errorMsg
  }

  const onClickRemoveDiscount = () => {
    setActiveDiscountObject(undefined)
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
                    value={adValue}
                    size="small"
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    inputProps={{
                      step: 10,
                      min: 0,
                      max: 100,
                      type: 'number',
                      'aria-labelledby': 'input-slider',
                    }}
                  />
                </Grid>
                <Typography id="input-slider" gutterBottom>
                  {adValue <= 1 ? 'Day' : 'Days'}(<span style={{ color: 'blue', fontWeight: 500 }}>{adValue * 50}</span> AED)
                </Typography>
              </Stack>
            </div>
            <div className='no-of-days-ad-selection-slider-container'>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs>
                  <Slider
                    value={typeof adValue === 'number' ? adValue : 0}
                    onChange={handleSliderChange}
                    aria-labelledby="input-slider"
                  />
                </Grid>
              </Grid>
            </div>
            <div className='ads-feature-category-plan-container'>
              <div className='featured-category-plan-selection-checkbox-container'>
                <Stack direction={'row'} justifyContent={'space-between'} sx={{ width: 550, m: 0, p: 0 }}>
                  <FormControlLabel required control={<Checkbox />} label='Feature In Category' onChange={changeHandleFeatureCategory} />
                  <h5 >AED 100</h5>
                </Stack>
                <Stack>
                  <p style={{ margin: 0 }}>For 2.5 Days</p>
                </Stack>
              </div>
              <hr className='content-saparate-line'/>
              <div className='featured-category-plan-search-result-checkbox-container'>
                <Stack direction={'row'} justifyContent={'space-between'} sx={{ width: 550, m: 0 }}>
                  <FormControlLabel required control={<Checkbox />} label='Feature In Search Result' onChange={changeHandleFeatureSearchResult} />
                  <h5 >AED 200</h5>
                </Stack>
                <Stack>
                  <p style={{ margin: 0 }}>For 2.5 Days</p>
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
                // key={tier.title}
                // xs={12}
                // sm={tier.title === 'Enterprise' ? 12 : 6}
                // md={4}                      
                >
                  <Card className='ads-package-card-container'>
                    <CardHeader
                      // title={tier.title}
                      // subheader={tier.subheader}
                      titleTypographyProps={{ align: 'center' }}
                      action={tier.title === 'Pro' ? <StarIcon /> : <FormControlLabel required control={<Checkbox />} label={tier.title} key={tier.title} onChange={() => handleSelectPlan(tier.title)} checked={tier.title === activePlan} className='checkbox-input' />}
                      subheaderTypographyProps={{
                        align: 'center',
                      }}
                      sx={{
                        // backgroundColor: (theme) =>
                        //   theme.palette.mode === 'light'
                        //     ? theme.palette.grey[200]
                        //     : theme.palette.grey[700],
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
                        {/* <Typography variant="h6" color="text.secondary">
                        /mo
                      </Typography> */}
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
            <div className='ad-preview-container'>ad-preview</div>
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
                <p className='day-ad-amount-title'>{adValue} Day Ad</p>
                <p className='day-ad-amount-price'>AED {adValue * 50}</p>
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
              {isCheckedFeaturedCategory && (
                <div className='feature-category-amount-plan-container'>
                  <p className='feature-category-ad-amount-title'>2.5 Day Feature</p>
                  <p className='feature-category-ad-amount-price'>AED 100</p>
                </div>)}
              {isCheckedFeaturedSeResult && (
                <div className='featured-results-amount-plan-container'>
                  <p className='featured-results-ad-amount-title'>Feature In Search Result</p>
                  <p className='featured-results-ad-amount-price'>AED 200</p>
                </div>)}
              <div className='vat-amount-plan-container'>
                <p className='vat-amount-title'>Vat 5%</p>
                <p className='vat-amount-price'>AED {vatAmount}</p>
              </div>
              {activeDiscountObject !== undefined &&
                (<div className='discount-amount-plan-container'>
                  <p className='day-ad-amount-title'>Discount <span style={{ color: 'blue' }}>{activeDiscountObject.code}</span><Button type="button" onClick={onClickRemoveDiscount} sx={{ p: 0 }}><IoMdClose /></Button></p>
                  <p className='day-ad-amount-price'>AED {activeDiscountObject.price}</p>
                </div>)
              }
            </div>
            <div className='total-amount-container'>
              <div className='total-amount-inner-container'>
                <h3 className='day-ad-total-amount-text'>Total</h3>
                <h3 className='day-ad-total-amount-price'>AED {GrandTotalPrice}</h3>
              </div>
            </div>
            {/* <Button type="button" variant='contained'>Total Pay</Button> */}
          </div>
        </div>
      </div>
    </div>

  )
}
export default StepThree