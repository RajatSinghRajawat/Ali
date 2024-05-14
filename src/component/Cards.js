import React from 'react';

import img1  from './images/img1.png'
import img2 from './images/img2.png';
import img3 from './images/img3.png';
import img4 from './images/img4.png';
import img5 from './images/img5.png';
import img6 from './images/img6.png';
import img11 from './images/img11.gif';
import { MdOutlineSlowMotionVideo } from "react-icons/md";

import './Cards.css';

const Cards = () => {
    return (
        <>
            <div className=' m-2 px-3 fs-2 bold'>Source direct-from-factory</div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-4 col-md-4 col-sm-12'>
                        <div style={{
                            backgroundImage: `url(${img1})`,

                        }} className='my-3 rounded-5 backimg'>

                            <div className='d-flex p-3 fs-2 align-items-center text-light'>
                                <img src={img11} className='img-fluid' alt="Live Tour" />
                                <h5 className='px-3'>Take factory live tours</h5>
                            </div>

                            <div className='p-3'>
                                <a href='#' className='text-light '>View LIVE</a>
                            </div>

                        </div>
                    </div>

                    <div className='col-lg-4 col-md-4 col-sm-12'>
                        <div style={{
                            backgroundImage: `url(${img2})`,

                        }} className='my-3 rounded-5 backimg'>

                            <div className=' p-3 fs-2 text-light'>

                                <h5 className='px-3'>Get samples</h5>
                            </div>

                            <div className='p-3'>
                                <a href='#' className='text-light '>View more</a>
                            </div>

                        </div>
                    </div>

                    <div className='col-lg-4 col-md-4 col-sm-12'>
                        <div style={{
                            backgroundImage: `url(${img3})`,

                        }} className='my-3 rounded-5 backimg'>

                            <div className=' p-3 fs-2 text-light'>
                                <h5 className='px-3'>Connect with top-ranking manufactures</h5>
                            </div>

                            <div className='p-3'>
                                <a href='#' className='text-light '>View more</a>
                            </div>

                        </div>
                    </div>


                </div>


                <div className='back2 mt-2 rounded text-light row px-2'
                    style={{ backgroundImage: `url(${img4})` }}>
                    <div className='col-lg-5 col-md-9 col-sm-10 mx-auto py-5'>
                        <h2 className='bold px-3 py-3'>Trade with confidence from production quality to purchase protection</h2>
                    </div>
                    <div className='col-lg-7 col-md-3 col-sm-2'></div>



                    <div className='col-lg-1 col-sm-0'></div>
                    <div className='col-lg-5 col-md-6 col-sm-12 mb-3'>
                        <div className='color rounded-4 px-3 py-3 h-100'>
                            <p className=''>Ensure production quality with</p>
                            <img src={img5} className='img-fluid w-75' />
                            <p>Connect with a variety of suppliers with third-party-verified credentials and capabilities. Look for the "Verified" logo to begin sourcing with experienced suppliers your business could rely on.</p>
                            <div className='d-flex gap-4 align-items-center'>
                                <button className='bg-secondary btn rounded-pill '><MdOutlineSlowMotionVideo className='fs-4 pe-1  ' />Watch video</button>
                                <a href='#' className='text-white fs-5'>Learn more</a>

                            </div>

                        </div>
                    </div>
                    <div className='col-lg-5 col-md-6 col-sm-12 mb-3'>
                        <div className='color rounded-4 px-3 py-3  h-100'>
                            <p>Protect your purchase with</p>
                            <img src={img6} className='img-fluid w-75' />
                            <p>Source confidently with access to secure payment options, protection against product or shipping issues, and mediation support for any purchase-related concerns when you order and pay on Indibaba.com.</p>
                            <div className='d-flex gap-4 align-items-center'>
                                <button className='bg-secondary btn rounded-pill '><MdOutlineSlowMotionVideo className='fs-4 pe-1  ' />Watch video</button>
                                <a href='#' className='text-white fs-5'>Learn more</a>

                            </div>

                        </div>
                    </div>
                    <div className='col-lg-1  col-sm-0'></div>

                </div>





            </div>

        </>

    );
}

export default Cards;
