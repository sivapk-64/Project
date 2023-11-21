import React from 'react'
import Login from './Login'
import Signup from './Signup'
import About from './About'
import { Stack } from '@mui/material'
const NavBar = () => {
  return (
    <>
    <Stack >
   
    <Stack direction={'row-reverse'}   className='Nav'>
      
        <Login/>
        <Signup/>
    </Stack>
    </Stack>
    </>
  )
}

export default NavBar