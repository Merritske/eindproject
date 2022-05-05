import React from 'react'
import { Container, Card, CardGroup, Fade, Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

import Time from './TimeOFDay'
import images from '../images'
import Cards from './Cards'



function Home() {
  let { id } = useParams()
 


  return (
    <Container fluid className=' mt-5 p-5'>
      <Time />
      <h1 >Welkom username {id} </h1>
<Row xs={1} md={2} className="g-4">
    {
      images.map((image)=>(
<Col>
<Cards


/>
</Col>
  ))
    }
</Row>
  
    </Container>





  )
}

export default Home