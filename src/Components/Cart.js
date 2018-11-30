import React, { Component } from 'react';
import { Col, Card, Table, CardBody, CardFooter, Button} from 'reactstrap';
import { connect } from 'react-redux';
import { removeCartAction } from '../Actions/CartActions';
import { Link } from 'react-router-dom';
import { countTotalPrice, TRAD } from '../Utils/Utils';

class Cart extends Component {
  constructor(props) {
    super(props);
    console.log(this.props)
  }

  render() {
    return (
      <Col md={4}>
        <Card>
          <CardBody>
            <p className="lead">{TRAD.cart}</p>
            <Table striped>
              <tbody>
              {this.props.cart.map((article, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row" width="50%">{article.name}</th>
                      <td width="20%">{article.price} $</td>
                      <td width="20%">
                        <Button color="warning" size="sm" onClick={() => {this.props.removeFromCart(index)}} className="float-right">{TRAD.remove}</Button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </Table>
          </CardBody>
          <CardFooter>
            <h3>{TRAD.totalPrice} : <span className="float-right">{countTotalPrice(this.props.cart)}$</span></h3>
          </CardFooter>
        </Card>
        {this.props.cart.length === 0 ? null : <Link to="/checkout"><Button color="success" className="mt-3" size="md">{TRAD.checkout}</Button></Link>}
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