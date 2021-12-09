import React, { useState } from "react"
import { useMutation } from "@apollo/client"
import { LOGIN_USER } from "../../utils/mutations"
import Auth from "../../utils/auth"
import { FormGroup } from '@mui/material'
import FormHelperText from "@mui/material/FormHelperText"
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
// import './Login.css';

export default function LoginComp({flipChange}) {
    const [loginState, setLoginState] = useState({ email: "", password: "" });
    const [login, { error, data }] = useMutation(LOGIN_USER);

    const handleChange = (event) => {
        const { name, value } = event.target;
    
        setLoginState({
            ...loginState,
            [name]: value,
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await login({
            variables: { ...loginState },
        });
    
            Auth.login(data.login.token);
        } catch (e) {
            console.error(e);
        }
    
        // clear form values
        setLoginState({
            email: "",
            password: "",
        });
    };
    return (
        <div className="front loginCard" >
            {data ? (
            <p>
                Success!
            </p>
        ) : (
            <FormGroup className='form-containerCustom'>
                <FormLabel align="center" fontFamily="Source San Pro" fontStyle="italic" className='labelFont'>
                    Log in to make Orders!
                </FormLabel>
                <div className='emailCustom'>
                <InputLabel htmlFor="my-input" className='labelFont'>
                    Email
                </InputLabel>
                <Input 
                    id="email" 
                    aria-describedby="my-helper-text"
                    name='email'
                    type='email'
                    value={loginState.email}
                    onChange={handleChange}
                    className='inputField'
                />
                </div>
            <div className='passwordCustom'>
                <InputLabel htmlFor="my-input" className='labelFont'>
                    Password
                </InputLabel>
                <Input 
                    id="password" 
                    required={true} 
                    aria-describedby="my-helper-text" 
                    name='password'
                    type='password'
                    onChange={handleChange}
                    value={loginState.password}
                    className='inputField'
                />
                <FormHelperText id="password helper" className='helperFont'>
                    Forgot your password?
                </FormHelperText>
                </div>
                <Button 
                variant="contained" 
                type="submit"
                onClick={handleFormSubmit}
                style={{marginTop: '5vh', width: '35%', maxWidth: '175px', alignItems: 'center',}}
                className='labelFont'>
                    Login
                </Button>
                <p align="center" className="labelFont">
                Don't have an account?{" "}
                <Button onClick={flipChange} className="labelFont">Sign Up</Button>
                </p>
            </FormGroup>
            )}
            {error && (
            <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
            )}
        </div>
    );
    }
