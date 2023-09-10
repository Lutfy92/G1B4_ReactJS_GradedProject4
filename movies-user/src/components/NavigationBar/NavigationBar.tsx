import React from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap';
import {NavLink} from 'react-router-dom'
const NavigationBar =()=> {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container className='mx-3'>
          <Navbar.Brand as={NavLink} to="/">Movies in theaters </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/coming">Coming soon</Nav.Link>
            <Nav.Link as={NavLink} to="/topindian">Top rated indian</Nav.Link>
            <Nav.Link as={NavLink} to="/toprated">Top rated movies</Nav.Link>
            <Nav.Link as={NavLink} to="/favourites">Favourites</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}
export default NavigationBar