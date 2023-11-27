import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import PrimarySearchAppBar from "./PrimarySearchAppBar";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

import NavtoHome from "./NavtoHome";
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Demand Zone
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function NewLogin() {
  let mymail = "";
  let mypswrd = "";
  let fill=false;
  const nameRef=React.useRef();
  const passRef=React.useRef();
  const [nameFound, setnameFound] = React.useState(true);
  const [passFound, setpassFound] = React.useState(true);
  const [Filled, setFilled] = React.useState(false);
  const navigate = useNavigate();
  const navtohome = (mail, checkpass) => {
    //  const[users,setusers]=React.useState([]);
    navigate("/");
  };
  const navtolog = () => {
    navigate("/signup");
  };
  const ValidLogin = () => {
    if (nameRef.current.value.trim()) {
      fill=true;
    }else{
       fill=false
    }
    if (fill===true) {
      axios.get(`http://localhost:8081/users?email=${nameRef.current.value}`).then((res) => {
        if (res.data[0]) {
          setnameFound(true);
          mymail = res.data[0].email;
          mypswrd = res.data[0].password;
          if (passRef.current.value === mypswrd) {
            navigate("/");
          } else {
            alert("Wrong Email/Password");
            setpassFound(false);
            navigate("/login");
          }
         }
  
  })
    
    }
    }
  return (
    <>
      <PrimarySearchAppBar />
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs" sx={{ bgcolor: "#eed9a9" }}>
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "success.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Log in
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                inputRef={nameRef}
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
              inputRef={passRef}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                onClick={ValidLogin}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <p style={{ marginTop: "15px" }}>Already hava an acc?</p>
                <Button sx={{ marginLeft: "5px" }} onClick={navtolog}>
                  Signup
                </Button>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
    </>
  );
}
