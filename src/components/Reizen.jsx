import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';


function Reizen() {



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







 </Container>
  )
}

export default Reizen