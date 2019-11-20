import React from 'react';

const price = () => {
    return(
        <div>
            <section className="module">
                <div className="container">
                    <div className="row multi-columns-row">
                        <div className="col-sm-6 col-md-3 col-lg-3">
                            <div className="price-table font-alt">
                                <h4>Light</h4>
                                <div className="borderline"></div>
                                    <p className="price"><span>$</span>9
                                    </p>
                                    <ul className="price-details">
                                        <li>Free Support</li>
                                        <li>15 Demos Included</li>
                                        <li><span>Newsletter</span></li>
                                        <li><span>Working Contact Form</span></li>
                                        <li><span>Unlimited Domains</span></li>
                                    </ul><a className="btn btn-d btn-round" href="#">Sign Up</a>
                            </div>
                        </div>
                    </div>
                </div>   
            </section>
        </div>
    )
}

export default price;