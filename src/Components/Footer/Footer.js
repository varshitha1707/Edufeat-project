import React from 'react'
import './Footer.css'
import logo from  '../../Assets/edufeat-logo.png'
import { Container } from '@mui/material'

// improve on the css
function Footer() {
    return (
            <Container className="footer">
                <div className="footer-main">
                <div className="footer-container1">
                    <div className="footer-logo">
                        <img src={logo} alt='' />
                    </div>
                    <div className="footer-column">
                        <div className="footer-title">
                            Company
                        </div>
                        <div className="footer-links">
                            <a>About Us</a>
                            <a>Refund Policy</a>
                            <a>Privacy Policy</a>
                            <a>Terms & Conditions</a>
                        </div>
                    </div>
                    <div className="footer-column">
                        <div className="footer-title">
                            Contact Us
                        </div>
                        <div className="footer-links">
                            <a>+91-9641976197</a>
                        </div>
                    </div>
                    <div className="footer-column">
                        <div className="footer-title">
                            Email
                        </div>
                        <div className="footer-links">
                            <a>support@edufeat.com</a>
                        </div>
                    </div>
                    <div className="footer-column">
                        <div className="footer-title">
                            Address
                        </div>
                        <div className="footer-links">
                            <p>Plot no.71, Hijli cooperative society <br/>
                                Prem Bazar, Kharagpur<br/>
                                West Midnapore,<br/>
                                West Bengal-721306<br/>
                                INDIA</p>
                        </div>
                    </div>
                </div>
                <div className="footer-container2">
                    <p>Copyright © 2020 edufeat.com. 
                        All Rights Reserved Disclaimer: The products and services provided by this website are solely for guidance and learning purposes. Students are solely responsible for doing their own work. Materials should not be 
                        used for any other purpose or direct submission.</p>
                </div>
            </div>
            </Container>
    )
}

export default Footer
