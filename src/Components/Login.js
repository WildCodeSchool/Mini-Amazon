import React, { Component } from 'react';
import { Row, Card, CardHeader, Form, Col, CardBody, CardFooter, Button, Input, FormGroup, Label } from 'reactstrap';
import { TRAD } from '../Utils/Utils';

class Login extends Component {
  render() {
    return (
      <Card className="card-login" className="mt-3 mb-3">
        <CardHeader tag="h3"><div className="display-4">{TRAD.login}</div></CardHeader>
        <Form onSubmit={this.submitLoginForm}>
          <CardBody>
            <Row form className="align-self-center">
              <Col md={12}>
                <FormGroup>
                  <Label for="current-email">{TRAD.email}</Label>
                  <Input type="email" name="current-email" id="current-email" onChange={this.handleChangeEmail} />
                </FormGroup>
                <FormGroup>
                  <Label for="current-password">{TRAD.password}</Label>
                  <Input type="password" name="password" id="current-password" onChange={this.handleChangePassword} />
                </FormGroup>
              </Col>
            </Row>
          </CardBody>
          <CardFooter className="text-muted">
            <Button color="primary" type="submit">{TRAD.login}</Button>
            <a color="link" href="/account/create" className="float-right">{TRAD.createYourAccount}</a>
          </CardFooter>
        </Form>
      </Card>
    )
  }
}

export default Login