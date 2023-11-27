import { Box, IconButton, Typography } from '@mui/material'
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link, useNavigate } from 'react-router-dom';
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
            
            <Link to="https://www.facebook.com/">
                <FacebookIcon/>
            </Link>
            <Link to="https://www.instagram.com/sem/campaign/emailsignup/?campaign_id=13530338610&extra_1=s%7Cc%7C547419127631%7Ce%7Cinstagram%20%27%7C&placement=&creative=547419127631&keyword=instagram%20%27&partner_id=googlesem&extra_2=campaignid%3D13530338610%26adgroupid%3D126262414014%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-1321618851291%26loc_physical_ms%3D1007810%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=Cj0KCQiApOyqBhDlARIsAGfnyMpBlimlawDyTDiIncakvsLL4cIxE8VqWZoDXyXHrsrbZrHDuR3w7WsaAsY5EALw_wcB">
            <InstagramIcon/>
            </Link>
            <Link to="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D">
            <TwitterIcon/>
            </Link>
            <Link to="https://github.com/">
            <GitHubIcon/>
            </Link>
            <Link to="https://www.youtube.com/">
            <YouTubeIcon/>
            </Link>
        </Box>
        <Typography varient="h5" sx={{fontSize:"20px",fontFamily:"bold"}}>
            All Rights Reserved &copy; Demand Zone
        </Typography>
     </Box>
     </>
  )
}

export default Footer