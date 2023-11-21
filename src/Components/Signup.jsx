import React from 'react'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const navigate=useNavigate();
  const navigatetoSignup=()=>{
    navigate("/signup");
  }
  return (
    <div>
      <Button onClick={navigatetoSignup} variant="contained" sx={{height:"40px", background:"black", fontFamily:"inherit" ,backgroundColor:"white" , color:"black",marginRight:"10px",marginLeft:"3px"}}  >
         Sign Up
      </Button>
    </div>
  )
}

export default Signup