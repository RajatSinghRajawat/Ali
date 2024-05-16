import React from 'react';
import { PiSquaresFour } from "react-icons/pi";
import { HiMiniPencilSquare } from "react-icons/hi2";
import { PiBoxArrowDownFill } from "react-icons/pi";
import { GiMayanPyramid } from "react-icons/gi";

import './Card.css';

const imag_map = [
    {
        icons: <PiSquaresFour />,
        text: " Diverse Business Options",
        paragraph: "Find what you need for your business among millions of offerings worldwide."
    },
    {
        icons: <HiMiniPencilSquare />
        ,
        text: "Quality Assurance and Secure Transactions",
        paragraph: "Rest assured with verified suppliers and protected transactions, from payment to delivery."
    },
    {
        icons: <PiBoxArrowDownFill />
        ,
        text: "All-in-One Trade Hub",
        paragraph: "Handle everything from finding products and suppliers to managing orders and payments in one place."
    },
    {
        icons: <GiMayanPyramid />
        ,
        text: "Personalized Trading Support",
        paragraph: "Enjoy tailored benefits like special discounts, added protection, and extra assistance to help your business thrive."
    },
];

const Card = () => {
    return (
        <div className='container-fluid container_background'>
            <div className='row'>
                {imag_map.map((item, index) => (
                    <div key={index} className="col-lg-3 col-md-6 col-sm-12 mb-4">
                        <div className="card p-2 CARDS p-3 h-100">
                            <div className="card-body">
                                <div className="icon-wrapper">
                                    <h2 className='icons_edit'>{item.icons}</h2>
                                </div>
                                <h5 className="card-title text">{item.text}</h5>
                                <p className="card-text paragraph">{item.paragraph}</p>
                            </div>
                            <div className="overlay"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Card;