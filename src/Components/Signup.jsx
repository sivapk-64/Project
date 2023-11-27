import React from 'react'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Signup = (log) => {
  const navigate=useNavigate();
  const navigatetoSignup=()=>{
    navigate("/signup");
    // changeloguser(false)
  }
  return (
    <>
   
      <Button onClick={navigatetoSignup} variant="contained" sx={{height:"40px", background:"black", fontFamily:"inherit" ,backgroundColor:"white" , color:"black",marginRight:"10px",marginLeft:"3px"}}  >
         Sign Up
      </Button>
      {/* <Button onClick={()=>log=false} variant="contained" sx={{height:"40px", background:"black", fontFamily:"inherit" ,backgroundColor:"white" , color:"black",marginRight:"10px",marginLeft:"3px"}}  >
      Logout
   </Button> */}


    </>
  
  )
}

export default Signup