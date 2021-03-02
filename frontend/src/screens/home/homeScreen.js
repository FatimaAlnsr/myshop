import React, { useEffect } from 'react'
import { selectAllProducts } from '../../features/productsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../../components/product/Product'
import { getProducts } from '../../features/productsSlice'

const HomeScreen = () => {
  const dispatch = useDispatch()
  const products = useSelector(selectAllProducts)

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  let content

  if (products.status === 'loading') {
    content = <div>...Loading</div>
  } else if (products.status === ' failed') {
    content = <div>{products.error}</div>
  } else {
    content = (
      <Row>
        {products.items.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
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
