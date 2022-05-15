import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'

function ReisSchema() {
const [reisSchema, setReisSchema] = useState([])

//lijst met geplande reizen per user/// een profiel maken met alle gegevens van de user => protectedROUTE
  // useEffect(()=>{
  //   fetch("/reizen")
  //   .then(res => res.json())
  //   .then(trip => {
  //       for (let y = 0; y < trip.length; y++) {
  //           if (trip[y].title == reis.title) {
  //               setReisSchema(trip[y].gepland)
  //           }

  //       }


  //   }) 
  // })



  return (
    <Container fluid className='d-flex '>
       <h5 className='px-3'> ReisSchema </h5>
    <img src="https://cdn2.vectorstock.com/i/1000x1000/41/51/suitcase-travel-icon-vector-3394151.jpg" style={{"height": 50}} />


    </Container>
  )
}

export default ReisSchema