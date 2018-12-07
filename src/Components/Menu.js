import React, { Component } from 'react';
import { Col, Row, Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { TRAD } from '../Utils/Utils';

class Menu extends Component {
  constructor() {
    super();
    this.state = {
      toggle: false
    };
  }

  render() {
    return (
      <Row>
        <Col md={12} className="mt-5">
          <Navbar color="faded" light expand="md">
            <NavbarBrand href="/">
              <img width="300px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Amazon_logo_plain.svg/1280px-Amazon_logo_plain.svg.png" alt="logo"/>
            </NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/account/create">{TRAD.createAccount}</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/account/login">{TRAD.login}</NavLink>
              </NavItem>
            </Nav>
          </Navbar>
        </Col>
      </Row>
    );
  }
}


export default Menu;