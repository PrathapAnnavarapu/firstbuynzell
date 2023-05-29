import React, { useState } from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { BsArrowLeftShort } from "react-icons/bs";
import HeadSection from '../../HeadSection/Header'
import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import './index.css'

const faqs = [{ question: 'Is there a free trial available?', answer: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.', id: 1 },
{ question: 'Can I change my plan later?', answer: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.', id: 2 },
{ question: 'Can other info be added to an invoice?', answer: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.', id: 3 },
{ question: 'How does billing work?', answer: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.', id: 4 },
{ question: 'How do I change my account email?', answer: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.', id: 5 }
]



const Faq = () => {
    const navigate = useNavigate()
    const [activeFaq, SetActiveFaq] = useState<any>()

    const handleClick = (key)=>{
        if (key === 1){
            navigate('/')
        }
        else if(key === 2){
            navigate('/Settings')
        }

    }

    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="" onClick={()=>handleClick(1)}>
            Home
        </Link>,
        <Link
            underline="hover"
            key="2"
            color="inherit"
            href=""
            onClick={()=>handleClick(2)}
        >
            Settings
        </Link>,
        <Typography key="3" color="text.primary">
            FAQ's
        </Typography>,
    ];

    return (
        <>
            <HeadSection />
            <div className='main-Faq-container'>
                <div className='faq-ad-container'>ad</div>
                <div className='faq-bottom-container'>
                    <div className='faq-bread-crumbs'>
                        <Breadcrumbs
                            separator={<NavigateNextIcon fontSize="small" />}
                            aria-label="breadcrumb"
                        >
                            {breadcrumbs}
                        </Breadcrumbs>
                    </div>
                    <div className='faq-to-settings'>
                        <button type="button" className='faq-back-button' onClick={() => navigate('/Settings')}><BsArrowLeftShort />Settings</button>
                    </div>
                    <div className='faq-container'>
                        <h2 className='faq-heading'>FAQ's</h2>
                        <div className="faqs-container">
                            <Stack direction={'column'} >
                                {faqs.map((each) => (
                                    <>
                                        <hr style={{ width: 550, color: 'lightgray', margin: 5 }} />
                                        <Stack direction={'column'} >
                                            <Stack direction={'row'} justifyContent={'space-between'} sx={{ width: 550, p:2 }}>
                                                <h3 className='Faq-question'>{each.question}</h3>
                                                {each.id === activeFaq ? (
                                                    <button type="button" style={{ borderStyle: 'none', backgroundColor: 'transparent', fontSize: 20, color: 'blue' }} onClick={() => SetActiveFaq(null)}><AiOutlineMinusCircle /></button>
                                                ) : (<button type="button" style={{ borderStyle: 'none', backgroundColor: 'transparent', fontSize: 20, color: 'blue' }} onClick={() => SetActiveFaq(each.id)}><AiOutlinePlusCircle /></button>
                                                )}
                                            </Stack>
                                            {each.id === activeFaq && (<p className="faq-answer">{each.answer}</p>)}
                                        </Stack>
                                    </>
                                ))}
                            </Stack>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Faq