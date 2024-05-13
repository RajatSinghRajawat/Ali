import React from 'react';
import './Card.css'; // Import CSS for styling


const TextContent = () => {
    return (
        <div className='container_background_set'>
        <div className="container ">
            <div className="row">
                <div className="col-lg-6">
                    <h1 className='side_text'>Explore millions of offerings tailored to your business needs</h1>
                </div>
                <div className="col-lg-6">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="side-items">
                                <div className="side-border">
                                    <h2 className="golden-text">200M+</h2>
                                    <p>products</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="side-items">
                                <div className="side-border">
                                    <h2 className="golden-text">5,900</h2>
                                    <p>product categories</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="side-items">
                                <div className="side-border">
                                    <h2 className="golden-text">200K+</h2>
                                    <p>suppliers</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="side-items">
                                <div className="side-border">
                                    <h2 className="golden-text">200+</h2>
                                    <p>countries and regions</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default TextContent;
