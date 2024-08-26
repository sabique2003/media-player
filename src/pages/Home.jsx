import React from 'react'
import Addvideo from '../Components/Addvideo'
import Videos from '../Components/Videos'
import Category from '../Components/Category'
import { Row,Col } from 'react-bootstrap'

function Home() {
  return (
    <>
    <Row>
      <Col sm={12} md={1}>
    <Addvideo/>
    </Col>
    <Col sm={12} md={8}>
    <Videos/>
    </Col>
    <Col sm={12} md={3}>
    <Category/>
    </Col>
    </Row>
    </>
  )
}

export default Home