import React, { Component } from 'react'
import { Col } from 'react-flexbox-grid';

class DeviceColumn extends Component {
  constructor(props){
    super(props)
    this.axes = props.axes
  }

  render() {
    return (
      <Col md={2} key={Math.random()}>
        {this.axes}
      </Col>
    );
  }
}

export default DeviceColumn;
