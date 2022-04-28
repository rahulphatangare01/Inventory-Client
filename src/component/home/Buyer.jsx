import React, { useState } from 'react'
import { Grid, Paper, TextField, Typography, Button } from '@mui/material'
import BusinessIcon from '@mui/icons-material/Business';
import axios from 'axios';

const Buyer = () => {
    const paperStyle = { height: "60vh", padding: "25px", margin: "3vh auto", width: "60vw" };
    const inputStyle = { padding: "10px" }
    const avatarStyle = { backgroundColor: "#68f79a", color: "#ffff", fontSize :"40px", borderRadius:"50px",padding:"8px"}


    const [buyerData, SetBuyerData] = useState({
        companyName: "",
        phone: "",
        ownerName: "",
        email:"",
        productName:"",
        stock:"",
        address: "",
        country:"",
        state:"",
        zip:"",
        pan:""
      });
    
      const handleChange =(e)=>{
        SetBuyerData({...buyerData, [e.target.name]:e.target.value})
      }

      const buyer_btn_submit = async() => {
        // create a config to send the auth token 
      const config = {
        headers: {
          //   /we are finding the token from localstorage 
          "Authorization": localStorage.getItem("token")
        },
      };
     
   // make sure the axios request should be  schyronous 
  await axios.post("http://localhost:8080/buyer/createbuyer",buyerData,config).then((res)=>{
        console.log(res.data)
  })
  
    };
    return (
        <Grid  >
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                    <BusinessIcon style={avatarStyle} />
                    <Typography variant="h5">
                    Buyer
                    </Typography>
                </Grid>
                <Grid align="center">
                    <div>
                        <TextField
                            required
                            id="outlined-required"
                            label="OwnerName"
                            style={inputStyle}
                            name='ownerName'
                            onChange={handleChange}
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Phone"
                            style={inputStyle}
                            name='phone'
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <TextField
                            required
                            id="outlined-required"
                            label="Email"
                            style={inputStyle}
                            name='email'
                            onChange={handleChange}
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Companyname"
                            style={inputStyle}
                            name='companyName'
                           onChange={handleChange}
                        />
                    </div>
                    <div>
                        <TextField
                            required
                            id="outlined-required"
                            label="ProductName"
                            style={inputStyle}
                            name='productName'
                            onChange={handleChange}
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Stock"
                            style={inputStyle}
                            name='stock'
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <TextField
                            required
                            id="outlined-required"
                            label="address"
                            style={inputStyle}
                            name='address'
                            onChange={handleChange}
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="country"
                            style={inputStyle}
                            name='country'
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <TextField
                            required
                            id="outlined-required"
                            label="state"
                            style={inputStyle}
                            name='state'
                           onChange={handleChange}
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="zip"
                            style={inputStyle}
                            name='zip'
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <TextField
                            required
                            id="outlined-required"
                            label="pan"
                            style={inputStyle}
                            name='pan'
                            onChange={handleChange}
                        />
                          </div>

                    <Button variant="contained" onClick={buyer_btn_submit} >Submit</Button>
                </Grid>
            </Paper>

        </Grid>
    )
}

export default Buyer;