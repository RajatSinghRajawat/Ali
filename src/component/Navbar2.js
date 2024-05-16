import React from 'react';

import './Ali.css';
import { SiGooglegemini } from "react-icons/si";

const Navbar2 = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark Navback Navsilde">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><b>Indibaba.com</b></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div  className="collapse navbar-collapse Navitems " id="navbarScroll">
            <ul className="navbar-nav pe-5 my-2 my-lg-0 navbar-nav-scroll align-bottom"> {/* added align-bottom class */}
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Deliver to:</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><i class="fa-solid fa-globe text-light"></i></a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#"><i class="fa-regular fa-user text-light"></i> Sign in</a>
              </li>
            </ul>
            <form className="d-flex">
              <button className="btn btn-outline-light rounded-5 ps-5 pe-5 Navbutton me-3" type="submit">Sign up</button>
              <div style={{backgroundColor:"white",width:"2.5rem",cursor:"pointer"}} className='rounded-5'><center><div style={{width:"1.4rem",height:"1.5rem",backgroundColor:"blue"}} className='rounded-5 mt-2'><span className='pb-1'><SiGooglegemini className='pb-1 fs-4'/></span></div></center></div>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar2;