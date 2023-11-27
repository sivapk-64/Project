import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';
export default function Login() {
  const [open, setOpen] = React.useState(false);

  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <React.Fragment>
      <Button variant="contained" sx={{height:"40px",background:"black", marginRight:"20px",fontFamily:"inherit" ,backgroundColor:"white" , color:"black" ,marginRight:"5px"}}  onClick={handleClickOpen}>
         About Us
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle >About Us</DialogTitle>
        <DialogContent>
          <DialogContentText>
          <p>
        Welcome to our Appliances Booking System, where convenience meets efficiency!
        We take pride in simplifying your life by providing a seamless platform to
        book a wide array of appliances, ranging from laptops to washing machines and stoves.
      </p>
      <p>
        Our mission is to redefine the way you acquire essential home appliances,
        ensuring a hassle-free and user-friendly experience. With a commitment to
        innovation and customer satisfaction, we strive to be your go-to destination
        for all your appliance needs.
      </p>
      <p>
        Whether you're looking to upgrade your technology or enhance your kitchen,
        our platform is designed to cater to your diverse requirements.
        Experience the future of appliance acquisition with us – where modern living
        meets cutting-edge convenience.
      </p>
          </DialogContentText>
         </DialogContent>
       
      </Dialog>
    </React.Fragment>
  );
}