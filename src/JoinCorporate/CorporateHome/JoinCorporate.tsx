import React from "react"
import { useNavigate } from "react-router-dom"
import Logo from '../../assets/Logo.svg'

import HomePageShot from '../../assets/3_2 screen mockup.svg'
import UsedCar from '../../assets/usedCars.svg'
import spareParts from '../../assets/usedSpareParts.svg'
import Property from '../../assets/corporate-property.svg'
import community from '../../assets/corporate-community.svg'
import Footer from '../../Footer/footer'
import { AiOutlineStar, AiOutlineControl } from "react-icons/ai";
import { RiWechatLine } from "react-icons/ri";
import { BiRightArrowAlt, BiLeftArrowAlt } from "react-icons/bi";
// import { LuSettings2 } from "react-icons/lu";

import './JoinCorporate.css'

const JoinCorporate = () => {

    const navigate = useNavigate()

    return (
        <>
             <div className="join-corporate-header-container">
                <div className="join-corporate-header-inner-container">
                    <img src={Logo} className="'logo" alt="logo" />
                    <div className="corporate-register-login-buttons-container">
                        <button type='button' className="corporate-register-button" onClick={()=> navigate('/Join-Corporate/Register')}>Register</button>
                        <button type='button' className="corporate-login-button">Login</button>
                    </div>
                </div>
            </div>
            <div className="join-corporate-main-container">
                <div className="hero-header-dsection-container">
                    <div className="hero-header-section-inner-container">
                        <div className="hero-header-section-heading-suporting-text-container">
                            <h3 className="hero-header-main-text">Become a Corporate Seller to<br />simplify your sales ads and listings today!</h3>
                            <p className="hero-header-subtext-para">With Buynzell's corporate services, you can streamline the process of creating<br />and listing your sales ads, saving you time and effort.</p>
                        </div>
                        <button type='button' className="get-start-button"  onClick={()=> navigate('/Join-Corporate/Register')}>Get Started</button>
                    </div>
                    <div className="d-section-container"></div>
                    <div className="hero-header-bottom-section-container">
                        <div className="hero-header-bottom-section-inner-container">
                            <div className="hero-header-bottom-section-videoplayer-container">

                            </div>
                        </div>
                    </div>
                </div>
                <hr className="corporate-hr-line" />
                <div className="corporate-feature-section">
                    <div className="corporate-feature-text-container">
                        <div className="corporate-feature-heading-text-subtext-container">
                            <h3 className="corporate-feature-heading">Benefits of Corporate Seller</h3>
                            <p className="coporate-feature-subheading-description">Description</p>
                        </div>
                    </div>
                    <div className="corporate-features-description-container">
                        <div className="corporate-feature-description-home-pic-container">
                            <div className="corporate-feature-description-home-inner-pic-container">
                                <img src={HomePageShot} alt='corporate-home' className="corporate-home-pic" />
                            </div>
                        </div>
                        <div className="corporate-features-description-content-main-container">
                            <div className="corporate-feature-description1">
                                <div className="corporate-feature-icons-container"><RiWechatLine className="corpotate-icons" /></div>
                                <h4 className="corporate-description-title">Advanced Dashboard</h4>
                                <p className="corporate-description-para">Give your team the autonomy they need with access to as many cards as they need. Authorise purchases with a click. Simple.</p>
                            </div>
                            <div className="corporate-feature-description1">
                                <div className="corporate-feature-icons-container"><AiOutlineControl className="corpotate-icons" /></div>
                                <h4 className="corporate-description-title">Complete Control</h4>
                                <p className="corporate-description-para">An all-in-one platform that helps you balance everything your team need to be happy and your finances in order.</p>
                            </div>
                            <div className="corporate-feature-description1">
                                <div className="corporate-feature-icons-container"><AiOutlineStar className="corpotate-icons" /></div>
                                <h4 className="corporate-description-title">Ratings and Reviews</h4>
                                <p className="corporate-description-para">Every card comes with configurable spending limits, purchase restrictions, and cancellations for each employee and team.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="corporate-hr-line" />
                <div className="corporate-testmonial-section">
                    <div className="corporate-testmonial-inner-section">
                        <div className="corporate-testmonial-heading-container">
                            <h4 className="corporate-feature-heading">Choose your Business</h4>
                            <p className="coporate-feature-subheading-description">Description</p>
                        </div>
                        <div className="corporate-testimonial-catageories-list-container">
                            <div className="corporate-testimonial-categories-card">
                                <img src={UsedCar} alt='usedCar' className="corporate-product-image" />
                                <div className="corporate-testimonial-categories-description-container">
                                    <h3 className="testmionial-categories-heading">Used Cars Trading</h3>
                                    <p className="testmionial-categories-para">Description</p>
                                    <button type="button" className="discover-button">Discover<BiRightArrowAlt /></button>
                                </div>
                            </div>
                            <div className="corporate-testimonial-categories-card">
                                <img src={spareParts} alt='usedCar' className="corporate-product-image" />
                                <div className="corporate-testimonial-categories-description-container">
                                    <h3 className="testmionial-categories-heading">Used Auto Part Trading</h3>
                                    <p className="testmionial-categories-para">Description</p>
                                    <button type="button" className="discover-button">Discover<BiRightArrowAlt /></button>
                                </div>
                            </div>
                            <div className="corporate-testimonial-categories-card">
                                <img src={Property} alt='usedCar' className="corporate-product-image" />
                                <div className="corporate-testimonial-categories-description-container">
                                    <h3 className="testmionial-categories-heading">Property</h3>
                                    <p className="testmionial-categories-para">Description</p>
                                    <button type="button" className="discover-button">Discover<BiRightArrowAlt /></button>
                                </div>
                            </div>
                            <div className="corporate-testimonial-categories-card">
                                <img src={community} alt='usedCar' className="corporate-product-image" />
                                <div className="corporate-testimonial-categories-description-container">
                                    <h3 className="testmionial-categories-heading">Community</h3>
                                    <p className="testmionial-categories-para">Description</p>
                                    <button type="button" className="discover-button">Discover<BiRightArrowAlt /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-categories-nav-buttons-container">
                        <div className="left-arrow-container">
                            <BiLeftArrowAlt className="arrow-icon" />
                        </div>
                        <div className="left-arrow-container">
                            <BiRightArrowAlt className="arrow-icon" />
                        </div>
                    </div>
                </div>
                <hr className="corporate-hr-line" />
                <div className="corporate-why-us-section">
                    <div className="why-us-heading-container">
                        <h3 className="why-us-heading-text">Why Us</h3>
                        <p  className="why-us-para-text">Here’s the three reason to consider us</p>
                    </div>
                    <div className="why-us-description-main-outer-container">
                        <div className="why-us-reasons-container">
                            <div className="why-us-first">
                                <div className="why-us-avatar"><RiWechatLine className="why-us-icon" /></div>
                                <div className="why-us-description">
                                    <h4 className="why-us-reason-title">Simplified Ads Posting</h4>
                                    <p className="why-us-reason-para">Simplify ad posting with our user-friendly platform. Create and post ads in just a few clicks and reach your target audience quickly. Say goodbye to complicated forms and confusing interfaces - start seeing results today!</p>
                                </div>
                            </div>
                            <div className="why-us-first">
                                <div className="why-us-avatar"><RiWechatLine className="why-us-icon" /></div>
                                <div className="why-us-description">
                                    <h4 className="why-us-reason-title">Make Smarter Decisions</h4>
                                    <p className="why-us-reason-para">Every card comes with configurable spending limits, purchase restrictions, and cancellations for each employee and team.</p>
                                </div>
                            </div>
                            <div className="why-us-first">
                                <div className="why-us-avatar"><RiWechatLine className="why-us-icon" /></div>
                                <div className="why-us-description">
                                    <h4 className="why-us-reason-title">Encourage Responsible Buying and Selling</h4>
                                    <p className="why-us-reason-para">Join us in promoting responsible buying and selling. We prioritize ethical and sustainable practices on our platform. Together, we can create a marketplace that benefits everyone while making a positive impact on the world.</p>
                                </div>
                            </div>
                        </div>
                        <div className="why-us-image-container">
                        </div>
                    </div>
                </div>
                <hr className="corporate-hr-line" />
                <div className="corporate-contact-sales-container">
                    <div className="corporate-contact-sales-inner-container">
                        <div className="contact-sales-heading-container">
                            <h4 className="contact-sales-heading">Join over 4,000+ Traders  growing  with Buynzell</h4>
                            <button type="button" className="contact-sales-button">Contact Sales</button>
                        </div>
                        <div className="sales-partners-container">
                            Sales Partners
                        </div>
                    </div>
                </div>
                <div className="corporate-footer">
                    <Footer />
                </div>
            </div>
        </>
    )

}

export default JoinCorporate