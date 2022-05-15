import React, { useContext, useEffect,  useState } from 'react'
import Login from './Login'
import logo from "../images/logoVO.png"
import { Container, Image, Col, Row, Navbar, Brand, Nav, Button } from 'react-bootstrap';
import Time from '../components/TimeOFDay'
import { Navigate } from 'react-router-dom';
import { UserProvider } from '../context';
import ReisSchema from './ReisSchema';

function NavbarComponent({handleChange, handleLogout}) {
  const [state, content, loggedIn] = useContext(UserProvider)
  function handleLogin(){

    window.location.pathname = "/login"
  }


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
    
 

<Row className='mt-5 bg-secondary' id="navdos">


  <Col >

         { loggedIn ?   <button variant="primary" type='button' onClick={handleLogout} className="m-3 btn btn-outline-dark border border-5 btn-light ">Logout</button> :
         <Button className="btn btn-outline-dark border border-5 btn-danger fs-5 m-3" type="button" onClick={()=>{handleLogin()}}>
              LOG IN  </Button>
   }
    
        
   
  </Col>
  <Col className='p-3'  >
  <ReisSchema/>
  </Col>
</Row>
      

   <h1 ><Time /></h1>

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