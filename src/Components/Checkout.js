import React, { Component } from 'react'
import { Col, Row, Card, Table, CardBody, CardFooter, Button, CardTitle, CardHeader} from 'reactstrap';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { countTotalPrice } from '../Utils/Utils';
import { TRAD } from '../Utils/Utils';

class Checkout extends Component {
  render() {
    if(this.props.cart.length === 0) {
      return <Redirect to='/'/>
    } else {
      return (
        <Row className="mt-3">
          <Col md="12">
            <Card>
              <CardBody>
                <CardTitle>
                  <p className="lead">{TRAD.checkout}</p>
                </CardTitle>
                <Table striped>
                  <thead>
                    <tr>
                      <th>{TRAD.name}</th>
                      <th>{TRAD.price}</th>
                      <th>{TRAD.quantity}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.cart.map((article, index) => {
                      return (
                        <tr key={index}>
                          <th scope="row" width="50%">{article.name}</th>
                          <td width="20%">{article.price} {TRAD.devise}</td>
                          <td width="10%">{article.quantity}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </Table>
                <Row>
                  <Col md="8">
                  
                  </Col>
                  <Col md="4">
                  <Card>
                    <CardHeader>
                      {TRAD.priceDetails}
                    </CardHeader>
                    <Table borderless>
                      <tbody>
                        <tr >
                          <td>{TRAD.ext}</td>
                          <td className="text-right">{countTotalPrice(this.props.cart) - countTotalPrice(this.props.cart)*0.20} {TRAD.devise}</td>
                        </tr>
                        <tr>
                          <td>{TRAD.taxes}</td>
                          <td className="text-right">{(countTotalPrice(this.props.cart)*0.20).toFixed(2)} {TRAD.devise}</td>
                        </tr>
                        <tr>
                          <td className="font-weight-bold lead">{TRAD.includedTaxes}</td>
                          <td className="text-right font-weight-bold lead">{countTotalPrice(this.props.cart)} {TRAD.devise}</td>
                        </tr>
                      </tbody>
                    </Table>
                    </Card>
                      <Button color="danger" className="float-left mt-3">{TRAD.cancel}</Button>
                      <Button color="success" className="float-right mt-3">{TRAD.pay}</Button>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      )
    }
  }
}

const mapStateToProps = store => ({
  cart: store.cart,
  calculeTotalPrice: store.calculeTotalPrice
});

export default connect(mapStateToProps)(Checkout);