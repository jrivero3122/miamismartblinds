import React from 'react';

const footer = (props) => {

    return(
        <div className="module-small bg-dark">
          <div className="container">
            <div className="row">
              <div className="col-sm-3">
                <div className="widget">
                  <h5 className="widget-title font-alt">About Miami Smart Blinds</h5>
                  <p>The languages only differ in their grammar, their pronunciation and their most common words.</p>
                  <p>Phone: 305 850 4985</p>
                  <p>Email:<a href="#"> info@miamismartblinds.com</a></p>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="widget">
                  <h5 className="widget-title font-alt">Recent Projects</h5>
                  <ul className="icon-list">
                    <li>Brickell <a href="#">Zebra Shades</a></li>
                    <li>Homestead <a href="#">Plantation Shuters</a></li>
                    <li>South Beach <a href="#">Roller Up Shades</a></li>
                    <li>Coral Gables <a href="#">Zebra Shades</a></li>
                    <li>South Miami <a href="#">Horizontal Blinds</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="widget">
                  <h5 className="widget-title font-alt">Tips</h5>
                  <ul className="icon-list">
                    <li><a href="#">Photography</a></li>
                    <li><a href="#">Web Design</a></li>
                    <li><a href="#">Illustration</a></li>
                    <li><a href="#">Marketing</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="widget">
                  <h5 className="widget-title font-alt">Popular Projects</h5>
                  {/* <ul className="widget-posts">
                    <li className="clearfix">
                      <div className="widget-posts-image"><a href="#"><img src="assets/images/rp-1.jpg" alt="Post Thumbnail"/></a></div>
                      <div className="widget-posts-body">
                        <div className="widget-posts-title"><a href="#">Designer Desk Essentials</a></div>
                        <div className="widget-posts-meta">23 january</div>
                      </div>
                    </li>
                    <li className="clearfix">
                      <div className="widget-posts-image"><a href="#"><img src="assets/images/rp-2.jpg" alt="Post Thumbnail"/></a></div>
                      <div className="widget-posts-body">
                        <div className="widget-posts-title"><a href="#">Realistic Business Card Mockup</a></div>
                        <div className="widget-posts-meta">15 February</div>
                      </div>
                    </li>
                  </ul> */}
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default footer;