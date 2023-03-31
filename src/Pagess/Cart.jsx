import React from 'react'
import Table from 'react-bootstrap/Table';

const Cart = () => {
  return (
    <>
    <h1 style={{textAlign:'center',fontWeight:'bold',color:' #000000',marginTop:'40px',color:'#2874f0'}}>Add To Cart</h1>
 <div style={{height:"450px",width:"70%",marginTop:'60px',border:'2px solid',padding:'10px',margin:'20px',marginBottom: "180px",marginLeft:'200px'}}>
      <Table responsive="xl" style={{ marginBottom: "180px" }} >
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
      
    </>
  )
}

export default Cart;