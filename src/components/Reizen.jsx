import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import { UserProvider } from '../context';



function Reizen() {
    let { trip } = useParams()
    const [user, content, loggedIn] = useContext(UserProvider)

    //loop over alle content, als content id overeenkomt met de aangeklikte reis => extra info laten zien
    //extra info axios.get("/reizen/id")
    //content[0].id = naam van de reis
    //extra info = datums, uitleg over de reis, inschrijvingen deelnemers
    //uit mongoDB halen


    const [reis, setReis] = useState([])
    const [geplandR, setGeplandR] = useState([])
    const [deelnemers, setDeelnemers] = useState([])
    const [datumId, setDatumId] = useState()

    useEffect(() => {
           
        for (let i = 0; i < content.length; i++) {
             console.log(trip)
            if (content[i].title === trip) {
                setReis(content[i])
            }
        }
        console.log(reis)
    })
//soms begint die data te laden en soms niet, als je []depency arry er zet stopt die maar dan verschijnt de data niet op het scherm
//WAAROM WERKT DIT DE ENE KEER WEL EN DE ANDERE KEER NIET?????????

//reizen fetchen
    function handleFetch() {
        console.log("klik")
        fetch("http://localhost:5001/reizen")
            .then(res => res.json())
            .then(trip => {
                for (let y = 0; y < trip.length; y++) {
                    if (trip[y].title == reis.title) {
                        setGeplandR(trip[y].gepland)
                    }

                }


            }) 
         
    }

//console.log(geplandR)

// //opzoeken om reizen te updaten bij inschrijven + lijst van de deelnemer van geplande reizen aanpassen
// //dus PUT "/reizen"
// // en PUT "/user" PROFIEL VAN DE USER NOG MAKEN => hier ook wachtwoord en username veranderen en gegevens aanpassen, uitschrijven nieuwsbrief, uitschrijven website => protectedROUTE!!! 
 function handleInschrijven (e){ 
     const deelnemer = user.username
    setDeelnemers(
     [...geplandR[e.target.id].deelnemers, deelnemer]
      )
    
        setDatumId(geplandR[e.target.id]._id)

     console.log(e.target.id)
    console.log(deelnemers)
const requestOptions = {
        method: 'PUT',
     headers:{
         'Content-Type': 'application/json',
         "Content-Length": '1500'
    },
     body: JSON.stringify( 
    
     {
         _id: datumId,
        deelnemers: deelnemers}
  
         )
 };
 console.log("going on a trip?!")
//PAS NA DE TWEEDE KEER KLIKKEN UPDATE DIE DE GEGEVENS??????
//CONSOLE.LOG in backend laat de geupdate gegevens zien, zowel via insomnia als de gegevens via html ingegeven 
//in insomnia geeft die melding van "cannot PUT"
//in MongoDB gebeurt niets
 console.log(requestOptions.body);

 fetch(`http://localhost:5001/reizen/${trip}`
 ,requestOptions
 )
 .then(res=>  res.json())
 .then((data)=>{
  
 console.log(data)
 }
      

 )

  }

 
    return (
        <Container className='mt-5'>



            <Row className='mt-5'  >

                <h1 className='mt-5'>{reis.title}</h1>
                <Col>
                    <p>{reis.tekst}</p>
                </Col>
                <Col>
                    <h3> beschikbare datums om in te schrijven</h3> 
                    <button onClick={handleFetch}>Bekijk de beschikbare datums</button>
 {
    geplandR.map((date, index)=>(

        <ul key={index}>
        <li>
    
{
    new Date(date.datum).toLocaleDateString("nl-BE", { weekday: "long", year: "numeric", month: "long", day: "numeric"})
}
           {
               date.deelnemers.map((deeln, ind)=>(

     <ul key={ind} >
               <li>
                   {deeln}
               </li>
           
           
           </ul>

               ))
           }
      

       </li> 
       <Button id={index} className='m-3' onClick={handleInschrijven}>Inschrijven</Button>

</ul>
    ))
} 
                

           
                </Col>


               
            </Row>











        </Container>
    )
}

export default Reizen