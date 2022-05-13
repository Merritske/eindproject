import React, { useState, useEffect, useContext } from 'react'
import { Button, Container, Form, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom';


export default function Login({handleChange , handleLogin }) {

 


  return (
    <Container fluid className="mt-5" >
 
  
   
          <h2 className="p-5 mt-5">Login</h2>
    
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formBasicUsername">

              <Form.Control type="text" placeholder="Enter username" name="username" onChange={handleChange} autoFocus />

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">

              <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange} />
            </Form.Group>
        <button variant="primary" type='button' onClick={handleLogin}  className="m-3">
        <Link to="/" > Submit </Link>
          </button>
          
          </Form>
        
          <h3>No account? <Link to="/register" >Create an account</Link>
          </h3>

    

      {/* <Modal
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
        <button variant="primary" type='button' onClick={()=>{handleLogin();handleClose()}} className="m-3">Submit</button>
          
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <h3>No account? <Link to="/register" onClick={handleClose}>Create an account</Link>
          </h3>

        </Modal.Footer>
      </Modal> */}

    </Container>
  )
}
