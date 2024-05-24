import React from 'react'
import img7 from './images/img7.png';
import img8 from './images/img8.png';
import img9 from './images/img9.png';
import type from './images/type.jpg'
import './Slider.css'
import Carousel from 'react-bootstrap/Carousel';

const Slider = () => {
    return (
        <>
            <div className='bgcol'>
                <div className='text-center p-3'>
                    <h2 className='txt py-3'>Access personalized discounts, services and tools
                        designed for <br /> your business stage</h2>
                    <p className='text-justify'>Benefit from curated advantages with the complimentary Indibaba
                        Membership, catering to businesses at every phase. <br /> Whether you're a startup
                        requiring essentials to initiate sourcing or a well-established enterprise
                        seeking <br />advanced tools and solutions for complex orders, we've got you
                        covered.</p>
                    <a href='#' className='text-dark fs-5'>Learn more</a>

                </div>

                <div className='container rounded-4 py-5 my-4 bg-white sli'>
                    <Carousel data-bs-theme="dark" indicators={false}  >
                        <Carousel.Item>
                            <div className='row '>
                                <div className='col-lg-1'></div>
                                <div className='col-lg-4 col-md-6 col-sm-12'>
                                    <div className='d-flex align-items-center flex-md-row'>
                                        <img
                                            className="d-block rounded-circle me-md-4  m-3 mb-md-0"
                                            src={img8}
                                            alt="Eva Jane"
                                            style={{ width: "130px", height: "130px" }}
                                        />
                                        <div className='text-center text-md-start '>
                                            <h4 className="mb-0">Dr. Sayed Ibrihim</h4>
                                            <p className="mb-1">Founder of SprinJene</p>
                                        </div>
                                    </div>

                                </div>

                                <div className='col-lg-6 col-md-6 col-sm-12'>
                                    <div className='p-4 text-start'>
                                        <h5 >“As a dedicated entrepreneur in the Beauty industry,
                                            crafting original products is my passion. Indibaba has been my
                                            reliable partner throughout this journey”</h5>
                                    </div>
                                </div>
                                <div className='col-lg-1'></div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className='row text-center '>
                                <div className='col-lg-1'></div>
                                <div className='col-lg-4 col-md-6 col-sm-12'>
                                    <div className='d-flex align-items-center flex-md-row'>
                                        <img
                                            className="d-block rounded-circle me-md-4  m-3 mb-md-0"
                                            src={img9}
                                            alt="Ron Williams and Tonja Williams"
                                            style={{ width: "130px", height: "130px" }}
                                        />
                                        <div className='text-center text-md-start'>
                                            <h4 className="mb-0">Ron Williams and Tonja Williams</h4>
                                            <p className="mb-1">Founder and CEO (respectively) of Ron Williams Fitness</p>
                                        </div>
                                    </div>

                                </div>

                                <div className='col-lg-6 col-md-6 col-sm-12'>
                                    <div className='p-4 text-start'>
                                        <h5 >“Indibaba.com is a game changer for small businesses like us. We were able to find the exact product we needed and I don't think we could have sourced anything without Indibaba.com.”</h5>
                                    </div>
                                </div>
                                <div className='col-lg-1'></div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className='row '>
                                <div className='col-lg-1'></div>
                                <div className='col-lg-4 col-md-6 col-sm-12'>
                                    <div className='d-flex align-items-center flex-md-row'>
                                        <img
                                            className="d-block rounded-circle me-md-4  m-3 mb-md-0"
                                            src={img7}
                                            alt="Eva Jane"
                                            style={{ width: "130px", height: "130px" }}
                                        />
                                        <div className='text-center text-md-start'>
                                            <h4 className="mb-0">Eva Jane</h4>
                                            <p className="mb-1">Founder of Eva Jane Beauty</p>
                                        </div>
                                    </div>

                                </div>

                                <div className='col-lg-6 col-md-6 col-sm-12'>
                                    <div className='p-4 text-start'>
                                        <h5 >“As an entrepreneur deeply involved in the Beauty industry, I've been devoted to creating original products. Indibaba.com has been my trusted partner in this process.”</h5>
                                    </div>
                                </div>
                                <div className='col-lg-1'></div>
                            </div>
                        </Carousel.Item>


                    </Carousel>
                </div>


               <div style={{ backgroundImage: `url(${type})` }} className=' text-light bgimg mt-2 d-flex '>
               <div className='darkbackcolor  d-flex align-item-center '>
                    <div className='text-center py-4 items-center  '>
                        <h2 className='flex-grow-1'>Ready to begin your journey?</h2>
                        <h5>Discover millions of products from reliable suppliers by signing up
                            with Indibaba today!
                        </h5>
                        <button className='btn rounded-pill fs-4 my-4 bgbut'>Create an account</button>

                    </div>

                </div>
               </div>


            </div>


        </>
    )
}

export default Slider