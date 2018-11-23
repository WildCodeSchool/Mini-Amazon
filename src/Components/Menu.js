import React, { Component } from 'react';
import { Col, Row} from 'reactstrap';

class Menu extends Component {
  render() {
    return (
      <Row>
        <Col md={12} className="mt-5">
          <img width="300px" src={process.env.PUBLIC_URL+'./assets/images/logo.svg'} alt="logo"/>
        </Col>
      </Row>
    )
  }
}


export default Menu;