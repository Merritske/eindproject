import React, {useContext} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { UserProvider } from '../context';
import Home from '../pages/Home';
import Inschrijven from '../pages/Inschrijven';

function Reizen() {

    const [user, content ] = useContext(UserProvider)
console.log(content[0])
//loop over alle content, als content id overeenkomt met de aangeklikte reis => extra info laten zien
//extra info axios.get("/reizen/id")
//content[0].id = naam van de reis
//extra info = datums, uitleg over de reis, inschrijvingen deelnemers
//uit mongoDB halen

  return (
 <Container className='mt-5'>
  
     <Row className='mt-5'>
         
         <h1 className='mt-5'>naam van de reis</h1>
     <Col>
<p>uitleg over de reis/planning</p>
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
</Col> 

     </Row>



<Inschrijven/>



 </Container>
  )
}

export default Reizen