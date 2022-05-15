import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import { UserProvider } from '../context';
import Home from '../pages/Home';
import Inschrijven from '../pages/Inschrijven';

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



    ///nog gegevens van mongodb in de page zetten.....fetchen ok

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

console.log(geplandR)
            }) 
         
    }
//     let days = ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"]
//     let maand = ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"]
//  const d = geplandR[0].date
  
//     console.log(d)




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
           {date.datum}
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
     <Inschrijven />
</ul>
    ))
} 
                

           
                </Col>


               
            </Row>











        </Container>
    )
}

export default Reizen