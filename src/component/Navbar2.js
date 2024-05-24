import React from 'react';
import logo from '../component/assets/logo.svg';

// import './Ali.css';
import './Navbar2.css';
import { SiGooglegemini } from "react-icons/si";

const Navbar2 = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-navy Navback Navsilde">
            <div className="container-fluid">
            <img src={logo} alt="" />
                <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse Navitems" id="navbarScroll">
                    <ul className="navbar-nav pe-5 my-2 my-lg-0 navbar-nav-scroll align-bottom">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Deliver to:</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i className="fa-solid fa-globe text-light"></i></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#"><i className="fa-regular fa-user text-light"></i> Sign in</a>
                        </li>
                    </ul>
                    <form className="d-flex ms-auto">
                        <button className="btn btn-outline-light rounded-5 ps-5 pe-5 Navbutton me-3" type="submit">Sign up</button>
                        <div className="google-btn-wrapper">
                            <center>
                                <div className="google-btn">
                                    <SiGooglegemini className="fs-4" />
                                </div>
                            </center>
                        </div>
                    </form>
                </div>
            </div>
        </nav>
    </>
  );
}

export default Navbar2;