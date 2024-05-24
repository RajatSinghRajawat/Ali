import React from 'react'
import './Ali.css'
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";


const Navbar1 = () => {
    return (
        <>
            <section>
                <div><hr className='mb-1'/>
                    <div className="container-fluid footer4 ps-5">
                        <div className="row" style={{ fontSize: '11px', lineHeight: '5px', fontWeight: 'bold' }}>
                            <div className="col-lg-2 col-md-4 col-sm-12 mt-5">
                                <div>
                                    <p className='footer1'>Get Support</p>
                                    
                                    <p className="pt-3 footer2">Help center</p>
                                    <p className='footer2'>Live chat</p>
                                    <p className='footer2'>Check order status</p>
                                    <p className='footer2'>Refunds</p>
                                    <p className='footer2'>Report abuse</p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-12 mt-5">
                                <div>
                                    <p className='footer1'>Trade Assurance</p>
                                    
                                    <p className="pt-3 footer2">Safe and easy payments</p>
                                    <p className='footer2'>Money-back policy</p>
                                    <p className='footer2'>On-time shipping</p>
                                    <p className='footer2'>After-sales protections</p>
                                    <p className='footer2'>Product monitoring services</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-12 mt-5">
                                <div>
                                    <p className='footer1'>Source on Indibaba.com</p>
                                    
                                    <p className="pt-3 footer2">Request for quotation</p>
                                    <p className='footer2'>Membership program</p>
                                    <p className='footer2'>Indibaba.com logistics</p>
                                    <p className='footer2'>Sales tax and vat</p>
                                    <p className='footer2'>Indibaba.com reads</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-12 mt-5">
                                <div>
                                    <p className='footer1'>Sell on Indibaba.com</p>
                                    
                                    <p className="pt-3  footer2">Start selling</p>
                                    <p className='footer2'>Seller central</p>
                                    <p className='footer2'>Become a verified supplier</p>
                                    <p className='footer2'>Partnerships</p>
                                    <p className='footer2'>Download the app for suppliers</p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-12 mt-5">
                                <div>
                                    <p className='footer1'>Get to know us</p>
                                    
                                    <p className="pt-3  footer2">About Indibaba.com</p>
                                    <p className='footer2'>Corporate responsibility</p>
                                    <p className='footer2'>News center</p>
                                    <p className='footer2'>Careers</p>
                                   
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-6 col-md-4 col-sm-12 mt-5 pt-4'>
                                <span className='pe-4 pt-3 text-secondary  fs-3' ><i className="fa-brands fa-square-facebook"></i></span>
                                <span className='pe-4 pt-3  text-secondary fs-3' ><i className="fa-brands fa-linkedin-in"></i></span>
                                <span className='pe-4 pt-3  text-secondary fs-3' ><i className="fa-brands fa-twitter"></i></span>
                                <span className='pe-4 pt-3  text-secondary fs-3' ><i className="fa-brands fa-instagram"></i></span>
                                <span className='pe-4 pt-3  text-secondary fs-3' ><i className="fa-brands fa-youtube"></i></span>
                                <span className='pe-4 pt-3  text-secondary fs-3' ><i className="fa-brands fa-tiktok"></i></span>
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-12 mt-5 pt-2'>
                                <div className='row'>
                                    <div className='col-lg-4 col-md-6 col-sm-12 mt-2'>
                                        <p className=''>Trade anywhere with the indibaba.com app </p>

                                    </div>
                                    {/* <div className='col-lg-8 col-md-12 col-sm-12 d-flex'>
                                        <button id="myButton" class="download-button ps-2 pe-4">
                                            <h3> <FaApple /></h3>
                                            <div className='ps-2'>
                                                <p class="button-text">Download on the</p>
                                                <div class="store-name">App Store</div>
                                            </div>
                                        </button>
                                        <button id="myButton" class="download-button ps-3 pe-4">
                                            <h3><FaGooglePlay />
                                            </h3>
                                            <div className='ps-2'>
                                                <p class="button-text">Get it Now</p>
                                                <div class="store-name">Google Play</div>
                                            </div>
                                        </button>

                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
           <section style={{backgroundColor:"#f4f4f4"}}>
           <div className="container-fluid mt-5" style={{ backgroundColor: 'rgb(f4f4f4)', color: '#666666' }}>
                <div className="row">
                    <div className="col-12">
                        <div style={{ textAlign: 'center' }}>
                            {/* <span className='lasttext'>IndiExpress | 1688.com | Tmall Taobao World | Indipay | Lazada | Taobao Global <br/>
                            Policies and rules . Legal Notice . Product Listing Policy . Intellectual Property Protection . Privacy Policy . Terms of Use . Integrity Compliance <br /> © 1999-2024 Indibaba.com. All rights reserved. 浙公网安备 33010002000092号 浙B2-20120091-4</span> */}
                            <span className='lasttext' >indiaba.com</span>
                        </div>
                    </div>
                </div>
            </div>
           </section>





        </>
    )
}

export default Navbar1