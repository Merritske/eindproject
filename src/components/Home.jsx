import React from 'react'
import { Container, Card, CardGroup, Fade, Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

import Time from './TimeOFDay'

import Cards from './Cards'



function Home() {
  let { id } = useParams()
 


  return (
    <Container fluid className=' mt-5 p-5'>
      <Time />
      <h1 >Welkom username {id} </h1>

<Cards/>


    </Container>





  )
}

export default Home