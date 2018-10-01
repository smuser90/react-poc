import React, { PureComponent } from 'react'
import './Axis.css'
import Gear from './gear.svg'


class Axis extends PureComponent {
  constructor(props){
    super(props)
    this.name = "Axis " + props.index;
    this.state = {
      gear : Gear
    }
  }

  render() {

    var dotStyle = {
      marginLeft: (this.props.position / this.props.limit) * 100 + "%",
    }

    const {gear} = this.state

    return (
      <div className="Axis" state={this.props.state}>
        <div className="Grid">
          <img src={gear} className="AxisIcon" alt="gear" />
          <div className="stylie"><div className="dot" style={dotStyle}/></div>
          <h3 className="AxisTitle">{this.name}</h3>
          <div className="Load">{ this.props.load } lbs</div>
          <div className="Position">{this.props.position}.00 ft</div>
          <div className="Target">{this.props.limit}.00 ft</div>
        </div>
      </div>
    );
  }
}

export default Axis;
