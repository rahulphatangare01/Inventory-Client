import React, { useEffect, useState } from 'react'
import { TableContainer,Table,TableHead,TableBody,TableRow,TableCell,Paper} from '@mui/material'
import {  Button } from '@mui/material'

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom';
import MainContainer from './MainContainer';
import Sidenav from '../navigation/Sidenav';
import Headnav from '../navigation/Headnav';


function BussinessTable() {


    const [data, SetData] =useState([])
// const data =[
//     {
//         companyName:"Tata",
//         phone:"1234512345",
//         ownerName:"Ratan Tata Sir",
//         email:"tataG@gmail.com",
//         address:"at.post-pune,pune",
//         country:"India",
//         state:"Maharastra",
//         zip:"123456",
//         pan:"cvhp12cb"
        
//     }
// ]
const navigate = useNavigate()


const  createBusiness =()=>{
    navigate('/BusniessInfo')
   }

   const editBusiness =(index,ele)=>{
       navigate('/updateBusiness')
       console.log(index,ele)
   }
   
   
   const config = {
    headers: {
      //   /we are finding the token from localstorage 
      "Authorization": localStorage.getItem("token")
    },
  };
 


   axios.get('http://localhost:8080/business/getbusniess/',config).then((res)=>{
       SetData(res.data)
   })
   

  return (
      <>
      <Headnav/>
      <Sidenav/>

    <h2  align='center' >Business Data Table</h2> 
    <div style={{textAlign:"right" ,marginRight:"30px"}}>
    <Button variant="contained" onClick={ createBusiness} >
   Add Business</Button>
    </div>
    <TableContainer component={Paper}
    sx={{ maxHeight: '300px', marginTop:"30px"}} >
        <Table aria-label='simple table' stickyHeader>
    
    
    

            <TableHead > 
           

         

                <TableRow>
                   <TableCell align='center'>companyName</TableCell>  
                   <TableCell align='center'>phone</TableCell>  
                   <TableCell align='center'>ownerName</TableCell>  
                   <TableCell align='center'> email</TableCell>  
                   <TableCell align='center'> address</TableCell>  
                   <TableCell align='center'> country</TableCell>  
                   <TableCell align='center'> state</TableCell>  
                   <TableCell align='center'>  zip</TableCell>  
                   <TableCell align='center'>  pan</TableCell> 
                   <TableCell align='center'> Actions</TableCell>  



                   

                </TableRow>
            </TableHead>
            <TableBody>
               
               {
               data.map((ele,index)=>{
                   return(
                    <TableRow key= {ele.id}
            sx = {{ '&:last-child td, &:last-chid th':{border:0}}}
            >
            <TableCell align='center'> {ele.companyName}</TableCell>
            <TableCell align='center'> {ele.phone}</TableCell>
            <TableCell align='center'> {ele.ownerName}</TableCell>
            <TableCell align='center'> {ele.email}</TableCell>
            <TableCell align='center'> {ele.address}</TableCell>
            <TableCell align='center'> {ele.country}</TableCell>
            <TableCell align='center'> {ele.state}</TableCell>
            <TableCell align='center'> {ele.zip}</TableCell>
            <TableCell align='center'> {ele.pan}</TableCell>
            <TableCell align='center'> 
            {/* <EditIcon   onClick={()=>editBusiness(index,ele)} /> */}
            <Link to={`edit/${ele.id}`} > 
            <EditIcon/>
            </Link>

            <DeleteIcon/>
            </TableCell>



            </TableRow>
                   )
               })   
              }  
                
               
              
            </TableBody>
        </Table>
    </TableContainer>

    </>
  )
}

export default BussinessTable