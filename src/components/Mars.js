import React, { Component } from "react";
import { connect } from 'react-redux'
import { getImageData } from '../action'
import "./style.css";
import Pagination from "./Pagination";
class Mars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rover: "curiosity",
      date: "2014-02-22",
      roverError: "",
      dateError: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount(){
    let imgData ={
      rover:this.state.rover,
      date:this.state.date
    };
    this.props.getImageData(imgData);
    this.setState({rover:"",date:""})
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  validate = () => {
    let counter = 0
    if (this.state.rover === ''){
      this.setState({roverError:'Select a Rover Plz..'})
      counter++
    }
    if (this.state.date === '') {
      this.setState({dateError:'Select a date to continue..'})
      counter++
    }
    if (counter===0) {
      return true
    }else return false
  }

  onSubmit(e) {
    e.preventDefault();
      if (this.validate) {
      const imgData = {
        rover : this.state.rover,
        date : this.state.date
      };
      this.props.getImageData(imgData) 
      } else e.preventDefault();
  }

  render() {
    return (
      <div className="container-fluid bg-dark mb-2">
        <h3 className="display-4 text-center text-primary animated infinite bounce delay-2s">
          Images of Mars Taken by Rovers
        </h3>
        <div className="container mb-2">
          <div className="row" id="imgView">
            <div className="col-sm-12 bg-light">
              <h4 className="text-primary">Image Details</h4>
              <form onSubmit={this.onSubmit}>
              <select
                className="custom-select"
                name="rover"
                value={this.state.rover}
                onChange={this.onChange}
              >
                <option>Select a Rover</option>
                <option value="curiosity">Curiosity</option>
                <option value="opportunity">Opportunity</option>
                <option value="spirit">Spirit</option>
              </select>
              <h5>{this.state.roverError}</h5>
              <label>Select a Date</label>
              <input
                type="date"
                min="2004-01-04"
                max="2019-01-01"
                name="date"
                value={this.state.date}
                onChange={this.onChange}
              />
              <h5>{this.state.dateError}</h5>
              <button className="btn btn-primary ml-3" type="submit">Find</button>
              </form>
              <Pagination/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect((state) => state, {getImageData}) (Mars);
