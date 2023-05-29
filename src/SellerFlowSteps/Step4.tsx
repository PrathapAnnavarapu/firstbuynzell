import React from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import './step4.css'

const PaymentOptions = ['Credit or debit Card', 'Apple pay']

const mastro ='https://www.mastercard.com/content/dam/public/brandcenter/assets/images/logos/mclogo-for-footer.svg'
const visa = 'https://1000logos.net/wp-content/uploads/2021/11/VISA-logo-500x281.png'
const applePay = 'data:image/png;base64,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'
function StepFour() {

    return (
        <div className='ads-seller-payments-card-outer-contaier'>
            <div className='ads-seller-payments-cards-inner-container'>
                <div className='ads-payment-card-details-contaier'>
                    <div className='payment-title-container'>
                        <h2 className='payment-title'>Payments</h2>
                        <p className='fourth-step-heading'>step 4/4</p>
                    </div>
                    <div className='saved-cards-info-container'>Saved</div>
                    <div className='payment-card-input-fields-container'>
                        <div className='pay-through-heading-container'>
                            <h4 className='paythrough-heading'>Pay Through</h4>
                            <div className='gate-way-icons-container'>
                                <img src={mastro} alt ='mastro' className='gate-way-icon'/>
                                <img src={visa} alt ='visa' className='gate-way-icon'/>
                                <img src={applePay} alt ='applepay' className='gate-way-icon'/>
                            </div>
                        </div>
                        <div className='pay-through-dropdown-container'>
                            <Autocomplete
                                disablePortal
                                id="paythrough"
                                options={PaymentOptions}
                                sx={{ width: 452 }}
                                renderInput={(params) => <TextField {...params} placeholder="Credit or debit Card" />}
                            />
                        </div>
                        <div className='card-num-name-input-fields-container'>
                            <div className='name-on-card-input-field-container'>
                                <label htmlFor='nameONCard' className='details-label'>Name on Card</label>
                                <TextField id="nameONCard" variant="outlined" type='text' sx={{ width: 452 }} />
                            </div>
                            <div className='card-number-input-field-container'>
                                <label htmlFor='cardnumber' className='card-number--label'>Card Number</label>
                                <TextField id="cardnumber" variant="outlined" type='number' sx={{ width: 452, m: 0 }} />
                            </div>
                            <div className='cvv-expiry-container'>
                                <div className='expiry-container'>
                                    <label htmlFor='Expiry' className='details-label'>Expiry</label>
                                    <TextField id="Expiry" variant="outlined" type='text' sx={{ width: 140 }} />
                                </div >
                                <div className='cvv-container'>
                                    <label htmlFor='cvv' className='details-label'>CVV</label>
                                    <TextField id="cvv" variant="outlined" type='number' sx={{ width: 140 }} />
                                </div>
                            </div>
                            <div className='save-card-check-box'>
                                <FormControlLabel required control={<Checkbox />} label="Save my Card" />
                            </div>
                            <div className='pay-button-container'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default StepFour