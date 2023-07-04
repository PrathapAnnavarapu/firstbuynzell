import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import StepOne from '../SellerFlowSteps/Step1'
import StepTwo from '../SellerFlowSteps/Step2';
import StepThree from '../SellerFlowSteps/Step3';
import StepFour from '../SellerFlowSteps/Step4';


import './newSellerFlow.css'

const steps = [
  
  'Create an ad ',
  'Add User Details',
  'Select Plan',
  'Payment'
];

export default function HorizontalLabelPositionBelowStepper() {

const dispatch = useDispatch()

 
  const jsonLoginDetails = localStorage.getItem('loginDetails')
  const parseLogin: any = JSON.parse(String(jsonLoginDetails))


  const count = useSelector((state:any)=> state.activePageCount)
 
  
  useEffect(()=>{
    setActiveStep(count)
  },[count])


    const [activeStep, setActiveStep] = React.useState<any>();  
  

    
   
  // const [skipped, setSkipped] = React.useState(new Set<number>());

  // const isStepOptional = (step: number) => {
  //   return step === 1;
  // };

  // const isStepSkipped = (step: number) => {
  //   return skipped.has(step);
  // };

  // const handleNext = () => {
  //   let newSkipped = skipped;
  //   if (isStepSkipped(activeStep)) {
  //     newSkipped = new Set(newSkipped.values());
  //     newSkipped.delete(activeStep);
  //   }

  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  //   setSkipped(newSkipped);
  // };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

  // const handleSkip = () => {
  //   if (!isStepOptional(activeStep)) {
  //     // You probably want to guard against something like this,
  //     // it should never occur unless someone's actively trying to break something.
  //     throw new Error("You can't skip a step that isn't optional.");
  //   }

  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  //   setSkipped((prevSkipped) => {
  //     const newSkipped = new Set(prevSkipped.values());
  //     newSkipped.add(activeStep);
  //     return newSkipped;
  //   });
  // };

  // const handleReset = () => {
  //   setActiveStep(0);
  // };


  const getadUserDetails = async()=>{
    const url = `http://localhost:4000/registerUserDetails/${parseLogin.customer_id}`
    const options={
        method:'GET'
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.status === 200) {       
        {data.list.map((each)=> setActiveStep(each.active_page_step))}
        dispatch({type:'InAddDBCount', payload:data.list.map((each)=> each.active_page_step)[0]})

    }
    else {
        console.log(data.message)
    }    
}


useEffect(()=>{
    getadUserDetails()   
},[])






  return (
    <>
      <div className='seller-flow-steps-main-container'>
          <Box sx={{ width: '70%', m:1 , alignContent:'center'}}>
          <Stepper activeStep={activeStep}>
              {steps.map((label, index) => {
                const stepProps: { completed?: boolean } = {};
                const labelProps: {
                  optional?: React.ReactNode;
                } = {};
                // if (isStepOptional(index)) {
                //   labelProps.optional = (
                //     <Typography variant="caption">Optional</Typography>
                //   );
                // }
                // if (isStepSkipped(index)) {
                //   stepProps.completed = false;
                // }
                return (
                  <Step key={label} {...stepProps}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
          </Box>  
          {activeStep === 0 && <StepOne value={0}/> }
          {activeStep === 1 && <StepTwo/> }
          {activeStep === 2 && <StepThree/> }
          {activeStep === 3 && <StepFour/> }    
    </div>
    </>
  );
}