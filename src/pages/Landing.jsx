import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';

function Landing() {
  return (
    <>
   <div className="container-fluid mb-5 d-flex align-items-center" style={{height:"80vh"}}>
  <Row className="w-100 d-flex align-items-center">
    <Col className='p-5 d-flex flex-column justify-content-center' sm={12} md={6}>
      <h2>
        <i className="fa-brands fa-youtube fa-2xl" style={{color: "#b90404"}}></i>
        Media Player
      </h2>
      <p style={{textAlign:"justify"}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi facilis labore alias laboriosam nemo ipsa placeat, reiciendis, minima praesentium debitis maxime. Unde labore quo reprehenderit, laborum tempore cum facere eum.
      </p>
      <div className="d-grid">
        <Link to={'/home'} className="btn btn-success">Lets Go</Link>
      </div>
    </Col>
    <Col className='py-4 d-flex justify-content-center align-items-center' sm={12} md={6}>
      <img src="https://cdni.iconscout.com/illustration/premium/thumb/media-player-8044271-6369983.png?f=webp" alt="no image found" className='img-fluid' style={{maxHeight: '100%', objectFit: 'contain'}} />
    </Col>
  </Row>
</div>

    <div className="container-fluid my-5">
      <h3 className='my-3 text-center'>Features</h3>
      <div className="p-4 d-flex justify-content-around">
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/ec/59/f2/ec59f2f5cfbe75e212eb89d477ccf8d2.gif"  height={'200px'}/> 
      <Card.Body>
        <Card.Title>Manage Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://cdn.dribbble.com/users/652746/screenshots/1844317/upload_animation.gif"  height={'200px'}/> 
      <Card.Body>
        <Card.Title>Upload Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://vimeo.com/blog/wp-content/uploads/2017/11/Hxr1SRB.gif"  height={'200px'}/> 
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    </div>

    <div className="p-5">
      <Row>
        <Col sm={12} md={7}>
        <p style={{textAlign:"justify"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid est unde saepe architecto iusto ad corrupti maxime quasi. Ullam, harum rem cumque consectetur illum alias error repellat dicta aut quis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dicta eius ratione tempora blanditiis soluta optio in illum iste consequuntur vitae, id facilis odio quod cum aspernatur expedita sapiente deserunt.</p>
        </Col>
        <Col sm={12} md={5}>
        <iframe width="400" height="315" src="https://www.youtube.com/embed/SqcY0GlETPk?si=Yd_hJUwtpQ3xwtg4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Col>
      </Row>
    </div>
    </>
  )
}

export default Landing