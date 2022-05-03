import React from "react";
import { Row, Col, Image } from "react-bootstrap";


function Item({ item }) {
    const imgurl = "https://www.google.be/maps/place/Kildeparken/@57.0420857,9.9113999,16.75z/data=!4m5!3m4!1s0x464932f41e014375:0x7a6a87996b3b27d2!8m2!3d57.0423074!4d9.9140238";
    const imageRef = React.useRef();
    React.useEffect(() => {
      fetch(imgurl)
        .then(res => res.blob()) // Gets the response and returns it as a blob
        .then(blob => {
          let objectURL = URL.createObjectURL(blob);
          console.log(imageRef.current);
          imageRef.current.src = objectURL;
        });
    }, []);
  
    return (
      <div className="item" >
        <Row>
          <Col>
            <Image ref={imageRef} id="myImg" width="50" height="58" rounded />
          </Col>
          <Col xs={6}>
            <div className="item-info">
              <p></p>
            </div>
          </Col>
          <Col>3 of 3</Col>
        </Row>
  
        <div className="item-actions">
          <button className="btn-remove">X</button>
        </div>
      </div>
    );
  
  

  };
  

  

