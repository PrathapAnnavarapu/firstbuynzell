import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import Button from '@mui/material/Button'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import HeadSection from '../HeadSection/Header'
import { CgTrash } from "react-icons/cg";
import { BsChatLeft } from "react-icons/bs";
import './Fav.css'

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

const myFavCategories = [{ name: 'Ads', id: 1 }, { name: 'Seller', id: 2 }]
function Faviourites(props) {
    const [activeFavId, setActiveFavId] = useState<any>()
    const dispatch = useDispatch()
    const faviorites: any = useSelector((state:any) => state.FavList)
    const Sellers: any = []

    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
            Home
        </Link>,
        <Link
            underline="hover"
            key="2"
            color="inherit"
            href="/material-ui/getting-started/installation/"
            onClick={handleClick}
        >
            Favorites
        </Link>
    ];

    return (
        <>
            <HeadSection />

            <div className="fav-items-main-container">
                <div className="fav-item-ad-container">ad</div>
                <div className="fa-container">
                    <div className='fa-bread-crumbs'>
                        <Breadcrumbs
                            separator={<NavigateNextIcon fontSize="small" />}
                            aria-label="breadcrumb"
                        >
                            {breadcrumbs}
                        </Breadcrumbs>
                    </div>
                    <div className="favourites-list-container">
                        <div className="fav-head-buttons-container">
                            <h2 className="favourites-heading">Favorites</h2>
                            <div className="fav-items-sellers-button-container">
                                {myFavCategories.map((categories) => (
                                    <button type="button" key={categories.id} onClick={() => setActiveFavId(categories.id)} className={categories.id === activeFavId ? 'activeMyFavCategoryButton' : 'deactiveMyFavCategoryButton'}>{categories.name} ({categories.id === 1 ? (faviorites.length) : (Sellers.length)})</button>
                                ))}
                            </div>
                        </div>
                        <div className="fav-cars-list-container">
                            {activeFavId === 1 ?
                                (faviorites.length === 0 ? <h1 className="no-fav-heading-text-center-align">No Favourite Items</h1> :
                                    //   <ul className="fav-list">
                                    (faviorites.map((eachData) => (
                                        <div className='fav-card'>
                                            <img src={eachData.images.map((img) => img.src)[0]} alt="img" className="fav-image" />
                                            <div className="fav-bottom-container">
                                                <div className="fav-details">
                                                    <h4 className='price'> AED {eachData.price}</h4>
                                                    <h6 className='title'>{eachData.title}</h6>
                                                    <h6 className="location">Location</h6>
                                                    <button type="button" className="fav-chat"> <BsChatLeft />Chat</button>
                                                    {/* <hr style={{ width: 160, color: 'lightgrey', margin: 0, order:4 }} /> */}
                                                </div>
                                                <div className="remove-button-container">
                                                    <button type="button" className='remove' onClick={() => dispatch({ type: 'RemoveFav', payload: eachData.listing_id })}><span className="delete-icon"><CgTrash /></span> Remove</button>
                                                </div>
                                            </div>
                                        </div>
                                    )))
                                    //   </ul>
                                ) : (
                                    Sellers.length === 0 ? <h1 style={{ margin: 0, display: "flex", flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: 1180, height: 520 }}>No Sellers</h1> :
                                        Sellers.map((eachData) => (
                                            <div className='fav-card'>
                                                <img src={eachData.images.map((img) => img.src)[0]} alt="img" className="fav-image" />
                                                <div className="fav-details">
                                                    <h4 className='price'> AED {eachData.price}</h4>
                                                    <h6 className='title'>{eachData.title}</h6>
                                                    <h6 className="location">Location</h6>
                                                    <Button type="button" sx={{ m: 0 }} > <BsChatLeft />Chat</Button>
                                                </div>
                                                <hr style={{ width: 160, color: 'lightgrey', margin: 0 }} />
                                                <button type="button" className='remove' onClick={() => dispatch({ type: 'RemoveFav', payload: eachData.listing_id })}><CgTrash /> Remove</button>
                                            </div>
                                        )))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Faviourites