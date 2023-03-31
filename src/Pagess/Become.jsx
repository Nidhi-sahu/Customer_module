import React from "react";
import ReactDOM from "react-dom"
import Becomec from './Becomec.css';






function Become()
{   

   


  return (
   
    <>
   
   <div className="wrapper1">
    <form className="form-signin">       
      <h2 className="form-signin-heading">Registration</h2>
      <input typeName="password" class="form-control" name="name" placeholder="Name" required=""/> <br/>     
      <input typeName="text" class="form-control" name="phone" placeholder="phone" required="" autofocus="" /><br/>
      <input typeName="text" class="form-control" name="email" placeholder="Email Address" required="" autofocus="" /><br/>
      <input typeName="password" class="form-control" name="password" placeholder="Password" required=""/> <br/>     
      <button className="btn  btn-lg btn-primary btn-block1" type="submit">submit</button>   
    </form>
  </div>
    </>
      
   
  )
}

export default Become;