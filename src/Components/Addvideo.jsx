import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


function Addvideo() {
  const [show,setShow] = useState(false);
  const handleClose=()=>setShow(false);
  const handleShow=()=>setShow(true);

  return (
    <>

    <button className="btn" onClick={handleShow}>
    <i class="fa-solid fa-circle-plus" />
    </button>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel controlId="floatingId" label="Video Id" className="mb-3">
        <Form.Control type="number" placeholder="1" />
      </FloatingLabel>
      <FloatingLabel controlId="vtitle" label="Video Title" className="mb-3">
        <Form.Control type="text" placeholder="title" />
      </FloatingLabel>
      <FloatingLabel controlId="imgurl" label="Video Image URL" className="mb-3">
        <Form.Control type="text" placeholder="url" />
      </FloatingLabel>
      <FloatingLabel controlId="vtitle" label="Youtube Video URL" className="mb-3">
        <Form.Control type="text" placeholder="vurl" />
      </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success">Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Addvideo