import React, { Component } from 'react';
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import axios from 'axios';


class AddProduct extends Component {
    state = {
        SelectedFile: null
    }

    FileSelectedHandler = event => {
            this.setState({       
            SelectedFile: event.target.files[0]
            })
    }

    FileUploadHandler =() =>{
        const fd = new FormData();
        fd.append('image',this.state.SelectedFile, this.state.SelectedFile.name);
        axios.post('https://miro.medium.com/max/800/1*2a5Zidam3OI-Ep19-tT1AQ.gif',fd)
        .then(res => {
            console.log(res);
        });
        

    }

  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form>
                    <h1>Add Product</h1>
                    <p className="text-muted">Enter the information needed </p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                        <i className="icon-disc icons d-block mt-2"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="product name" autoComplete="product name" />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                        <i className="icon-check icons d-block mt-2"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="product price" autoComplete="product price" />
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                        <i className="icon-notebook icons  d-block mt-2"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="product amount" autoComplete="product amount" />
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                            <i className="icon-picture icons d-block mt-1"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <input type="file" onChange={this.fileChangedHandler}/>
                      <button onClick={this.FileUploadHandler}>Upload!</button>




                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                        <i className="icon-calendar icons d-block mt-2"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="product expiry date " autoComplete="product expiry date" />
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                        <i className="icon-info icons d-block mt-2"></i>

                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="product season" autoComplete="product season" />
                    </InputGroup>
                    <Button color="success" block>Add product</Button>
                  </Form>
                </CardBody>
                
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default AddProduct;




{/* <i className="icon-cloud-upload icons font-2xl d-block mt-4"></i>

<Col xs="6" sm="4" md="3">
                <i className="icon-social-twitter icons font-2xl d-block mt-4"></i>icon-social-twitter
              </Col>

              <Col xs="6" sm="4" md="3">
                <i className="icon-social-facebook icons font-2xl d-block mt-4"></i>icon-social-facebook
              </Col>

              <Col xs="6" sm="4" md="3">
                <i className="icon-social-instagram icons font-2xl d-block mt-4"></i>icon-social-instagram
              </Col> */}
