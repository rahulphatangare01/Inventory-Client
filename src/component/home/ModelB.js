
import  React,{useState} from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, Paper, TextField} from '@mui/material'
import BusinessIcon from '@mui/icons-material/Business';
import axios from 'axios';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  height: "70vh",
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ModalB() {

    
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
   

    
  
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


    const [data, SetData] =React.useState([])
  
 
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
  
 // make sure the axios request should be  schyronous 
  axios.put("http://localhost:8080/business/updatebusiness/",busniessInfoData,config).then((res)=>{
      console.log(res.data)
})

    

   
  };

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        
      >
        <Fade in={open}>
          <Box >
          
          <Grid  >
 <Paper elevation={10}  sx={style}>
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
         {/* <Button variant="contained"  style={{marginRight:'10px'}} onClick={busniessInfo_btn_submit} >Add Business</Button> */}
         {/* <Button variant="contained" onClick={busniessInfo_getuser} > get Business</Button> */}

     </Grid>
 </Paper>

</Grid>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
