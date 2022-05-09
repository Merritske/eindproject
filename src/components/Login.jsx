import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import axios from 'axios'

export default function Login() {
  const [state, setState] = useState({
    username: "",
    password: ""
  })
  function handleLogin() {
  
    axios.post("/login", {
      username: state.username,
      password: state.password
    })
      .then(res => {
        console.log(res.data)
        localStorage.setItem('user', JSON.stringify({
          username: "root",
          token: res.data.token
        }))
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
      <Form>
     
      
      </Form>
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
        <button variant="primary" type='button' onClick={()=>{handleLogin();
          handleClose()}} className="m-3">Submit</button>
          
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
