import React, { Component } from 'react'

export class EstimateForm extends Component {
   
    constructor(props) {
        super(props);
        this.state = {width: ' ',
                      height: ' ',
                      price: ' '
                    };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({ [event.target.name] : event.target.value});
      }
    
      handleSubmit(event) {
        const price ='Price from: $ ' + Math.round(((this.state.width * this.state.height)/144 * 14)+(this.state.width/12*7));
        this.setState({price : price});
        event.preventDefault();
      }
    
      render() {
        return (
            <section className="module-small" id="estimate">
            <div className="container">
            <div class="row">
              <div class="col-sm-6 col-sm-offset-3">
                <h2 class="module-title font-alt">Your Own Estimate</h2>
                <div class="module-subtitle font-serif">Make the estimate yourself and check that we have no competition. Schedule an appointment and one of our designers will go to your home to take the exact measurements and to select the material.</div>
              </div>
            </div>
              <form onSubmit={this.handleSubmit}>
                <div className="row">
                    <div className="col-sm-2 mb-sm-20">
                        
                    </div>
                    <div className="col-sm-2 mb-sm-20">
                        <input name="width" onChange={this.handleChange} className="form-control" type="number" min="0" placeholder="Width"/>
                    </div>
                    <div className="col-sm-1 mb-sm-20">
                        <select className="form-control">
                            <option selected="selected">0</option>
                            <option>1/8</option>
                            <option>1/4</option>
                            <option>3/8</option>
                            <option>1/2</option>
                            <option>5/8</option>
                            <option>3/4</option>
                            <option>7/8</option>
                        </select>
                    </div>            
                    <div className="col-sm-2 mb-sm-20">
                        <input name="height" onChange={this.handleChange} className="form-control" type="text" placeholder="Height"/>
                    </div>
                    <div className="col-sm-1 mb-sm-20">
                    <select className="form-control">
                        <option selected="selected">0</option>
                        <option>1/8</option>
                        <option>1/4</option>
                        <option>3/8</option>
                        <option>1/2</option>
                        <option>5/8</option>
                        <option>3/4</option>
                        <option>7/8</option>
                    </select>
                    </div>
                    <div className="col-sm-2 mb-sm-20">
                    <select className="form-control">
                        <option selected="selected">Type of blind</option>
                        <option>Zebra</option>
                        {/* <option>Black Out</option>
                        <option>Screen</option>
                        <option>Vertical</option>
                        <option>Horizontal</option>
                        <option>Plantation</option> */}
                    </select>
                    </div>
                </div>
                <p></p>
                <div className="row"> 
                    <div className="col-sm-5"></div>    
                    <div className="col-sm-2">
                    <button className="btn btn-block btn-round btn-g" type="submit">Estimate</button>
                    </div>
                    <div className="col-sm-5"></div>
                </div>
                <p></p>
                <h1 className="alt-features-title font-alt text-center">{this.state.price}</h1>
                    
              </form>
            </div>
          </section>
        );
      }
}

export default EstimateForm
