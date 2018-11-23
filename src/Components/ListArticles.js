import React, { Component } from 'react';
import { Col, Card, Table, Button, CardBody, CardFooter, CardTitle, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import axios from 'axios';
import { connect } from 'react-redux';
import { addCartAction } from '../Actions/CartActions';

class ListArticles extends Component {
  constructor() {
    super();
    this.state = {
      articles: []
    }

    axios.get('http://localhost:6999/articles')
    .then((result) => {
      this.setState({articles: result.data})
    });
  }

  render() {
    return (
      <Col md={8}>
        <Card>
          <CardBody>
            <CardTitle>
              <p className="lead">List Articles</p>
            </CardTitle>
            <Table striped>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {this.state.articles.map((article, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row" width="50%">{article.name}</th>
                      <td width="20%">{article.price} $</td>
                      <td width="10%">{article.quantity}</td>
                      <td width="20%">
                        <Button color="primary" size="sm" onClick={() => {this.props.addToCart({name: article.name, price: article.price, quantity: 1})}} className="float-right">Add To Cart</Button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </Table>
          </CardBody>
          <CardFooter>
            <Pagination>
              <PaginationItem>
                <PaginationLink previous href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" >1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" >2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink next href="#" />
              </PaginationItem>
            </Pagination>
          </CardFooter>
        </Card>
      </Col>
    )
  }
}

const mapActionToProps ={
  addToCart: addCartAction
};

export default connect(null, mapActionToProps)(ListArticles);