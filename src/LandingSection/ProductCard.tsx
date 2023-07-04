
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { BsChatLeft } from "react-icons/bs";
import { GrFavorite } from "react-icons/gr";
import { MdFavorite, MdLocationPin } from "react-icons/md";
import Stack from '@mui/material/Stack'

import './ProductCard.css'

const ProductCard = (props) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()   
    const { eachData } = props
    const { promotions } = eachData
    const FaviouritesList:any = useSelector((state:any) => state.FavList)
   

   
    const isItemIsAvailableInFav:any = FaviouritesList.some((each) => each.listing_id === eachData.listing_id)
    
    const isFeaturedItem:any = promotions.some((each) => each === 'featured')
 




    const onClickSaveOrRemoveToFaviourate = (eachData) => {
        if (isItemIsAvailableInFav) {
            dispatch({ type: 'RemoveFav', payload: eachData.listing_id })
        } else {
            dispatch({
                type: 'AddToList',
                payload: eachData
            })
        }
    }

    const OnClickEachItem = (eachData) =>{
       
        if (eachData.category === 'Motors'){
            window.scrollTo(0, 0)
            navigate('/MotorsListItemDetails/:id')
        }
        // else if(eachData.categories.map((each)=> each.name === 'Electronicd')[0]){
        //     window.scrollTo(0, 0)
        //     navigate('/ElectronicsListItemDetails')
        // }
        // else if (eachData.categories.map((each)=> each.name === 'Property')[0]){
        //     window.scrollTo(0, 0)
        //     navigate('/PropertyListItemDetails')
        // }

    }

    

    return (
        <li className='product-card'>
            <div style={{ backgroundImage: `url(${eachData.images.map((eachObject) => eachObject.src)[0]})`, backgroundSize: 'cover', backgroundPosition: 'center', width: 233.6, height: 136, margin: 0, borderRadius: 4 }} key={eachData.listing_id} >
                    {isFeaturedItem && <h6 className='feature-badge' key={eachData.listing_id} style={{ margin: 0 }}>FEATURED</h6>}
                        {isItemIsAvailableInFav ?
                            (< button type="button" key={eachData.listing_id} onClick={() => onClickSaveOrRemoveToFaviourate(eachData)} className='activeLove' ><MdFavorite /></button>
                            ) : (< button type="button" key={eachData.listing_id} onClick={() => onClickSaveOrRemoveToFaviourate(eachData)} className='deactiveLove' ><GrFavorite /></button>)
                        }                   
            </div>
            <div key={eachData.listing_id} onClick={()=>OnClickEachItem(eachData)}>
                <div className='detaisl-container'>
                    <h4 className='product-price'> AED {eachData.price}</h4>
                    <div className='product-title-container'>
                    <h6 className='product-image-title'>{eachData.title}</h6>
                    </div>
                    <div className='product-location-container'>
                    <h6 className='product-location-heading'><MdLocationPin />Location</h6>
                    </div>
                    <div className='chat-container'>
                        <button type="button" className='chat-button' > <Stack><BsChatLeft className='chat-icon' /></Stack>Chat</button>
                    </div>
                </div>
            </div>
        </li>
    )

}
export default ProductCard

// style={{width:32, height:32, borderRadius:32,padding:5,backgroundColor:'white',cursor:'pointer'}}