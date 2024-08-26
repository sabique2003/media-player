import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <div className="bg-primary text-light py-2 container-fluid">
      <Row className='p-5'>
        <Col sm={12} md={5}>
        <h3>Media Player 2024</h3>
        <p style={{textAlign:"justify"}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sint veritatis omnis saepe, sed sunt nam, non aliquid suscipit temporibus eius voluptate nulla aperiam provident unde, molestias cum atque sapiente.
        </p>
        </Col>
        <Col sm={12} md={2}>
        <h3>Links</h3>
        <div className='d-flex flex-column'>
          <Link to={'/'}>Landing</Link>
          <Link to={'/home'}>Home</Link>
          <Link to={'/his'}>Watch History</Link>

        </div>
        </Col>
        <Col sm={12} md={5}>
        <h3>Feedback</h3>
        <textarea name="" id="" className='form-control'></textarea>
        <button className='btn btn-info mt-4'>Send</button>
        </Col>
      </Row>
      <h5 className='text-center'>All rights are reserved </h5>

    </div>
    </>
  )
}

export default Footer