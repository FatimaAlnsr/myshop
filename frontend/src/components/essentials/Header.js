import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <Navbar className="light" expand="lg" collapseOnSelect>
        <Container>
          {/* website Name & Navigation */}
          <LinkContainer to="/">
            <Navbar.Brand>My Shop</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* Nav Items */}
            <Nav className="ml-auto">
              {/* Cart */}
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fas fa-shopping-cart"></i> Cart
                </Nav.Link>
              </LinkContainer>
              {/* Sign in */}
              <LinkContainer to="/login">
                <Nav.Link>
                  <i className="fas fa-user"></i> Sign In
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
