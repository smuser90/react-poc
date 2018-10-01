import React, { Component } from 'react'

import './App.css'
import Axis from './Axis'

/*
  100 Axes -> 60fps
  150 Axes -> 60fps
  200 Axes -> 50fps
  250 Axes -> 30fps
*/

const AXIS_COUNT = 50
const AXIS_LIMIT = 1000

var tick = 0;

function populateAxes() {
  let res = []
  for (var i = 0; i < AXIS_COUNT; i++) {
    res.push({
      state: 'ready',
      position: 0,
      index: i
    })
  }

  return res
}


class App extends Component {
  state = {
    axes: populateAxes()
  }

  componentDidMount() {
    requestAnimationFrame(this.advanceState.bind(this))
  }

  getNextAxisState(){
    var res;

    if(this.state.axes[0]['position'] < 200)
      res = 'ready';
    else if(this.state.axes[0]['position'] < 400)
      res = 'moving';
    else if(this.state.axes[0]['position'] < 600)
      res = 'warning';
    else if(this.state.axes[0]['position'] < 700)
      res = 'estop';
    else if(this.state.axes[0]['position'] < 850)
      res = 'disabled';
    else
      res = 'moving';

    return res;
  }

  advanceState(){
    var nextState = this.getNextAxisState();


    this.setState({
      axes: this.state.axes.map(axis => ({
        state: nextState,
        position: (axis.position + 1) % 1000
      }))
    })

    requestAnimationFrame(this.advanceState.bind(this))
  }

  render() {
    const { axes } = this.state

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">iQ Rendering Stress Test</h1>
        </header>

        <div className="Center">
          {axes.map((axis, i) => (
            <Axis key={i} state={axis.state} position={axis.position} index={axis.index}/>
          ))}
        </div>
      </div>
    )
  }
}

export default App
