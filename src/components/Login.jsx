import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import axios from 'axios'

export default function Login() {
  const [state, setState] = useState({
    username: "",
    password: ""
  })
  function handleLogin(){
    // fetch("http://localhost:5001/login")
    // .then(res=>res.json())
    // .then((data)=>{
    //   setState(data)
    // })
    fetch("http://localhost:5002/login",{
      method:"POST",
      body:JSON.stringify({
        username:"An",
        password:"12345"
      })
    }).then((response)=>response.json())
    .then(data=>{
      console.log(data)
    })
  }
  //VOORBEELD
  // const formSubmitHandler = (e) => {
  //   e.preventDefault()
  //   console.log(formData)
  //   //send data to server here
  //   //application/json; charset=UTF-8
  //   fetch("http://localhost:5000/db", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json; charset=UTF-8"
  //     },
  //     body: JSON.stringify(formData)
  //   }
  //   )
  // }
  // //GET retrieve data
  // //POST create data
  // //PUT (single object)(or PATCH) update data
  // //DELETE delete data

  // function handleSubmit(event) {

  //   fetch('/login', {
  //     method: 'POST',
  //  
  //   event.preventDefault()
  // }

  const handleChange = e => {
    const { name, value } = e.target;
    //    console.log(e.target)
    setState({ ...state, [name]: value });
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div>
      <Button className="btn btn-outline-dark border border-5 btn-danger fs-5" type="button" onClick={handleShow}>LOG IN </Button>

      <Modal
        show={show}
        onHide={handleClose}

        aria-labelledby="example-custom-modal-styling-title">
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formBasicUsername">

              <Form.Control type="text" placeholder="Enter username" name="username" onChange={handleChange} autoFocus />

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">

              <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange} />
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group> */}
            <Button variant="primary" type="submit" className="m-3" >
              Submit
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <h3>No account? <Link to="/register" onClick={handleClose}>Create an account</Link>
          </h3>

        </Modal.Footer>
      </Modal>


    </div>
  )
}
