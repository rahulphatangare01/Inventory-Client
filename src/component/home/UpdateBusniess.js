import React, { useState } from 'react'
import { Grid, Paper, TextField, Typography, Button } from '@mui/material'
import BusinessIcon from '@mui/icons-material/Business';

 
import {Link,useParams,useNavigate} from "react-router-dom"
import axios from 'axios';
import MainContainer from './MainContainer';
const UpdateBusiness = () => {
   const {id}=useParams()
    
    const paperStyle = { height: "70vh", padding: "25px",  marginTop: "100px",  marginRight:"10%",width: "100vh" };
    const inputStyle = { padding: "10px" }
    const avatarStyle = { backgroundColor: "#68f79a", color: "#ffff", fontSize :"40px", borderRadius:"50px",padding:"8px"}
     
    const [busniessInfoData, SetBusniessInfoData] = useState({
        companyName: "",
        phone: "",
        ownerName: "",
        email:"",
        address: "",
        country:"",
        state:"",
        zip:"",
        pan:""
      });

      const navigate = useNavigate()
      const [data, SetData] =useState([])
    
    const  busniessInfo_getuser =()=>{
     navigate('/bussinessTable')
    }
      const handleChange =(e)=>{
        SetBusniessInfoData({...busniessInfoData, [e.target.name]:e.target.value})
      }

      const busniessInfo_btn_submit = async() => {
        // create a config to send the auth token 
      const config = {
        headers: {
          //   /we are finding the token from localstorage 
          "Authorization": localStorage.getItem("token")
        },
      };
    await axios.get(`http://localhost:8080/business/getbusniess/${id}`,config).then((res)=>{
         SetData(res.data)
     
        
    })
   // make sure the axios request should be  schyronous 
    axios.put("http://localhost:8080/business/updatebusiness/",busniessInfoData,config).then((res)=>{
        console.log(res.data)
  })
  
      
  
     // console.log(productData);
    };
    
   return (
       <>
       

    <Grid  >
 <Paper elevation={10} style={paperStyle}>
     <Grid align="center">
         <BusinessIcon style={avatarStyle} />
         <Typography variant="h5">
             Busniess Info
         </Typography>
     </Grid>
     <Grid align="center">
         <div>
             <TextField
                 required
                 id="outlined-required"
                 label="Companyname"
                 name='companyName'
                 onChange={handleChange}

                 style={inputStyle}
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
                 label="Ownername"
                 style={inputStyle}
                 name='ownerName'
                 onChange={handleChange}
             />
             <TextField
                 required
                 id="outlined-required"
                 label="Email"
                 style={inputStyle}
                 name='email'
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
                 label="Zip"
                 style={inputStyle}
                 name='zip'
                 onChange={handleChange}
             />
         </div>
         <div>
             <TextField
                 required
                 id="outlined-required"
                 label="Pan"
                 style={inputStyle}
                 name='pan'
                 onChange={handleChange}
             />
           
         </div>
         <Button variant="contained"  style={{marginRight:'10px'}} onClick={busniessInfo_btn_submit} >Add Business</Button>
         <Button variant="contained" onClick={busniessInfo_getuser} > get Business</Button>

     </Grid>
 </Paper>

</Grid>
</>
   )
 }
 
 export default UpdateBusiness