import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/essentials/Header'
import Footer from './components/essentials/Footer'
import Home from './screens/home/homeScreen'

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Home />
        </Container>
      </main>

      <Footer />
    </>
  )
}

export default App
