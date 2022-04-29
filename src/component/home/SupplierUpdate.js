import React, { useState } from 'react'
import { Grid, Paper, TextField, Typography, Button } from '@mui/material'
import BusinessIcon from '@mui/icons-material/Business';
import {Link,useParams,useNavigate} from "react-router-dom"

import axios from 'axios';

import MainContainer from './MainContainer';

const SuplierInfo = () => {
   const {id}=useParams()

    const paperStyle = { height: "83vh", padding: "25px", margin: "3vh auto", width: "60vw" };
    const inputStyle = { padding: "10px" }
    const avatarStyle = { backgroundColor: "#68f79a", color: "#ffff", fontSize :"40px", borderRadius:"50px",padding:"8px"}

    const [suplierInfoData, SetSuplierInfoData] = useState({
        companyName: "", phone: "",ownerName: "",
        email:"",address: "",country:"",state:"",
        zip:"", pan:"" 
      });
      const navigate = useNavigate()
      const [data, SetData] =useState([])

      const  suplierInfo_getuser =()=>{
        navigate('/supliertable')
       }
         const handleChange =(e)=>{
           SetSuplierInfoData({...suplierInfoData, [e.target.name]:e.target.value})
         }
         const suplierInfo_btn_submit = async() => {
            // create a config to send the auth token 
          const config = {
            headers: {
              //   /we are finding the token from localstorage 
              "Authorization": localStorage.getItem("token")
            },
          };
        await axios.get(`http://localhost:8080/supplier/getsupplier/${id}`,config).then((res)=>{
             SetData(res.data)
         
            
        })
       // make sure the axios request should be  schyronous 
        axios.put("http://localhost:8080/supplier/updatesupplier/",suplierInfoData,config).then((res)=>{
            console.log(res.data)
      })
        };
   

    

   
    return (
        <Grid  >
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                    <BusinessIcon style={avatarStyle} />
                    <Typography variant="h5">
                    SuplierInfo
                    </Typography>
                </Grid>
                <Grid align="center">
                    <div>
                        <TextField
                            required
                            id="outlined-required"
                            label="Companyname"
                            style={inputStyle}
                            name='companyName'
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
                            label="Ownername"
                            style={inputStyle}
                            name='ownerName'
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <TextField
                            required
                            id="outlined-required"
                            label="Address"
                            style={inputStyle}
                            name='address'
                            onChange={handleChange}
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Country"
                            style={inputStyle}
                            name='country'
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <TextField
                            required
                            id="outlined-required"
                            label="State"
                            style={inputStyle}
                            name='state'
                            onChange={handleChange}
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Pan"
                            style={inputStyle}
                            name='pan'
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <TextField
                            required
                            id="outlined-required"
                            label="zip code"
                            style={inputStyle}
                            name='zip'
                            onChange={handleChange}
                        />
                      
                    </div>
                    <Button variant="contained" onClick={suplierInfo_btn_submit}  >Add Suplier</Button>
         <Button variant="contained" onClick={suplierInfo_getuser} > get Supplier</Button>

                </Grid>
            </Paper>

        </Grid>
    )
}

export default SuplierInfo;