import React from 'react';
import './Ali.css';
// import Navbar1 from './Navbar1';
import Navbar2 from './Navbar2'
const Navbar = () => {
    return (
        <>
        <Navbar2/>
            <div className='container-fluid'>
                <div className='row back'>
                    <div className='col-lg-12 col-md-12 col-sm-12 text1'>
                        <div className=' mys'>
                            <p className='text-light text2'><span><i className="fa-solid fa-circle-play"></i></span> Learn about Indibaba.com</p>
                            <h2 className='text-light text3'><b>The leading B2B ecommerce platform for <br /> global trade</b></h2>
                            <div className='row'>
                                <div className='col-lg-12'>
                                    <div className="input-group mt-5 input">
                                        <input
                                            type="text"
                                            className=" px-3 px-sm-5 fs-sm-4 rounded-start-5 custom-input-width w-50"
                                            aria-label="Search for products"
                                            aria-describedby="basic-addon2"
                                            placeholder="Search for products"
                                        />
                                        <span className='input-group-text bg-light' style={{ height: "3rem", marginTop: "1.2px", marginBottom: "1px" }} >
                                        {/* <i class="fa-solid fa-camera  "></i> */}
                                            <i className="fa-solid fa-camera pe-camera "></i>
                                            </span>
                                        <div style={{ height: "3rem", marginTop: "1.2px" }} className='bg-light rounded-end-5'>
                                            <button style={{ backgroundColor: "rgb(0,38,85)", paddingTop: "9px" }} className="btn btn mt-1 button text-light input-group-text me-1 rounded-5 pb-2 pt-2 pe-4" id="basic-addon2">
                                                <i className="fa-solid fa-magnifying-glass pe-2 ps-2"></i> Search
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row mt-5 mb-5'>
                                <div className='col-lg-2 col-md-6 col-sm-12 mt-1'>
                                    <p className='text-light button4'>Frequently searched :</p>
                                </div>
                                <div className='col-lg-2 col-md-6 col-sm-12'>
                                    <button className='btn btn-outline-dark text-light border-light rounded-pill button4 ps-4 pe-4'>Kids toys</button>
                                </div>
                                <div className='col-lg-2 col-md-6 col-sm-12'>
                                    <button className='btn btn-outline-dark text-light border-light rounded-pill button4 ps-4 pe-4'>headphones</button>
                                </div>
                                <div className='col-lg-2 col-md-6 col-sm-12'>
                                    <button className='btn btn-outline-dark text-light border-light rounded-pill button4 ps-4 pe-4'>car accessories</button>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <footer> <Navbar1/></footer> */}
        </>
    );
}

export default Navbar;