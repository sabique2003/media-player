import React,{ useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { deleteVideo,addHistory } from '../services/allApi';
import { toast } from 'react-toastify';

function VideoCard({video,response,cat}) {
  const [show, setShow] = useState(false);
  const handleDelete=async()=>{
    const res=await deleteVideo(video.id)
    console.log(res);
    if(res.status==200)
    {
      toast.success("deletion successfull")
      response(res)
    }
    else{
      toast.error("deletion failed")
    }
  }
  const draghandler=(e)=>{
    console.log(e);
    console.log(video);
    e.dataTransfer.setData("video",JSON.stringify(video))
    
    
  }

  const handleClose = () => setShow(false);
  const handleShow =async () =>{ 
    setShow(true)
    const dt=new Date()
    const data={videoId:video.id,title:video.videoTitle,url:video.VideoUrl,datetime:dt}
    console.log(data);
    const result=await addHistory(data)
    
  };

  return (
    <>
    <Card style={cat?{width:'100%'}:{ width: '18rem' }} className='my-2 bg-dark' onDragStart={(e)=>{draghandler(e)}} draggable>
      <Card.Img variant="top" onClick={handleShow} src={video?.imageUrl} style={{cursor:"pointer"}} />
      <Card.Body>
        <Card.Title>{video?.videoTitle}</Card.Title>
        {
          !cat &&
          <Button variant="button" onClick={handleDelete}>
          <i className="fa-solid fa-trash" style={{color: "#c02a2a",}} />
        </Button>
        }
       
      </Card.Body>
    </Card>

    
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{video?.videoTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe 
        width="100%"
         height="315"
          src={video?.VideoUrl}
           title="YouTube video player" frameborder="0" 
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default VideoCard