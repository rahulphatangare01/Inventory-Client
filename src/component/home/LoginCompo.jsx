import React, { useState } from 'react'
import { Avatar, Grid, Paper, Typography, TextField, Button,  } from '@mui/material'
import LockOpenIcon from '@mui/icons-material/LockOpen';
import axios from 'axios';
import { useNavigate, } from 'react-router-dom';
import {   Link } from 'react-router-dom';


const LoginCompo = () => {
  const papreStyle = { padding: "20px", height: "70vh", width: "280px", margin: "30px auto" }
  const avatarStyle = { backgroundColor: "#68f79a" }
const navigate = useNavigate()
const [ signInData ,setSignInData] = useState({
  email:"",
  password:"",
})

  const handleChange =(e)=>{
    setSignInData({...signInData, [e.target.name]:e.target.value})
  }


  const handleSignin =()=>{
    axios.post('http://localhost:8080/auth/login',signInData).then((res)=>{
    //  console.log(res.data) 
    let response = res.data 
    // console.log(response.success )
    if(response.success === true){
      // console.log(response.authtoken)
      localStorage.setItem("token",response.authtoken)
      navigate('/main')
    }
    // if(res.success === false){
    //   console.log("error Please try to login with correct credentials")
    // }
    else{
      console.log("token not present")
    }
    })
  }
// console.log(signInData)




  return (
    <Grid>
      <Paper elevation={10} style={papreStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOpenIcon />
          </Avatar>
          <Typography variant="h6" style={{ marginTop: "10px" }}>
            Login Form
          </Typography>
        </Grid>
        <TextField id="standard-basic" label="Email" variant="standard" fullWidth name='email' onChange={handleChange} />
        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
          name='password'
          onChange={handleChange}
          fullWidth />


        <Grid align="Center" >
          <br />
          <Button variant="contained" fullWidth onClick={handleSignin}>Login</Button>
        </Grid>
        <br />
        <Typography>
          Don't have an account 
        
          <Link to="/signup">Signup</Link>
       
          
        </Typography>
      </Paper>
    </Grid>
  )
}

export default LoginCompo