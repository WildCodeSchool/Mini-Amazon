import React, { Component } from 'react';
import './App.css';
import { Container, Row } from 'reactstrap';
import ListArticles from './Components/ListArticles';
import Cart from './Components/Cart';
import Menu from './Components/Menu';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import Checkout from './Components/Checkout';
import { Route } from 'react-router-dom';
import { setLanguage } from './Utils/Utils';


class App extends Component {
  render() {
    return (
      <Container>
        <Menu/>
        <Route exact path="/"  render={() => 
          <Row className="mt-3">
            <ListArticles />
            <Cart/>
          </Row>
        } />
        <Route exact path="/checkout" component={Checkout} />
        <Route path="/account/create" component={SignUp} />
        <Route path="/account/login" component={Login} />
        <a onClick={() => {setLanguage("FR")}}>FR</a> | <a onClick={() => {setLanguage("EN")}}>EN</a>
      </Container>
    );
  }
}

export default App;