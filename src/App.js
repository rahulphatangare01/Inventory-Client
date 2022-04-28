import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import BusniessInfo from "./component/home/BusniessInfo"
import BussinessTable from './component/home/BussinessTable';
import Buyer from "./component/home/Buyer"
import LoginCompo from "./component/home/LoginCompo"
import MainContainer from "./component/home/MainContainer"
import Order from "./component/home/Order"
import ProductInfo from "./component/home/Product"
import ProductTable from './component/home/ProductTable';
import PurchaseInfo from "./component/home/PurchaseInfo"
import Sell from "./component/home/Sell"
import SignCompo from "./component/home/SignCompo"
import SuplierInfo from "./component/home/SuplierInfo"
import UpdateBusiness from './component/home/UpdateBusniess';
 

function App() {
  return (
   
<>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginCompo />} />
        <Route path="/signup" element={<SignCompo />} />
        <Route path ="/main" element = {<MainContainer/>}/>
        <Route path ="/product" element = {<ProductTable/>}/>
        <Route path ="/bussinessTable" element = {<BussinessTable/>}/>
        <Route path ="//updateBusiness/:id" element = {<UpdateBusiness/>}/>
        <Route path ="/BusniessInfo" element = {<BusniessInfo/>}/>




      </Routes>
    </BrowserRouter>
    

</>
   
  
 
  )
}

export default App
