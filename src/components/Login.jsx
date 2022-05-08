import React, {useState} from 'react'
import { Button, Form,  Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom';


export default function Login() {

  fetch("/login")
  .then(res=>res.json())
  .then(data=>{
      console.log(data)
  })


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div>
       <Button  className="btn btn-outline-dark border border-5 btn-danger fs-5" type="button" onClick={handleShow}>LOG IN </Button>

       <Modal 
       show={show} 
       onHide={handleClose}

             aria-labelledby="example-custom-modal-styling-title">
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group className="mb-3" controlId="formBasicUsername">

    <Form.Control type="text" placeholder="Enter username" autofocus />
   
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">

    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group> */}
         <Button variant="primary" type="submit" onClick={handleClose} className="m-3" >
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
