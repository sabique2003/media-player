import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import VideoCard from "./VideoCard";
import { getVideo } from "../services/allApi";

function Videos(props) {
  const [videos, setVideos] = useState([]);
  const[delResponse,setDelResponse]=useState("")

  useEffect(() => {
    getData();
  }, [props.add,delResponse]);

  const getData = async () => {
    const res = await getVideo();
    console.log(res);
    if (res.status == 200) {
      setVideos(res.data);
    } else {
      console.log(res);
    }
    console.log(videos);
    
  };
  
  return (
    <>
      <div className="border border-3 shadow p-5 mb-3">
        {videos.length > 0 ? (
          <Row>
            {videos.map((item) => (
              <Col>
                <VideoCard video={item} response={setDelResponse}/>
              </Col>
            ))}
          </Row>
        ) :
         (
          <h2 className="text-center text-danger">No Videos Available</h2>
        )}
      </div>
    </>
  );
}

export default Videos;
