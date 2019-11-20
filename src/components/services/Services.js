import React from 'react';

const services = (props) => {

    const services = props.services.map((service, i) => {
        return(
            <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="features-item">
                <div className="features-icon"><span className={service.icon}></span></div>
                <h3 className="features-title font-alt">{service.title}</h3>
                <p>{service.description}</p>
                </div>
            </div>
        )
    })

    return(
        <div className="container">
            <div className="row multi-columns-row">
                {services}        
            </div>
        </div>
    )
}

export default services;