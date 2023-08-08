
import { React, useState } from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Image from '../Image/R.png';
import Button from 'react-bootstrap/Button';
import Become from "../Pagess/Become";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Nabaarc from "./Navbaarc.css"
import {
  BrowserRouter as Router,
  Route, Link
} from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Login from './Login.css';
import { BsFillCartFill} from "react-icons/bs";

//import { Switch } from "react-router-dom";


function Navbaar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

  return (
    <>

    
        {/* <Navbar className="navv" bg="primary" variant="dark"  style={{ height: '70px',width:'100%', position: 'static',overflow:'hidden'}}>

        <Container>
          <Navbar.Brand href="#home"  className="imagee" style={{ paddingLeft: '20px' }}><img src={Image} style={{ width: '40px', height: '40px', marginLeft: '30px' }} /></Navbar.Brand>
          <Nav className="me-auto">

            <div className="active-pink-3 active-pink-4 mb-4" style={{ paddingTop: '15px', width: '400px', height: '50px', marginLeft: '0px' }}>
              <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
            </div>

            <Button variant="light" className="But" onClick={handleShow} style={{ width: '120px', height: '35px', marginLeft: '60px', marginTop: '18px' }}>LOGIN</Button>
              <Nav  className="become"style={{ width: '300px', height: '35px', marginLeft: '70px', marginTop: '15px', fontSize: '25px', fontWeight: 'bold', color: 'white' }}><NavLink to='/become' style={{ color: 'white' }}>Become A Seller</NavLink></Nav>
           
            <Navbar.Brand  className="cart"style={{ width: '200px', height: '35px', marginLeft: '180px', marginTop: '10px', fontSize: '25px', fontWeight: 'bold', color: 'white' }}><BsFillCartFill style={{marginLeft:'5px',marginBottom:'5px'}}/> <NavLink to='/cart' style={{ color: 'white' }}>Cart</NavLink></Navbar.Brand>


          </Nav>
        </Container>
      </Navbar> 
          */}

<Navbar className=" navv" collapseOnSelect expand="lg" bg="primary" variant="dark" fixed="top">
          
          <Container>
            <Navbar.Brand  className="imagee" style={{ paddingLeft: '20px' }}><img src={Image} style={{ width: '40px', height: '40px', marginLeft: '30px' }} /></Navbar.Brand>
         
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" >
              <Nav className="me-auto">
                <Nav.Link href="#features">
                <Form className="d-flex">
                      <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me2"
                        aria-label="Search"
                      />
                      {/* <Button variant="outline-success">Search</Button> */}
                    </Form>
                   </Nav.Link>
                <Nav.Link href="#pricing">
                  {/* <Button variant='light' >Login</Button> */}
                  <Button variant="light" className="But" onClick={handleShow} style={{ width: '120px', height: '35px', marginLeft: '0px', marginTop: '0px' }}>LOGIN</Button>
                  </Nav.Link>
              
              </Nav>
              <Nav>
                <Nav.Link href="#deets"  className=" bec" style={{paddingRight:'200px'}}> <NavLink to='/become' style={{color:'white',fontSize: '25px', fontWeight: 'bold', color: 'white',textDecoration:'none'}}>Become A seller</NavLink></Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                <NavLink to='/cart' style={{color:'white', fontSize: '25px', fontWeight: 'bold', color: 'white',textDecoration:'none'}}><svg xmlns="http://www.w3.org/2000/svg" width="28" height="25" fill="currentColor" class="bi bi-cart4" viewBox="1 2 14 16">
      <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
    </svg>Cart</NavLink>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>




      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          {/* <Modal.Title>update</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>

        <div className="wrapperr">
    <form className="form-signinn">       
      <h2 className="form-signin-heading">Please login</h2>
      <input typeName="text" class="form-control" name="username" placeholder="Email Address" required="" autofocus="" /><br/>
      <input typeName="password" class="form-control" name="password" placeholder="Password" required=""/> <br/>     
      
     
      <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>   
    </form>
  </div>
</Modal.Body>
       
      </Modal>
</>
  )

}

export default Navbaar