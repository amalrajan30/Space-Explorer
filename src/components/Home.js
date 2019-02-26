import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../action";
import './style.css'
class Home extends Component {

  componentDidMount() {
    this.props.getData();
  }

  render() {

    return (
      <div className="container-fluid bg-dark mb-2">
      <div className="container">
        <h2 className="text-center display-4 text-primary">
        Astronomy Picture of the Day
        <span className="text-muted" id="date">{this.props.posts.date}</span>
        </h2> 
        <div className="text-center" id="imgView">
          <h3 className="text-primary">{this.props.posts.title}</h3>
          <img className="img-fluid rounded" src={this.props.posts.url} alt="todays-pic" />
        </div>
      </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.data.items
})

export default connect(
  mapStateToProps,
  { getData }
)(Home);
