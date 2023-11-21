import  Button from "@mui/material/Button";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Search from "@mui/icons-material/Search";
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";
import { IconButton, Stack } from "@mui/material";
const Searchbar = () => {
    const Fruits=["Stove","Washing Machine","Fridge","Refrigerator","Microwave Oven","Cloth dryer","Induction Cooker","Heater","Air Conditioner","Television","Toaster","Dish Washers","Radiators","Mixers","Crock Pots","Pans","Iron Box","Kettles","Fans","Vacuum cleaners","Air Purifier","Torch","Lantern","Sewing Machine","Humidifiers","Air Fryer","Blender","Coffee maker","Freezers","Ice Maker","Laptop","Printer","Cassette","Pendrive","Chip","Speakers","Headphone","Bluetooth","Mouse","Monitor","Keyboard","Lights","Blubs"]
    
  
    return (
      <Stack direction="row" sx={{display:"flex",justifyContent:"space-between",justifyItems:"center",alignContent:"space-between",alignItems:"center"}}>

            <Autocomplete 
      disablePortal
      id="combo-box-demo"
      options={Fruits}
      sx={{ width: 300 ,borderBlockColor:"black",marginLeft:"40px",color:"white",marginTop:"3px" ,outlineStyle:"none"}}
      renderInput={(params) => <TextField  sx={{color:"white",borderBlockColor:"black",borderRadius:"3px",backgroundColor:"white",outlineColor:"black"}}{...params} label="Search" />}
      /> 
       
      <IconButton
      size="large"
      edge="start"
      color="inherit"
      aria-label="open drawer"
      sx={{ mr: 2 ,marginLeft:"5px"}}>
                <SearchIcon/>
      </IconButton>
    </Stack>
   );
  };
  export default Searchbar;