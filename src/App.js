import logo from './logo.svg';
import './App.css';
import Navbaar from "./Component/Navbaar"
import Dashboard from "./Pagess/Dashboard"
import { Routes,Route} from 'react-router-dom';
import Become from './Pagess/Become'
import Fotter from './Component/Fotter';
import View from './Pagess/View'
import Cart from './Pagess/Cart'
import Placeorder from './Pagess/Placeorder';
import Payment from './Pagess/Payment';
//import {Routes} from 'react-router-dom'
// import {Routes,Route} from 'react-router-dom'




function App() {
  return (
   <>
   <div>
   <Navbaar/> 
  

 
</div>
    
    <Routes>
    <Route path='/' element={<Dashboard/>}/>
    <Route path='/become' element={<Become/>}/>
    <Route path ='/view' element={<View/>}/>
    <Route path ='/cart' element={<Cart/>}/>
     <Route path ='/place' element={<Placeorder/>}/> 
     <Route path ='/payment' element={<Payment/>} />
  </Routes> 
    
    <div>
    <Fotter/>
   </div>    
   </>
  );
}

export default App;
