import React, { Component } from 'react'

import './App.css'
import Axis from './Axis'

/*
  100 Axes -> 60fps
  150 Axes -> 60fps
  200 Axes -> 50fps
  250 Axes -> 40fps
*/

const AXIS_COUNT = 500;

var AXIS_LIMIT = 1000;

class App extends Component {

  constructor(props) {
    super(props)

    this.rows = [];
    this.axes = [];
    this.axisState = 'ready';
    this.axisPosition = 0;
    this.quarter = 0;

    for(var axis = 0; axis < AXIS_COUNT; axis++)
      this.axes.push(<Axis index={axis} position={this.axisPosition} axisState={this.axisState} key={Math.random()}/>)

    setTimeout(function() {
      this.updateAxesState();
    }.bind(this), 1000);
  }

  updateQuarter(){
    this.quarter = this.quarter+1;
    if(this.quarter == 4) this.quarter = 0;
    console.log("Quarter is: "+this.quarter);
  }

  updateAxesState(){
    // schedule the next frame
    setTimeout(function() { this.updateAxesState(); }.bind(this), 16);

    var fifth = AXIS_LIMIT / 5;
    if(this.axisPosition ===  0){
      this.axisState = "ready"
      this.updateQuarter();
    }

    if(this.axisPosition === fifth){
      this.axisState = "moving"
      this.updateQuarter();
    }

    if(this.axisPosition === 2*fifth){
      this.axisState = "warning"
      this.updateQuarter();
    }
    if(this.axisPosition === 3*fifth){
      this.axisState = "estop"
      this.updateQuarter();
    }

    if(this.axisPosition === 4*fifth){
      this.axisState = "disabled"
      this.updateQuarter();
    }

    var quanta = (AXIS_COUNT / 4);
    var min = this.quarter * quanta;
    var max = min + quanta;

    for(var axis in this.axes){
      if(axis >= min && axis <= max){
        this.axes[axis] = React.cloneElement(this.axes[axis], {
          position: this.axisPosition,
          axisState: this.axisState,
        })
      }
    }

    this.axisPosition++;
    if(this.axisPosition > AXIS_LIMIT) this.axisPosition = 0;



    // Redraw
    this.forceUpdate();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">iQ Rendering Stress Test</h1>
        </header>
        <div className="Center">
          {this.axes}
        </div>
      </div>
    );
  }
}

export default App;
