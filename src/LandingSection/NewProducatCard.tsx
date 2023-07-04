import React from 'react'
import { MdFavorite, MdLocationPin } from "react-icons/md";
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack'
import { BsChatLeft } from "react-icons/bs";
import { GrFavorite } from "react-icons/gr";

const NewProducatCard = (props:any)=>{

    const navigate = useNavigate()
    const dispatch = useDispatch()   
    const { newData } = props
    const { promotions } = newData
    const FaviouritesList:any = useSelector((state:any) => state.FavList)

   console.log(newData)

   const thumbnailUrl = `http://localhost:4000/${[newData.photos.split(',')].map((each)=> each[0])}`
   
 
   
    const isItemIsAvailableInFav:any = FaviouritesList.some((each) => each.listing_id === newData.listing_id)
    
    // const isFeaturedItem:any = promotions.some((each) => each === 'featured')
 




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

    const OnClicKItem = (eachData) =>{
       
        if (eachData.category === 'motors'){
            // window.scrollTo(0, 0)
            navigate(`/MotorsListItemDetails/${eachData.post_ad_id}`)
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


    return(
        <li className='product-card'>
            <div style={{ backgroundImage: `url(${thumbnailUrl})`, backgroundSize: 'cover', backgroundPosition: 'center', width: 233.6, height: 136, margin: 0, borderRadius: 4 }} key={newData.listing_id} >
                    {/* {isFeaturedItem && <h6 className='feature-badge' key={newData.listing_id} style={{ margin: 0 }}>FEATURED</h6>} */}
                        {isItemIsAvailableInFav ?
                            (< button type="button" key={newData.listing_id} onClick={() => onClickSaveOrRemoveToFaviourate(newData)} className='activeLove' ><MdFavorite /></button>
                            ) : (< button type="button" key={newData.listing_id} onClick={() => onClickSaveOrRemoveToFaviourate(newData)} className='deactiveLove' ><GrFavorite /></button>)
                        }                   
            </div>
            <div key={newData.listing_id} onClick={()=>OnClicKItem(newData)}>
                <div className='detaisl-container'>
                    <h4 className='product-price'> AED {newData.price}</h4>
                    <div className='product-title-container'>
                    <h6 className='product-image-title'>{newData.title}</h6>
                    </div>
                    <div className='product-location-container'>
                    <h6 className='product-location-heading'><MdLocationPin />{newData.city}.{newData.region}.{newData.country}</h6>
                    </div>
                    <div className='chat-container'>
                        <button type="button" className='chat-button' > <Stack><BsChatLeft className='chat-icon' /></Stack>Chat</button>
                    </div>
                </div>
            </div>
        </li>

    )
}
export default NewProducatCard