import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

import productsData from './ProductsData'

function ProductRow(props) {
  
  const product = props.product
  const productLink = `/products/${product.id}`

  const getBadge = (status) => {
    return status === 'Active' ? 'success' :
      status === 'Inactive' ? 'secondary' :
        status === 'Pending' ? 'warning' :
          status === 'Banned' ? 'danger' :
            'primary'
  }

  return (
    <tr key={product.id.toString()}>
      <th scope="row"><Link to={productLink}>{product.id}</Link></th>
      <td><Link to={productLink}>{product.ownername}</Link></td>
      <td>{product.prodname}</td>
      <td>{product.prodprice}</td> 
      <td>{product.prodamount}</td>
      <td>{product.prodseason}</td>

      <td><Link to={productLink}><Badge color={getBadge(product.status)}>{product.status}</Badge></Link></td>
    </tr>
  )
}

class Products extends Component {

  render() {

    const productList = productsData.filter((product) => product.id < 10)

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={6}>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Products <small className="text-muted">table</small>
              </CardHeader>
              <CardBody>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th scope="col">id</th>
                      <th scope="col">owner name</th>
                      <th scope="col">product name</th>
                      <th scope="col">product price</th>
                      <th scope="col">product amount</th>
                      <th scope="col">product season</th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    {productList.map((product, index) =>
                      <ProductRow key={index} product={product}/>
                    )}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Products;
