import React from 'react';

const slider = (props) => {

    const slide1 = props.slides.map((slide, i) => {
        return(
            <li className="bg-dark-30 bg-dark" style={{ backgroundImage: `url(${slide.url_img})` }}>
                <div className="titan-caption">
                    <div className="caption-content">
                    <div className="font-alt mb-30 titan-title-size-4">{slide.title}</div>
                    <div className="font-alt mb-40 titan-title-size-1">{slide.description}</div>
                    <a className="section-scroll btn btn-border-w btn-round" href={slide.url_button}>{slide.text_button}</a>
                    </div>
                </div>
            </li>
        )
    }
    )
    
    return(
        <div>
            <section className="home-section home-parallax home-fade home-full-height" id="home">
                <div className="hero-slider">
                <ul className="slides">
                    {slide1}
                </ul>
                </div>
            </section>
        </div>
    )
}

export default slider;