import React, { useState } from 'react'
import {Form, Button, Container, Col, Row} from "react-bootstrap"


function Register({handleLogin}) {
const [state, setState] = useState({
  username: "",
  password:"",
  email: "",
  woonplaats: "",
  geboortedatum: "",
  nieuwsbrief: false
})
function handleChange(event){
  console.log(event.target)
const {name, value, checked, type} = event.target
setState(prevState=>{
  return {...prevState,
  [name]: type === "checkbox"? checked: value}
})

}
  function handleSubmit(e){
    e.preventDefault()
console.log(state)
    fetch('/register', {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json' 
        },
        body: JSON.stringify(state)
    }
    )
    .then(res=>{res.json()
  console.log(res)    })

    }
  




  
  return (
  <Container fluid className='p-5 m-5 ' id='register'> 
   <fieldset>
    <legend>Creëer een account</legend>

<Form method='POST' action='/register' onSubmit={handleSubmit}>

  <Row className="mb-3">

     <Form.Group className="mb-3" controlId="formUsername">
    <Form.Label>Username</Form.Label>
    <Form.Control 
    type="text" 
    name= "username"
    value={state.username}
    onChange= {handleChange}
    placeholder="Enter username" />
  </Form.Group>

    <Form.Group as={Col} controlId="formPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control 
      type="password" 
      name= "password"
      value={state.password}
      onChange = {handleChange}
      placeholder="Password" />
    </Form.Group>

  </Row>

  
     <Form.Group as={Col} controlId="formEmail" className="mb-3">
      <Form.Label>Email</Form.Label>
      <Form.Control 
      type="email" 
      name = "email"
      value = {state.email}
      onChange = {handleChange}
      placeholder="Enter email" />
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
      <Form.Control 
      type="text"
      name = "woonplaats"
      value = {state.woonplaats}
      onChange={handleChange}
       />
    </Form.Group>

<Form.Group className="mb-5" controlId="formLeeftijd">
  <Form.Label>Geboortedatum</Form.Label>
<Form.Control 
type="date" 
name = "geboortedatum"
value = {state.geboortedatum}
onChange={handleChange}
/>
</Form.Group>
  <Form.Group className="m-5" controlId="formNieuwsbrief">
    <Form.Check 
    type="checkbox" 
    label="Inschrijven nieuwsbrief"
    name= "nieuwsbrief"
    checked= {state.nieuwsbrief}
    id="nieuwsbrief"
    onChange = {handleChange}
    />
  </Form.Group >




  <Button variant="primary" type="submit" onClick={()=>{
    handleSubmit() ; handleLogin()
  } }>
    Creëer account
  </Button>
</Form>
  </fieldset>
    </Container>
  )
}

export default Register