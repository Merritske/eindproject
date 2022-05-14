import React, { useContext, useState, useEffect } from 'react'
import { Container, Nav, Button } from 'react-bootstrap'

import Cards from '../components/Cards'
import { UserProvider } from '../Context'
import { Link } from 'react-router-dom'




function Home() {


const [state, content, loggedIn] = useContext(UserProvider)
// const [userInlog, setUserInlog]= useState(loggedIn.value);
// console.log(userInlog)
// console.log(loggedIn)
 

// useEffect(()=>{
// if(state.username !== '' && state.password !== ""){
// setUserInlog(true)
// }
// else{
//   setUserInlog(false)
// }

// },[state])

  return (
    <Container fluid className=' mx-auto p-5 mt-5 '>


   

      <h4>Bent u aan het wachten om leuke dingen te gaan doen tot de prins op het witte paard langskomt en je meeneemt op avontuur? 
     Voel je dat je lang genoeg gewacht hebt en dat Parijs roept. Maar alleen de wereld gaan ontdekken is toch wat eng... 
       </h4>
       <p>Deze website is voor "avontuurlijke" dames die een partner in crime zoeken om op stap te gaan.</p>

<Cards/>


    </Container>





  )
}

export default Home