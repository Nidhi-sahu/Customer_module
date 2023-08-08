import React from 'react'
import Placeorderc from './Placeorderc.css';
import Button from 'react-bootstrap/Button';
import {NavLink} from 'react-router-dom'

const Placeorder = () => {
  return (
   <>

<div className="containerrr" 
// style={{marginTop:'130px',width:'80%',marginLeft:'120px', marginBottom:'300px'}}
>
  <form target="_blank" action="apni_kaksha_webpage.html" method="get" style={{}}>
    <h1>Shipping Address</h1>
    <hr/>
    <h2>Contact Details:</h2>
    <p>
      Name :
      <input placeholder="Anand Prakash Gupta" type="text" name="name" required maxlength="20"/>
    </p>
   
    <p>Adress:<textarea placeholder="fill the full adress" name="adress" id="adress" cols="50" rows="5"></textarea></p>
    <p>Pincode:<input class="pin" placeholder="6 digit pin" type="text" name="pincode" id="pincode" maxlength="6"/></p>
      {/* <p>Phone no:<input class="phone_no" placeholder="phone no" type="text" name="phone" id="phone" maxlength="12"/></p>  */}
   
   
    
     <Button variant="primary"><NavLink to="/payment" style={{fontSize:'15px',color:'white',textDecoration:'none'}}>Payment</NavLink></Button>
  </form>

</div>


   </>
  )
}

export default Placeorder;