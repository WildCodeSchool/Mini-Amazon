import React, { Component } from 'react';
import { Col, Card, Table, Button, CardBody, CardFooter, CardTitle, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import axios from 'axios';
import { connect } from 'react-redux';
import { addCartAction } from '../Actions/CartActions';
import { TRAD } from '../Utils/Utils';

class ListArticles extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      nbrPages: 0
    }

    this.getArticlesPerPage(0);

    axios.get('http://localhost:6999/articles/pages')
    .then((result) => {
      this.setState({nbrPages: result.data[0].pages});
    });
  }

  getArticlesPerPage = (page) => {
    axios.get(`http://localhost:6999/articles/page/${page}`)
    .then((result) => {
      this.setState({articles: result.data})
    });
  }

  pagination() {
    let pagination = [];

    for(let i = 0; i < this.state.nbrPages; i++){
      pagination = [...pagination, <PaginationItem key={i} onClick={() => {this.getArticlesPerPage(i)}}><PaginationLink href="#" >{i+1}</PaginationLink></PaginationItem>]
    }

    return pagination;
  }

  render() {
    return (
      <Col md={8}>
        <Card>
          <CardBody>
            <CardTitle>
              <p className="lead">{TRAD.listArticles}</p>
            </CardTitle>
            <Table striped>
              <thead>
                <tr>
                  <th>{TRAD.name}</th>
                  <th>{TRAD.price}</th>
                  <th>{TRAD.quantity}</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {this.state.articles.map((article, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row" width="50%">{article.name}</th>
                      <td width="20%">{article.price} {TRAD.devise}</td>
                      <td width="10%">{article.quantity}</td>
                      <td width="20%">
                        <Button color="primary" size="sm" onClick={() => {this.props.addToCart({name: article.name, price: article.price, quantity: 1})}} className="float-right">{TRAD.addToCart}</Button>
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
              {this.pagination()}
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