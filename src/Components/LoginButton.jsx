import React from 'react'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from "./AuthContext";
import { useContext } from 'react';
const LoginButton = () => {
  const navigate=useNavigate();
  const navigatetonewlogin=()=>{
    navigate("/login");
  }
  return (
    
        <Button onClick={navigatetonewlogin} variant="contained" sx={{height:"40px", background:"black", fontFamily:"inherit" ,backgroundColor:"white" , color:"black",marginRight:"10px",marginLeft:"3px"}}  >
         Login
        </Button>
   
   
  )
}

export default LoginButton;