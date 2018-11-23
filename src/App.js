import React, { Component } from 'react';
import './App.css';
import { Container, Row } from 'reactstrap';
import ListArticles from './Components/ListArticles';
import Cart from './Components/Cart';
import Menu from './Components/Menu';

class App extends Component {
  render() {
    return (
      <Container>
        <Menu/>
        <Row className="mt-3">
          <ListArticles/>
          <Cart/>
        </Row>
      </Container>
    );
  }
}

export default App;