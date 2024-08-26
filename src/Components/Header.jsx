import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
    <Navbar className="bg-light">
        <Container>
          <Navbar.Brand href="#home">
          <i className="fa-brands fa-youtube fa-2xl" style={{color: "#b90404"}}></i>
            {' '}
            <span className='text-primary'>
            Media Player
            </span>
          </Navbar.Brand>
        </Container>
      </Navbar>
      </>
  )
}

export default Header