import React from 'react'
import img7 from './images/img7.png';
import img8 from './images/img8.png';
import img9 from './images/img9.png';
import img10 from './images/img10.png';
import './Slider.css'
import Carousel from 'react-bootstrap/Carousel';

const Slider = () => {
    return (
        <>
            <div className='bgcol'>
                <div className='text-center p-3'>
                    <h2 className='txt py-3'>Get tailored discounts, services, and tools for <br /> your business stage.</h2>
                    <p className='text-secondary'>Grow with curated benefits offered by the free Indibaba.com Membership, whether you are a small <br /> business needing the essentials to start sourcing or a well-established enterprise looking for tools and <br /> solutions for more complex orders.</p>
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
                                        <h5 >“Once I discovered Indibaba.com, I was amazed at how  many options I had with suppliers from all over the world.”</h5>
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


                <div style={{backgroundImage: `url(${img10})`}} className='text-light bgimg mt-2 d-flex justify-content-center align-content-center '>
                    <div className='text-center py-4 items-center'>
                        <h2 className='flex-grow-1'>Ready to get started</h2>
                        <h5>Explore millions of products from trusted suppliers by signing up today!</h5>
                        <button className='btn rounded-pill fs-4 my-4 bgbut'>Sign up</button>

                    </div>

                </div>


            </div>


        </>
    )
}

export default Slider