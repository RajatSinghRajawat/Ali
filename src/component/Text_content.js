import React from 'react';
import './Card.css'; // Import CSS for styling


const TextContent = () => {
    return (
        <div className='container_background_set'>
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <h1 className='side_text pb-5'>Millions of possibilities, one perfect match <br /> -  Find it on IndiBaba</h1>
                </div>
                <div className="col-lg-6">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="side-items">
                                <div className="side-border">
                                    <h2 className="golden-text">Convenience of buying</h2>
                                    {/* <p>products</p> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="side-items">
                                <div className="side-border">
                                    <h2 className="golden-text">Safekeeping of  Customer Data</h2>
                                    {/* <p>product categories</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="side-items">
                                <div className="side-border">
                                    <h2 className="golden-text">Payment Protection</h2>
                                    {/* <p>suppliers</p> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="side-items">
                                <div className="side-border">
                                    <h2 className="golden-text">Connected With Trusted Buyers </h2>
                                    {/* <p>countries and regions</p> */}
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
