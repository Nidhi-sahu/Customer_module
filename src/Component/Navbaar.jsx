
import { React, useState } from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Image from '../Image/R.png';
import Button from 'react-bootstrap/Button';
import Become from "../Pagess/Become";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
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
      {/* <Router>   */}
      <Navbar bg="primary" variant="dark" style={{ height: '70px',width:'100%', position: 'static',overflow:'hidden'}}>

        <Container>
          <Navbar.Brand href="#home" style={{ paddingLeft: '20px' }}><img src={Image} style={{ width: '40px', height: '40px', marginLeft: '30px' }} /></Navbar.Brand>
          <Nav className="me-auto">

            <div className="active-pink-3 active-pink-4 mb-4" style={{ paddingTop: '15px', width: '400px', height: '50px', marginLeft: '0px' }}>
              <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
            </div>

            <Button variant="light" onClick={handleShow} style={{ width: '120px', height: '35px', marginLeft: '60px', marginTop: '18px' }}>LOGIN</Button>
            <Nav style={{ width: '300px', height: '35px', marginLeft: '70px', marginTop: '15px', fontSize: '25px', fontWeight: 'bold', color: 'white' }}><NavLink to='/become' style={{ color: 'white' }}>Become A Seller</NavLink></Nav>
            {/* <Nav  style={{width:'300px',height:'35px',marginLeft:'60px',marginTop:'10px',fontSize:'25px',fontWeight:'bold',color:'white'}}><NavLink to="/become">Become A Seller</NavLink></Nav> */}
            <Navbar.Brand style={{ width: '200px', height: '35px', marginLeft: '180px', marginTop: '10px', fontSize: '25px', fontWeight: 'bold', color: 'white' }}><BsFillCartFill style={{marginLeft:'5px',marginBottom:'5px'}}/> <NavLink to='/cart' style={{ color: 'white' }}>Cart</NavLink></Navbar.Brand>


          </Nav>
        </Container>
      </Navbar>
      {/* <div> <Switch>
    <Route path="/become">
     <Become/>
    </Route>
          </Switch></div> 
          </Router>        */}

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