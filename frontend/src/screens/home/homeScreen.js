import React, { useEffect } from 'react'
import { selectAllProducts } from '../../features/productsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../../components/product/Product'
import { getProducts } from '../../features/productsSlice'
import Loader from '../../components/essentials/Loader'
import Message from '../../components/essentials/Message'

const HomeScreen = () => {
  const dispatch = useDispatch()
  const products = useSelector(selectAllProducts)

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  let content

  if (products.status === 'loading') {
    content = <Loader />
  } else if (products.status === 'success') {
    content = (
      <Row>
        {products.items.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    )
    //This failed so far doesn't work reasons ? no idea
    //need more attention
  } else if (products.status === ' failed') {
    content = <Message>{products.error}</Message>
  } else {
    content = (
      <Message>
        No Products Available at the moment, Please try again later!
      </Message>
    )
  }

  return (
    <>
      <h1>Latest Products</h1>
      {content}
    </>
  )
}

export default HomeScreen
