import * as React from 'react';
import '../Components/Sign.css'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Login from './Login';
import PrimarySearchAppBar from './PrimarySearchAppBar';
import axios from 'axios';
import NewLogin from './NewLogin';
import LoginButton from './LoginButton';
const defaultTheme = createTheme();
export default function SignupPage() {
  //Axios.get
  // const[users,setusers]=React.useState([]);
  // React.useEffect(()=>{
  // axios.get("http://localhost:8081/users").then(res=>setusers(res.data))
  // },[])
  //Axios.post
  const postvalues=()=>{
    // if(namee===""){
    //   setRegistrationSuccess(false)
    //  // alert("Name is empty");
    //   return;
    // }
    // if (!passwordRegex.test(passs)) {
    //   setRegistrationSuccess(false)
    //  // alert("Password length should be atleast 8 characters");
    //   return;
    // }
    // if (passs !== conf) {
    //   setRegistrationSuccess(false)
    //   //alert("Passwords don't match");
    //   return;
    // }
    // const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    axios.post("http://localhost:8081/users",{
      "name":namee,
      "email":emaill,
      "password":passs,
    }).then(res=>console.log(res));
    navigate("/");
  }
  // changeloguser(false);
  // const [passwordError, setPasswordError] = React.useState('');
   const [registrationSuccess, setRegistrationSuccess] = React.useState(false);
  const [namee,setnamee]=React.useState("")
  const[emaill,setemaill]=React.useState("");
  const[passs,setpasss]=React.useState("");
  const [conf,setconf]=React.useState("");
  const navigate=useNavigate();
  const paperedit={
    backgroundImage :' linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.7)),url(https://images.pexels.com/photos/1939485/pexels-photo-1939485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
    backgroundSize :'cover',
  };
  const back={
    backgroundImage:'https://static.vecteezy.com/system/resources/thumbnails/006/941/002/small/small-hexagon-shape-with-light-white-and-grey-color-seamless-pattern-background-free-vector.jpg',
    backgroundSize :'cover',
  }
  // const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  // if (!passwordRegex.test(passs)) {
  //   setPasswordError('Password must be at least 6 characters long and contain at least one letter and one number.');
  // } else {
  //   setPasswordError('');
  //   }

  // if (passs !== conf) {
  //   alert("Passwords don't match");
  //   return;
  // }

  //setRegistrationSuccess(true);
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // };
  return (
    <> 
    <PrimarySearchAppBar/> 
    <div style={{height:'400px' }}>
    <Grid align="center">
        <Paper elevation={3} sx={{width:500,borderRadius:"30px"}} style={paperedit}>
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5"  sx={{fontWeight: 'bold'}}>
            Sign up
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3}}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                value={namee}
                // ref={nameref}
                  
                  name="Namee"
                  required
                  fullWidth
                  id="Name"
                  label="Name"
                  onChange={(e)=>setnamee(e.target.value)}
                />
              </Grid>
              {/* <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid> */}
              <Grid item xs={12}>
                <TextField
               value={emaill}
               onChange={(e)=>setemaill(e.target.value)}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
               
              </Grid>
              <Grid item xs={12}>
                <TextField
                value={passs}
                onChange={(e)=>setpasss(e.target.value)}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                value={conf}
                onChange={(e)=>setconf(e.target.value)}
                  required
                  fullWidth
                  name="confirm password"
                  label="confirm Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
           <Button
            disabled={registrationSuccess}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={postvalues}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
              Already have an acc?
                  <Button sx={{fontSize:"10px"}} ><LoginButton/></Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  </Paper></Grid>
</div>
</>
);
}