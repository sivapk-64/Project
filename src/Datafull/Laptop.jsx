import React from "react";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Laplist } from "./Datalap";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
function Laptop({count,setcount,cart,setcart,tprice,setprice}){
  // const handle=()=>{
  //   setcount(count+1);
  //   alert("added to the cart successfully")
  // }
  const solve=(myname,price)=>{
    setcount(count+1);
   setcart([...cart,myname]);
   setprice(tprice+price)
   alert("added to cart successfully!!!");
 };
  return (
    <>
      <Box sx={{ bgcolor: "black", color: "white", p: 2 }}>
        <Typography
          varient="h5"
          sx={{
            color: "white",
            textAlign: "center",
            fontFamily: "bold",
            fontSize: "30px",
          }}
        >
          <LaptopMacIcon sx={{ fontSize: "49px", paddingBottom: "10px" }} />{" "}
          LAPTOP
        </Typography>
        <Typography
          varient="h5"
          sx={{ color: "white", fontFamily: "bold", fontSize: "30px" }}
        >
          Sort by <ArrowDropDownIcon />
          <input style={{ borderRadius: "5px" }}></input>
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          paddingTop: 8,
        }}
      >
        {Laplist.map((menu) => (
          <Card sx={{ maxWidth: 450, display: "flex", m: 2 }}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "500px" }}
                component={"img"}
                src={menu.image}
                alt={menu.name}
              />
              <CardContent>
                <Typography varient="h5" gutterBottom>
                  <b>{menu.name}</b>
                </Typography>
                <Typography varient="body2">{menu.description}</Typography>
                <Typography>
                  <b>Rating</b> {menu.Rating}
                </Typography>
                <Typography varient="body2">
                  <b>Price:{menu.price}</b>
                  <Button sx={{ marginLeft: "200px" }} onClick={()=>solve(menu.name,menu.price)}>Add to Cart</Button>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </>
  );
}

export default Laptop;
