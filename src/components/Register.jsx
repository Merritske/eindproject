import React from 'react'
import {Form, Button, Container, Col, Row} from "react-bootstrap"

function Register() {

  function handleSubmit(e){
    e.preventDefault()
    fetch('/register')
    .then(res=>res.json())
    .then((data)=>{
      console.log(data)
    })
  }





  
  return (
  <Container fluid className='p-5 m-5 ' id='register'> 
   <fieldset>
    <legend>Creëer een account</legend>
<Form action='POST'>
  <Row className="mb-3">
     <Form.Group className="mb-3" controlId="formUsername">
    <Form.Label>Username</Form.Label>
    <Form.Control type="text" placeholder="Enter username" />
  </Form.Group>

    <Form.Group as={Col} controlId="formPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>


  </Row>

   


     <Form.Group as={Col} controlId="formEmail" className="mb-3">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>
   

    {/* <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>Choose...</option>
        <option>...</option>
      </Form.Select>
    </Form.Group> */}

  


 <Form.Group  controlId="formWoonplaats" className="mb-3">
      <Form.Label>Woonplaats</Form.Label>
      <Form.Control type="text" />
    </Form.Group>

<Form.Group className="mb-5" controlId="formLeeftijd">
  <Form.Label>Geboortedatum</Form.Label>
<Form.Control type="date" />
</Form.Group>
  <Form.Group className="m-5" controlId="formNieuwsbrief">
    <Form.Check type="checkbox" label="Inschrijven nieuwsbrief" />
  </Form.Group >




  <Button variant="primary" type="submit" onClick={handleSubmit}>
    Creëer account
  </Button>
</Form>
  </fieldset>
    </Container>
  )
}

export default Register