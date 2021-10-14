import React from 'react'
import logo from  '../../Assets/edufeat-logo.png'
import { Container } from '@mui/material'
import './Footer.css'

function Footer() {
    return (
                <div className="footer-main">
                <Container className="footer">
                <div className="footer-container1">
                    <div className="footer-logo-div">
                        <div className="footer-logo">
                            <img src={logo} alt='' />
                        </div>
                    </div>
                    <div className="footer-grid">
                        <div className="footer-column">
                            <div className="footer-title">
                                Company
                            </div>
                            <div className="footer-links">
                                <a href='/about'>About Us</a>
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
                                <p>Plot no.71, Hijli cooperative society,
                                    Prem Bazar, Kharagpur,
                                    West Midnapore,
                                    West Bengal-721306
                                    INDIA</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-container2">
                    <p>Copyright © 2020 edufeat.com. 
                        All Rights Reserved Disclaimer: The products and services provided by this website are solely for guidance and learning purposes. Students are solely responsible for doing their own work. Materials should not be 
                        used for any other purpose or direct submission.</p>
                </div>
            </Container>
            </div>
    )
}

export default Footer
