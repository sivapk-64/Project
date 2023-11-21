import React from 'react'
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import { Washlist } from './Datawash'
function Laptop() {
 
    return (
    
        <Box sx={{display:"flex",flexWrap:"wrap",justifyContent:"center" ,paddingTop:17}}>
         {
             Washlist.map((menu1) =>(
               <Card sx={{maxWidth:450,display:'flex',m: 2}}>
                 <CardActionArea>
                   <CardMedia sx={{minHeight: '500px'}} component={'img'} src={menu1.image} alt={menu1.name}/>
                   <CardContent>
                     <Typography varient ='h5' gutterBottom>
                       {menu1.name}
                     </Typography>
                     <Typography varient="body2">
                       {menu1.description}
                     </Typography>
                   </CardContent>
                 </CardActionArea>
               </Card>
           ))
         }
        </Box>
     )
  
}

export default Laptop