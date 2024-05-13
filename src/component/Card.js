import React from 'react';
import { PiSquaresFour } from "react-icons/pi";
import './Card.css';

const imag_map = [
    {
        icons: <PiSquaresFour />,
        text: "Millions of business offerings",
        paragraph: "Explore products and suppliers for your business from millions of offerings worldwide."
    },
    {
        icons: <PiSquaresFour />,
        text: "Assured quality and transactions",
        paragraph: "Ensure production quality from verified suppliers, with your orders protected from payment to delivery."
    },
    {
        icons: <PiSquaresFour />,
        text: "One-stop trading solution",
        paragraph: "Order seamlessly from product/supplier search to order management, payment, and fulfillment."
    },
    {
        icons: <PiSquaresFour />,
        text: "Tailored trading experience",
        paragraph: "Get curated benefits, such as exclusive discounts, enhanced protection, and extra support, to help grow your business every step of the way."
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
