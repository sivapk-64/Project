import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
const NavtoHome = () => {
    const navigate=useNavigate();
     const navigatetohome=()=>{
      navigate("/");}
  return (
    <Button onClick={navigatetohome} variant="contained" sx={{height:"40px", background:"black", fontFamily:"inherit" ,backgroundColor:"white" , color:"black",marginRight:"10px",marginLeft:"0px"}}  >
         Home
      </Button>
  )
}

export default NavtoHome