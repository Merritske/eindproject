import React, { useContext, useState, useEffect } from 'react'
import { Container, Nav, Button } from 'react-bootstrap'
import Time from '../components/TimeOFDay'
import Cards from '../components/Cards'
import { UserProvider } from '../Context'
import { Link } from 'react-router-dom'




function Home({handleChange, handleLogin}) {


const [state, content] = useContext(UserProvider)
const [userInlog, setUserInlog]= useState(false);

function handleLogout(){
localStorage.clear();
window.location.pathname = "/"
setUserInlog(false)
} 
function handleLogin(){
  setUserInlog(true);
  window.location.pathname = "/login"
}
useEffect(()=>{
if(state.username !== '' && state.password !== ""){
setUserInlog(true)
}
else{
  setUserInlog(false)
}

},[state])

  return (
    <Container fluid className=' mx-auto p-5 mt-5 '>
         <Nav>
        <Nav.Link >
         { userInlog ?   <button variant="primary" type='button' onClick={()=>{handleLogout()}} className="m-3">Logout</button> :
         <Button className="btn btn-outline-dark border border-5 btn-danger fs-5" type="button" onClick={()=>{handleLogin()}}>
              LOG IN  </Button>
   }
        </Nav.Link>
        
      </Nav>
      <Time />

      <h1 >Welkom {state.username}</h1>

   

      <h4>Bent u aan het wachten om leuke dingen te gaan doen tot de prins op het witte paard langskomt en je meeneemt op avontuur? 
     Voel je dat je lang genoeg gewacht hebt en dat Parijs roept. Maar alleen de wereld gaan ontdekken is toch wat eng... 
       </h4>
       <p>Deze website is voor "avontuurlijke" dames die een partner in crime zoeken om op stap te gaan.</p>

<Cards/>


    </Container>





  )
}

export default Home