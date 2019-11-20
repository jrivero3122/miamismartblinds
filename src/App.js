import React, { Component } from 'react';

// import logo from './logo.svg';
// import './App.css';

import Header from './components/header/Header';
import Slider from './components/slideshow/Slider';
import TextBlock from './components/textBlock/TextBlock';
import Services from './components/services/Services';
import Price from './components/prices/Price';
import Contact from './components/contact/Contact';
import Aboutus from './components/about/Aboutus';
import Products from './components/product/Products';
import EstimateForm from './components/estimate/EstimateForm';
import Footer from './components/footer/Footer';
import {slides} from './slides.json';
import {texts} from './text.json';
import {services} from './services.json';
import {products} from './products.json';
import product from './components/product/Products';

class App extends Component {
  state = {
    slides,
    texts,
    services,
    products
  }


  render() {
    return (
      <div>
        <body data-spy="scroll" data-target=".onpage-navigation" data-offset="60">
          <main>
            <div class="page-loader">
              <div class="loader">Loading...</div>
            </div>
              <Header title="Miami Smart Blinds LLC"/>
              <Slider slides ={this.state.slides}/>
              <div className="main">
                <Aboutus />
                {/* <TextBlock texts ={this.state.texts} /> */}
                <Services services= {this.state.services}/>
                <Products products= {this.state.products}/>
                {/* <Price /> */}
                <Contact />
                <EstimateForm />
                <Footer />
              </div>
          </main>
        </body>
        
      </div>
    );
  }
}

export default App;
