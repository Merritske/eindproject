import React, { useContext, useEffect,  useState } from 'react'
import Login from './Login'
import logo from "../images/logoVO.png"
import { Container, Image, Col, Row, Navbar, Brand, Nav } from 'react-bootstrap';

import { Navigate } from 'react-router-dom';
import { UserProvider } from '../Context';

function NavbarComponent() {

 


  return (
    <div>
<Container fluid >
 
   <Row  className='justify-content-space-around'>
  <Navbar bg="secondary" variant="secondary" fixed="top" >
 
   <Col md={1}    >
      <Navbar.Brand href="/" > 
      
        <img
          alt="logo"
          src={logo}
          width="40"
          height="40"
          className=" rounded"
        />{' '} 
         </Navbar.Brand>   </Col>
         <Col md={8}>
         <Navbar.Text className='text-white fs-1 '>
         Girls just want to have fun! 
     </Navbar.Text>
         </Col>
  
   
   </Navbar>
</Row>
    
 


      



</Container>


 



{/* 
  <li className="nav-item w-25 fs-1 text-pop-up-bottom">
    <a className="nav-link "  href="#">HOME</a>
  </li>
{
    user? <ul className="nav d-flex justify-content-around"> <li className="nav-item  text-uppercase fs-1 text-pop-up-bottom">
    <a className="nav-link text-danger" href="#">Reisverslag</a>
  </li>
  <li className="nav-item text-uppercase fs-1 text-pop-up-bottom">
    <a className="nav-link text-danger" href="#">Extra's</a>
  </li> </ul>:  
} */}
 
 




    </div>
  )
}

export default NavbarComponent