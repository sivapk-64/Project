import Laptop from '../Datafull/Laptop'
import Stove from '../Datafull/Stove'
import ImageSlider from '../Datafull/ImageSlider'
import { SliderData } from '../Datafull/SliderData'
import { useState } from 'react'
import { Container,IconButton,Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import Display from './Display'
import { useNavigate } from 'react-router-dom'
import ShoppingCartCheckout from '@mui/icons-material/ShoppingCartCheckout'
const HomeContent = () => {
  const navigate=useNavigate();
  const handleCheckout=()=>{
    navigate('/checkout');
  }
  const [count,setcount]=useState(0);
  const[cart,setcart]=useState([]);
  const [tprice,setprice]=useState(0);
  const nameeeee=<Display/>
  return (
    <div>

        <center>
        <h1 style={{marginTop:"10px"}}>Welcome {nameeeee}</h1>
        <hr></hr>
        <h3>No of Items in Cart: {count} </h3></center><hr></hr>
       <ImageSlider slides={SliderData}/>;
       <Stove count={count} setcount={setcount} cart={cart} setcart={setcart} tprice={tprice} setprice={setprice}/> 
      <Laptop  count={count} setcount={setcount} cart={cart} setcart={setcart} tprice={tprice} setprice={setprice}/>
      <center>

      <h1>Cart Items</h1>
       {/* <ul>
        {cart.map((n,i)=>(<li><h3>{n}</h3></li>))}
      </ul>  */}
      <Container sx={{display:"flex", justifyContent:"center",alignContent:"center",marginLeft:"750px"}}>

     <Table>
      <TableRow>
         {/* <TableHead sx={{fontSize:"30px",fontStyle:"italic"}}>
          Items
          <TableCell>Price</TableCell> 
        </TableHead> */}
        
      </TableRow>
      
        {cart.map((n,i)=><TableRow sx={{fontSize:"30px"}}>{n}</TableRow>)}
    

      
     </Table>
      </Container>
      <hr></hr>
     <h4>Price : {tprice}</h4>
    {/* <IconButton
               onClick={handleCheckout}
               color="inherit"
              >
              <ShoppingCartCheckout/>
            </IconButton> */}
            <IconButton onClick={handleCheckout} color="inherit">
                <ShoppingCartCheckout/>
            </IconButton>
      </center>
    </div>
   
  )
}
export default HomeContent