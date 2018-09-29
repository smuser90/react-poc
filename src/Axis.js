import React, { Component } from 'react'
import './Axis.css'
import logo from './logo.svg'
import { Grid, Row, Col } from 'react-flexbox-grid';

class Axis extends Component {
  constructor(props){
    super(props)
    this.index = props.index;
    this.name = "Axis " + this.index;
  }

  componentWillReceiveProps(nextProps) {
    this.setState({position: nextProps.position})
  }

  render() {

    return (
      <Grid className="Axis">
        <Row>
          <Col md={2}>
            <img src={logo} className="AxisIcon" alt="logo" />
          </Col>
          <Col md={2}>
            <h3 className="AxisTitle">{this.name}</h3>
          </Col>
        </Row>
        <Row>
          <Col md={2}>
            <div className="Position">
              {this.props.position}
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Axis;
