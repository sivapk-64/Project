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
      <Button variant="contained" sx={{height:"40px",background:"black", fontFamily:"inherit" ,backgroundColor:"white" , color:"black" ,marginRight:"10px",marginLeft:"5px"}}  onClick={handleClickOpen}>
         Log In
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle >Login</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter the details Below!
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="User Name"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
           margin="dense"
            id="name"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button sx={{backgroundColor:"white" , color:"black"}} onClick={handleClose}>Login</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}