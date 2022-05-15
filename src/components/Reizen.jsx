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

    console.log(trip)
    const [reis, setReis] = useState([])
    const [geplandR, setGeplandR] = useState([])

    useEffect(() => {
        for (let i = 0; i < content.length; i++) {
            if (content[i].id === trip) {
                setReis(content[i])
            }
        }
        console.log(reis)
    })



//reizen fetchen
    function handleFetch() {
        console.log("klik")
        fetch("/reizen")
            .then(res => res.json())
            .then(trip => {
                for (let y = 0; y < trip.length; y++) {
                    if (trip[y].title == reis.title) {
                        setGeplandR(trip[y].gepland)
                    }

                }


            }) 
         
    }

console.log(geplandR)

//opzoeken om reizen te updaten bij inschrijven + lijst van de deelnemer van geplande reizen aanpassen
//dus PUT "/reizen"
// en PUT "/user" PROFIEL VAN DE USER NOG MAKEN => hier ook wachtwoord en username veranderen en gegevens aanpassen, uitschrijven nieuwsbrief, uitschrijven website => protectedROUTE!!! 
 function handleInschrijven (){
axios.put("/reizen", (req, res)=>{
    console.log (res)
})
 }
 
 
    return (
        <Container className='mt-5'>



            <Row className='mt-5'  >

                <h1 className='mt-5'>{reis.id}</h1>
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
       <Button className='m-3' onClick={handleInschrijven}>Inschrijven</Button>

</ul>
    ))
} 
                

           
                </Col>


               
            </Row>











        </Container>
    )
}

export default Reizen