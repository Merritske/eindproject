import axios from 'axios';
import React, {useContext, useEffect, useState} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import { UserProvider } from '../Context';
import Home from '../pages/Home';
import Inschrijven from '../pages/Inschrijven';

function Reizen() {
let { trip } = useParams()
    const [user, content, loggedIn ] = useContext(UserProvider)
console.log(content[0])
//loop over alle content, als content id overeenkomt met de aangeklikte reis => extra info laten zien
//extra info axios.get("/reizen/id")
//content[0].id = naam van de reis
//extra info = datums, uitleg over de reis, inschrijvingen deelnemers
//uit mongoDB halen

console.log(trip)
const [reis, setReis] = useState([])

useEffect(()=>{
for(let i =0; i< content.length ;i++){
    if(content[i].id === trip){
setReis(content[i])
    }
}



},[])

console.log(reis)

///nog gegevens van mongodb in de page zetten.....fetchen ok

function handleFetch(){
    console.log("klik")
    fetch("http://localhost:5001/reizen")
.then(res=>res.json())
  .then(trip=>  {console.log(trip[0].title)} )
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
<ul>
    <li>
        deelnemer 1: extra info? leeftijd, woonplaats?
    </li>
    <li>
        deelnemer 2
    </li>
</ul>

 per beschikbare datum inschrijfknop
</Col> 


<button onClick={handleFetch}>Click</button>
<Inschrijven/>
     </Row>


   

     






 </Container>
  )
}

export default Reizen