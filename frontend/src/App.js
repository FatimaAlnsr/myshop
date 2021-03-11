import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/essentials/Header'
import Footer from './components/essentials/Footer'
import HomeScreen from './screens/home/HomeScreen'
import ProductScreen from './screens/products/ProductScreen'
import CartScreen from './screens/orders/CartScreen'

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
