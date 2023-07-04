import React from "react"
import Logo from '../../assets/Logo.svg'


import './CorporaterHeader.css'

const CorporaterHeader = () =>{
    return(
        <div className="join-corporate-header-container">
                <div className="join-corporate-header-inner-container">
                    <img src={Logo} className="'logo" alt="logo" />
                    <h3 className="corporate-Header-heading">Join Corporate</h3>
                    <button type='button' className="corporate-cancel-button">Cancel</button>
                </div>
            </div>
    )
}


export default CorporaterHeader