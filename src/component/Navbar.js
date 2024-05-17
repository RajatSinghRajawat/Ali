import React from 'react'
import './Ali.css';
import Navbar2 from './Navbar2'
const Navbar = () => {




    return (
        <>
            <Navbar2 />
            <div className='container-fluid '>
                <div className='row back'>
                    <div className='col-lg-12 col-md-12 col-sm-12 text1'>
                        <div className=' mys'>
                            <p className='text-light text2'>
                                <span><i className="fa-solid fa-circle-play"></i></span>Discover Indibaba</p>
                            <h2 className=' text3'><b>Indibaba: Your Window to WorldWide <br /> Business</b></h2>
                           
                                <div className="container-fluid  text-start mt-5">
                                    <div className='row'>
                                    <div className="col-lg-7 mx-auto">
                                        <div className="input-group custom-input-group">
                                            <input
                                                type="text"
                                                className="form-control px-3"
                                                aria-label="Search for products"
                                                aria-describedby="button-addon2"
                                                placeholder="Search for products"
                                            />
                                            <span className="input-group-text border-0 bg-white custom-icon">
                                                <i className="fa-solid fa-camera"></i>
                                            </span>
                                            <button
                                                className="btn btn-primary text-light custom-search-btn"
                                                id="button-addon2"
                                            >
                                                <i className="fa-solid fa-magnifying-glass"></i> Search
                                            </button>
                                        </div>
                                    </div>
                                    <div className='col-lg-5'></div>
                                    </div>
                                </div>
                            
                            <div className='row mt-5 mb-5'>
                                <div className='col-lg-2 col-md-6 col-sm-12 mt-1'>
                                    <p className=' button4'>Frequently searched :</p>
                                </div>
                                <div className='col-lg-10 col-md-6 col-sm-12'>
                                    <div className="slider-container">
                                        <div className="slider">
                                            <button className='btn btn-outline-dark bg-dark text-white  border-light rounded-pill button4 ps-4 pe-4'>Commonly explored</button>
                                            <button className='btn btn-outline-dark  bg-dark text-white  border-light rounded-pill button4 ps-4 pe-4'>Popularly researched</button>
                                            <button className='btn btn-outline-dark  bg-dark text-white  border-light rounded-pill button4 ps-4 pe-4'>Frequently explored</button>
                                            <button className='btn btn-outline-dark  bg-dark text-white  border-light rounded-pill button4 ps-4 pe-4'>sport shoe men</button>
                                            <button className='btn btn-outline-dark  bg-dark text-white  border-light rounded-pill button4 ps-4 pe-4'>football shoe men</button>
                                            <button className='btn btn-outline-dark  bg-dark text-white  border-light rounded-pill button4 ps-4 pe-4'>kids bed</button>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;