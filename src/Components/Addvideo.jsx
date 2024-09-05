import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addVideo } from '../services/allApi';
import { toast } from 'react-toastify';


function Addvideo(props) {
  const [show,setShow] = useState(false);
  const [video,setVideo] = useState({
    videoID:"",videoTitle:"",imageUrl:"",VideoUrl:""
  })

  const handleUpload=async()=>{
    console.log(video)
    const {videoID,videoTitle,imageUrl,VideoUrl}=video
    if(!videoID || !videoTitle || !imageUrl || !VideoUrl)
    {
      // alert("please enter a valid input")
      toast.warning("please enter a valid input")
    }
    else{
      try{
      const vurl=VideoUrl.split("v=")[1]
      const eurl=`https://www.youtube.com/embed/${vurl}?si=YMfZdFOa_XiwxNRS&autoplay=1`
      video.VideoUrl=eurl
      const res=await addVideo(video)
      console.log(res);
      if(res.status==201){
        // alert("upload successfull")
        toast.success("uploaded successfully!!")
        handleClose()
        props.response(res)
      }
      else{
        // alert("upload failed")
        toast.error("Upload Failed!!")
      }
      }
      catch{
        console.log(err);
        // alert("Upload Failed")
        toast.error("Upload Failed!!")
        }
    }
  }
  
  const handleClose=()=>{
    setShow(false)
    setVideo({videoID:"",videoTitle:"",imageUrl:"",VideoUrl:""})
  };
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
        <Form.Control type="number" placeholder="1" onChange={(e)=>{setVideo({...video,videoID:e.target.value})}} />
      </FloatingLabel>
      <FloatingLabel controlId="vtitle" label="Video Title" className="mb-3">
        <Form.Control type="text" placeholder="title" onChange={(e)=>{setVideo({...video,videoTitle:e.target.value})}}/>
      </FloatingLabel>
      <FloatingLabel controlId="imgurl" label="Video Image URL" className="mb-3">
        <Form.Control type="text" placeholder="url" onChange={(e)=>{setVideo({...video,imageUrl:e.target.value})}}/>
      </FloatingLabel>
      <FloatingLabel controlId="vtitle" label="Youtube Video URL" className="mb-3">
        <Form.Control type="text" placeholder="vurl" onChange={(e)=>{setVideo({...video,VideoUrl:e.target.value})}}/>
      </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleUpload} >Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Addvideo