import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';


function Header() {
  const nav=useNavigate()

  const lgout=()=>{
    nav('/')
    sessionStorage.removeItem('userData')
  }
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
        <button className='btn btn-danger me-2' onClick={lgout}>LogOut</button>
      </Navbar>
      </>
  )
}

export default Header