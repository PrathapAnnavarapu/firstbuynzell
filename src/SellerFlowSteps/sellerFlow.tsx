import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack'
import StepOne from '../SellerFlowSteps/Step1'
import StepTwo from '../SellerFlowSteps/Step2'
import StepThree from '../SellerFlowSteps/Step3'
import StepFour from '../SellerFlowSteps/Step4'

const steps = ['Enter Ad Details', 'Enter Your Details', 'Select Your Paln', 'Payment'];



export default function SellerFlowSteps() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set<number>());

    const isStepOptional = (step: number) => {
        return step === 1;
    };

    const isStepSkipped = (step: number) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <>
            <Stepper activeStep={activeStep} sx={{ width: 700 }}>
                {steps.map((label, index) => {
                    const stepProps: { completed?: boolean } = {};
                    const labelProps: {
                        optional?: React.ReactNode;
                    } = {};
                    if (isStepOptional(index)) {
                        labelProps.optional = (
                            <Typography variant="caption">Optional</Typography>
                        );
                    }
                    if (isStepSkipped(index)) {
                        stepProps.completed = false;
                    }
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            
            <Stack direction={'column'}>
                {activeStep === 0 && (
                    <>
                        <StepOne />
                        <Stack direction={'row'} justifyContent={'center'} sx={{ pl: 5, m: 1, position: 'absolute', top: 1380, left:500 }}>
                            {activeStep === steps.length ? (
                                <React.Fragment>
                                    <Typography sx={{ mt: 2, mb: 1 }}>
                                        All steps completed - you&apos;re finished
                                    </Typography>
                                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                        <Box sx={{ flex: '1 1 auto' }} />
                                        <Button onClick={handleReset}>Reset</Button>
                                    </Box>
                                </React.Fragment>
                            ) : (
                                <React.Fragment>
                                    {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}
                                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                        <Button
                                            color="inherit"
                                            disabled={activeStep === 0}
                                            onClick={handleBack}
                                            sx={{ mr: 1, width: 150 }}
                                            variant='outlined'
                                        >
                                            Back
                                        </Button>
                                        <Box sx={{ flex: '1 1 auto', justifyContent:'space-between', width:50 }} />
                                        {/* {isStepOptional(activeStep) && (
                                            <Button color="inherit" onClick={handleSkip} sx={{ mr: 1, }}>
                                                Skip
                                            </Button>
                                        )} */}
                                        <Button onClick={handleNext} variant='contained' sx={{ width: 150, backgroundColor:'black', color:'white' }}>
                                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                        </Button>
                                    </Box>
                                </React.Fragment>
                            )}
                        </Stack>
                    </>)}

                {activeStep === 1 && (<>
                    <StepTwo />
                    <Stack direction={'row'} justifyContent={'center'} sx={{ pl: 3, m: 1, position: 'absolute', top: 1230, left:450 }}>
                        {activeStep === steps.length ? (
                            <React.Fragment>
                                <Typography sx={{ mt: 2, mb: 1 }}>
                                    All steps completed - you&apos;re finished
                                </Typography>
                                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                    <Box sx={{ flex: '1 1 auto' }} />
                                    <Button onClick={handleReset}>Reset</Button>
                                </Box>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}
                                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                    <Button
                                        color="inherit"
                                        // disabled={activeStep === 0}
                                        onClick={handleBack}
                                        sx={{ mr: 1, width: 150 }}
                                        variant='outlined'
                                    >
                                        Back
                                    </Button>
                                    <Box sx={{ flex: '1 1 auto' }} />
                                    {/* {isStepOptional(activeStep) && (
                                        <Button color="inherit" onClick={handleSkip} sx={{ mr: 1, }}>
                                            Skip
                                        </Button>
                                    )} */}
                                    <Button onClick={handleNext} variant='contained' sx={{ width: 150,backgroundColor:'black', color:'white'}}>
                                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                    </Button>
                                </Box>
                            </React.Fragment>
                        )}
                    </Stack>
                </>
                )}
                {activeStep === 2 && (
                    <>
                        <StepThree />
                        <Stack direction={'row'} justifyContent={'center'} sx={{ pl: 3, m: 1, position: 'absolute', top: 1590, left: 450 }}>
                            {activeStep === steps.length ? (
                                <React.Fragment>
                                    <Typography sx={{ mt: 2, mb: 1 }}>
                                        All steps completed - you&apos;re finished
                                    </Typography>
                                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                        <Box sx={{ flex: '1 1 auto' }} />
                                        <Button onClick={handleReset}>Reset</Button>
                                    </Box>
                                </React.Fragment>
                            ) : (
                                <React.Fragment>
                                    {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}
                                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                        <Button
                                            color="inherit"
                                            // disabled={activeStep === 0}
                                            onClick={handleBack}
                                            sx={{ mr: 1, width: 150 }}
                                            variant='outlined'
                                        >
                                            Back
                                        </Button>
                                        <Box sx={{ flex: '1 1 auto' }} />
                                        {isStepOptional(activeStep) && (
                                            <Button color="inherit" onClick={handleSkip} sx={{ mr: 1, }}>
                                                Skip
                                            </Button>
                                        )}
                                        <Button onClick={handleNext} variant='contained' sx={{ width: 150,backgroundColor:'black', color:'white' }}>
                                            {activeStep === steps.length - 1 ? 'Pay' : 'Next'}
                                        </Button>
                                    </Box>
                                </React.Fragment>
                            )}
                        </Stack>
                    </>
                )}
                {activeStep === 3 && (
                    <>
                        <StepFour />
                        <Stack direction={'row'} justifyContent={'center'} sx={{ pl: 5, m: 1, position: 'absolute', top: 1200, left:450 }}>
                            {activeStep === steps.length ? (
                                <React.Fragment>
                                    <Typography sx={{ mt: 2, mb: 1 }}>
                                        All steps completed - you&apos;re finished
                                    </Typography>
                                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                        <Box sx={{ flex: '1 1 auto' }} />
                                        <Button onClick={handleReset}>Reset</Button>
                                    </Box>
                                </React.Fragment>
                            ) : (
                                <React.Fragment>
                                    {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}
                                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                        <Button
                                            color="inherit"
                                            // disabled={activeStep === 0}
                                            onClick={handleBack}
                                            sx={{ mr: 1, width: 150 }}
                                            variant='outlined'
                                        >
                                            Back
                                        </Button>
                                        <Box sx={{ flex: '1 1 auto' }} />
                                        {isStepOptional(activeStep) && (
                                            <Button color="inherit" onClick={handleSkip} sx={{ mr: 1, }}>
                                                Skip
                                            </Button>
                                        )}
                                        <Button onClick={handleNext} variant='contained' sx={{ width: 150,backgroundColor:'black', color:'white' }}>
                                            {activeStep === steps.length - 1 ? 'Pay' : 'Next'}
                                        </Button>
                                    </Box>
                                </React.Fragment>
                            )}
                        </Stack>
                    </>
                )}
            </Stack>


        </>

    );
}






