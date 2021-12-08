// import React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Signup from '../components/Signup'

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const theme = createTheme();

// export default function SignIn() {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     // eslint-disable-next-line no-console
//     console.log({
//       email: data.get('email'),
//       password: data.get('password'),
//     });
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign in
//           </Typography>
//           <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               label="Email Address"
//               name="email"
//               autoComplete="email"
//               autoFocus
//             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//             />
//             <FormControlLabel
//               control={<Checkbox value="remember" color="primary" />}
//               label="Remember me"
//             />
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//             >
//               Sign In
//             </Button>
//             <Grid container>
//               <Grid item xs>
//                 <Link href="#" variant="body2">
//                   Forgot password?
//                 </Link>
//               </Grid>
//               <Grid item>
//                 <Link href="Signup" variant="body2">
//                   {"Don't have an account? Sign Up"}
//                   <Signup flipchange={flipchange}/>
//                 </Link>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//         <Copyright sx={{ mt: 8, mb: 4 }} />
//       </Container>
//     </ThemeProvider>
//   );
// }

import React, { useState } from "react";
import Auth from "../utils/auth";
// import LoginComp from "../components/Login";
import Signup from "../components/Signup";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Grid } from "@mui/material";
import "./Login.css";

export default function Login() {
  const [flipState, setFlipState] = useState("content");

  const flipChange = (event) => {
    if (flipState === "content") {
      setFlipState("content contentTwo");
    } else {
      setFlipState("content");
    }
  };
  console.log(Auth.isLoggedIn());
  if (Auth.isLoggedIn()) {
    return "You've been logged in!"
  }

  return (
    <Box
      sx={{
        display: "grid",
        gridAutoColumns: "1fr",
        gap: 3,
        alignItems: "center",
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid container className="login-signupContainer">
          <Paper elevation={6} className="login-signupCard">
            <h2
              align="center"
              className='titleFont'
            >
              Please login or create an account before proceeding!
            </h2>
            <Grid item className="flippyCard">
              {/* {renderState.comp ? <LoginComp /> : <Signup />}
              {renderState.comp ? (
                <p align="center" className='front'>
                  Don't have an account?{" "}
                  <Button onClick={handleChange}>Sign Up</Button>
                </p>
              ) : (
                <p align="center" className='back'>
                  Already have an account?{" "}
                  <Button onClick={handleChange}>Log In</Button>
                </p>
              )} */}
              <div className={flipState}>
                {/* {<LoginComp flipChange={flipChange}/>} */}
                <Signup flipChange={flipChange}/>
              </div>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}