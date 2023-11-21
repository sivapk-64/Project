import { Box, Typography } from '@mui/material'
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
function Footer() {
  return (
     <>
     <Box sx={{textAlign:"center",bgcolor:"black",color:"white",p:3}}>
         <Typography sx={{marginLeft:"0px",marginRight:"340px",fontSize:"20px"}}><u>Connect with us:</u></Typography>
        <Box
        sx={{my:3,"& svg": {fontSize:"70px", mr:1},
        "& svg: hover":{color:"gold"}
        }}
        >
            <FacebookIcon/>
            <InstagramIcon/>
            <TwitterIcon/>
            <GitHubIcon/>
            <YouTubeIcon/>
        </Box>
        <Typography varient="h5" sx={{fontSize:"20px",fontFamily:"bold"}}>
            All Rights Reserved &copy; SSS website !!!
        </Typography>
     </Box>
     </>
  )
}

export default Footer