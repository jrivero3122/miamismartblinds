import React from 'react';

const aboutus = (props) => {

    return(
        <section className="module pt-0 pb-0" id="about">
          <div className="row position-relative m-0">
            <div className="col-xs-12 col-md-6 side-image" data-background="assets/images/aboutus.jpg"></div>
            <div className="col-xs-12 col-md-6 col-md-offset-6 side-image-text">
              <div className="row">
                <div className="col-sm-12">
                  <h2 className="module-title font-alt align-left">About Us</h2>
                  <div className="module-subtitle font-serif align-left">
                    <p>
                      Miami Smart Blinds LLC is a team of professional interior design lovers. We believe that each space has its own magic and always something to tell. Our products have an aesthetic and technological
                      functionality and helping with energy saving. We specialize in SMART systems, where the customer regulate direct light, temperature, as well as their curtains, from an application, or as simple as a voice command to Alexa, Siri or Cortana. We have from the most modern in Roller Shades, Zebra, Screem, Translucent, Black Out, as well as the classic Vertical, Horizontal and Plantation Shutter. 
                    </p>
                    <p>
                      Our main goal, our whole focus, is in the satisfaction of our customers.
                    </p>
                  </div>
                  {/* <p>Miami Smart Blinds LLC is a group of professional interior design
                      lovers. We believe that each home has its own magic and something
                      always to teach. Our products have an aesthetic, technological
                      functionality, help with energy saving. We specialize in SMART
                      systems, where the customer can direct light, temperature, as well as
                      their curtains, from an application, or as simple as a voice command
                      to Alexa, Siri or Cortana. We have from the most modern in Roller
                      Shades, Zebra, Screem, Translucent, Black Out, as well as the classic
                      Vertical, Horizontal and Plantation Shutter.
                      But our main goal, our whole focus, is in the satisfaction of our customers.
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </section>
    )
}

export default aboutus;