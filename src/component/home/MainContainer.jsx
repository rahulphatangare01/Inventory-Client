import * as React from "react";
import Box from "@mui/material/Box";
import Sidenav from "../navigation/Sidenav";
import Headnav from "../navigation/Headnav";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import SignCompo from "./component/home/SignCompo"
import LoginCompo from "./LoginCompo"
import Home from "./Home";



export default function MainContainer() {
  return (
    <>
    {/* remove Headnav  */}
      <Headnav />
      <Box sx={{ width: 1 }}>
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)">
          <Box gridColumn="span 4">
          {/*  sidnav convert in to sidebar with funtionally */}
            <Sidenav />               
          </Box>
          <Box gridColumn="span 8" style={{"marginTop":65}}>
            <Home/>
          </Box>
        </Box>
      </Box>
       
    </>
  );
}
