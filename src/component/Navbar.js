import React, { useRef, useState } from 'react'
import './Ali.css';
import Navbar2 from './Navbar2'
const Navbar = () => {
    const [imageName, setImageName] = useState('');
    const fileInputRef = useRef(null);
  
    const handleButtonClick = () => {
      fileInputRef.current.click();
    };
  
    const handleImageUpload = (event) => {
      const file = event.target.files[0];
      if (file) {
        setImageName(file.name);
      } 
    };


    const [imageName1, setImageName1] = useState('');
    const fileInputRef1 = useRef(null);
  
    const handleButtonClick1 = () => {
      fileInputRef1.current.click();
    };
  
    const handleImageUpload1 = (event) => {
      const file1 = event.target.files[0];
      if (file1) {
        setImageName1(file1.name);
      } 
    }



    return (
        <>
            <Navbar2 />
            <div className='container-fluid '>
                <div className='row back'>
                    <div className='col-lg-12 col-md-12 col-sm-12 text1'>
                        <div className=' mys'>
                            <p className='text-light text2'>
                                <span><i className="fa-solid fa-circle-play"></i> </span>Discover Indibaba</p>
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
                                            <div>
                                            <input
                                                type="file"
                                                ref={fileInputRef1}
                                                style={{ display: 'none' }}
                                                onChange={handleImageUpload1}
                                            />
                                           
                                            </div>
                                                <i onClick={handleButtonClick1} style={{cursor:"pointer"}} className="fa-solid fa-camera"></i>
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
                                            <button className='btn btn-outline-dark  text-white  border-light rounded-pill button4 ps-4 pe-4'>Commonly explored</button>
                                            <button className='btn btn-outline-dark  text-white  border-light rounded-pill button4 ps-4 pe-4'>Popularly researched</button>
                                            <button className='btn btn-outline-dark text-white  border-light rounded-pill button4 ps-4 pe-4'>Frequently explored</button>
                                            <button className='btn btn-outline-dark  text-white  border-light rounded-pill button4 ps-4 pe-4'>sport shoe men</button>
                                            <button className='btn btn-outline-dark   text-white  border-light rounded-pill button4 ps-4 pe-4'>football shoe men</button>
                                            <button className='btn btn-outline-dark   text-white  border-light rounded-pill button4 ps-4 pe-4'>kids bed</button>

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