import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap'
import Rating from '../../components/product/Rating'
import Message from '../../components/essentials/Message'
import Loader from '../../components/essentials/Loader'
import { useDispatch, useSelector } from 'react-redux'
import {
  getProductDetails,
  selectProductDetails,
} from '../../features/productSlice'

const ProductScreen = ({ match, history }) => {
  const [qty, setQty] = useState(1)
  const dispatch = useDispatch()
  const { items: product, status, error } = useSelector(selectProductDetails)
  const currency = 'BHD'

  useEffect(() => {
    dispatch(getProductDetails({ productId: match.params.id }))
  }, [match])

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`)
  }

  let content
  if (status === 'loading') {
    content = <Loader />
  } else if (status === 'failed') {
    content = <Message>{error}</Message>
  } else {
    content = (
      <Row>
        {/* product Image */}
        <Col sm={12} md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        {/* product Details */}
        <Col sm={12} md={4} lg={3}>
          <ListGroup variant="flush">
            {/*  name */}
            <ListGroup.Item>
              <h2>{product.name}</h2>
            </ListGroup.Item>
            {/*  Rating */}
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} Reviews`}
              />
            </ListGroup.Item>
            {/*  Price */}
            <ListGroup.Item>
              Price: {currency}
              {product.price}
            </ListGroup.Item>
            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        {/* product status? */}
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>
                      {currency}
                      {product.price}
                    </strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                  </Col>
                </Row>
              </ListGroup.Item>
              {product.countInStock > 0 && (
                //Mapping through the count in stock available to add them to select option
                //Convert the countInStock to array
                <ListGroup.Item>
                  <Row>
                    <Col>Qty</Col>
                    <Col>
                      <Form.Control
                        as="select"
                        value={qty}
                        onChange={(e) => setQty(e.target.value)}
                      >
                        {[...Array(product.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                  </Row>
                </ListGroup.Item>
              )}
              <ListGroup.Item>
                <Button
                  disabled={product.countInStock === 0}
                  block
                  onClick={addToCartHandler}
                >
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    )
  }

  return (
    <>
      <Link className="btn btn-light my-3" to="/" onClick={addToCartHandler}>
        GO BACK
      </Link>
      {content}
    </>
  )
}

export default ProductScreen
