import React from 'react'
import BusniessInfo from './BusniessInfo'
import Order from './Order'

const Home = () => {
  return (
    <div style={{ height:"80vh",width:"60vw",margin:"auto"}}>
        <Order/>
        <BusniessInfo/>
    </div>
  )
}

export default Home