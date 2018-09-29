import React, { Component } from 'react'

import './App.css'
import Axis from './Axis'

import { Grid } from 'react-flexbox-grid';
import DeviceRow from './DeviceRow';
import DeviceColumn from './DeviceColumn';

const FRAME_RATE = 1;
const FRAME_TIME = 1000 / FRAME_RATE;

class App extends Component {

  constructor(props) {
    super(props)

    this.rows = [];
    this.axes = [];
    this.axisPositions = [];

    var axisNum = 0;
    for (var row = 0; row < 50; row++) {
        var column = [];

        for(var col = 0; col < 5; col++){
          this.axisPositions.push(parseInt(1000 *Math.random()));

          var axis = <Axis index={axisNum} position={this.axisPositions[axisNum]} key={Math.random()}/>
          this.axes.push(axis);
          column.push(<DeviceColumn axes={axis} key={Math.random()}/>)
          axisNum++;
        }

        this.rows.push(<DeviceRow column={column} key={Math.random()}></DeviceRow>)
    }

    setTimeout(function() {
      setInterval(function() { this.updateAxesState(); }.bind(this), 1000);
    }.bind(this), 16);
  }

  updateAxesState(){
    for(var index in this.axisPositions){
      this.axisPositions[index] = Math.random();
    }

    this.forceUpdate();

    console.log(Date.now() + ": Tick");

  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">iQ Rendering Stress Test</h1>
        </header>
        <div className="Center">
          <Grid fluid>
            {this.rows}
          </Grid>
        </div>
      </div>
    );
  }
}

export default App;
