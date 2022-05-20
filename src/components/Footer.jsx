import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import github from "../images/github_icon.png"

function Footer() {
  return (
    <Container fluid>
   <Row className='d-flex w-100 border border-5 border-danger align-items-center justify-content-center bg-secondary rounded-pill   mx-auto'>
       <Col md={3}>
       <h4 className='text-white fs-5 p-1'>
         Merritske 2022
         </h4> 
   </Col>
   <Col md={1}  >
     <a href='https://github.com/Merritske/eindproject' rel='noreferrer' target="_blank"><Image src={github} className=" m-1 bg-white rounded-circle" style={{"width":"20px"}} alt="githublink" /> </a> 
   </Col>
   </Row>
   
    </Container>
    
  )
}

export default Footer