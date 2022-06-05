import React, { useEffect, useState, useContext } from 'react'
import { Container } from 'react-bootstrap'
import { UserProvider } from '../context'

//nog nieuwe page maken met alle reizen van een bepaalde gebruiker
//reizen fetchen in app.js
//misschien dit in profiel zetten
//links knop voor profiel te bekijken en rechts de geplande reizen en de reizen die gedaan zijn...

//als de datum verstreken is de reizen van gepland naar gedaan zetten

function ReisSchema() {
  const [state, content, isLoggedIn] = useContext(UserProvider)
const [reisSchema, setReisSchema] = useState([{
  reis: "",
  datum: ""
}])

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
  console.log(state.username)
  fetch("/reizen")
  .then(res => res.json())
  .then((data) => {data.map((trip)=>{
    for(let x =0; x<trip.gepland.length; x++){  if(trip.gepland[x].deelnemers.includes(state.username)){
      setReisSchema([ {reis: trip.title, datum: trip.gepland[x].datum}])
  console.log(trip)
    console.log(trip.gepland[x])
    }

    console.log(reisSchema)}

  })})
}

  return (
    <Container fluid className='d-flex ' onClick={getTrips}>
       <h5 className='px-3'  > uw reizen </h5>
    <img src="https://cdn2.vectorstock.com/i/1000x1000/41/51/suitcase-travel-icon-vector-3394151.jpg" style={{"height": 50, "cursor":"pointer"}} />
    <ul>
  {
      reisSchema.map((trip, index)=>(
       <li key={index}>
{trip.reis} {trip.datum}
       </li>
      ))
    }

    </ul>
  

    </Container>
  )
}

export default ReisSchema