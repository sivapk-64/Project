import React from 'react'
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography,Button,Grid } from '@mui/material'
import { Menulist } from './Datastove'
import StadiumIcon from '@mui/icons-material/Stadium';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
function Stove({count,setcount,cart,setcart,tprice,setprice}) {
  const solve=(myname,price)=>{
     setcount(count+1);
    setcart([...cart,myname]);
    setprice(tprice+price)
    alert("added to cart");
  };
  return (
     <>
     <Box sx={{bgcolor:"black",color:"white",p:2}}>
      <Typography varient="h5"sx={{color:'white',textAlign:'center' ,fontFamily:"bold",fontSize:'30px'}} >
       <StadiumIcon sx={{fontSize:'49px',paddingBottom:'10px'}}/> STOVE
      </Typography >
      <Typography varient="h5"sx={{color:'white',fontFamily:"bold",fontSize:'30px'}}>Sort by <ArrowDropDownIcon/>
      <input style={{borderRadius:"5px"}}></input></Typography>
     </Box>
     <Box sx={{display:"flex",flexWrap:"wrap",justifyContent:"center" ,paddingTop:3}}>
      {
          Menulist.map((menu1) =>(
            <Card sx={{maxWidth:450,display:'flex',m: 2}}>
              <CardActionArea>
 <CardMedia sx={{minHeight: '400px',minWidth:'400px'}} component={'img'} src={menu1.image} alt={menu1.name}/>
                <CardContent>
                    <Typography varient ='h5' gutterBottom>
                  <b>
                    {menu1.name}
                    </b>
                  </Typography>
                  <Typography varient="body2">
                    {menu1.description}
                  </Typography>
                  <Typography>
                     <b>Rating</b> {menu1.Rating}
                     </Typography>
                     <Typography varient="body2">
                       <b>
                        Price:{menu1.price}
                        </b>
                     <Button sx={{marginLeft:"200px"
                     }} onClick={()=>solve(menu1.name,menu1.price)}
                      >Add to Cart</Button>
                     </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
        )) 
      }
     </Box>
     {/* <ul>
        {cartlist.map((element, index) => (
          <li
            className="my-4 px-4 border-2 rounded-lg"
            key={index}
          >
            {element}
          </li>
        ))}
        </ul>         */}
     </>
  )
}

export default Stove