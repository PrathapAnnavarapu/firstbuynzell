

import React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Footer from '../../Footer/footer'
import Header from '../../HeadSection/Header'
import { useNavigate } from 'react-router-dom';
import {useState, useEffect} from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";

import './savedCards.css'

const SavedCards = () =>{

    const navigate = useNavigate()

    const [savedCards, setSavesCards] = useState<any>([])
    console.log(savedCards)

    const visa = 'https://1000logos.net/wp-content/uploads/2021/11/VISA-logo-500x281.png'
 
    const jsonLoginDetails = localStorage.getItem('loginDetails')
    const parseLogin: any = JSON.parse(String(jsonLoginDetails))

    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" onClick={()=>navigate('/')}>
            Home
        </Link>,
        <Link
            underline="hover"
            key="2"
            color="inherit"           
            onClick={()=>navigate('/Settings')}
        >
            Settings
        </Link>,
        <Typography key="3" color="text.primary">
            Payments
        </Typography>,
    ];


    const savedCardDetais = async () => {

        const getUrl = `http://localhost:4000/SavedCardsList/${parseLogin.customer_id}`
        const options = {
            method: 'GET',
            // headers:{
            //     'Content-type': 'application/json',
            // // "x-api-key": "497a9dba-2e9f-4895-9357-9175a40bcb9e",
            // "Access-Control-Allow-Origin": "*",
            // "Access-Control-Allow-Credentials": "true",

            // }
        }

        const response = await fetch(getUrl, options)
        const data = await response.json()
        if (response.status === 200) {
            setSavesCards(data.cardsList)

        }
        if (response.status === 400) {
            console.log(data.message)
        }

    }

    useEffect(()=>{
        savedCardDetais()

    },[])


    const onDeleteSavedCard = async(Card) =>{
        const DeleteUrl = `http://localhost:4000/Delete/SavedCard/${Card.card_number}`
        const options = {
            method: 'DELETE',
            // headers:{
            //     'Content-type': 'application/json',
            // // "x-api-key": "497a9dba-2e9f-4895-9357-9175a40bcb9e",
            // "Access-Control-Allow-Origin": "*",
            // "Access-Control-Allow-Credentials": "true",

            // }
        }

        const response = await fetch(DeleteUrl, options)
        const data = await response.json()
      
        if (response.status === 200) {
            savedCardDetais()

        }
        if (response.status === 400) {
            console.log(data.message)

        }

    }


    return(
        <>
        <Header/>
        <div className='main-savedCards-container'>
                <div className='cards-ad-container'>ad</div>
                <div className='cards-bottom-container'>
                    <div className='cards-bread-crumbs'>
                        <Breadcrumbs
                            separator={<NavigateNextIcon fontSize="small" />}
                            aria-label="breadcrumb"
                            className='saved-cards-breadcrumbs-pointer'
                        >
                            {breadcrumbs}
                        </Breadcrumbs>
                    </div>                    
                    <div className='saved-cards-container'>
                        <h2 className='payments-heading'>Payments</h2>
                        <div className='saved-cards-list-main-container'>
                            <h5 className='saved-text-for-cards'>Saved</h5>
                            {savedCards.map((eachCard)=>(
                                <li className='settings-saved-card-container'>
                                <div className='settings-saved-card-inner-container'>
                                    <img src={visa} alt='saved-logo' className='saved-card-gateway-image' />
                                    <div className='settings-card-details-container'>
                                        <h5 className='card-number-last-digits'>Visa Ending in {eachCard.card_number.slice(12, 16)} </h5>
                                        <p className='expiry-date'>Expiry {eachCard.expiry_date}</p>
                                        <p className='default-set'>set as a Default <button type='button' className='edit-button'>Edit</button></p>
                                    </div>
                                    <div>
                                    </div>
                                </div>
                                <RiDeleteBin6Line className='delte-card-icon' onClick={()=>onDeleteSavedCard(eachCard)}/>
                            </li>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='saved-card-footer'>
                    <Footer/>
                </div>
            </div>
        </>
    )
}

export default SavedCards