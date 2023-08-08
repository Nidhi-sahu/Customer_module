import React from 'react'
import Table from 'react-bootstrap/Table';
import Cartc from './Cartc.css'
import Button from 'react-bootstrap/Button';
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
} from "mdb-react-ui-kit";
import { NavLink } from 'react-router-dom';


const Cart = () => {
  return (
    <>
     {/* <h1 style={{textAlign:'center',fontWeight:'bold',color:' #000000',marginTop:'130px',color:'#2874f0'}}>Add To Cart</h1> 
    <div  >
   <div className="cartt"
    // style={{height:"450px",width:"70%",marginTop:'60px',border:'2px solid',padding:'10px',margin:'20px',marginBottom: "180px",marginLeft:'200px'}}
     > 
      

      <Table className='tab' responsive="xl" style={{ marginBottom: "200px" ,marginTop:'70px'}} >
        <thead >
          <tr >
            <th>Sno.</th>
            <th>Pid</th>
            <th>Pname</th>
            <th>Qty</th>
            <th>Price</th>
           
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>123</td>
            <td>Television</td>
            <td>1</td>
            <td>25000</td>
           
          </tr>
          <tr>
            <td>2</td>
            <td>342</td>
            <td>skirt</td>
            <td>2</td>
            <td>800</td>
           
          </tr>
        </tbody>
      </Table>
      
      </div>
      </div>  */}


<section className="vh-100" style={{ backgroundColor: "white",marginTop:'80px' }}>
      <MDBContainer className="h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol>
            <p>
              <span className="h2" style={{paddingBottom:'20px'}}>Shopping Cart </span>
              {/* <span className="h4">(1 item in your cart)</span> */}
            </p>

            <MDBCard className="mb-4" style={{border:'2px solid',marginTop:'40px'}}>
              <MDBCardBody className="p-4" >
                <MDBRow className="align-items-center">
                  <MDBCol md="2" >
                    <MDBCardImage
                      fluid
                      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/1.webp"
                      alt="Generic placeholder image"
                    />
                  </MDBCol>
                  <MDBCol md="2" className="d-flex justify-content-center">
                    <div>
                      <p className="small text-muted mb-4 pb-2">Name</p>
                      <p className="lead fw-normal mb-0">iPad Air</p>
                    </div>
                  </MDBCol>
                  <MDBCol md="2" className="d-flex justify-content-center">
                    <div>
                      <p className="small text-muted mb-4 pb-2">Color</p>
                      <p className="lead fw-normal mb-0">
                        <MDBIcon
                          fas
                          icon="circle me-2"
                          style={{ color: "lightblue" }}
                        />
                        pink rose
                      </p>
                    </div>
                  </MDBCol>
                  <MDBCol md="2" className="d-flex justify-content-center">
                    <div>
                      <p className="small text-muted mb-4 pb-2">Quantity</p>
                      <p className="lead fw-normal mb-0">1</p>
                    </div>
                  </MDBCol>
                  <MDBCol md="2" className="d-flex justify-content-center">
                    <div>
                      <p className="small text-muted mb-4 pb-2">Price</p>
                      <p className="lead fw-normal mb-0">$799</p>
                    </div>
                  </MDBCol>
                  <MDBCol md="2" className="d-flex justify-content-center">
                    <div>
                      <p className="small text-muted mb-4 pb-2">Total</p>
                      <p className="lead fw-normal mb-0">$799</p>
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-5">
              <MDBCardBody className="p-4" style={{border:'2px solid'}}>
                <div className="float-end" >
                  <p className="mb-0 me-5 d-flex align-items-center">
                    <span className="small text-muted me-2">Order total:</span>
                    <span className="lead fw-normal">$799</span>
                  </p>
                </div>
              </MDBCardBody>
            </MDBCard>

            <div className="d-flex justify-content-end">
             
              {/* <MDBBtn size="lg">Add to cart</MDBBtn> */}
              <Button variant="warning" style={{width:'200px',height:'50px',marginBottom:'100px'}}><NavLink to='/place' style={{fontSize:'20px',color:'black',textDecoration:'none'}}>Place Order</NavLink></Button>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>

    </>
  )
}

export default Cart;