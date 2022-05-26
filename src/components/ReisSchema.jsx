import React, { useEffect, useState, useContext } from 'react'
import { Container } from 'react-bootstrap'
import { UserProvider } from '../context'


function ReisSchema() {
  const [state, content, isLoggedIn] = useContext(UserProvider)
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

function getTrips(){
  console.log("klikie")
  fetch("/reizen")
  .then(res => res.json())
  .then((data) => {data.map((trip)=>{
    console.log(trip)})})
}

  return (
    <Container fluid className='d-flex ' onClick={getTrips}>
       <h5 className='px-3'  > uw reizen </h5>
    <img src="https://cdn2.vectorstock.com/i/1000x1000/41/51/suitcase-travel-icon-vector-3394151.jpg" style={{"height": 50, "cursor":"pointer"}} />


    </Container>
  )
}

export default ReisSchema