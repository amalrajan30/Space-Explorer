import React, { Component } from "react";
import { Spring, config, Keyframes } from "react-spring";
import "./cube-style.css";

const Move = Keyframes.Spring(
  async (next) => {
    while(true){
      await next({marginLeft:'0px'})
      await next({delay:'1600'})
      await next({marginLeft:'150px'})
    }
  }
)

const Move1 = Keyframes.Spring(
  async (next) => {
    while(true){
      await next({marginRight:'0px'})
      await next({delay:'1600'})
      await next({marginRight:'150px'})
      await next({delay:'3200'})
    }
  }
)

export default class Animation extends Component {
  render() {
    return (
      <div>
        <div className="heading">
          <h1 id="main-head">Space Explorer</h1>
          <h3>Find Photos of Mars and Current Location of ISS</h3>
          <button>Take me There..!</button>
        </div>
        <div className="area">
          <Move
          config={config.wobbly}
          >
            {props => (
              <div style={props}>
                <div className="scene" style={{ float: "left"}} id="changes">
                  <div className="cubes">
                    <div className="cube-face cube-face-front" />
                    <div className="cube-face cube-face-back" />
                    <div className="cube-face cube-face-left" />
                    <div className="cube-face cube-face-right" />
                    <div className="cube-face cube-face-top" />
                    <div className="cube-face cube-face-bottom" />
                  </div>
                </div>
                </div>
            )}
          </Move>
          <Move1
          config={config.wobbly}
          >
          {styles => (
            <div style={styles}>
            <div className="scene" style={{ float: "right" }}>
            <div className="cubes">
              <div
                className="cube-face cube-face-front"
                style={{
                  background: "rgb(221, 0, 49)",
                  boxShadow: "rgb(221, 0, 49) 0px 0px 150px"
                }}
              />
              <div
                className="cube-face cube-face-back"
                style={{
                  background: "rgb(221, 0, 49)",
                  boxShadow: "rgb(221, 0, 49) 0px 0px 150px"
                }}
              />
              <div
                className="cube-face cube-face-left"
                style={{
                  background: "rgb(221, 0, 49)",
                  boxShadow: "rgb(221, 0, 49) 0px 0px 150px"
                }}
              />
              <div
                className="cube-face cube-face-right"
                style={{
                  background: "rgb(221, 0, 49)",
                  boxShadow: "rgb(221, 0, 49) 0px 0px 150px"
                }}
              />
              <div
                className="cube-face cube-face-top"
                style={{
                  background: "rgb(221, 0, 49)",
                  boxShadow: "rgb(221, 0, 49) 0px 0px 150px"
                }}
              />
              <div
                className="cube-face cube-face-bottom"
                style={{
                  background: "rgb(221, 0, 49)",
                  boxShadow: "rgb(221, 0, 49) 0px 0px 150px"
                }}
              />
            </div>
          </div>
          </div>
          )}
          </Move1>
        </div>
      </div>
    );
  }
}
