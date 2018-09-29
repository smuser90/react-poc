import React, { Component } from 'react'
import './Axis.css'

import gear from './gear.svg'



class Axis extends Component {
  constructor(props){
    super(props)
    this.name = "Axis " + props.index;
  }

  componentWillReceiveProps(nextProps) {
    this.setState({position: nextProps.position})
  }

  render() {

    var dotStyle = {
      marginLeft: (this.props.position / 1000) * 100 + "%",
    }


    return (
      <div className="Axis" state={this.props.axisState}>
      <div className="Grid">
      <img src={gear} className="AxisIcon" alt="gear" />
        <div className="stylie"><div className="dot" style={dotStyle}/></div>
        <h3 className="AxisTitle">{this.name}</h3>
        <div className="Load">{parseInt(this.props.position / 10 % 7)} lbs</div>
        <div className="Position">{this.props.position}.00 ft</div>
        <div className="Target">1000.00 ft</div>

      </div>

      </div>
    );
  }
}

export default Axis;
