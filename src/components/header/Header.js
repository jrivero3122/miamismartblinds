import React from 'react';

const header = (props) => {
    return(
        <nav className="navbar navbar-custom navbar-fixed-top one-page" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <button className="navbar-toggle" type="button" data-toggle="collapse" data-target="#custom-collapse"><span className="sr-only">Toggle navigation</span><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span></button><a className="navbar-brand" href="index.html">{props.title}</a>
          </div>
          <div className="collapse navbar-collapse" id="custom-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#totop">Home</a></li>
              <li className="dropdown"><a className="dropdown-toggle" href="#" data-toggle="dropdown">Products</a>
                <ul className="dropdown-menu">
                  <li><a className="section-scroll" href="#rollupshades">Roll-Up Shades</a></li>
                  <li><a className="section-scroll" href="#zebra">Zebra Shades</a></li>
                  <li><a className="section-scroll" href="#plantation">Plantation Shutters</a></li>
                  <li><a className="section-scroll" href="#vertical">Vertical Blinds</a></li>
                  <li><a className="section-scroll" href="#horizontal">Horizontal Blinds</a></li>
                </ul>
              </li>
              <li><a className="section-scroll" href="#about">About Us</a></li>
              <li><a className="section-scroll" href="#estimate">Estimate</a></li>
              <li><a className="section-scroll" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default header;