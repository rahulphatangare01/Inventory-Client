import React, { useEffect, useState } from 'react'
import { TableContainer,Table,TableHead,TableBody,TableRow,TableCell,Paper} from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Search } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom';

// import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function ProductTable() {


     const data =[ {

        name: "ram",
    quantity: "1",
    price: "1",
    modelNo: "AC102",
    },
    {

name: "ramdas",
quantity: "1",
price: "1",
modelNo: "AC1002",
},
{

name: "sham",
quantity: "1",
price: "1",
modelNo: "AC1012",
}]
    // const handleTableget =()=>{
        // const  [data ,SetData]= useState([])
        // useEffect(()=>{
        //     getuser()
        // })

        // async function getuser(){
        //     try{
        //         const res=await axios.get("http://localhost:8080/product/getproduct")
        //   SetData(res.data)
        //     }catch(error){
        //        console.log(" data is not found")
        //     }
          
        // }
    
  
  return (

    <TableContainer component={Paper}
    sx={{ maxHeight: '300px'}} >
        <Table aria-label='simple table' stickyHeader>
    
            <TableHead > 
                    <h2  align='center' >Product Data Table</h2> 
                <TableRow>
                   <TableCell align='center'>name</TableCell>  
                   <TableCell align='center'>quantity</TableCell>  
                   <TableCell align='center'>price</TableCell>  
                   <TableCell align='center'>modelNo</TableCell> 
                   <TableCell align='center'>options</TableCell>  
                </TableRow>
            </TableHead>
               <TableBody>
               
               {
               data.map((ele)=>{
                   return(
                    <TableRow key= {ele.id}
            sx = {{ '&:last-child td, &:last-chid th':{border:0}}}
            >
            <TableCell align='center'> {ele.name}</TableCell>
            <TableCell align='center'> {ele.quantity}</TableCell>
            <TableCell align='center'> {ele.price}</TableCell>
            <TableCell align='center'> {ele.modelNo}</TableCell>
            <TableCell align='center' > 
             <EditIcon/>
             <DeleteIcon/>
            </TableCell>

            </TableRow>
                   )
               })   
              }  
                
               
              
            </TableBody>
        </Table>
    </TableContainer>
  )
}

export default ProductTable