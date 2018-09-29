import React, { Component } from 'react'
import { Row } from 'react-flexbox-grid';

class DeviceRow extends Component {
  constructor(props){
    super(props)
    this.column = props.column
  }

  render() {
    return (
      <Row key={Math.random()}>
        {this.column}
      </Row>
    );
  }
}

export default DeviceRow;
