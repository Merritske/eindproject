import React, { useContext, useState, useEffect } from 'react'
import { Container, Nav } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

import Time from './TimeOFDay'
import Login from './Login'
import Cards from './Cards'
import { UserProvider } from '../Context'




function Home({handleChange, handleLogin}) {


const [username] = useContext(UserProvider)
const [userInlog, setUserInlog]= useState(false);

function handleLogout(){
localStorage.clear();
window.location.pathname = "/"
setUserInlog(false)
} 

useEffect(()=>{
if(username.username != ''){
setUserInlog(true)
}
console.log(username.username)
console.log(userInlog)
},[username.token])
console.log(username.token)

  return (
    <Container fluid className=' mx-auto p-5 mt-5 '>
         <Nav>
        <Nav.Link >
         { userInlog ?   <button variant="primary" type='button' onClick={()=>{handleLogout()}} className="m-3">Logout</button> :
           <Login handleChange={handleChange} handleLogin={handleLogin} /> }
        </Nav.Link>
        
      </Nav>
      <Time />

      <h1 >Welkom {username.username}</h1>

   

      <h4>Bent u aan het wachten om leuke dingen te gaan doen tot de prins op het witte paard langskomt en je meeneemt op avontuur? 
     Voel je dat je lang genoeg gewacht hebt en dat Parijs roept. Maar alleen de wereld gaan ontdekken is toch wat eng... 
       </h4>
       <p>Deze website is voor "avontuurlijke" dames die een partner in crime zoeken om op stap te gaan.</p>

<Cards/>


    </Container>





  )
}

export default Home