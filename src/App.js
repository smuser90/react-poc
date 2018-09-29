import React, { Component } from 'react'

import './App.css'
import Axis from './Axis'

const AXIS_COUNT = 100;

var AXIS_LIMIT = 1000;

class App extends Component {

  constructor(props) {
    super(props)

    this.rows = [];
    this.axes = [];
    this.axisState = 'ready';
    this.axisPosition = 0;

    for(var axis = 0; axis < AXIS_COUNT; axis++)
      this.axes.push(<Axis index={axis} position={this.axisPosition} axisState={this.axisState} key={Math.random()}/>)

    setTimeout(function() {
      this.updateAxesState();
    }.bind(this), 1000);
  }

  updateAxesState(){
    // schedule the next frame
    setTimeout(function() { this.updateAxesState(); }.bind(this), 16);

    if(this.axisPosition === 0)
      this.axisState = "ready"

    if(this.axisPosition === 200)
      this.axisState = "moving"

    if(this.axisPosition === 400)
      this.axisState = "warning"

    if(this.axisPosition === 600)
      this.axisState = "estop"

    if(this.axisPosition === 800)
      this.axisState = "disabled"

    for(var axis in this.axes){
      this.axes[axis] = React.cloneElement(this.axes[axis], {
        position: this.axisPosition,
        axisState: this.axisState,
      })
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
