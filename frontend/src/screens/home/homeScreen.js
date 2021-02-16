import React from 'react'
import products from '../../products'
import { Row, Col } from 'react-bootstrap'
import Product from '../../components/product/Product'

const homeScreen = () => {
  return (
    <>
      <h1>Latest Producs</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default homeScreen
