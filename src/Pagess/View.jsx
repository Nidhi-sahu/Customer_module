import {React,useState} from 'react'
import Card from 'react-bootstrap/Card';
import {FiMenu } from "react-icons/fi";
import { Button, Drawer } from 'antd';
import five from '../Image/five.jpg'
import twelve from '../Image/twelve.webp';
import thirteen from '../Image/thirteen.webp';
import fourteen from '../Image/fourteen.webp';
import six from '../Image/six.webp';
import seven from '../Image/seven.webp';
import eight from '../Image/eight.webp';
import nine from '../Image/nine.webp'
import ten from '../Image/ten.webp';
import { BsFillCartFill} from "react-icons/bs";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


const View = () => {

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
   {/* <h3 style={{paddingTop:'20px',paddingLeft:'570px'}}>Beauty, Food, Toys & more</h3> */}
 <Button  variant="light" style={{marginLeft:'0px',marginTop:'15px',border:'none'}} onClick={showDrawer}>
< FiMenu style={{fontSize:'45px',paddingBottom:'10px',color:'#2874f0'}}/>
      </Button>
      <Drawer title=" " placement="left" onClose={onClose} open={open} style={{width:'70%',boxShadow:'none'}}> 

      <DropdownButton  title="Category" >
      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
 </DropdownButton>
        
 <DropdownButton  title="Category"  style={{marginTop:'40px'}}>
      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </DropdownButton>
      </Drawer> 
    <div style={{display:'flex',paddingTop:'20px'}}>

<div  className='box' style={{marginLeft:'70px'}}>  
        <Card style={{ width: '14rem' }}>
      <Card.Img  src={twelve} style={{height:'120px',width:'120px',marginLeft:'50px',marginTop:'20px'}}/>
      <Card.Body>
       
      <Card.Title style={{marginLeft:'55px',marginBottom:'5px'}}>Baby</Card.Title>
      <Card.Title style={{marginLeft:'55px',marginBottom:'5px',fontSize:'15px',color:'green'}}>Shop Now!</Card.Title>
        {/* <Button variant="primary">View</Button> */}
      </Card.Body>
    </Card>
                 
               </div>

<div  className='box' style={{marginLeft:'70px'}}>  
        <Card style={{ width: '14rem' }}>
      <Card.Img  src={fourteen} style={{height:'120px',width:'120px',marginLeft:'50px',marginTop:'20px'}}/>
      <Card.Body>
       
      <Card.Title style={{marginLeft:'55px',marginBottom:'5px'}}>Machine</Card.Title>
      <Card.Title style={{marginLeft:'55px',marginBottom:'5px',fontSize:'15px',color:'green'}}>Shop Now!</Card.Title>
        {/* <Button variant="primary">View</Button> */}
      </Card.Body>
    </Card>
 

</div>

<div  className='box' style={{marginLeft:'70px'}}>  
        <Card style={{ width: '14rem' }}>
      <Card.Img  src={thirteen} style={{height:'120px',width:'120px',marginLeft:'50px',marginTop:'20px'}}/>
      <Card.Body>
       
      <Card.Title style={{marginLeft:'45px',marginBottom:'5px'}}>Headphones</Card.Title>
      <Card.Title style={{marginLeft:'55px',marginBottom:'5px',fontSize:'15px',color:'green'}}>Shop Now!</Card.Title>
        {/* <Button variant="primary">View</Button> */}
      </Card.Body>
    </Card>
 

</div>
<div  className='box' style={{marginLeft:'70px'}}>  
        <Card style={{ width: '14rem' }}>
      <Card.Img  src={six}style={{height:'120px',width:'120px',marginLeft:'50px',marginTop:'20px'}}/>
      <Card.Body>
       
      <Card.Title style={{marginLeft:'55px',marginBottom:'5px'}}>Camera</Card.Title>
      <Card.Title style={{marginLeft:'55px',marginBottom:'5px',fontSize:'15px',color:'green'}}>Shop Now!</Card.Title>
        {/* <Button variant="primary">View</Button> */}
      </Card.Body>
    </Card>
 

</div>
<div  className='box' style={{marginLeft:'70px'}}>  
        <Card style={{ width: '14rem' }}>
      <Card.Img  src={seven} style={{height:'120px',width:'120px',marginLeft:'50px',marginTop:'20px'}}/>
      <Card.Body>
       
      <Card.Title style={{marginLeft:'55px',marginBottom:'5px'}}>Mobiles</Card.Title>
      <Card.Title style={{marginLeft:'55px',marginBottom:'5px',fontSize:'15px',color:'green'}}>Shop Now!</Card.Title>
        {/* <Button variant="primary">View</Button> */}
      </Card.Body>
    </Card>
 

</div>
    </div>

    {/* section2 */}

    <div style={{display:'flex',paddingTop:'50px'}}>

<div  className='box' style={{marginLeft:'70px'}}>  
        <Card style={{ width: '14rem' }}>
      <Card.Img  src={five} style={{height:'120px',width:'120px',marginLeft:'50px',marginTop:'20px'}}/>
      <Card.Body>
       
      <Card.Title style={{marginLeft:'55px',marginBottom:'5px'}}>Mobiles</Card.Title>
      <Card.Title style={{marginLeft:'55px',marginBottom:'5px',fontSize:'15px',color:'green'}}>Shop Now!</Card.Title>
        {/* <Button variant="primary">View</Button> */}
      </Card.Body>
    </Card>
                 
               </div>

<div  className='box' style={{marginLeft:'70px'}}>  
        <Card style={{ width: '14rem' }}>
      <Card.Img  src={eight} style={{height:'120px',width:'120px',marginLeft:'50px',marginTop:'20px'}}/>
      <Card.Body>
       
      <Card.Title style={{marginLeft:'55px',marginBottom:'5px'}}>Mobiles</Card.Title>
      <Card.Title style={{marginLeft:'55px',marginBottom:'5px',fontSize:'15px',color:'green'}}>Shop Now!</Card.Title>
        {/* <Button variant="primary">View</Button> */}
      </Card.Body>
    </Card>
 

</div>

<div  className='box' style={{marginLeft:'70px'}}>  
        <Card style={{ width: '14rem' }}>
      <Card.Img  src={nine} style={{height:'120px',width:'120px',marginLeft:'50px',marginTop:'20px'}}/>
      <Card.Body>
       
      <Card.Title style={{marginLeft:'55px',marginBottom:'5px'}}>Mobiles</Card.Title>
      <Card.Title style={{marginLeft:'55px',marginBottom:'5px',fontSize:'15px',color:'green'}}>Shop Now!</Card.Title>
        {/* <Button variant="primary">View</Button> */}
      </Card.Body>
    </Card>
 

</div>
<div  className='box' style={{marginLeft:'70px'}}>  
        <Card style={{ width: '14rem' }}>
      <Card.Img  src={ten} style={{height:'120px',width:'120px',marginLeft:'50px',marginTop:'20px'}}/>
      <Card.Body>
       
      <Card.Title style={{marginLeft:'55px',marginBottom:'5px'}}>Mobiles</Card.Title>
      <Card.Title style={{marginLeft:'55px',marginBottom:'5px',fontSize:'15px',color:'green'}}>Shop Now!</Card.Title>
        {/* <Button variant="primary">View</Button> */}
      </Card.Body>
    </Card>
 

</div>
<div  className='box' style={{marginLeft:'70px'}}>  
        <Card style={{ width: '14rem' }}>
      <Card.Img  src={thirteen} style={{height:'120px',width:'120px',marginLeft:'50px',marginTop:'20px'}}/>
      <Card.Body>
       
      <Card.Title style={{marginLeft:'55px',marginBottom:'5px'}}>Headphone</Card.Title>
      <Card.Title style={{marginLeft:'55px',marginBottom:'5px',fontSize:'15px',color:'green'}}>Shop Now!</Card.Title>
        {/* <Button variant="primary">View</Button> */}
      </Card.Body>
    </Card>
 

</div>
    </div>

    {/* section3 */}

    <div style={{display:'flex',paddingTop:'50px',paddingBottom:'40px'}}>

<div  className='box' style={{marginLeft:'70px'}}>  
        <Card style={{ width: '14rem' }}>
      <Card.Img  src='' style={{height:'120px',width:'120px',marginLeft:'50px',marginTop:'20px'}}/>
      <Card.Body>
       
      <Card.Title style={{marginLeft:'55px',marginBottom:'5px'}}>Mobiles</Card.Title>
      <Card.Title style={{marginLeft:'55px',marginBottom:'5px',fontSize:'15px',color:'green'}}>Shop Now!</Card.Title>
        {/* <Button variant="primary">View</Button> */}
      </Card.Body>
    </Card>
                 
               </div>

<div  className='box' style={{marginLeft:'70px'}}>  
        <Card style={{ width: '14rem' }}>
      <Card.Img  src='' style={{height:'120px',width:'120px',marginLeft:'50px',marginTop:'20px'}}/>
      <Card.Body>
       
      <Card.Title style={{marginLeft:'55px',marginBottom:'5px'}}>Mobiles</Card.Title>
      <Card.Title style={{marginLeft:'55px',marginBottom:'5px',fontSize:'15px',color:'green'}}>Shop Now!</Card.Title>
        {/* <Button variant="primary">View</Button> */}
      </Card.Body>
    </Card>
 

</div>

<div  className='box' style={{marginLeft:'70px'}}>  
        <Card style={{ width: '14rem' }}>
      <Card.Img  src='' style={{height:'120px',width:'120px',marginLeft:'50px',marginTop:'20px'}}/>
      <Card.Body>
       
      <Card.Title style={{marginLeft:'55px',marginBottom:'5px'}}>Mobiles</Card.Title>
      <Card.Title style={{marginLeft:'55px',marginBottom:'5px',fontSize:'15px',color:'green'}}>Shop Now!</Card.Title>
        {/* <Button variant="primary">View</Button> */}
      </Card.Body>
    </Card>
 

</div>
<div  className='box' style={{marginLeft:'70px'}}>  
        <Card style={{ width: '14rem' }}>
      <Card.Img  src='' style={{height:'120px',width:'120px',marginLeft:'50px',marginTop:'20px'}}/>
      <Card.Body>
       
      <Card.Title style={{marginLeft:'55px',marginBottom:'5px'}}>Mobiles</Card.Title>
      <Card.Title style={{marginLeft:'55px',marginBottom:'5px',fontSize:'15px',color:'green'}}>Shop Now!</Card.Title>
        {/* <Button variant="primary">View</Button> */}
      </Card.Body>
    </Card>
 

</div>
<div  className='box' style={{marginLeft:'70px'}}>  
        <Card style={{ width: '14rem' }}>
      <Card.Img  src='' style={{height:'120px',width:'120px',marginLeft:'50px',marginTop:'20px'}}/>
      <Card.Body>
       
      <Card.Title style={{marginLeft:'55px',marginBottom:'5px'}}>Mobiles</Card.Title>
      <Card.Title style={{marginLeft:'55px',marginBottom:'5px',fontSize:'15px',color:'green'}}>Shop Now!</Card.Title>
        {/* <Button variant="primary">View</Button> */}
      </Card.Body>
    </Card>
 </div>

 
    </div>
    </>
   
  )
}

export default View;