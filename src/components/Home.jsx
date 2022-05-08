import React from 'react'
import { Container, Card, CardGroup, Fade, Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

import Time from './TimeOFDay'

import Cards from './Cards'



function Home() {
  let { id } = useParams()
 


  return (
    <Container fluid className=' mx-auto p-5 mt-5 '>
      <Time />
      <h1 >Welkom username {id} </h1>

      <h4>Bent u aan het wachten om leuke dingen te gaan doen tot de prins op het witte paard langskomt en je meeneemt op avontuur? 
     Voel je dat je lang genoeg gewacht hebt en dat Parijs roept. Maar alleen de wereld gaan ontdekken is toch wat eng... 
       </h4>
       <p>Deze website is voor "avontuurlijke" dames die een partner in crime zoeken om op stap te gaan.</p>

<Cards/>


    </Container>





  )
}

export default Home