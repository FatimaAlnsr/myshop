import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../../components/product/Rating'
import { useDispatch, useSelector } from 'react-redux'
import {
  getProductDetails,
  selectProductDetails,
} from '../../features/productsSlice'

const ProductScreen = ({ match }) => {
  const dispatch = useDispatch()
  const products = useSelector(selectProductDetails)
  const currency = 'BHD'
  // const [product, setProduct] = useState({})

  useEffect(() => {
    // const fetchProduct = async () => {
    //   const { data } = await axios.get(`/api/products/${match.params.id}`)
    //   setProduct(data)
    // }

    // fetchProduct()
    dispatch(getProductDetails({ productId: match.params.id }))
  }, [match])
  console.log(products)
  return <div>anything</div>
  // return (
  //   <>
  //     <Link className="btn btn-light my-3" to="/">
  //       GO BACK
  //     </Link>
  //     <Row>
  //       {/* product Image */}
  //       <Col sm={12} md={6}>
  //         <Image src={product.image} alt={product.name} fluid />
  //       </Col>
  //       {/* product Details */}
  //       <Col sm={12} md={4} lg={3}>
  //         <ListGroup variant="flush">
  //           {/*  name */}
  //           <ListGroup.Item>
  //             <h2>{product.name}</h2>
  //           </ListGroup.Item>
  //           {/*  Rating */}
  //           <ListGroup.Item>
  //             <Rating
  //               value={product.rating}
  //               text={`${product.numReviews} Reviews`}
  //             />
  //           </ListGroup.Item>
  //           {/*  Price */}
  //           <ListGroup.Item>
  //             Price: {currency}
  //             {product.price}
  //           </ListGroup.Item>
  //           <ListGroup.Item>Description: {product.description}</ListGroup.Item>
  //         </ListGroup>
  //       </Col>
  //       {/* product status? */}
  //       <Col md={3}>
  //         <Card>
  //           <ListGroup variant="flush">
  //             <ListGroup.Item>
  //               <Row>
  //                 <Col>Price:</Col>
  //                 <Col>
  //                   <strong>
  //                     {currency}
  //                     {product.price}
  //                   </strong>
  //                 </Col>
  //               </Row>
  //             </ListGroup.Item>
  //             <ListGroup.Item>
  //               <Row>
  //                 <Col>Status:</Col>
  //                 <Col>
  //                   {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
  //                 </Col>
  //               </Row>
  //             </ListGroup.Item>
  //             <ListGroup.Item>
  //               <Button disabled={product.countInStock === 0} block>
  //                 Add To Cart
  //               </Button>
  //             </ListGroup.Item>
  //           </ListGroup>
  //         </Card>
  //       </Col>
  //     </Row>
  //   </>
  // )
}

export default ProductScreen
