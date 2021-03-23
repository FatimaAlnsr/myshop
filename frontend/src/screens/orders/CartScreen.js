import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addingToCart, selectCart } from '../../features/cartSlice'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import Message from '../../components/essentials/Message'

const CartScreen = ({ match, history }) => {
  const currency = 'BHD'
  const location = useLocation()
  //to get the qty from the url
  const qty = new URLSearchParams(location.search).get('qty')
  const itemId = match.params.id
  const dispatch = useDispatch()

  useEffect(() => {
    if (itemId) {
      dispatch(addingToCart({ itemId, qty }))
    }
  }, [dispatch, itemId, qty])

  const { cartItems } = useSelector(selectCart)

  console.log(cartItems)

  useEffect(() => {
    if (cartItems) {
      localStorage.setItem('cartItems', JSON.stringify(cartItems))
    }
  })

  const removeFromCartHandler = () => {}

  const checkoutHandler = () => {
    history.push('/login?redirect=shipping')
  }

  return <div> cart </div>

  // return (
  //   <Row>
  //     <Col md={8}>
  //       {cartItems.length === 0 ? (
  //         <Message variant="primary">
  //           {' '}
  //           Your Cart is Empty <Link to="/">Go Back</Link>
  //         </Message>
  //       ) : (
  //         <ListGroup variant="flush">
  //           {cartItems.map((item) => (
  //             <ListGroup.Item key={item.itemId}>
  //               <Row>
  //                 <Col md={2}>
  //                   <Image src={item.image} alt={item.name} fluid rounded />
  //                 </Col>
  //                 <Col md={3}>
  //                   <Link to={`/product/${item.itemId}`}>{item.name}</Link>
  //                 </Col>
  //                 <Col md={2}>
  //                   {currency}
  //                   {item.price}
  //                 </Col>
  //                 {/* can we make a component for this thing ? */}
  //                 <Col md={2}>
  //                   <Form.Control
  //                     as="select"
  //                     value={item.qty}
  //                     onChange={(e) =>
  //                       dispatch(
  //                         addingToCart(item.itemId, Number(e.target.value))
  //                       )
  //                     }
  //                   >
  //                     {[...Array(item.countInStock).keys()].map((x) => (
  //                       <option key={x + 1} value={x + 1}>
  //                         {x + 1}
  //                       </option>
  //                     ))}
  //                   </Form.Control>
  //                 </Col>
  //                 <Col md={2}>
  //                   <Button
  //                     type="button"
  //                     variant="light"
  //                     onClick={() => removeFromCartHandler(item.itemId)}
  //                   >
  //                     <i className="fas fa-trash"></i>
  //                   </Button>
  //                 </Col>
  //               </Row>
  //             </ListGroup.Item>
  //           ))}
  //         </ListGroup>
  //       )}
  //     </Col>
  //     <Col md={4}>
  //       <Card>
  //         <ListGroup variant="flush">
  //           <ListGroup.Item>
  //             <h2>
  //               Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
  //               items
  //             </h2>
  //             {currency}{' '}
  //             {cartItems
  //               .reduce((acc, item) => acc + item.qty * item.price, 0)
  //               .toFixed(2)}
  //           </ListGroup.Item>
  //           <ListGroup.Item>
  //             <Button
  //               type="button"
  //               className="btn-block"
  //               disabled={cartItems.length === 0}
  //               onClick={checkoutHandler}
  //             >
  //               Proceed to Checkout
  //             </Button>
  //           </ListGroup.Item>
  //         </ListGroup>
  //       </Card>
  //     </Col>
  //   </Row>
  // )
}

export default CartScreen
