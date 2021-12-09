import React, { useState } from "react";
import Auth from "../utils/auth";
// import LoginComp from "../components/Login";
import "./Login.css";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import { useHistory } from "react-router-dom";
import logo from "../images/pho.jpg";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { styled } from "@mui/material/styles";


export default function LOGIN(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);
  const history = useHistory()
  console.log(login, { error });
  console.log('create data');
  

  const handleFormSubmit = async (event) => {
    console.log('default??')
    event.preventDefault();
    console.log('submit')
    try {
      console.log(formState)
      const mutationResponse = await login({
        variables: { ...formState },
      });
      const token = mutationResponse.data.login.token;
      localStorage.setItem("username", `${mutationResponse.data.login.user.username}`);
      console.log(mutationResponse);
      console.log(token);
      Auth.login(token);
      
      history.push("/Entrees")
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const Img = styled("img")({
    display: "block",
    maxWidth: "200px",
  });

  return (

<Box
      sx={{
        marginTop: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >  
      <Img alt="logo" src={logo} />
      <Typography component="h1" variant="h5">
        Please sign in
      </Typography>
      <Box  noValidate sx={{ mt: 1 }}>
        <FormControl component="form" onSubmit={handleFormSubmit}>
        <TextField
          className="form=input"
          fullWidth
          label="Email Address"
          name="email"
          value={formState.email}
          onChange={handleChange}
        />
        <TextField
          className="form-input"
          margin="normal"
          fullWidth
          name="password"
          label="Password"
          type="password"
          value={formState.password}
          onChange={handleChange}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mb: 2, cursor:'pointer' }}
        >
          Sign In
        </Button>
        </FormControl>
      </Box>
    </Box>

  );
}





// export default function Login() {
//   const [flipState, setFlipState] = useState("content");

//   const flipChange = (event) => {
//     if (flipState === "content") {
//       setFlipState("content contentTwo");
//     } else {
//       setFlipState("content");
//     }
//   };
//   if (Auth.isLoggedIn()) {
//     return <Entrees/>;
//   }

//   return (
//     <Box
//       sx={{
//         display: "grid",
//         gridAutoColumns: "1fr",
//         gap: 3,
//         alignItems: "center",
//       }}
//     >
//       <Grid
//         container
//         direction="row"
//         justifyContent="center"
//         alignItems="center"
//       >
//         <Grid container className="login-signupContainer">
//           <Paper elevation={6} className="login-signupCard">
//             <h2
//               align="center"
//               className='titleFont'
//             >
//               Please login or create an account before proceeding!
//             </h2>
//             <Grid item className="flippyCard">
//               <div className={flipState}>
//                 {<LoginComp flipChange={flipChange}/>}
//               </div>
//             </Grid>
//           </Paper>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }































// SIgnup.js


// import React, { useState } from "react";
// // import ReactDOM from 'react-dom';
// import { useMutation } from '@apollo/client';
// // import from material
// import { FormGroup } from '@mui/material';
// import FormHelperText from '@mui/material/FormHelperText';
// import Input from '@mui/material/Input';
// import InputLabel from '@mui/material/InputLabel';
// // import OutlinedInput from '@mui/material/OutlinedInput';
// import FormLabel from '@mui/material/FormLabel';
// import Button from '@mui/material/Button';
// // import from utils
// import { ADD_USER } from '../utils/mutations';
// import Auth from '../utils/auth';



// export default function SignUp({flipChange}) {

// //create a state to keep track of form values

//     const [formState, setFormState] = useState({ 
//         username: '', 
//         email: '', 
//         password: '' });

//     const [addUser] = useMutation(ADD_USER);

//     // attempt to create the user token
//     const clickHandler = async (event)=>{
//         // console.log('clickHandler being hit')
//         event.preventDefault();
//         try {
//             const { data } = await addUser({
//               variables: { ...formState },
//             });
      
//             Auth.login(data.addUser.token);
//           } catch (e) {
//             console.error(e);
//           }
//         };

//     // set the state to reflect whatever is in the input fields
//     const changeHandler = (event)=> {
//         const { name, value } = event.target;
    
//         setFormState({
//             ...formState,
//             [name]: value,
//         });
//         console.log(formState)
//     };

//     return (
//     <div className="back signupCard">
//         <FormGroup className='form-containerCustom'>
//             <FormLabel align="center" fontFamily="Source San Pro" fontStyle="italic" className='labelFont'>
//             </FormLabel>
//             <div className='emailCustom'>
//                 <InputLabel htmlFor="my-input" className='labelFont'>
//                     Email
//                 </InputLabel>
//                 <Input 
//                     id="email"
//                     aria-describedby="my-helper-text"
//                     name='email'
//                     type='email'
//                     value={formState.email}
//                     onChange={changeHandler}
//                     className='inputFeild'
//                 />
//                 <FormHelperText id="email helper" className='helperFont'>
//                     Please Enter a Valid Email Address!
//                 </FormHelperText>
//             </div>
//             <div className='usernameCustom'>
//                 <InputLabel htmlFor="my-input" className='labelFont'>
//                     Username
//                 </InputLabel>
//                 <Input 
//                     id="username" 
//                     required={true} 
//                     aria-describedby="my-helper-text"
//                     name='username'
//                     type='text'
//                     onChange={changeHandler}
//                     value={formState.username}
//                     className='inputFeild'
//                 />
//                 <FormHelperText id="username helper" className='helperFont'>
//                     Please Enter a Valid Username!
//                 </FormHelperText>
//             </div>
//             <div className='passwordCustom'>
//                 <InputLabel htmlFor="my-input" className='labelFont'>
//                     Password
//                 </InputLabel>
//                 <Input 
//                     id="password" 
//                     required={true} 
//                     aria-describedby="my-helper-text" 
//                     name='password'
//                     type='password'
//                     onChange={changeHandler}
//                     value={formState.password}
//                     className='inputFeild'
//                 />
//                 <FormHelperText id="password helper" className='helperFont'>
//                     Please enter a valid alphanumeric password!
//                 </FormHelperText>
//             </div>
//             <Button 
//                 variant="contained" 
//                 type="submit"
//                 onClick={clickHandler}
//                 style={{marginTop: '5vh', width: '35%', maxWidth: '175px', alignItems: 'center',}}>
//                   Sign Up
//             </Button>
//             <p align="center" className="labelFont">
//                 Already have an account?{"/SignUp"}
//                 <Button onClick={flipChange} className="labelFont">Log In</Button>
//             </p>
//         </FormGroup>
//     </div>);
// };