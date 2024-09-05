import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { addCategory } from '../services/allApi';
import CategoryList from './CategoryList';

function Category() {
  const [show, setShow] = useState(false);
  const [category,setCategory] = useState({
    categoryId:"",title:"",video:[]
  })
  const [addResponse,setAddresponse]=useState("")

  const handleCategory=async()=>{
    console.log(category);
    const{categoryId,title}=category
    if(!categoryId || !title){
      toast.warning("Enter Valid Inputs")
    }
    else{
      const result=await addCategory(category)
      console.log(result);
      if(result.status==201){
        toast.success("Category Added!!")
        handleClose()
        setCategory({
          categoryId:"",title:"",video:[]
        })
        setAddresponse(result)
      }
      else{
        toast.error("Category Adding Failed!!")
      }
      
    }
    
  }
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <div className="d-grid">
      <button className="btn btn-success" onClick={handleShow}>Add Category</button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel controlId="floatingId" label="Category Id" className="mb-3">
        <Form.Control type="number" placeholder="Category Id" onChange={(e)=>{setCategory({...category,categoryId:e.target.value})}} />
      </FloatingLabel>
      <FloatingLabel controlId="vtitle" label="Category Title" className="mb-3">
        <Form.Control type="text" placeholder="title" onChange={(e)=>{setCategory({...category,title:e.target.value})}}/>
      </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        <Button variant="primary" onClick={handleCategory}>Add</Button>
        </Modal.Footer>
      </Modal>
    </div>
    <CategoryList response={addResponse}/>
    </>
  )
}

export default Category