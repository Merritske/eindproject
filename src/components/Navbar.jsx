import React, { useEffect, useContext, useState } from 'react'
import Login from './Login'
import logo from "../images/logoVO.png"
import { Container, Image, Col, Row, Navbar, Brand, Nav } from 'react-bootstrap';
import { UserProvider } from '../Context'
import { Navigate } from 'react-router-dom';

function NavbarComponent({handleChange, handleLogin}) {
  const username = useContext(UserProvider)
    const [userInlog, setUserInlog]= useState(false);

function handleLogout(){
  localStorage.clear();
  window.location.pathname = "/"
  setUserInlog(false)
} 
   


 useEffect( ()=>{
console.log(username)

if(username != ""){
  setUserInlog(true)

}else if(username == "") {
setUserInlog(false)
}
console.log(userInlog)
 },[])






  return (
    <div>
<Container fluid >
 
   <Row  className='justify-content-space-around'>
  <Navbar bg="secondary" variant="secondary" fixed="top" >
 
   <Col md={1}    >
      <Navbar.Brand href="#home" > 
      
        <img
          alt="logo"
          src={logo}
          width="40"
          height="40"
          className=" rounded"
        />{' '} 
         </Navbar.Brand>   </Col>
         <Col md={{span:5, offset:0}} sm={{span:3, offset:1}}>
         <Navbar.Text className='text-white fs-1 '>
         Girls just want to have fun! 
     </Navbar.Text>
         </Col>
  
    <Col  md={{span:3, offset:4}} sm={{span:3, offset:4}} >
      <Nav>
        <Nav.Link >
         { userInlog ?   <button variant="primary" type='button' onClick={()=>{handleLogout();
         }} className="m-3">Logout</button> :
           <Login handleChange={handleChange} handleLogin={handleLogin} /> }
        </Nav.Link>
        
      </Nav>

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