import React, { Component } from 'react';
import { Col, Card, Table, CardBody, CardFooter, Button} from 'reactstrap';
import { connect } from 'react-redux';
import { removeCartAction } from '../Actions/CartActions';

class Cart extends Component {

  totalPriceCart() {
    let totalPrice = 0;
    this.props.cart.map(article => {
      return totalPrice += article.price;
    })
    return totalPrice;
  }

  render() {
    return (
      <Col md={4}>
        <Card>
          <CardBody>
            <p className="lead">Cart</p>
            <Table striped>
              <tbody>
              {this.props.cart.map((article, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row" width="50%">{article.name}</th>
                      <td width="20%">{article.price} $</td>
                      <td width="20%">
                        <Button color="warning" size="sm" onClick={() => {this.props.removeFromCart(index)}} className="float-right">Remove</Button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </Table>
          </CardBody>
          <CardFooter>
            <h3>Total Price : <span className="float-right">{this.totalPriceCart()}$</span></h3>
          </CardFooter>
        </Card>
      </Col>
    )
  }
}

const mapStateToProps = store => ({
  cart: store.cart
});

const mapActionsToProps = {
  removeFromCart: removeCartAction
};

export default connect(mapStateToProps, mapActionsToProps)(Cart);