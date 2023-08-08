import React from 'react'
import Dashboardc from './Dashboardc.css';
import {NavLink} from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel';
import second from '../Image/second.webp';
import three from '../Image/three.png';
import four from '../Image/four.png';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import five from '../Image/five.jpg';
import six from '../Image/six.webp';
import seven from '../Image/seven.webp';
import eight from '../Image/eight.webp';
import nine from '../Image/nine.webp'
import ten from '../Image/ten.webp';
import eleven from '../Image/eleven.webp';
import twelve from '../Image/twelve.webp';
import thirteen from '../Image/thirteen.webp';
import fourteen from '../Image/fourteen.webp';

const Dashboard = () => {
  return (
    <>
    <div style={{paddingTop:'80px',width:'100%'}}>   
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                             src={second}
                            alt="First slide"
                            style={{ height: '200px', width: '700px' }}
                        />
                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                             src={three}
                            alt="Second slide"
                            style={{ height: '200px' }}
                        />

                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={four}
                            alt="Third slide"
                            style={{ height: '200px' }}
                        />

                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel> 

                   {/* section 2 */}
                     <h2  className='tag' 
                    //  style={{paddingTop:'10px',paddingLeft:'650px'}}
                     >TOP OFFERS</h2>  
             <div className="boxx" style={{display:'flex',paddingTop:'2px',backgroundColor:'white'}}>
             <div  className='box' style={{marginLeft:'70px'}}>  
        <Card className="card"  style={{ width: '14rem' }}>
      <Card.Img  src={five} style={{height:'120px',width:'120px',marginLeft:'50px',marginTop:'20px'}}/>
      <Card.Body>
       
      <Card.Title style={{marginLeft:'55px',marginBottom:'5px'}}>Mobiles</Card.Title>
      <Card.Title style={{marginLeft:'55px',marginBottom:'5px',fontSize:'15px',color:'green'}}>Shop Now!</Card.Title>
       
      </Card.Body>
    </Card>
                 
               </div>

             <div   className='box' style={{marginLeft:'60px'}}>
             <Card className="card"   style={{ width: '14rem' }}>
      <Card.Img  src={six} style={{height:'120px',width:'120px',marginLeft:'50px',marginTop:'20px'}}/>
      <Card.Body>
        <Card.Title style={{marginLeft:'30px',marginBottom:'5px'}}>Top Cameras</Card.Title>
        <Card.Title style={{marginLeft:'55px',marginBottom:'5px',fontSize:'15px',color:'green'}}>Shop Now!</Card.Title>
        
      </Card.Body>
    </Card>
               </div>

             <div className='box' style={{marginLeft:'40px'}}> 
             <Card className="card"  style={{ width: '14rem' }}>
      <Card.Img  src={seven}  style={{height:'120px',width:'120px',marginLeft:'50px',marginTop:'20px'}}/>
      <Card.Body>
        
      <Card.Title style={{marginLeft:'50px',marginBottom:'5px'}}>Printers</Card.Title>
        <Card.Title style={{marginLeft:'55px',marginBottom:'5px',fontSize:'15px',color:'green'}}>Shop Now!</Card.Title>
        </Card.Body>
    </Card> 
    </div>

               <div className='box'  style={{marginLeft:'60px'}}>
               <Card className="card"  style={{ width: '14rem' }}>
      <Card.Img  src={eight}  style={{height:'120px',width:'120px',marginLeft:'50px',marginTop:'20px'}}/>
      <Card.Body>
      <Card.Title style={{marginLeft:'50px',marginBottom:'5px'}}>Makeup</Card.Title>
        <Card.Title style={{marginLeft:'55px',marginBottom:'5px',fontSize:'15px',color:'green'}}>Shop Now!</Card.Title>
      </Card.Body>
    </Card>
               
              </div> 

              <div className='box'  style={{marginLeft:'60px'}}>
               <Card className="card"  style={{ width: '14rem' }}>
      <Card.Img  src={nine}  style={{height:'120px',width:'120px',marginLeft:'50px',marginTop:'20px'}}/>
      <Card.Body>
      <Card.Title style={{marginLeft:'60px',marginBottom:'5px'}}>Flasks</Card.Title>
        <Card.Title style={{marginLeft:'58px',marginBottom:'5px',fontSize:'15px',color:'green'}}>Shop Now!</Card.Title>
      </Card.Body>
    </Card>
   </div> 
    </div>
  </div>
     
                     {/* section3 */}
      <h2  className='tag'
      //  style={{paddingTop:'10px',paddingLeft:'650px'}}
       >PRODUCTS</h2>  
    <div className="boxx" style={{display:'flex',paddingTop:'2px',backgroundColor:'white'}}>
    
     
     
<div className='box' style={{marginLeft:'70px'}}>  
<Card  className="card" style={{ width: '14rem' }}>
<Card.Img  src={ten} style={{height:'120px',width:'120px',marginLeft:'60px',marginTop:'30px'}}/>
<Card.Body>

<Card.Title style={{marginLeft:'60px',marginBottom:'5px'}}>Cycles</Card.Title>
        <Card.Title style={{marginLeft:'50px',marginBottom:'5px',fontSize:'16px',color:'green'}}>upto 40% off</Card.Title>

</Card.Body>
</Card>
        
      </div>

    <div  className='box' style={{marginLeft:'60px'}}>
    <Card  className="card" style={{ width: '14rem' }}>
<Card.Img  src={eleven} style={{height:'120px',width:'120px',marginLeft:'45px',marginTop:'25px'}}/>
<Card.Body>

<Card.Title style={{marginLeft:'60px',marginBottom:'6px'}}>Bags</Card.Title>
        <Card.Title style={{marginLeft:'45px',marginBottom:'5px',fontSize:'16px',color:'green'}}>upto 60% off</Card.Title>

</Card.Body>
</Card>
      </div>

    <div className='box' style={{marginLeft:'40px'}}> 
    <Card className="card" style={{ width: '14rem' }}>
<Card.Img  src={twelve} style={{height:'120px',width:'120px',marginLeft:'45px',marginTop:'25px'}}/>
<Card.Body>
<Card.Title style={{marginLeft:'35px',marginBottom:'6px'}}>Baby Bathing</Card.Title>
        <Card.Title style={{marginLeft:'45px',marginBottom:'5px',fontSize:'16px',color:'green'}}>upto 20% off</Card.Title>


</Card.Body>
</Card> 
      </div>

      <div className='box' style={{marginLeft:'60px'}}>
      <Card style={{ width: '14rem'}}>
<Card.Img  src={thirteen} style={{height:'120px',width:'120px',marginLeft:'45px',marginTop:'25px'}}/>
<Card.Body>
<Card.Title style={{marginLeft:'35px',marginBottom:'6px'}}>Headphone</Card.Title>
        <Card.Title style={{marginLeft:'45px',marginBottom:'5px',fontSize:'16px',color:'green'}}>upto 50% off</Card.Title>


</Card.Body>
</Card>
      
     </div> 
     <div className='box' style={{marginLeft:'60px'}}>
      <Card style={{ width: '14rem'}}>
<Card.Img  src={fourteen} style={{height:'120px',width:'120px',marginLeft:'45px',marginTop:'25px'}}/>
<Card.Body>
<Card.Title style={{marginLeft:'35px',marginBottom:'6px'}}>Machine</Card.Title>
        <Card.Title style={{marginLeft:'45px',marginBottom:'5px',fontSize:'16px',color:'green'}}>upto 10% off</Card.Title>


</Card.Body>
</Card>
      
     </div> 
   </div>
    <div  className=" btnnn"style={{height:'100px',backgroundColor:'white',marginTop:'20px',paddingLeft:'50px',paddingTop:'15px',borderWidth:'2px'}}>
    <button className="btn  btn-lg btn-primary btn-block1" style={{marginTop:'5px',borderRadius:'5px',backgroundColor:'',color:'white'}}><NavLink to="/view"  style={{ color: 'white',LinkStyle:'none',textDecoration:'none' }}>View </NavLink></button>
   </div>  
   
  </>
 
  )
}

export default Dashboard;