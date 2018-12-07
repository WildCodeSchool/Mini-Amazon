import React, { Component } from 'react';
import { Row, Card, CardHeader, Form, Col, CardBody, CardFooter, Button, Input, FormGroup, Label } from 'reactstrap';
import { TRAD } from '../Utils/Utils';
import Axios from 'axios';
import SHA256 from 'sha256';

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      password: "",
      password2: "",
      email: "",
      surname: "",
      name: "",
      address: "",
      sex: 0
    }

    this.disableSubmitButton = true;
  }

  handleChange = (event) => {
    this.setState({[event.target.id]: event.target.value});
  }

  handleSubmit = () => {
    console.log("ererer")
    Axios.post("http://localhost:6999/account/create", {
      password: SHA256(this.state.password),
      email: this.state.email,
      surname: this.state.surname,
      name: this.state.name,
      address: this.state.address,
      sex: this.state.sex
    })
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err);
    })
  }

  render() {
    if(this.state.email.length > 0 && 
      this.state.surname.length > 0 && 
      this.state.name.length > 0 &&
      this.state.password.length > 0 && 
      this.state.password2.length > 0 && 
      this.state.address.length > 0) {
        if(this.state.password === this.state.password2) {
          this.disableSubmitButton = false;
        } else {
          this.disableSubmitButton = true;
        }
      } else {
        this.disableSubmitButton = true;
      }
    return (
      <Card className="card-login" className="mt-3 mb-3">
        <CardHeader tag="h3"><div className="display-4">{TRAD.createAccount}</div></CardHeader>
        <Form onSubmit={this.handleSubmit}>
          <CardBody>
            <Row form className="align-self-center">
              <Col md={12}>
                <FormGroup>
                  <Label for="email">{TRAD.email}</Label>
                  <Input type="email" name="email" id="email" onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                  <Label for="password">{TRAD.password}</Label>
                  <Input type="password" name="password" id="password" onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                  <Label for="password2">{TRAD.password2  }</Label>
                  <Input type="password" name="password2" id="password2" onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                  <Label for="name">{TRAD.name}</Label>
                  <Input type="text" name="Name" id="name" onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                  <Label for="surname">{TRAD.surname}</Label>
                  <Input type="text" name="surName" id="surname" onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                  <Label for="address">{TRAD.address}</Label>
                  <Input type="text" name="address" id="address" onChange={this.handleChange} />
                </FormGroup>
                <FormGroup tag="fieldset" onChange={this.handleChange}>
                  <FormGroup check>
                    <Label check>
                      <Input type="radio" id="sex" name="genre" value="0" checked/>{' '}
                      {TRAD.genre1}
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input type="radio" id="sex" name="genre" value="1"/>{' '}
                      {TRAD.genre2}
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input type="radio" id="sex" name="genre"  value="2"/>{' '}
                      {TRAD.genre3}
                    </Label>
                  </FormGroup>
                </FormGroup>
              </Col>
            </Row>
          </CardBody>
          <CardFooter className="text-muted">
            <Button color="primary" type="submit" disabled={this.disableSubmitButton}>{TRAD.createYourAccount}</Button>
            <a color="link" href="/account/login" className="float-right">{TRAD.login}</a>
          </CardFooter>
        </Form>
      </Card>
    )
  }
}

export default SignUp;